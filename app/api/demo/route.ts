import { NextResponse } from "next/server";
import { sendBrevoEmail } from "@/lib/brevo";
import {
  checkEmailRateLimit, checkIpRateLimit, checkOriginAllowlist, getClientIp,
  isHoneypotTriggered, isValidEmail, logContactError, readJsonBodyBounded,
} from "@/lib/contact-security";
import { adminDemoTemplate, demoConfirmationTemplate } from "@/lib/demo-templates";
import { companySizes } from "@/lib/demo-fields";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    if (!checkOriginAllowlist(request)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
    const ipLimit = checkIpRateLimit(getClientIp(request));
    if (!ipLimit.ok) {
      return NextResponse.json({ error: "Too many requests. Please try again later." }, {
        status: 429, headers: { "Retry-After": String(ipLimit.retryAfterSec) },
      });
    }

    let body: unknown;
    try {
      body = await readJsonBodyBounded(request);
    } catch (error) {
      const tooLarge = (error as Error & { status?: number }).status === 413;
      return NextResponse.json({ error: tooLarge ? "Payload too large" : "Invalid request body" }, { status: tooLarge ? 413 : 400 });
    }
    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }
    const fields = body as Record<string, unknown>;
    if (isHoneypotTriggered(fields.website)) {
      return NextResponse.json({ success: true, confirmationEmailSent: false });
    }
    const email = typeof fields.email === "string" ? fields.email.trim().toLowerCase() : "";
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "A valid email is required" }, { status: 400 });
    }
    if (fields.source !== undefined && fields.source !== "request-demo" && fields.source !== "footer") {
      return NextResponse.json({ error: "Invalid demo request source" }, { status: 400 });
    }
    const isRequestDemo = fields.source === "request-demo" || "companySize" in fields || "privacy" in fields;
    let details: { companySize: string; privacy: true } | undefined;
    if (isRequestDemo) {
      if (typeof fields.companySize !== "string" || !companySizes.includes(fields.companySize)) {
        return NextResponse.json({ error: "Please select a valid company size" }, { status: 400 });
      }
      if (fields.privacy !== true) {
        return NextResponse.json({ error: "Please confirm you have read the privacy policy" }, { status: 400 });
      }
      details = { companySize: fields.companySize, privacy: true };
    }
    const adminTo = process.env.TO_EMAIL?.trim().toLowerCase();
    if (!adminTo || !isValidEmail(adminTo)) {
      throw new Error("TO_EMAIL missing or invalid");
    }
    const emailLimit = checkEmailRateLimit(email);
    if (!emailLimit.ok) {
      return NextResponse.json({ error: "Too many requests. Please try again later." }, {
        status: 429, headers: { "Retry-After": String(emailLimit.retryAfterSec) },
      });
    }

    await sendBrevoEmail({ to: adminTo, replyTo: email, ...adminDemoTemplate(email, details) });
    let confirmationEmailSent = false;
    try {
      await sendBrevoEmail({ to: email, ...demoConfirmationTemplate(details?.companySize) });
      confirmationEmailSent = true;
    } catch (error) {
      // The team already received the request; do not encourage duplicate submissions.
      logContactError(error, "demo-confirmation");
    }
    return NextResponse.json({ success: true, confirmationEmailSent });
  } catch (error) {
    logContactError(error, "demo-send");
    return NextResponse.json({ error: "Failed to send demo request. Please try again." }, { status: 500 });
  }
}
