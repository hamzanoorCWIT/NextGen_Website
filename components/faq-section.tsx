"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Can I purchase each product individually?",
    answer: "Yes. Each product can be purchased on its own, and you can add more as your teams grow.",
  },
  {
    question: "How does CWIT pricing work?",
    answer:
      "Plans are billed per month. Annual billing is selected by default and shows the monthly rate for a yearly term. Pick the plan that matches your team, then tell us which products you need.",
  },
  {
    question: "We're currently using another payroll provider?",
    answer:
      "You can move over from your current provider. Share your setup in the quote form and we will map the transition with you.",
  },
  {
    question: "Does CWIT provide Partner pricing?",
    answer: "Yes. CWIT offers partner pricing for agencies and implementation partners. Contact us for the partner schedule.",
  },
  {
    question: "How does CWIT's pricing stack up against similar services?",
    answer:
      "CWIT pricing covers the workspace, service tools, and automation together, so you are not paying separate vendors for each channel.",
  },
];

export function FaqSection({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className={`bg-white pb-12 sm:pb-16 lg:pb-24 ${className}`}>
      <div className="mx-auto w-[min(860px,calc(100%-40px))]">
        <h2 className="section-title text-center">FAQs</h2>
        <div className="mt-12 border-t border-[#ececec]">
          {faqs.map((item, index) => {
            const expanded = open === index;
            return (
              <div key={item.question} className="border-b border-[#ececec]">
                <button
                  type="button"
                  className="flex w-full cursor-pointer items-center justify-between gap-6 py-5 text-left"
                  aria-expanded={expanded}
                  onClick={() => setOpen(expanded ? null : index)}
                >
                  <span className="text-[15px] font-normal text-[#1a1a1a] sm:text-[16px]">{item.question}</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" className="shrink-0 text-[#9a9a9a]">
                    {expanded ? (
                      <path d="M2 7h10" stroke="currentColor" strokeWidth="1.4" />
                    ) : (
                      <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.4" />
                    )}
                  </svg>
                </button>
                {expanded ? <p className="max-w-[720px] pb-5 text-[15px] leading-7 text-[#3a3a3a]">{item.answer}</p> : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
