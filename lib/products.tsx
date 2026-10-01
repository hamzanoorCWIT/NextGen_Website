import type { ReactNode } from "react";

export type ProductImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ProductCategory = {
  type: "category";
  slug: string;
  title: string;
  menuTitle: string;
  description: string;
  heroTitle: string;
  heroDescription: string;
  heroImage: ProductImage;
  simplifyTitle: string;
  simplifyDescription: string;
  simplifyItems: { label: string; title: string; body: string }[];
  modulesTitle: string;
  modulesDescription: string;
  workflowTitle: string;
  workflowDescription: string;
  workflowSteps: { title: string; body?: string }[];
  workflowImage: ProductImage;
  builtTitle: string;
  builtDescription: string;
  builtItems: { title: string; body: string }[];
  children: string[];
};

export type ProductSubcategoryPage = {
  type: "subcategory";
  slug: string;
  title: string;
  menuTitle: string;
  parent: string;
  description: string;
  heroTitle: ReactNode;
  heroDescription: string;
  heroImage: ProductImage;
  viewsTitle: string;
  viewsDescription: string;
  viewsItems: { label: string; title: string; body: string }[];
  splits: {
    id: string;
    title: string;
    body: string;
    image: string;
    imageAlt: string;
    imageWidth: number;
    imageHeight: number;
    imageSide: "left" | "right";
  }[];
  captureTitle: string;
  captureDescription: string;
  captureCards: { title: string; body: string }[];
  pathTitle: string;
  pathDescription: string;
  pathItems: { title: string; body: string }[];
  checklistTitle: string;
  checklistDescription: string;
  checklist: string[];
  checklistImage: ProductImage;
  modulesTitle: string;
  modulesDescription: string;
};

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

const ticketPriorities: ProductImage = {
  src: "/figma/ticket-priorities.png",
  alt: "Prioritized customer conversations",
  width: 900,
  height: 500,
};

const connected: ProductImage = {
  src: "/figma/connected.png",
  alt: "Connected analytics and delivery insights",
  width: 815,
  height: 537,
};

const csHero: ProductImage = {
  src: "/figma/customer-service-hero.png",
  alt: "Customer conversations on a laptop",
  width: 1348,
  height: 637,
};

const hero1: ProductImage = {
  src: "/figma/hero-1.png",
  alt: "NextGen workspace on a laptop",
  width: 1266,
  height: 584,
};

