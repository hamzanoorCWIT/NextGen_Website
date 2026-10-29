import type { Metadata } from "next";
import { CtaSection } from "@/components/cta-section";
import { FeatureSplit, type FeatureSplitItem } from "@/components/feature-split";
import { Footer } from "@/components/footer";
import { HeroBanner } from "@/components/hero-banner";

export const metadata: Metadata = {
  title: "Industries | NextGen Contact Centre",
  description:
    "Every industry has its own challenges, customer expectations, and operational priorities. NextGen brings customer service, work management, CRM, analytics, and governance into one connected platform, helping your teams work with greater clarity and control.",
};

const industries: FeatureSplitItem[] = [
  {
    id: "by-industry",
    title: "Purpose-Built Solutions for Different Industries",
    body: "Whether you manage customer enquiries, complex approvals, or day-to-day operations, NextGen adapts to your business processes. Connect teams and information in one workspace while supporting the workflows and service standards that matter to your industry.",
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
    title: "Give Every Team the Tools They Need to Succeed",
    body: "From frontline staff to team leaders and executives, every role needs a different view of the work. NextGen gives people relevant information, clear responsibilities, and shared visibility so they can make decisions, coordinate tasks, and move work forward.",
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
    title: "Real-World Workflows, One Connected Platform",
    body: "Bring everyday processes together, from Omnichannel Ticketing and WhatsApp & Chat Support to Outbound Campaigns, Multi-Level Approvals, and KYC & Risk Monitoring. NextGen helps teams reduce disconnected handoffs, track progress, and stay accountable from the first action to the final outcome.",
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
        title="Solutions Built Around the Way Your Industry Works"
        description="Every industry has its own challenges, customer expectations, and operational priorities. NextGen brings customer service, work management, CRM, analytics, and governance into one connected platform, helping your teams work with greater clarity and control."
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
        title="Bring Your People, Processes, and Customer Service Together"
        description="Replace fragmented ways of working with a clearer view of what matters. NextGen connects customer conversations, projects, approvals, and reporting in one workspace, giving your organization a more coordinated way to operate and grow."
        titleClassName="max-w-[620px]"
        actions={[{ href: "/request-demo", label: "Request Demo" }]}
        image={paymentImage}
      />
      <Footer />
    </div>
  );
}
