const FIELD_LIMITS = {
  name: 100,
  email: 254,
  phone: 40,
  company: 120,
  message: 5000,
} as const;

const MAX_BODY_BYTES = 32 * 1024;
const IP_WINDOW_MS = 15 * 60 * 1000;
const IP_MAX = 5;
const EMAIL_WINDOW_MS = 60 * 60 * 1000;
const EMAIL_MAX = 3;

type Bucket = { count: number; resetAt: number };

const ipBuckets = new Map<string, Bucket>();
const emailBuckets = new Map<string, Bucket>();

export function isValidEmail(email: string): boolean {
  const normalized = email.trim().toLowerCase();
  if (!normalized || normalized.length > FIELD_LIMITS.email) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized);
}

export function sanitizePlainTextField(value: string): string {
  return value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").trim();
}

export function sanitizeReplyToEmail(email: string): string | undefined {
  const normalized = email.trim().toLowerCase();
  return isValidEmail(normalized) ? normalized : undefined;
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function trimToMaxLength(value: string, max: number): string {
  return value.length <= max ? value : value.slice(0, max);
}

export function validateContactFieldLengths(fields: {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}): { name: string; email: string; phone: string; company: string; message: string } {
  return {
    name: trimToMaxLength(fields.name, FIELD_LIMITS.name),
    email: trimToMaxLength(fields.email, FIELD_LIMITS.email),
    phone: trimToMaxLength(fields.phone, FIELD_LIMITS.phone),
    company: trimToMaxLength(fields.company, FIELD_LIMITS.company),
    message: trimToMaxLength(fields.message, FIELD_LIMITS.message),
  };
}

export function getClientIp(request: Request): string {
  const trustProxy = process.env.TRUST_PROXY === "true" || process.env.TRUST_PROXY === "1";
  if (trustProxy) {
    const forwarded = request.headers.get("x-forwarded-for");
    if (forwarded) {
      const first = forwarded.split(",")[0]?.trim();
      if (first) return first;
    }
    const realIp = request.headers.get("x-real-ip")?.trim();
    if (realIp) return realIp;
  }
  return "unknown";
}

function takeToken(map: Map<string, Bucket>, key: string, max: number, windowMs: number): { ok: boolean; retryAfterSec: number } {
  const now = Date.now();
  const existing = map.get(key);
  if (!existing || existing.resetAt <= now) {
    map.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true, retryAfterSec: Math.ceil(windowMs / 1000) };
  }
  if (existing.count >= max) {
    return { ok: false, retryAfterSec: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)) };
  }
  existing.count += 1;
  map.set(key, existing);
  return { ok: true, retryAfterSec: Math.ceil((existing.resetAt - now) / 1000) };
}

export function checkIpRateLimit(ip: string) {
  return takeToken(ipBuckets, ip || "unknown", IP_MAX, IP_WINDOW_MS);
}

export function checkEmailRateLimit(email: string) {
  return takeToken(emailBuckets, email.toLowerCase(), EMAIL_MAX, EMAIL_WINDOW_MS);
}

export function assertBodyWithinLimit(request: Request): void {
  const contentLength = request.headers.get("content-length");
  if (contentLength) {
    const size = Number(contentLength);
    if (Number.isFinite(size) && size > MAX_BODY_BYTES) {
      const error = new Error("Payload Too Large");
      (error as Error & { status: number }).status = 413;
      throw error;
    }
  }
}

export async function readJsonBodyBounded(request: Request): Promise<unknown> {
  assertBodyWithinLimit(request);
  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) {
    const error = new Error("Payload Too Large");
    (error as Error & { status: number }).status = 413;
    throw error;
  }
  if (!raw.trim()) return {};
  return JSON.parse(raw) as unknown;
}

export function isHoneypotTriggered(value: unknown): boolean {
  return typeof value === "string" && value.trim().length > 0;
}

export function checkOriginAllowlist(request: Request): boolean {
  const allowlist = process.env.CONTACT_ORIGIN_ALLOWLIST?.split(",").map((item) => item.trim()).filter(Boolean);
  if (!allowlist?.length) return true;

  const origin = request.headers.get("origin");
  if (origin && allowlist.includes(origin)) return true;

  const referer = request.headers.get("referer");
  if (referer) {
    try {
      const refererOrigin = new URL(referer).origin;
      if (allowlist.includes(refererOrigin)) return true;
    } catch {
      return false;
    }
  }

  return false;
}

export function logContactError(error: unknown, context?: string) {
  const message = error instanceof Error ? error.message : "Unknown error";
  console.error(`[contact]${context ? ` ${context}:` : ""}`, message);
}

export { FIELD_LIMITS, MAX_BODY_BYTES };
