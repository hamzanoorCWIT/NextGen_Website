"use client";

import { useEffect, useRef, useState } from "react";

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
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path
        d={direction === "left" ? "M13 8H3m5-5L3 8l5 5" : "M3 8h10M8 3l5 5-5 5"}
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
  const [progress, setProgress] = useState(0);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef.current;
    if (!cards) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        cancelAnimationFrame(frame);
        if (!entry.isIntersecting) {
          setProgress(0);
          return;
        }

        if (reducedMotion.matches) {
          setProgress(1);
          return;
        }

        setProgress(0);
        let start: number | null = null;
        const animate = (time: number) => {
          start ??= time;
          const elapsed = Math.min((time - start) / 1400, 1);
          setProgress(1 - Math.pow(1 - elapsed, 3));
          if (elapsed < 1) frame = requestAnimationFrame(animate);
        };
        frame = requestAnimationFrame(animate);
      },
      { threshold: 0.15 },
    );

    observer.observe(cards);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [index]);

  const visible = [0, 1, 2].map((offset) => scoreCards[(index + offset) % scoreCards.length]);

  return (
    <section className="bg-black pt-[clamp(48px,5.6vw,108px)] pb-[clamp(48px,5.2vw,100px)] text-white">
      <div className="mx-auto w-[calc(100%-40px)] max-w-[1442px] md:w-[74%]">
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="text-[clamp(32px,2.8vw,44px)] leading-[1.15] font-medium tracking-[-0.03em]">See how they compare.</h2>
          <p className="mx-auto mt-[clamp(10px,1.1vw,20px)] text-[clamp(10px,1vw,18px)] leading-normal text-white/90">
            See how CWIT EMS and Zendesk compare across key capabilities.
          </p>
        </div>

        <div ref={cardsRef} className="mt-[clamp(28px,2.8vw,54px)] grid gap-[clamp(8px,0.8vw,16px)] md:grid-cols-3">
          {visible.map((card, offset) => (
            <article
              key={card.category}
              className={`flex min-h-0 flex-col rounded-[12px] bg-white p-[clamp(16px,1.65vw,32px)] text-black ${
                offset > 0 ? "hidden md:flex" : ""
              }`}
            >
              <div className="space-y-[clamp(12px,1.2vw,24px)]">
                {card.rows.map((row) => (
                  <div key={row.label}>
                    <p aria-label={`${row.score.toFixed(1)} out of 10`} className="text-[clamp(48px,4.8vw,92px)] leading-none font-normal tracking-[-0.04em] tabular-nums">
                      <span aria-hidden="true">{(row.score * progress).toFixed(1)}</span>
                    </p>
                    <p className="mt-[clamp(10px,1.1vw,21px)] text-[clamp(14px,1.4vw,26px)] leading-normal">{row.label}</p>
                    <div className="mt-[clamp(8px,0.9vw,17px)] h-[clamp(3px,0.3vw,6px)] overflow-hidden rounded-full bg-[#e5e7eb]">
                      <div
                        className={`h-full rounded-full ${row.tone === "dark" ? "bg-black" : "bg-[#cfcfcf]"}`}
                        style={{ width: `${(row.score / 10) * 100}%`, transform: `scaleX(${progress})`, transformOrigin: "left" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-auto pt-[clamp(18px,1.8vw,35px)] text-[18px] leading-normal font-bold tracking-[-0.01em] text-[#101323]">{card.category}</p>
            </article>
          ))}
        </div>

        <div className="mt-[clamp(30px,3.1vw,60px)] flex justify-center gap-[clamp(4px,0.4vw,8px)]">
          <button
            type="button"
            aria-label="Previous comparisons"
            onClick={() => setIndex((value) => (value - 1 + scoreCards.length) % scoreCards.length)}
            className="inline-flex h-[clamp(28px,2.8vw,54px)] w-[clamp(28px,2.8vw,54px)] cursor-pointer items-center justify-center rounded-[4px] bg-[#2d2d2d] text-white hover:bg-[#444] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <Arrow direction="left" />
          </button>
          <button
            type="button"
            aria-label="Next comparisons"
            onClick={() => setIndex((value) => (value + 1) % scoreCards.length)}
            className="inline-flex h-[clamp(28px,2.8vw,54px)] w-[clamp(28px,2.8vw,54px)] cursor-pointer items-center justify-center rounded-[4px] bg-[#2d2d2d] text-white hover:bg-[#444] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <Arrow direction="right" />
          </button>
        </div>
      </div>
    </section>
  );
}
