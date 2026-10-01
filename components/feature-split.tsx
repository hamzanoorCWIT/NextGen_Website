import Image from "next/image";
import { Pill } from "@/components/pill";

export type FeatureSplitItem = {
  id: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  imageSide?: "left" | "right";
  ctaLabel?: string;
  ctaHref?: string;
};

export function FeatureSplit({
  items,
  className = "bg-white",
  bandClassName,
}: {
  items: FeatureSplitItem[];
  className?: string;
  bandClassName?: string;
}) {
  return (
    <div>
      {items.map((item, index) => {
        const imageOnLeft = item.imageSide !== "right";
        const band = bandClassName && index % 2 === 1 ? bandClassName : className;
        return (
          <section key={item.id} id={item.id} className={band}>
            <article
              className={`content-1415 product-split flex flex-col items-stretch gap-8 py-12 sm:gap-10 sm:py-16 lg:grid lg:items-center ${
                imageOnLeft ? "product-split-image-left" : "product-split-image-right"
              }`}
            >
              <div className={`min-w-0 ${imageOnLeft ? "lg:order-2" : "lg:order-1"}`}>
                <h2 className="product-title text-[clamp(28px,5vw,36px)] leading-[1.12] font-semibold tracking-[-0.035em]">
                  {item.title}
                </h2>
                <p className="product-body mt-4 text-[15px] leading-7 text-[#1a1a1a] sm:mt-5 sm:text-[16px]">{item.body}</p>
                <div className="mt-8">
                  <Pill href={item.ctaHref ?? "/request-demo"}>{item.ctaLabel ?? "Explore More"}</Pill>
                </div>
              </div>
              <div className={`min-w-0 ${imageOnLeft ? "lg:order-1" : "lg:order-2"}`}>
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  width={item.imageWidth}
                  height={item.imageHeight}
                  className="h-auto w-full object-contain"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </article>
          </section>
        );
      })}
    </div>
  );
}
