"use client";

import { FormEvent, useState } from "react";

const productsLeft = [
  {
    label: "Customer service",
    links: ["Tickets", "Chat & whatsapp", "Calls & campaigns"],
  },
  {
    label: "Work management",
    links: ["Tasks", "Projects", "Timesheets", "Attendance"],
  },
];

const productsRight = [
  {
    label: "CRM & Sales",
    links: ["Contacts & CRM", "Leads"],
  },
  {
    label: "Analytics and BI",
    links: ["Dashboards", "Power BI"],
  },
  {
    label: "Governance & Compliance",
    links: ["Permissions", "Approvals", "Policy docs", "Org hierarchy", "KYC", "API bank"],
  },
];

const industriesLeft = [
  {
    label: "By industry",
    links: [
      "Utilities",
      "Banking & financial",
      "BOP & outsourcing",
      "Government",
      "Telecom",
      "Professional services",
      "Construction",
    ],
  },
  {
    label: "By role",
    links: [
      "Support agents",
      "Team leaders",
      "Operations managers",
      "HR & workforce",
      "Finance",
      "Compliance & risk",
      "IT & administration",
      "Executives",
    ],
  },
];

const industriesRight = [
  {
    label: "Use cases",
    links: [
      "Omnichannel ticketing",
      "Whatsapp",
      "Outbound campaigns",
      "Customer 360",
      "Lead to opportunity",
      "Billable time and cost",
      "Attendance, shifts, and overtime",
      "Multi-level approvals",
      "Policy acknowledgment",
      "KYC and risk monitoring",
      "Replace your stack",
    ],
  },
];

const resources = ["Docs", "Case Studies", "Comparisons", "Contact Us", "Blog", "Security & trust"];

function ColumnTitle({ children }: { children: string }) {
  return <p className="border-b border-white/15 pb-3 text-[16px] font-normal">{children}</p>;
}

function productHref(link: string) {
  const key = link.toLowerCase();
  if (key === "tickets") return "/products/customer-service/tickets";
  if (key === "chat & whatsapp") return "/products/customer-service/chat-whatsapp";
  if (key === "calls & campaigns") return "/products/customer-service/calls-campaigns";
  if (key === "tasks") return "/products/work-management/tasks";
  if (key === "projects") return "/products/work-management/projects";
  if (key === "timesheets") return "/products/work-management/timesheets";
  if (key === "attendance") return "/products/work-management/attendance";
  if (key === "contacts & crm") return "/products/crm-sales/contacts-crm";
  if (key === "leads") return "/products/crm-sales/leads";
  if (key === "dashboards" || key === "dashboard") return "/products/analytics/dashboard";
  if (key === "power bi") return "/products/analytics/power-bi";
  if (key === "permissions") return "/products/governance/permissions";
  if (key === "approvals") return "/products/governance/approvals";
  if (key === "policy docs") return "/products/governance/policy-docs";
  if (key === "org hierarchy") return "/products/governance/org-hierarchy";
  if (key === "kyc") return "/products/governance/kyc";
  if (key === "api bank") return "/products/governance/api-bank";
  return "/products";
}

