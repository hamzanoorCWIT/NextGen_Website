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
        title="Everything you need to get started with CWIT EMS"
        description="Find practical guides to set up your workspace, manage daily operations, and make the most of CWIT EMS. From your first configuration to connected workflows across teams, get clear instructions for the work that matters."
        titleClassName="max-w-[980px]"
        descriptionClassName="max-w-[820px]"
        actions={[
          { href: "#guides", label: "Explore the Platform", tone: "light" },
          { href: "/request-demo", label: "Request Demo" },
        ]}
        image={{
          src: "/figma/industries-banner.png",
          alt: "NextGen workspace on a laptop",
          width: 1635,
          height: 674,
        }}
      />

      <HighlightCards
        id="guides"
        variant="numbered"
        tone="dark"
        title="Guidance for every step of your work"
        description="Explore straightforward documentation to configure the platform, support your teams, and manage customer service, workflows, CRM, analytics, and governance with greater confidence."
        items={[
          {
            label: "01",
            title: "Getting Started",
            body: "Set up your workspace, invite your team, assign roles, and configure the essentials so everyone can begin working in one connected environment.",
            href: "/docs/details",
          },
          {
            label: "02",
            title: "Customer Service",
            body: "Learn how to manage Tickets, Chat & WhatsApp, and Calls & Campaigns with shared customer context, clear assignments, and consistent follow-ups.",
            href: "/docs/details",
          },
          {
            label: "03",
            title: "Workflows",
            body: "Understand how to organize everyday processes, define responsibilities, route work, and keep requests moving between the right people.",
            href: "/docs/details",
          },
          {
            label: "04",
            title: "CRM & Sales",
            body: "Bring contacts, leads, interactions, and follow-up activity together so your teams can maintain customer context throughout the relationship.",
            href: "/docs/details",
          },
          {
            label: "05",
            title: "Analytics",
            body: "Learn to use Dashboards and Power BI to monitor activity, explore performance, and turn operational data into clearer decisions.",
            href: "/docs/details",
          },
          {
            label: "06",
            title: "Governance",
            body: "Find guidance for managing Permissions, Approvals, Policy Docs, Org Hierarchy, KYC, and API Bank within controlled, accountable workflows.",
            href: "/docs/details",
          },
        ]}
      />

      <CtaSection
        title="Build a more connected way to manage customer service"
        description="CWIT EMS brings customer support, work management, CRM, analytics, and governance into one workspace. Give every team the visibility and tools to stay organized, coordinate work, and keep operations moving."
        titleClassName="max-w-[620px]"
        actions={[{ href: "/request-demo", label: "Request Demo" }]}
        image={paymentImage}
      />
      <Footer />
    </div>
  );
}
