import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaSection } from "@/components/cta-section";
import { FeatureSplit } from "@/components/feature-split";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HighlightCards } from "@/components/highlight-cards";

export const metadata: Metadata = {
  title: "How omnichannel ticketing reduces handoffs | Blog",
  description: "Customer requests rarely stay in one channel. Omnichannel ticketing brings those touchpoints into one managed request, so teams can move work forward without losing context.",
};

const paymentImage = {
  src: "/figma/cta-new.png",
  alt: "Payments, customers, and successful transactions connected in one flow",
  width: 802,
  height: 609,
};

const articleTitle = "How omnichannel ticketing reduces handoffs";
const shareLinks = [
  { label: "WhatsApp", href: `https://wa.me/?text=${encodeURIComponent(articleTitle)}` },
  { label: "X", href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(articleTitle)}` },
];

export default function BlogDetailsPage() {
  return (
    <div id="top" className="site">
      <Header className="border-b border-black/20" />
      <article className="bg-white pt-20 pb-12 sm:pt-[100px] sm:pb-16 lg:pt-[124px] lg:pb-20">
        <div className="content-1442">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-[13px] text-[#8a8f98]">
            <Link href="/" aria-label="Home">
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M2.5 7.2 8 2.6l5.5 4.6V13a1 1 0 0 1-1 1h-3.2V9.6H6.7V14H3.5a1 1 0 0 1-1-1V7.2Z" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
              </svg>
            </Link>
            <span aria-hidden="true">›</span>
            <Link href="/blog">Blog</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page" className="text-[#111111]">{articleTitle}</span>
          </nav>

          <div className="mt-8 flex flex-col gap-5 sm:mt-10 lg:flex-row lg:items-center lg:justify-between">
            <h1 className="w-[min(946px,100%)] text-[clamp(32px,2.7vw,48px)] leading-[1.08] font-medium tracking-[-0.045em] text-[#111111]">
              {articleTitle}
            </h1>
            <div className="flex shrink-0 items-center gap-3">
              <span className="text-[14px] text-[#111111]">Share:</span>
              {shareLinks.map((item) => (
                <a key={item.label} href={item.href} aria-label={`Share on ${item.label}`} target="_blank" rel="noreferrer" className="inline-flex h-9 items-center justify-center rounded-full border border-black/10 px-3 text-[13px] text-[#70C6AA]">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <p className="mt-6 w-[min(1407px,100%)] text-[15px] leading-7 text-[#111111] sm:text-[16px]">
            Customer requests rarely stay in one channel. A conversation might start in WhatsApp, continue by email, and end with a call. When each interaction sits in a separate tool, teams waste time reconstructing what happened, customers repeat themselves, and responsibility becomes unclear.
          </p>
          <p className="mt-4 w-[min(1407px,100%)] text-[15px] leading-7 text-[#111111] sm:text-[16px]">
            Omnichannel ticketing brings those touchpoints into one managed request. By keeping the conversation, owner, priority, and resolution history together, teams can move work forward without losing the context that makes a response useful.
          </p>
          <div className="mt-8 overflow-hidden rounded-[12px] sm:mt-10">
            <Image src="/figma/docs-detail-banner.png" alt="CWIT EMS dashboard on a tablet with task status, revenue, and compliance insights" width={1407} height={647} preload className="h-auto w-full object-contain" style={{ width: "min(100%, 1407px)", height: "auto" }} />
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-[14px] text-[#6b7280]">
            <span>Customer Service</span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#70C6AA]" aria-hidden="true" />
            <Link href="/blog" className="hover:text-black">Back to Blog</Link>
          </div>
        </div>
      </article>

      <HighlightCards
        variant="numbered"
        title="What connected ticketing looks like"
        description="A connected service workflow gives agents one place to understand an issue, act on it, and see what happens next. The value is not simply collecting messages; it is making sure every channel contributes to the same accountable resolution process."
        items={[
          {
            label: "01",
            title: "One inbox for every channel",
            body: "Bring email, chat, WhatsApp, and call-related requests into a structured ticketing workspace. Agents can find the latest interaction without jumping between disconnected systems.",
          },
          {
            label: "02",
            title: "Ownership that travels",
            body: "Keep assignments, internal notes, priorities, and follow-up actions attached to the request as it moves between agents or departments. The receiving team can continue from the last meaningful step.",
          },
          {
            label: "03",
            title: "Visibility for leaders",
            body: "Give team leaders a shared view of queues, ticket status, response times, SLAs, and unresolved work. Bottlenecks are easier to spot when everyone works from the same operational record.",
          },
        ]}
      />

      <FeatureSplit
        items={[
          {
            id: "context",
            title: "Keep full customer context with every handoff",
            body: [
              "An effective handoff should transfer understanding, not just a ticket number. The next agent needs to know who the customer is, why they reached out, what has already been attempted, and what was promised.",
              "With NextGen Contact Centre, teams can keep conversations and ticket activity connected to customer details. This reduces repeated questions, supports more consistent replies, and gives agents the information they need to continue the conversation with confidence.",
            ],
            image: "/figma/ticket-details.png",
            imageAlt: "Detailed conversation and request context",
            imageWidth: 900,
            imageHeight: 390,
            imageSide: "right",
            ctaLabel: "Request Demo",
            ctaHref: "/request-demo",
          },
          {
            id: "route",
            title: "Route work without starting over",
            body: [
              "Not every request belongs to the first team that receives it. Billing issues, technical faults, account changes, and escalations often need different specialists. Without clear routing, the work can bounce between inboxes while the customer waits.",
              "Structured categories, priorities, assignments, and workflow rules help direct requests to the appropriate team. Each reassignment can retain its conversation history, internal updates, and current status, so new owners focus on resolution rather than investigation from scratch.",
            ],
            image: "/figma/ticket-route.png",
            imageAlt: "Conversation confirming a customer request",
            imageWidth: 520,
            imageHeight: 552,
            imageSide: "left",
            ctaLabel: "Request Demo",
            ctaHref: "/request-demo",
          },
        ]}
      />

      <CtaSection
        title="Build an omnichannel process that scales"
        description="As request volumes grow, disconnected tools create more manual work and make service quality harder to maintain. A unified ticketing process helps teams establish consistent ownership, preserve customer context, and monitor results across channels. NextGen Contact Centre connects customer service with the wider operational workspace, helping agents, managers, and departments work toward a shared outcome: resolving the right request with the right information, at the right time."
        titleClassName="max-w-[640px]"
        actions={[{ href: "/request-demo", label: "Request Demo" }]}
        image={paymentImage}
      />
      <Footer />
    </div>
  );
}
