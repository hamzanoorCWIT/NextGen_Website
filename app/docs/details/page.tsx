import type { Metadata } from "next";
import Image from "next/image";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "Deliver better customer experiences | Docs",
  description:
    "Manage customer requests, conversations, and service operations through a unified platform. CWIT EMS connects tickets, messaging channels, calls, and customer information.",
};

const articleTitle = "Deliver better customer experiences from one connected workspace";

const capabilities = [
  {
    title: "Tickets",
    body: "Capture, categorize, assign, and track customer requests through structured ticket workflows.",
    points: ["Ticket creation & management", "SLA tracking", "Assignment & routing", "Customer history"],
  },
  {
    title: "Chat & WhatsApp",
    body: "Manage customer conversations across messaging channels while keeping context.",
    points: ["WhatsApp conversations", "Web chat support", "Shared conversations", "Team collaboration", "Conversation history"],
  },
  {
    title: "Calls & Campaigns",
    body: "Coordinate inbound, outbound, and campaign-based communication while.",
    points: ["Call management", "Campaign workflows", "Agent visibility", "Interaction tracking", "Performance insights"],
  },
];

const benefits = [
  "Manage all customer conversations from one platform",
  "Reduce manual work with structured workflows",
  "Improve response times with complete customer context",
  "Track performance through operational visibility",
  "Maintain consistent service quality across channels",
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

export default function DocsDetailsPage() {
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
            <a href="/docs" className="text-[#8a8f98]">
              Docs
            </a>
            <span aria-hidden="true">›</span>
            <span className="text-[#111111]">{articleTitle}</span>
          </nav>

          <div className="mt-8 flex flex-col gap-5 sm:mt-10 lg:flex-row lg:items-center lg:justify-between">
            <h1 className="w-[min(946px,100%)] text-[clamp(32px,2.7vw,48px)] leading-[1.08] font-medium tracking-[-0.045em] text-[#111111]">
              <span className="block">Deliver better customer experiences</span>
              <span className="block">from one connected workspace</span>
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
            Manage customer requests, conversations, and service operations through a unified platform. CWIT EMS connects tickets, messaging channels, calls, and customer information so teams can respond faster, collaborate better, and deliver consistent support experiences.
          </p>

          <div className="mt-8 overflow-hidden rounded-[28px] sm:mt-10">
            <Image
              src="/figma/doc-details-banner.png"
              alt="Customer conversations, topics, and suggested replies on one workspace"
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
        <div className="content-1442 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-[clamp(36px,3vw,52px)] leading-[1.1] font-medium tracking-[-0.04em]">Overview</h2>
            <p className="mt-5 max-w-[460px] text-[15px] leading-7 text-[#111111] sm:text-[16px]">
              From first customer contact to final resolution, CWIT EMS helps teams organize interactions, automate workflows, and maintain complete visibility across every service channel.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/figma/docs-overview.png"
              alt="A messaging conversation that recommends a recipe and shows the ingredients"
              width={384}
              height={278}
              className="h-auto w-full rounded-[28px] object-contain"
              style={{ width: "min(100%, 640px)", height: "auto" }}
            />
          </div>
        </div>
      </section>

      <section className="bg-black py-16 text-white sm:py-24">
        <div className="content-1442">
          <div className="mx-auto max-w-[760px] text-center">
            <h2 className="text-[clamp(36px,3vw,52px)] leading-[1.1] font-medium tracking-[-0.04em]">Product Capabilities</h2>
            <p className="mx-auto mt-4 max-w-[560px] text-[15px] leading-7 text-white/80 sm:text-[16px]">
              Bring customer interactions together with flexible tools designed for modern support teams.
            </p>
          </div>
          <div className="mt-12 grid justify-items-center gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-[28px]">
            {capabilities.map((item) => (
              <article key={item.title} className="flex w-full max-w-[462px] flex-col rounded-[24px] bg-white p-7 text-[#111111] sm:p-8 lg:h-[450px] lg:w-[462px]">
                <h3 className="text-[22px] font-semibold tracking-[-0.02em]">{item.title}</h3>
                <p className="mt-3 text-[14px] leading-6 text-[#111111]">{item.body}</p>
                <ul className="mt-auto space-y-3 pt-8">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-[14px] leading-6">
                      <Tick />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAFA] py-16 sm:py-24">
        <div className="content-1442 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-[clamp(36px,3vw,52px)] leading-[1.1] font-medium tracking-[-0.04em]">Benefits</h2>
            <p className="mt-5 max-w-[420px] text-[15px] leading-7 text-[#111111] sm:text-[16px]">
              Built for teams that handle customer interactions every day
            </p>
            <ul className="mt-8 space-y-5">
              {benefits.map((point) => (
                <li key={point} className="flex items-center gap-4 text-[16px] leading-6">
                  <Tick />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/figma/connected.png"
              alt="A message API example beside delivery statistics showing a 98 percent delivery rate"
              width={815}
              height={537}
              className="h-auto w-full object-contain"
              style={{ width: "min(100%, 640px)", height: "auto" }}
            />
          </div>
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
