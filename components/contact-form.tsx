"use client";

import { type SubmitEvent, useState } from "react";

const field =
  "h-14 w-full rounded-[10px] border border-[#e6e8ee] bg-white px-4 text-[15px] text-[#111111] outline-none placeholder:text-[#b0b4bc] focus:border-black/25";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  async function onSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setPending(true);

    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      company: String(data.get("company") ?? ""),
      message: String(data.get("message") ?? ""),
      website: honeypot,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json().catch(() => null)) as
        | { success?: boolean; error?: string; message?: string }
        | null;

      if (!response.ok) {
        setError(result?.error || "Failed to send message. Please try again.");
        return;
      }

      setSent(true);
      setHoneypot("");
      form.reset();
    } catch {
      setError("Failed to send message. Please try again.");
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="relative w-full max-w-[820px]">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input className={field} type="text" name="name" required placeholder="Name" autoComplete="name" maxLength={100} />
        <input className={field} type="email" name="email" required placeholder="Email" autoComplete="email" maxLength={254} />
        <input className={field} type="tel" name="phone" required placeholder="Phone" autoComplete="tel" maxLength={40} />
        <input
          className={field}
          type="text"
          name="company"
          required
          placeholder="Company"
          autoComplete="organization"
          maxLength={120}
        />
        <textarea
          className="min-h-[160px] w-full resize-y rounded-[10px] border border-[#e6e8ee] bg-white px-4 py-4 text-[15px] text-[#111111] outline-none placeholder:text-[#b0b4bc] focus:border-black/25 sm:col-span-2"
          name="message"
          required
          placeholder="Message..."
          maxLength={5000}
        />
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
          className="absolute left-[-9999px] h-0 w-0 overflow-hidden opacity-0"
          style={{ position: "absolute", left: "-9999px", height: 0, width: 0, opacity: 0, overflow: "hidden" }}
        />
      </div>

      {error ? <p className="mt-4 text-[14px] text-[#b42318]">{error}</p> : null}
      {sent && !error ? <p className="mt-4 text-[14px] text-[#027a48]">Message sent successfully. We’ll be in touch soon.</p> : null}

      <div className="mt-6">
        <button
          type="submit"
          disabled={pending}
          className="inline-flex h-11 cursor-pointer items-center rounded-full bg-black px-7 text-[14px] font-medium text-white disabled:cursor-not-allowed disabled:opacity-60 sm:h-12 sm:px-8 sm:text-[15px]"
        >
          {pending ? "Sending..." : sent ? "Sent" : "Submit"}
        </button>
      </div>
    </form>
  );
}
