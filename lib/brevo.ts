type SendBrevoEmailParams = {
  to: string;
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
};

function requireEnv(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`${name} is not configured`);
  }
  return value;
}

function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

function isEmailShape(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitizeSubject(subject: string): string {
  return subject.replace(/[\r\n]+/g, " ").trim().slice(0, 200);
}

function sanitizeDisplayName(name: string): string {
  return name.replace(/[\u0000-\u001F\u007F]/g, "").replace(/[\r\n]+/g, " ").trim().slice(0, 120);
}

export async function sendBrevoEmail(params: SendBrevoEmailParams): Promise<void> {
  const apiKey = requireEnv("BREVO_API_KEY");
  const fromEmail = normalizeEmail(requireEnv("BREVO_FROM_EMAIL"));
  if (!isEmailShape(fromEmail)) {
    throw new Error("BREVO_FROM_EMAIL is invalid");
  }

  const fromName = sanitizeDisplayName(process.env.BREVO_FROM_NAME?.trim() || "NextGen Contact Centre");
  const to = normalizeEmail(params.to);
  if (!isEmailShape(to)) {
    throw new Error("Recipient email is invalid");
  }

  let replyTo: string | undefined;
  if (params.replyTo) {
    const normalized = normalizeEmail(params.replyTo);
    if (isEmailShape(normalized)) {
      replyTo = normalized;
    }
  }

  const payload: Record<string, unknown> = {
    sender: { name: fromName, email: fromEmail },
    to: [{ email: to }],
    subject: sanitizeSubject(params.subject),
    htmlContent: params.html,
  };

  if (params.text) {
    payload.textContent = params.text;
  }
  if (replyTo) {
    payload.replyTo = { email: replyTo };
  }

  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Brevo API request failed (${response.status})`);
  }
}
