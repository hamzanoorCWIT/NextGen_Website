"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";

function Chevron({ direction = "down", open = false }: { direction?: "down" | "right"; open?: boolean }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true" className={`transition-transform duration-300 ease-out ${direction === "right" ? "-rotate-90" : open ? "rotate-180" : ""}`}>
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

type ProductLink = { label: string; href: string };

const productColumns: { title: string; href: string; links: ProductLink[] }[] = [
  {
    title: "Customer Service",
    href: "/products/customer-service",
    links: [
      { label: "Tickets", href: "/products/customer-service/tickets" },
      { label: "Chat & WhatsApp", href: "/products/customer-service/chat-whatsapp" },
      { label: "Calls & Campaigns", href: "/products/customer-service/calls-campaigns" },
    ],
  },
  {
    title: "Work Management",
    href: "/products/work-management",
    links: [
      { label: "Tasks", href: "/products/work-management/tasks" },
      { label: "Projects", href: "/products/work-management/projects" },
      { label: "Timesheets", href: "/products/work-management/timesheets" },
      { label: "Attendance", href: "/products/work-management/attendance" },
    ],
  },
  {
    title: "CRM & Sales",
    href: "/products/crm-sales",
    links: [
      { label: "Contacts & CRM", href: "/products/crm-sales/contacts-crm" },
      { label: "Leads", href: "/products/crm-sales/leads" },
    ],
  },
  {
    title: "Analytics and BI",
    href: "/products/analytics",
    links: [
      { label: "Dashboard", href: "/products/analytics/dashboard" },
      { label: "Power BI", href: "/products/analytics/power-bi" },
    ],
  },
  {
    title: "Governance & Compliance",
    href: "/products/governance",
    links: [
      { label: "Permissions", href: "/products/governance/permissions" },
      { label: "Approvals", href: "/products/governance/approvals" },
      { label: "Policy Docs", href: "/products/governance/policy-docs" },
      { label: "Org Hierarchy", href: "/products/governance/org-hierarchy" },
      { label: "KYC", href: "/products/governance/kyc" },
      { label: "API Bank", href: "/products/governance/api-bank" },
    ],
  },
];

type IndustryLink = { label: string; href: string };

const industryColumns: { title: string; href: string; links: IndustryLink[] }[] = [
  {
    title: "By Industry",
    href: "/industries/by-industry",
    links: [
      { label: "Utilities", href: "/industries/by-industry/utilities" },
      { label: "Banking & Financial", href: "/industries/by-industry/banking-financial" },
      { label: "BPO & Outsourcing", href: "/industries/by-industry/bpo-outsourcing" },
      { label: "Government", href: "/industries/by-industry/government" },
      { label: "Telecom", href: "/industries/by-industry/telecom" },
      { label: "Professional Services", href: "/industries/by-industry/professional-services" },
      { label: "Construction", href: "/industries/by-industry/construction" },
    ],
  },
  {
    title: "By Role",
    href: "/industries/by-role",
    links: [
      { label: "Support Agents", href: "/industries/by-role/support-agents" },
      { label: "Team Leaders", href: "/industries/by-role/team-leaders" },
      { label: "Operations Managers", href: "/industries/by-role/operations-managers" },
      { label: "HR & Workforce", href: "/industries/by-role/hr-workforce" },
      { label: "Finance", href: "/industries/by-role/finance" },
      { label: "Compliance & Risk", href: "/industries/by-role/compliance-risk" },
      { label: "IT & Administration", href: "/industries/by-role/it-administration" },
      { label: "Executives", href: "/industries/by-role/executives" },
    ],
  },
  {
    title: "Use Case",
    href: "/industries/use-cases",
    links: [
      { label: "Omnichannel Ticketing", href: "/industries/use-cases/omnichannel-ticketing" },
      { label: "WhatsApp & Chat Support", href: "/industries/use-cases/whatsapp-chat-support" },
      { label: "Outbound Campaigns", href: "/industries/use-cases/outbound-campaigns" },
      { label: "Lead to Opportunity", href: "/industries/use-cases/lead-to-opportunity" },
      { label: "Billable Time & Cost", href: "/industries/use-cases/billable-time-cost" },
      { label: "Attendance, Shifts & Cost", href: "/industries/use-cases/attendance-shifts-cost" },
      { label: "Multi-Level Approvals", href: "/industries/use-cases/multi-level-approvals" },
      { label: "Policy Acknowledgement", href: "/industries/use-cases/policy-acknowledgement" },
    ],
  },
  {
    title: "",
    href: "/industries/use-cases",
    links: [
      { label: "KYC & Risk Monitoring", href: "/industries/use-cases/kyc-risk-monitoring" },
      { label: "Replace Your Stack", href: "/industries/use-cases/replace-your-stack" },
    ],
  },
];

type ResourceLink = { label: string; href: string };

const resourceColumns: { title: string; href: string; links: ResourceLink[] }[] = [
  {
    title: "Resources",
    href: "/docs",
    links: [
      { label: "Docs", href: "/docs" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Comparisons", href: "/comparisons" },
      { label: "Blog", href: "/blog" },
      { label: "Security & Trust", href: "/security-trust" },
    ],
  },
];

const promo =
  "Everything you need to manage support, customers, teams, and workflows in one connected platform.";

type MenuId = "product" | "industries" | "resources";

const CLOSE_MS = 220;

const currentClass = "font-semibold underline decoration-2 underline-offset-4";

function MenuLink({ href, children, light = false }: { href: string; children: ReactNode; light?: boolean }) {
  const current = usePathname() === href;
  return (
    <a
      href={href}
      aria-current={current ? "page" : undefined}
      className={`block py-2 text-[15px] leading-5 ${light ? "text-white hover:text-white/70" : "text-[#1a1a1a] hover:underline"} ${current ? currentClass : ""}`}
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
            className="mt-8 h-auto w-full rounded-[12px] object-contain"
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
          <div className="mt-6 h-[210px] rounded-[12px] bg-[#e4e7ec]" />
        </>
      ) : (
        <div className="mt-6 h-[210px] rounded-[12px] bg-[#e4e7ec]" />
      )}
    </div>
  );
}

