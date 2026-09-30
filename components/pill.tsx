import type { ReactNode } from "react";

const tones = {
  dark: "bg-black text-white",
  light: "bg-white text-black shadow-[0_1px_2px_rgba(16,24,40,0.06),0_0_0_1px_rgba(0,0,0,0.04)]",
  ghost: "bg-transparent text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35)]",
  "ghost-dark": "bg-white text-black shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08)]",
};

export function Pill({
  href,
  children,
  tone = "dark",
}: {
  href: string;
  children: ReactNode;
  tone?: keyof typeof tones;
}) {
  return (
    <a
      href={href}
      className={`inline-flex h-11 items-center rounded-full px-5 text-[14px] font-medium sm:h-12 sm:px-6 sm:text-[15px] ${tones[tone]}`}
    >
      {children}
    </a>
  );
}
