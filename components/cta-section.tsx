import Image from "next/image";
import type { ReactNode } from "react";
import { Pill } from "@/components/pill";

type CtaAction = {
  href: string;
  label: string;
  tone?: "dark" | "light" | "ghost" | "ghost-dark";
};

export function CtaSection({
  title,
  description,
  actions,
  image,
  titleClassName = "max-w-[760px]",
  descriptionClassName = "max-w-[580px]",
}: {
  title: ReactNode;
  description: ReactNode;
  actions: CtaAction[];
  image: { src: string; alt: string; width: number; height: number };
  titleClassName?: string;
  descriptionClassName?: string;
}) {
  return (
    <section className="bg-[#f7f8fb] py-12 sm:py-16 lg:py-24">
      <div className="content-1442 grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
        <div>
          <h2
            className={`${titleClassName} text-[clamp(28px,2.7vw,52px)] leading-[1.12] font-medium tracking-[-0.04em]`}
          >
            {title}
          </h2>
          <p className={`mt-5 text-[15px] leading-7 text-[#111111] sm:text-[16px] ${descriptionClassName}`}>{description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {actions.map((action) => (
              <Pill key={action.label} href={action.href} tone={action.tone}>
                {action.label}
              </Pill>
            ))}
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="h-auto w-full object-contain"
            style={{ width: `min(100%, ${image.width}px)`, height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
}
