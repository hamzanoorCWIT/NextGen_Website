import Image from "next/image";
import type { ReactNode } from "react";
import { Header } from "@/components/header";
import { Pill } from "@/components/pill";

const heroBlobs = [
  { src: "/figma/ellipse-4.png", width: 1296, height: 697, left: "27.1%", top: -40, size: "67.5%" },
  { src: "/figma/ellipse-2.png", width: 1578, height: 759, left: "-6.25%", top: -20, size: "82.2%" },
  { src: "/figma/ellipse-5.png", width: 787, height: 728, left: "59.4%", top: -30, size: "41%" },
  { src: "/figma/ellipse-1.png", width: 894, height: 904, left: "-4.2%", top: -120, size: "46.6%" },
  { src: "/figma/ellipse-3.png", width: 1134, height: 759, left: "15.6%", top: -40, size: "59.1%" },
];

type HeroAction = {
  href: string;
  label: string;
  tone?: "dark" | "light" | "ghost" | "ghost-dark";
};

export function HeroBanner({
  title,
  description,
  actions = [],
  image,
  media,
  screenHeight = false,
  className = "",
  titleClassName = "max-w-[1100px]",
  descriptionClassName = "max-w-[1180px]",
}: {
  title: ReactNode;
  description: ReactNode;
  actions?: HeroAction[];
  image?: { src: string; alt: string; width: number; height: number };
  media?: ReactNode;
  screenHeight?: boolean;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}) {
  return (
    <section className={`${screenHeight ? "hero-wash hero-screen" : "hero-wash"} ${className}`}>
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {heroBlobs.map((blob) => (
          <Image
            key={blob.src}
            src={blob.src}
            alt=""
            width={blob.width}
            height={blob.height}
            priority
            className="absolute h-auto max-w-none"
            style={{ left: blob.left, top: blob.top, width: blob.size, height: "auto" }}
          />
        ))}
      </div>
      <Header />
      <div className={`hero-content-enter ${screenHeight ? "wrap relative pt-6 text-center sm:pt-8" : "wrap relative pt-10 pb-2 text-center sm:pt-16 xl:pt-20"}`}>
        <h1 className={`display mx-auto ${titleClassName}`}>{title}</h1>
        <p className={`lede mx-auto mt-4 text-[#111111] sm:mt-5 ${descriptionClassName}`}>{description}</p>
        {actions.length > 0 ? (
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:mt-7">
            {actions.map((action) => (
              <Pill key={action.label} href={action.href} tone={action.tone}>
                {action.label}
              </Pill>
            ))}
          </div>
        ) : null}
      </div>
      {media ? (
        <div className={`hero-media-enter ${screenHeight ? "relative flex min-h-0 flex-1 flex-col justify-center px-0 py-6 sm:px-4" : "relative px-0 pt-8 pb-12 sm:px-4 sm:pt-10 sm:pb-24"}`}>{media}</div>
      ) : image ? (
        <div className="hero-media-enter relative flex justify-center pt-8 pb-0 sm:pt-12">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            priority
            className="h-auto w-full object-contain"
            style={{ width: `min(100%, ${image.width}px)`, height: "auto" }}
          />
        </div>
      ) : null}
    </section>
  );
}
