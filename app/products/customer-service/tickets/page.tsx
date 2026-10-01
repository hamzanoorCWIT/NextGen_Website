import type { Metadata } from "next";
import { CtaSection } from "@/components/cta-section";
import { FeatureSplit } from "@/components/feature-split";
import { Footer } from "@/components/footer";
import { HeroBanner } from "@/components/hero-banner";
import { HighlightCards } from "@/components/highlight-cards";
import { Pill } from "@/components/pill";
import { ProductModules } from "@/components/product-modules";

export const metadata: Metadata = {
  title: "Tickets | NextGen Contact Centre",
  description:
    "Manage incoming requests, internal issues, and service cases in one organized workspace. Assign ownership, track progress, and manage SLAs.",
};

const checklist = [
  "Complete customer interaction history",
  "Response & resolution tracking",
  "Complete ticket journey",
  "Smart summaries & reply suggestions",
  "Assign and involve team members",
];

const agents = [
  { name: "Claude", color: "#f97316" },
  { name: "Codex", color: "#7c3aed" },
  { name: "Sierra", color: "#16a34a" },
  { name: "Decagon", color: "#111111" },
  { name: "Forethought", color: "#64748b" },
];

const topics = ["General Q&A", "Billing", "Orders", "Compliance", "Technical", "Sales", "VIP", "Urgent"];

