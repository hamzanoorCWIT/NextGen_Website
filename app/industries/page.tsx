import type { Metadata } from "next";
import { CtaSection } from "@/components/cta-section";
import { FeatureSplit, type FeatureSplitItem } from "@/components/feature-split";
import { Footer } from "@/components/footer";
import { HeroBanner } from "@/components/hero-banner";

export const metadata: Metadata = {
  title: "Industries | NextGen Contact Centre",
  description:
    "CWIT EMS adapts to the way your organization operates, with configurable solutions for every industry, role, and use case.",
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

const industries: FeatureSplitItem[] = [
  {
    id: "by-industry",
    title: "By Industry",
    body: "Every industry has unique challenges, workflows, and service expectations. CWIT EMS adapts to the way your organization operates with configurable solutions for customer service, business processes, compliance, and operational management.",
    ...studio,
    imageSide: "left",
    ctaLabel: "Explore More",
    ctaHref: "/industries/details",
  },
  {
    id: "by-role",
    title: "By Role",
    body: "Different teams need different levels of visibility, control, and collaboration. CWIT EMS empowers support teams, managers, operations leaders, and executives with tools designed around their daily workflows and business goals.",
    ...create,
    imageSide: "right",
    ctaLabel: "Explore More",
    ctaHref: "#by-role",
  },
  {
    id: "use-cases",
    title: "Use Cases",
    body: "From managing customer conversations and service requests to automating approvals, tracking performance, and improving decision-making, CWIT EMS helps organizations streamline critical processes across every department.",
    ...studio,
    imageSide: "left",
    ctaLabel: "Explore More",
    ctaHref: "#use-cases",
  },
];

const paymentImage = {
  src: "/figma/bring-your-customers.png",
  alt: "Payments, customers, and successful transactions connected in one flow",
  width: 912,
  height: 728,
};

export default function IndustriesPage() {
  return (
    <div id="top" className="site">
      <HeroBanner
        title="Solutions built for your industry"
        description="Every industry has unique challenges, workflows, and service expectations. CWIT EMS adapts to the way your organization operates with configurable solutions for customer service, business processes, compliance, and operational management."
        titleClassName="max-w-[1100px]"
        descriptionClassName="max-w-[860px]"
        actions={[
          { href: "#by-industry", label: "Explore Platform", tone: "light" },
          { href: "#demo", label: "Request Demo" },
        ]}
        image={{
          src: "/figma/hero-1.png",
          alt: "NextGen workspace on a laptop",
          width: 1266,
          height: 584,
        }}
      />
      <FeatureSplit items={industries} bandClassName="bg-[#FAFAFA]" />
      <CtaSection
        title="Create a better way to manage customer service"
        description="CWIT EMS connects customer support, work management, CRM, analytics, and governance into one intelligent workspace."
        titleClassName="max-w-[620px]"
        actions={[{ href: "#demo", label: "Request Demo" }]}
        image={paymentImage}
      />
      <Footer />
    </div>
  );
}
