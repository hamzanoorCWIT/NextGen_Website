import type { Metadata } from "next";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { HeroBanner } from "@/components/hero-banner";
import { HighlightCards } from "@/components/highlight-cards";
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
    body: "Keep conversations, ownership, and resolution history connected across every channel.",
  },
  {
    category: "Operations",
    title: "Building approvals that teams actually follow",
    body: "Design multi-level approval paths with clear owners, reminders, and audit trails.",
  },
  {
    category: "Workforce",
    title: "Connecting attendance, shifts, and cost",
    body: "Give operations leaders real-time visibility into capacity and workforce spend.",
  },
  {
    category: "Governance",
    title: "Policy acknowledgement without the spreadsheet chase",
    body: "Publish policies, track acknowledgements, and keep compliance evidence ready.",
  },
  {
    category: "Analytics",
    title: "What leaders should see in a service dashboard",
    body: "Focus reporting on SLAs, workload, and outcomes that drive better decisions.",
  },
  {
    category: "Platform",
    title: "When to replace a fragmented tool stack",
    body: "Identify the signals that show it's time to consolidate service and operations tools.",
  },
];

export default function BlogPage() {
  return (
    <div id="top" className="site">
      <HeroBanner
        title="Ideas for building connected operations"
        description="Read practical insights on customer service, workforce management, governance, and running daily work on one platform."
        titleClassName="max-w-[980px]"
        descriptionClassName="max-w-[820px]"
        actions={[
          { href: "#articles", label: "Explore Articles", tone: "light" },
          { href: "/request-demo", label: "Request Demo" },
        ]}
        image={{
          src: "/figma/hero-1.png",
          alt: "NextGen workspace on a laptop",
          width: 1266,
          height: 584,
        }}
      />

      <section id="articles" className="bg-[#FAFAFA] py-8 sm:py-16">
        <div className="content-1426 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="flex min-h-[280px] flex-col rounded-[12px] bg-white p-6 sm:p-7">
              <p className="text-[12px] font-semibold tracking-[0.06em] text-[#667085] uppercase">{post.category}</p>
              <h2 className="mt-4 text-[20px] leading-snug font-semibold tracking-[-0.02em]">{post.title}</h2>
              <p className="mt-3 flex-1 text-[15px] leading-7 text-[#3a3a3a]">{post.body}</p>
              <div className="mt-6">
                <Pill href="/blog/details">Read More</Pill>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaSection
        title="See how CWIT EMS connects every team"
        description="Request a demo to explore customer service, work management, CRM, analytics, and governance in one workspace."
        titleClassName="max-w-[620px]"
        actions={[{ href: "/request-demo", label: "Request Demo" }]}
        image={paymentImage}
      />
      <Footer />
    </div>
  );
}
