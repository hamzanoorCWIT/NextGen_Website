"use client";

import Image from "next/image";
import { useState } from "react";
import { Pill } from "@/components/pill";

export type ProductModuleImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ProductModuleTab = {
  label: string;
  href?: string;
  active?: boolean;
  image: ProductModuleImage;
};

export type ProductModuleAction = {
  href: string;
  label: string;
  tone?: "dark" | "light" | "ghost" | "ghost-dark";
};

export function ProductModules({
  id,
  title,
  description,
  actions,
  tabs,
  indicator = "radio",
  frameClassName = "content-940",
}: {
  id?: string;
  title: string;
  description: string;
  actions: ProductModuleAction[];
  tabs: ProductModuleTab[];
  indicator?: "radio" | "check";
  frameClassName?: string;
}) {
  const initial = tabs.findIndex((tab) => tab.active);
  const [active, setActive] = useState(initial < 0 ? 0 : initial);
  const current = tabs[active];

  return (
    <section id={id} className="bg-white pb-16 sm:pb-24">
      <div className={`${frameClassName} text-center`}>
        <h2 className="text-[clamp(32px,2.6vw,44px)] leading-[1.15] font-semibold tracking-[-0.03em]">{title}</h2>
        <p className="mt-3 text-[15px] text-[#1a1a1a] sm:text-[16px]">{description}</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {actions.map((action) => (
            <Pill key={action.label} href={action.href} tone={action.tone}>
              {action.label}
            </Pill>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10" role="tablist" aria-label={title}>
          {tabs.map((tab, index) => {
            const selected = index === active;
            return (
              <button
                key={tab.label}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(index)}
                className={`inline-flex cursor-pointer items-center gap-2 border-b-2 pb-2 text-[14px] transition-colors duration-300 sm:text-[15px] ${
                  selected ? "border-black font-medium text-black" : "border-transparent text-[#6b7280]"
                }`}
              >
                <span aria-hidden="true" className={selected || indicator === "check" ? "" : "opacity-60"}>
                  {indicator === "check" ? "✓" : selected ? "◎" : "○"}
                </span>
                {tab.label}
              </button>
            );
          })}
        </div>
        <div key={current.label} role="tabpanel" className="product-module-panel mt-8">
          <Image
            src={current.image.src}
            alt={current.image.alt}
            width={current.image.width}
            height={current.image.height}
            className="mx-auto h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
