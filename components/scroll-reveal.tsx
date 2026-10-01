"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer: IntersectionObserver | undefined;
    let nodes: HTMLElement[] = [];

    function reset() {
      observer?.disconnect();
      nodes.forEach((node) => {
        node.classList.remove("reveal-pending", "reveal-in", "reveal-fade-only");
        node.style.removeProperty("--reveal-delay");
      });
    }

    function setup() {
      reset();
      if (motion.matches || !("IntersectionObserver" in window)) return;

      const candidates = Array.from(document.querySelectorAll<HTMLElement>(
        ".site section, .site footer, main > div, [data-reveal]",
      )).filter((node) => !node.closest("[data-reveal-ignore]"));
      // Animate a region once, without compounding parent and child transforms.
      const regions = new Set(candidates);
      nodes = candidates.filter((node) => {
        let parent = node.parentElement;
        while (parent) {
          if (regions.has(parent)) return false;
          parent = parent.parentElement;
        }
        return true;
      });

      observer = new IntersectionObserver((entries) => {
        let stagger = 0;
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const node = entry.target as HTMLElement;
          node.style.setProperty("--reveal-delay", `${Math.min(stagger++, 2) * 70}ms`);
          node.classList.add("reveal-in");
          observer?.unobserve(node);
        });
      }, { threshold: 0, rootMargin: "0px 0px -24px 0px" });

      nodes.forEach((node) => {
        const rect = node.getBoundingClientRect();
        // Keep initial content and restored scroll positions immediately visible.
        if (rect.top < window.innerHeight || node.contains(document.activeElement)) return;
        node.classList.add("reveal-pending");
        if (node.querySelector(".sticky, .fixed, [data-reveal-ignore]")) {
          node.classList.add("reveal-fade-only");
        }
        observer?.observe(node);
      });
    }

    function revealFocusedRegion(event: FocusEvent) {
      if (!(event.target instanceof Element)) return;
      const region = event.target.closest<HTMLElement>(".reveal-pending");
      if (!region) return;
      region.style.setProperty("--reveal-delay", "0ms");
      region.classList.add("reveal-in");
      observer?.unobserve(region);
    }

    setup();
    motion.addEventListener("change", setup);
    document.addEventListener("focusin", revealFocusedRegion);
    return () => {
      reset();
      motion.removeEventListener("change", setup);
      document.removeEventListener("focusin", revealFocusedRegion);
    };
  }, [pathname]);

  return null;
}
