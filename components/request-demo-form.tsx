"use client";

import { type SubmitEvent, useState } from "react";

import { companySizes } from "@/lib/demo-fields";

export function RequestDemoForm() {
  const [email, setEmail] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [privacy, setPrivacy] = useState(true);
  const [sent, setSent] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState("");
  async function onSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!privacy || pending) return;
    setSent(false);
    setError(null);
    setPending(true);
    try {
      const response = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: "request-demo", email, companySize, privacy, website: honeypot }),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok || !result?.success) {
        setError(result?.error || "Failed to send demo request. Please try again.");
        return;
      }
      setSent(true);
      setEmail("");
      setCompanySize("");
      setHoneypot("");
    } catch {
      setError("Failed to send demo request. Please try again.");
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} onChange={() => { setSent(false); setError(null); }} className="relative space-y-4" aria-busy={pending}>
      <label className="sr-only" htmlFor="request-demo-email">
        Email address
      </label>
      <input
        id="request-demo-email"
        name="email"
        type="email"
        maxLength={254}
        disabled={pending}
        required
        autoComplete="email"
        placeholder="Email address"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        className="h-14 w-full rounded-full border-0 bg-white px-6 text-[15px] text-[#111111] outline-none placeholder:text-[#98a2b3]"
      />

      <label className="sr-only" htmlFor="request-demo-company-size">
        Company Size
      </label>
      <div className="relative">
        <select
          id="request-demo-company-size"
          name="companySize"
          disabled={pending}
          required
          value={companySize}
          onChange={(event) => setCompanySize(event.target.value)}
          className={`h-14 w-full appearance-none rounded-full border-0 bg-white px-6 pr-12 text-[15px] outline-none ${
            companySize ? "text-[#111111]" : "text-[#98a2b3]"
          }`}
        >
          <option value="" disabled>
            Company Size
          </option>
          {companySizes.map((size) => (
            <option key={size} value={size} className="text-[#111111]">
              {size}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute top-1/2 right-5 -translate-y-1/2 text-[#98a2b3]" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>

      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" value={honeypot} onChange={(event) => setHoneypot(event.target.value)} className="absolute left-[-9999px] h-0 w-0 overflow-hidden opacity-0" />
      {error ? <p role="alert" className="text-sm text-[#b42318]">{error}</p> : null}
      <p role="status" className="text-sm text-[#027a48]">{sent ? "Demo request sent. Our team will be in touch soon." : ""}</p>
      <button
        type="submit"
        disabled={pending}
        className="flex h-14 w-full cursor-pointer items-center justify-center rounded-full bg-black text-[15px] font-medium text-white"
      >
        {pending ? "Sending..." : sent ? "Submitted" : "Request Demo"}
      </button>

      <label className="flex cursor-pointer items-center gap-2.5 pt-2 text-[13px] text-[#667085]">
        <input
          type="checkbox"
          name="privacy"
          disabled={pending}
          required
          checked={privacy}
          onChange={(event) => setPrivacy(event.target.checked)}
          className="h-4 w-4 rounded border-[#d0d5dd] accent-black"
        />
        I have read privacy policy
      </label>
    </form>
  );
}
