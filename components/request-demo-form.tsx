"use client";

import { type SubmitEvent, useState } from "react";

const companySizes = ["1-10", "11-50", "51-200", "201-1000", "1000+"];

export function RequestDemoForm() {
  const [email, setEmail] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [privacy, setPrivacy] = useState(true);
  const [sent, setSent] = useState(false);
  function onSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!privacy) return;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <label className="sr-only" htmlFor="request-demo-email">
        Email address
      </label>
      <input
        id="request-demo-email"
        name="email"
        type="email"
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

      <button
        type="submit"
        className="flex h-14 w-full cursor-pointer items-center justify-center rounded-full bg-black text-[15px] font-medium text-white"
      >
        {sent ? "Submitted" : "Request Demo"}
      </button>

      <label className="flex cursor-pointer items-center gap-2.5 pt-2 text-[13px] text-[#667085]">
        <input
          type="checkbox"
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
