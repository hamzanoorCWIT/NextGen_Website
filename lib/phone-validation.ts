export const PHONE_ERROR = "Enter a valid phone number with 7–15 digits. You may use a leading +, spaces, hyphens, and parentheses.";

// Format validation for local and international numbers; does not verify ownership.
export function isValidPhone(value: string): boolean {
  if (value.length > 40) return false;
  const phone = value.trim();
  if (!/^\+?(?:[0-9]+|\([0-9]+\))(?:[ -]?(?:[0-9]+|\([0-9]+\)))*$/.test(phone)) return false;
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 15 && /[1-9]/.test(digits) && !(phone.startsWith("+") && digits.startsWith("0"));
}
