import type { Metadata } from "next";
import Image from "next/image";
import { CountUp } from "@/components/count-up";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Testimonials } from "@/components/testimonials";

export const metadata: Metadata = {
  title: "Modernizing customer service operations | Case Studies",
  description:
    "See how a unified approach to customer requests, internal workflows, and operational reporting can help service teams work with clearer ownership, consistent processes, and greater visibility from first contact to resolution.",
};

const articleTitle = "Modernizing customer service operations with CWIT EMS";

const challengePoints = [
  {
    title: "Multiple communication channels",
    body: "Conversations and requests were spread across separate channels, making it difficult for teams to follow a complete customer history.",
  },
  {
    title: "Manual request handling",
    body: "Repeated data entry and manual handoffs increased administrative work and introduced opportunities for missed updates.",
  },
  {
    title: "Limited workflow visibility",
    body: "Managers lacked a consolidated view of request ownership, progress, overdue items, and outstanding service obligations.",
  },
  {
    title: "Difficulty tracking performance",
    body: "Fragmented records made it harder to compare team workloads, monitor response and resolution progress, and identify recurring issues.",
  },
];

const measurementAreas = [
  {
    stat: 40,
    title: "Request handling speed",
  },
  {
    stat: 60,
    title: "Workflow visibility",
  },
  {
    stat: 50,
    title: "Manual processing effort",
  },
  {
    stat: 95,
    title: "Operational tracking accuracy",
  },
];

const shareLinks = [
  { label: "WhatsApp", href: `https://wa.me/?text=${encodeURIComponent(articleTitle)}` },
  { label: "X", href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(articleTitle)}` },
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?quote=${encodeURIComponent(articleTitle)}` },
];

function ShareIcon({ label }: { label: string }) {
  if (label === "WhatsApp") {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
        <path
          d="M8 1.4A6.6 6.6 0 0 0 2.7 12.1L2 14.6l2.6-.7A6.6 6.6 0 1 0 8 1.4Zm3.5 9.3c-.1.4-.7.7-1.1.8-.3 0-.7.1-2.3-.5-1.9-.8-3.1-2.7-3.2-2.8-.1-.1-.9-1.2-.9-2.3s.6-1.6.8-1.8.4-.3.6-.3h.4c.1 0 .3 0 .4.3.2.5.6 1.6.6 1.7.1.1 0 .3 0 .4-.1.1-.1.2-.2.3l-.3.3c-.1.1-.2.2-.1.4.1.2.6 1 1.3 1.6.9.8 1.6 1 1.8 1.1.2.1.3.1.4-.1l.4-.5c.1-.1.2-.1.4-.1l1.1.5c.2.1.3.2.3.3 0 .2 0 .6-.2.8Z"
          fill="currentColor"
        />
      </svg>
    );
  }
  if (label === "X") {
    return (
      <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
        <path d="M10.8 1.2h1.8L8.4 6.1 13.3 12.8H9.5L6.5 8.8l-3.4 4H1.3l4.5-5.2L.8 1.2h3.9l2.7 3.6 3.4-3.6Zm-.6 10.4h1L3.9 2.3H2.8l7.4 9.3Z" fill="currentColor" />
      </svg>
    );
  }
  if (label === "Instagram") {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
        <rect x="2" y="2" width="12" height="12" rx="3.2" fill="none" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="8" cy="8" r="2.7" fill="none" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="11.4" cy="4.6" r="0.7" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M9.2 13.6V8.7h1.6l.2-1.9H9.2V5.6c0-.5.2-.9.9-.9h1V3.1C10.9 3 10.3 3 9.6 3 8 3 6.9 4 6.9 5.5v1.3H5.3v1.9h1.6v4.9h2.3Z" fill="currentColor" />
    </svg>
  );
}

function Tick() {
  return (
    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black">
      <Image src="/figma/bullets-tick.png" alt="" width={24} height={24} className="h-6 w-6" />
    </span>
  );
}