function sub(config: {
  slug: string;
  title: string;
  menuTitle?: string;
  parent: string;
  description: string;
  heroTitle: ReactNode;
  heroDescription: string;
  focus: string;
  focusAlt: string;
}): ProductSubcategoryPage {
  const name = config.title;
  return {
    type: "subcategory",
    slug: config.slug,
    title: config.title,
    menuTitle: config.menuTitle ?? config.title,
    parent: config.parent,
    description: config.description,
    heroTitle: config.heroTitle,
    heroDescription: config.heroDescription,
    heroImage: hero1,
    viewsTitle: `Every ${name.toLowerCase()} workflow, organized the way your team works.`,
    viewsDescription: `Manage ${name.toLowerCase()} from a single workspace with flexible views built for different teams. Keep ownership, progress, and outcomes visible at every step.`,
    viewsItems: [
      {
        label: "01",
        title: "Structured view",
        body: `Review ${name.toLowerCase()} records with the fields your team needs — status, owner, priority, and context.`,
      },
      {
        label: "02",
        title: "Collaborative view",
        body: `Share updates, notes, and handoffs so everyone stays aligned while work moves forward.`,
      },
      {
        label: "03",
        title: "Progress view",
        body: `Track what needs attention, what is in progress, and what is complete across your ${name.toLowerCase()} pipeline.`,
      },
    ],
    splits: [
      {
        id: `${config.slug}-details`,
        title: `Complete ${name} details`,
        body: `Capture the context behind every ${name.toLowerCase()} item with structured fields, notes, and history so teams can act with confidence.`,
        image: ticketDetails.src,
        imageAlt: ticketDetails.alt,
        imageWidth: ticketDetails.width,
        imageHeight: ticketDetails.height,
        imageSide: "right",
      },
      {
        id: `${config.slug}-route`,
        title: "Categorize and route automatically",
        body: `Organize ${name.toLowerCase()} work by purpose, team, and source. Ensure every item reaches the right people with clear ownership from the start.`,
        image: ticketRoute.src,
        imageAlt: ticketRoute.alt,
        imageWidth: ticketRoute.width,
        imageHeight: ticketRoute.height,
        imageSide: "left",
      },
      {
        id: `${config.slug}-priorities`,
        title: "Set priorities and deadlines",
        body: `Define priority, timing, and expectations early so teams focus on what matters and maintain consistent delivery standards.`,
        image: ticketPriorities.src,
        imageAlt: ticketPriorities.alt,
        imageWidth: ticketPriorities.width,
        imageHeight: ticketPriorities.height,
        imageSide: "right",
      },
    ],
    captureTitle: `Capture every ${name.toLowerCase()} with complete information.`,
    captureDescription: `Start with the right details. Capture context, assign ownership, define priorities, and keep ${name.toLowerCase()} work structured so teams can move faster.`,
    captureCards: [
      {
        title: "Capture messages, notes, and essential information in one place.",
        body: config.focus,
      },
      {
        title: "Classify work by purpose, source, team, and priority.",
        body: config.focusAlt,
      },
      {
        title: "Set expectations and track commitments from creation.",
        body: `Keep SLAs, due dates, and owners visible for every ${name.toLowerCase()} item.`,
      },
      {
        title: "Assign work to the right people and teams instantly.",
        body: `Route ${name.toLowerCase()} activity to the teams best equipped to complete it.`,
      },
    ],
    pathTitle: `Every ${name.toLowerCase()} item follows a clear path to completion.`,
    pathDescription: `From assignment to follow-up, ${name} keeps work moving through a defined workflow. Route items, manage ownership, track status changes, and ensure teams know what needs attention next.`,
    pathItems: [
      { title: "Assign & route", body: "Send every item to the right team with clear ownership." },
      { title: "Prioritize work", body: "Highlight urgent items and focus teams where they matter most." },
      { title: "Track progress", body: "Monitor every stage from creation to completion." },
      { title: "Collaborate easily", body: "Keep teams connected while maintaining accountability." },
    ],
    checklistTitle: `Capture every ${name.toLowerCase()} with complete information.`,
    checklistDescription: `Every ${name.toLowerCase()} item starts with the right information. Capture details, assign ownership, define priorities, and organize work with structured fields.`,
    checklist: [
      `Complete ${name.toLowerCase()} history`,
      "Response & resolution tracking",
      "Clear ownership and handoffs",
      "Smart summaries & suggestions",
      "Assign and involve team members",
    ],
    checklistImage: connected,
    modulesTitle: "Related products",
    modulesDescription: "Continue exploring modules in this product area",
  };
}

