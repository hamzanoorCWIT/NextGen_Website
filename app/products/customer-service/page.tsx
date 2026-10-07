import type { Metadata } from "next";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { HeroBanner } from "@/components/hero-banner";
import { HighlightCards } from "@/components/highlight-cards";
import { ProductModules } from "@/components/product-modules";
import { ServiceWorkflow } from "@/components/service-workflow";
import { Testimonials } from "@/components/testimonials";

export const metadata: Metadata = {
  title: "Customer Service | NextGen Contact Centre",
  description:
    "CWIT EMS connects customer requests, conversations, and channels in one platform, helping teams manage interactions with smarter workflows and better visibility.",
};

export default function CustomerServicePage() {
  return (
    <div id="top" className="site">
      <HeroBanner
        title="Deliver Better Customer Experiences"
        description="CWIT EMS connects customer requests, conversations, and channels in one platform, helping teams manage interactions with smarter workflows and better visibility."
        titleClassName="max-w-[980px]"
        descriptionClassName="max-w-[760px]"
        actions={[
          { href: "#simplify", label: "Explore Platform", tone: "light" },
          { href: "/request-demo", label: "Request Demo" },
        ]}
        image={{
          src: "/figma/product-cat-banner.png",
          alt: "Customer conversations on a laptop, with topic, task, and suggested-reply cards",
          width: 1662,
          height: 677,
        }}
      />

      <HighlightCards
        id="simplify"
        variant="numbered"
        title="Simplify Customer Service"
        description="CWIT EMS connects every customer interaction in one place, helping teams collaborate better and deliver faster, consistent support across all channels."
        items={[
          {
            label: "01",
            title: "Complete customer visibility",
            body: "Access conversations, requests, and service history from one connected platform.",
          },
          {
            label: "02",
            title: "Streamlined workflows",
            body: "Organize, assign, and manage customer requests with structured processes.",
          },
          {
            label: "03",
            title: "Better team coordination",
            body: "Help agents and teams collaborate with the right context at every step.",
          },
        ]}
      />

      <ProductModules
        id="products"
        title="Customer Service Products"
        description="Everything your customer service team needs"
        actions={[
          { href: "/products", label: "Products Overview", tone: "ghost-dark" },
          { href: "#products", label: "All Modules" },
        ]}
        tabs={[
          {
            id: "tickets",
            label: "Tickets",
            active: true,
            image: {
              src: "/figma/product-tab-1.png",
              alt: "Ticket inbox with an open conversation about a battery that is not charging",
              width: 1013,
              height: 683,
            },
          },
          {
            id: "chat-whatsapp",
            label: "Chat & WhatsApp",
            image: {
              src: "/figma/product-tab-2.png",
              alt: "A chat message confirming a suspicious charge",
              width: 948,
              height: 617,
            },
          },
          {
            id: "calls-campaigns",
            label: "Calls & Campaigns",
            image: {
              src: "/figma/product-tab-3.png",
              alt: "A campaign workspace for creating a customer message",
              width: 948,
              height: 617,
            },
          },
        ]}
      />

      <ServiceWorkflow
        frameClassName="content-1407"
        title="Customer Service Workflow"
        description="CWIT EMS helps teams manage the complete service journey by connecting customer communication, internal workflows, and operational visibility in one place."
        steps={[
          {
            title: "Customer reaches out",
            body: "Inbound requests are immediately ingested via email, live chat, or customer portal, creating a unique transaction token.",
          },
          { title: "Request is captured" },
          { title: "Team takes action" },
          { title: "Resolution is delivered" },
          { title: "Performance is measured" },
        ]}
        image={{
          src: "/figma/customer-products.png",
          alt: "A shared draft and customer conversation assigned to Aurora Miller",
          width: 685,
          height: 696,
        }}
      />

      <HighlightCards
        variant="icon"
        title="Built to improve every part of customer service"
        description="CWIT EMS helps teams deliver faster, more consistent support by connecting customer interactions, workflows, and operational insights."
        items={[
          {
            title: "Faster response times",
            body: "Give teams the information and workflows they need to respond.",
          },
          {
            title: "Consistent customer experiences",
            body: "Maintain customer context across channels and interactions.",
          },
          {
            title: "Operational visibility",
            body: "Understand service performance through connected insights and reporting.",
          },
          {
            title: "Improved accountability",
            body: "Assign ownership, track progress, and ensure every request moves forward.",
          },
        ]}
      />

      <Testimonials />

      <CtaSection
        title="Create a better way to manage customer service"
        description="CWIT EMS connects customer support, work management, CRM, analytics, and governance into one intelligent workspace."
        titleClassName="max-w-[620px]"
        actions={[{ href: "/request-demo", label: "Request Demo" }]}
        image={{
          src: "/figma/cta-new.png",
          alt: "Payments, customers, and successful transactions connected in one flow",
          width: 802,
          height: 609,
        }}
      />
      <Footer />
    </div>
  );
}
