"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Pill } from "@/components/pill";

export type ToolsPanel = {
  title: string;
  body: string[];
  href?: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function ToolsScroll({ panels }: { panels: ToolsPanel[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => setReduceMotion(media.matches);
    syncMotion();
    media.addEventListener("change", syncMotion);
    return () => media.removeEventListener("change", syncMotion);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;

    let frame = 0;

    const paint = (progress: number) => {
      const active = Math.round(progress);
      panels.forEach((_, index) => {
        const offset = index - progress;
        const textOpacity = clamp(1 - Math.abs(offset) * 1.15, 0, 1);
        const textEl = textRefs.current[index];
        const imageEl = imageRefs.current[index];

        if (textEl) {
          textEl.style.transform = `translate3d(0, ${offset * 100}%, 0)`;
          textEl.style.opacity = String(textOpacity);
        }
        if (imageEl) {
          imageEl.style.opacity = index === active ? "1" : "0";
          imageEl.style.transform = "none";
          imageEl.style.zIndex = index === active ? "2" : "1";
        }
      });
    };

    const update = () => {
      const track = trackRef.current;
      if (!track) return;

      const rect = track.getBoundingClientRect();
      const scrollable = Math.max(1, track.offsetHeight - window.innerHeight);
      const scrolled = clamp(-rect.top, 0, scrollable);
      const progress = (scrolled / scrollable) * (panels.length - 1);
      paint(progress);
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
  }, [panels, reduceMotion]);

  return (
    <>
      <div className={`content-1442 mt-12 space-y-14 ${reduceMotion ? "block" : "lg:hidden"}`}>
        {panels.map((panel) => (
          <div key={panel.title} className="grid items-center gap-8">
            <div>
              <h3 className="text-[clamp(28px,2vw,40px)] font-semibold tracking-[-0.03em]">{panel.title}</h3>
              {panel.body.map((paragraph) => (
                <p key={paragraph} className="mt-4 text-[15px] leading-7 text-white sm:text-[16px]">
                  {paragraph}
                </p>
              ))}
              <div className="mt-6">
                <Pill href={panel.href ?? "#demo"} tone="light">
                  Explore More
                </Pill>
              </div>
            </div>
            <div className="flex min-w-0 justify-start">
              <Image
                src={panel.image.src}
                alt={panel.image.alt}
                width={panel.image.width}
                height={panel.image.height}
                className="h-auto w-full max-w-[780px] object-contain"
                style={{ width: "min(100%, 780px)", height: "auto" }}
              />
            </div>
          </div>
        ))}
      </div>

      <div
        ref={trackRef}
        data-reveal-ignore
        className={`relative mt-12 ${reduceMotion ? "hidden" : "hidden lg:block"}`}
        style={{ height: `${Math.max(panels.length, 1) * 100}vh` }}
      >
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="content-1442 grid w-full items-center gap-10 lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] xl:gap-16">
            <div className="relative h-[340px] overflow-hidden xl:h-[380px]">
              {panels.map((panel, index) => (
                <div
                  key={panel.title}
                  ref={(node) => {
                    textRefs.current[index] = node;
                  }}
                  className="absolute inset-0 flex flex-col justify-center"
                  style={{
                    transform: index === 0 ? "translate3d(0, 0%, 0)" : "translate3d(0, 100%, 0)",
                    opacity: index === 0 ? 1 : 0,
                  }}
                >
                  <h3 className="text-[clamp(28px,2vw,40px)] font-semibold tracking-[-0.03em]">{panel.title}</h3>
                  {panel.body.map((paragraph) => (
                    <p key={paragraph} className="mt-4 text-[15px] leading-7 text-white sm:text-[16px]">
                      {paragraph}
                    </p>
                  ))}
                  <div className="mt-6">
                    <Pill href={panel.href ?? "#demo"} tone="light">
                      Explore More
                    </Pill>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative mx-auto aspect-[780/478] w-full max-w-[780px] lg:ml-auto lg:mr-0">
              {panels.map((panel, index) => (
                <div
                  key={panel.image.src + panel.title}
                  ref={(node) => {
                    imageRefs.current[index] = node;
                  }}
                  className="pointer-events-none absolute inset-0"
                  style={{
                    opacity: index === 0 ? 1 : 0,
                    zIndex: index === 0 ? 2 : 1,
                  }}
                >
                  <Image
                    src={panel.image.src}
                    alt={panel.image.alt}
                    fill
                    sizes="780px"
                    className="object-contain object-right"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
