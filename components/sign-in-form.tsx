"use client";

import { FormEvent, useState } from "react";

export function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [privacy, setPrivacy] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-[615px]">
      <h1 className="text-[clamp(32px,3.2vw,44px)] leading-[1.12] font-medium tracking-[-0.04em] text-[#111111]">
        See CWIT EMS in action
      </h1>
      <p className="mt-4 text-[15px] leading-7 text-[#667085] sm:text-[16px]">
        Book a personalized demo and discover how CWIT EMS connects customer service, workflows,
        analytics, and operations in one powerful platform.
      </p>

      <div className="mt-10 space-y-4">
        <label className="sr-only" htmlFor="sign-in-email">
          Email address
        </label>
        <input
          id="sign-in-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Email address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="h-14 w-full rounded-full border border-[#e4e7ec] bg-white px-6 text-[15px] text-[#111111] outline-none placeholder:text-[#98a2b3] focus:border-[#111111]"
        />

        <label className="sr-only" htmlFor="sign-in-password">
          Password
        </label>
        <input
          id="sign-in-password"
          name="password"
          type="password"
          required
          autoComplete="current-password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="h-14 w-full rounded-full border border-[#e4e7ec] bg-white px-6 text-[15px] text-[#111111] outline-none placeholder:text-[#98a2b3] focus:border-[#111111]"
        />
      </div>

      <button
        type="submit"
        className="mt-5 flex h-14 w-full cursor-pointer items-center justify-center rounded-full bg-black text-[15px] font-medium text-white"
      >
        Sign in
      </button>

      <p className="mt-6 text-center text-[13px] font-medium tracking-[0.04em] text-[#98a2b3]">OR</p>

      <button
        type="button"
        className="mt-5 flex w-full cursor-pointer items-center justify-center gap-3 text-[15px] font-medium text-[#667085] hover:text-[#111111]"
      >
        <GoogleIcon />
        Continue with Google
      </button>

      <label className="mt-16 flex cursor-pointer items-center gap-2.5 text-[13px] text-[#667085] sm:mt-20">
        <input
          type="checkbox"
          checked={privacy}
          onChange={(event) => setPrivacy(event.target.checked)}
          className="h-4 w-4 rounded border-[#d0d5dd] accent-black"
        />
        I have read privacy policy
      </label>
    </form>
  );
}

function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M19.6 10.23c0-.68-.06-1.36-.17-2H10v3.79h5.38a4.6 4.6 0 0 1-2 3.02v2.5h3.24c1.89-1.73 2.98-4.3 2.98-7.31Z"
      />
      <path
        fill="#34A853"
        d="M10 20c2.7 0 4.96-.89 6.61-2.42l-3.24-2.5c-.9.6-2.04.96-3.37.96-2.59 0-4.78-1.75-5.56-4.1H1.1v2.58A10 10 0 0 0 10 20Z"
      />
      <path
        fill="#FBBC05"
        d="M4.44 11.94A5.99 5.99 0 0 1 4.13 10c0-.67.11-1.33.31-1.94V5.48H1.1A10 10 0 0 0 0 10c0 1.61.39 3.14 1.1 4.52l3.34-2.58Z"
      />
      <path
        fill="#EA4335"
        d="M10 3.96c1.47 0 2.78.5 3.82 1.5l2.86-2.86C14.95.99 12.7 0 10 0 6.1 0 2.73 2.24 1.1 5.48l3.34 2.58C5.22 5.71 7.41 3.96 10 3.96Z"
      />
    </svg>
  );
}
