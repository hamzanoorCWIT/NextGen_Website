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

function LinkGroup({ label, links }: { label: string; links: string[] }) {
  return (
    <div>
      <p className="mb-2.5 text-[11px] font-extrabold tracking-[0.06em] text-white uppercase">{label}</p>
      <ul className="space-y-1.5">
        {links.map((link) => (
          <li key={link}>
            <a
              href={link === "Tickets" ? "/products/tickets" : "#top"}
              className="text-[13px] leading-5 font-normal text-white hover:text-white/70"
            >
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
                <LinkGroup key={group.label} label={group.label} links={group.links} />
              ))}
            </div>
            <div className="space-y-7">
              {productsRight.map((group) => (
                <LinkGroup key={group.label} label={group.label} links={group.links} />
              ))}
            </div>
          </div>
        </div>

        <div>
          <ColumnTitle>Industries</ColumnTitle>
          <div className="mt-5 grid grid-cols-1 gap-y-7 min-[420px]:grid-cols-2 min-[420px]:gap-x-6 lg:grid-cols-2 lg:gap-x-6">
            <div className="space-y-7">
              {industriesLeft.map((group) => (
                <LinkGroup key={group.label} label={group.label} links={group.links} />
              ))}
            </div>
            <div>
              {industriesRight.map((group) => (
                <LinkGroup key={group.label} label={group.label} links={group.links} />
              ))}
            </div>
          </div>
        </div>

        <div>
          <ColumnTitle>Resources</ColumnTitle>
          <ul className="mt-5 space-y-1.5 lg:pt-[26px]">
            {resources.map((link) => (
              <li key={link}>
                <a
                  href={
                    link === "Docs"
                      ? "/docs"
                      : link === "Case Studies"
                        ? "/case-studies"
                        : link === "Comparisons"
                          ? "/comparisons"
                          : link === "Contact Us"
                            ? "/contact"
                            : "#top"
                  }
                  className="text-[13px] leading-5 font-normal text-white hover:text-white/70"
                >
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