export default function TicketsPage() {
  return (
    <div id="top" className="site">
      <HeroBanner
        title={
          <>
            Every customer request, tracked from
            <br />
            start to resolution.
          </>
        }
        description="Manage incoming requests, internal issues, and service cases in one organized workspace. Assign ownership, track progress, manage SLAs, and keep every interaction connected to the ticket."
        titleClassName="max-w-[980px]"
        descriptionClassName="max-w-[820px]"
        actions={[
          { href: "/request-demo", label: "See Pricing", tone: "light" },
          { href: "/request-demo", label: "Request Demo" },
        ]}
        image={{
          src: "/figma/hero-1.png",
          alt: "A laptop showing an inbox of customer and team messages",
          width: 1266,
          height: 584,
        }}
      />

      <HighlightCards
        id="views"
        variant="numbered"
        title="Every ticket, organized the way your team works."
        description="Manage every request from a single workspace with flexible views built for different workflows. Review ticket details in a structured table, or move work visually through Kanban stages to track ownership, progress, and resolution."
        items={[
          {
            label: "01",
            title: "Table View",
            body: "Monitor status, priority, SLA, assignees, department, and customer details while customizing columns to fit your team's workflow.",
          },
          {
            label: "02",
            title: "Card View",
            body: "Tickets adapts to your team's style, whether you prefer structured records or visual workflows.",
          },
          {
            label: "03",
            title: "Kanban View",
            body: "Organize tickets by status and help teams identify what needs attention, what's in progress, and what's resolved.",
          },
        ]}
      />

      <FeatureSplit
        items={[
          {
            id: "request-details",
            title: "Complete Request Details",
            body: "Capture the context behind every request with structured fields for subject, message, attachments, and internal notes. Give teams the information they need before taking action.",
            image: "/figma/ticket-details.png",
            imageAlt: "A recipe conversation with ingredient choices and a shopping list",
            imageWidth: 900,
            imageHeight: 390,
            imageSide: "right",
            ctaLabel: "Request Demo",
            ctaHref: "/request-demo",
          },
          {
            id: "route",
            title: "Categorize and route automatically",
            body: "Organize tickets by purpose, category, department, and source. Ensure every request reaches the right team with clear ownership from the start.",
            image: "/figma/ticket-route.png",
            imageAlt: "A RockBank message asking a customer to confirm a suspicious charge",
            imageWidth: 520,
            imageHeight: 552,
            imageSide: "left",
            ctaLabel: "Request Demo",
            ctaHref: "/request-demo",
          },
          {
            id: "priorities",
            title: "Set priorities and deadlines",
            body: "Define ticket priority, SLA requirements, and response expectations early in the workflow. Help teams focus on urgent requests and maintain service standards.",
            image: "/figma/ticket-priorities.png",
            imageAlt: "A Mountain Resort chat offering lift wait times and slope photos",
            imageWidth: 900,
            imageHeight: 500,
            imageSide: "right",
            ctaLabel: "Request Demo",
            ctaHref: "/request-demo",
          },
        ]}
      />

      <section className="bg-black py-16 text-white sm:py-24">
        <div className="content-1426">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[720px]">
              <h2 className="text-[clamp(32px,2.6vw,44px)] leading-[1.15] font-semibold tracking-[-0.03em]">
                Capture every request with complete information.
              </h2>
              <p className="mt-4 max-w-[640px] text-[15px] leading-7 text-white/75 sm:text-[16px]">
                Every ticket starts with the right information. Capture details, assign ownership, define priorities, and
                organize requests with structured fields that help teams resolve issues faster.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Pill href="/request-demo" tone="light">
                See pricing
              </Pill>
              <Pill href="/request-demo" tone="ghost">
                Request Demo
              </Pill>
            </div>
          </div>

          <div className="mt-12 grid items-stretch gap-4 sm:grid-cols-2 sm:gap-5">
            <article className="flex min-h-[420px] flex-col rounded-[22px] bg-[#f6f4f1] p-6 text-[#111111] sm:min-h-[480px] sm:p-7">
              <h3 className="max-w-[420px] text-[18px] leading-snug font-semibold tracking-[-0.02em] sm:text-[20px]">
                Capture messages, notes, and essential request information in one place.
              </h3>
              <div className="mt-6 flex flex-1 gap-3 rounded-2xl border border-black/5 bg-white p-4 shadow-[0_8px_24px_rgba(16,24,40,0.06)]">
                <div className="flex w-8 shrink-0 flex-col items-center gap-3 pt-1 text-[#c4c8d0]" aria-hidden="true">
                  <span className="h-4 w-4 rounded-sm border border-current" />
                  <span className="h-4 w-4 rounded-full border border-current" />
                  <span className="h-4 w-4 rounded-sm border border-current" />
                  <span className="mt-auto h-4 w-4 rounded-full bg-[#7c3aed]" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[15px] font-semibold">Create Playbook</p>
                  <label className="mt-4 block text-[12px] text-[#6b7280]">Name</label>
                  <p className="mt-1 rounded-lg bg-[#f5f6f8] px-3 py-2.5 text-[13px] text-[#9aa0a8]">Enter a name for this Playbook</p>
                  <label className="mt-3 block text-[12px] text-[#6b7280]">Description</label>
                  <p className="mt-1 rounded-lg bg-[#f5f6f8] px-3 py-2.5 text-[13px] text-[#9aa0a8]">Describe when this Playbook applies</p>
                  <label className="mt-3 block text-[12px] text-[#6b7280]">Instructions</label>
                  <p className="mt-1 rounded-lg bg-[#f5f6f8] px-3 py-2.5 text-[13px] text-[#9aa0a8]">
                    Describe the steps to follow and when to hand off to a human.
                  </p>
                  <p className="mt-5 text-center text-[13px] text-[#6b7280]">Upload .md file</p>
                </div>
              </div>
            </article>

            <article className="flex min-h-[420px] flex-col rounded-[22px] bg-[#f6f4f1] p-6 text-[#111111] sm:min-h-[480px] sm:p-7">
              <h3 className="max-w-[420px] text-[18px] leading-snug font-semibold tracking-[-0.02em] sm:text-[20px]">
                Classify requests by purpose, source, department, and priority.
              </h3>
              <div className="mt-6 flex flex-1 flex-col items-center justify-center rounded-2xl border border-black/5 bg-white px-5 py-8 text-center shadow-[0_8px_24px_rgba(16,24,40,0.06)]">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff1e8] text-[#f97316]" aria-hidden="true">
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                    <path d="M4 12.2 13 4.5l9 7.7V22a1 1 0 0 1-1 1h-5.2v-6.2H10.2V23H5a1 1 0 0 1-1-1v-9.8Z" fill="currentColor" />
                  </svg>
                </span>
                <p className="mt-5 max-w-[280px] text-[16px] leading-snug font-semibold">What conversations should this agent handle?</p>
                <p className="mt-5 w-full max-w-[320px] rounded-full border border-black/10 px-4 py-2.5 text-left text-[13px] text-[#111111]">
                  Refunds and payment questions
                </p>
                <div className="mt-4 flex max-w-[360px] flex-wrap justify-center gap-2">
                  {topics.map((topic) => (
                    <span key={topic} className="rounded-full bg-[#f3f4f6] px-3 py-1.5 text-[12px] text-[#3a3a3a]">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            <article className="flex min-h-[420px] flex-col rounded-[22px] bg-[#f6f4f1] p-6 text-[#111111] sm:min-h-[480px] sm:p-7">
              <h3 className="max-w-[440px] text-[18px] leading-snug font-semibold tracking-[-0.02em] sm:text-[20px]">
                Set expectations and track response commitments from creation.
              </h3>
              <div className="mt-6 flex flex-1 flex-col rounded-2xl border border-black/5 bg-white p-4 shadow-[0_8px_24px_rgba(16,24,40,0.06)] sm:p-5">
                <div className="flex items-center justify-between gap-3 text-[13px]">
                  <span className="font-medium">Assign to</span>
                  <span className="inline-flex items-center gap-2 rounded-lg border border-black/10 bg-white px-3 py-1.5 text-[#111111]">
                    Select agent
                    <span aria-hidden="true" className="text-[10px] text-[#6b7280]">▼</span>
                  </span>
                </div>
                <div className="mt-4 rounded-xl border border-black/10 p-3">
                  <p className="flex items-center gap-2 rounded-lg bg-[#f5f6f8] px-3 py-2 text-[13px] text-[#9aa0a8]">
                    <span aria-hidden="true">⌕</span>
                    Search agents
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {agents.map((agent) => (
                      <li key={agent.name} className="flex items-center gap-2.5 text-[14px]">
                        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: agent.color }} aria-hidden="true" />
                        {agent.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>

            <article className="flex min-h-[420px] flex-col rounded-[22px] bg-[#f6f4f1] p-6 text-[#111111] sm:min-h-[480px] sm:p-7">
              <h3 className="max-w-[440px] text-[18px] leading-snug font-semibold tracking-[-0.02em] sm:text-[20px]">
                Assign tickets to the right people and teams instantly.
              </h3>
              <div className="mt-6 flex flex-1 gap-3 rounded-2xl border border-black/5 bg-white p-4 shadow-[0_8px_24px_rgba(16,24,40,0.06)] sm:p-5">
                <div className="hidden w-8 shrink-0 flex-col items-center gap-3 pt-8 text-[#d0d5dd] sm:flex" aria-hidden="true">
                  <span className="h-4 w-4 rounded-sm border border-current" />
                  <span className="h-4 w-4 rounded-sm border border-current" />
                  <span className="h-4 w-4 rounded-full border border-current" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="flex items-center gap-2 text-[15px] font-semibold">
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#ede9fe] text-[11px] text-[#7c3aed]" aria-hidden="true">
                          ◆
                        </span>
                        Onboarding agent
                      </p>
                      <p className="mt-2 inline-flex rounded-md bg-[#f3f4f6] px-2 py-1 text-[12px] text-[#4b5563]">
                        Aug 10, 2026 → Aug 17, 2026
                      </p>
                    </div>
                    <p className="text-[11px] text-[#9aa0a8]">Last updated 10 seconds ago</p>
                  </div>
                  <div className="mt-6 grid grid-cols-[1fr_auto] items-center gap-4">
                    <div>
                      <p className="text-[12px] font-medium text-[#6b7280]">Key metrics</p>
                      <p className="mt-3 text-[12px] text-[#6b7280]">CSAT rating (avg)</p>
                      <p className="text-[32px] leading-none font-semibold tracking-[-0.03em]">4.8</p>
                      <p className="mt-4 text-[12px] text-[#6b7280]">Conversations resolved (%)</p>
                      <p className="text-[32px] leading-none font-semibold tracking-[-0.03em]">98%</p>
                    </div>
                    <div className="text-center">
                      <p className="text-[12px] font-medium text-[#6b7280]">Reply quality</p>
                      <div className="mx-auto mt-3 flex h-[108px] w-[108px] items-center justify-center rounded-full border-[12px] border-[#22c55e]">
                        <span>
                          <span className="block text-[10px] text-[#6b7280]">Total replies</span>
                          <span className="text-[22px] leading-none font-semibold">60</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <HighlightCards
        variant="icon"
        title="Every ticket follows a clear path to resolution."
        description="From assignment to escalation, Tickets keeps every request moving through a defined workflow. Route issues, manage ownership, track status changes, and ensure teams always know what needs attention next."
        items={[
          {
            title: "Assign & route",
            body: "Send every ticket to the right team with clear ownership.",
          },
          {
            title: "Prioritize work",
            body: "Highlight urgent requests and focus teams where they matter most.",
          },
          {
            title: "Track progress",
            body: "Monitor every stage from creation to completion.",
          },
          {
            title: "Collaborate easily",
            body: "Keep teams connected while maintaining accountability.",
          },
        ]}
      />

      <section className="bg-white py-8 sm:py-16">
        <div className="content-1426 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="max-w-[520px] text-[clamp(32px,2.6vw,44px)] leading-[1.15] font-semibold tracking-[-0.03em]">
              Capture every request with complete information.
            </h2>
            <p className="mt-4 max-w-[520px] text-[15px] leading-7 text-[#1a1a1a] sm:text-[16px]">
              Every ticket starts with the right information. Capture details, assign ownership, define priorities, and
              organize requests with structured fields that help teams resolve issues faster.
            </p>
            <ul className="mt-6 space-y-3">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] sm:text-[16px]">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-black text-[11px] text-white" aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Pill href="/request-demo" tone="ghost-dark">
                See pricing
              </Pill>
              <Pill href="/request-demo">Request Demo</Pill>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[560px] lg:mx-0 lg:max-w-none">
            <div className="ml-auto w-[86%] rounded-2xl bg-[#1b1b1b] p-4 text-white shadow-[0_18px_40px_rgba(16,24,40,0.12)] sm:p-5">
              <div className="flex flex-wrap gap-2 text-[11px] text-white/70">
                {["PHP", "NODE", "RUBY", "PYTHON", "JAVA", "GO", "C#"].map((lang) => (
                  <span key={lang} className="rounded-md bg-white/10 px-2 py-1">
                    {lang}
                  </span>
                ))}
              </div>
              <p className="mt-5 font-mono text-[12px] leading-6 text-emerald-300/90 sm:text-[13px]">
                curl --request POST \
                <br />
                &nbsp;&nbsp;https://api.example.net/v3/messages
              </p>
            </div>
            <div className="relative z-10 -mt-16 grid w-[92%] grid-cols-2 gap-4 rounded-[22px] bg-white p-4 shadow-[0_18px_50px_rgba(16,24,40,0.14)] sm:p-6">
              <div>
                <p className="text-[13px] font-medium">Statistics</p>
                <svg viewBox="0 0 160 90" className="mt-3 h-28 w-full" aria-hidden="true">
                  <path d="M4 58 C 24 18, 40 68, 58 38 S 90 8, 110 46 140 28, 156 20" fill="none" stroke="#111" strokeWidth="2.4" />
                  <path d="M4 72 C 30 52, 48 64, 70 38 S 110 58, 156 30" fill="none" stroke="#f43f5e" strokeWidth="2.4" />
                </svg>
              </div>
              <div className="text-center">
                <p className="text-[13px] font-medium">Delivery rate</p>
                <div className="mx-auto mt-4 flex h-28 w-28 items-center justify-center rounded-full border-[12px] border-[#fb7185]">
                  <span className="text-[26px] font-semibold tracking-[-0.03em]">98%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductModules
        id="modules"
        indicator="check"
        title="More Customer Service Products"
        description="Everything your customer service team needs"
        actions={[
          { href: "/products", label: "Products Overview", tone: "ghost-dark" },
          { href: "#modules", label: "All Modules" },
        ]}
        tabs={[
          {
            id: "chat-whatsapp",
            label: "Chat & WhatsApp",
            image: {
              src: "/figma/ticket-route.png",
              alt: "A chat message confirming a suspicious charge",
              width: 520,
              height: 552,
            },
          },
          {
            id: "calls-campaigns",
            label: "Calls & Campaigns",
            active: true,
            image: {
              src: "/figma/product-create.png",
              alt: "A campaign workspace for creating a customer message",
              width: 730,
              height: 456,
            },
          },
        ]}
      />

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
          src: "/figma/bring-your-customers.png",
          alt: "Payments, customers, and successful transactions connected in one flow",
          width: 912,
          height: 728,
        }}
      />
      <Footer />
    </div>
  );
}
