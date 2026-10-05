import type { Metadata } from "next";
import { CtaSection } from "@/components/cta-section";
import { FeatureSplit } from "@/components/feature-split";
import { Footer } from "@/components/footer";
import { HeroBanner } from "@/components/hero-banner";
import { HighlightCards } from "@/components/highlight-cards";

export const metadata: Metadata = {
  title: "Security Controls | NextGen Contact Centre",
  description: "Dive into role-based access, approval governance, and audit-ready controls in CWIT EMS.",
};

const paymentImage = {
  src: "/figma/cta-new.png",
  alt: "Payments, customers, and successful transactions connected in one flow",
  width: 802,
  height: 609,
};

export default function SecurityTrustDetailsPage() {
  return (
    <div id="top" className="site">
      <HeroBanner
        title="Role-based access that matches how teams work"
        description="Define permissions by role, module, and responsibility so every team can move quickly without compromising control."
        titleClassName="max-w-[980px]"
        descriptionClassName="max-w-[820px]"
        actions={[
          { href: "/security-trust", label: "Back to Security", tone: "light" },
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
        title="Access designed for real operational roles"
        description="Support agents, managers, compliance teams, and administrators each get the right level of visibility."
        items={[
          {
            label: "01",
            title: "Least-privilege defaults",
            body: "Start with the minimum access needed and expand intentionally by role.",
          },
          {
            label: "02",
            title: "Module-level control",
            body: "Separate permissions across tickets, workforce, CRM, analytics, and governance.",
          },
          {
            label: "03",
            title: "Accountable changes",
            body: "Keep a clear trail of who changed access, approvals, and policy settings.",
          },
        ]}
      />

      <FeatureSplit
        items={[
          {
            id: "hierarchy",
            title: "Align access with your org hierarchy",
            body: "Mirror teams, managers, and departments so visibility follows real ownership structures.",
            image: "/figma/ticket-details.png",
            imageAlt: "Detailed conversation and request context",
            imageWidth: 900,
            imageHeight: 390,
            imageSide: "right",
            ctaLabel: "Request Demo",
            ctaHref: "/request-demo",
          },
          {
            id: "approvals",
            title: "Require approvals where risk is highest",
            body: "Sensitive actions can move through multi-level approvals with reminders and complete history.",
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
        title="Build secure operations without slowing teams down"
        description="CWIT EMS connects customer support, work management, CRM, analytics, and governance into one intelligent workspace."
        titleClassName="max-w-[640px]"
        actions={[{ href: "/request-demo", label: "Request Demo" }]}
        image={paymentImage}
      />
      <Footer />
    </div>
  );
}
