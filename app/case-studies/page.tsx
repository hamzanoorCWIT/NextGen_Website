import type { Metadata } from "next";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { HeroBanner } from "@/components/hero-banner";
import { Pill } from "@/components/pill";

export const metadata: Metadata = {
  title: "Case Studies | NextGen Contact Centre",
  description:
    "Discover how organizations simplify complex processes, improve service delivery, and create more connected operations with CWIT EMS.",
};

const paymentImage = {
  src: "/figma/cta-new.png",
  alt: "Payments, customers, and successful transactions connected in one flow",
  width: 802,
  height: 609,
};

const modules = "Tickets | Chat | Analytics";

const stories = [
  {
    industry: "Utilities",
    modules,
    title: "Connecting utility requests with field-service follow-through",
    body: "Bring incoming service issues, ticket assignments, and customer updates into one connected process so support teams can coordinate with field staff and follow every request through resolution.",
  },
  {
    industry: "Banking & Financial Services",
    modules,
    title: "Keeping customer service and approvals aligned",
    body: "Organize customer inquiries alongside internal reviews, ownership, and documented decisions to help service and operations teams collaborate with clearer accountability.",
  },
  {
    industry: "BPO & Outsourcing",
    modules,
    title: "Giving high-volume support teams a shared view",
    body: "Centralize customer conversations, distribute work across agents, and make queues and service performance easier for team leaders to monitor across campaigns and clients.",
  },
  {
    industry: "Government",
    modules,
    title: "Making citizen service easier to track",
    body: "Connect citizen requests, departmental handoffs, and service histories in a structured workspace designed to make responsibilities clearer and progress easier to follow.",
  },
  {
    industry: "Telecom",
    modules,
    title: "Bringing telecom support channels together",
    body: "Keep service issues, customer history, and internal escalations connected as teams respond to inquiries across channels and coordinate faster follow-up.",
  },
  {
    industry: "Professional Services",
    modules,
    title: "Connecting client requests with project delivery",
    body: "Link client communications to tasks, project responsibilities, and progress updates, helping teams manage ongoing relationships without losing context between departments.",
  },
];

export default function CaseStudiesPage() {
  return (
    <div id="top" className="site">
      <HeroBanner
        title="See how teams build better operations with CWIT EMS"
        description="Explore practical examples of how connected customer service, work management, CRM, analytics, and governance can help organizations coordinate work, improve visibility, and deliver more consistent service."
        titleClassName="max-w-[980px]"
        descriptionClassName="max-w-[820px]"
        actions={[
          { href: "#stories", label: "Explore Stories", tone: "light" },
          { href: "/request-demo", label: "Request Demo" },
        ]}
        image={{
          src: "/figma/industries-banner.png",
          alt: "NextGen workspace on a laptop",
          width: 1635,
          height: 674,
        }}
      />

      <section id="stories" className="bg-white py-16 sm:py-24">
        <div className="content-1442">
          <div className="mx-auto max-w-[820px] text-center">
            <h2 className="text-[clamp(32px,2.6vw,44px)] leading-[1.15] font-medium tracking-[-0.03em] text-[#111111]">
              Stories of connected work, from request to resolution
            </h2>
            <p className="mx-auto mt-4 max-w-[680px] text-[15px] leading-7 text-[#111111] sm:text-[16px]">
              Explore six potential customer stories showing how teams in different environments could bring service
              conversations, ownership, workflows, and reporting together in CWIT EMS.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-2 lg:grid-cols-3">
            {stories.map((story, index) => (
              <article
                key={`${story.title}-${index}`}
                className="flex flex-col rounded-[12px] border border-black/10 bg-white p-6 sm:p-7"
              >
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex h-8 items-center rounded-full bg-black px-3.5 text-[13px] font-medium text-white">
                    {story.industry}
                  </span>
                  <span className="inline-flex h-8 items-center rounded-full bg-black px-3.5 text-[13px] font-medium text-white">
                    {story.modules}
                  </span>
                </div>
                <h3 className="mt-5 text-[20px] leading-[1.3] font-semibold tracking-[-0.02em] text-[#111111] sm:text-[22px]">
                  {story.title}
                </h3>
                <p className="mt-3 text-[14px] leading-6 text-[#111111] sm:text-[15px]">{story.body}</p>
                <div className="mt-auto pt-8">
                  <Pill href="/case-studies/details" tone="ghost-dark">
                    Read Case Study
                  </Pill>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Bring every customer and team interaction into one workspace"
        description="CWIT EMS connects customer support, work management, CRM, analytics, and governance so your organization can manage requests, coordinate responsibilities, and see progress across teams from one connected platform."
        titleClassName="max-w-[620px]"
        actions={[{ href: "/request-demo", label: "Request Demo" }]}
        image={paymentImage}
      />
      <Footer />
    </div>
  );
}
