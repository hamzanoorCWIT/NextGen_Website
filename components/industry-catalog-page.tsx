import Image from "next/image";
import type { ReactNode } from "react";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { HeroBanner } from "@/components/hero-banner";
import { HighlightCards } from "@/components/highlight-cards";
import { Pill } from "@/components/pill";

export type IndustryCatalogCard = {
  id: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  width: number;
  height: number;
};

type Props = {
  heroTitle: ReactNode;
  heroDescription: string;
  highlightTitle: string;
  highlightDescription: string;
  highlightItems: { label: string; title: string; body: string }[];
  cards: IndustryCatalogCard[];
  cardsId?: string;
  baseHref?: string;
};

const heroImage = {
  src: "/figma/ticket-banner.png",
  alt: "A laptop showing an inbox of customer and team messages",
  width: 1136,
  height: 548,
};

const ctaImage = {
  src: "/figma/cta-new.png",
  alt: "Payments, customers, and successful transactions connected in one flow",
  width: 802,
  height: 609,
};

export function IndustryCatalogPageView({
  heroTitle,
  heroDescription,
  highlightTitle,
  highlightDescription,
  highlightItems,
  cards,
  cardsId = "industries",
  baseHref = "/industries/by-industry",
}: Props) {
  return (
    <div id="top" className="site">
      <HeroBanner
        title={heroTitle}
        description={heroDescription}
        titleClassName="max-w-[980px]"
        descriptionClassName="max-w-[820px]"
        actions={[
          { href: `#${cardsId}`, label: "Explore Solutions", tone: "light" },
          { href: "/request-demo", label: "Request Demo" },
        ]}
        image={heroImage}
      />

      <HighlightCards
        id="operate"
        variant="numbered"
        title={highlightTitle}
        description={highlightDescription}
        items={highlightItems}
      />

      <section id={cardsId} className="bg-[#FAFAFA] py-8 sm:py-16">
        <div className="content-1426 grid gap-5 sm:grid-cols-2 sm:gap-6">
          {cards.map((item) => (
            <article
              key={item.id}
              id={item.id}
              className="flex scroll-mt-24 flex-col rounded-[12px] border border-[#ececec] bg-white p-4 shadow-[0_1px_2px_rgba(16,24,40,0.04)] sm:p-5"
            >
              <div className="overflow-hidden rounded-[12px] bg-[#f6f7f9]">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  width={item.width}
                  height={item.height}
                  // Wide banner-style images (e.g. By Industry) show uncropped; others fill a fixed-height frame.
                  className={
                    item.width / item.height > 2
                      ? "h-auto w-full"
                      : "h-[200px] w-full object-cover object-top sm:h-[240px]"
                  }
                />
              </div>
              <h3 className="mt-5 text-[20px] font-semibold tracking-[-0.02em] sm:text-[22px]">{item.title}</h3>
              <p className="mt-2 max-w-[520px] text-[14px] leading-6 text-[#1a1a1a] sm:text-[15px]">{item.body}</p>
              <div className="mt-5">
                <Pill href={`${baseHref}/${item.id}`}>Explore More</Pill>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaSection
        title="Create a better way to manage customer service"
        description="CWIT EMS connects customer support, work management, CRM, analytics, and governance into one intelligent workspace."
        titleClassName="max-w-[620px]"
        actions={[{ href: "/request-demo", label: "Request Demo" }]}
        image={ctaImage}
      />
      <Footer />
    </div>
  );
}
