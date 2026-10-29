import type { Metadata } from "next";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { HeroBanner } from "@/components/hero-banner";
import { PricingDetails } from "@/components/pricing-details";
import { QuoteForm } from "@/components/quote-form";

export const metadata: Metadata = {
  title: "Pricing | NextGen Contact Centre",
  description:
    "Tell us about your business needs and discover how NextGen can help you connect customer service, workflows, communication, and intelligent automation in one unified platform.",
};

export default function PricingPage() {
  return (
    <div id="top" className="site">
      <HeroBanner
        title="One connected platform. A plan that fits your team."
        description="Tell us what your organization needs and explore a more connected way to manage customer service, workflows, communication, and operations with NextGen."
        titleClassName="w-[min(1016px,100%)]"
        descriptionClassName="w-[min(920px,100%)]"
        media={<QuoteForm />}
      />
      <PricingDetails />
      <CtaSection
        title="Bring your customer service and operations together"
        description="NextGen connects customer support, work management, CRM, analytics, and governance in one workspace, helping teams stay aligned without switching between disconnected tools."
        titleClassName="max-w-[640px]"
        descriptionClassName="max-w-[640px]"
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