export const productCategories: Record<string, ProductCategory> = {
  "work-management": {
    type: "category",
    slug: "work-management",
    title: "Work Management",
    menuTitle: "Work Management",
    description: "Organize tasks, projects, timesheets, and attendance in one connected workspace.",
    heroTitle: "Give teams one place to manage daily work",
    heroDescription:
      "CWIT EMS helps teams plan, assign, and track operational work with clear ownership, schedules, and progress across tasks, projects, timesheets, and attendance.",
    heroImage: create,
    simplifyTitle: "Simplify work management",
    simplifyDescription:
      "Connect planning, execution, and time tracking so teams stay aligned from assignment through completion.",
    simplifyItems: [
      { label: "01", title: "Clear ownership", body: "Assign work, track progress, and keep every initiative moving." },
      { label: "02", title: "Connected schedules", body: "Coordinate tasks, projects, and attendance in one workspace." },
      { label: "03", title: "Operational visibility", body: "See workload, timelines, and delivery status across teams." },
    ],
    modulesTitle: "Work Management Products",
    modulesDescription: "Everything your operations team needs",
    workflowTitle: "Work Management Workflow",
    workflowDescription:
      "Plan work, assign ownership, track time, and measure delivery from one connected platform.",
    workflowSteps: [
      { title: "Work is planned", body: "Create tasks and projects with clear scope and owners." },
      { title: "Teams take action" },
      { title: "Time is captured" },
      { title: "Progress is tracked" },
      { title: "Delivery is measured" },
    ],
    workflowImage: {
      src: "/figma/cs-workflow.png",
      alt: "Team collaboration workspace",
      width: 355,
      height: 360,
    },
    builtTitle: "Built to improve how teams get work done",
    builtDescription: "Keep execution, time, and attendance connected so operations stay predictable.",
    builtItems: [
      { title: "Faster execution", body: "Reduce handoffs and keep priorities visible." },
      { title: "Better coordination", body: "Align people, tasks, and timelines in one place." },
      { title: "Accurate time tracking", body: "Capture timesheets and attendance without extra tools." },
      { title: "Clear accountability", body: "Know who owns what and what happens next." },
    ],
    children: ["tasks", "projects", "timesheets", "attendance"],
  },
  "crm-sales": {
    type: "category",
    slug: "crm-sales",
    title: "CRM & Sales",
    menuTitle: "CRM & Sales",
    description: "Manage contacts, leads, and customer relationships with complete visibility.",
    heroTitle: "Build stronger customer relationships",
    heroDescription:
      "CWIT EMS connects contacts, leads, and sales activity so teams can follow every opportunity with the right context.",
    heroImage: studio,
    simplifyTitle: "Simplify CRM & sales",
    simplifyDescription: "Give sales and service teams one place to manage relationships and pipeline activity.",
    simplifyItems: [
      { label: "01", title: "Complete contact history", body: "See conversations, requests, and opportunities together." },
      { label: "02", title: "Faster follow-up", body: "Route leads and keep ownership clear across the pipeline." },
      { label: "03", title: "Better decisions", body: "Use connected activity to prioritize the right accounts." },
    ],
    modulesTitle: "CRM & Sales Products",
    modulesDescription: "Everything your revenue teams need",
    workflowTitle: "CRM & Sales Workflow",
    workflowDescription: "Capture leads, nurture relationships, and convert opportunities with shared context.",
    workflowSteps: [
      { title: "Lead is captured", body: "Inbound interest is recorded with full source context." },
      { title: "Contact is enriched" },
      { title: "Opportunity is tracked" },
      { title: "Team collaborates" },
      { title: "Outcome is measured" },
    ],
    workflowImage: {
      src: "/figma/cs-workflow.png",
      alt: "CRM collaboration workspace",
      width: 355,
      height: 360,
    },
    builtTitle: "Built for connected customer growth",
    builtDescription: "Keep sales and service aligned around the same customer record.",
    builtItems: [
      { title: "Shared customer context", body: "Reduce repeated questions and missed follow-ups." },
      { title: "Cleaner pipeline", body: "Track leads and opportunities with clear stages." },
      { title: "Stronger handoffs", body: "Move work between teams without losing history." },
      { title: "Revenue visibility", body: "Understand activity and outcomes in one place." },
    ],
    children: ["contacts-crm", "leads"],
  },
  analytics: {
    type: "category",
    slug: "analytics",
    title: "Analytics & BI",
    menuTitle: "Analytics and BI",
    description: "Turn operational activity into dashboards and insights teams can act on.",
    heroTitle: "See performance across every operation",
    heroDescription:
      "CWIT EMS brings dashboards and Power BI reporting together so leaders can monitor trends and make faster decisions.",
    heroImage: connected,
    simplifyTitle: "Simplify analytics & BI",
    simplifyDescription: "Connect day-to-day activity to the reports and dashboards your teams rely on.",
    simplifyItems: [
      { label: "01", title: "Live operational views", body: "Monitor service, work, and sales activity as it happens." },
      { label: "02", title: "Shared dashboards", body: "Give every team the metrics that matter to them." },
      { label: "03", title: "Deeper reporting", body: "Extend insights with Power BI when you need advanced analysis." },
    ],
    modulesTitle: "Analytics & BI Products",
    modulesDescription: "Everything your insight teams need",
    workflowTitle: "Analytics Workflow",
    workflowDescription: "Collect activity, visualize performance, and share insights across the business.",
    workflowSteps: [
      { title: "Data is connected", body: "Operational activity flows into shared reporting." },
      { title: "Dashboards update" },
      { title: "Teams review trends" },
      { title: "Actions are prioritized" },
      { title: "Outcomes improve" },
    ],
    workflowImage: {
      src: "/figma/cs-workflow.png",
      alt: "Analytics collaboration workspace",
      width: 355,
      height: 360,
    },
    builtTitle: "Built for clearer decisions",
    builtDescription: "Make performance visible across customer service, work, and sales operations.",
    builtItems: [
      { title: "Faster insight", body: "Find what needs attention without switching tools." },
      { title: "Shared metrics", body: "Align teams around one source of operational truth." },
      { title: "Flexible reporting", body: "Move from dashboards to Power BI as needs grow." },
      { title: "Actionable trends", body: "Turn patterns into priorities for every team." },
    ],
    children: ["dashboard", "power-bi"],
  },
  governance: {
    type: "category",
    slug: "governance",
    title: "Governance & Compliance",
    menuTitle: "Governance & Compliance",
    description: "Control permissions, approvals, policies, hierarchy, KYC, and API access from one place.",
    heroTitle: "Keep every process accountable",
    heroDescription:
      "CWIT EMS strengthens operational control with permissions, approvals, policy tracking, hierarchy, KYC, and API governance.",
    heroImage: csHero,
    simplifyTitle: "Simplify governance & compliance",
    simplifyDescription: "Create clear ownership, approvals, and policy controls across the organization.",
    simplifyItems: [
      { label: "01", title: "Controlled access", body: "Define permissions that match roles and responsibilities." },
      { label: "02", title: "Structured approvals", body: "Route decisions through the right people every time." },
      { label: "03", title: "Traceable policies", body: "Track acknowledgements, KYC, and hierarchy changes." },
    ],
    modulesTitle: "Governance & Compliance Products",
    modulesDescription: "Everything your control teams need",
    workflowTitle: "Governance Workflow",
    workflowDescription: "Define access, approve changes, and keep policy and compliance activity auditable.",
    workflowSteps: [
      { title: "Access is defined", body: "Permissions and hierarchy establish who can act." },
      { title: "Requests are approved" },
      { title: "Policies are shared" },
      { title: "Compliance is tracked" },
      { title: "Activity is auditable" },
    ],
    workflowImage: {
      src: "/figma/cs-workflow.png",
      alt: "Governance collaboration workspace",
      width: 355,
      height: 360,
    },
    builtTitle: "Built for safer operations",
    builtDescription: "Reduce risk while teams keep moving with clear rules and ownership.",
    builtItems: [
      { title: "Stronger permissions", body: "Limit access without slowing daily work." },
      { title: "Reliable approvals", body: "Keep multi-level decisions organized and visible." },
      { title: "Policy confidence", body: "Know which teams have acknowledged requirements." },
      { title: "API control", body: "Govern integrations with clear ownership and access." },
    ],
    children: ["permissions", "approvals", "policy-docs", "org-hierarchy", "kyc", "api-bank"],
  },
};

