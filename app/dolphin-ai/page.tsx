import type { Metadata } from "next";
import Image from "next/image";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { HeroBanner } from "@/components/hero-banner";
import { HighlightCards } from "@/components/highlight-cards";
import { Pill } from "@/components/pill";

export const metadata: Metadata = {
  title: "Dolphin AI | NextGen Contact Centre",
  description:
    "Dolphin AI works inside CWIT EMS to understand customer conversations, operational workflows, and business knowledge — helping teams resolve requests faster.",
};

const capabilities = [
  {
    title: "Smart Classification",
    body: "Recognize the subject, intent, and relevant details of incoming requests to support consistent categorization.",
  },
  {
    title: "Workflow Assistance",
    body: "Guide work through appropriate steps and help teams move requests forward without unnecessary manual handoffs.",
  },
  {
    title: "AI Responses",
    body: "Prepare context-aware response suggestions that agents can review, refine, and send.",
  },
  {
    title: "Intelligent Routing",
    body: "Recommend the right team or department using request context and available operational rules.",
  },
];

const workflows = [
  {
    label: "Automatic Conversations",
    body: "Help agents understand incoming messages and keep customer conversations moving with contextual assistance.",
    className: "left-[-10%] top-[42%]",
  },
  {
    label: "Customer Sentiment Detection",
    body: "Identify signals in customer language that may need extra care or attention.",
    className: "right-[-10%] top-[42%]",
  },
  {
    label: "Responses Based on Context",
    body: "Suggest replies informed by the current discussion and accessible customer information.",
    className: "left-[14%] bottom-[1%]",
  },
  {
    label: "Recommended Next Steps",
    body: "Highlight suitable follow-up actions so important requests do not lose momentum.",
    className: "right-[12%] bottom-[0%]",
  },
];

