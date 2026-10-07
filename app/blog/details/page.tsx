import type { Metadata } from "next";
import { CtaSection } from "@/components/cta-section";
import { FeatureSplit } from "@/components/feature-split";
import { Footer } from "@/components/footer";
import { HeroBanner } from "@/components/hero-banner";
import { HighlightCards } from "@/components/highlight-cards";

export const metadata: Metadata = {
  title: "Blog Article | NextGen Contact Centre",
  description: "Practical guidance for building connected customer service and operations with CWIT EMS.",
};

const paymentImage = {
  src: "/figma/cta-new.png",
  alt: "Payments, customers, and successful transactions connected in one flow",
  width: 802,
  height: 609,
};

export default function BlogDetailsPage() {
  return (
    <div id="top" className="site">
      <HeroBanner
        title="How omnichannel ticketing reduces handoffs"
        description="Keep conversations, ownership, and resolution history connected so teams resolve requests without losing context between channels."
        titleClassName="max-w-[980px]"
        descriptionClassName="max-w-[820px]"
        actions={[
          { href: "/blog", label: "Back to Blog", tone: "light" },
          { href: "/request-demo", label: "Request Demo" },
        ]}
        image={{
          src: "/figma/hero-1.png",
          alt: "NextGen workspace on a laptop",
          width: 1266,
          height: 584,
        }}
      />

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
