"use client";

import Image from "next/image";
import { useState } from "react";

const quotes = [
  {
    company: "monday.com",
    logo: "/figma/trusted-1.png",
    logoWidth: 150,
    logoHeight: 32,
    body: [
      "We invited Kate to speak to our Design and Growth teams at monday.com, and she delivered an exceptional talk on “Growth as a User-Centric System.”",
      "She provided deep insights into the role design plays in driving business success by delivering and communicating real user value. It was a pleasure collaborating with an expert of her caliber.",
      "The feedback from our attendees was overwhelmingly positive— the team gained immense value from her insights. Thank you, Kate, for a fantastic session!",
    ],
    name: "Vera Nosenberg",
    role: "Director of Product Design, @monday.com",
    avatar: "/figma/img30.png",
    avatarWidth: 512,
    avatarHeight: 458,
  },
  {
    company: "Mobbin",
    logo: "/figma/trusted-2.png",
    logoWidth: 150,
    logoHeight: 22,
    body: [
      "Kate partnered with our team at Mobbin to elevate user onboarding and activation strategies, bringing a fresh macro perspective that was invaluable after years of deep focus on our own product.",
      "Her approach was both strategic and hands-on, delivering clear frameworks that helped us uncover critical growth opportunities. What set her apart was her ability to not only show us the “what” but also explain the “why,” layering practical solutions with deeper insights that reframed our thinking.",
      "Sessions were engaging, grounded in real-world examples, and left us with tools we continue to apply. If you're seeking a growth expert who combines clarity, enthusiasm, and a strategic lens to drive results, Kate is an exceptional partner.",
      "We're also excited to forge content partnership with Kate as her insights & audience has natural fit and alignment with ours at mobbin.com",
    ],
    name: "Jovin Liew",
    role: "Head of Growth, Co-founder @Mobbin",
    avatar: "/figma/img25.png",
    avatarWidth: 400,
    avatarHeight: 400,
  },
  {
    company: "zeffy",
    logo: "/figma/trusted-3.png",
    logoWidth: 150,
    logoHeight: 32,
    body: [
      "We felt the collaboration was a real success — both in assessing what we had and validating the ideas we were exploring.",
      "The Zeffy form builder went super well — that initiative alone gave us a 15% lift in activation, our biggest win so far. We're now rolling it out across all our form types.",
      "It also helped us refocus onboarding on the core product, which had a great cumulative impact on activation in the past months (+50%).",
    ],
    name: "Michel Ferry",
    role: "Head of Product @Zeffy",
    avatar: "/figma/img28.png",
    avatarWidth: 400,
    avatarHeight: 400,
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

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const visible = [0, 1, 2].map((offset) => quotes[(index + offset) % quotes.length]);

  return (
    <section className="bg-[#fafafa] py-14 sm:py-20">
      <div className="content-1760">
        <div className="mb-8 flex items-end justify-between gap-4 sm:mb-10 sm:items-center sm:gap-6">
          <h2 className="section-title min-w-0 flex-1 max-w-[829px]">Trusted by teams building better operations</h2>
          <div className="flex shrink-0 gap-2 sm:gap-3">
            <button
              type="button"
              aria-label="Previous stories"
              onClick={() => setIndex((value) => (value - 1 + quotes.length) % quotes.length)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-[8px] bg-[#2d2d2d] text-white sm:h-12 sm:w-12"
            >
              <Arrow direction="left" />
            </button>
            <button
              type="button"
              aria-label="Next stories"
              onClick={() => setIndex((value) => (value + 1) % quotes.length)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-[8px] bg-[#2d2d2d] text-white sm:h-12 sm:w-12"
            >
              <Arrow direction="right" />
            </button>
          </div>
        </div>
        <div className="grid items-start gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visible.map((quote, offset) => (
            <article
              key={quote.company + quote.name}
              className={`flex flex-col items-start rounded-[12px] border border-[#e6e6e6] bg-white p-5 sm:p-6 ${
                offset === 1 ? "hidden md:flex" : offset === 2 ? "hidden xl:flex" : ""
              }`}
            >
              <img
                src={quote.logo}
                alt={quote.company}
                width={quote.logoWidth}
                height={quote.logoHeight}
                className="block h-auto max-w-full self-start"
                style={{ width: quote.logoWidth }}
              />
              <div className="mt-5 space-y-4 text-[15px] leading-[1.6] text-[#1a1a1a]">
                {quote.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 flex items-center gap-3">
                <Image
                  src={quote.avatar}
                  alt=""
                  width={quote.avatarWidth}
                  height={quote.avatarHeight}
                  className="h-11 w-11 rounded-full object-cover"
                />
                <div>
                  <p className="text-[14px] leading-tight font-semibold">{quote.name}</p>
                  <p className="mt-1 text-[13px] leading-tight text-[#8b8b8b]">{quote.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
