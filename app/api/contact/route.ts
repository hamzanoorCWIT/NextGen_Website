import { NextResponse } from "next/server";
import { sendBrevoEmail } from "@/lib/brevo";
import {
  checkEmailRateLimit,
  checkIpRateLimit,
  checkOriginAllowlist,
  getClientIp,
  isHoneypotTriggered,
  isValidEmail,
  logContactError,
  readJsonBodyBounded,
  sanitizePlainTextField,
  sanitizeReplyToEmail,
  validateContactFieldLengths,
} from "@/lib/contact-security";
import { adminContactTemplate, userConfirmationTemplate } from "@/lib/contact-templates";

export const runtime = "nodejs";

type ContactBody = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  company?: unknown;
  message?: unknown;
  website?: unknown;
};

function asString(value: unknown): string {
  return typeof value === "string" ? value : "";
}

export async function POST(request: Request) {
  try {
    if (!checkOriginAllowlist(request)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const ip = getClientIp(request);
    const ipLimit = checkIpRateLimit(ip);
    if (!ipLimit.ok) {
      return NextResponse.json(
        { error: "Too many requests" },
        { status: 429, headers: { "Retry-After": String(ipLimit.retryAfterSec) } },
      );
    }

    let body: ContactBody;
    try {
      body = (await readJsonBodyBounded(request)) as ContactBody;
    } catch (error) {
      const status = (error as Error & { status?: number }).status;
      if (status === 413) {
        return NextResponse.json({ error: "Payload too large" }, { status: 413 });
      }
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }

    const website = body.website;
    if (isHoneypotTriggered(website)) {
      return NextResponse.json(
        {
          success: true,
          message: "Email sent successfully",
          confirmationEmailSent: false,
        },
        { status: 200 },
      );
    }

    const lengths = validateContactFieldLengths({
      name: sanitizePlainTextField(asString(body.name)),
      email: sanitizePlainTextField(asString(body.email)).toLowerCase(),
      phone: sanitizePlainTextField(asString(body.phone)),
      company: sanitizePlainTextField(asString(body.company)),
      message: sanitizePlainTextField(asString(body.message)),
    });

    if (!lengths.name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }
    if (!lengths.email || !isValidEmail(lengths.email)) {
      return NextResponse.json({ error: "A valid email is required" }, { status: 400 });
    }
    if (!lengths.phone) {
      return NextResponse.json({ error: "Phone is required" }, { status: 400 });
    }
    if (!lengths.company) {
      return NextResponse.json({ error: "Company is required" }, { status: 400 });
    }
    if (!lengths.message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const adminTo = process.env.TO_EMAIL?.trim().toLowerCase();
    if (!adminTo || !isValidEmail(adminTo)) {
      logContactError(new Error("TO_EMAIL missing or invalid"), "config");
      return NextResponse.json({ error: "Recipient email is not configured" }, { status: 500 });
    }

    const emailLimit = checkEmailRateLimit(lengths.email);
    if (!emailLimit.ok) {
      return NextResponse.json(
        { error: "Too many requests" },
        { status: 429, headers: { "Retry-After": String(emailLimit.retryAfterSec) } },
      );
    }

    const replyTo = sanitizeReplyToEmail(lengths.email);
    const admin = adminContactTemplate({
      name: lengths.name,
      email: lengths.email,
      phone: lengths.phone,
      company: lengths.company,
      message: lengths.message,
    });

    await sendBrevoEmail({
      to: adminTo,
      replyTo,
      subject: admin.subject,
      html: admin.html,
      text: admin.text,
    });

    let confirmationEmailSent = false;
    if (isValidEmail(lengths.email)) {
      try {
        const user = userConfirmationTemplate({ name: lengths.name });
        await sendBrevoEmail({
          to: lengths.email,
          subject: user.subject,
          html: user.html,
          text: user.text,
        });
        confirmationEmailSent = true;
      } catch (error) {
        logContactError(error, "confirmation");
      }
    }

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
      confirmationEmailSent,
    });
  } catch (error) {
    const status = (error as Error & { status?: number }).status;
    if (status === 413) {
      return NextResponse.json({ error: "Payload too large" }, { status: 413 });
    }
    logContactError(error, "send");
    return NextResponse.json({ error: "Failed to send email" }, { status: status && status >= 400 ? status : 500 });
  }
}
