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
        title={
          <>
            Transform the way your teams manage
            <br />
            work and customer operations
          </>
        }
        description="Tell us about your business needs and discover how NextGen can help you connect customer service, workflows, communication, and intelligent automation in one unified platform."
        titleClassName="w-[min(1016px,100%)]"
        descriptionClassName="w-[min(920px,100%)]"
        media={<QuoteForm />}
      />
      <PricingDetails />
      <CtaSection
        title={
          <>
            Build a ticket management
            <br className="hidden lg:block" /> process that works for your
            <br className="hidden lg:block" /> organization
          </>
        }
        description={
          <>
            CWIT EMS connects customer support, work management, CRM, analytics, and
            <br className="hidden lg:block" /> governance into one intelligent workspace.
          </>
        }
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
