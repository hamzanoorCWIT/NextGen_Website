"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>(".site section, .site [data-reveal]"),
    ).filter((el) => !el.closest("[data-reveal-ignore]") && !el.hasAttribute("data-reveal-ignore"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const target = entry.target as HTMLElement;
          // Double rAF so the browser applies the pending styles before animating in.
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              target.classList.add("reveal-in");
            });
          });
          observer.unobserve(target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -4% 0px" },
    );

    let delayStep = 0;

    nodes.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const alreadyVisible = rect.top < window.innerHeight * 0.88 && rect.bottom > 40;

      if (alreadyVisible) return;

      el.classList.add("reveal-pending");
      if (el.querySelector(".sticky, [class*='sticky']")) {
        el.classList.add("reveal-fade-only");
      }
      el.style.setProperty("--reveal-delay", `${Math.min(delayStep, 3) * 90}ms`);
      delayStep += 1;
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
      nodes.forEach((el) => {
        el.classList.remove("reveal-pending", "reveal-in", "reveal-fade-only");
        el.style.removeProperty("--reveal-delay");
      });
    };
  }, [pathname]);

  return null;
}
