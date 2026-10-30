"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { WorkflowStep } from "@/components/service-workflow";

type Img = { src: string; alt: string; width: number; height: number };

function Bolt({ className }: { className?: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        d="M13 2.5 4.5 13.5h6.5L10 21.5l9-11.5h-6.8L13 2.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function ServiceWorkflowScroll({
  steps,
  fallbackImage,
}: {
  steps: WorkflowStep[];
  fallbackImage: Img;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    let frame = 0;

    const update = () => {
      const track = trackRef.current;
      if (!track) return;
      const rect = track.getBoundingClientRect();
      const scrollable = Math.max(1, track.offsetHeight - window.innerHeight);
      const scrolled = clamp(-rect.top, 0, scrollable);
      const next = Math.round((scrolled / scrollable) * (steps.length - 1));
      setActive((current) => (current === next ? current : next));
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [steps.length, reduceMotion]);

  return (
    <>
      {/* Small screens / reduced motion: static card and image */}
      <div className={`mt-12 grid items-stretch gap-5 ${reduceMotion ? "" : "hidden"} lg:grid-cols-2`}>
        <article className="rounded-[12px] bg-white p-6 text-[#111111] sm:p-8">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#dcdcdc] bg-white">
            <Bolt />
          </span>
          <ol className="mt-6">
            {steps.map((step, index) => (
              <li key={step.title} className={index === 0 ? "" : "mt-5 border-t border-[#ececec] pt-5"}>
                <p className="text-[16px] font-semibold">{step.title}</p>
                {step.body ? <p className="mt-2 text-[14px] leading-6 text-[#3a3a3a]">{step.body}</p> : null}
              </li>
            ))}
          </ol>
        </article>
        <div className="overflow-hidden rounded-[12px]">
          <Image
            src={fallbackImage.src}
            alt={fallbackImage.alt}
            width={fallbackImage.width}
            height={fallbackImage.height}
            className="h-full w-full object-cover"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>

      {/* Desktop: pinned panel, steps expand and the image changes while scrolling */}
      <div
        ref={trackRef}
        data-reveal-ignore
        className={`relative mt-12 ${reduceMotion ? "hidden" : "block"}`}
        style={{ height: `${steps.length * 80}vh` }}
      >
        <div className="sticky top-0 flex h-screen items-center">
          <div className="hidden h-[clamp(620px,84vh,696px)] w-full grid-cols-2 items-stretch gap-5 lg:grid">
            <article className="flex flex-col overflow-hidden rounded-[12px] bg-white p-8 text-[#111111] xl:p-10">
              <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#dcdcdc] bg-white">
                <Bolt />
              </span>
              <div className="mt-6 xl:mt-8" aria-current={active === 0 ? "step" : undefined}>
                <p className="text-[20px] font-medium text-[#111111]">{steps[0].title}</p>
                {steps[0].body ? <p className="mt-3 text-[16px] leading-[30px] text-[#111111]">{steps[0].body}</p> : null}
              </div>
              <ol className="mt-auto pt-6">
                {steps.slice(1).map((step, offset) => {
                  const index = offset + 1;
                  const open = index === active;
                  const last = index === steps.length - 1;
                  return (
                    <li
                      key={step.title}
                      aria-current={open ? "step" : undefined}
                      className={last || open ? "" : "border-b border-[#dcdcdc]"}
                    >
                      <p
                        className={`font-medium transition-all duration-500 ease-out ${
                          open ? "py-2 text-[20px] text-[#111111]" : "py-3 text-[18px] text-[#7a7a7a]"
                        }`}
                      >
                        {step.title}
                      </p>
                      <div
                        className="grid transition-[grid-template-rows,opacity] duration-500 ease-out"
                        style={{ gridTemplateRows: open ? "1fr" : "0fr", opacity: open ? 1 : 0 }}
                      >
                        <div className="overflow-hidden">
                          {step.body ? <p className="pb-4 text-[16px] leading-[30px] text-[#111111]">{step.body}</p> : null}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </article>

            <div className="relative overflow-hidden rounded-[12px]">
              {steps.map((step, index) => {
                const image = step.image ?? fallbackImage;
                return (
                  <div
                    key={step.title}
                    aria-hidden={index !== active}
                    className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                    style={{ opacity: index === active ? 1 : 0 }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex w-full flex-col gap-4 lg:hidden">
            <div className="relative aspect-[685/696] max-h-[46svh] w-full overflow-hidden rounded-[12px]">
              {steps.map((step, index) => {
                const image = step.image ?? fallbackImage;
                return (
                  <div
                    key={step.title}
                    aria-hidden={index !== active}
                    className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                    style={{ opacity: index === active ? 1 : 0 }}
                  >
                    <Image src={image.src} alt={image.alt} fill sizes="100vw" className="object-cover" />
                  </div>
                );
              })}
            </div>
            <div className="grid rounded-[12px] bg-white p-5 text-[#111111]">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  aria-hidden={index !== active}
                  aria-current={index === active ? "step" : undefined}
                  className="col-start-1 row-start-1 transition-[opacity,transform] duration-500 ease-out"
                  style={{
                    opacity: index === active ? 1 : 0,
                    transform: index === active ? "translate3d(0,0,0)" : "translate3d(0,14px,0)",
                  }}
                >
                  <p className="text-[20px] leading-7 font-medium">{step.title}</p>
                  {step.body ? <p className="mt-2 text-[15px] leading-6">{step.body}</p> : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
