import Image from "next/image";
import { CtaSection } from "@/components/cta-section";
import { FeatureSplit } from "@/components/feature-split";
import { Footer } from "@/components/footer";
import { HeroBanner } from "@/components/hero-banner";
import { HighlightCards } from "@/components/highlight-cards";
import { Pill } from "@/components/pill";
import type { IndustryVertical } from "@/lib/industries";

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
  const [heroLead, heroRest] = page.heroTitle.split(" with ");
  const experience = page.experienceImage ?? defaultImages.experience;
  const workflow = page.workflowImage ?? defaultImages.workflow;
  const insights = page.insightsImage ?? defaultImages.insights;
  const connected = page.connectedImage ?? defaultImages.connected;

  return (
    <div id="top" className="site">
      <HeroBanner
        title={
          <>
            {heroLead} with
            <br />
            {heroRest}
          </>
        }
        description={page.heroDescription}
        titleClassName="max-w-[980px]"
        descriptionClassName="max-w-[860px]"
        actions={[
          { href: "#operate", label: "Explore the Platform", tone: "light" },
          { href: "/request-demo", label: "Request Demo" },
        ]}
        image={page.heroImage}
      />

      <HighlightCards
        id="operate"
        variant="numbered"
        title={page.highlightTitle}
        description={page.highlightDescription}
        items={[
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

      <FeatureSplit
        items={[
          {
            id: "channels",
            title: "Deliver better customer experiences across every channel",
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
            title: "Turn complex processes into simple, connected workflows",
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
            title: "Understand performance with insights that drive action",
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

      <section className="bg-black py-16 text-white sm:py-24">
        <div className="content-1426 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="max-w-[560px] text-[clamp(32px,2.6vw,44px)] leading-[1.15] font-semibold tracking-[-0.03em]">
              {page.connectedTitle}
            </h2>
            <ul className="mt-8 space-y-3">
              {connectedPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-[15px] text-white/90 sm:text-[16px]">
                  <span
                    className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-[11px] text-black"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  {point}
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
          <div className="flex justify-center lg:justify-end">
            <Image
              src={connected.src}
              alt={connected.alt}
              width={connected.width}
              height={connected.height}
              className="h-auto w-full object-contain"
              style={{ width: `min(100%, ${connected.width}px)`, height: "auto" }}
            />
          </div>
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
