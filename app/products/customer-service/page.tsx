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
    "Bring customer conversations, requests, and support teams together in one connected workspace. NextGen helps you respond faster, stay organized, and give every customer a more consistent experience.",
};

export default function CustomerServicePage() {
  return (
    <div id="top" className="site">
      <HeroBanner
        title="Deliver Better Customer Experiences"
        description="Bring customer conversations, requests, and support teams together in one connected workspace. NextGen helps you respond faster, stay organized, and give every customer a more consistent experience."
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
        title="Make every customer interaction easier to manage"
        description="Give your team the context and tools to handle customer requests without switching between disconnected systems. Keep conversations visible, workflows organized, and everyone working toward a faster resolution."
        items={[
          {
            label: "01",
            title: "Complete customer visibility",
            body: "See customer details, conversation history, and service requests together, so your team understands the full picture before responding.",
          },
          {
            label: "02",
            title: "Streamlined workflows",
            body: "Turn incoming requests into clear, trackable work. Assign responsibility, follow progress, and keep service moving from first contact to resolution.",
          },
          {
            label: "03",
            title: "Better team coordination",
            body: "Keep agents and departments aligned with shared information, clear ownership, and updates that help everyone deliver consistent support.",
          },
        ]}
      />

      <ProductModules
        id="products"
        title="Customer Service Products"
        description="Bring your essential customer service tools into one connected platform, from managing support tickets to handling conversations and customer communications."
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
        title="From customer request to resolution, in one clear flow"
        description="Keep every request moving through a consistent service process. Capture the issue, assign the right team, track its progress, and maintain visibility until the customer’s concern is resolved."
        steps={[
          {
            title: "Customer reaches out",
            body: "Bring incoming customer requests and conversations into a shared workspace where they can be reviewed and acted on.",
            image: { src: "/figma/customer-products.png", alt: "A shared draft and customer conversation assigned to Aurora Miller", width: 685, height: 696 },
          },
          {
            title: "Request is captured",
            body: "Record the issue, relevant customer details, and conversation context so the team has what it needs to proceed.",
            image: { src: "/figma/work-management.png", alt: "A new ticket with customer, channel, priority, and department details", width: 685, height: 696 },
          },
          {
            title: "Team takes action",
            body: "Assign ownership, prioritize the request, and coordinate the necessary work across agents or departments.",
            image: { src: "/figma/crm-sales.png", alt: "A conversation assigned to the Billing Support team", width: 685, height: 696 },
          },
          {
            title: "Resolution is delivered",
            body: "Track progress, communicate updates, and close the request with a clear record of the outcome.",
            image: { src: "/figma/analytic-bi.png", alt: "Email confirming a billing issue has been resolved", width: 685, height: 696 },
          },
          {
            title: "Performance is measured",
            body: "Review activity and service trends to spot delays, understand workloads, and improve how the team responds.",
            image: { src: "/figma/governance-compliance.png", alt: "Customer satisfaction score of 96 percent", width: 685, height: 696 },
          },
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
        title="Better service starts with connected work"
        description="Help teams respond with confidence by making customer information easier to find, responsibilities easier to track, and daily service operations easier to manage."
        items={[
          {
            title: "Faster response times",
            body: "Give agents the customer context and request details they need to respond without unnecessary searching or handoffs.",
          },
          {
            title: "Consistent customer experiences",
            body: "Use shared histories and clear workflows to maintain service quality across conversations, teams, and channels.",
          },
          {
            title: "Operational visibility",
            body: "Understand open requests, workloads, priorities, and progress through information that teams can act on.",
          },
          {
            title: "Improved accountability",
            body: "Make ownership and next steps clear, so requests are followed through and fewer issues get overlooked.",
          },
        ]}
      />

      <Testimonials />

      <CtaSection
        title="Create a better way to manage customer service"
        description="Bring your customer support, work management, CRM, and analytics together in one connected workspace. Help your team stay organized, act on customer needs, and build stronger service experiences."
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
