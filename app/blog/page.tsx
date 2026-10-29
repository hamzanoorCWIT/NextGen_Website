import type { Metadata } from "next";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { HeroBanner } from "@/components/hero-banner";
import { Pill } from "@/components/pill";

export const metadata: Metadata = {
  title: "Blog | NextGen Contact Centre",
  description:
    "Insights on customer service, operations, workforce management, and building connected teams with CWIT EMS.",
};

const paymentImage = {
  src: "/figma/cta-new.png",
  alt: "Payments, customers, and successful transactions connected in one flow",
  width: 802,
  height: 609,
};

const posts = [
  {
    category: "Customer Service",
    title: "How omnichannel ticketing reduces handoffs",
    body: "Learn how bringing requests, conversations, ownership, and resolution history into one connected workflow can reduce unnecessary transfers and make customer support more consistent.",
  },
  {
    category: "Operations",
    title: "Building approvals that teams actually follow",
    body: "Explore how clear decision paths, defined approvers, timely reminders, and visible audit trails help teams move requests forward without losing accountability.",
  },
  {
    category: "Workforce",
    title: "Connecting attendance, shifts, and cost",
    body: "See how combining attendance records, shift planning, and time information can help operations leaders understand team availability, capacity, and workforce costs.",
  },
  {
    category: "Governance",
    title: "Policy acknowledgement without the spreadsheet chase",
    body: "Discover a more structured way to share policies, track acknowledgements, identify outstanding responses, and keep evidence available for internal review.",
  },
  {
    category: "Analytics",
    title: "What leaders should see in a service dashboard",
    body: "Focus on the measures that matter, from workload and response times to SLA performance and unresolved requests, so teams can recognize issues and act sooner.",
  },
  {
    category: "Platform",
    title: "When to replace a fragmented tool stack",
    body: "Understand the signs that disconnected tools are slowing teams down, and what to consider when bringing customer service, work management, and operational reporting together.",
  },
];

export default function BlogPage() {
  return (
    <div id="top" className="site">
      <HeroBanner
        className="blog-hero"
        title="Ideas that make connected operations work better"
        description="Explore practical perspectives on customer service, workforce management, governance, analytics, and the everyday decisions that help teams work with greater clarity and consistency."
        titleClassName="max-w-[980px]"
        descriptionClassName="max-w-[820px]"
        actions={[
          { href: "#articles", label: "Explore Articles", tone: "light" },
          { href: "/request-demo", label: "Request Demo" },
        ]}
      />

      <section id="articles" className="bg-[#FAFAFA] py-8 sm:py-16">
        <div className="content-1426 mb-10 text-center">
          <h2 className="mx-auto max-w-[820px] text-[clamp(32px,2.6vw,44px)] leading-[1.15] font-semibold tracking-[-0.03em]">
            Practical thinking for teams running complex operations
          </h2>
          <p className="mx-auto mt-4 max-w-[680px] text-[15px] leading-7 text-[#1a1a1a] sm:text-[16px]">
            From reducing customer handoffs to making operational performance easier to understand, discover ideas your
            teams can apply to improve the way work gets done.
          </p>
        </div>
        <div className="content-1426 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="flex min-h-[280px] flex-col rounded-[12px] bg-black p-6 text-white sm:p-7">
              <p className="text-[12px] font-semibold tracking-[0.06em] text-white uppercase">{post.category}</p>
              <h2 className="mt-4 text-[20px] leading-snug font-semibold tracking-[-0.02em]">{post.title}</h2>
              <p className="mt-3 flex-1 text-[15px] leading-7 text-white">{post.body}</p>
              <div className="mt-6">
                <Pill href="/blog/details" tone="light">Read More</Pill>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaSection
        title="See how CWIT EMS connects every team"
        description="Bring customer service, work management, CRM, analytics, and governance into one connected workspace. Explore how CWIT EMS can help your teams coordinate work, maintain visibility, and make better-informed decisions."
        titleClassName="max-w-[620px]"
        actions={[{ href: "/request-demo", label: "Request Demo" }]}
        image={paymentImage}
      />
      <Footer />
    </div>
  );
}
