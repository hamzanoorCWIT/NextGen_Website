import Image from "next/image";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { HeroBanner } from "@/components/hero-banner";
import { Pill } from "@/components/pill";
import { Testimonials } from "@/components/testimonials";
import { ToolsScroll, type ToolsPanel } from "@/components/tools-scroll";
import { UseCases } from "@/components/use-cases";

const logos = [
  { src: "/figma/brand-1.png", color: "/figma/img2.png", alt: "Meta", width: 119, height: 24, colorWidth: 428, colorHeight: 88, colorBox: { width: 119, height: 24, left: 0, top: 0 } },
  { src: "/figma/brand-2.png", color: "/figma/img3.png", alt: "TikTok", width: 114, height: 33, colorWidth: 320, colorHeight: 94, colorBox: { width: 114, height: 33, left: 0, top: 0 } },
  { src: "/figma/brand-3.png", color: "/figma/img4.png", alt: "Google Ads", width: 148, height: 30, colorWidth: 376, colorHeight: 118, colorBox: { width: 148, height: 46, left: 0, top: -8 } },
  { src: "/figma/brand-4.png", color: "/figma/img5.png", alt: "YouTube", width: 104, height: 23, colorWidth: 300, colorHeight: 67, colorBox: { width: 104, height: 23, left: 0, top: 0 } },
  { src: "/figma/brand-5.png", color: "/figma/logo-linkedin.png", alt: "LinkedIn", width: 105, height: 30, colorWidth: 449, colorHeight: 115, colorBox: { width: 98, height: 25, left: 3, top: 2 } },
];

const industries = [
  {
    title: "Team Leader",
    body: "Track performance, manage escalations, and ensure smooth daily operations.",
    image: "/figma/industries-roles-1.png",
    width: 480,
    height: 270,
    href: "/industries/by-role/team-leaders",
  },
  {
    title: "Banking & Financial Services",
    body: "Enhance customer service and compliance while ensuring secure.",
    image: "/figma/industries-roles-2.png",
    width: 1536,
    height: 1024,
    href: "/industries/by-industry/banking-financial",
  },
  {
    title: "BPO & Outsourcing",
    body: "Manage customer operations efficiently with omnichannel support, SLA.",
    image: "/figma/industries-roles-3.png",
    width: 940,
    height: 788,
    href: "/industries/by-industry/bpo-outsourcing",
  },
  {
    title: "Government",
    body: "Streamline citizen services and internal operations with clear workflows.",
    image: "/figma/industries-roles-4.png",
    width: 480,
    height: 270,
    href: "/industries/by-industry/government",
  },
  {
    title: "Finance",
    body: "Streamline approval workflows, handle requests, and improve financial control.",
    image: "/figma/industries-roles-5.png",
    width: 2000,
    height: 1318,
    href: "/industries/by-role/finance",
  },
  {
    title: "IT and Administration",
    body: "Handle support, service requests, user access, and operations from.",
    image: "/figma/industries-roles-6.png",
    width: 480,
    height: 320,
    href: "/industries/by-role/it-administration",
  },
];

const toolsPanels: ToolsPanel[] = [
  {
    title: "Customer Service",
    body: [
      "Manage customer requests, conversations, and service operations with structured workflows, clear ownership, and complete interaction history.",
      "Organize tickets, chats, and calls while giving teams visibility into every conversation and support activity.",
    ],
    href: "/products/customer-service",
    image: {
      src: "/figma/tools-1.png",
      alt: "Customer service tools, including account verification and a support specialist",
      width: 768,
      height: 436,
    },
  },
  {
    title: "Work Management",
    body: [
      "Organize tasks, projects, workforce activities, and operational requests while giving teams visibility into priorities and progress.",
      "Keep work visible from planning to completion so teams stay aligned across every initiative.",
    ],
    href: "/products/work-management",
    image: {
      src: "/figma/tools-2.png",
      alt: "Work management workspace for creating and tracking campaigns",
      width: 754,
      height: 445,
    },
  },
  {
    title: "CRM & Sales",
    body: [
      "Build stronger customer relationships with complete visibility into contacts, leads, opportunities, and interactions.",
      "Connect every customer touchpoint to sales workflows so teams can capture opportunities and follow progress.",
    ],
    href: "/products/crm-sales",
    image: {
      src: "/figma/tools-3.png",
      alt: "CRM workspace for generating and publishing campaign content",
      width: 746,
      height: 408,
    },
  },
  {
    title: "Analytics & BI",
    body: [
      "Transform everyday business activity into meaningful insights with connected dashboards and reporting.",
      "Monitor performance, identify trends, and help teams make faster decisions with real-time operational visibility.",
    ],
    href: "/products/analytics",
    image: {
      src: "/figma/tools-4.png",
      alt: "Analytics workspace for campaign focus and performance insights",
      width: 792,
      height: 436,
    },
  },
  {
    title: "Governance & Compliance",
    body: [
      "Create stronger operational control with structured permissions, approvals, compliance tracking, and policy management.",
      "Ensure every action has clear ownership, every process follows defined rules, and every decision remains traceable.",
    ],
    href: "/products/governance",
    image: {
      src: "/figma/tools-5.png",
      alt: "Governance workflows connecting customers, teams, and approvals",
      width: 742,
      height: 425,
    },
  },
];

