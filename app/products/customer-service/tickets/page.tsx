import type { Metadata } from "next";
import Image from "next/image";
import { CtaSection } from "@/components/cta-section";
import { FeatureSplit } from "@/components/feature-split";
import { Footer } from "@/components/footer";
import { HeroBanner } from "@/components/hero-banner";
import { HighlightCards } from "@/components/highlight-cards";
import { Pill } from "@/components/pill";
import { ProductModules } from "@/components/product-modules";

export const metadata: Metadata = {
  title: "Tickets | NextGen Contact Centre",
  description:
    "Manage incoming requests, internal issues, and service cases in one organized workspace. Assign ownership, track progress, and manage SLAs.",
};

const checklist = [
  "Complete customer interaction history",
  "Response & resolution tracking",
  "Complete ticket journey",
  "Smart summaries & reply suggestions",
  "Assign and involve team members",
];

export default function TicketsPage() {
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
          { href: "/request-demo", label: "See Pricing", tone: "light" },
          { href: "/request-demo", label: "Request Demo" },
        ]}
        image={{
          src: "/figma/ticket-banner.png",
          alt: "A laptop showing an inbox of customer and team messages",
          width: 1136,
          height: 548,
        }}
      />

      <HighlightCards
        id="views"
        variant="numbered"
        title="Every ticket, organized the way your team works."
        description="Manage every request from a single workspace with flexible views built for different workflows. Review ticket details in a structured table, or move work visually through Kanban stages to track ownership, progress, and resolution."
        items={[
          {
            label: "01",
            title: "Table View",
            body: "Monitor status, priority, SLA, assignees, department, and customer details while customizing columns to fit your team's workflow.",
          },
          {
            label: "02",
            title: "Card View",
            body: "Tickets adapts to your team's style, whether you prefer structured records or visual workflows.",
          },
          {
            label: "03",
            title: "Kanban View",
            body: "Organize tickets by status and help teams identify what needs attention, what's in progress, and what's resolved.",
          },
        ]}
      />

      <FeatureSplit
        items={[
          {
            id: "request-details",
            title: "Complete Request Details",
            body: "Capture the context behind every request with structured fields for subject, message, attachments, and internal notes. Give teams the information they need before taking action.",
            image: "/figma/ticket-1.png",
            imageAlt: "Ticket with complete request details",
            imageWidth: 719,
            imageHeight: 474,
            imageSide: "right",
            ctaLabel: "Request Demo",
            ctaHref: "/request-demo",
          },
          {
            id: "route",
            title: "Categorize and route automatically",
            body: "Organize tickets by purpose, category, department, and source. Ensure every request reaches the right team with clear ownership from the start.",
            image: "/figma/ticket-2.png",
            imageAlt: "Tickets categorized and routed automatically",
            imageWidth: 719,
            imageHeight: 474,
            imageSide: "left",
            ctaLabel: "Request Demo",
            ctaHref: "/request-demo",
          },
          {
            id: "priorities",
            title: "Set priorities and deadlines",
            body: "Define ticket priority, SLA requirements, and response expectations early in the workflow. Help teams focus on urgent requests and maintain service standards.",
            image: "/figma/ticket-3.png",
            imageAlt: "Ticket priorities and deadlines",
            imageWidth: 719,
            imageHeight: 474,
            imageSide: "right",
            ctaLabel: "Request Demo",
            ctaHref: "/request-demo",
          },
        ]}
      />

      <section className="bg-black py-16 text-white sm:py-24">
        <div className="content-1426">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[720px]">
              <h2 className="text-[clamp(32px,2.6vw,44px)] leading-[1.15] font-semibold tracking-[-0.03em]">
                Capture every request with complete information.
              </h2>
              <p className="mt-4 max-w-[640px] text-[15px] leading-7 text-white/75 sm:text-[16px]">
                Every ticket starts with the right information. Capture details, assign ownership, define priorities, and
                organize requests with structured fields that help teams resolve issues faster.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Pill href="/request-demo" tone="light">
                See pricing
              </Pill>
              <Pill href="/request-demo" tone="ghost">
                Request Demo
              </Pill>
            </div>
          </div>

          <div className="mt-12 grid items-stretch gap-4 sm:grid-cols-2 sm:gap-5">
            <article className="flex min-h-[420px] flex-col overflow-hidden rounded-[12px] bg-[#f6f4f1] p-6 pt-9 pl-9 text-[#111111] sm:min-h-[480px] sm:p-7 sm:pt-12 sm:pl-12">
              <h3 className="max-w-[420px] text-[18px] leading-snug font-semibold tracking-[-0.02em] sm:text-[20px]">
                Capture messages, notes, and essential request information in one place.
              </h3>
              <div className="-mr-6 -mb-6 mt-6 flex flex-1 items-end justify-end sm:-mr-7 sm:-mb-7">
                <Image
                  src="/figma/capture-1.png"
                  alt="Creating a playbook with name, description, and instructions"
                  width={704}
                  height={502}
                  className="h-auto w-full translate-x-[5.26%] translate-y-[7.57%]"
                />
              </div>
            </article>

            <article className="flex min-h-[420px] flex-col overflow-hidden rounded-[12px] bg-[#f6f4f1] p-6 pt-9 pl-9 text-[#111111] sm:min-h-[480px] sm:p-7 sm:pt-12 sm:pl-12">
              <h3 className="max-w-[420px] text-[18px] leading-snug font-semibold tracking-[-0.02em] sm:text-[20px]">
                Classify requests by purpose, source, department, and priority.
              </h3>
              <div className="-mb-6 mt-6 flex flex-1 items-end justify-center sm:-mb-7">
                <Image
                  src="/figma/capture-2.png"
                  alt="Classifying the conversations an agent handles"
                  width={666}
                  height={513}
                  className="h-auto w-full translate-y-[7.41%]"
                />
              </div>
            </article>

            <article className="flex min-h-[420px] flex-col overflow-hidden rounded-[12px] bg-[#f6f4f1] p-6 pt-9 pl-9 text-[#111111] sm:min-h-[480px] sm:p-7 sm:pt-12 sm:pl-12">
              <h3 className="max-w-[440px] text-[18px] leading-snug font-semibold tracking-[-0.02em] sm:text-[20px]">
                Set expectations and track response commitments from creation.
              </h3>
              <div className="-mr-6 -mb-6 mt-6 flex flex-1 items-end justify-end sm:-mr-7 sm:-mb-7">
                <Image
                  src="/figma/capture-3.png"
                  alt="Assigning a ticket to an agent"
                  width={664}
                  height={540}
                  className="h-auto w-full translate-x-[5.57%] translate-y-[6.85%]"
                />
              </div>
            </article>

            <article className="flex min-h-[420px] flex-col overflow-hidden rounded-[12px] bg-[#f6f4f1] p-6 pt-9 pl-9 text-[#111111] sm:min-h-[480px] sm:p-7 sm:pt-12 sm:pl-12">
              <h3 className="max-w-[440px] text-[18px] leading-snug font-semibold tracking-[-0.02em] sm:text-[20px]">
                Assign tickets to the right people and teams instantly.
              </h3>
              <div className="-mb-6 mt-6 flex flex-1 items-end justify-center sm:-mb-7">
                <Image
                  src="/figma/capture-4.png"
                  alt="Agent performance with key metrics and reply quality"
                  width={666}
                  height={515}
                  className="h-auto w-full translate-y-[7.38%]"
                />
              </div>
            </article>
          </div>
        </div>
      </section>

      <HighlightCards
        variant="icon"
        title="Every ticket follows a clear path to resolution."
        description="From assignment to escalation, Tickets keeps every request moving through a defined workflow. Route issues, manage ownership, track status changes, and ensure teams always know what needs attention next."
        items={[
          {
            title: "Assign & route",
            body: "Send every ticket to the right team with clear ownership.",
          },
          {
            title: "Prioritize work",
            body: "Highlight urgent requests and focus teams where they matter most.",
          },
          {
            title: "Track progress",
            body: "Monitor every stage from creation to completion.",
          },
          {
            title: "Collaborate easily",
            body: "Keep teams connected while maintaining accountability.",
          },
        ]}
      />

      <section className="bg-white py-8 sm:py-16">
        <div className="content-1426 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="max-w-[520px] text-[clamp(32px,2.6vw,44px)] leading-[1.15] font-semibold tracking-[-0.03em]">
              Capture every request with complete information.
            </h2>
            <p className="mt-4 max-w-[520px] text-[15px] leading-7 text-[#1a1a1a] sm:text-[16px]">
              Every ticket starts with the right information. Capture details, assign ownership, define priorities, and
              organize requests with structured fields that help teams resolve issues faster.
            </p>
            <ul className="mt-6 space-y-3">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] sm:text-[16px]">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-black text-[11px] text-white" aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Pill href="/request-demo" tone="ghost-dark">
                See pricing
              </Pill>
              <Pill href="/request-demo">Request Demo</Pill>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[560px] lg:mx-0 lg:max-w-none">
            <Image
              src="/figma/capture-complete.png"
              alt="Ticket statistics and delivery rate dashboard"
              width={810}
              height={514}
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      <ProductModules
        id="modules"
        indicator="check"
        title="More Customer Service Products"
        description="Everything your customer service team needs"
        actions={[
          { href: "/products", label: "Products Overview", tone: "ghost-dark" },
          { href: "#modules", label: "All Modules" },
        ]}
        tabs={[
          {
            id: "chat-whatsapp",
            label: "Chat & WhatsApp",
            image: {
              src: "/figma/product-tab-2.png",
              alt: "Chat and WhatsApp conversations workspace",
              width: 948,
              height: 617,
            },
          },
          {
            id: "calls-campaigns",
            label: "Calls & Campaigns",
            active: true,
            image: {
              src: "/figma/product-tab-3.png",
              alt: "Calls and campaigns workspace",
              width: 948,
              height: 617,
            },
          },
        ]}
      />

      <CtaSection
        title={
          <>
            Build a ticket management
            <br className="hidden lg:block" /> process that works for your
            <br className="hidden lg:block" /> organization
          </>
        }
        description={
          <>
            CWIT EMS connects customer support, work management, CRM, analytics, and
            <br className="hidden lg:block" /> governance into one intelligent workspace.
          </>
        }
        titleClassName="max-w-[640px]"
        descriptionClassName="max-w-[640px]"
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
