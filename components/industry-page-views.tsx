import Image from "next/image";
import { CtaSection } from "@/components/cta-section";
import { FeatureSplit } from "@/components/feature-split";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HighlightCards } from "@/components/highlight-cards";
import { Pill } from "@/components/pill";
import { getListingImage, type IndustryVertical } from "@/lib/industries";

const ctaImage = {
  src: "/figma/cta-new.png",
  alt: "Payments, customers, and successful transactions connected in one flow",
  width: 802,
  height: 609,
};

const defaultImages = {
  experience: { src: "/figma/ticket-details.png", alt: "A conversation offering recipe choices and a shopping list", width: 900, height: 390 },
  workflow: { src: "/figma/ticket-route.png", alt: "A RockBank message asking a customer to confirm a suspicious charge", width: 520, height: 552 },
  insights: { src: "/figma/ticket-priorities.png", alt: "A Mountain Resort chat offering lift wait times and slope photos", width: 900, height: 500 },
  connected: { src: "/figma/connected.png", alt: "A code sample beside a statistics chart and a 98% delivery rate", width: 815, height: 537 },
};

const connectedPoints = [
  "Handle customer requests across all channels.",
  "Streamline workflows, approvals, and processes.",
  "Unite teams with real-time collaboration and visibility.",
  "Track performance with dashboards and reports.",
  "Ensure control with secure governance and compliance.",
];

export function IndustryVerticalPageView({ page }: { page: IndustryVertical }) {
  const experience = page.experienceImage ?? defaultImages.experience;
  const workflow = page.workflowImage ?? defaultImages.workflow;
  const insights = page.insightsImage ?? defaultImages.insights;
  const connected = page.connectedImage ?? defaultImages.connected;
  const listing = getListingImage(page);

  return (
    <div id="top" className="site">
      <Header className="border-b border-black/20" />
      <section className="bg-white pt-16 pb-12 sm:pt-20 sm:pb-16 lg:pt-24">
        <div className="content-1426">
          <h1 className="max-w-[860px] text-[clamp(32px,3.2vw,48px)] leading-[1.1] font-medium tracking-[-0.04em] text-balance text-[#111111]">
            {page.heroTitle}
          </h1>
          <p className="mt-5 max-w-[860px] text-[15px] leading-7 text-[#111111] sm:text-[16px]">{page.heroDescription}</p>
          <div className="relative mt-8 aspect-[1407/647] overflow-hidden rounded-[12px] sm:mt-10">
            <Image
              src={listing.src}
              alt={listing.alt}
              fill
              priority
              sizes="(min-width: 1426px) 1426px, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      <FeatureSplit
        titleClassName="font-medium"
        items={[
          {
            id: "channels",
            title: page.experienceTitle ?? "Deliver better customer experiences across every channel",
            body: page.experienceBody,
            image: experience.src,
            imageAlt: experience.alt,
            imageWidth: experience.width,
            imageHeight: experience.height,
            imageSide: "right",
            ctaLabel: "Request Demo",
            ctaHref: "/request-demo",
          },
          {
            id: "workflows",
            title: page.workflowTitle ?? "Turn complex processes into simple, connected workflows",
            body: page.workflowBody,
            image: workflow.src,
            imageAlt: workflow.alt,
            imageWidth: workflow.width,
            imageHeight: workflow.height,
            imageSide: "left",
            ctaLabel: "Request Demo",
            ctaHref: "/request-demo",
          },
          {
            id: "insights",
            title: page.insightsTitle ?? "Understand performance with insights that drive action",
            body: page.insightsBody,
            image: insights.src,
            imageAlt: insights.alt,
            imageWidth: insights.width,
            imageHeight: insights.height,
            imageSide: "right",
            ctaLabel: "Request Demo",
            ctaHref: "/request-demo",
          },
        ]}
      />

      <HighlightCards
        id="operate"
        variant="numbered"
        title={page.highlightTitle}
        description={page.highlightDescription}
        items={page.highlightItems ?? [
          {
            label: "01",
            title: "Workforce Operations",
            body: "Coordinate teams, assignments, schedules, and operational activities.",
          },
          {
            label: "02",
            title: "Workflow Automation",
            body: "Create structured processes that reduce manual work and improve response times.",
          },
          {
            label: "03",
            title: "Operational Intelligence",
            body: "Monitor performance with dashboards, reports, and real-time insights.",
          },
        ]}
      />

      <section className="bg-black py-16 text-white sm:py-24">
        <div className="content-1426 grid items-center gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-16">
          <div className="lg:order-2">
            <h2 className="max-w-[560px] text-[clamp(32px,2.6vw,44px)] leading-[1.15] font-semibold tracking-[-0.03em]">
              {page.connectedTitle}
            </h2>
            {page.connectedDescription ? <p className="mt-4 text-[15px] leading-7 text-white/75 sm:text-[16px]">{page.connectedDescription}</p> : null}
            <ul className="mt-8 space-y-3">
              {(page.connectedPoints ?? connectedPoints).map((point) => (
                <li key={typeof point === "string" ? point : point.title} className="flex items-start gap-3 text-[15px] text-white/90 sm:text-[16px]">
                  <span
                    className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-[11px] text-black"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  {typeof point === "string" ? point : (
                    <div>
                      <h3 className="font-semibold">{point.title}</h3>
                      <p className="mt-1 leading-7 text-white/75">{point.body}</p>
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Pill href="/pricing" tone="light">
                See pricing
              </Pill>
              <Pill href="/request-demo" tone="ghost">
                Request Demo
              </Pill>
            </div>
          </div>
          <div
            className="relative aspect-(--ratio) w-full overflow-hidden rounded-[24px] lg:order-1 lg:rounded-[32px] lg:aspect-auto lg:min-h-[320px]"
            style={{ "--ratio": `${connected.width} / ${connected.height}` } as React.CSSProperties}
          >
            <Image
              src={connected.src}
              alt={connected.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-left"
            />
          </div>
        </div>
      </section>

      <CtaSection
        title={page.ctaTitle ?? "Create a better way to manage customer service"}
        description={page.ctaDescription ?? "CWIT EMS connects customer support, work management, CRM, analytics, and governance into one intelligent workspace."}
        titleClassName="max-w-[620px]"
        actions={[{ href: "/request-demo", label: "Request Demo" }]}
        image={ctaImage}
      />
      <Footer />
    </div>
  );
}
