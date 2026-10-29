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

const products: FeatureSplitItem[] = [
  {
    id: "customer-service",
    title: "Customer Service Products",
    ctaHref: "/products/customer-service",
    body: "Manage tickets, customer conversations, and support workflows in one place. Give your team the context they need to respond faster, collaborate across departments, and deliver a more consistent customer experience.",
    image: "/figma/product-1.png",
    imageAlt: "Customer service workspace",
    imageWidth: 677,
    imageHeight: 683,
    imageSide: "left",
  },
  {
    id: "work-management",
    title: "Work Management Products",
    ctaHref: "/products/work-management",
    body: "Keep tasks, projects, schedules, and timesheets connected to everyday work. Make responsibilities clear, track progress, and help teams stay aligned from planning through completion.",
    image: "/figma/product-2.png",
    imageAlt: "Work management workspace",
    imageWidth: 677,
    imageHeight: 682,
    imageSide: "right",
  },
  {
    id: "crm-sales",
    title: "CRM & Sales",
    ctaHref: "/products/crm-sales",
    body: "Bring contacts, leads, and opportunities into one organized view. Follow every interaction, manage your pipeline, and give your sales team the visibility to build stronger relationships and keep deals moving.",
    image: "/figma/product-3.png",
    imageAlt: "CRM and sales workspace",
    imageWidth: 677,
    imageHeight: 683,
    imageSide: "left",
  },
  {
    id: "analytics",
    title: "Analytics & BI",
    ctaHref: "/products/analytics",
    body: "Turn operational data into a clearer picture of performance. Monitor tickets, workloads, response trends, and team activity through dashboards and reports that help you spot priorities and make informed decisions.",
    image: "/figma/product-4.png",
    imageAlt: "Analytics and BI workspace",
    imageWidth: 677,
    imageHeight: 682,
    imageSide: "right",
  },
  {
    id: "governance",
    title: "Governance & Compliance",
    ctaHref: "/products/governance",
    body: "Support accountability with structured permissions, activity history, policies, and consistent processes. Help teams work within defined controls while keeping important information accessible to the right people.",
    image: "/figma/product-5.png",
    imageAlt: "Governance and compliance workspace",
    imageWidth: 677,
    imageHeight: 682,
    imageSide: "left",
  },
];

const paymentImage = {
  src: "/figma/cta-new.png",
  alt: "Payments, customers, and successful transactions connected in one flow",
  width: 802,
  height: 609,
};

export default function ProductsPage() {
  return (
    <div id="top" className="site">
      <HeroBanner
        title={
          <>
            Everything Your Teams Need,
            <br />
            Working Together
          </>
        }
        description="Bring customer conversations, daily operations, sales, and business insights into one connected workspace. NextGen helps your teams stay organized, collaborate confidently, and move work forward without switching between disconnected tools."
        titleClassName="max-w-[1100px]"
        descriptionClassName="max-w-[860px]"
        actions={[
          { href: "#customer-service", label: "Explore Platform", tone: "light" },
          { href: "/request-demo", label: "Request Demo" },
        ]}
        image={{
          src: "/figma/product-banner.png",
          alt: "NextGen workspace on a laptop",
          width: 1136,
          height: 548,
        }}
      />
      <FeatureSplit items={products} bandClassName="bg-[#FAFAFA]" />
      <CtaSection
        title="One Connected Platform. A Better Way to Work."
        description="From customer service to projects, sales, and reporting, NextGen connects the work your teams do every day. Reduce friction between departments and create a more coordinated experience for employees and customers."
        titleClassName="max-w-[620px]"
        actions={[{ href: "/request-demo", label: "Request Demo" }]}
        image={paymentImage}
      />
      <Footer />
    </div>
  );
}
