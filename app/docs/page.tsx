import type { Metadata } from "next";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { HeroBanner } from "@/components/hero-banner";
import { HighlightCards } from "@/components/highlight-cards";

export const metadata: Metadata = {
  title: "Docs | NextGen Contact Centre",
  description:
    "Find setup guides, product references, and operational documentation for CWIT EMS so every team can learn the platform and run daily work with confidence.",
};

const paymentImage = {
  src: "/figma/cta-new.png",
  alt: "Payments, customers, and successful transactions connected in one flow",
  width: 802,
  height: 609,
};

export default function DocsPage() {
  return (
    <div id="top" className="site">
      <HeroBanner
        title="Learn how to get the most from CWIT EMS"
        description="Explore product guides, setup instructions, and resources to help your teams configure workflows, manage operations, and get the most value from CWIT EMS."
        titleClassName="max-w-[980px]"
        descriptionClassName="max-w-[820px]"
        actions={[
          { href: "#guides", label: "Explore the Platform", tone: "light" },
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
        id="guides"
        variant="numbered"
        tone="dark"
        title="Guides that help every team get started and stay aligned."
        description="Use practical documentation to set up the platform, manage daily work, and keep customer service, workflows, and governance connected."
        items={[
          {
            label: "01",
            title: "Getting Started",
            body: "Set up your workspace, invite teams, and configure the first customer service workflow.",
            href: "/docs/details",
          },
          {
            label: "02",
            title: "Customer Service",
            body: "Learn how tickets, chats, and calls come together in one connected workspace.",
            href: "/docs/details",
          },
          {
            label: "03",
            title: "Workflows",
            body: "Build routing, approvals, and daily processes that match how your organization works.",
            href: "/docs/details",
          },
          {
            label: "04",
            title: "CRM & Sales",
            body: "Manage contacts, leads, and customer history from the same operational platform.",
            href: "/docs/details",
          },
          {
            label: "05",
            title: "Analytics",
            body: "Read dashboards and reports that show service performance and team activity.",
            href: "/docs/details",
          },
          {
            label: "06",
            title: "Governance",
            body: "Set permissions, policies, and compliance steps so every action stays accountable.",
            href: "/docs/details",
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
