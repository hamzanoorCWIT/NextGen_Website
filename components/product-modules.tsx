"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Pill } from "@/components/pill";

export type ProductModuleImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ProductModuleTab = {
  id?: string;
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

function tabSlug(tab: ProductModuleTab) {
  return tab.id ?? tab.label.toLowerCase().replace(/&/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

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
  const current = tabs[active] ?? tabs[0];

  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.replace(/^#/, "");
      if (!hash) return;
      const index = tabs.findIndex((tab) => tabSlug(tab) === hash);
      if (index >= 0) setActive(index);
    };

    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, [tabs]);

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
            const slug = tabSlug(tab);
            return (
              <button
                key={tab.label}
                type="button"
                role="tab"
                id={slug}
                aria-selected={selected}
                onClick={() => {
                  setActive(index);
                  if (typeof window !== "undefined") {
                    const next = `#${slug}`;
                    if (window.location.hash !== next) {
                      window.history.replaceState(null, "", next);
                    }
                  }
                }}
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
