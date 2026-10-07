import type { Metadata } from "next";
import Image from "next/image";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { HeroBanner } from "@/components/hero-banner";
import { HighlightCards } from "@/components/highlight-cards";
import { Pill } from "@/components/pill";

export const metadata: Metadata = {
  title: "Industry Details | NextGen Contact Centre",
  description:
    "CWIT EMS brings customer service, workflows, analytics, and governance together so every industry can manage daily operations in one connected platform.",
};

const industries = [
  {
    id: "utilities",
    title: "Utilities",
    body: "Manage customer services, field operations, and internal workflows with connected communication, request management, and real-time operational visibility.",
    image: "/figma/cs-tickets.png",
    imageAlt: "A ticket inbox for customer requests",
    width: 471,
    height: 298,
  },
  {
    id: "banking-financial",
    title: "Banking & Financial Services",
    body: "Deliver secure and reliable customer experiences with structured workflows, compliance processes, approvals, and complete control over service operations.",
    image: "/figma/product-create.png",
    imageAlt: "A workspace for creating a customer campaign",
    width: 730,
    height: 456,
  },
  {
    id: "bpo-outsourcing",
    title: "BPO & Outsourcing",
    body: "Handle high-volume customer operations efficiently with omnichannel communication, workforce coordination, performance tracking, and automated workflows.",
    image: "/figma/ticket-details.png",
    imageAlt: "A conversation offering recipe choices and a shopping list",
    width: 900,
    height: 390,
  },
  {
    id: "government",
    title: "Government",
    body: "Improve citizen services and internal operations through transparent processes, centralized communication, approvals, and accountable service delivery.",
    image: "/figma/product-studio.png",
    imageAlt: "A studio workspace for publishing a campaign",
    width: 720,
    height: 427,
  },
  {
    id: "telecom",
    title: "Telecom",
    body: "Support complex customer interactions with connected channels, faster service management, intelligent workflows, and real-time operational visibility.",
    image: "/figma/cs-tickets.png",
    imageAlt: "A ticket inbox for customer requests",
    width: 471,
    height: 298,
  },
  {
    id: "professional-services",
    title: "Professional Services",
    body: "Deliver secure and reliable customer experiences with structured workflows, compliance processes, approvals, and complete control over service operations.",
    image: "/figma/ticket-details.png",
    imageAlt: "A conversation offering recipe choices and a shopping list",
    width: 900,
    height: 390,
  },
  {
    id: "construction",
    title: "Construction",
    body: "Coordinate projects, teams, approvals, and operational activities with structured workflows built for complex business environments.",
    image: "/figma/ticket-route.png",
    imageAlt: "A RockBank message asking a customer to confirm a suspicious charge",
    width: 520,
    height: 552,
  },
];

export default function IndustryDetailsPage() {
  return (
    <div id="top" className="site">
      <HeroBanner
        title={
          <>
            Every customer request, tracked from
            <br />
            start to resolution.
          </>
        }
        description="Manage incoming requests, internal issues, and service cases in one organized workspace. Assign ownership, track progress, manage SLAs, and keep every interaction connected to the ticket."
        titleClassName="max-w-[980px]"
        descriptionClassName="max-w-[820px]"
        actions={[
          { href: "#industries", label: "Explore Solutions", tone: "light" },
          { href: "/request-demo", label: "Request Demo" },
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
        title="Everything your industry needs to operate smarter"
        description="CWIT EMS brings customer service, workflows, analytics, and governance together in one connected platform. Empower teams with the tools they need to manage daily operations, automate processes, improve visibility."
        items={[
          {
            label: "01",
            title: "Connected Customer Operations",
            body: "Manage conversations, requests, and customer journeys across multiple channels.",
          },
          {
            label: "02",
            title: "Automated Workflows",
            body: "Create structured processes that improve efficiency and reduce manual effort.",
          },
          {
            label: "03",
            title: "Real-Time Visibility",
            body: "Monitor operations through dashboards, reports, and actionable insights.",
          },
        ]}
      />

      <section id="industries" className="bg-[#FAFAFA] py-8 sm:py-16">
        <div className="content-1426 grid gap-5 sm:grid-cols-2 sm:gap-6">
          {industries.map((item) => (
            <article key={item.id} id={item.id} className="flex scroll-mt-24 flex-col rounded-[12px] border border-[#ececec] bg-white p-4 shadow-[0_1px_2px_rgba(16,24,40,0.04)] sm:p-5">
              <div className="overflow-hidden rounded-[12px] bg-[#f6f7f9]">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  width={item.width}
                  height={item.height}
                  className="h-[200px] w-full object-cover object-top sm:h-[240px]"
                />
              </div>
              <h3 className="mt-5 text-[20px] font-semibold tracking-[-0.02em] sm:text-[22px]">{item.title}</h3>
              <p className="mt-2 max-w-[520px] text-[14px] leading-6 text-[#1a1a1a] sm:text-[15px]">{item.body}</p>
              <div className="mt-5">
                <Pill href={`/industries/by-industry/${item.id}`}>Explore More</Pill>
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
        image={{
          src: "/figma/cta-new.png",
          alt: "Payments, customers, and successful transactions connected in one flow",
          width: 802,
          height: 609,
        }}
      />
      <Footer />
    </div>
  );
}
