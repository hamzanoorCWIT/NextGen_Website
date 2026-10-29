import type { Metadata } from "next";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { HeroBanner } from "@/components/hero-banner";
import { Pill } from "@/components/pill";

export const metadata: Metadata = {
  title: "Comparisons | NextGen Contact Centre",
  description:
    "Compare CWIT EMS with familiar business platforms and explore how customer service, work management, CRM, analytics, and governance can come together in one connected workspace.",
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
    body: "Explore how CWIT EMS and Zendesk approach customer requests, ticket management, agent workflows, and support visibility. Consider whether your teams need primarily customer support tools or a broader connected operations workspace.",
  },
  {
    title: "Salesforce",
    body: "Compare approaches to managing customer relationships, sales activity, service processes, and cross-team information. Explore how each platform fits your organization’s CRM and operational requirements.",
  },
  {
    title: "ServiceNow",
    body: "Review how CWIT EMS and ServiceNow support structured requests, service workflows, approvals, and operational control. Identify the capabilities and level of process complexity that fit your team.",
  },
  {
    title: "Freshworks",
    body: "Explore customer engagement, support workflows, and team productivity across CWIT EMS and Freshworks. Assess how each solution connects everyday service activity with wider business operations.",
  },
  {
    title: "Dynamics 365",
    body: "Compare customer information, business processes, reporting, and team collaboration across CWIT EMS and Dynamics 365. Evaluate the platform approach that best suits your current systems and future plans.",
  },
  {
    title: "Other Platforms",
    body: "Considering a different platform? Start with the services and workflows your teams depend on, then build a focused comparison around the features, integrations, control, and reporting you require.",
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
        title="Find the right platform for the way your teams work"
        description="Compare CWIT EMS with familiar business platforms and explore how customer service, work management, CRM, analytics, and governance can come together in one connected workspace. Choose a platform below to examine the areas that matter most to your organization."
        titleClassName="max-w-[1100px]"
        descriptionClassName="max-w-[860px]"
        actions={[
          { href: "#compare", label: "Explore Platform", tone: "light" },
          { href: "/request-demo", label: "Request Demo" },
        ]}
        image={{
          src: "/figma/home-banner.png",
          alt: "NextGen workspace on a laptop",
          width: 1288,
          height: 594,
        }}
      />

      <section id="compare" className="bg-white py-16 sm:py-24">
        <div className="content-1442">
          <div className="mx-auto max-w-[820px] text-center">
            <h2 className="text-[clamp(32px,2.6vw,44px)] leading-[1.15] font-medium tracking-[-0.03em] text-[#111111]">
              See how CWIT EMS compares with leading platforms
            </h2>
            <p className="mx-auto mt-4 max-w-[680px] text-[15px] leading-7 text-[#111111] sm:text-[16px]">
              Explore comparisons organized around different platform strengths and business needs. Review
              capabilities, workflows, and deployment considerations to understand which solution aligns with your
              teams and operational priorities.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-2 lg:grid-cols-3">
            {platforms.map((platform) => (
              <article
                key={platform.title}
                className="flex min-h-[300px] flex-col rounded-[12px] bg-black p-7 text-white sm:min-h-[340px] sm:p-8"
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
        title="Bring customer service and business operations together"
        description="CWIT EMS connects customer conversations, tasks, projects, CRM activity, analytics, and governance in one workspace. Explore how a more connected approach can give teams clearer ownership, more consistent workflows, and better visibility across the organization."
        titleClassName="max-w-[620px]"
        actions={[{ href: "/request-demo", label: "Request Demo" }]}
        image={paymentImage}
      />
      <Footer />
    </div>
  );
}
