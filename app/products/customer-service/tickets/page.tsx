import type { Metadata } from "next";
import Image from "next/image";
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
    "Bring customer requests, conversations, and updates into one organized workspace. NextGen Tickets helps teams take ownership, respond with context, and move every issue toward a clear resolution.",
};

const checklist = [
  { title: "Connected conversations", body: "Keep customer communication alongside the request it belongs to." },
  { title: "Consistent ticket details", body: "Give teams a reliable view of status, priority, classification, and ownership." },
  { title: "Visible progress", body: "See the latest activity and understand what needs to happen next." },
  { title: "Accountable handoffs", body: "Keep responsibility clear when requests move between people or departments." },
];

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
        description="Bring customer requests, conversations, and updates into one organized workspace. NextGen Tickets helps teams take ownership, respond with context, and move every issue toward a clear resolution."
        titleClassName="max-w-[980px]"
        descriptionClassName="max-w-[820px]"
        actions={[
          { href: "/request-demo", label: "See Pricing", tone: "light" },
          { href: "/request-demo", label: "Request Demo" },
        ]}
        image={{
          src: "/figma/ticket-banner.png",
          alt: "A laptop showing an inbox of customer and team messages",
          width: 1136,
          height: 548,
        }}
      />

      <HighlightCards
        id="views"
        variant="numbered"
        title="Every ticket, organized the way your team works."
        description="Choose the view that fits the task at hand. Follow incoming requests, review ticket details, and see what needs attention without losing the context behind each conversation."
        items={[
          {
            label: "01",
            title: "List View",
            body: "Scan tickets, compare key details, and find the requests that need action across your team.",
          },
          {
            label: "02",
            title: "Grid View",
            body: "See tickets in a compact, visual layout that makes priorities and ownership easier to review.",
          },
          {
            label: "03",
            title: "Kanban View",
            body: "Track requests through workflow stages so everyone can see what is waiting, moving, or completed.",
          },
        ]}
      />

      <FeatureSplit
        items={[
          {
            id: "request-details",
            title: "Everything about a request, in one place.",
            body: "Keep the conversation, contact information, assignee, status, priority, and related activity together. Give your team the context to respond accurately without switching between disconnected records.",
            image: "/figma/ticket-1.png",
            imageAlt: "Ticket with complete request details",
            imageWidth: 719,
            imageHeight: 474,
            imageSide: "right",
            ctaLabel: "Request Demo",
            ctaHref: "/request-demo",
          },
          {
            id: "route",
            title: "Categorize and route automatically.",
            body: "Organize requests by purpose, department, and priority, then route work to the right team. Consistent classification helps reduce manual sorting and keeps ownership clear as new tickets arrive.",
            image: "/figma/ticket-2.png",
            imageAlt: "Tickets categorized and routed automatically",
            imageWidth: 719,
            imageHeight: 474,
            imageSide: "left",
            ctaLabel: "Request Demo",
            ctaHref: "/request-demo",
          },
          {
            id: "priorities",
            title: "Make urgent work impossible to miss.",
            body: "Set priorities, monitor response and resolution targets, and give teams a clear view of approaching deadlines. Keep critical requests visible before they become overdue.",
            image: "/figma/ticket-3.png",
            imageAlt: "Ticket priorities and deadlines",
            imageWidth: 719,
            imageHeight: 474,
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
                Record the essential details behind every customer issue, from the first message to the final resolution. A shared ticket record makes follow-up, collaboration, and review easier.
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
            <article className="flex min-h-[420px] flex-col overflow-hidden rounded-[12px] bg-[#f6f4f1] p-6 pt-9 pl-9 text-[#111111] sm:min-h-[480px] sm:p-7 sm:pt-12 sm:pl-12">
              <h3 className="max-w-[420px] text-[18px] leading-snug font-semibold tracking-[-0.02em] sm:text-[20px]">
                Keep conversations connected
              </h3>
              <p className="mt-4 text-[15px] leading-7 text-[#3a3a3a]">Bring customer messages and replies together so teams can follow the full discussion and respond with context.</p>
              <div className="-mr-6 -mb-6 mt-6 flex flex-1 items-end justify-end sm:-mr-7 sm:-mb-7">
                <Image
                  src="/figma/capture-1.png"
                  alt="Creating a playbook with name, description, and instructions"
                  width={704}
                  height={502}
                  className="h-auto w-full translate-x-[5.26%] translate-y-[7.57%]"
                />
              </div>
            </article>

            <article className="flex min-h-[420px] flex-col overflow-hidden rounded-[12px] bg-[#f6f4f1] p-6 pt-9 pl-9 text-[#111111] sm:min-h-[480px] sm:p-7 sm:pt-12 sm:pl-12">
              <h3 className="max-w-[420px] text-[18px] leading-snug font-semibold tracking-[-0.02em] sm:text-[20px]">
                Understand the request at a glance
              </h3>
              <p className="mt-4 text-[15px] leading-7 text-[#3a3a3a]">See ticket status, ownership, classification, and other essential details in one structured view.</p>
              <div className="-mb-6 mt-6 flex flex-1 items-end justify-center sm:-mb-7">
                <Image
                  src="/figma/capture-2.png"
                  alt="Classifying the conversations an agent handles"
                  width={666}
                  height={513}
                  className="h-auto w-full translate-y-[7.41%]"
                />
              </div>
            </article>

            <article className="flex min-h-[420px] flex-col overflow-hidden rounded-[12px] bg-[#f6f4f1] p-6 pt-9 pl-9 text-[#111111] sm:min-h-[480px] sm:p-7 sm:pt-12 sm:pl-12">
              <h3 className="max-w-[440px] text-[18px] leading-snug font-semibold tracking-[-0.02em] sm:text-[20px]">
                See updates and internal progress
              </h3>
              <p className="mt-4 text-[15px] leading-7 text-[#3a3a3a]">Follow replies, activity, and changes as a ticket moves between people and stages.</p>
              <div className="-mr-6 -mb-6 mt-6 flex flex-1 items-end justify-end sm:-mr-7 sm:-mb-7">
                <Image
                  src="/figma/capture-3.png"
                  alt="Assigning a ticket to an agent"
                  width={664}
                  height={540}
                  className="h-auto w-full translate-x-[5.57%] translate-y-[6.85%]"
                />
              </div>
            </article>

            <article className="flex min-h-[420px] flex-col overflow-hidden rounded-[12px] bg-[#f6f4f1] p-6 pt-9 pl-9 text-[#111111] sm:min-h-[480px] sm:p-7 sm:pt-12 sm:pl-12">
              <h3 className="max-w-[440px] text-[18px] leading-snug font-semibold tracking-[-0.02em] sm:text-[20px]">
                Keep team handoffs clear
              </h3>
              <p className="mt-4 text-[15px] leading-7 text-[#3a3a3a]">Give the next assignee the information needed to continue work without starting over.</p>
              <div className="-mb-6 mt-6 flex flex-1 items-end justify-center sm:-mb-7">
                <Image
                  src="/figma/capture-4.png"
                  alt="Agent performance with key metrics and reply quality"
                  width={666}
                  height={515}
                  className="h-auto w-full translate-y-[7.38%]"
                />
              </div>
            </article>
          </div>
        </div>
      </section>

      <HighlightCards
        variant="icon"
        title="Every ticket follows a clear path to resolution."
        description="Replace fragmented follow-ups with a consistent workflow. From the moment a request arrives to the point it is resolved, each stage remains visible to the people responsible."
        items={[
          {
            title: "A request arrives",
            body: "Capture the incoming issue and create a ticket with the customer conversation and relevant details.",
          },
          {
            title: "Priorities are set",
            body: "Classify the request, assign ownership, and set the priority and response expectations.",
          },
          {
            title: "Work progresses",
            body: "Track responses, collaborate across teams, and update the ticket as the issue is handled.",
          },
          {
            title: "Resolution is confirmed",
            body: "Record the outcome and close the request with a traceable history of the work completed.",
          },
        ]}
      />

      <section className="bg-white py-8 sm:py-16">
        <div className="content-1426 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="max-w-[520px] text-[clamp(32px,2.6vw,44px)] leading-[1.15] font-semibold tracking-[-0.03em]">
              Complete context. Clearer ownership. Better resolution.
            </h2>
            <p className="mt-4 max-w-[520px] text-[15px] leading-7 text-[#1a1a1a] sm:text-[16px]">
              Make every ticket easier to understand and manage with connected conversations, structured details, visible priorities, and a complete activity history.
            </p>
            <ul className="mt-6 space-y-3">
              {checklist.map((item) => (
                <li key={item.title} className="flex items-start gap-3 text-[15px] sm:text-[16px]">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-black text-[11px] text-white" aria-hidden="true">
                    ✓
                  </span>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-1 text-[15px] leading-7 text-[#3a3a3a]">{item.body}</p>
                  </div>
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
          <div className="mx-auto w-full max-w-[560px] lg:mx-0 lg:max-w-none">
            <Image
              src="/figma/capture-complete.png"
              alt="Ticket statistics and delivery rate dashboard"
              width={810}
              height={514}
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      <ProductModules
        id="modules"
        indicator="check"
        title="More Customer Service Products"
        description="Connect Tickets with other customer service capabilities in NextGen to manage conversations and requests through a more consistent team workflow."
        actions={[
          { href: "/products", label: "Products Overview", tone: "ghost-dark" },
          { href: "#modules", label: "All Modules" },
        ]}
        tabs={[
          {
            id: "chat-whatsapp",
            label: "Chat & WhatsApp",
            image: {
              src: "/figma/product-tab-2.png",
              alt: "Chat and WhatsApp conversations workspace",
              width: 948,
              height: 617,
            },
          },
          {
            id: "calls-campaigns",
            label: "Calls & Campaigns",
            active: true,
            image: {
              src: "/figma/product-tab-3.png",
              alt: "Calls and campaigns workspace",
              width: 948,
              height: 617,
            },
          },
        ]}
      />

      <CtaSection
        title={
          <>
            Build a ticket management
            <br className="hidden lg:block" /> process that works for your
            <br className="hidden lg:block" /> organization.
          </>
        }
        description="Bring people, requests, and workflows together in one connected environment. NextGen helps your team stay organized, act on the right priorities, and deliver a more consistent customer service experience."
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