export default function DolphinAiPage() {
  return (
    <div id="top" className="site">
      <HeroBanner
        title="Make every customer interaction smarter with Dolphin AI"
        description="Dolphin AI brings customer conversations, operational workflows, and business knowledge together to help teams understand requests, find relevant information, and take the next step with greater confidence."
        titleClassName="max-w-[980px]"
        descriptionClassName="max-w-[820px]"
        actions={[
          { href: "#context", label: "Explore the Platform", tone: "light" },
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
        id="context"
        variant="numbered"
        title="AI that understands the context behind every request"
        description="Dolphin AI connects conversation history with relevant customer records and operational information, so teams can respond with a clearer understanding of the situation instead of starting from scratch."
        items={[
          {
            label: "01",
            title: "Understand Every Conversation",
            body: "Bring messages, previous interactions, and customer context together to understand what people need and what has already happened.",
          },
          {
            label: "02",
            title: "Find The Right Information",
            body: "Surface relevant knowledge, documents, and records in the workspace, reducing the time spent switching between systems.",
          },
          {
            label: "03",
            title: "Recommend The Next Action",
            body: "Help agents identify useful next steps based on the conversation and available context, while keeping the final decision with the team.",
          },
        ]}
      />

      <section className="bg-black py-16 text-white sm:py-24">
        <div className="content-1426">
          <div className="mx-auto max-w-[820px] text-center">
            <h2 className="mx-auto max-w-[720px] text-[clamp(32px,2.6vw,48px)] leading-[1.15] font-medium tracking-[-0.035em]">
              Turn repetitive work into guided, intelligent workflows
            </h2>
            <p className="mx-auto mt-4 max-w-[760px] text-[15px] leading-7 text-white/80 sm:text-[16px]">
              Use Dolphin AI to assist with common service tasks, organize incoming requests, and support consistent
              responses. Teams retain visibility and control over the actions taken.
            </p>
          </div>
          <div className="mt-12 grid items-stretch gap-4 sm:mt-14 lg:grid-cols-2 lg:gap-5">
            <article className="flex flex-col rounded-[12px] bg-white p-7 text-[#111] sm:p-9 lg:h-[696px]">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10">
                <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
                  <path d="M10.2 1.5 4.2 10h4.1l-1 6.5 6.5-9.2H9.6l.6-5.8Z" fill="currentColor" />
                </svg>
              </span>
              <h3 className="mt-8 text-[20px] font-semibold tracking-[-0.02em]">{capabilities[0].title}</h3>
              <p className="mt-2 max-w-[420px] text-[15px] leading-6 text-[#3a3a3a]">{capabilities[0].body}</p>
              <ul className="mt-auto pt-10">
                {capabilities.slice(1).map((item) => (
                  <li key={item.title} className="border-t border-black/10 py-4 text-[15px] text-[#3a3a3a]">
                    <span className="font-semibold text-[#111]">{item.title}</span>
                    <span className="mt-1 block text-[14px] leading-6">{item.body}</span>
                  </li>
                ))}
              </ul>
            </article>
            <div className="relative h-[360px] overflow-hidden rounded-[12px] bg-[#f3e6c8] sm:h-[480px] lg:h-[696px]">
              <Image
                src="/figma/handling.png"
                alt="Dolphin AI classifying an internet support request by category, priority, department, and intent"
                fill
                sizes="(min-width: 1024px) 700px, 100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 sm:pb-24">
        <div className="content-1426">
          <div className="mx-auto max-w-[820px] pt-16 text-center sm:pt-24">
            <h2 className="mx-auto max-w-[720px] text-[clamp(32px,2.6vw,48px)] leading-[1.15] font-medium tracking-[-0.035em]">
              Useful AI assistance, right where your teams work
            </h2>
            <p className="mx-auto mt-4 max-w-[760px] text-[15px] leading-7 text-[#111] sm:text-[16px]">
              Dolphin AI supports everyday operations from initial conversation to follow-up, giving teams relevant
              information and practical guidance within their existing workflow.
            </p>
          </div>
          <div className="relative mx-auto mt-12 w-full max-w-[1031px] sm:mt-16">
            <Image
              src="/figma/dolphin-circle-1.png"
              alt=""
              width={1031}
              height={834}
              className="h-auto w-full"
            />
            <Image
              src="/figma/dolphin-circle-2.png"
              alt=""
              width={648}
              height={582}
              className="absolute top-0 left-1/2 h-auto w-[62.85%] -translate-x-1/2"
            />
            <div className="absolute top-[7%] left-1/2 w-[55.19%] -translate-x-1/2">
              <Image
                src="/figma/dolphin-circle-3.png"
                alt=""
                width={569}
                height={569}
                className="h-auto w-full"
              />
              <div className="absolute inset-0 flex items-center justify-center px-[14%] text-center">
                <div>
                  <p className="text-[clamp(11px,1.1vw,14px)] text-[#111]">Dolphin AI</p>
                  <h2 className="mt-2 text-[clamp(18px,2.3vw,36px)] leading-[1.15] font-medium tracking-[-0.035em]">
                    Your teams get AI
                    <br />
                    assistance inside
                    <br />
                    every workflow.
                  </h2>
                </div>
              </div>
            </div>
            {workflows.map((item) => (
              <p
                key={item.label}
                className={`absolute flex aspect-square w-[18%] items-center justify-center rounded-full bg-black px-[2%] text-center text-[clamp(11px,1.15vw,15px)] leading-[1.25] text-white ${item.className}`}
              >
                {item.label}
              </p>
            ))}
          </div>
          <div className="mx-auto mt-12 grid max-w-[1031px] gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
            {workflows.map((item) => (
              <div key={item.label}>
                <h3 className="text-[16px] font-semibold tracking-[-0.02em]">{item.label}</h3>
                <p className="mt-2 text-[14px] leading-6 text-[#3a3a3a]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAFA] py-16 sm:py-24">
        <div className="content-1442 grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <Image
            src="/figma/built-team.png"
            alt="Team hierarchy showing administrator and manager roles"
            width={815}
            height={537}
            className="h-auto w-full rounded-[12px] object-contain"
            style={{ width: "min(100%, 815px)", height: "auto" }}
          />
          <div>
            <h2 className="text-[clamp(34px,2.7vw,48px)] leading-[1.12] font-medium tracking-[-0.04em]">
              Give every team AI support that fits its work
            </h2>
            <p className="mt-4 max-w-[520px] text-[15px] leading-7 text-[#111] sm:text-[16px]">
              From frontline support to operational oversight, Dolphin AI helps people access the right context and
              make informed decisions without leaving their everyday workspace.
            </p>
            <h3 className="mt-6 text-[18px] font-semibold tracking-[-0.02em]">Customer Service Teams</h3>
            <p className="mt-3 max-w-[520px] text-[15px] leading-7 text-[#111] sm:text-[16px]">
              Help agents understand requests faster, locate relevant knowledge, and prepare more consistent replies.
              Supervisors can use shared context to support reviews, coaching, and coordinated follow-up.
            </p>
            <div className="mt-7">
              <Pill href="/request-demo">Request Demo</Pill>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Bring intelligence into the work you already do"
        description="Connect conversations, knowledge, and workflows with Dolphin AI inside NextGen Contact Centre. Give your teams practical assistance while keeping people responsible for decisions and customer outcomes."
        titleClassName="max-w-[560px]"
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
