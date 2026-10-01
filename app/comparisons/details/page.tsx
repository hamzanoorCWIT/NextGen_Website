import type { Metadata } from "next";
import Image from "next/image";
import { ComparisonScores } from "@/components/comparison-scores";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { HeroBanner } from "@/components/hero-banner";

export const metadata: Metadata = {
  title: "CWIT EMS vs Zendesk | Comparisons",
  description:
    "Compare CWIT EMS and Zendesk across customer service, workflows, analytics, and governance.",
};

const platforms = [
  {
    badge: "Connected Customer Operations",
    title: "CWIT EMS",
    body: "Manage customer interactions and operational workflows from one connected workspace.",
    image: {
      src: "/figma/platform-1.png",
      alt: "CWIT EMS connected customer operations workspace",
      width: 1199,
      height: 752,
    },
  },
  {
    badge: "Customer service and support platform",
    title: "Zendesk",
    body: "A platform focused on helping organizations manage customer interactions across multiple channels — ticketing, messaging, email, voice, SMS, live chat.",
    image: {
      src: "/figma/platform-2.png",
      alt: "Zendesk customer service platform on a tablet",
      width: 736,
      height: 920,
    },
  },
];

const tableRows = [
  { capability: "Ticket Management", cwit: true, zendesk: true },
  { capability: "Chat & WhatsApp", cwit: true, zendesk: true },
  { capability: "Calls & Campaigns", cwit: true, zendesk: true },
  { capability: "Workflow Automation", cwit: true, zendesk: true },
  { capability: "Tasks & Projects", cwit: true, zendesk: false },
  { capability: "Attendance & Timesheets", cwit: true, zendesk: false },
  { capability: "Dashboards & Reporting", cwit: true, zendesk: true },
  { capability: "Power BI", cwit: true, zendesk: false },
  { capability: "AI Assistance", cwit: true, zendesk: true },
  { capability: "Permissions & Governance", cwit: true, zendesk: true },
  { capability: "API & Integrations", cwit: true, zendesk: true },
];

const reasons = [
  {
    title: "One connected platform",
    body: "Stop switching between tools. Manage customer service, workflows, communication, and reporting from a single workspace.",
  },
  {
    title: "Operational visibility",
    body: "See the full picture — from customer interactions to workforce activity — with connected dashboards and analytics.",
  },
  {
    title: "Built to grow with you",
    body: "Start with what you need. Add capabilities, teams, and integrations as your operations evolve.",
  },
];

function CheckMark() {
  return (
    <span className="mx-auto inline-flex h-6 w-6 items-center justify-center rounded-full bg-black">
      <Image src="/figma/bullets-tick.png" alt="" width={24} height={24} className="h-6 w-6" />
    </span>
  );
}

export default function ComparisonDetailsPage() {
  return (
    <div id="top" className="site">
      <HeroBanner
        title={
          <>
            A clearer way to manage
            <br />
            customer operations.
          </>
        }
        description="Compare CWIT EMS with Zendesk across customer service, workflows, communication, analytics, and operational management — all in one connected platform."
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
            <h2 className="text-[clamp(32px,2.8vw,44px)] leading-[1.15] font-medium tracking-[-0.03em] text-[#111111]">
              Two platforms. Different approaches.
            </h2>
            <p className="mx-auto mt-4 max-w-[720px] text-[15px] leading-7 text-[#111111] sm:text-[16px]">
              CWIT EMS and Zendesk help organizations manage customer interactions and business operations. The difference is how those capabilities come together. CWIT EMS connects customer service, communication, workflows, workforce management, analytics, and governance within one platform.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:mt-14 lg:grid-cols-2 lg:gap-6">
            {platforms.map((platform) => (
              <article
                key={platform.title}
                className="flex flex-col overflow-hidden rounded-[28px] bg-[#f5f6f8] lg:h-[679px]"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-t-[28px] sm:aspect-auto sm:h-[360px] lg:aspect-auto lg:h-[514px]">
                  <Image
                    src={platform.image.src}
                    alt={platform.image.alt}
                    width={platform.image.width}
                    height={platform.image.height}
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute top-4 left-4 inline-flex h-9 items-center rounded-full bg-black px-4 text-[13px] font-medium text-white">
                    {platform.badge}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-[24px] font-semibold tracking-[-0.02em] text-[#111111] sm:text-[28px]">{platform.title}</h3>
                  <p className="mt-2 text-[14px] leading-6 text-[#111111] sm:text-[15px]">{platform.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="content-1442">
          <div className="mx-auto max-w-[820px] text-center">
            <h2 className="text-[clamp(32px,2.8vw,44px)] leading-[1.15] font-medium tracking-[-0.03em] text-[#111111]">
              Everything you need to compare, in one view.
            </h2>
            <p className="mx-auto mt-4 max-w-[680px] text-[15px] leading-7 text-[#111111] sm:text-[16px]">
              See how the two platforms approach the capabilities that matter across customer service and day-to-day operations.
            </p>
          </div>

          <div className="mt-12 overflow-x-auto rounded-[24px] sm:mt-14">
            <div className="min-w-[520px]">
            <div className="grid grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)] bg-[#f0f1f3] px-5 py-4 text-[14px] font-semibold text-[#111111] sm:px-8 sm:text-[15px]">
              <span>Capability</span>
              <span className="text-center">CWIT EMS</span>
              <span className="text-center">Zendesk</span>
            </div>
            {tableRows.map((row, index) => (
              <div
                key={row.capability}
                className={`grid grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)] items-center px-5 py-4 text-[14px] text-[#111111] sm:px-8 sm:text-[15px] ${index % 2 === 0 ? "bg-white" : "bg-[#f7f7f8]"}`}
              >
                <span>{row.capability}</span>
                <span className="flex justify-center">{row.cwit ? <CheckMark /> : null}</span>
                <span className="flex justify-center">{row.zendesk ? <CheckMark /> : null}</span>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      <ComparisonScores />

      <section className="bg-[#FAFAFA] py-16 sm:py-24">
        <div className="content-1442 grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div>
            <h2 className="max-w-[420px] text-[clamp(32px,2.8vw,44px)] leading-[1.15] font-medium tracking-[-0.03em] text-[#111111]">
              Why teams choose CWIT EMS.
            </h2>
            <ul className="mt-8 space-y-7">
              {reasons.map((reason) => (
                <li key={reason.title}>
                  <h3 className="text-[18px] font-semibold tracking-[-0.02em] text-[#111111]">{reason.title}</h3>
                  <p className="mt-2 max-w-[420px] text-[15px] leading-7 text-[#111111]">{reason.body}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/figma/product-create.png"
              alt="Soraya campaign workspace for creating marketing content"
              width={730}
              height={456}
              className="h-auto w-full rounded-[28px] object-contain"
              style={{ width: "min(100%, 730px)", height: "auto" }}
            />
          </div>
        </div>
      </section>

      <CtaSection
        title="Create a better way to manage customer service"
        description="CWIT EMS connects customer support, work management, CRM, analytics, and governance into one intelligent workspace."
        titleClassName="max-w-[620px]"
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
