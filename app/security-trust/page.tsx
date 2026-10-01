import type { Metadata } from "next";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { HeroBanner } from "@/components/hero-banner";
import { HighlightCards } from "@/components/highlight-cards";

export const metadata: Metadata = {
  title: "Security & Trust | NextGen Contact Centre",
  description:
    "Learn how CWIT EMS protects data, controls access, and keeps operations auditable across every team.",
};

const paymentImage = {
  src: "/figma/bring-your-customers.png",
  alt: "Payments, customers, and successful transactions connected in one flow",
  width: 912,
  height: 728,
};

export default function SecurityTrustPage() {
  return (
    <div id="top" className="site">
      <HeroBanner
        title="Security and trust built into every workflow"
        description="Protect customer data, control access by role, and keep approvals, policies, and operational activity auditable across the platform."
        titleClassName="max-w-[980px]"
        descriptionClassName="max-w-[820px]"
        actions={[
          { href: "#controls", label: "Explore Controls", tone: "light" },
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
        id="controls"
        variant="numbered"
        tone="dark"
        title="Controls that keep operations safe and accountable."
        description="Use practical security controls to protect data, manage access, and keep every operational action auditable."
        items={[
          {
            label: "01",
            title: "Role-based Access",
            body: "Give every team the tools and data they need without exposing sensitive controls.",
            href: "/security-trust/details",
          },
          {
            label: "02",
            title: "Approval Governance",
            body: "Run multi-level approvals with clear owners, history, and policy alignment.",
            href: "/security-trust/details",
          },
          {
            label: "03",
            title: "Policy Controls",
            body: "Publish policies, collect acknowledgements, and keep compliance evidence ready.",
            href: "/security-trust/details",
          },
          {
            label: "04",
            title: "Audit Trails",
            body: "Track changes, ownership, and operational decisions with complete history.",
            href: "/security-trust/details",
          },
          {
            label: "05",
            title: "KYC & Risk",
            body: "Run KYC checks and risk monitoring with accountable review workflows.",
            href: "/security-trust/details",
          },
          {
            label: "06",
            title: "Secure Administration",
            body: "Manage permissions, integrations, and configuration from a controlled workspace.",
            href: "/security-trust/details",
          },
        ]}
      />

      <CtaSection
        title="Create a better way to manage customer service"
        description="CWIT EMS connects customer support, work management, CRM, analytics, and governance into one intelligent workspace."
        titleClassName="max-w-[620px]"
        actions={[{ href: "/request-demo", label: "Request Demo" }]}
        image={paymentImage}
      />
      <Footer />
    </div>
  );
}
