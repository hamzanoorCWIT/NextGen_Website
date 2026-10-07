import type { ProductImage } from "@/lib/products";
import type { IndustryCatalogCard } from "@/components/industry-catalog-page";

export type IndustryVertical = {
  type: "vertical";
  slug: string;
  title: string;
  menuTitle: string;
  parent: "by-industry" | "by-role" | "use-cases";
  description: string;
  heroTitle: string;
  heroDescription: string;
  highlightTitle: string;
  highlightDescription: string;
  experienceBody: string;
  workflowBody: string;
  insightsBody: string;
  connectedTitle: string;
  heroImage: ProductImage;
  /** Optional per-page overrides for the three feature sections and the connected-operations image. */
  experienceImage?: ProductImage;
  workflowImage?: ProductImage;
  insightsImage?: ProductImage;
  connectedImage?: ProductImage;
};

export type IndustryPage = IndustryVertical;

const studio: ProductImage = {
  src: "/figma/product-studio.png",
  alt: "Product workspace for creating and publishing campaigns",
  width: 720,
  height: 427,
};

const create: ProductImage = {
  src: "/figma/product-create.png",
  alt: "Workspace for choosing what to create",
  width: 730,
  height: 456,
};

const ticketRoute: ProductImage = {
  src: "/figma/ticket-route.png",
  alt: "Conversation confirming a customer request",
  width: 520,
  height: 552,
};

const ticketDetails: ProductImage = {
  src: "/figma/ticket-details.png",
  alt: "Detailed conversation and request context",
  width: 900,
  height: 390,
};

const csTickets: ProductImage = {
  src: "/figma/cs-tickets.png",
  alt: "A ticket inbox for customer requests",
  width: 471,
  height: 298,
};

const heroBanner: ProductImage = {
  src: "/figma/ticket-banner.png",
  alt: "NextGen workspace on a laptop",
  width: 1136,
  height: 548,
};

const catalogImages = [csTickets, create, ticketDetails, studio, ticketRoute] as const;