function industryHref(link: string) {
  const key = link.toLowerCase().replace(/&/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const map: Record<string, string> = {
    utilities: "/industries/by-industry/utilities",
    "banking-financial": "/industries/by-industry/banking-financial",
    "bop-outsourcing": "/industries/by-industry/bpo-outsourcing",
    "bpo-outsourcing": "/industries/by-industry/bpo-outsourcing",
    government: "/industries/by-industry/government",
    telecom: "/industries/by-industry/telecom",
    "professional-services": "/industries/by-industry/professional-services",
    construction: "/industries/by-industry/construction",
    "support-agents": "/industries/by-role/support-agents",
    "team-leaders": "/industries/by-role/team-leaders",
    "operations-managers": "/industries/by-role/operations-managers",
    "hr-workforce": "/industries/by-role/hr-workforce",
    finance: "/industries/by-role/finance",
    "compliance-risk": "/industries/by-role/compliance-risk",
    "it-administration": "/industries/by-role/it-administration",
    executives: "/industries/by-role/executives",
    "omnichannel-ticketing": "/industries/use-cases/omnichannel-ticketing",
    whatsapp: "/industries/use-cases/whatsapp-chat-support",
    "outbound-campaigns": "/industries/use-cases/outbound-campaigns",
    "customer-360": "/industries/use-cases/lead-to-opportunity",
    "lead-to-opportunity": "/industries/use-cases/lead-to-opportunity",
    "billable-time-and-cost": "/industries/use-cases/billable-time-cost",
    "attendance-shifts-and-overtime": "/industries/use-cases/attendance-shifts-cost",
    "multi-level-approvals": "/industries/use-cases/multi-level-approvals",
    "policy-acknowledgment": "/industries/use-cases/policy-acknowledgement",
    "kyc-and-risk-monitoring": "/industries/use-cases/kyc-risk-monitoring",
    "replace-your-stack": "/industries/use-cases/replace-your-stack",
  };
  return map[key] ?? `/industries/${key}`;
}

function resourceHref(link: string) {
  if (link === "Docs") return "/docs";
  if (link === "Case Studies") return "/case-studies";
  if (link === "Comparisons") return "/comparisons";
  if (link === "Contact Us") return "/contact";
  if (link === "Blog") return "/blog";
  if (link === "Security & trust" || link === "Security & Trust") return "/security-trust";
  return "/docs";
}

function LinkGroup({
  label,
  links,
  hrefFor,
}: {
  label: string;
  links: string[];
  hrefFor: (link: string) => string;
}) {
  return (
    <div>
      <p className="mb-2.5 text-[11px] font-extrabold tracking-[0.06em] text-white uppercase">{label}</p>
      <ul className="space-y-1.5">
        {links.map((link) => (
          <li key={link}>
            <a href={hrefFor(link)} className="text-[13px] leading-5 font-normal text-white hover:text-white/70">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <footer id="demo" className="bg-black text-white">
      <div className="footer-desktop mx-auto grid w-[min(1760px,calc(100%-40px))] gap-12 py-12 sm:py-16">
        <div className="w-full lg:max-w-none">
          <h2 className="footer-heading text-[clamp(32px,2.708333vw,40px)] leading-[1.12] font-medium tracking-[-0.035em]">
            Request a demo to
          </h2>
          <div className="w-fit max-w-full">
            <p className="footer-heading text-[clamp(32px,2.708333vw,40px)] leading-[1.12] font-medium tracking-[-0.035em]">see EMS in action</p>
            <form onSubmit={onSubmit} className="footer-form mt-8 flex h-12 w-full items-center rounded-full bg-white p-1 sm:h-14">
            <label className="sr-only" htmlFor="email">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Email address"
              className="h-full min-w-0 flex-1 bg-transparent px-4 text-[14px] text-black outline-none placeholder:text-[#b0b0b0]"
            />
            <button
              type="submit"
              className="footer-submit h-11 shrink-0 cursor-pointer rounded-full bg-[#2a2a2a] px-5 text-[14px] font-medium text-white"
            >
              {sent ? "Sent" : "Submit"}
            </button>
            </form>
          </div>
        </div>

        <div>
          <ColumnTitle>Products</ColumnTitle>
          <div className="mt-5 grid grid-cols-1 gap-y-7 min-[420px]:grid-cols-2 min-[420px]:gap-x-6 lg:grid-cols-2 lg:gap-x-6">
            <div className="space-y-7">
              {productsLeft.map((group) => (
                <LinkGroup key={group.label} label={group.label} links={group.links} hrefFor={productHref} />
              ))}
            </div>
            <div className="space-y-7">
              {productsRight.map((group) => (
                <LinkGroup key={group.label} label={group.label} links={group.links} hrefFor={productHref} />
              ))}
            </div>
          </div>
        </div>

        <div>
          <ColumnTitle>Industries</ColumnTitle>
          <div className="mt-5 grid grid-cols-1 gap-y-7 min-[420px]:grid-cols-2 min-[420px]:gap-x-6 lg:grid-cols-2 lg:gap-x-6">
            <div className="space-y-7">
              {industriesLeft.map((group) => (
                <LinkGroup key={group.label} label={group.label} links={group.links} hrefFor={industryHref} />
              ))}
            </div>
            <div>
              {industriesRight.map((group) => (
                <LinkGroup key={group.label} label={group.label} links={group.links} hrefFor={industryHref} />
              ))}
            </div>
          </div>
        </div>

        <div>
          <ColumnTitle>Resources</ColumnTitle>
          <ul className="mt-5 space-y-1.5 lg:pt-[26px]">
            {resources.map((link) => (
              <li key={link}>
                <a href={resourceHref(link)} className="text-[13px] leading-5 font-normal text-white hover:text-white/70">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
