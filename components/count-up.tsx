"use client";

import { useEffect, useRef, useState } from "react";

export function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const elementRef = useRef<HTMLSpanElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

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

    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <span ref={elementRef} aria-label={`${value}${suffix}`} className="inline-block tabular-nums">
      <span aria-hidden="true">{Math.round(value * progress)}{suffix}</span>
    </span>
  );
}
