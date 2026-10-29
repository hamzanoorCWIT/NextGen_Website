import { escapeHtml } from "@/lib/contact-security";

export function adminDemoTemplate(email: string, details?: { companySize: string; privacy: true }) {
  const source = details ? "request-demo page" : "website footer";
  const detailText = details ? `\nCompany size: ${details.companySize}\nPrivacy policy read: Yes` : "";
  const detailHtml = details ? `<p><strong>Company size:</strong> ${escapeHtml(details.companySize)}</p><p><strong>Privacy policy read:</strong> Yes</p>` : "";
  return {
    subject: "New EMS Demo Request",
    text: `New EMS demo request from the ${source}.\n\nEmail: ${email}${detailText}\n\nPlease contact this visitor to arrange an EMS demo.`,
    html: `<div style="font-family:Arial,sans-serif;color:#111;line-height:1.6"><h1>New EMS Demo Request</h1><p>A visitor requested to see EMS in action through the ${source}.</p><p><strong>Email:</strong> ${escapeHtml(email)}</p>${detailHtml}<p>Please contact this visitor to arrange an EMS demo.</p></div>`,
  };
}

export function demoConfirmationTemplate(companySize?: string) {
  const brand = process.env.BREVO_FROM_NAME?.trim() || "NextGen Contact Centre";
  return {
    subject: "We received your EMS demo request",
    text: `Thank you for your interest in EMS.\n\nWe received your demo request. Our team will contact you shortly to arrange a demo.${companySize ? `\n\nCompany size: ${companySize}` : ""}\n\n${brand}`,
    html: `<div style="font-family:Arial,sans-serif;color:#111;line-height:1.6"><h1>Thank you for requesting an EMS demo</h1><p>We received your demo request. Our team will contact you shortly to arrange a demo.</p>${companySize ? `<p><strong>Company size:</strong> ${escapeHtml(companySize)}</p>` : ""}<p>${escapeHtml(brand)}</p></div>`,
  };
}
