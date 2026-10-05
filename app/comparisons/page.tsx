import type { Metadata } from "next";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { HeroBanner } from "@/components/hero-banner";
import { Pill } from "@/components/pill";

export const metadata: Metadata = {
  title: "Comparisons | NextGen Contact Centre",
  description:
    "Compare CWIT EMS with leading platforms across features, pricing, and capabilities.",
};

const paymentImage = {
  src: "/figma/cta-new.png",
  alt: "Payments, customers, and successful transactions connected in one flow",
  width: 802,
  height: 609,
};

const platforms = [
  {
    title: "Zendesk",
    body: "Customer service and support platform",
  },
  {
    title: "Salesforce",
    body: "CRM and customer engagement suite",
  },
  {
    title: "ServiceNow",
    body: "IT and enterprise service management",
  },
  {
    title: "Freshworks",
    body: "Customer and employee engagement",
  },
  {
    title: "Dynamics 365",
    body: "Microsoft business applications",
  },
  {
    title: "Other Platforms",
    body: "Request a custom comparison",
  },
];

function ChatIcon() {
  return (
    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">
      <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
        <path
          d="M3.2 3.8h11.6c.7 0 1.2.5 1.2 1.2v6.2c0 .7-.5 1.2-1.2 1.2H8.1L4.8 15.2v-2.8H3.2c-.7 0-1.2-.5-1.2-1.2V5c0-.7.5-1.2 1.2-1.2Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function ComparisonsPage() {
  return (
    <div id="top" className="site">
      <HeroBanner
        title={
          <>
            Compare CWIT EMS with the
            <br />
            platforms your teams already know.
          </>
        }
        description="See how CWIT EMS stacks up across customer service, workflows, CRM, analytics, and governance so you can choose the right platform with confidence."
        titleClassName="max-w-[1100px]"
        descriptionClassName="max-w-[860px]"
        actions={[
          { href: "#compare", label: "Explore Platform", tone: "light" },
          { href: "/request-demo", label: "Request Demo" },
        ]}
        image={{
          src: "/figma/hero-1.png",
          alt: "NextGen workspace on a laptop",
          width: 1266,
          height: 584,
        }}
      />

      <section id="compare" className="bg-white py-16 sm:py-24">
        <div className="content-1442">
          <div className="mx-auto max-w-[820px] text-center">
            <h2 className="text-[clamp(32px,2.6vw,44px)] leading-[1.15] font-medium tracking-[-0.03em] text-[#111111]">
              Compare CWIT EMS with leading platforms
            </h2>
            <p className="mx-auto mt-4 max-w-[680px] text-[15px] leading-7 text-[#111111] sm:text-[16px]">
              Choose a platform to see a detailed comparison across features, pricing, and capabilities.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-2 lg:grid-cols-3">
            {platforms.map((platform) => (
              <article
                key={platform.title}
                className="flex min-h-[300px] flex-col rounded-[24px] bg-black p-7 text-white sm:min-h-[340px] sm:p-8"
              >
                <ChatIcon />
                <h3 className="mt-8 text-[28px] leading-[1.15] font-semibold tracking-[-0.03em] sm:text-[32px]">
                  {platform.title}
                </h3>
                <p className="mt-auto pt-10 text-[14px] leading-6 text-white/70 sm:text-[15px]">{platform.body}</p>
                <div className="mt-6">
                  <Pill href="/comparisons/details" tone="light">
                    Start Comparing
                  </Pill>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

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
