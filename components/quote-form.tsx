"use client";

import { FormEvent, useState } from "react";

const field =
  "h-14 w-full rounded-[10px] border border-[#e6e8ee] bg-white px-4 text-[15px] text-[#111111] outline-none placeholder:text-[#b0b4bc] focus:border-black/25";

const headquarters = ["Pakistan", "United Arab Emirates", "Saudi Arabia", "United Kingdom", "United States", "Other"];

const teamSizes = ["1–10", "11–50", "51–200", "201–500", "501–1,000", "1,000+"];

export function QuoteForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto w-[min(1290px,100%)]">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <input className={field} type="email" name="email" required placeholder="Work email address" autoComplete="email" />
      <input className={field} type="text" name="name" required placeholder="Full name" autoComplete="name" />
      <input className={field} type="text" name="company" required placeholder="Company name" autoComplete="organization" />
      <Select name="headquarters" placeholder="Headquarters" options={headquarters} />
      <Select name="teamSize" placeholder="No of employees + contractors" options={teamSizes} />
      <div className="flex h-14 items-center rounded-[10px] border border-[#e6e8ee] bg-white focus-within:border-black/25">
        <span className="shrink-0 px-4 text-[15px] text-[#111111]">+92</span>
        <span className="h-6 w-px bg-[#e6e8ee]" aria-hidden="true" />
        <input
          className="h-full min-w-0 flex-1 bg-transparent px-4 text-[15px] text-[#111111] outline-none placeholder:text-[#b0b4bc]"
          type="tel"
          name="phone"
          required
          placeholder="Phone Number"
          autoComplete="tel"
        />
      </div>
      <textarea
        className="min-h-[120px] w-full resize-y rounded-[10px] border border-[#e6e8ee] bg-white px-4 py-4 text-[15px] text-[#111111] outline-none placeholder:text-[#b0b4bc] focus:border-black/25 sm:col-span-2"
        name="message"
        placeholder="Message"
      />
      </div>
      <div className="mt-10 flex justify-end">
        <button
          type="submit"
          className="inline-flex h-11 cursor-pointer items-center rounded-full bg-black px-6 text-[14px] font-medium text-white sm:h-12 sm:px-7 sm:text-[15px]"
        >
          {sent ? "Sent" : "Get my free quote"}
        </button>
      </div>
    </form>
  );
}

function Select({ name, placeholder, options }: { name: string; placeholder: string; options: string[] }) {
  return (
    <div className="relative">
      <select name={name} defaultValue="" required className={`${field} appearance-none pr-10`}>
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <span aria-hidden="true" className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-[#9aa0a8]">
        <svg width="12" height="12" viewBox="0 0 12 12">
          <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </span>
    </div>
  );
}