export const productSubcategories: Record<string, ProductSubcategoryPage> = {
  "chat-whatsapp": sub({
    slug: "chat-whatsapp",
    title: "Chat & WhatsApp",
    parent: "customer-service",
    description: "Manage live chat and WhatsApp conversations with shared history, routing, and reply context.",
    heroTitle: (
      <>
        Every conversation, connected across
        <br />
        chat and WhatsApp.
      </>
    ),
    heroDescription:
      "Handle customer messaging in one workspace. Route chats, keep context visible, and help agents reply faster with complete conversation history.",
    focus: "Keep chat transcripts, notes, and customer context together.",
    focusAlt: "Route WhatsApp and chat conversations by intent, team, and urgency.",
  }),
  "calls-campaigns": sub({
    slug: "calls-campaigns",
    title: "Calls & Campaigns",
    parent: "customer-service",
    description: "Run outbound campaigns and manage call activity with clear ownership and tracking.",
    heroTitle: (
      <>
        Calls and campaigns, managed from
        <br />
        one connected workspace.
      </>
    ),
    heroDescription:
      "Plan campaigns, manage call activity, and track outcomes without switching tools. Keep every outreach effort organized and measurable.",
    focus: "Capture campaign briefs, lists, and call outcomes in one place.",
    focusAlt: "Organize campaigns by audience, channel, owner, and priority.",
  }),
  tasks: sub({
    slug: "tasks",
    title: "Tasks",
    parent: "work-management",
    description: "Assign, prioritize, and complete operational tasks with clear ownership.",
    heroTitle: (
      <>
        Every task, owned and tracked
        <br />
        through completion.
      </>
    ),
    heroDescription:
      "Create tasks, assign owners, set priorities, and keep daily work visible so teams always know what needs attention next.",
    focus: "Capture task details, notes, and due dates together.",
    focusAlt: "Classify tasks by team, priority, and source.",
  }),
  projects: sub({
    slug: "projects",
    title: "Projects",
    parent: "work-management",
    description: "Plan initiatives, track milestones, and keep project teams aligned.",
    heroTitle: (
      <>
        Projects planned, tracked, and
        <br />
        delivered in one place.
      </>
    ),
    heroDescription:
      "Organize project work with clear milestones, owners, and progress so cross-functional teams stay aligned from kickoff to delivery.",
    focus: "Capture project scope, milestones, and updates together.",
    focusAlt: "Organize projects by team, timeline, and priority.",
  }),
  timesheets: sub({
    slug: "timesheets",
    title: "Timesheets",
    parent: "work-management",
    description: "Track time against work with clear records for teams and managers.",
    heroTitle: (
      <>
        Time tracked against the work
        <br />
        that matters.
      </>
    ),
    heroDescription:
      "Capture timesheets against tasks and projects so managers get accurate effort visibility without manual follow-up.",
    focus: "Capture time entries, notes, and related work items together.",
    focusAlt: "Classify time by project, team, and activity type.",
  }),
  attendance: sub({
    slug: "attendance",
    title: "Attendance",
    parent: "work-management",
    description: "Monitor attendance, shifts, and workforce presence with clear records.",
    heroTitle: (
      <>
        Attendance and shifts, visible
        <br />
        across your teams.
      </>
    ),
    heroDescription:
      "Track attendance and shift activity so operations leaders can plan coverage and keep workforce records accurate.",
    focus: "Capture attendance events, shift details, and exceptions together.",
    focusAlt: "Organize attendance by team, location, and shift type.",
  }),
  "contacts-crm": sub({
    slug: "contacts-crm",
    title: "Contacts & CRM",
    menuTitle: "Contacts & CRM",
    parent: "crm-sales",
    description: "Maintain a complete customer record across conversations and opportunities.",
    heroTitle: (
      <>
        Every contact, with the full
        <br />
        customer context.
      </>
    ),
    heroDescription:
      "Keep contacts, interaction history, and relationship details connected so sales and service teams work from the same record.",
    focus: "Capture contact details, notes, and interaction history together.",
    focusAlt: "Organize contacts by account, owner, and relationship stage.",
  }),
  leads: sub({
    slug: "leads",
    title: "Leads",
    parent: "crm-sales",
    description: "Capture, qualify, and follow leads with clear ownership through the pipeline.",
    heroTitle: (
      <>
        Leads captured, qualified, and
        <br />
        moved forward.
      </>
    ),
    heroDescription:
      "Track every lead from first interest through follow-up so revenue teams never lose context or ownership.",
    focus: "Capture lead source, notes, and next steps together.",
    focusAlt: "Classify leads by channel, owner, and qualification stage.",
  }),
  dashboard: sub({
    slug: "dashboard",
    title: "Dashboard",
    parent: "analytics",
    description: "Monitor live operational metrics across service, work, and sales activity.",
    heroTitle: (
      <>
        Dashboards that show what
        <br />
        needs attention now.
      </>
    ),
    heroDescription:
      "Give teams live views of performance so they can spot trends, prioritize work, and respond before issues grow.",
    focus: "Capture the metrics, filters, and views each team needs.",
    focusAlt: "Organize dashboards by team, KPI, and reporting period.",
  }),
  "power-bi": sub({
    slug: "power-bi",
    title: "Power BI",
    parent: "analytics",
    description: "Extend operational reporting with deeper Power BI analysis.",
    heroTitle: (
      <>
        Deeper reporting with Power BI
        <br />
        connected to your operations.
      </>
    ),
    heroDescription:
      "Bring CWIT EMS activity into Power BI so analysts and leaders can explore trends with richer models and reports.",
    focus: "Connect operational datasets and report definitions together.",
    focusAlt: "Organize Power BI views by domain, audience, and refresh needs.",
  }),
  permissions: sub({
    slug: "permissions",
    title: "Permissions",
    parent: "governance",
    description: "Control who can view, edit, and approve work across the platform.",
    heroTitle: (
      <>
        Permissions that match how your
        <br />
        organization actually works.
      </>
    ),
    heroDescription:
      "Define role-based access so teams get the tools they need while sensitive actions stay protected.",
    focus: "Capture roles, access levels, and exceptions in one place.",
    focusAlt: "Classify permissions by role, team, and resource type.",
  }),
  approvals: sub({
    slug: "approvals",
    title: "Approvals",
    parent: "governance",
    description: "Route requests through multi-level approval flows with full visibility.",
    heroTitle: (
      <>
        Approvals that move decisions
        <br />
        forward with clear ownership.
      </>
    ),
    heroDescription:
      "Send requests through the right approvers, track status, and keep an auditable record of every decision.",
    focus: "Capture approval requests, comments, and outcomes together.",
    focusAlt: "Organize approvals by type, level, and owning team.",
  }),
  "policy-docs": sub({
    slug: "policy-docs",
    title: "Policy Docs",
    parent: "governance",
    description: "Distribute policies and track acknowledgements across the organization.",
    heroTitle: (
      <>
        Policies shared, acknowledged,
        <br />
        and easy to audit.
      </>
    ),
    heroDescription:
      "Publish policy documents, request acknowledgements, and keep compliance records visible for every team.",
    focus: "Capture policy versions, audiences, and acknowledgement status.",
    focusAlt: "Organize policies by department, risk level, and review cycle.",
  }),
  "org-hierarchy": sub({
    slug: "org-hierarchy",
    title: "Org Hierarchy",
    parent: "governance",
    description: "Model teams, reporting lines, and ownership across the business.",
    heroTitle: (
      <>
        An organization structure that
        <br />
        keeps ownership clear.
      </>
    ),
    heroDescription:
      "Define hierarchy and reporting relationships so approvals, routing, and access follow how your business is built.",
    focus: "Capture teams, managers, and reporting relationships together.",
    focusAlt: "Organize hierarchy by division, function, and location.",
  }),
  kyc: sub({
    slug: "kyc",
    title: "KYC",
    parent: "governance",
    description: "Track KYC checks and risk monitoring with clear evidence and status.",
    heroTitle: (
      <>
        KYC and risk checks, tracked
        <br />
        with complete evidence.
      </>
    ),
    heroDescription:
      "Manage KYC requests, supporting documents, and review status so compliance teams can move quickly with confidence.",
    focus: "Capture KYC submissions, documents, and review notes together.",
    focusAlt: "Organize KYC cases by risk level, owner, and review stage.",
  }),
  "api-bank": sub({
    slug: "api-bank",
    title: "API Bank",
    parent: "governance",
    description: "Govern integrations and API access with clear ownership and controls.",
    heroTitle: (
      <>
        API access governed from one
        <br />
        controlled workspace.
      </>
    ),
    heroDescription:
      "Manage API credentials, ownership, and usage policies so integrations stay secure and accountable.",
    focus: "Capture API credentials, owners, and usage policies together.",
    focusAlt: "Organize APIs by system, owner, and access level.",
  }),
};