export function industrySlug(label: string) {
  return label
    .toLowerCase()
    .replace(/&/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function vertical(
  slug: string,
  name: string,
  adjective: string,
  heroDescription: string,
  parent: IndustryVertical["parent"] = "by-industry",
): IndustryVertical {
  const titled = adjective.charAt(0).toUpperCase() + adjective.slice(1);
  return {
    type: "vertical",
    slug,
    title: name,
    menuTitle: name,
    parent,
    description: heroDescription,
    heroTitle: `Run ${adjective} operations with connected services`,
    heroDescription,
    highlightTitle: `${titled} operations are complex. Your platform should not be.`,
    highlightDescription: `From customer requests to internal approvals, ${adjective} organizations need visibility across every interaction. CWIT EMS helps teams simplify daily operations while maintaining control and reliability.`,
    experienceBody: `${titled} customers expect fast, reliable support whenever they need it. CWIT EMS brings conversations, service requests, and customer history together, helping teams respond faster and deliver consistent experiences across every interaction.`,
    workflowBody: `From service requests to internal approvals, CWIT EMS helps ${adjective} teams automate repetitive processes, route work efficiently, and keep every department aligned with clear ownership and visibility.`,
    insightsBody: `Monitor service operations, workforce activity, and business performance through connected dashboards and reporting. CWIT EMS gives ${adjective} leaders the visibility needed to make informed decisions and improve daily operations.`,
    connectedTitle: `Connected operations for modern ${adjective} organizations`,
    heroImage: heroBanner,
  };
}

function card(id: string, title: string, body: string, imageIndex: number): IndustryCatalogCard {
  const image = catalogImages[imageIndex % catalogImages.length];
  return {
    id,
    title,
    body,
    image: image.src,
    imageAlt: image.alt,
    width: image.width,
    height: image.height,
  };
}

export const byIndustryChildren = [
  "utilities",
  "banking-financial",
  "bpo-outsourcing",
  "government",
  "telecom",
  "professional-services",
  "construction",
] as const;

export const byRoleChildren = [
  "support-agents",
  "team-leaders",
  "operations-managers",
  "hr-workforce",
  "finance",
  "compliance-risk",
  "it-administration",
  "executives",
] as const;

export const useCaseChildren = [
  "omnichannel-ticketing",
  "whatsapp-chat-support",
  "outbound-campaigns",
  "lead-to-opportunity",
  "billable-time-cost",
  "attendance-shifts-cost",
  "multi-level-approvals",
  "policy-acknowledgement",
  "kyc-risk-monitoring",
  "replace-your-stack",
] as const;

export const byIndustryCards: IndustryCatalogCard[] = [
  {
    id: "utilities",
    title: "Utilities",
    body: "Manage customer services, field operations, and internal workflows with connected communication, request management, and real-time operational visibility.",
    image: "/figma/by-industry-1.png",
    imageAlt: "Utilities workspace",
    width: 706,
    height: 234,
  },
  {
    id: "banking-financial",
    title: "Banking & Financial Services",
    body: "Deliver secure and reliable customer experiences with structured workflows, compliance processes, approvals, and complete control over service operations.",
    image: "/figma/by-industry-2.png",
    imageAlt: "Banking and Financial Services workspace",
    width: 706,
    height: 234,
  },
  {
    id: "bpo-outsourcing",
    title: "BPO & Outsourcing",
    body: "Handle high-volume customer operations efficiently with omnichannel communication, workforce coordination, performance tracking, and automated workflows.",
    image: "/figma/by-industry-3.png",
    imageAlt: "BPO and Outsourcing workspace",
    width: 706,
    height: 234,
  },
  {
    id: "government",
    title: "Government",
    body: "Improve citizen services and internal operations through transparent processes, centralized communication, approvals, and accountable service delivery.",
    image: "/figma/by-industry-4.png",
    imageAlt: "Government workspace",
    width: 706,
    height: 234,
  },
  {
    id: "telecom",
    title: "Telecom",
    body: "Support complex customer interactions with connected channels, faster service management, intelligent workflows, and real-time operational visibility.",
    image: "/figma/by-industry-5.png",
    imageAlt: "Telecom workspace",
    width: 706,
    height: 234,
  },
  {
    id: "professional-services",
    title: "Professional Services",
    body: "Deliver secure and reliable customer experiences with structured workflows, compliance processes, approvals, and complete control over service operations.",
    image: "/figma/by-industry-6.png",
    imageAlt: "Professional Services workspace",
    width: 706,
    height: 234,
  },
  {
    id: "construction",
    title: "Construction",
    body: "Coordinate projects, teams, approvals, and operational activities with structured workflows built for complex business environments.",
    image: "/figma/by-industry-7.png",
    imageAlt: "Construction workspace",
    width: 706,
    height: 234,
  },
];

export const byRoleCards: IndustryCatalogCard[] = [
  card("support-agents", "Support Agents", "Give support agents complete customer context and faster paths to resolution across every channel.", 0),
  card("team-leaders", "Team Leaders", "Give team leaders visibility into queues, performance, and escalations in one connected view.", 1),
  card("operations-managers", "Operations Managers", "Coordinate cross-team operations with structured workflows, approvals, and reporting.", 2),
  card("hr-workforce", "HR & Workforce", "Manage attendance, shifts, and workforce cost with connected operational controls.", 3),
  card("finance", "Finance", "Connect billable work, approvals, and operational cost tracking with clear ownership.", 4),
  card("compliance-risk", "Compliance & Risk", "Enforce policies, approvals, and audit-ready processes across every team.", 0),
  card("it-administration", "IT & Administration", "Control access, integrations, and platform administration from a secure workspace.", 1),
  card("executives", "Executives", "See operational performance, risk, and outcomes across the organization.", 2),
];

export const useCaseCards: IndustryCatalogCard[] = [
  card("omnichannel-ticketing", "Omnichannel Ticketing", "Unify tickets across channels with structured ownership, SLAs, and complete history.", 0),
  card("whatsapp-chat-support", "WhatsApp & Chat Support", "Deliver fast conversational support across WhatsApp and chat with connected context.", 1),
  card("outbound-campaigns", "Outbound Campaigns", "Launch and manage outbound campaigns with clear ownership and outcome tracking.", 2),
  card("lead-to-opportunity", "Lead to Opportunity", "Move leads through a clear path from capture to qualified opportunity.", 3),
  card("billable-time-cost", "Billable Time & Cost", "Track billable time and operational cost with clear ownership and reporting.", 4),
  card("attendance-shifts-cost", "Attendance, Shifts & Cost", "Manage attendance, shifts, and workforce cost in one connected workflow.", 0),
  card("multi-level-approvals", "Multi-Level Approvals", "Run multi-level approvals with clear ownership, reminders, and audit trails.", 1),
  card("policy-acknowledgement", "Policy Acknowledgement", "Distribute policies and track acknowledgements across the organization.", 2),
  card("kyc-risk-monitoring", "KYC & Risk Monitoring", "Run KYC checks and ongoing risk monitoring with accountable review workflows.", 3),
  card("replace-your-stack", "Replace Your Stack", "Consolidate fragmented tools into one connected operations platform.", 4),
];

export const industryVerticals: Record<string, IndustryVertical> = {
  utilities: {
    type: "vertical",
    slug: "utilities",
    title: "Utilities",
    menuTitle: "Utilities",
    parent: "by-industry",
    description:
      "Utilities manage thousands of customer interactions, operational requests, and internal processes every day. CWIT EMS connects service teams, field operations, and management workflows into one intelligent platform.",
    heroTitle: "Run utility operations with connected services",
    heroDescription:
      "Utilities manage thousands of customer interactions, operational requests, and internal processes every day. CWIT EMS connects service teams, field operations, and management workflows into one intelligent platform.",
    highlightTitle: "Utility operations are complex. Your platform should not be.",
    highlightDescription:
      "From customer complaints to internal approvals, utility organizations need visibility across every interaction. CWIT EMS helps teams simplify daily operations while maintaining control and reliability.",
    experienceBody:
      "Utility customers expect fast, reliable support whenever they need it. CWIT EMS brings conversations, service requests, and customer history together, helping teams respond faster and deliver consistent experiences across every interaction.",
    workflowBody:
      "From service requests to internal approvals, CWIT EMS helps utility teams automate repetitive processes, route work efficiently, and keep every department aligned with clear ownership and visibility.",
    insightsBody:
      "Monitor service operations, workforce activity, and business performance through connected dashboards and reporting. CWIT EMS gives utility leaders the visibility needed to make informed decisions and improve daily operations.",
    connectedTitle: "Connected operations for modern utility providers",
    heroImage: heroBanner,
    experienceImage: { src: "/figma/utilities-1.png", alt: "Utility customer conversations across channels", width: 719, height: 474 },
    workflowImage: { src: "/figma/utilities-2.png", alt: "Utility service request workflow", width: 719, height: 474 },
    insightsImage: { src: "/figma/utilities-3.png", alt: "Utility performance dashboard", width: 719, height: 474 },
    connectedImage: { src: "/figma/connected-utility.png", alt: "Connected utility operations overview", width: 815, height: 537 },
  },
  "banking-financial": vertical(
    "banking-financial",
    "Banking & Financial Services",
    "banking",
    "Deliver secure and reliable customer experiences with structured workflows, compliance processes, approvals, and complete control over service operations.",
  ),
  "bpo-outsourcing": vertical(
    "bpo-outsourcing",
    "BPO & Outsourcing",
    "BPO",
    "Handle high-volume customer operations efficiently with omnichannel communication, workforce coordination, performance tracking, and automated workflows.",
  ),
  government: vertical(
    "government",
    "Government",
    "government",
    "Improve citizen services and internal operations through transparent processes, centralized communication, approvals, and accountable service delivery.",
  ),
  telecom: vertical(
    "telecom",
    "Telecom",
    "telecom",
    "Support complex customer interactions with connected channels, faster service management, intelligent workflows, and real-time operational visibility.",
  ),
  "professional-services": vertical(
    "professional-services",
    "Professional Services",
    "professional services",
    "Deliver secure and reliable customer experiences with structured workflows, compliance processes, approvals, and complete control over service operations.",
  ),
  construction: vertical(
    "construction",
    "Construction",
    "construction",
    "Coordinate projects, teams, approvals, and operational activities with structured workflows built for complex business environments.",
  ),

  "support-agents": vertical(
    "support-agents",
    "Support Agents",
    "support agent",
    "Equip agents with omnichannel conversations, customer history, and guided workflows in one workspace.",
    "by-role",
  ),
  "team-leaders": vertical(
    "team-leaders",
    "Team Leaders",
    "team leader",
    "Monitor agent workload, coach performance, and keep service levels on track from one connected view.",
    "by-role",
  ),
  "operations-managers": vertical(
    "operations-managers",
    "Operations Managers",
    "operations",
    "Align service, workforce, and process owners with clear workflows, approvals, and performance insights.",
    "by-role",
  ),
  "hr-workforce": vertical(
    "hr-workforce",
    "HR & Workforce",
    "workforce",
    "Track attendance, shifts, and capacity while keeping teams aligned to operational demand.",
    "by-role",
  ),
  finance: vertical(
    "finance",
    "Finance",
    "finance",
    "Track billable time, cost, and approvals with the operational context finance teams need.",
    "by-role",
  ),
  "compliance-risk": vertical(
    "compliance-risk",
    "Compliance & Risk",
    "compliance",
    "Run policy acknowledgements, KYC checks, and multi-level approvals with complete audit trails.",
    "by-role",
  ),
  "it-administration": vertical(
    "it-administration",
    "IT & Administration",
    "IT",
    "Manage permissions, integrations, and operational configuration from a controlled workspace.",
    "by-role",
  ),
  executives: vertical(
    "executives",
    "Executives",
    "executive",
    "Monitor service quality, workforce efficiency, and governance outcomes from one executive view.",
    "by-role",
  ),

  "omnichannel-ticketing": vertical(
    "omnichannel-ticketing",
    "Omnichannel Ticketing",
    "ticketing",
    "Capture requests from every channel, route them to the right teams, and keep resolution visible end to end.",
    "use-cases",
  ),
  "whatsapp-chat-support": vertical(
    "whatsapp-chat-support",
    "WhatsApp & Chat Support",
    "chat support",
    "Keep conversations, history, and handoffs connected so agents respond quickly across messaging channels.",
    "use-cases",
  ),
  "outbound-campaigns": vertical(
    "outbound-campaigns",
    "Outbound Campaigns",
    "campaign",
    "Plan campaigns, assign ownership, and track outcomes across calls, messages, and follow-ups.",
    "use-cases",
  ),
  "lead-to-opportunity": vertical(
    "lead-to-opportunity",
    "Lead to Opportunity",
    "sales",
    "Capture lead context, route follow-ups, and keep sales and service teams aligned through every stage.",
    "use-cases",
  ),
  "billable-time-cost": vertical(
    "billable-time-cost",
    "Billable Time & Cost",
    "billing",
    "Connect timesheets, projects, and cost centers so finance and operations stay aligned.",
    "use-cases",
  ),
  "attendance-shifts-cost": vertical(
    "attendance-shifts-cost",
    "Attendance, Shifts & Cost",
    "attendance",
    "Track attendance and shift changes while keeping workforce cost visible to operations leaders.",
    "use-cases",
  ),
  "multi-level-approvals": vertical(
    "multi-level-approvals",
    "Multi-Level Approvals",
    "approval",
    "Route approvals across teams with structured stages, reminders, and complete history.",
    "use-cases",
  ),
  "policy-acknowledgement": vertical(
    "policy-acknowledgement",
    "Policy Acknowledgement",
    "policy",
    "Publish policies, collect acknowledgements, and keep compliance evidence ready for review.",
    "use-cases",
  ),
  "kyc-risk-monitoring": vertical(
    "kyc-risk-monitoring",
    "KYC & Risk Monitoring",
    "risk",
    "Collect documents, review risk signals, and keep monitoring workflows auditable across teams.",
    "use-cases",
  ),
  "replace-your-stack": vertical(
    "replace-your-stack",
    "Replace Your Stack",
    "platform",
    "Connect customer service, work management, CRM, analytics, and governance without running disconnected systems.",
    "use-cases",
  ),
};

const parentChildren: Record<IndustryVertical["parent"], readonly string[]> = {
  "by-industry": byIndustryChildren,
  "by-role": byRoleChildren,
  "use-cases": useCaseChildren,
};

export const parentHref: Record<IndustryVertical["parent"], string> = {
  "by-industry": "/industries/by-industry",
  "by-role": "/industries/by-role",
  "use-cases": "/industries/use-cases",
};

export const parentLabel: Record<IndustryVertical["parent"], string> = {
  "by-industry": "All Industries",
  "by-role": "All Roles",
  "use-cases": "All Use Cases",
};

export function industryPageHref(slug: string) {
  const page = industryVerticals[slug];
  if (!page) return `/industries/${slug}`;
  return `${parentHref[page.parent]}/${slug}`;
}

export function getIndustryPage(slug: string): IndustryPage | null {
  return industryVerticals[slug] ?? null;
}

export function getIndustryPageForParent(parent: IndustryVertical["parent"], slug: string): IndustryPage | null {
  const page = industryVerticals[slug];
  if (!page || page.parent !== parent) return null;
  return page;
}

export function getIndustrySiblingModules(slug: string) {
  const page = industryVerticals[slug];
  if (!page) return [];
  return parentChildren[page.parent]
    .filter((child) => child !== slug)
    .map((child) => {
      const sibling = industryVerticals[child];
      return {
        id: child,
        label: sibling?.menuTitle ?? sibling?.title ?? child,
        href: industryPageHref(child),
        image: sibling?.heroImage ?? studio,
      };
    });
}

export function allIndustrySlugsForParent(parent: IndustryVertical["parent"]) {
  return [...parentChildren[parent]];
}

export function allIndustrySlugs() {
  return Object.keys(industryVerticals);
}

export function industryHref(label: string) {
  const slug = industrySlug(label);
  const page = getIndustryPage(slug);
  if (page) return industryPageHref(slug);

  const aliases: Record<string, string> = {
    "banking-financial": "banking-financial",
    "bop-outsourcing": "bpo-outsourcing",
    "bpo-outsourcing": "bpo-outsourcing",
    "professional-services": "professional-services",
    "support-agents": "support-agents",
    "team-leaders": "team-leaders",
    "operations-managers": "operations-managers",
    "hr-workforce": "hr-workforce",
    "compliance-risk": "compliance-risk",
    "it-administration": "it-administration",
    "omnichannel-ticketing": "omnichannel-ticketing",
    whatsapp: "whatsapp-chat-support",
    "outbound-campaigns": "outbound-campaigns",
    "customer-360": "lead-to-opportunity",
    "lead-to-opportunity": "lead-to-opportunity",
    "billable-time-and-cost": "billable-time-cost",
    "attendance-shifts-and-overtime": "attendance-shifts-cost",
    "multi-level-approvals": "multi-level-approvals",
    "policy-acknowledgment": "policy-acknowledgement",
    "kyc-and-risk-monitoring": "kyc-risk-monitoring",
    "replace-your-stack": "replace-your-stack",
  };

  if (slug === "by-industry" || slug === "by-role" || slug === "use-cases") {
    return parentHref[slug];
  }

  const resolved = aliases[slug] ?? slug;
  if (getIndustryPage(resolved)) return industryPageHref(resolved);
  return `/industries/${resolved}`;
}
