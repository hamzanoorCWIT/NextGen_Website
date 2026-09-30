"use client";

import { useState } from "react";

const scoreCards = [
  {
    category: "Ticket Management",
    rows: [
      { label: "CWIT EMS", score: 9.4, tone: "dark" as const },
      { label: "Zendesk", score: 9.1, tone: "light" as const },
    ],
  },
  {
    category: "WhatsApp & Messaging",
    rows: [
      { label: "CWIT EMS", score: 9.3, tone: "dark" as const },
      { label: "Zendesk", score: 7.5, tone: "light" as const },
    ],
  },
  {
    category: "Calls & Campaigns",
    rows: [
      { label: "CWIT EMS", score: 9.1, tone: "dark" as const },
      { label: "Zendesk", score: 6.0, tone: "light" as const },
    ],
  },
  {
    category: "Workflow Automation",
    rows: [
      { label: "CWIT EMS", score: 9.2, tone: "dark" as const },
      { label: "Zendesk", score: 7.8, tone: "light" as const },
    ],
  },
  {
    category: "Dashboards & Reporting",
    rows: [
      { label: "CWIT EMS", score: 9.0, tone: "dark" as const },
      { label: "Zendesk", score: 8.2, tone: "light" as const },
    ],
  },
  {
    category: "Permissions & Governance",
    rows: [
      { label: "CWIT EMS", score: 9.5, tone: "dark" as const },
      { label: "Zendesk", score: 7.0, tone: "light" as const },
    ],
  },
];

function Arrow({ direction }: { direction: "left" | "right" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 16 16" aria-hidden="true">
      <path
        d={direction === "left" ? "M10 3 5 8l5 5" : "M6 3l5 5-5 5"}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ComparisonScores() {
  const [index, setIndex] = useState(0);
  const visible = [0, 1, 2].map((offset) => scoreCards[(index + offset) % scoreCards.length]);

  return (
    <section className="bg-black py-12 text-white sm:py-16 lg:py-24">
      <div className="content-1442">
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="text-[clamp(32px,2.8vw,44px)] leading-[1.15] font-medium tracking-[-0.03em]">See how they compare.</h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[15px] leading-7 text-white/80 sm:text-[16px]">
            See how CWIT EMS and Zendesk compare across key capabilities.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {visible.map((card, offset) => (
            <article
              key={card.category}
              className={`flex min-h-0 flex-col rounded-[20px] bg-white p-6 text-[#111111] sm:p-7 md:h-[478px] ${
                offset > 0 ? "hidden md:flex" : ""
              }`}
            >
              <div className="space-y-6">
                {card.rows.map((row) => (
                  <div key={row.label}>
                    <p className="text-[40px] leading-none font-medium tracking-[-0.04em] sm:text-[44px]">{row.score.toFixed(1)}</p>
                    <p className="mt-2 text-[14px] text-[#3a3a3a]">{row.label}</p>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#ececec]">
                      <div
                        className={`h-full rounded-full ${row.tone === "dark" ? "bg-black" : "bg-[#cfcfcf]"}`}
                        style={{ width: `${(row.score / 10) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-auto pt-8 text-[15px] font-semibold tracking-[-0.01em]">{card.category}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2 sm:mt-10 sm:gap-3">
          <button
            type="button"
            aria-label="Previous comparisons"
            onClick={() => setIndex((value) => (value - 1 + scoreCards.length) % scoreCards.length)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-[8px] bg-[#2d2d2d] text-white sm:h-12 sm:w-12"
          >
            <Arrow direction="left" />
          </button>
          <button
            type="button"
            aria-label="Next comparisons"
            onClick={() => setIndex((value) => (value + 1) % scoreCards.length)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-[8px] bg-[#2d2d2d] text-white sm:h-12 sm:w-12"
          >
            <Arrow direction="right" />
          </button>
        </div>
      </div>
    </section>
  );
}
