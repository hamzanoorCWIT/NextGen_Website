"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const BLOCKS =
  "h1, h2, h3, h4, p, li, article, figure, picture, img, table, form, a.rounded-full, button.rounded-full";

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const candidates = Array.from(
        document.querySelectorAll<HTMLElement>(".site section, .site footer, main > div, [data-reveal]"),
      ).filter((node) => !node.closest("[data-reveal-ignore]"));
      const regionSet = new Set(candidates);
      // Animate each region once, without compounding nested regions.
      const regions = candidates.filter((node) => {
        let parent = node.parentElement;
        while (parent) {
          if (regionSet.has(parent)) return false;
          parent = parent.parentElement;
        }
        return true;
      });

      let variantCounter = 0;
      regions.forEach((region) => {
        // Keep initial content and restored scroll positions immediately visible.
        if (region.getBoundingClientRect().top < window.innerHeight || region.contains(document.activeElement)) return;

        const variant = variantCounter++ % 3;
        let played = false;
        let targets: HTMLElement[];
        if (region.querySelector(".sticky, .fixed, [data-reveal-ignore]")) {
          targets = [region];
        } else {
          const blocks = Array.from(region.querySelectorAll<HTMLElement>(BLOCKS));
          const blockSet = new Set(blocks);
          targets = blocks.filter((node) => {
            let parent = node.parentElement;
            while (parent && parent !== region) {
              if (blockSet.has(parent)) return false;
              parent = parent.parentElement;
            }
            return true;
          });
          if (targets.length === 0) targets = [region];
        }

        const pinned = targets.length === 1 && targets[0] === region;
        gsap.set(targets, { autoAlpha: 0 });

        const play = () => {
          if (played) return;
          played = true;
          if (pinned) {
            gsap.to(region, { autoAlpha: 1, duration: 0.9, ease: "power3.out", clearProps: "opacity,visibility" });
            return;
          }

          const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
          targets.forEach((node, i) => {
            const at = Math.min(i * 0.08, 0.9);
            const kind = node.tagName;
            const clear = "opacity,visibility,transform,clipPath,filter";

            if (/^H[1-4]$/.test(kind)) {
              gsap.set(node, { autoAlpha: 1 });
              const split = SplitText.create(node, {
                type: variant === 0 ? "lines" : "words",
                mask: variant === 0 ? "lines" : undefined,
              });
              const pieces = variant === 0 ? split.lines : split.words;
              const from =
                variant === 0
                  ? { yPercent: 110 }
                  : variant === 1
                    ? { autoAlpha: 0, y: 28, filter: "blur(8px)" }
                    : { autoAlpha: 0, x: -36 };
              tl.from(
                pieces,
                {
                  ...from,
                  duration: variant === 0 ? 1.05 : 0.8,
                  ease: variant === 0 ? "power4.out" : "power3.out",
                  stagger: variant === 0 ? 0.12 : 0.05,
                  clearProps: "all",
                  onComplete: () => split.revert(),
                },
                at,
              );
            } else if (kind === "P") {
              const from =
                variant === 1 ? { x: -48 } : variant === 2 ? { y: 34 } : { y: 24, filter: "blur(6px)" };
              tl.fromTo(node, { autoAlpha: 0, ...from }, { autoAlpha: 1, x: 0, y: 0, filter: "blur(0px)", duration: 0.9, clearProps: clear }, at);
            } else if (kind === "IMG" || kind === "PICTURE" || kind === "FIGURE") {
              if (variant === 1) {
                tl.fromTo(node, { autoAlpha: 0, x: 80, scale: 0.94 }, { autoAlpha: 1, x: 0, scale: 1, duration: 1.1, clearProps: clear }, at);
              } else {
                tl.fromTo(
                  node,
                  { autoAlpha: 1, clipPath: variant === 0 ? "inset(100% 0% 0% 0%)" : "inset(0% 100% 0% 0%)", scale: 1.08 },
                  { clipPath: "inset(0% 0% 0% 0%)", scale: 1, duration: 1.2, ease: "power3.inOut", clearProps: clear },
                  at,
                );
              }
            } else if (kind === "A" || kind === "BUTTON") {
              tl.fromTo(node, { autoAlpha: 0, scale: 0.85, y: 12 }, { autoAlpha: 1, scale: 1, y: 0, duration: 0.7, ease: "back.out(2)", clearProps: clear }, at);
            } else {
              const from =
                variant === 0
                  ? { y: 50, scale: 0.95 }
                  : variant === 1
                    ? { x: i % 2 === 0 ? -50 : 50, y: 16 }
                    : { y: 40, rotationX: 12, transformPerspective: 800, transformOrigin: "50% 100%" };
              tl.fromTo(node, { autoAlpha: 0, ...from }, { autoAlpha: 1, x: 0, y: 0, scale: 1, rotationX: 0, duration: 0.95, clearProps: clear }, at);
            }
          });
        };

        ScrollTrigger.create({ trigger: region, start: "top 88%", once: true, onEnter: play });

        // Reveal immediately if keyboard focus lands inside a pending region.
        const onFocus = () => {
          play();
          region.removeEventListener("focusin", onFocus);
        };
        region.addEventListener("focusin", onFocus);
      });

      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener("load", refresh);
      return () => window.removeEventListener("load", refresh);
    });

    return () => mm.revert();
  }, [pathname]);

  return null;
}
