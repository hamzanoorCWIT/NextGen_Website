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
  description: "Practical guidance for building connected customer service and operations with CWIT EMS.",
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
            Keep conversations, ownership, and resolution history connected so teams resolve requests without losing context between channels.
          </p>
          <div className="mt-8 overflow-hidden rounded-[12px] sm:mt-10">
            <Image src="/figma/hero-1.png" alt="NextGen workspace on a laptop" width={1266} height={584} preload className="h-auto w-full object-contain" />
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
        description="Bring every channel into one structured workflow with clear ownership and visibility."
        items={[
          {
            label: "01",
            title: "One inbox for every channel",
            body: "Email, chat, WhatsApp, and calls land in the same structured workspace.",
          },
          {
            label: "02",
            title: "Ownership that travels",
            body: "Handoffs keep history, notes, and next actions attached to the request.",
          },
          {
            label: "03",
            title: "Visibility for leaders",
            body: "Track SLAs, workload, and resolution quality without switching tools.",
          },
        ]}
      />

      <FeatureSplit
        items={[
          {
            id: "context",
            title: "Keep full customer context with every handoff",
            body: "When agents change channels or teams, the conversation history, priority, and customer profile stay attached to the ticket.",
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
            body: "Structured fields and routing rules help the next owner pick up immediately with the right priority and ownership.",
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
        description="CWIT EMS connects customer support, work management, CRM, analytics, and governance into one intelligent workspace."
        titleClassName="max-w-[640px]"
        actions={[{ href: "/request-demo", label: "Request Demo" }]}
        image={paymentImage}
      />
      <Footer />
    </div>
  );
}
