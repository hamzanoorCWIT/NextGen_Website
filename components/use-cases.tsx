"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const cases = [
  {
    title: "Policy Acknowledgement",
    body: "Simplify compliance management by distributing policies, tracking acknowledgements, and maintaining clear records across your organization.",
    tags: ["Retail", "Rich SMS", "RCS"],
    stats: [
      { value: "79%", label: "read rate" },
      { value: "3.5x", label: "more redirections than Rich SMS campaigns" },
    ],
    image: "/figma/where-business-1.png",
    alt: "Policy acknowledgement workspace",
    width: 599,
    height: 429,
    href: "/industries/use-cases/policy-acknowledgement",
  },
  {
    title: "Multi-level Approvals",
    body: "Route requests through the right people, track every acknowledgement, and keep a clear record across your organization.",
    tags: ["Retail", "Rich SMS", "RCS"],
    stats: [
      { value: "79%", label: "read rate" },
      { value: "3.5x", label: "faster completion than email approvals" },
    ],
    image: "/figma/where-business-2.png",
    alt: "Approval workspace",
    width: 567,
    height: 429,
    href: "/industries/use-cases/multi-level-approvals",
  },
  {
    title: "Customer 360",
    body: "Give every team one view of the customer, from the first conversation through resolution, billing, and follow-up.",
    tags: ["Retail", "WhatsApp", "RCS"],
    stats: [
      { value: "79%", label: "read rate" },
      { value: "3.5x", label: "more context in every handoff" },
    ],
    image: "/figma/where-business-3.png",
    alt: "Customer conversation workspace",
    width: 557,
    height: 418,
    href: "/industries/use-cases/lead-to-opportunity",
  },
];

const gap = 20;

function TagIcon({ name }: { name: string }) {
  if (name === "Retail") {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
        <path d="M2.2 7.2 8 2.4l5.8 4.8V14H2.2V7.2Z" fill="currentColor" />
        <path d="M6.2 14V9.2h3.6V14" fill="#f5f3f0" />
      </svg>
    );
  }
  if (name === "Rich SMS" || name === "WhatsApp") {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
        <path d="M2 2.4h12v8.2H8.6L5.2 13.6V10.6H2V2.4Z" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <rect x="1.8" y="3" width="12.4" height="9" rx="2" fill="currentColor" />
      <path d="M6.6 5.6v4.2L11 7.7 6.6 5.6Z" fill="#f5f3f0" />
    </svg>
  );
}

