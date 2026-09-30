import type { Metadata } from "next";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { HeroBanner } from "@/components/hero-banner";
import { Pill } from "@/components/pill";

export const metadata: Metadata = {
  title: "Case Studies | NextGen Contact Centre",
  description:
    "Discover how organizations simplify complex processes, improve service delivery, and create more connected operations with CWIT EMS.",
};

const paymentImage = {
  src: "/figma/bring-your-customers.png",
  alt: "Payments, customers, and successful transactions connected in one flow",
  width: 912,
  height: 728,
};

const stories = Array.from({ length: 6 }, () => ({
  industry: "Utilities",
  modules: "Tickets | Chat | Analytics",
  title: "Modernizing customer service operations with CWIT EMS",
  body: "Connect customer requests, internal workflows, and operational reporting through one unified platform.",
}));

export default function CaseStudiesPage() {
  return (
    <div id="top" className="site">
      <HeroBanner
        title="See how teams run better with CWIT EMS"
        description="Explore real customer stories that show how organizations improve service delivery, simplify operations, and connect every team on one platform."
        titleClassName="max-w-[980px]"
        descriptionClassName="max-w-[820px]"
        actions={[
          { href: "#stories", label: "Explore Stories", tone: "light" },
          { href: "#demo", label: "Request Demo" },
        ]}
        image={{
          src: "/figma/hero-1.png",
          alt: "NextGen workspace on a laptop",
          width: 1266,
          height: 584,
        }}
      />

      <section id="stories" className="bg-white py-16 sm:py-24">
        <div className="content-1442">
          <div className="mx-auto max-w-[820px] text-center">
            <h2 className="text-[clamp(32px,2.6vw,44px)] leading-[1.15] font-medium tracking-[-0.03em] text-[#111111]">
              Featured success story
            </h2>
            <p className="mx-auto mt-4 max-w-[680px] text-[15px] leading-7 text-[#111111] sm:text-[16px]">
              Discover how organizations simplify complex processes, improve service delivery, and create more connected operations with CWIT EMS.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-2 lg:grid-cols-3">
            {stories.map((story, index) => (
              <article
                key={`${story.title}-${index}`}
                className="flex flex-col rounded-[22px] border border-black/10 bg-white p-6 sm:p-7"
              >
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex h-8 items-center rounded-full bg-black px-3.5 text-[13px] font-medium text-white">
                    {story.industry}
                  </span>
                  <span className="inline-flex h-8 items-center rounded-full bg-black px-3.5 text-[13px] font-medium text-white">
                    {story.modules}
                  </span>
                </div>
                <h3 className="mt-5 text-[20px] leading-[1.3] font-semibold tracking-[-0.02em] text-[#111111] sm:text-[22px]">
                  {story.title}
                </h3>
                <p className="mt-3 text-[14px] leading-6 text-[#111111] sm:text-[15px]">{story.body}</p>
                <div className="mt-auto pt-8">
                  <Pill href="/case-studies/details" tone="ghost-dark">
                    Read Case Study
                  </Pill>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Create a better way to manage customer service"
        description="CWIT EMS connects customer support, work management, CRM, analytics, and governance into one intelligent workspace."
        titleClassName="max-w-[620px]"
        actions={[{ href: "#demo", label: "Request Demo" }]}
        image={paymentImage}
      />
      <Footer />
    </div>
  );
}
