"use client";

import Image from "next/image";
import { useState } from "react";
import { FaqSection } from "@/components/faq-section";

const features = [
  "Single communication channel",
  "Shared inbox",
  "Basic ticket management",
  "Customer request tracking",
  "AI topic classification",
  "Basic workflow automation",
  "Single workspace",
  "Standard knowledge base",
  "Basic analytics",
  "Basic user management",
];

const plans = [
  {
    name: "Starter",
    description: "A practical starting point for small teams looking to organize customer interactions and bring everyday work into one shared space.",
    price: 0,
    tone: "light" as const,
  },
  {
    name: "Professional",
    description: "Designed for teams that need smarter workflows, better collaboration, and a clearer view of day-to-day operations.",
    price: 56,
    tone: "dark" as const,
  },
  {
    name: "Enterprise",
    description: "Built for organizations managing broader operational needs, with a connected workspace for teams, processes, and customer service.",
    price: 110,
    tone: "dark" as const,
  },
];

function Bolt() {
  return (
    <span className="inline-flex h-8 w-8 items-center justify-center rounded-[10px] bg-black text-white" aria-hidden="true">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M9.2 1.2 3.2 9h4.2L6.4 14.8 12.8 6.6H8.4L9.2 1.2Z" fill="currentColor" />
      </svg>
    </span>
  );
}

export function PricingDetails() {
  const [annual, setAnnual] = useState(true);

  return (
    <>
      <section className="bg-white py-16 sm:py-24">
        <div className="content-1442">
          <h2 className="section-title text-center">Built To Scale With Your Business</h2>
          <p className="mx-auto mt-4 max-w-[680px] text-center text-[15px] leading-7 text-[#1a1a1a] sm:text-[16px]">
            Choose the level of support and functionality that suits your team today, with room to grow as your
            operations evolve.
          </p>
          <div className="mt-7 flex justify-center gap-2">
            <button
              type="button"
              onClick={() => setAnnual(false)}
              className={`h-10 cursor-pointer rounded-full px-5 text-[14px] ${annual ? "border border-black/15 bg-white text-[#111111]" : "bg-black text-white"}`}
              aria-pressed={!annual}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setAnnual(true)}
              className={`h-10 cursor-pointer rounded-full px-5 text-[14px] ${annual ? "bg-black text-white" : "border border-black/15 bg-white text-[#111111]"}`}
              aria-pressed={annual}
            >
              Annually
            </button>
          </div>

          <div className="mt-10 rounded-[12px] bg-[#f3f1ec] p-2.5 sm:p-3">
            <div className="grid gap-2 lg:grid-cols-3 lg:gap-0">
              {plans.map((plan, index) => (
                <article
                  key={plan.name}
                  className={`flex flex-col px-5 py-6 sm:px-7 sm:py-8 ${
                    index === 0 ? "bg-transparent" : "bg-white"
                  } ${index === 1 ? "rounded-[12px] lg:rounded-l-[12px] lg:rounded-r-none" : ""} ${
                    index === 2 ? "rounded-[12px] lg:rounded-l-none lg:rounded-r-[12px]" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Bolt />
                    <h3 className="text-[18px] font-semibold tracking-[-0.02em]">{plan.name}</h3>
                  </div>
                  <p className="mt-4 min-h-[72px] max-w-[320px] text-[14px] leading-6 text-[#3d3d3d]">{plan.description}</p>
                  <p className="mt-5 flex items-baseline tracking-[-0.03em]">
                    <span className="text-[40px] leading-none font-medium sm:text-[44px]">${plan.price}</span>
                    <span className="text-[18px] text-[#4b5563] sm:text-[20px]">/Month</span>
                  </p>
                  <ul className="mt-6 space-y-3.5">
                    {features.map((feature) => (
                      <li key={plan.name + feature} className="flex items-center gap-3 text-[14px] leading-5 sm:text-[15px]">
                        <Image src="/figma/dot.png" alt="" width={18} height={18} className="h-[18px] w-[18px] shrink-0" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <a
                      href="/request-demo"
                      className={`inline-flex h-11 items-center rounded-full px-6 text-[14px] font-medium ${
                        plan.tone === "dark"
                          ? "bg-black text-white"
                          : "bg-white text-black shadow-[inset_0_0_0_1px_rgba(0,0,0,0.14)]"
                      }`}
                    >
                      Get Started
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FaqSection
        title="Frequently Asked Questions"
        description="Find answers to common questions about choosing products, understanding pricing, and selecting a plan for your organization."
      />
    </>
  );
}