function Arrow({ direction }: { direction: "left" | "right" }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path
        d={direction === "left" ? "M10 3 5 8l5 5" : "M6 3l5 5-5 5"}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function UseCases() {
  const frame = useRef<HTMLDivElement>(null);
  const [frameWidth, setFrameWidth] = useState(0);
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [dragOffset, setDragOffset] = useState(0);
  const drag = useRef<{ pointerId: number; startX: number; moved: boolean } | null>(null);
  // Set after a drag so the click that follows it does not open the card link.
  const dragged = useRef(false);
  const count = cases.length;

  useEffect(() => {
    const element = frame.current;
    if (!element) return;
    const measure = () => setFrameWidth(element.clientWidth);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const left = Math.max(16, (frameWidth - 1442) / 2);
  const peek = frameWidth < 768 ? 28 : Math.max(140, Math.round(frameWidth * 0.14));
  const available = frameWidth - left - gap - peek;
  const cardWidth = frameWidth ? Math.max(available, 0) : 0;

  function showNext() {
    setAnimate(true);
    setIndex((value) => value + 1);
  }

  function showPrevious() {
    if (index === 0) {
      setAnimate(false);
      setIndex(count);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setAnimate(true);
          setIndex(count - 1);
        });
      });
      return;
    }
    setAnimate(true);
    setIndex((value) => value - 1);
  }

  function settle() {
    if (index < count) return;
    setAnimate(false);
    setIndex(index % count);
  }

  function startDrag(event: React.PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    dragged.current = false;
    drag.current = { pointerId: event.pointerId, startX: event.clientX, moved: false };
    setAnimate(false);
    // Jump to the duplicate set so dragging right from the first card reveals the last one.
    if (index === 0) setIndex(count);
  }

  function moveDrag(event: React.PointerEvent<HTMLDivElement>) {
    const state = drag.current;
    if (!state || state.pointerId !== event.pointerId) return;
    const offset = event.clientX - state.startX;
    if (!state.moved && Math.abs(offset) > 5) {
      state.moved = true;
      event.currentTarget.setPointerCapture(event.pointerId);
    }
    if (state.moved) setDragOffset(offset);
  }

  function endDrag(event: React.PointerEvent<HTMLDivElement>) {
    const state = drag.current;
    if (!state || state.pointerId !== event.pointerId) return;
    drag.current = null;
    const offset = state.moved ? event.clientX - state.startX : 0;
    const threshold = Math.min(120, cardWidth * 0.15);
    setDragOffset(0);
    if (offset <= -threshold) showNext();
    else if (offset >= threshold) showPrevious();
    else setAnimate(true);
    dragged.current = state.moved;
  }

  const slides = [...cases, ...cases];

  return (
    <div>
      <div ref={frame} className="overflow-hidden">
        <div
          className="flex cursor-grab touch-pan-y items-stretch select-none active:cursor-grabbing"
          onTransitionEnd={settle}
          onPointerDown={startDrag}
          onPointerMove={moveDrag}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onDragStart={(event) => event.preventDefault()}
          onClickCapture={(event) => {
            if (dragged.current) event.preventDefault();
          }}
          style={{
            gap,
            paddingLeft: left,
            transform: frameWidth ? `translate3d(${dragOffset - index * (cardWidth + gap)}px, 0, 0)` : undefined,
            transition: animate ? "transform 560ms cubic-bezier(0.22, 1, 0.36, 1)" : "none",
          }}
        >
          {slides.map((item, slideIndex) => (
            <article
              key={`${item.title}-${slideIndex}`}
              className="relative grid shrink-0 items-start gap-8 rounded-[12px] bg-[#f4f3ef] px-5 py-8 text-black sm:px-8 sm:py-10 min-[1400px]:h-[581px] min-[1400px]:grid-cols-[minmax(0,1fr)_735.5329px] min-[1400px]:items-center min-[1400px]:gap-10 min-[1400px]:overflow-hidden min-[1400px]:pl-14 min-[1400px]:pr-0 min-[1400px]:py-12"
              style={{ width: cardWidth || "80%" }}
            >
              <div className="flex h-full flex-col items-start justify-center pt-1">
                <h3 className="text-[clamp(32px,2.2vw,42px)] leading-[1.1] font-semibold tracking-[-0.035em]">
                  {item.title}
                </h3>
                <p className="mt-4 w-full max-w-[575px] text-[16px] leading-7 text-black sm:text-[17px]">
                  {item.body}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-[14px] text-[#1a1a1a]">
                  {item.tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center gap-2">
                      <TagIcon name={tag} />
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-8 grid w-[min(557px,100%)] grid-cols-1 items-start gap-6 min-[520px]:grid-cols-[auto_minmax(0,280px)] min-[520px]:justify-between min-[520px]:gap-x-8">
                  {item.stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="text-[clamp(40px,2.8vw,52px)] leading-none font-semibold tracking-[-0.045em]">
                        {stat.value}
                      </p>
                      <p className="mt-4 text-[15px] leading-[1.35] text-[#546066]">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <a
                  href={item.href}
                  className="mt-10 inline-flex h-12 items-center rounded-full bg-black px-6 text-[15px] font-medium text-white"
                >
                  Explore More
                </a>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="h-[220px] w-full max-w-[532px] overflow-hidden rounded-[12px] border border-[#e4e4e4] shadow-[0_8px_24px_rgba(16,24,40,0.06)] sm:h-[428.0146px] sm:w-[735.5329px] sm:max-w-full min-[1400px]:absolute min-[1400px]:top-1/2 min-[1400px]:right-0 min-[1400px]:h-[428.0146px] min-[1400px]:w-[735.5329px] min-[1400px]:max-w-none min-[1400px]:-translate-y-1/2 min-[1400px]:rounded-r-none min-[1400px]:border-r-0 min-[1400px]:shadow-[0_12px_40px_rgba(16,24,40,0.08)]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    sizes="(min-width: 1400px) 736px, (min-width: 640px) 532px, 100vw"
                    className="block h-full w-full object-cover object-left-top"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="mt-6 flex justify-center gap-2">
        <button
          type="button"
          aria-label="Previous use case"
          onClick={showPrevious}
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#2a2a2a] text-white"
        >
          <Arrow direction="left" />
        </button>
        <button
          type="button"
          aria-label="Next use case"
          onClick={showNext}
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#2a2a2a] text-white"
        >
          <Arrow direction="right" />
        </button>
      </div>
    </div>
  );
}
