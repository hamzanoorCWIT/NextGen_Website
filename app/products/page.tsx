import type { Metadata } from "next";
import { CtaSection } from "@/components/cta-section";
import { FeatureSplit, type FeatureSplitItem } from "@/components/feature-split";
import { Footer } from "@/components/footer";
import { HeroBanner } from "@/components/hero-banner";

export const metadata: Metadata = {
  title: "Products | NextGen Contact Centre",
  description:
    "Manage customer conversations, daily operations, sales pipelines, business intelligence, and governance workflows from one unified platform.",
};

const studio = {
  image: "/figma/product-studio.png",
  imageAlt: "Sanaya workspace for generating and publishing a campaign image",
  imageWidth: 720,
  imageHeight: 427,
};

const create = {
  image: "/figma/product-create.png",
  imageAlt: "Sanaya workspace for choosing what campaign to create",
  imageWidth: 730,
  imageHeight: 456,
};

const products: FeatureSplitItem[] = [
  {
    id: "customer-service",
    title: "Customer Service Products",
    ctaHref: "/products/customer-service",
    body: "Bring tickets, chats, calls, and customer interactions together in a unified workspace designed for faster resolution and better collaboration. Give service teams complete visibility into every conversation, customer journey, and support activity from one connected platform.",
    ...studio,
    imageSide: "left",
  },
  {
    id: "work-management",
    title: "Work Management Products",
    ctaHref: "/products/work-management",
    body: "Give teams a single place to organize tasks, projects, schedules, and daily operations. From individual assignments to large initiatives, keep work visible, track progress, and ensure teams stay aligned from planning to completion.",
    ...create,
    imageSide: "right",
  },
  {
    id: "crm-sales",
    title: "CRM & Sales",
    ctaHref: "/products/crm-sales",
    body: "Build stronger customer relationships with complete visibility into contacts, leads, opportunities, and interactions. Connect every customer touchpoint to sales workflows so teams can capture opportunities, follow progress, and make informed decisions.",
    ...studio,
    imageSide: "left",
  },
  {
    id: "analytics",
    title: "Analytics & BI",
    ctaHref: "/products/analytics",
    body: "Transform everyday business activity into meaningful insights with connected dashboards and reporting. Monitor performance, identify trends, and help teams make faster decisions using real-time operational visibility.",
    ...create,
    imageSide: "right",
  },
  {
    id: "governance",
    title: "Governance & Compliance",
    ctaHref: "/products/governance",
    body: "Create stronger operational control with structured permissions, approvals, compliance tracking, and policy management. Ensure every action has clear ownership, every process follows defined rules, and every decision remains traceable.",
    ...studio,
    imageSide: "left",
  },
];

const paymentImage = {
  src: "/figma/bring-your-customers.png",
  alt: "Payments, customers, and successful transactions connected in one flow",
  width: 912,
  height: 728,
};

export default function ProductsPage() {
  return (
    <div id="top" className="site">
      <HeroBanner
        title={
          <>
            Everything your teams need, connected
            <br />
            in one platform.
          </>
        }
        description="Manage customer conversations, daily operations, sales pipelines, business intelligence, and governance workflows — all from one unified platform."
        titleClassName="max-w-[1100px]"
        descriptionClassName="max-w-[860px]"
        actions={[
          { href: "#customer-service", label: "Explore Platform", tone: "light" },
          { href: "/request-demo", label: "Request Demo" },
        ]}
        image={{
          src: "/figma/hero-1.png",
          alt: "NextGen workspace on a laptop",
          width: 1266,
          height: 584,
        }}
      />
      <FeatureSplit items={products} bandClassName="bg-[#FAFAFA]" />
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