const sectionPaths: Record<MenuId | "dolphin" | "pricing", string[]> = {
  product: ["/products"],
  industries: ["/industries"],
  dolphin: ["/dolphin-ai"],
  pricing: ["/pricing"],
  resources: ["/docs", "/case-studies", "/comparisons", "/blog", "/security-trust"],
};

function inSection(pathname: string, id: keyof typeof sectionPaths) {
  return sectionPaths[id].some((path) => pathname === path || pathname.startsWith(`${path}/`));
}

// The bold copy reserves the wider width, so the centered nav does not shift when a label turns bold.
function NavLabel({ active, children }: { active: boolean; children: string }) {
  return (
    <span className="inline-flex flex-col items-center">
      <span className={active ? "font-semibold underline decoration-2 underline-offset-[10px]" : undefined}>{children}</span>
      <span aria-hidden="true" className="invisible h-0 overflow-hidden font-semibold select-none">
        {children}
      </span>
    </span>
  );
}

export function Header({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<MenuId | null>(null);
  // Stays mounted briefly after closing so the panel can animate out.
  const [rendered, setRendered] = useState<MenuId | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (menu) {
      setRendered(menu);
      return;
    }
    const timer = window.setTimeout(() => setRendered(null), CLOSE_MS);
    return () => window.clearTimeout(timer);
  }, [menu]);

  function toggle(id: MenuId) {
    setMenu((value) => (value === id ? null : id));
  }

  // Collapse the dropdown first, then navigate, so closing is visible.
  function onPanelClick(event: React.MouseEvent<HTMLElement>) {
    const link = (event.target as HTMLElement).closest("a");
    if (!link || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const href = link.getAttribute("href");
    if (!href || link.target === "_blank" || !href.startsWith("/")) return;
    event.preventDefault();
    setMenu(null);
    window.setTimeout(() => router.push(href), CLOSE_MS);
  }

  // Dropdowns open on click: close on outside click, Escape, or navigation, and keep the page from scrolling while open.
  useEffect(() => {
    setMenu(null);
  }, [pathname]);

  useEffect(() => {
    if (!menu) return;

    const root = document.documentElement;
    const body = document.body;
    const scrollbar = window.innerWidth - root.clientWidth;
    root.style.overflow = "hidden";
    root.dataset.scrollLock = "true";
    if (scrollbar > 0) body.style.paddingRight = `${scrollbar}px`;

    const onPointerDown = (event: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) setMenu(null);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenu(null);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      root.style.removeProperty("overflow");
      delete root.dataset.scrollLock;
      body.style.removeProperty("padding-right");
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menu]);

  return (
    <header ref={headerRef} className={`relative z-30 ${className}`}>
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
            className="flex cursor-pointer items-center gap-1 py-6"
            aria-expanded={menu === "product"}
            aria-haspopup="true"
            onClick={() => toggle("product")}
          >
            <NavLabel active={menu === "product" || inSection(pathname, "product")}>Product</NavLabel> <Chevron open={menu === "product"} />
          </button>
          <button
            type="button"
            className="flex cursor-pointer items-center gap-1 py-6"
            aria-expanded={menu === "industries"}
            aria-haspopup="true"
            onClick={() => toggle("industries")}
          >
            <NavLabel active={menu === "industries" || inSection(pathname, "industries")}>Industries</NavLabel> <Chevron open={menu === "industries"} />
          </button>
          <a href="/dolphin-ai" className="py-6" aria-current={inSection(pathname, "dolphin") ? "page" : undefined}>
            <NavLabel active={inSection(pathname, "dolphin")}>Dolphin AI</NavLabel>
          </a>
          <a href="/pricing" className="py-6" aria-current={inSection(pathname, "pricing") ? "page" : undefined}>
            <NavLabel active={inSection(pathname, "pricing")}>Pricing</NavLabel>
          </a>
          <button
            type="button"
            className="flex cursor-pointer items-center gap-1 py-6"
            aria-expanded={menu === "resources"}
            aria-haspopup="true"
            onClick={() => toggle("resources")}
          >
            <NavLabel active={menu === "resources" || inSection(pathname, "resources")}>Resources</NavLabel> <Chevron open={menu === "resources"} />
          </button>
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          <a
            href="/sign-in"
            className="inline-flex h-11 items-center rounded-full bg-white px-5 text-[15px] font-medium text-black shadow-[0_0_0_1px_rgba(0,0,0,0.06)]"
          >
            Sign In
          </a>
          <a
            href="/request-demo"
            className="inline-flex h-11 items-center rounded-full bg-black px-5 text-[15px] font-medium text-white"
          >
            Request Demo
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 cursor-pointer items-center rounded-full border border-black/10 px-4 text-sm xl:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
        >
          Menu
        </button>
      </div>

      {rendered === "product" ? (
        <div
          className="dropdown-panel absolute top-full right-0 left-0 z-40 hidden bg-white shadow-[0_22px_50px_rgba(16,24,40,0.08)] xl:block"
          data-state={menu === "product" ? "open" : "closing"}
          onClick={onPanelClick}
        >
          <div className="wrap grid items-start gap-10 py-10 lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-16 lg:py-12">
            <Promo title="Product" image />
            <div className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3 xl:grid-cols-5 xl:gap-x-6">
              {productColumns.map((column) => (
                <div key={column.title}>
                  <a
                    href={column.href}
                    aria-current={pathname === column.href && column.title !== "Resources" ? "page" : undefined}
                    className={`mb-3 block text-[16px] font-semibold tracking-[-0.01em] text-[#1a1a1a] hover:underline ${pathname === column.href && column.title !== "Resources" ? "underline decoration-2 underline-offset-4" : ""}`}
                  >
                    {column.title}
                  </a>
                  {column.links.map((link) => (
                    <MenuLink key={column.title + link.label} href={link.href}>
                      {link.label}
                    </MenuLink>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      {rendered === "industries" ? (
        <div
          className="dropdown-panel absolute top-full right-0 left-0 z-40 hidden bg-white shadow-[0_22px_50px_rgba(16,24,40,0.08)] xl:block"
          data-state={menu === "industries" ? "open" : "closing"}
          onClick={onPanelClick}
        >
          <div className="wrap grid items-start gap-10 py-10 lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-16 lg:py-12">
            <Promo title="Industries" image href="/industries" cta="Explore Industries" />
            <div className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3 xl:grid-cols-4 xl:gap-x-10">
              {industryColumns.map((column) => (
                <div key={column.title || "use-cases-more"}>
                  {column.title ? (
                    <a
                      href={column.href}
                      aria-current={pathname === column.href ? "page" : undefined}
                      className={`mb-3 block text-[16px] font-semibold tracking-[-0.01em] text-[#1a1a1a] hover:underline ${pathname === column.href ? "underline decoration-2 underline-offset-4" : ""}`}
                    >
                      {column.title}
                    </a>
                  ) : (
                    <p className="mb-3 text-[16px] font-semibold tracking-[-0.01em] opacity-0" aria-hidden="true">
                      &nbsp;
                    </p>
                  )}
                  {column.links.map((link) => (
                    <MenuLink key={link.label} href={link.href}>
                      {link.label}
                    </MenuLink>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      {rendered === "resources" ? (
        <div
          className="dropdown-panel absolute top-full right-0 left-0 z-40 hidden bg-white shadow-[0_22px_50px_rgba(16,24,40,0.08)] xl:block"
          data-state={menu === "resources" ? "open" : "closing"}
          onClick={onPanelClick}
        >
          <div className="wrap grid items-start gap-10 py-10 lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-16 lg:py-12">
            <Promo title="Resources" image href="/docs" cta="Explore Resources" />
            <div className="w-full max-w-[240px]">
              {resourceColumns.map((column) => (
                <div key={column.title}>
                  <a
                    href={column.href}
                    aria-current={pathname === column.href && column.title !== "Resources" ? "page" : undefined}
                    className={`mb-3 block text-[16px] font-semibold tracking-[-0.01em] text-[#1a1a1a] hover:underline ${pathname === column.href && column.title !== "Resources" ? "underline decoration-2 underline-offset-4" : ""}`}
                  >
                    {column.title}
                  </a>
                  {column.links.map((link) => (
                    <MenuLink key={link.label} href={link.href}>
                      {link.label}
                    </MenuLink>
                  ))}
                </div>
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
                <div key={column.title} className="mt-2">
                  <a href={column.href} onClick={() => setOpen(false)} className="block font-medium text-[#1a1a1a]">
                    {column.title}
                  </a>
                  {column.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="mt-1.5 block pl-3 text-[#3a3a3a]"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              ))}
            </div>
            <div>
              <a href="/industries" onClick={() => setOpen(false)} className="font-semibold">
                Industries
              </a>
              {industryColumns
                .filter((column) => column.title)
                .map((column) => (
                  <div key={column.title} className="mt-2">
                    <a href={column.href} onClick={() => setOpen(false)} className="block font-medium text-[#1a1a1a]">
                      {column.title}
                    </a>
                    {column.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="mt-1.5 block pl-3 text-[#3a3a3a]"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
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
              {resourceColumns[0].links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="mt-2 block text-[#3a3a3a]"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href="/sign-in"
              onClick={() => setOpen(false)}
              className="inline-flex h-10 items-center justify-center rounded-full border border-black/10 bg-white text-black"
            >
              Sign In
            </a>
            <a
              href="/request-demo"
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
