import { escapeHtml } from "@/lib/contact-security";

type AdminContactInput = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
};

type UserConfirmationInput = {
  name: string;
};

function siteBrand() {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || "").replace(/\/$/, "");
  const logoUrl = siteUrl ? `${siteUrl}/figma/logo.png` : "";
  const brandName = process.env.BREVO_FROM_NAME?.trim() || "NextGen Contact Centre";
  return { siteUrl, logoUrl, brandName };
}

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:10px 12px;border-bottom:1px solid #e6e8ee;color:#667085;font-size:14px;width:140px;vertical-align:top;">${label}</td>
      <td style="padding:10px 12px;border-bottom:1px solid #e6e8ee;color:#111111;font-size:14px;vertical-align:top;">${value}</td>
    </tr>
  `;
}

export function adminContactTemplate(input: AdminContactInput): { html: string; text: string; subject: string } {
  const name = escapeHtml(input.name);
  const email = escapeHtml(input.email);
  const phone = input.phone?.trim() ? escapeHtml(input.phone) : "Not provided";
  const company = input.company?.trim() ? escapeHtml(input.company) : "Not provided";
  const messageHtml = escapeHtml(input.message).replace(/\r\n|\n|\r/g, "<br />");

  const html = `
    <div style="font-family:Inter,Arial,sans-serif;background:#f7f7f8;padding:24px;">
      <div style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e6e8ee;">
        <div style="padding:24px 28px;border-bottom:1px solid #e6e8ee;">
          <h1 style="margin:0;font-size:22px;line-height:1.3;color:#111111;">New Contact Form Submission</h1>
          <p style="margin:8px 0 0;color:#667085;font-size:14px;">A new inquiry was submitted on the NextGen Contact Centre website.</p>
        </div>
        <div style="padding:8px 16px 20px;">
          <table style="width:100%;border-collapse:collapse;">
            ${row("Name", name)}
            ${row("Email", email)}
            ${row("Phone", phone)}
            ${row("Company", company)}
          </table>
          <div style="margin:20px 12px 8px;padding:16px;background:#f7f7f8;border-radius:12px;">
            <p style="margin:0 0 8px;color:#667085;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.04em;">Message</p>
            <p style="margin:0;color:#111111;font-size:15px;line-height:1.6;">${messageHtml}</p>
          </div>
        </div>
      </div>
    </div>
  `;

  const text = [
    "New Contact Form Submission",
    "",
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    `Phone: ${input.phone?.trim() || "Not provided"}`,
    `Company: ${input.company?.trim() || "Not provided"}`,
    "Message:",
    input.message,
  ].join("\n");

  return {
    subject: "New Contact Form Submission",
    html,
    text,
  };
}

export function userConfirmationTemplate(input: UserConfirmationInput): { html: string; text: string; subject: string } {
  const { siteUrl, logoUrl, brandName } = siteBrand();
  const name = escapeHtml(input.name);

  const logoBlock = logoUrl
    ? `<img src="${escapeHtml(logoUrl)}" alt="${escapeHtml(brandName)}" width="180" style="display:block;height:auto;max-width:180px;" />`
    : `<strong style="font-size:18px;color:#111111;">${escapeHtml(brandName)}</strong>`;

  const html = `
    <div style="font-family:Inter,Arial,sans-serif;background:#f7f7f8;padding:24px;">
      <div style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e6e8ee;">
        <div style="padding:24px 28px;border-bottom:1px solid #e6e8ee;">
          ${logoBlock}
        </div>
        <div style="padding:28px;">
          <h1 style="margin:0 0 12px;font-size:22px;line-height:1.3;color:#111111;">Thank you for contacting us</h1>
          <p style="margin:0 0 14px;color:#111111;font-size:15px;line-height:1.6;">Hi ${name},</p>
          <p style="margin:0 0 14px;color:#3a3a3a;font-size:15px;line-height:1.6;">
            We received your message and our team will get back to you shortly.
          </p>
          <p style="margin:0;color:#3a3a3a;font-size:15px;line-height:1.6;">
            In the meantime, you can continue exploring how CWIT EMS connects customer service, workflows, analytics, and operations.
          </p>
          ${
            siteUrl
              ? `<p style="margin:24px 0 0;"><a href="${escapeHtml(siteUrl)}" style="display:inline-block;background:#111111;color:#ffffff;text-decoration:none;padding:12px 20px;border-radius:999px;font-size:14px;font-weight:600;">Visit our website</a></p>`
              : ""
          }
        </div>
      </div>
    </div>
  `;

  const text = [
    `Hi ${input.name},`,
    "",
    "Thank you for contacting us. We received your message and our team will get back to you shortly.",
    "",
    siteUrl ? `Visit our website: ${siteUrl}` : "",
    "",
    `— ${brandName}`,
  ]
    .filter(Boolean)
    .join("\n");

  return {
    subject: "Thank You for Contacting Us",
    html,
    text,
  };
}