export default function Home() {
  return (
    <div id="top" className="site">
      <HeroBanner
        className="border-b border-black/20"
        title="Everything Connected. One Platform."
        description="CWIT EMS connects customer support, work management, CRM, analytics, and governance into one intelligent workspace."
        actions={[
          { href: "#tools", label: "Explore Platform", tone: "light" },
          { href: "/request-demo", label: "Request Demo" },
        ]}
        image={{
          src: "/figma/home-banner.png",
          alt: "NextGen workspace on a laptop",
          width: 1288,
          height: 594,
        }}
      />

      <section className="soft-band pb-20 sm:pb-28 lg:pb-36">
        <div className="wrap pt-16 sm:pt-24 lg:pt-28">
          <p className="px-2 text-center text-[clamp(13px,1.302vw,25px)] leading-snug font-semibold tracking-[0] text-[#1a1a1a]">
            POWERFUL INTEGRATIONS, EFFORTLESS SETUP
          </p>
        </div>
        <div className="relative mt-10 sm:mt-16">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(20, 24, 33, 0.14) 18%, rgba(20, 24, 33, 0.14) 82%, transparent 100%)",
            }}
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(20, 24, 33, 0.14) 18%, rgba(20, 24, 33, 0.14) 82%, transparent 100%)",
            }}
          />
          <div className="grid grid-cols-2 divide-x divide-y divide-[#e1e4e9] sm:grid-cols-5 sm:divide-none">
            {logos.map((logo, index) => (
              <div key={logo.alt} className="group relative flex h-[96px] cursor-pointer items-center justify-center px-6 sm:h-[132px] lg:h-[148px]">
                {index > 0 && (
                  <span
                    aria-hidden="true"
                    className="absolute left-0 hidden w-px sm:block"
                    style={{
                      top: -24,
                      bottom: -24,
                      background:
                        "linear-gradient(to bottom, transparent 0%, rgba(20, 24, 33, 0.14) 24%, rgba(20, 24, 33, 0.14) 76%, transparent 100%)",
                    }}
                  />
                )}
                <span
                  className="relative block max-w-full overflow-hidden"
                  style={{ width: logo.width, aspectRatio: `${logo.width} / ${logo.height}` }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="h-full w-full object-fill transition-opacity duration-200 group-hover:opacity-0"
                    style={{ width: "100%", height: "100%" }}
                  />
                  <Image
                    src={logo.color}
                    alt=""
                    aria-hidden
                    width={logo.colorWidth}
                    height={logo.colorHeight}
                    className="absolute max-w-none object-fill opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                    style={{
                      width: `${(logo.colorBox.width / logo.width) * 100}%`,
                      height: `${(logo.colorBox.height / logo.height) * 100}%`,
                      left: `${(logo.colorBox.left / logo.width) * 100}%`,
                      top: `${(logo.colorBox.top / logo.height) * 100}%`,
                    }}
                  />
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="wrap">
          <h2 className="mx-auto mt-14 max-w-[1200px] text-center text-[clamp(26px,2.15vw,42px)] leading-[1.28] font-medium tracking-[-0.03em] sm:mt-20">
            CWIT EMS connects customer support, work management,
            <br className="hidden min-[1400px]:block" /> CRM, analytics, and governance into one unified platform.
            <br className="hidden min-[1400px]:block" /> Empower your teams with smarter.
          </h2>
        </div>
      </section>

      <section id="industries" className="bg-white py-16 sm:py-24">
        <div className="content-1442">
          <div className="text-center">
            <h2 className="section-title">Industries & Roles</h2>
            <p className="mt-3 text-[15px] text-[#111111] sm:text-[16px]">
              CWIT EMS adapts to different industries, teams, and operational models.
            </p>
            <a
              href="/industries"
              className="mt-5 inline-flex h-11 items-center rounded-full bg-white px-5 text-[14px] font-medium shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)] sm:h-12 sm:px-6 sm:text-[15px]"
            >
              View All Industries
            </a>
          </div>

          <div className="mx-auto mt-12 grid w-[min(1442px,100%)] gap-x-8 gap-y-12 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-[60px] lg:gap-y-16">
            {industries.map((item) => (
              <article key={item.title} className="border-t border-[#000000]/22 pt-6">
                <a href={item.href} className="flex items-start gap-4">
                  <div className="h-[72px] w-[72px] shrink-0 overflow-hidden rounded-[12px] lg:h-[92px] lg:w-[92px]">
                    <Image
                      src={item.image}
                      alt=""
                      width={item.width}
                      height={item.height}
                      className="h-full w-full object-cover"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="flex items-start justify-between gap-3 text-[16px] font-semibold sm:text-[18px]">
                      <span>{item.title}</span>
                      <span aria-hidden="true" className="mt-1 shrink-0 text-[18px] leading-none text-[#000000]">
                        →
                      </span>
                    </h3>
                    <p className="mt-1 text-[14px] leading-5 text-[#5c6370] sm:text-[15px] sm:leading-6">{item.body}</p>
                    <span className="mt-3 inline-block text-[14px] font-medium underline underline-offset-4 sm:text-[15px]">
                      Explore More
                    </span>
                  </div>
                </a>
              </article>
            ))}
          </div>

          <article className="mt-12 grid overflow-hidden rounded-[12px] border border-[#e6e8ee] sm:mt-16 xl:h-[212px] xl:grid-cols-[404px_minmax(0,1fr)_auto]">
            <div className="relative h-[200px] sm:h-[212px] xl:h-full">
              <Image
                src="/figma/manage-entire.png"
                alt=""
                fill
                sizes="404px"
                className="object-cover object-center"
              />
            </div>
            <div className="flex flex-col justify-center px-5 py-5 sm:px-8 sm:py-6">
              <h3 className="text-[22px] font-semibold tracking-[-0.03em] sm:text-[28px]">
                Manage Your Entire Global Workforce
              </h3>
              <p className="mt-2 max-w-xl text-[15px] leading-6 text-[#5c6370] sm:text-[16px] sm:leading-7">
                Onboard, pay and manage employees and contractors around the world, all on one
                platform, without the manual work or complexity.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2 px-5 pb-5 sm:px-8 sm:pb-6 xl:py-6 xl:pr-6 xl:pl-4">
              <Pill href="/industries/by-role" tone="ghost-dark">
                Learn More
              </Pill>
              <Pill href="/request-demo">Request Demo</Pill>
            </div>
          </article>
        </div>
      </section>

      <section id="tools" className="bg-black py-16 text-white sm:py-24">
        <div className="content-1442 text-center">
          <h2 className="section-title">Tools Built Around Your Business</h2>
          <p className="lede mx-auto mt-4 max-w-[820px] text-white">
            CWIT EMS brings together service management, customer relationships, team collaboration,
            business workflows, and operational intelligence into one flexible platform.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Pill href="/products" tone="light">
              Products Overview
            </Pill>
            <Pill href="/products" tone="ghost">
              All Modules
            </Pill>
          </div>
        </div>

        <ToolsScroll panels={toolsPanels} />

        <div className="content-1442 mt-[clamp(72px,12.292vw,236px)] text-center">
          <h2 className="section-title">Where Business Meets Possibility</h2>
          <p className="lede mx-auto mt-4 max-w-[760px] text-white">
            Discover how CWIT empowers teams with intelligent tools designed to simplify operations,
            improve efficiency, and deliver measurable business outcomes.
          </p>
          <div className="mt-6">
            <Pill href="/industries/use-cases" tone="light">
              View All Use Cases
            </Pill>
          </div>
        </div>
        <div className="mt-10">
          <UseCases />
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className="wrap text-center">
          <h2 className="section-title">
            Experience the Future of
            <br />
            Intelligent Operations
          </h2>
          <p className="lede mx-auto mt-4 w-[min(732px,100%)] text-[#111111]">
            CWIT EMS connects customer support, work management, CRM, analytics, and governance into
            one intelligent workspace.
          </p>
          <a
            href="/industries"
            className="mt-5 inline-flex h-11 items-center rounded-full bg-white px-5 text-[14px] font-medium shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)] sm:h-12 sm:px-6 sm:text-[15px]"
          >
            View All Industries
          </a>
        </div>
        <div className="wrap mt-8 sm:mt-12">
          <Image
            src="/figma/future-intelligent.png"
            alt="Campaign workspace for creating ads, choosing a focus, and generating a campaign"
            width={1092}
            height={711}
            className="mx-auto h-auto w-full max-w-[1060px] rounded-[12px] object-contain shadow-[0_20px_60px_rgba(16,24,40,0.08)] sm:rounded-[12px]"
            style={{ width: "min(100%, 1060px)", height: "auto" }}
          />
        </div>
      </section>

      <Testimonials />

      <CtaSection
        title="Bring your customers, teams, and workflows together"
        description="CWIT EMS connects customer support, work management, CRM, analytics, and governance into one intelligent workspace."
        actions={[
          { href: "#tools", label: "Explore Platform", tone: "ghost-dark" },
          { href: "/request-demo", label: "Request Demo" },
        ]}
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
