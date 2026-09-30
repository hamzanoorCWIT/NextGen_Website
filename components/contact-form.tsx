"use client";

import { FormEvent, useState } from "react";

const field =
  "h-14 w-full rounded-[10px] border border-[#e6e8ee] bg-white px-4 text-[15px] text-[#111111] outline-none placeholder:text-[#b0b4bc] focus:border-black/25";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-[820px]">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input className={field} type="text" name="name" required placeholder="Name" autoComplete="name" />
        <input className={field} type="email" name="email" required placeholder="Email" autoComplete="email" />
        <input className={field} type="tel" name="phone" required placeholder="Phone" autoComplete="tel" />
        <input className={field} type="text" name="company" required placeholder="Company" autoComplete="organization" />
        <textarea
          className="min-h-[160px] w-full resize-y rounded-[10px] border border-[#e6e8ee] bg-white px-4 py-4 text-[15px] text-[#111111] outline-none placeholder:text-[#b0b4bc] focus:border-black/25 sm:col-span-2"
          name="message"
          placeholder="Message..."
        />
      </div>
      <div className="mt-6">
        <button
          type="submit"
          className="inline-flex h-11 cursor-pointer items-center rounded-full bg-black px-7 text-[14px] font-medium text-white sm:h-12 sm:px-8 sm:text-[15px]"
        >
          {sent ? "Sent" : "Submit"}
        </button>
      </div>
    </form>
  );
}
