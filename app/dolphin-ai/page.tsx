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

const capabilities = ["Workflow Assistance", "AI Responses", "Intelligent Routing", "Smart Classification"];

const workflows = [
  { label: "Automatic conversation", className: "left-[-10%] top-[42%]" },
  { label: "Customer sentiment detection", className: "right-[-10%] top-[42%]" },
  { label: "Responses based on context", className: "left-[14%] bottom-[1%]" },
  { label: "Recommended next steps", className: "right-[12%] bottom-[0%]" },
];

export default function DolphinAiPage() {
  return (
    <div id="top" className="site">
      <HeroBanner
        title="AI that understands your operations and helps work move faster."
        description="Dolphin AI works inside CWIT EMS to understand customer conversations, operational workflows, and business knowledge — helping teams resolve requests faster, automate repetitive tasks, and make better decisions."
        titleClassName="max-w-[980px]"
        descriptionClassName="max-w-[820px]"
        actions={[
          { href: "#context", label: "Explore the Platform", tone: "light" },
          { href: "/request-demo", label: "Request Demo" },
        ]}
        image={{
          src: "/figma/customer-service-hero.png",
          alt: "Dolphin AI on a laptop, identifying a discount request and drafting a suggested reply",
          width: 1348,
          height: 637,
        }}
      />

      <HighlightCards
        id="context"
        variant="numbered"
        title="Dolphin AI understands the complete operational context."
        description="AI becomes more useful when it understands more than words. Dolphin AI connects conversations, customer history, workflows, and business information to provide meaningful assistance."
        items={[
          {
            label: "01",
            title: "Understand Every Conversation",
            body: "Analyze customer messages, previous interactions, and operational history to understand the complete context.",
          },
          {
            label: "02",
            title: "Find The Right Information",
            body: "Access relevant knowledge, documents, and records without manually searching across systems.",
          },
          {
            label: "03",
            title: "Recommend The Next Action",
            body: "Help teams decide what needs attention and what should happen next.",
          },
        ]}
      />

      <section className="bg-black py-16 text-white sm:py-24">
        <div className="content-1426">
          <div className="mx-auto max-w-[820px] text-center">
            <h2 className="mx-auto max-w-[720px] text-[clamp(32px,2.6vw,48px)] leading-[1.15] font-medium tracking-[-0.035em]">
              Move from manual handling to
              <br />
              intelligent automation.
            </h2>
            <p className="mx-auto mt-4 max-w-[760px] text-[15px] leading-7 text-white/80 sm:text-[16px]">
              Dolphin AI helps automate repetitive operational tasks while keeping your teams in control.
            </p>
          </div>
          <div className="mt-12 grid items-stretch gap-4 sm:mt-14 lg:grid-cols-2 lg:gap-5">
            <article className="flex flex-col rounded-[28px] bg-white p-7 text-[#111] sm:p-9 lg:h-[696px]">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10">
                <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
                  <path d="M10.2 1.5 4.2 10h4.1l-1 6.5 6.5-9.2H9.6l.6-5.8Z" fill="currentColor" />
                </svg>
              </span>
              <h3 className="mt-8 text-[20px] font-semibold tracking-[-0.02em]">Smart Classification</h3>
              <p className="mt-2 max-w-[420px] text-[15px] leading-6 text-[#3a3a3a]">
                Generate accurate responses using customer history and company knowledge.
              </p>
              <ul className="mt-auto pt-10">
                {capabilities.map((item) => (
                  <li key={item} className="border-t border-black/10 py-4 text-[15px] text-[#3a3a3a]">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <div className="relative h-[360px] overflow-hidden rounded-[28px] bg-[#f3e6c8] sm:h-[480px] lg:h-[696px]">
              <Image
                src="/figma/manual-handling.png"
                alt="A suggested NexaHome setup video shown over a customer conversation"
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
          <div className="relative mx-auto w-full max-w-[1031px]">
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
        </div>
      </section>

      <section className="bg-[#FAFAFA] py-16 sm:py-24">
        <div className="content-1442 grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <Image
            src="/figma/built-for-every.png"
            alt="A guide about the state of RCS in customer communications"
            width={815}
            height={537}
            className="h-auto w-full rounded-[28px] object-contain"
            style={{ width: "min(100%, 815px)", height: "auto" }}
          />
          <div>
            <h2 className="text-[clamp(34px,2.7vw,48px)] leading-[1.12] font-medium tracking-[-0.04em]">
              Built for every team
            </h2>
            <h3 className="mt-6 text-[18px] font-semibold tracking-[-0.02em]">Customer Service Teams</h3>
            <p className="mt-3 max-w-[520px] text-[15px] leading-7 text-[#111] sm:text-[16px]">
              Resolve customer requests faster with AI-powered summaries, context-aware response suggestions, and
              instant access to relevant customer information. Dolphin AI helps support teams understand every
              interaction and deliver accurate responses with greater speed and consistency.
            </p>
            <div className="mt-7">
              <Pill href="/request-demo">Request Demo</Pill>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Create a better way to manage customer service"
        description="CWIT EMS connects customer support, work management, CRM, analytics, and governance into one intelligent workspace."
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
