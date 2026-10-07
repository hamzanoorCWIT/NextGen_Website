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

const industries: FeatureSplitItem[] = [
  {
    id: "by-industry",
    title: "By Industry",
    body: "Every industry has unique challenges, workflows, and service expectations. CWIT EMS adapts to the way your organization operates with configurable solutions for customer service, business processes, compliance, and operational management.",
    image: "/figma/industry-1.png",
    imageAlt: "Industry solutions workspace",
    imageWidth: 719,
    imageHeight: 474,
    imageSide: "left",
    ctaLabel: "Explore More",
    ctaHref: "/industries/by-industry",
  },
  {
    id: "by-role",
    title: "By Role",
    body: "Different teams need different levels of visibility, control, and collaboration. CWIT EMS empowers support teams, managers, operations leaders, and executives with tools designed around their daily workflows and business goals.",
    image: "/figma/industry-2.png",
    imageAlt: "Role-based team workspace",
    imageWidth: 719,
    imageHeight: 474,
    imageSide: "right",
    ctaLabel: "Explore More",
    ctaHref: "/industries/by-role",
  },
  {
    id: "use-cases",
    title: "Use Cases",
    body: "From managing customer conversations and service requests to automating approvals, tracking performance, and improving decision-making, CWIT EMS helps organizations streamline critical processes across every department.",
    image: "/figma/industry-3.png",
    imageAlt: "Use case workflows workspace",
    imageWidth: 719,
    imageHeight: 474,
    imageSide: "left",
    ctaLabel: "Explore More",
    ctaHref: "/industries/use-cases",
  },
];

const paymentImage = {
  src: "/figma/cta-new.png",
  alt: "Payments, customers, and successful transactions connected in one flow",
  width: 802,
  height: 609,
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
          { href: "/request-demo", label: "Request Demo" },
        ]}
        image={{
          src: "/figma/industries-banner.png",
          alt: "NextGen workspace on a laptop",
          width: 1635,
          height: 674,
        }}
      />
      <FeatureSplit items={industries} bandClassName="bg-[#FAFAFA]" />
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