export const customerServiceChildren = ["tickets", "chat-whatsapp", "calls-campaigns"];

export function productPageHref(slug: string) {
  const sub = productSubcategories[slug];
  if (sub) return `/products/${sub.parent}/${slug}`;
  if (slug === "tickets") return "/products/customer-service/tickets";
  if (productCategories[slug] || slug === "customer-service") return `/products/${slug}`;
  return `/products/${slug}`;
}

export function getProductPage(slug: string) {
  if (productCategories[slug]) return productCategories[slug];
  if (productSubcategories[slug]) return productSubcategories[slug];
  return null;
}

export function getProductPageForParent(parent: string, slug: string) {
  if (slug === "tickets" && parent === "customer-service") return null; // static tickets page
  const page = productSubcategories[slug];
  if (!page || page.parent !== parent) return null;
  return page;
}

export function allProductSlugsForParent(parent: string) {
  if (parent === "customer-service") {
    return customerServiceChildren.filter((slug) => slug !== "tickets");
  }
  const category = productCategories[parent];
  return category?.children ?? [];
}

export function getSiblingModules(slug: string) {
  const subPage = productSubcategories[slug];
  if (subPage) {
    if (subPage.parent === "customer-service") {
      return [
        {
          id: "tickets",
          label: "Tickets",
          href: productPageHref("tickets"),
          image: { src: "/figma/cs-tickets.png", alt: "Tickets", width: 471, height: 298 },
        },
        { id: "chat-whatsapp", label: "Chat & WhatsApp", href: productPageHref("chat-whatsapp"), image: ticketRoute },
        { id: "calls-campaigns", label: "Calls & Campaigns", href: productPageHref("calls-campaigns"), image: create },
      ].filter((item) => item.id !== slug);
    }
    const parent = productCategories[subPage.parent];
    if (!parent) return [];
    return parent.children
      .filter((child) => child !== slug)
      .map((child) => {
        const page = productSubcategories[child];
        return {
          id: child,
          label: page?.menuTitle ?? page?.title ?? child,
          href: productPageHref(child),
          image: page?.heroImage ?? studio,
        };
      });
  }

  // Category modules (including customer-service static page calling with synthetic siblings)
  if (slug === "customer-service") {
    return [
      {
        id: "tickets",
        label: "Tickets",
        href: productPageHref("tickets"),
        image: { src: "/figma/cs-tickets.png", alt: "Tickets", width: 471, height: 298 },
      },
      { id: "chat-whatsapp", label: "Chat & WhatsApp", href: productPageHref("chat-whatsapp"), image: ticketRoute },
      { id: "calls-campaigns", label: "Calls & Campaigns", href: productPageHref("calls-campaigns"), image: create },
    ];
  }

  const category = productCategories[slug];
  if (!category) return [];
  return category.children.map((child) => {
    const page = productSubcategories[child];
    return {
      id: child,
      label: page?.menuTitle ?? page?.title ?? child,
      href: productPageHref(child),
      image: page?.heroImage ?? studio,
      active: false,
    };
  });
}

export function allCategorySlugs() {
  return [...Object.keys(productCategories)];
}

export function allProductSlugs() {
  return [...Object.keys(productCategories), ...Object.keys(productSubcategories), "tickets"];
}
