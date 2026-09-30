import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CtaSection } from "@/components/cta-section";
import { FeatureSplit } from "@/components/feature-split";
import { Footer } from "@/components/footer";
import { HeroBanner } from "@/components/hero-banner";
import { HighlightCards } from "@/components/highlight-cards";
import { Pill } from "@/components/pill";

type IndustryCopy = {
  name: string;
  heroTitle: string;
  heroDescription: string;
  highlightTitle: string;
  highlightDescription: string;
  experienceBody: string;
  workflowBody: string;
  insightsBody: string;
  connectedTitle: string;
};

const utilities: IndustryCopy = {
  name: "Utilities",
  heroTitle: "Run utility operations with connected services",
  heroDescription:
    "Utilities manage thousands of customer interactions, operational requests, and internal processes every day. CWIT EMS connects service teams, field operations, and management workflows into one intelligent platform.",
  highlightTitle: "Utility operations are complex. Your platform should not be.",
  highlightDescription:
    "From customer complaints to internal approvals, utility organizations need visibility across every interaction. CWIT EMS helps teams simplify daily operations while maintaining control and reliability.",
  experienceBody:
    "Utility customers expect fast, reliable support whenever they need it. CWIT EMS brings conversations, service requests, and customer history together, helping teams respond faster and deliver consistent experiences across every interaction.",
  workflowBody:
    "From service requests to internal approvals, CWIT EMS helps utility teams automate repetitive processes, route work efficiently, and keep every department aligned with clear ownership and visibility.",
  insightsBody:
    "Monitor service operations, workforce activity, and business performance through connected dashboards and reporting. CWIT EMS gives utility leaders the visibility needed to make informed decisions and improve daily operations.",
  connectedTitle: "Connected operations for modern utility providers",
};

const industries: Record<string, IndustryCopy> = {
  utilities,
  "banking-financial": adapt(
    "Banking & Financial Services",
    "banking",
    "Deliver secure and reliable customer experiences with structured workflows, compliance processes, approvals, and complete control over service operations.",
  ),
  "bpo-outsourcing": adapt(
    "BPO & Outsourcing",
    "BPO",
    "Handle high-volume customer operations efficiently with omnichannel communication, workforce coordination, performance tracking, and automated workflows.",
  ),
  government: adapt(
    "Government",
    "government",
    "Improve citizen services and internal operations through transparent processes, centralized communication, approvals, and accountable service delivery.",
  ),
  telecom: adapt(
    "Telecom",
    "telecom",
    "Support complex customer interactions with connected channels, faster service management, intelligent workflows, and real-time operational visibility.",
  ),
  "professional-services": adapt(
    "Professional Services",
    "professional services",
    "Deliver secure and reliable customer experiences with structured workflows, compliance processes, approvals, and complete control over service operations.",
  ),
  construction: adapt(
    "Construction",
    "construction",
    "Coordinate projects, teams, approvals, and operational activities with structured workflows built for complex business environments.",
  ),
};

function adapt(name: string, adjective: string, heroDescription: string): IndustryCopy {
  const titled = adjective.charAt(0).toUpperCase() + adjective.slice(1);
  return {
    name,
    heroTitle: `Run ${adjective} operations with connected services`,
    heroDescription,
    highlightTitle: `${titled} operations are complex. Your platform should not be.`,
    highlightDescription: `From customer requests to internal approvals, ${adjective} organizations need visibility across every interaction. CWIT EMS helps teams simplify daily operations while maintaining control and reliability.`,
    experienceBody: `${titled} customers expect fast, reliable support whenever they need it. CWIT EMS brings conversations, service requests, and customer history together, helping teams respond faster and deliver consistent experiences across every interaction.`,
    workflowBody: `From service requests to internal approvals, CWIT EMS helps ${adjective} teams automate repetitive processes, route work efficiently, and keep every department aligned with clear ownership and visibility.`,
    insightsBody: `Monitor service operations, workforce activity, and business performance through connected dashboards and reporting. CWIT EMS gives ${adjective} leaders the visibility needed to make informed decisions and improve daily operations.`,
    connectedTitle: `Connected operations for modern ${adjective} organizations`,
  };
}

const connectedPoints = [
  "Handle customer requests across all channels.",
  "Streamline workflows, approvals, and processes.",
  "Unite teams with real-time collaboration and visibility.",
  "Track performance with dashboards and reports.",
  "Ensure control with secure governance and compliance.",
];

const paymentImage = {
  src: "/figma/bring-your-customers.png",
  alt: "Payments, customers, and successful transactions connected in one flow",
  width: 912,
  height: 728,
};

export function generateStaticParams() {
  return Object.keys(industries).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = industries[slug];
  if (!page) return { title: "Industry | NextGen Contact Centre" };
  return {
    title: `${page.name} | NextGen Contact Centre`,
    description: page.heroDescription,
  };
}

export default async function IndustrySubpage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = industries[slug];
  if (!page) notFound();

  const [heroLead, heroRest] = page.heroTitle.split(" with ");

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
          { href: "#demo", label: "Request Demo" },
        ]}
        image={{
          src: "/figma/hero-1.png",
          alt: "A laptop showing an inbox of customer and team messages",
          width: 1266,
          height: 584,
        }}
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
            image: "/figma/ticket-details.png",
            imageAlt: "A conversation offering recipe choices and a shopping list",
            imageWidth: 900,
            imageHeight: 390,
            imageSide: "right",
            ctaLabel: "Request Demo",
            ctaHref: "#demo",
          },
          {
            id: "workflows",
            title: "Turn complex processes into simple, connected workflows",
            body: page.workflowBody,
            image: "/figma/ticket-route.png",
            imageAlt: "A RockBank message asking a customer to confirm a suspicious charge",
            imageWidth: 520,
            imageHeight: 552,
            imageSide: "left",
            ctaLabel: "Request Demo",
            ctaHref: "#demo",
          },
          {
            id: "insights",
            title: "Understand performance with insights that drive action",
            body: page.insightsBody,
            image: "/figma/ticket-priorities.png",
            imageAlt: "A Mountain Resort chat offering lift wait times and slope photos",
            imageWidth: 900,
            imageHeight: 500,
            imageSide: "right",
            ctaLabel: "Request Demo",
            ctaHref: "#demo",
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
              <Pill href="#demo" tone="ghost">
                Request Demo
              </Pill>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/figma/connected.png"
              alt="A code sample beside a statistics chart and a 98% delivery rate"
              width={815}
              height={537}
              className="h-auto w-full object-contain"
              style={{ width: "min(100%, 815px)", height: "auto" }}
            />
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