export default function CaseStudyDetailsPage() {
  return (
    <div id="top" className="site">
      <Header className="border-b border-black/20" />
      <article className="bg-white pt-20 pb-12 sm:pt-[100px] sm:pb-16 lg:pt-[124px] lg:pb-20">
        <div className="content-1442">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-[13px] text-[#8a8f98]">
            <a href="/" aria-label="Home" className="text-[#8a8f98]">
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M2.5 7.2 8 2.6l5.5 4.6V13a1 1 0 0 1-1 1h-3.2V9.6H6.7V14H3.5a1 1 0 0 1-1-1V7.2Z" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
              </svg>
            </a>
            <span aria-hidden="true">›</span>
            <a href="/case-studies" className="text-[#8a8f98]">
              Case Studies
            </a>
            <span aria-hidden="true">›</span>
            <span className="text-[#111111]">{articleTitle}</span>
          </nav>

          <div className="mt-8 flex flex-col gap-5 sm:mt-10 lg:flex-row lg:items-center lg:justify-between">
            <h1 className="w-[min(946px,100%)] text-[clamp(32px,2.7vw,48px)] leading-[1.08] font-medium tracking-[-0.045em] text-[#111111]">
              <span className="block">Modernizing customer service</span>
              <span className="block">operations with CWIT EMS</span>
            </h1>
            <div className="flex shrink-0 items-center gap-3">
              <span className="text-[14px] text-[#111111]">Share:</span>
              {shareLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-[#70C6AA]"
                >
                  <ShareIcon label={item.label} />
                </a>
              ))}
            </div>
          </div>

          <p className="mt-6 w-[min(1407px,100%)] text-[15px] leading-7 text-[#111111] sm:text-[16px]">
            See how a unified approach to customer requests, internal workflows, and operational reporting can help service teams work with clearer ownership, consistent processes, and greater visibility from first contact to resolution.
          </p>

          <div className="mt-8 overflow-hidden rounded-[12px] sm:mt-10">
            <Image
              src="/figma/docs-detail-banner.png"
              alt="CWIT EMS dashboard on a tablet with task status, revenue, and compliance insights"
              width={1407}
              height={647}
              priority
              className="h-auto w-full object-contain"
              style={{ width: "min(100%, 1407px)", height: "auto" }}
            />
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-[14px] text-[#6b7280]">
            <span>October 11, 2018</span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#70C6AA]" aria-hidden="true" />
            <span className="inline-flex items-center gap-1.5">
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" className="text-[#70C6AA]">
                <path d="M1.4 8S3.6 3.6 8 3.6 14.6 8 14.6 8 12.4 12.4 8 12.4 1.4 8 1.4 8Z" fill="none" stroke="currentColor" strokeWidth="1.3" />
                <circle cx="8" cy="8" r="2" fill="none" stroke="currentColor" strokeWidth="1.3" />
              </svg>
              1,353 Views
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#70C6AA]" aria-hidden="true" />
            <span className="inline-flex items-center gap-1.5">
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" className="text-[#70C6AA]">
                <path d="M8 13.2S2.2 9.6 2.2 6.1A2.9 2.9 0 0 1 8 5.2a2.9 2.9 0 0 1 5.8.9c0 3.5-5.8 7.1-5.8 7.1Z" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
              </svg>
              5
            </span>
          </div>
        </div>
      </article>

      <section className="bg-white py-16 sm:py-24">
        <div className="content-1442">
          <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
            <h2 className="text-[clamp(32px,2.8vw,44px)] leading-[1.15] font-medium tracking-[-0.03em] text-[#111111]">
              About the organization
            </h2>
            <p className="text-[15px] leading-7 text-[#111111] sm:text-[16px]">
              This illustrative case study follows a growing service organization managing customer requests across multiple channels and departments. As workloads expanded, its teams needed a more consistent way to coordinate service delivery, track accountability, and maintain an accurate view of ongoing work.
            </p>
          </div>
          <div className="mt-10 overflow-hidden rounded-[12px]">
            <Image
              src="/figma/about-org.png"
              alt="NextGen Contact Centre office building"
              width={1415}
              height={532}
              className="h-auto w-full object-contain"
              style={{ width: "min(100%, 1415px)", height: "auto" }}
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="content-1442 grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-16">
          <div
            className="relative aspect-(--ratio) w-full overflow-hidden rounded-[24px] lg:aspect-auto lg:h-full lg:min-h-[320px] lg:rounded-[32px]"
            style={{ "--ratio": "719 / 474" } as React.CSSProperties}
          >
            <Image
              src="/figma/managin-complexity.png"
              alt="Customer contacts workspace with a complete view of interactions, tickets, projects, and follow-ups"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-left"
            />
          </div>
          <div>
            <h2 className="max-w-[560px] text-[clamp(32px,2.8vw,44px)] leading-[1.15] font-medium tracking-[-0.03em] text-[#111111]">
              Managing complexity across growing operations
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-[#111111] sm:text-[16px]">
              With requests arriving through different channels and work passing between teams, disconnected processes made daily operations harder to manage. The organization aimed to create one reliable workflow without losing the context behind each customer interaction.
            </p>
            <ul className="mt-8 space-y-5">
              {challengePoints.map((point) => (
                <li key={point.title} className="flex items-start gap-3 text-[15px] leading-6 text-[#111111]">
                  <Tick />
                  <span>
                    <span className="block font-semibold">{point.title}</span>
                    <span className="mt-1 block">{point.body}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="content-1442">
          <h2 className="mx-auto max-w-[760px] text-center text-[clamp(32px,2.8vw,44px)] leading-[1.15] font-medium tracking-[-0.03em] text-[#111111]">
            Measuring improvements after implementation
          </h2>
          <p className="mx-auto mt-5 max-w-[820px] text-center text-[15px] leading-7 text-[#111111] sm:text-[16px]">
            Success should be evaluated against an agreed baseline and measurement period. The following outcomes are the proposed measurement areas for this case study, not verified results.
          </p>
          <div className="mt-12 grid gap-8 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {measurementAreas.map((item) => (
              <div key={item.title}>
                <p className="text-[clamp(40px,4vw,56px)] leading-none font-medium tracking-[-0.04em] text-[#111111]"><CountUp value={item.stat} suffix="%" /></p>
                <h3 className="mt-4 text-[18px] font-semibold tracking-[-0.02em] text-[#111111]">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <CtaSection
        title="Build a customer service process that grows with your organization"
        description="Bring Tickets, customer conversations, workflow management, reporting, and governance into a connected workspace. Give teams the context to respond effectively and managers the visibility to improve service delivery as operational needs evolve."
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
