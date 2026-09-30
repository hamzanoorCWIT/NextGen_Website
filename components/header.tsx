"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";

function Chevron({ direction = "down" }: { direction?: "down" | "right" }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true" className={direction === "right" ? "-rotate-90" : undefined}>
      <path
        d="M2.5 4.5 6 8l3.5-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type ProductLink = string | { label: string; href: string };

const productColumns: { title: string; href: string; links: ProductLink[] }[] = [
  {
    title: "Customer Service",
    href: "/products/customer-service",
    links: [
      { label: "Tickets", href: "/products/tickets" },
      "Chat & WhatsApp",
      "Calls & Campaigns",
    ],
  },
  {
    title: "Work Management",
    href: "/products#work-management",
    links: ["Tasks", "Projects", "Timesheets", "Attendance"],
  },
  {
    title: "CRM & Sales",
    href: "/products#crm-sales",
    links: ["Contacts & CRM", "Leads", "Timesheets"],
  },
  {
    title: "Analytics and BI",
    href: "/products#analytics",
    links: ["Dashboard", "Power BI"],
  },
  {
    title: "Governance & Compliance",
    href: "/products#governance",
    links: ["Permissions", "Approvals", "Policy Docs", "Org Hierarchy", "KYC", "API Bank"],
  },
];

const industryMenus = [
  {
    id: "industry",
    label: "By Industry",
    links: [
      "Utilities",
      "Banking & Financial",
      "BPO & Outsourcing",
      "Government",
      "Telecom",
      "Professional Services",
      "Construction",
    ],
  },
  {
    id: "role",
    label: "By Role",
    links: [
      "Support Agents",
      "Team Leaders",
      "Operations Managers",
      "HR & Workforce",
      "Finance",
      "Compliance & Risk",
      "IT & Administration",
      "Executives",
    ],
  },
] as const;

const useCaseColumns = [
  {
    id: "cases-main",
    label: "Use Case",
    links: [
      "Omnichannel Ticketing",
      "WhatsApp & Chat Support",
      "Outbound Campaigns",
      "Lead to Opportunity",
      "Billable Time & Cost",
      "Attendance, Shifts & Cost",
      "Multi-Level Approvals",
      "Policy Acknowledgement",
    ],
  },
  {
    id: "cases-more",
    label: "",
    links: ["KYC & Risk Monitoring", "Replace Your Stack"],
  },
] as const;

function industrySlug(label: string) {
  return label
    .toLowerCase()
    .replace(/&/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const resourceLinks = ["Docs", "Case Studies", "Comparisons", "Blog", "Security & Trust"];

function resourceHref(link: string) {
  if (link === "Docs") return "/docs";
  if (link === "Case Studies") return "/case-studies";
  if (link === "Comparisons") return "/comparisons";
  if (link === "Contact Us") return "/contact";
  return "#demo";
}

function useCaseHref(link: string) {
  return "/industries#use-cases";
}

const promo =
  "Everything you need to manage support, customers, teams, and workflows in one connected platform.";

type MenuId = "product" | "industries" | "resources";

function MenuLink({ href, children, light = false }: { href: string; children: ReactNode; light?: boolean }) {
  return (
    <a
      href={href}
      className={`block py-2 text-[15px] leading-5 ${light ? "text-white hover:text-white/70" : "text-[#1a1a1a] hover:underline"}`}
    >
      {children}
    </a>
  );
}

function Promo({
  title,
  image = false,
  href,
  cta,
}: {
  title: string;
  image?: boolean;
  href?: string;
  cta?: string;
}) {
  return (
    <div className="w-full max-w-[320px]">
      <h2 className="text-[44px] leading-none font-semibold tracking-[-0.045em] sm:text-[48px]">{title}</h2>
      <p className="mt-4 max-w-[280px] text-[15px] leading-6 text-[#667085]">{promo}</p>
      {image ? (
        <>
          <a
            href={href ?? "/products"}
            className="mt-6 inline-flex h-11 items-center rounded-full bg-black px-5 text-[14px] font-medium text-white"
          >
            {cta ?? "Explore Products"}
          </a>
          <Image
            src="/figma/img10.png"
            alt=""
            width={360}
            height={233}
            className="mt-8 h-auto w-full rounded-2xl object-contain"
            style={{ height: "auto" }}
          />
        </>
      ) : href && cta ? (
        <>
          <a
            href={href}
            className="mt-6 inline-flex h-11 items-center rounded-full bg-black px-5 text-[14px] font-medium text-white"
          >
            {cta}
          </a>
          <div className="mt-6 h-[210px] rounded-[18px] bg-[#e4e7ec]" />
        </>
      ) : (
        <div className="mt-6 h-[210px] rounded-[18px] bg-[#e4e7ec]" />
      )}
    </div>
  );
}

export function Header({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<MenuId | null>(null);

  return (
    <header className={`relative z-30 ${className}`} onMouseLeave={() => setMenu(null)}>
      <div className="wrap relative flex h-16 items-center justify-between gap-4 sm:h-[84px]">
        <a href="/" className="shrink-0">
          <Image
            src="/figma/logo.png"
            alt="NextGen Contact Centre"
            width={385}
            height={95}
            priority
            className="h-8 w-auto sm:h-11"
            style={{ width: "auto" }}
          />
        </a>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 text-[15px] text-[#1c1c1c] xl:flex">
          <button
            type="button"
            className="flex items-center gap-1 py-6"
            aria-expanded={menu === "product"}
            onMouseEnter={() => setMenu("product")}
            onClick={() => setMenu((value) => (value === "product" ? null : "product"))}
          >
            Product <Chevron />
          </button>
          <button
            type="button"
            className="flex items-center gap-1 py-6"
            aria-expanded={menu === "industries"}
            onMouseEnter={() => setMenu("industries")}
            onClick={() => setMenu((value) => (value === "industries" ? null : "industries"))}
          >
            Industries <Chevron />
          </button>
          <a href="/dolphin-ai" className="py-6" onMouseEnter={() => setMenu(null)}>
            Dolphin AI
          </a>
          <a href="/pricing" className="py-6" onMouseEnter={() => setMenu(null)}>
            Pricing
          </a>
          <button
            type="button"
            className="flex items-center gap-1 py-6"
            aria-expanded={menu === "resources"}
            onMouseEnter={() => setMenu("resources")}
            onClick={() => setMenu((value) => (value === "resources" ? null : "resources"))}
          >
            Resources <Chevron />
          </button>
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          <a
            href="#demo"
            className="inline-flex h-11 items-center rounded-full bg-white px-5 text-[15px] font-medium text-black shadow-[0_0_0_1px_rgba(0,0,0,0.06)]"
          >
            Sign In
          </a>
          <a
            href="#demo"
            className="inline-flex h-11 items-center rounded-full bg-black px-5 text-[15px] font-medium text-white"
          >
            Request Demo
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 items-center rounded-full border border-black/10 px-4 text-sm xl:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
        >
          Menu
        </button>
      </div>

      {menu === "product" ? (
        <div className="absolute top-full right-0 left-0 z-40 hidden bg-white shadow-[0_22px_50px_rgba(16,24,40,0.08)] xl:block">
          <div className="wrap grid items-start gap-10 py-10 lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-16 lg:py-12">
            <Promo title="Product" image />
            <div className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3 xl:grid-cols-5 xl:gap-x-6">
              {productColumns.map((column) => (
                <div key={column.title}>
                  <p className="mb-3 text-[16px] font-semibold tracking-[-0.01em]">{column.title}</p>
                  {column.links.map((link) => {
                    const label = typeof link === "string" ? link : link.label;
                    const href = typeof link === "string" ? column.href : link.href;
                    return (
                      <MenuLink key={column.title + label} href={href}>
                        {label}
                      </MenuLink>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      {menu === "industries" ? (
        <div className="absolute top-full right-0 left-0 z-40 hidden bg-white shadow-[0_22px_50px_rgba(16,24,40,0.08)] xl:block">
          <div className="wrap grid items-start gap-10 py-10 lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-16 lg:py-12">
            <Promo title="Industries" image href="/industries" cta="Explore Industries" />
            <div className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3 xl:grid-cols-4 xl:gap-x-10">
              {industryMenus.map((column) => (
                <div key={column.id}>
                  <p className="mb-3 text-[16px] font-semibold tracking-[-0.01em]">{column.label}</p>
                  {column.links.map((link) => (
                    <MenuLink
                      key={link}
                      href={column.id === "role" ? "/industries#by-role" : `/industries/${industrySlug(link)}`}
                    >
                      {link}
                    </MenuLink>
                  ))}
                </div>
              ))}
              {useCaseColumns.map((column) => (
                <div key={column.id}>
                  {column.label ? (
                    <p className="mb-3 text-[16px] font-semibold tracking-[-0.01em]">{column.label}</p>
                  ) : (
                    <p className="mb-3 text-[16px] font-semibold tracking-[-0.01em] opacity-0" aria-hidden="true">
                      &nbsp;
                    </p>
                  )}
                  {column.links.map((link) => (
                    <MenuLink key={link} href={useCaseHref(link)}>
                      {link}
                    </MenuLink>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      {menu === "resources" ? (
        <div className="absolute top-full right-0 left-0 z-40 hidden bg-white shadow-[0_22px_50px_rgba(16,24,40,0.08)] xl:block">
          <div className="wrap grid items-start gap-10 py-10 lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-16 lg:py-12">
            <Promo title="Resources" image href="/docs" cta="Explore Resources" />
            <div className="w-full max-w-[240px]">
              <p className="mb-3 text-[16px] font-semibold tracking-[-0.01em]">Resources</p>
              {resourceLinks.map((link) => (
                <MenuLink key={link} href={resourceHref(link)}>
                  {link}
                </MenuLink>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      {open ? (
        <div className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-black/5 bg-white px-4 py-4 xl:hidden">
          <div className="flex flex-col gap-4 text-sm">
            <div>
              <p className="font-semibold">Product</p>
              {productColumns.map((column) => (
                <a key={column.title} href={column.href} onClick={() => setOpen(false)} className="mt-2 block text-[#3a3a3a]">
                  {column.title}
                </a>
              ))}
            </div>
            <div>
              <a href="/industries" onClick={() => setOpen(false)} className="font-semibold">
                Industries
              </a>
              {industryMenus[0].links.map((link) => (
                <a key={link} href={`/industries/${industrySlug(link)}`} onClick={() => setOpen(false)} className="mt-2 block text-[#3a3a3a]">
                  {link}
                </a>
              ))}
            </div>
            <a href="/dolphin-ai" onClick={() => setOpen(false)}>
              Dolphin AI
            </a>
            <a href="/pricing" onClick={() => setOpen(false)}>
              Pricing
            </a>
            <div>
              <p className="font-semibold">Resources</p>
              {resourceLinks.map((link) => (
                <a
                  key={link}
                  href={resourceHref(link)}
                  onClick={() => setOpen(false)}
                  className="mt-2 block text-[#3a3a3a]"
                >
                  {link}
                </a>
              ))}
            </div>
            <a
              href="#demo"
              onClick={() => setOpen(false)}
              className="inline-flex h-10 items-center justify-center rounded-full border border-black/10 bg-white text-black"
            >
              Sign In
            </a>
            <a
              href="#demo"
              onClick={() => setOpen(false)}
              className="inline-flex h-10 items-center justify-center rounded-full bg-black text-white"
            >
              Request Demo
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
