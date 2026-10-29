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
  highlightItems?: { label: string; title: string; body: string }[];
  experienceTitle?: string;
  workflowTitle?: string;
  insightsTitle?: string;
  connectedDescription?: string;
  connectedPoints?: (string | { title: string; body: string })[];
  ctaTitle?: string;
  ctaDescription?: string;
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
    body: "Manage meter-related inquiries, service interruptions, field requests, and customer updates in a connected workflow. Track ownership, response times, and resolution progress from intake to closure.",
    image: "/figma/by-industry-1.png",
    imageAlt: "Utilities workspace",
    width: 706,
    height: 234,
  },
  {
    id: "banking-financial",
    title: "Banking & Financial Services",
    body: "Bring customer support, internal requests, approvals, and risk-related reviews into a more traceable process. Give teams the case context and oversight needed for sensitive operations.",
    image: "/figma/by-industry-2.png",
    imageAlt: "Banking and Financial Services workspace",
    width: 706,
    height: 234,
  },
  {
    id: "bpo-outsourcing",
    title: "BPO & Outsourcing",
    body: "Coordinate high-volume conversations and multiple service teams with shared queues, clear assignments, and measurable service outcomes. Maintain visibility across accounts and daily operations.",
    image: "/figma/by-industry-3.png",
    imageAlt: "BPO and Outsourcing workspace",
    width: 706,
    height: 234,
  },
  {
    id: "government",
    title: "Government",
    body: "Organize citizen requests, department handoffs, approvals, and policy documentation with clearer accountability. Keep case progress and decision history accessible to authorized teams.",
    image: "/figma/by-industry-4.png",
    imageAlt: "Government workspace",
    width: 706,
    height: 234,
  },
  {
    id: "telecom",
    title: "Telecom",
    body: "Connect customer conversations, technical issues, escalations, and service follow-ups. Help support and operations teams work from consistent records and respond with better context.",
    image: "/figma/by-industry-5.png",
    imageAlt: "Telecom workspace",
    width: 706,
    height: 234,
  },
  {
    id: "professional-services",
    title: "Professional Services",
    body: "Coordinate client requests, project tasks, approvals, and time tracking in one workspace. Give delivery teams a clearer picture of commitments, progress, and work completed.",
    image: "/figma/by-industry-6.png",
    imageAlt: "Professional Services workspace",
    width: 706,
    height: 234,
  },
  {
    id: "construction",
    title: "Construction",
    body: "Keep project coordination, task ownership, workforce activity, and approvals in view. Track requests and milestones across teams to reduce disconnected updates and missed handoffs.",
    image: "/figma/by-industry-7.png",
    imageAlt: "Construction workspace",
    width: 706,
    height: 234,
  },
];

export const byRoleCards: IndustryCatalogCard[] = [
  card("support-agents", "Support Agents", "Handle customer requests with conversation history, contact details, priorities, and next actions together. Spend less time switching screens and more time resolving issues.", 0),
  card("team-leaders", "Team Leaders", "Monitor open work, review assignments, spot overdue items, and support agents before delays become escalations. Keep the team coordinated throughout the day.", 1),
  card("operations-managers", "Operations Managers", "Oversee projects, service workflows, resource allocation, and cross-team dependencies. Track operational progress and address gaps with clearer accountability.", 2),
  card("hr-workforce", "HR & Workforce", "Bring attendance, shifts, timesheets, and employee activities into a more organized view. Make workforce coordination easier while keeping essential records accessible.", 3),
  card("finance", "Finance", "Follow approvals, related work records, and operational activities with clearer ownership and traceability. Support reviews with more consistent information across teams.", 4),
  card("compliance-risk", "Compliance & Risk", "Manage policy acknowledgements, permissions, reviews, and approval trails with better visibility. Make it easier to find the records needed for internal oversight.", 0),
  card("it-administration", "IT & Administration", "Manage user access, roles, permissions, and platform settings from a controlled workspace. Support teams while maintaining a clear administrative structure.", 1),
  card("executives", "Executives", "View organizational performance, service priorities, and areas needing attention without digging through individual workflows. Turn connected information into better strategic decisions.", 2),
];

export const useCaseCards: IndustryCatalogCard[] = [
  card("omnichannel-ticketing", "Omnichannel Ticketing", "Bring service requests from different channels into one ticket workspace. Track conversations, ownership, status, and resolution without losing the history behind each issue.", 0),
  card("whatsapp-chat-support", "WhatsApp & Chat Support", "Manage WhatsApp and chat conversations alongside your service workflows. Give agents the context they need to respond quickly and keep every interaction organized.", 1),
  card("outbound-campaigns", "Outbound Campaigns", "Plan and manage outbound conversations with clearer campaign activity, follow-ups, and customer records. Keep outreach connected to the teams responsible for next steps.", 2),
  card("lead-to-opportunity", "Lead to Opportunity", "Move potential customers from initial interest to qualified opportunities. Capture interactions, manage follow-ups, and maintain visibility as conversations progress.", 3),
  card("billable-time-cost", "Billable Time & Cost", "Record time spent on work and connect effort to the relevant tasks and projects. Give teams a clearer basis for reviewing costs and billable activity.", 4),
  card("attendance-shifts-cost", "Attendance, Shifts & Cost", "Keep attendance and shift information in one place. Understand team availability and working time while connecting workforce activity with operational oversight.", 0),
  card("multi-level-approvals", "Multi-Level Approvals", "Route requests through the right decision-makers with defined approval steps. Make responsibilities, decisions, and the status of each request easier to follow.", 1),
  card("policy-acknowledgement", "Policy Acknowledgement", "Share organizational policies and keep acknowledgement records organized. Help teams understand what requires their attention and provide visibility into completion.", 2),
  card("kyc-risk-monitoring", "KYC & Risk Monitoring", "Organize identity verification, risk reviews, and supporting evidence within a controlled process. Keep checks and review outcomes easier to track and revisit.", 3),
  card("replace-your-stack", "Replace Your Stack", "Reduce the need to switch between disconnected tools. Bring customer service, work management, CRM, analytics, and governance into a more connected operational workspace.", 4),
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
    heroTitle: "Keep utility services connected, from request to resolution.",
    heroDescription:
      "Bring customer enquiries, service requests, field coordination, approvals, and operational updates into one connected workspace. NextGen helps utility teams maintain context, assign responsibility, and keep work moving across departments.",
    highlightTitle: "Complex utility operations. One clearer way to manage them.",
    highlightDescription:
      "Utility providers handle high volumes of service enquiries while coordinating people, processes, and reporting. NextGen connects those activities so teams can work with clearer ownership, fewer handoffs, and a shared view of progress.",
    highlightItems: [
      { label: "01", title: "Workforce Operations", body: "Coordinate staff assignments, schedules, tasks, and service responsibilities across teams and locations." },
      { label: "02", title: "Workflow Automation", body: "Use structured routing, reminders, and approvals to reduce repetitive coordination and keep requests progressing." },
      { label: "03", title: "Operational Intelligence", body: "Bring service activity, workload, and performance reporting together to identify delays and support informed decisions." },
    ],
    experienceTitle: "Give every utility customer a more connected service experience.",
    experienceBody:
      "Keep enquiries, complaints, and service requests linked to their communication history. Teams can respond with the right context, follow open issues, and provide more consistent updates without searching across disconnected tools.",
    workflowTitle: "Move service requests through clear, accountable workflows.",
    workflowBody:
      "Route requests to the right department, set priorities, define next steps, and track progress from intake to completion. Shared workflows help customer support, back-office teams, and field operations coordinate without losing ownership.",
    insightsTitle: "See what is happening across your utility operations.",
    insightsBody:
      "Use connected dashboards and reports to understand request volumes, response times, outstanding work, and team workload. Spot recurring service issues, review operational trends, and focus attention where action is needed.",
    connectedTitle: "Connect the teams and processes behind reliable utility service.",
    connectedDescription: "Give customer service, operations, and management a consistent view of work in progress. NextGen supports connected service delivery through:",
    connectedPoints: [
      { title: "Customer request visibility", body: "Keep customer interactions and service histories accessible in one place." },
      { title: "Structured coordination", body: "Assign work, route requests, and clarify responsibility between departments." },
      { title: "Shared team context", body: "Keep updates, discussions, and next steps linked to the relevant request." },
      { title: "Performance reporting", body: "Track activity, queues, and service progress with dashboards and reports." },
      { title: "Governance and accountability", body: "Support permissions, approvals, and traceable operational records." },
    ],
    ctaTitle: "Build a more connected way to deliver utility services.",
    ctaDescription: "Bring customer service, work management, reporting, and governance together in a workspace designed to keep utility teams informed, aligned, and accountable from the first request to the final outcome.",
    heroImage: heroBanner,
    experienceImage: { src: "/figma/utilities-1.png", alt: "Utility customer conversations across channels", width: 719, height: 474 },
    workflowImage: { src: "/figma/utilities-2.png", alt: "Utility service request workflow", width: 719, height: 474 },
    insightsImage: { src: "/figma/utilities-3.png", alt: "Utility performance dashboard", width: 719, height: 474 },
    connectedImage: { src: "/figma/connected-utility.png", alt: "Connected utility operations overview", width: 815, height: 537 },
  },
  "banking-financial": {
    ...vertical(
      "banking-financial",
      "Banking & Financial Services",
      "banking",
      "Give banking and financial services teams one connected place to manage customer requests, coordinate internal work, and track the decisions that matter. NextGen brings conversations, ownership, and operational oversight into a clearer daily workflow.",
    ),
    heroTitle: "Bring banking service, approvals, and operations together",
    highlightTitle: "Complex banking operations deserve a simpler way to work",
    highlightDescription: "Customer requests, reviews, approvals, and internal handoffs should not disappear across disconnected tools. NextGen helps teams organize the work, understand who is responsible, and maintain visibility as each request moves forward.",
    highlightItems: [
      { label: "01", title: "Workforce Operations", body: "Coordinate teams, assignments, schedules, and operational activities with clear responsibilities across service and back-office functions." },
      { label: "02", title: "Workflow Automation", body: "Structure repetitive requests, reviews, and approval steps to reduce manual coordination and keep work moving between departments." },
      { label: "03", title: "Operational Intelligence", body: "Bring activity, workload, and performance information into dashboards and reports that support timely operational decisions." },
    ],
    experienceTitle: "Serve customers with more context at every touchpoint",
    experienceBody: "Keep customer conversations and service requests connected to the work behind them. From an initial inquiry to a complex case requiring internal review, teams can follow the history, coordinate next steps, and respond with greater consistency.",
    workflowTitle: "Move requests forward with accountable workflows",
    workflowBody: "Route work to the right team, assign owners, and coordinate reviews and approvals through a shared process. Give customer service, operations, and compliance teams a clearer picture of what is pending, what has progressed, and where attention is needed.",
    insightsTitle: "Turn everyday activity into clearer operational decisions",
    insightsBody: "Monitor request volumes, open work, response times, and team activity from a connected view. Use dashboards and reports to identify bottlenecks, review performance trends, and prioritize improvements across banking service operations.",
    connectedTitle: "Keep banking teams aligned from request to resolution",
    connectedDescription: "Connect customer-facing work with the people, processes, and information needed to complete it. NextGen supports a more consistent operating model without losing sight of individual responsibilities.",
    connectedPoints: [
      { title: "Connected customer context", body: "Keep conversations, service histories, and related tasks together so teams can work from shared information." },
      { title: "Structured reviews and approvals", body: "Make approval stages, ownership, and next actions visible across departments." },
      { title: "Cross-team coordination", body: "Link customer service, operational teams, and internal stakeholders around the same work." },
      { title: "Performance visibility", body: "Track queues, workloads, and progress through reports and operational dashboards." },
      { title: "Governance and accountability", body: "Support access controls, recorded activities, and clear decision ownership within everyday workflows." },
    ],
    ctaTitle: "Build more connected banking operations",
    ctaDescription: "Bring customer service, internal workflows, CRM, analytics, and governance into one operational workspace. Help teams manage requests with better context, clearer ownership, and the visibility they need to keep service moving.",
  },
  "bpo-outsourcing": {
    ...vertical(
      "bpo-outsourcing",
      "BPO & Outsourcing",
      "BPO",
      "Bring customer conversations, agent workflows, and operational reporting into one connected workspace. NextGen helps BPO & Outsourcing teams manage service delivery across clients, channels, and teams with clear ownership and greater control.",
    ),
    heroTitle: "Run high-volume BPO operations with less complexity",
    highlightTitle: "One workspace for every moving part of BPO operations",
    highlightDescription: "Large service teams need more than disconnected inboxes and spreadsheets. NextGen brings customer requests, workforce coordination, approvals, and performance visibility together so teams can work consistently as volumes grow.",
    highlightItems: [
      { label: "01", title: "Workforce Operations", body: "Coordinate agent assignments, schedules, and daily activities while keeping managers informed about team capacity and work in progress." },
      { label: "02", title: "Workflow Automation", body: "Use structured routing, approvals, and repeatable processes to reduce manual handling and keep work moving between teams." },
      { label: "03", title: "Operational Intelligence", body: "Track service volumes, workforce activity, and operational performance through connected dashboards and reports." },
    ],
    experienceTitle: "Deliver consistent service across every customer channel",
    experienceBody: "Give agents the conversation history and customer context they need to respond with confidence. Keep requests organized across supported channels, maintain continuity during handoffs, and help clients receive reliable service at every interaction.",
    workflowTitle: "Turn complex service processes into coordinated workflows",
    workflowBody: "Route incoming work to the right teams, define ownership, and keep updates visible from start to resolution. Connected tasks, approvals, and escalations help reduce unnecessary follow-ups and make service delivery easier to manage.",
    insightsTitle: "Make performance visible across teams and clients",
    insightsBody: "Bring workload, response activity, resolution progress, and operational trends into connected dashboards and reports. Help supervisors identify bottlenecks, monitor service expectations, and make informed decisions using the information already captured in daily work.",
    connectedTitle: "Keep every BPO operation connected and accountable",
    connectedDescription: "Support a more consistent operating model by connecting the people, processes, and information behind service delivery.",
    connectedPoints: [
      { title: "Connected customer context", body: "Keep requests, interactions, and customer histories accessible to the teams handling them." },
      { title: "Consistent workflow ownership", body: "Make responsibility, handoffs, and escalation paths clear across every stage of service." },
      { title: "Better team coordination", body: "Connect agents, team leaders, and managers around shared priorities and work updates." },
      { title: "Actionable performance visibility", body: "Monitor queues, productivity, and resolution trends to identify where attention is needed." },
      { title: "Greater process accountability", body: "Maintain a clearer record of approvals, decisions, and progress across operations." },
    ],
    ctaTitle: "Build a smarter way to manage BPO & Outsourcing",
    ctaDescription: "Connect customer service, work management, CRM, analytics, and governance in one workspace. Give agents, team leaders, and operations managers a clearer way to coordinate work and deliver dependable service.",
  },
  government: {
    ...vertical(
      "government",
      "Government",
      "government",
      "Bring citizen requests, departmental workflows, approvals, and service updates into one connected workspace. NextGen helps government teams coordinate responsibilities, maintain visibility, and deliver more consistent public services.",
    ),
    heroTitle: "Government services that work together, from request to resolution",
    highlightTitle: "Less administrative complexity. More connected government services.",
    highlightDescription: "Public sector operations involve multiple departments, approval steps, and accountability requirements. NextGen brings people, processes, and operational information together so teams can coordinate their work without losing control or visibility.",
    highlightItems: [
      { label: "01", title: "Workforce Operations", body: "Coordinate employees, responsibilities, schedules, and departmental activities from a shared workspace with clear ownership." },
      { label: "02", title: "Workflow Automation", body: "Standardize recurring requests, reviews, and approval paths so teams can reduce manual handoffs while keeping decisions traceable." },
      { label: "03", title: "Operational Intelligence", body: "Bring service activity, workload, and progress into dashboards and reports that help leaders identify delays and improve delivery." },
    ],
    experienceTitle: "Make every citizen interaction easier to manage",
    experienceBody: "Keep service requests, conversations, updates, and internal follow-ups connected to the same record. Teams can understand what has happened, who is responsible, and what comes next without searching across disconnected channels.",
    workflowTitle: "Move requests through departments with clarity",
    workflowBody: "Route incoming work to the right teams, establish review and approval steps, and track each request through completion. Clear assignments and visible progress help departments collaborate while maintaining an accountable record of activity.",
    insightsTitle: "Turn service activity into informed decisions",
    insightsBody: "Understand request volumes, response patterns, outstanding work, and team performance from connected reporting. Give managers the information they need to prioritize resources, address bottlenecks, and improve service delivery.",
    connectedTitle: "Connected operations for modern government organizations",
    connectedDescription: "Give public service teams a more consistent way to manage requests, coordinate internal work, and demonstrate accountability.",
    connectedPoints: [
      { title: "Centralized request management", body: "Keep citizen enquiries, service cases, and related communication organized in one place." },
      { title: "Structured approvals", body: "Make reviews and decisions easier to follow with defined responsibilities and approval paths." },
      { title: "Cross-department collaboration", body: "Connect departments through shared records, clear assignments, and visible handoffs." },
      { title: "Operational reporting", body: "Track work in progress, service outcomes, and emerging issues through dashboards and reports." },
      { title: "Governance and accountability", body: "Support controlled access, traceable activity, and consistent handling of internal processes." },
    ],
    ctaTitle: "Build more connected government services",
    ctaDescription: "Bring customer service, work management, CRM, analytics, and governance into one coordinated platform. NextGen helps government organizations simplify operations, improve transparency, and keep teams aligned around better service delivery.",
  },
  telecom: {
    ...vertical(
      "telecom",
      "Telecom",
      "telecom",
      "Bring customer conversations, service requests, and operational workflows together in CWIT EMS. Give teams the context and visibility to respond faster, coordinate across departments, and keep customers informed.",
    ),
    heroTitle: "Keep every telecom interaction connected, from request to resolution.",
    highlightTitle: "Telecom operations move fast. Your teams need a clearer way to keep up.",
    highlightDescription: "Manage high volumes of inquiries, service issues, and internal tasks in one connected workspace. CWIT EMS helps telecom teams maintain ownership, reduce manual handoffs, and see progress across their operations.",
    highlightItems: [
      { label: "01", title: "Workforce Operations", body: "Coordinate agents, departments, assignments, and schedules so teams know what needs attention and who owns the next step." },
      { label: "02", title: "Workflow Automation", body: "Route incoming requests, trigger follow-ups, and standardize recurring processes without relying on disconnected manual steps." },
      { label: "03", title: "Operational Intelligence", body: "Track workload, response times, service trends, and team activity through dashboards and reports that support timely decisions." },
    ],
    experienceTitle: "Resolve customer issues with the full conversation in view.",
    experienceBody: "Keep customer conversations and service histories connected across supported channels. Agents can understand previous interactions, manage requests, and coordinate next steps without repeatedly asking customers for the same information.",
    workflowTitle: "Turn complex service requests into accountable workflows.",
    workflowBody: "From the first customer report to internal investigation and resolution, organize work with defined ownership, priorities, and status tracking. Help support, technical, and operations teams move requests forward with fewer missed handoffs.",
    insightsTitle: "See service performance clearly and act on what matters.",
    insightsBody: "Understand where requests are building up, which teams need support, and how efficiently issues are being handled. Connected dashboards and reporting make it easier to identify recurring problems and improve service delivery.",
    connectedTitle: "Connect customer service and internal operations in one workspace.",
    connectedDescription: "Give telecom teams a common place to manage customer interactions, assigned work, and operational progress with clearer responsibility and shared visibility.",
    connectedPoints: [
      "Keep customer requests and conversation history connected.",
      "Coordinate support and operations teams around shared tasks.",
      "Route and monitor service requests with clear ownership.",
      "Use dashboards to review workloads, trends, and outcomes.",
      "Maintain accessible records of updates, actions, and handoffs.",
    ],
    ctaTitle: "Make telecom service operations easier to manage, together.",
    ctaDescription: "CWIT EMS brings customer service, work management, CRM, analytics, and governance into one connected workspace. Support more coordinated teams, more consistent service, and better visibility across daily operations.",
  },
  "professional-services": {
    ...vertical(
      "professional-services",
      "Professional Services",
      "professional services",
      "Keep client conversations, projects, assignments, approvals, and delivery updates connected. NextGen helps professional services teams coordinate work across departments without losing sight of deadlines, responsibilities, or client expectations.",
    ),
    heroTitle: "Bring client service and delivery together in one workspace",
    highlightTitle: "Less time coordinating. More time delivering.",
    highlightDescription: "Client expectations, internal handoffs, and complex delivery schedules should not slow your team down. Bring essential workflows and operational information into one connected environment so everyone knows what needs attention and who is responsible.",
    highlightItems: [
      { label: "01", title: "Workforce Operations", body: "Coordinate teams, assign responsibilities, and keep schedules and day-to-day workloads visible across projects and client engagements." },
      { label: "02", title: "Workflow Automation", body: "Bring consistency to requests, reviews, and approvals with structured workflows that reduce manual follow-ups and missed handoffs." },
      { label: "03", title: "Operational Intelligence", body: "See workload, task progress, service performance, and operational trends through connected dashboards and reporting." },
    ],
    experienceTitle: "Make every client interaction count",
    experienceBody: "Give teams a clearer view of client requests, conversations, and service history in one place. From the first enquiry to ongoing delivery, maintain context, assign the right people, and respond with greater consistency across channels.",
    workflowTitle: "Keep projects, people, and approvals moving",
    workflowBody: "Replace fragmented updates with a clear path from incoming requests to assigned work, internal reviews, and completed deliverables. Teams can track progress, manage dependencies, and keep stakeholders informed without switching between disconnected tools.",
    insightsTitle: "Turn operational visibility into better decisions",
    insightsBody: "Understand where work is progressing, where delays are developing, and how team capacity is being used. Connected dashboards and reports help leaders monitor delivery, identify bottlenecks, and make informed improvements.",
    connectedTitle: "One connected view of professional services operations",
    connectedDescription: "Bring the people, processes, and information behind service delivery into a more accountable workspace.",
    connectedPoints: [
      { title: "Client communication", body: "Keep requests, responses, and related conversations connected to the right client records." },
      { title: "Work coordination", body: "Organize projects, tasks, owners, and deadlines so delivery teams stay aligned." },
      { title: "Structured approvals", body: "Route decisions to the right reviewers and retain visibility into approval progress." },
      { title: "Performance tracking", body: "Follow service activity, workload, and delivery outcomes through shared reporting." },
      { title: "Operational accountability", body: "Make responsibilities and workflow history easier to review across teams." },
    ],
    ctaTitle: "Build a better way to deliver professional services",
    ctaDescription: "Connect client communication with work management, CRM, reporting, and governance in one platform. Give your teams the clarity they need to serve clients well and deliver work with confidence.",
  },
  construction: {
    ...vertical(
      "construction",
      "Construction",
      "construction",
      "Bring projects, tasks, approvals, and day-to-day operations into one organized workspace. NextGen helps construction teams coordinate responsibilities, track progress, and keep important decisions visible from planning through delivery.",
    ),
    heroTitle: "Keep construction projects moving, with every team connected.",
    highlightTitle: "Less operational complexity. More control over every project.",
    highlightDescription: "When site teams, office staff, and managers work across disconnected tools, details get missed and decisions slow down. NextGen brings coordination, accountability, and operational information together so work can move forward with greater clarity.",
    highlightItems: [
      { label: "01", title: "Workforce Operations", body: "Coordinate people, assignments, schedules, and project activity in one place, so teams know who is responsible for what and when work is due." },
      { label: "02", title: "Workflow Automation", body: "Standardize routine requests, reviews, and approvals with clearly defined steps that reduce follow-up and help prevent bottlenecks." },
      { label: "03", title: "Operational Intelligence", body: "See project activity, overdue tasks, outstanding approvals, and team performance through connected dashboards and reports." },
    ],
    experienceTitle: "Keep clients, contractors, and internal teams informed.",
    experienceBody: "Manage questions, service requests, and project-related conversations with consistent ownership and a complete interaction history. Connect communication to the work behind it so teams can respond with the right context and follow through on commitments.",
    workflowTitle: "Bring every approval and handoff into a clear workflow.",
    workflowBody: "From project requests and internal reviews to task assignments and approvals, NextGen helps teams follow a consistent process. Route work to the right people, make responsibilities clear, and maintain a record of decisions as activities move between departments.",
    insightsTitle: "See what is progressing—and what needs attention.",
    insightsBody: "Monitor pending approvals, overdue assignments, workload, and operational trends without piecing together updates from separate systems. Connected reporting helps managers identify delays earlier, prioritize action, and make better-informed decisions.",
    connectedTitle: "Connected operations for modern construction organizations",
    connectedDescription: "Make complex project coordination easier with a shared view of teams, work, decisions, and performance. Give every department the visibility it needs while maintaining clear accountability across projects.",
    connectedPoints: [
      { title: "Customer and stakeholder visibility", body: "Keep requests, conversations, and updates connected to the relevant people and work." },
      { title: "Structured workflows and approvals", body: "Move internal reviews, decisions, and handoffs through defined stages with clear ownership." },
      { title: "Team coordination", body: "Align office and operational teams around assignments, schedules, and priorities." },
      { title: "Performance monitoring", body: "Use dashboards and reports to track overdue work, outstanding approvals, and progress." },
      { title: "Governance and accountability", body: "Maintain traceable actions, defined permissions, and a record of important decisions." },
    ],
    ctaTitle: "A better way to keep construction operations connected.",
    ctaDescription: "From everyday coordination to project oversight, NextGen brings tasks, communications, approvals, and insights into one workspace. Help your teams spend less time chasing updates and more time moving projects forward.",
  },

  "support-agents": {
    ...vertical(
      "support-agents",
      "Support Agents",
      "support agent",
      "Bring customer conversations, ticket history, assignments and guided workflows into one connected workspace. Help agents respond confidently, coordinate handoffs and keep every request moving toward resolution.",
      "by-role",
    ),
    heroTitle: "Give every support agent the context to resolve more",
    highlightTitle: "Support agents have enough to manage. Their tools should make it easier.",
    highlightDescription: "Switching between conversations, searching for customer details and chasing updates slows support down. NextGen connects the information and workflows agents need so they can spend less time finding answers and more time helping customers.",
    highlightItems: [
      { label: "01", title: "Workforce Operations", body: "Coordinate assigned tickets, daily tasks and handoffs with clear ownership, status and priorities in one workspace." },
      { label: "02", title: "Workflow Automation", body: "Move requests through consistent steps with routing, reminders and follow-ups that reduce manual coordination." },
      { label: "03", title: "Operational Intelligence", body: "See queue activity, response performance and unresolved issues so agents and team leads know what needs attention." },
    ],
    experienceTitle: "Deliver consistent support across every conversation",
    experienceBody: "Give agents a connected view of requests, customer context and previous interactions across supported communication channels. They can pick up the conversation with the right information, avoid asking customers to repeat themselves and provide more consistent answers.",
    workflowTitle: "Move from customer request to resolution without losing context",
    workflowBody: "Turn incoming conversations into trackable requests, assign the right owner and maintain a clear history of replies, notes and actions. Shared workflows help agents collaborate across departments while keeping customers informed about progress.",
    insightsTitle: "Know what is waiting, what is overdue and what is resolved",
    insightsBody: "Make individual workloads and service performance easier to understand. Track open requests, response and resolution activity, and pending follow-ups through connected dashboards and reporting so agents can prioritize the work that matters most.",
    connectedTitle: "Connected operations for modern support agent organizations",
    connectedDescription: "Give frontline teams a dependable way to handle customer requests while maintaining visibility, accountability and continuity across the service operation.",
    connectedPoints: [
      "Handle customer conversations and tickets in a shared workspace.",
      "Route requests, coordinate ownership and follow-ups through consistent workflows.",
      "Keep customer details, replies and ticket history available in context.",
      "Track queue status and response performance through dashboards and reports.",
      "Maintain access controls and an auditable record of operational activity.",
    ],
    ctaTitle: "Give support agents a better way to work",
    ctaDescription: "NextGen brings customer service, work management, CRM, analytics and governance into one connected platform—helping support agents stay organized, resolve requests and deliver a more consistent customer experience.",
  },
  "team-leaders": {
    ...vertical(
      "team-leaders",
      "Team Leaders",
      "team leader",
      "Give team leaders one connected view of agent workloads, customer conversations, ticket priorities, and service performance. Spot issues earlier, guide your agents, and keep daily operations moving.",
      "by-role",
    ),
    heroTitle: "Lead your team with clarity, confidence, and control",
    highlightTitle: "Less time chasing updates. More time leading your team.",
    highlightDescription: "Bring assignments, escalations, workflow activity, and operational reporting together so supervisors can make informed decisions without switching between disconnected tools.",
    highlightItems: [
      { label: "01", title: "Workforce Operations", body: "Keep track of who is handling what, balance assignments across agents, and identify bottlenecks before they affect service." },
      { label: "02", title: "Workflow Automation", body: "Use structured routing, notifications, and escalation processes to reduce repetitive coordination and keep requests moving." },
      { label: "03", title: "Operational Intelligence", body: "Review queue activity, response performance, and team workloads in one place to decide where support is needed most." },
    ],
    experienceTitle: "Give every agent the context to deliver better service",
    experienceBody: "Help agents manage conversations across channels with access to customer history, ticket details, and previous interactions. Team leaders can follow difficult cases, coordinate handoffs, and support consistent responses.",
    workflowTitle: "Keep assignments, escalations, and follow-ups on track",
    workflowBody: "Manage work through clear ownership and visible next steps. Route requests to the right agent or department, follow escalation progress, and reduce missed follow-ups with a shared operational workflow.",
    insightsTitle: "Turn team activity into coaching opportunities",
    insightsBody: "View ticket volume, resolution progress, pending work, and service trends through connected dashboards and reports. Recognize where agents excel and identify coaching needs using the context behind performance metrics.",
    connectedTitle: "A clearer way to supervise customer service operations",
    connectedDescription: "Keep teams aligned through a connected workspace that supports daily decisions and accountability.",
    connectedPoints: [
      { title: "Understand live workloads", body: "Monitor assigned, pending, and overdue work so you can redistribute tasks when demand changes." },
      { title: "Guide escalations", body: "Track urgent cases and handoffs with clear ownership and status visibility." },
      { title: "Coordinate across departments", body: "Keep internal teams informed as customer requests move between people and functions." },
      { title: "Review meaningful performance", body: "Use dashboards and reports to identify trends in throughput, responsiveness, and unresolved work." },
      { title: "Maintain accountability", body: "Keep relevant actions, updates, and ownership history visible for review and follow-up." },
    ],
    ctaTitle: "Give team leaders a better way to run service operations",
    ctaDescription: "Connect people, customer conversations, workloads, and performance information in one workspace. Help supervisors spend less time gathering updates and more time supporting their teams and customers.",
  },
  "operations-managers": {
    ...vertical(
      "operations-managers",
      "Operations Managers",
      "operations",
      "Bring customer service, workforce coordination, and day-to-day processes into a connected workspace. Give operations managers the visibility to manage assignments, follow progress, and act on issues before they slow teams down.",
      "by-role",
    ),
    heroTitle: "Keep Service, Teams, and Work Moving Together",
    highlightTitle: "Less Time Chasing Updates. More Time Improving Operations.",
    highlightDescription: "When customer requests, team workloads, and internal approvals are managed separately, it is difficult to see what needs attention. NextGen brings everyday operations into a shared view, helping managers coordinate work, maintain accountability, and make informed decisions.",
    highlightItems: [
      { label: "01", title: "Workforce Operations", body: "Coordinate assignments, team schedules, attendance, and daily activities with a clearer picture of who is responsible for what." },
      { label: "02", title: "Workflow Automation", body: "Organize repeatable processes and route work through defined steps, helping teams reduce manual handoffs and missed follow-ups." },
      { label: "03", title: "Operational Intelligence", body: "Use connected dashboards, reports, and activity information to spot workload trends, bottlenecks, and areas for improvement." },
    ],
    experienceTitle: "Give Service Teams the Context to Respond with Confidence",
    experienceBody: "Keep customer conversations, tickets, and follow-ups connected so managers can understand what is happening across service channels. Help teams maintain continuity, resolve issues more consistently, and reduce the need to piece together information from different tools.",
    workflowTitle: "Turn Disconnected Processes into Coordinated Work",
    workflowBody: "Connect customer requests to the tasks, assignments, and approvals needed to complete them. With clearer ownership and progress tracking, operations managers can identify blockers, support teams, and keep work moving across departments.",
    insightsTitle: "See Operational Performance Clearly—and Know Where to Act",
    insightsBody: "Review service activity, task progress, team workloads, and performance trends in connected dashboards and reports. Use a shared view of operational data to recognize delays, prioritize improvements, and make decisions with greater context.",
    connectedTitle: "Bring Greater Control to Every Operational Workflow",
    connectedDescription: "Give operations managers a practical way to oversee work across customer-facing and internal teams while keeping responsibilities, progress, and reporting connected.",
    connectedPoints: [
      { title: "Unify customer requests", body: "Keep tickets and conversations visible alongside the work required to resolve them." },
      { title: "Coordinate teams and ownership", body: "Make responsibilities, assignments, and handoffs easier to follow across departments." },
      { title: "Keep workflows moving", body: "Track progress through defined stages and surface items that need intervention." },
      { title: "Monitor performance", body: "Use dashboards and reports to review activity, workloads, and operational outcomes." },
      { title: "Maintain oversight", body: "Support consistent procedures with permission controls, approvals, and recorded activity." },
    ],
    ctaTitle: "Build an Operations Process That Works for Your Organization",
    ctaDescription: "Bring customer service, work management, CRM, analytics, and governance into one connected workspace. Give operations managers and their teams a clearer way to coordinate everyday work and improve how the organization operates.",
  },
  "hr-workforce": {
    ...vertical(
      "hr-workforce",
      "HR & Workforce",
      "workforce",
      "Bring attendance, schedules, team responsibilities, and operational updates into one connected workspace. NextGen helps HR and workforce teams coordinate daily activity with greater visibility and less manual follow-up.",
      "by-role",
    ),
    heroTitle: "Keep your workforce connected, informed, and ready for every shift.",
    highlightTitle: "A clearer way to manage people and daily operations.",
    highlightDescription: "From changing schedules to attendance tracking and team coordination, workforce management involves many moving parts. NextGen brings relevant work and operational information together so your teams can stay aligned.",
    highlightItems: [
      { label: "01", title: "Workforce Operations", body: "Coordinate shifts, attendance, assignments, and daily team activity from one shared view." },
      { label: "02", title: "Workflow Automation", body: "Use structured processes and reminders to reduce repetitive coordination and keep requests moving." },
      { label: "03", title: "Operational Intelligence", body: "Review attendance patterns, workload, and team activity to support more informed decisions." },
    ],
    experienceTitle: "Keep customer-facing teams prepared for every interaction.",
    experienceBody: "When staffing and service activity are easier to see together, supervisors can respond to changing demand with greater confidence. Give teams the context they need to coordinate coverage, manage handoffs, and keep customer work moving.",
    workflowTitle: "Make shift coordination and approvals easier to manage.",
    workflowBody: "Keep requests, responsibilities, and follow-ups in a structured workflow. From attendance exceptions to internal approvals and team updates, NextGen helps reduce scattered communication and makes ownership clearer at each step.",
    insightsTitle: "Understand workforce activity beyond the timesheet.",
    insightsBody: "Bring attendance records, team workload, and operational reporting into a more useful view. Identify gaps, follow trends, and give managers the information they need to plan coverage and improve day-to-day coordination.",
    connectedTitle: "Give HR & Workforce teams a more connected way to work.",
    connectedDescription: "Keep people-related activity, operational tasks, and supporting records easier to manage across the organization.",
    connectedPoints: [
      { title: "Coordinate workforce schedules", body: "Give managers clearer visibility into shifts, assignments, and coverage requirements." },
      { title: "Keep attendance records accessible", body: "View recorded attendance and work time in a connected operational context." },
      { title: "Streamline requests and approvals", body: "Track ownership and progress on workforce-related requests and decisions." },
      { title: "Monitor team activity", body: "Use dashboards and reports to follow workload and spot issues that need attention." },
      { title: "Support accountability", body: "Keep responsibilities, updates, and relevant records visible to the right teams." },
    ],
    ctaTitle: "Build a more coordinated workforce with NextGen.",
    ctaDescription: "Bring attendance, workforce activity, approvals, and operational visibility into one workspace. Help your people spend less time chasing updates and more time keeping teams productive and supported.",
  },
  finance: {
    ...vertical(
      "finance",
      "Finance",
      "finance",
      "Give finance teams a clearer view of billable time, approvals, and operational activity. NextGen brings the records and context together so teams can review costs, follow decisions, and work with greater confidence.",
      "by-role",
    ),
    heroTitle: "Finance operations, connected to the work behind every cost.",
    highlightTitle: "Financial control should not mean disconnected work.",
    highlightDescription: "Finance depends on accurate activity records, timely reviews, and clear accountability. NextGen connects the teams and workflows behind financial decisions, making it easier to keep work moving without losing visibility.",
    highlightItems: [
      { label: "01", title: "Workforce Operations", body: "Keep assignments, schedules, attendance, and time records connected to the work being delivered." },
      { label: "02", title: "Workflow Automation", body: "Organize reviews, approvals, and handoffs with consistent steps and less manual coordination." },
      { label: "03", title: "Operational Intelligence", body: "See the operational activity behind costs through shared dashboards, reports, and performance insights." },
    ],
    experienceTitle: "Connect financial decisions with customer activity.",
    experienceBody: "Understand the service requests, conversations, and work that contribute to financial outcomes. Connected customer and operational records give finance teams more context when reviewing charges, resolving questions, and coordinating with service teams.",
    workflowTitle: "Move approvals forward without losing the details.",
    workflowBody: "Bring requests, supporting information, ownership, and decision history into a clearer workflow. Teams can follow each handoff, see what still needs attention, and maintain a reliable record of the process.",
    insightsTitle: "See the numbers alongside the work that drives them.",
    insightsBody: "Review billable time, operational activity, and team performance in one connected reporting environment. With context behind the metrics, finance teams can identify exceptions, investigate trends, and make more informed decisions.",
    connectedTitle: "Better financial oversight starts with connected operations.",
    connectedDescription: "Give finance teams the visibility and control to work across departments without relying on scattered updates.",
    connectedPoints: [
      { title: "Connected customer context", body: "See the requests and interactions associated with operational work." },
      { title: "Structured workflows", body: "Follow approvals, responsibilities, and review steps in a consistent process." },
      { title: "Time and cost visibility", body: "Bring timesheet and activity records together for more informed reviews." },
      { title: "Performance reporting", body: "Use dashboards and reports to understand workload and emerging trends." },
      { title: "Governance and compliance", body: "Keep decisions, responsibilities, and supporting records easier to trace." },
    ],
    ctaTitle: "Bring finance and operations into one clearer picture.",
    ctaDescription: "NextGen connects finance-related reviews with customer service, work management, CRM, analytics, and governance. Give your teams the context they need to improve oversight and make decisions with confidence.",
  },
  "compliance-risk": {
    ...vertical(
      "compliance-risk",
      "Compliance & Risk",
      "compliance",
      "Bring policy acknowledgements, KYC checks, approvals, and supporting records into one connected workspace. Help Compliance & Risk teams coordinate reviews, maintain ownership, and keep evidence accessible when it matters.",
      "by-role",
    ),
    heroTitle: "Keep compliance work controlled, visible, and accountable",
    highlightTitle: "Reduce complexity without losing control",
    highlightDescription: "Compliance teams need a clear view of responsibilities, reviews, and decisions. NextGen connects people, processes, and supporting information so essential work can move forward with accountability.",
    highlightItems: [
      { label: "01", title: "Workforce Operations", body: "Coordinate review owners, assignments, deadlines, and follow-ups without losing track of who is responsible." },
      { label: "02", title: "Workflow Automation", body: "Organize recurring checks, approval steps, and reminders in consistent workflows that reduce manual coordination." },
      { label: "03", title: "Operational Intelligence", body: "Review activity, pending items, and operational trends through connected dashboards and reports." },
    ],
    experienceTitle: "Keep customer-facing teams aligned with compliance",
    experienceBody: "Help service teams access the information they need while sensitive reviews follow the appropriate process. Connect customer requests with the right owners, supporting records, and follow-up actions to reduce unnecessary handoffs.",
    workflowTitle: "Move reviews and approvals through clear steps",
    workflowBody: "Replace scattered conversations and manual chasing with defined responsibilities and structured progress. From initial review to approval and follow-up, teams can coordinate work with clearer visibility into what needs attention.",
    insightsTitle: "See risks, reviews, and bottlenecks sooner",
    insightsBody: "Use connected reporting to understand pending checks, approval progress, and workload across teams. Make it easier to identify delays, prioritize outstanding work, and support better operational decisions.",
    connectedTitle: "Give Compliance & Risk teams a more connected way to work",
    connectedDescription: "Bring everyday compliance activities together so teams can maintain control without switching between disconnected processes.",
    connectedPoints: [
      { title: "Centralize compliance requests", body: "Keep related requests, decisions, and documentation accessible in one workspace." },
      { title: "Standardize reviews and approvals", body: "Give teams a consistent path for checks, decisions, and escalation." },
      { title: "Clarify ownership", body: "Assign responsibility and make pending actions easier to track." },
      { title: "Monitor operational progress", body: "Review dashboards and reports to identify work that needs attention." },
      { title: "Maintain review history", body: "Keep a clearer record of activity, outcomes, and supporting information." },
    ],
    ctaTitle: "Make compliance part of a connected operation",
    ctaDescription: "NextGen brings customer service, work management, CRM, analytics, and governance into one platform. Give Compliance & Risk teams better coordination and visibility while keeping everyday operations moving.",
  },
  "it-administration": {
    ...vertical(
      "it-administration",
      "IT & Administration",
      "IT",
      "Manage permissions, integrations, and platform settings from one workspace. Give IT teams the context and oversight they need to support daily operations without switching between disconnected tools.",
      "by-role",
    ),
    heroTitle: "Keep IT operations connected, controlled, and visible",
    highlightTitle: "Less complexity for IT. More clarity for everyone.",
    highlightDescription: "Bring platform administration, workflow coordination, and operational visibility together so IT teams can support users, maintain consistent access, and keep services running smoothly.",
    highlightItems: [
      { label: "01", title: "Workforce Operations", body: "Coordinate team access, assignments, and operational responsibilities from a shared view that helps IT support the people behind every process." },
      { label: "02", title: "Workflow Automation", body: "Structure routine requests, approvals, and handoffs to reduce manual follow-up and make operational responsibilities easier to track." },
      { label: "03", title: "Operational Intelligence", body: "Use connected dashboards and reporting to monitor system-related activity, identify recurring issues, and support informed IT decisions." },
    ],
    experienceTitle: "Support better service with connected IT operations",
    experienceBody: "Customer-facing teams depend on reliable access to the tools and information they use every day. NextGen brings service conversations, user context, and operational workflows into one environment, helping IT resolve access and configuration needs with fewer handoffs.",
    workflowTitle: "Turn scattered IT requests into coordinated action",
    workflowBody: "Move access requests, system changes, and internal approvals through clear workflows with defined ownership. Keep stakeholders informed, maintain the context behind each request, and make progress visible from submission to resolution.",
    insightsTitle: "See what needs attention before it slows teams down",
    insightsBody: "Track IT-related requests, workflow status, and recurring operational bottlenecks through connected views and reporting. Give administrators the visibility to prioritize follow-ups and improve how teams are supported.",
    connectedTitle: "Connected operations for modern IT organizations",
    connectedDescription: "Keep access management, internal requests, collaboration, and operational reporting aligned in one workspace rather than spread across isolated processes.",
    connectedPoints: [
      "Manage user permissions with clearer responsibility and access visibility.",
      "Coordinate requests, reviews, and approvals with traceable steps.",
      "Keep teams informed as configurations and workflows change.",
      "Identify recurring service issues through shared operational reporting.",
      "Support consistent administration with documented activity and oversight.",
    ],
    ctaTitle: "Give your IT team one place to keep operations moving",
    ctaDescription: "Connect administration, people, and workflows so IT can spend less time chasing updates and more time supporting secure, reliable business operations across NextGen.",
  },
  executives: {
    ...vertical(
      "executives",
      "Executives",
      "executive",
      "Bring service quality, workforce efficiency, workflow performance, and governance into one connected executive view. See what needs attention and guide decisions with greater context.",
      "by-role",
    ),
    heroTitle: "A clearer view of the operations you lead",
    highlightTitle: "Lead with visibility, not disconnected reports",
    highlightDescription: "See how frontline work, cross-team coordination, and operational results connect. NextGen brings the information executives need into a shared workspace so priorities are easier to assess and act on.",
    highlightItems: [
      { label: "01", title: "Workforce Operations", body: "See assignments, team workloads, schedules, and operational activities in context, helping leadership identify where capacity or attention may be needed." },
      { label: "02", title: "Workflow Automation", body: "Connect recurring processes and handoffs so teams can follow more consistent ways of working with less manual coordination." },
      { label: "03", title: "Operational Intelligence", body: "Bring activity and reporting into a shared view to identify trends, review results, and support decisions across departments." },
    ],
    experienceTitle: "Keep customer experience in the executive picture",
    experienceBody: "Connect customer conversations, service requests, and operational follow-through. Give leadership a clearer view of how teams respond, where work is delayed, and what needs attention across service channels.",
    workflowTitle: "Make accountability visible across teams",
    workflowBody: "Follow work as it moves between people and departments, from an incoming request to an approval or resolution. Clear ownership, statuses, and activity history help executives spot handoff gaps and keep important work moving.",
    insightsTitle: "Turn operational activity into better decisions",
    insightsBody: "Use dashboards and reports to understand workloads, response patterns, team activity, and emerging issues. Move from isolated updates to a more connected picture of operational performance.",
    connectedTitle: "Give leadership a connected view of execution",
    connectedDescription: "Bring the essential parts of daily operations together, with clearer visibility into work, responsibility, and outcomes.",
    connectedPoints: [
      "Keep customer requests and service activity visible across teams and channels.",
      "Follow workflows, approvals, and handoffs with clearer ownership.",
      "Connect workforce and task activity to day-to-day operational priorities.",
      "Use dashboards and reports to spot patterns and areas needing attention.",
      "Maintain visibility into governance activities, records, and accountability.",
    ],
    ctaTitle: "Bring your teams and priorities into one workspace",
    ctaDescription: "NextGen connects customer service, work management, CRM, analytics, and governance so executives can see how work is progressing and help teams move toward shared goals.",
  },

  "omnichannel-ticketing": {
    ...vertical(
      "omnichannel-ticketing",
      "Omnichannel Ticketing",
      "ticketing",
      "Capture customer requests across channels, keep conversations and context together, and give teams a clear path from assignment to resolution. NextGen helps every request move forward without losing visibility or ownership.",
      "use-cases",
    ),
    heroTitle: "Bring every customer request into one connected ticketing workflow",
    highlightTitle: "Ticketing operations are complex. Your platform should not be.",
    highlightDescription: "From the first customer message to the final resolution, NextGen connects people, processes, and information in one workspace. Teams can handle more requests with clearer accountability and fewer disconnected tools.",
    highlightItems: [
      { label: "01", title: "Workforce Operations", body: "Assign requests to the right people, coordinate workloads, and keep teams aligned on ownership, priorities, and response expectations." },
      { label: "02", title: "Workflow Automation", body: "Reduce repetitive handling with structured routing, status changes, reminders, and follow-up processes that keep tickets moving." },
      { label: "03", title: "Operational Intelligence", body: "See ticket volumes, response activity, outstanding work, and resolution trends so managers can identify issues and make informed decisions." },
    ],
    experienceTitle: "Deliver better customer experiences across every channel",
    experienceBody: "Give agents the conversation history and ticket details they need to respond with context. By bringing requests into a connected workspace, NextGen helps teams provide consistent service even when customers contact them through different channels.",
    workflowTitle: "Turn complex processes into simple, connected workflows",
    workflowBody: "Move tickets from intake to classification, assignment, escalation, and resolution with clear steps. NextGen gives each team visibility into what needs attention, who is responsible, and what happens next.",
    insightsTitle: "Understand performance with insights that drive action",
    insightsBody: "Monitor ticket workloads, service responsiveness, and resolution progress through connected dashboards and reporting. Spot bottlenecks early, review trends, and use operational data to improve service delivery.",
    connectedTitle: "Connected operations for modern ticketing organizations",
    connectedDescription: "Keep ticketing work coordinated across customer service, team management, and governance. A shared operational view helps organizations maintain service quality as request volumes and team responsibilities grow.",
    connectedPoints: [
      { title: "Handle customer requests across all channels.", body: "Bring requests into a common workspace with the relevant customer and conversation context." },
      { title: "Streamline workflows, approvals, and processes.", body: "Support consistent routing, handoffs, reviews, and resolution steps across teams." },
      { title: "Give teams real-time coordination and visibility.", body: "Make priorities, ownership, and ticket progress clear to the people handling the work." },
      { title: "Track performance with dashboards and reports.", body: "Review workloads, responsiveness, and trends to identify where service can improve." },
      { title: "Ensure control with secure governance and compliance.", body: "Support controlled access, accountability, and traceable activity across ticket operations." },
    ],
    ctaTitle: "Create a better way to manage customer service",
    ctaDescription: "Connect ticketing, customer conversations, work management, and operational insights in one organized workspace. Help teams resolve requests with greater clarity, consistency, and confidence.",
  },
  "whatsapp-chat-support": {
    ...vertical(
      "whatsapp-chat-support",
      "WhatsApp & Chat Support",
      "chat support",
      "Give support teams one place to manage incoming messages, see previous customer interactions, and coordinate follow-ups. NextGen keeps conversations connected to the wider service workflow so agents can respond with context and maintain continuity.",
      "use-cases",
    ),
    heroTitle: "Bring every WhatsApp and chat conversation into one connected workspace",
    highlightTitle: "Chat support should feel connected, not complicated",
    highlightDescription: "Messages, customer details, assignments, and follow-ups should not live in separate workflows. NextGen helps teams organize day-to-day chat support while keeping ownership and activity visible.",
    highlightItems: [
      { label: "01", title: "Workforce Operations", body: "Coordinate the people behind every conversation with clearer assignments, shared visibility, and organized follow-up work." },
      { label: "02", title: "Workflow Automation", body: "Reduce repetitive handoffs by structuring how incoming conversations are assigned, tracked, and carried forward." },
      { label: "03", title: "Operational Intelligence", body: "Monitor service activity, team workloads, and response patterns through connected dashboards and reporting." },
    ],
    experienceTitle: "Make every conversation easier to continue",
    experienceBody: "Keep relevant customer context close to the conversation. Whether an inquiry starts on WhatsApp or chat, agents can understand the request, follow its progress, and deliver a more consistent experience without starting from scratch.",
    workflowTitle: "Turn incoming messages into coordinated action",
    workflowBody: "A conversation may need more than a quick reply. Link customer requests to the right people and supporting work, maintain visibility into next steps, and help teams move from the first message to an informed resolution.",
    insightsTitle: "See where conversations move forward—and where they slow down",
    insightsBody: "Bring support activity into view with dashboards and reports. Review workloads, identify outstanding follow-ups, and use operational insights to improve coordination and responsiveness across your team.",
    connectedTitle: "Keep chat support aligned with the rest of your organization",
    connectedDescription: "Connect frontline conversations to the teams and processes responsible for resolving them. NextGen brings communication, ownership, and operational visibility into a more consistent way of working.",
    connectedPoints: [
      { title: "Keep customer context connected", body: "Give agents visibility into relevant requests and earlier interactions when handling new messages." },
      { title: "Coordinate ownership and follow-ups", body: "Make responsibility clearer when conversations need another agent, team, or action." },
      { title: "Organize work beyond the conversation", body: "Carry requests into supporting workflows instead of losing important tasks in message threads." },
      { title: "Understand support activity", body: "Use dashboards and reports to track service workloads and highlight areas requiring attention." },
      { title: "Maintain operational visibility", body: "Keep a clearer view of activity and progress across customer service and related operations." },
    ],
    ctaTitle: "Build a more connected way to support customers",
    ctaDescription: "Unify WhatsApp and chat support with the wider work of your organization. NextGen helps teams keep communication organized, coordinate follow-ups, and create a clearer path from customer inquiry to resolution.",
  },
  "outbound-campaigns": {
    ...vertical(
      "outbound-campaigns",
      "Outbound Campaigns",
      "campaign",
      "Plan outbound campaigns, coordinate the teams behind them, and keep calls, messages, follow-ups, and outcomes connected in one workspace. Give every campaign a clearer path from launch to review.",
      "use-cases",
    ),
    heroTitle: "Run campaign operations with connected services",
    highlightTitle: "Campaign operations are complex. Your platform should not be.",
    highlightDescription: "Keep campaign execution organized without splitting responsibilities, processes, and reporting across disconnected tools. NextGen brings your daily operations together so teams can stay aligned and act with confidence.",
    highlightItems: [
      { label: "01", title: "Workforce Operations", body: "Coordinate campaign teams, assignments, schedules, and everyday responsibilities with clear ownership and visibility." },
      { label: "02", title: "Workflow Automation", body: "Build repeatable processes for campaign activities, routing, and follow-ups to reduce manual coordination." },
      { label: "03", title: "Operational Intelligence", body: "Follow campaign activity, team performance, and outcomes through connected dashboards and actionable reports." },
    ],
    experienceTitle: "Deliver better customer experiences across every channel",
    experienceBody: "Keep customer conversations connected to campaign activity, so agents can understand previous interactions and continue each follow-up with relevant context. Create a more consistent experience across calls, messages, and service requests.",
    workflowTitle: "Turn complex processes into simple, connected workflows",
    workflowBody: "Bring campaign planning, assignments, customer responses, and next actions into a coordinated workflow. Help each team understand what needs attention, who owns the next step, and how work is progressing.",
    insightsTitle: "Understand performance with insights that drive action",
    insightsBody: "See how campaigns and teams are performing without piecing together separate reports. Track activity, follow-up progress, and outcomes in one place to identify bottlenecks and make informed operational decisions.",
    connectedTitle: "Connected operations for modern campaign organizations",
    connectedDescription: "Give every campaign a shared operational foundation, from customer engagement and team coordination to progress tracking and governance.",
    connectedPoints: [
      "Handle customer interactions across connected channels.",
      "Streamline campaign workflows, assignments, and follow-ups.",
      "Give teams visibility into responsibilities and progress.",
      "Monitor activity and performance through dashboards and reports.",
      "Maintain oversight with consistent records and controlled processes.",
    ],
    ctaTitle: "Create a better way to manage customer service",
    ctaDescription: "Connect customer service, work management, CRM, analytics, and governance within a single intelligent workspace. Help your teams collaborate more effectively while keeping customer and campaign operations moving forward.",
  },
  "lead-to-opportunity": {
    ...vertical(
      "lead-to-opportunity",
      "Lead to Opportunity",
      "sales",
      "Bring leads, customer conversations, follow-ups, and sales activity into one connected workspace. Give your teams the context to move opportunities forward without losing visibility between stages.",
      "use-cases",
    ),
    heroTitle: "Run sales operations with connected services",
    highlightTitle: "Sales operations are complex. Your platform should not be.",
    highlightDescription: "Coordinate the people, processes, and information behind every opportunity. NextGen brings everyday sales activity into a shared workspace, helping teams stay organized and accountable.",
    highlightItems: [
      { label: "01", title: "Workforce Operations", body: "Keep team responsibilities, assignments, schedules, and operational activities visible so everyone knows what needs attention." },
      { label: "02", title: "Workflow Automation", body: "Connect repeatable steps and follow-ups in a structured process, reducing manual coordination as work moves between teams." },
      { label: "03", title: "Operational Intelligence", body: "Turn everyday activity into useful visibility with dashboards and reports that help teams spot bottlenecks and make informed decisions." },
    ],
    experienceTitle: "Deliver better customer experiences across every channel",
    experienceBody: "Keep customer conversations and related service requests connected to the work behind them. Help sales and support teams respond with context, coordinate next steps, and maintain continuity from first contact onward.",
    workflowTitle: "Turn complex processes into simple, connected workflows",
    workflowBody: "Bring lead capture, follow-ups, assignments, and internal handoffs into a clear sequence. Make ownership and next actions easier to follow, so opportunities progress with fewer gaps and less confusion.",
    insightsTitle: "Understand performance with insights that drive action",
    insightsBody: "See how your pipeline and team activity are progressing in one place. Use connected reporting to identify pending follow-ups, track operational performance, and focus attention on work that needs action.",
    connectedTitle: "Connected operations for modern sales organizations",
    connectedDescription: "Build a more consistent way to manage sales activity, with shared context, clearer responsibilities, and greater visibility across teams.",
    connectedPoints: [
      { title: "Handle customer requests across channels", body: "Keep conversations and related requests connected so teams can pick up work with context." },
      { title: "Streamline workflows, approvals, and processes", body: "Bring key operational steps into a coordinated flow with clearer ownership." },
      { title: "Give teams real-time collaboration and visibility", body: "Make current activity, pending actions, and responsibilities easier to see." },
      { title: "Track performance with dashboards and reports", body: "Review activity and progress without gathering updates from disconnected tools." },
      { title: "Ensure control with secure governance and compliance", body: "Support accountable operations through access controls, approvals, and traceable records." },
    ],
    ctaTitle: "Create a better way to manage customer service",
    ctaDescription: "Connect customer support, work management, CRM, analytics, and governance in one intelligent workspace. Help your organization work with greater clarity from the first interaction to the next opportunity.",
  },
  "billable-time-cost": {
    ...vertical(
      "billable-time-cost",
      "Billable Time & Cost",
      "billing",
      "Bring timesheets, project activity, and cost tracking into one connected workspace. Give finance and operations teams a clearer view of the work delivered, time recorded, and costs associated with every project.",
      "use-cases",
    ),
    heroTitle: "Connect billable work to the costs behind it",
    highlightTitle: "Make billable time and cost easier to manage",
    highlightDescription: "Time entries, project responsibilities, and cost information often live in separate places. NextGen helps teams maintain a shared record of work, improve review processes, and understand where time and resources are being spent.",
    highlightItems: [
      { label: "01", title: "Workforce Operations", body: "Coordinate assignments, schedules, and recorded work so teams can see which activities contribute to project costs." },
      { label: "02", title: "Workflow Automation", body: "Establish consistent steps for submitting, reviewing, and approving time entries, reducing manual follow-ups and missing information." },
      { label: "03", title: "Operational Intelligence", body: "Review logged hours, project activity, and cost-related trends in one place to support better operational decisions." },
    ],
    experienceTitle: "Keep the work behind every service visible",
    experienceBody: "Give teams the context they need to connect work performed with the customers, requests, and projects it supports. Trace activity through its associated records so finance and operations can review billable work with fewer gaps.",
    workflowTitle: "Move time records from entry to review with clarity",
    workflowBody: "Link timesheets to projects and responsible teams, then guide entries through an organized review process. Keep supporting information accessible so managers can identify missing details and make informed decisions before finalizing records.",
    insightsTitle: "Understand where time and costs are going",
    insightsBody: "Use connected reporting to compare recorded hours, review project-level effort, and identify unusual patterns. Give operations and finance teams a clearer starting point for workload planning, cost reviews, and resource decisions.",
    connectedTitle: "Bring billable work and cost oversight together",
    connectedDescription: "Give finance and operations teams a more consistent picture of how work moves through the organization, from assignments and time entries to reviews and reporting.",
    connectedPoints: [
      "Keep recorded time connected to relevant projects and work items.",
      "Coordinate time-entry reviews with clear responsibilities and ownership.",
      "Improve visibility into project effort and associated operational costs.",
      "Review hours and cost-related patterns through connected reports.",
      "Maintain a traceable record to support internal checks and decisions.",
    ],
    ctaTitle: "Build a clearer process for Billable Time & Cost",
    ctaDescription: "Connect project activity, timesheets, and operational oversight in one workspace. Help your teams spend less time reconciling scattered records and more time understanding the true effort behind the work.",
  },
  "attendance-shifts-cost": {
    ...vertical(
      "attendance-shifts-cost",
      "Attendance, Shifts & Cost",
      "attendance",
      "Bring attendance records, shift changes, and workforce costs together so operations teams can understand who is available, where time is being spent, and what needs attention.",
      "use-cases",
    ),
    heroTitle: "Keep attendance, shifts, and costs in one clear view",
    highlightTitle: "Make workforce tracking easier to manage",
    highlightDescription: "From daily attendance to shift coverage and billable time, give teams a shared view of workforce activity without chasing updates across disconnected records.",
    highlightItems: [
      { label: "01", title: "Workforce Operations", body: "Coordinate attendance, schedules, assignments, and workforce availability from a connected workspace." },
      { label: "02", title: "Workflow Automation", body: "Keep routine reviews, handoffs, and workforce updates moving through clear, repeatable processes." },
      { label: "03", title: "Operational Intelligence", body: "See working hours, coverage gaps, and time-related costs in reports that support better planning." },
    ],
    experienceTitle: "Keep teams informed across every shift",
    experienceBody: "Give managers and employees a clearer picture of attendance, shift updates, and responsibilities. Shared information helps reduce confusion and keeps daily operations aligned.",
    workflowTitle: "Turn attendance and shift changes into organized workflows",
    workflowBody: "Capture workforce updates, direct them to the right people, and keep decisions and follow-ups visible. Teams can respond to changes without losing the history behind them.",
    insightsTitle: "Understand time, coverage, and cost before they become problems",
    insightsBody: "Bring attendance, shift activity, and time records into a clearer operational picture. Identify patterns, review exceptions, and use evidence to improve scheduling and resource decisions.",
    connectedTitle: "Build more accountable Attendance, Shifts & Cost operations",
    connectedDescription: "Connect workforce records and operational workflows so managers can work with consistent information and employees know what is expected.",
    connectedPoints: [
      { title: "Attendance visibility", body: "Review attendance activity and identify missing or unusual records." },
      { title: "Shift coordination", body: "Keep shift assignments, changes, and coverage needs easier to follow." },
      { title: "Time and cost context", body: "Connect recorded time with work activity to support cost oversight." },
      { title: "Operational reporting", body: "Use shared views to examine workforce patterns and areas that need attention." },
      { title: "Clear accountability", body: "Keep updates, responsibilities, and review history visible to the people involved." },
    ],
    ctaTitle: "Create a more connected way to manage workforce operations",
    ctaDescription: "Bring attendance, shifts, and workforce cost visibility into one operational workspace. Give your teams the context they need to coordinate work, resolve exceptions, and make informed decisions.",
  },
  "multi-level-approvals": {
    ...vertical(
      "multi-level-approvals",
      "Multi-Level Approvals",
      "approval",
      "Bring requests, decision-makers, and approval stages into one connected workspace. Multi-Level Approvals helps teams route decisions, follow progress, and maintain a clear record from submission to completion.",
      "use-cases",
    ),
    heroTitle: "Move every approval forward with clarity and control",
    highlightTitle: "Keep approvals moving without losing oversight",
    highlightDescription: "Complex requests often cross departments, reviewers, and deadlines. NextGen connects each approval step, helping your team reduce manual follow-ups while keeping ownership, decisions, and records visible.",
    highlightItems: [
      { label: "01", title: "Workforce Operations", body: "Coordinate approval responsibilities across people and departments, so each request reaches the right decision-maker." },
      { label: "02", title: "Workflow Automation", body: "Structure multi-stage reviews, reminders, and handoffs to keep approvals moving through defined steps." },
      { label: "03", title: "Operational Intelligence", body: "Understand approval volumes, pending requests, and bottlenecks with connected dashboards and reports." },
    ],
    experienceTitle: "Keep approvals connected to the work they support",
    experienceBody: "Approval decisions often affect customer requests, internal services, and team delivery. Connect approval workflows with the relevant records and conversations so teams can respond with context and avoid unnecessary delays.",
    workflowTitle: "Turn complex approval chains into clear next steps",
    workflowBody: "Define who reviews a request, in what order, and what happens after each decision. With visible approval stages and shared records, teams can manage handoffs, track pending actions, and keep work progressing.",
    insightsTitle: "See where decisions slow down - and what needs attention",
    insightsBody: "Monitor pending approvals, review times, and workflow activity from one view. Give managers the information they need to spot delays, prioritize follow-ups, and improve how decisions move across departments.",
    connectedTitle: "Bring structure and accountability to every approval",
    connectedDescription: "Keep Multi-Level Approvals connected with the teams and processes that depend on them. Clear permissions, decision history, and shared visibility help organizations make consistent, traceable decisions.",
    connectedPoints: [
      "Route requests through defined approval stages and responsible reviewers.",
      "Give teams visibility into pending, approved, and returned requests.",
      "Reduce manual follow-ups with structured workflow handoffs and reminders.",
      "Keep a traceable history of decisions, comments, and status changes.",
      "Use reports to identify delays and improve approval processes.",
    ],
    ctaTitle: "Build an approval process that works across your organization",
    ctaDescription: "Bring people, requests, and decisions together in one connected platform. NextGen helps your teams manage Multi-Level Approvals with clearer ownership, more consistent workflows, and better visibility at every stage.",
  },
  "policy-acknowledgement": {
    ...vertical(
      "policy-acknowledgement",
      "Policy Acknowledgement",
      "policy",
      "Share important policies, collect acknowledgements, and maintain a clear record of who has reviewed each document. NextGen helps teams bring policy communication and follow-up into a connected workspace.",
      "use-cases",
    ),
    heroTitle: "Keep every policy acknowledgement visible and accountable",
    highlightTitle: "Policy acknowledgement without the manual follow-up",
    highlightDescription: "Make it easier to distribute policies, confirm receipt, and track outstanding acknowledgements. Give teams the structure they need to stay aligned without relying on scattered emails or spreadsheets.",
    highlightItems: [
      { label: "01", title: "Workforce Operations", body: "Share policies across relevant teams and departments, with clear responsibilities and visibility into acknowledgement status." },
      { label: "02", title: "Workflow Automation", body: "Coordinate policy distribution, reminders, and follow-ups through structured workflows that reduce repetitive administration." },
      { label: "03", title: "Operational Intelligence", body: "See which policies have been acknowledged, identify pending responses, and review activity from one place." },
    ],
    experienceTitle: "Keep policy communication consistent across teams",
    experienceBody: "Bring policy notices and related conversations together so employees can find the right information and understand what is expected. Give administrators a clearer way to manage responses and follow up where needed.",
    workflowTitle: "Move policies from distribution to acknowledgement",
    workflowBody: "Connect policy sharing, assigned responsibilities, acknowledgement collection, and review into one workflow. Teams can follow each step without losing context between departments or separate tools.",
    insightsTitle: "Know what has been acknowledged and what still needs attention",
    insightsBody: "Track completion, review outstanding acknowledgements, and spot gaps in policy adoption. Clear reporting helps managers prioritize follow-up and maintain better oversight of policy activity.",
    connectedTitle: "Make policy acknowledgement part of everyday operations",
    connectedDescription: "Bring policy communication, team responsibilities, and follow-up into the same operational workspace.",
    connectedPoints: [
      { title: "Centralize policy distribution", body: "Share approved policy documents with the appropriate teams from one place." },
      { title: "Clarify ownership", body: "Make it clear who must read and acknowledge each policy." },
      { title: "Track acknowledgement status", body: "See completed and pending responses without checking multiple channels." },
      { title: "Support timely follow-up", body: "Identify outstanding acknowledgements and coordinate reminders." },
      { title: "Maintain a reviewable history", body: "Keep policy activity and acknowledgement records accessible for internal review." },
    ],
    ctaTitle: "Build a clearer way to manage policy acknowledgements",
    ctaDescription: "Replace disconnected policy messages and manual tracking with a more organized process. NextGen connects the people, documents, and acknowledgements that help your organization stay informed and accountable.",
  },
  "kyc-risk-monitoring": {
    ...vertical(
      "kyc-risk-monitoring",
      "KYC & Risk Monitoring",
      "risk",
      "Bring KYC records, risk observations, supporting documents, and review responsibilities into a connected workflow. Give teams a clearer way to investigate concerns, follow up on findings, and maintain an accessible record of decisions.",
      "use-cases",
    ),
    heroTitle: "Keep risk reviews moving with complete context",
    highlightTitle: "Make complex risk operations easier to manage",
    highlightDescription: "When evidence, assignments, and decisions sit in different places, even routine reviews become harder to track. NextGen brings the people, tasks, and operational information together so teams can coordinate reviews with greater clarity.",
    highlightItems: [
      { label: "01", title: "Workforce Operations", body: "Coordinate analysts, reviewers, and supporting teams in one place. Assign follow-ups, clarify ownership, and keep review responsibilities visible." },
      { label: "02", title: "Workflow Automation", body: "Structure repeatable KYC and risk review steps, from information requests to escalations, so teams can follow a consistent process." },
      { label: "03", title: "Operational Intelligence", body: "View review workloads, pending actions, and emerging patterns through shared reporting that supports informed decisions." },
    ],
    experienceTitle: "See the full context behind every risk review",
    experienceBody: "Keep customer conversations, supporting requests, and related follow-ups connected to the review process. Teams can understand what prompted an investigation, identify outstanding information, and communicate next steps without losing the thread.",
    workflowTitle: "Move from risk signals to clear next steps",
    workflowBody: "Turn incoming concerns and KYC review requirements into assigned work with defined owners, priorities, and follow-ups. Keep handoffs visible across teams so important checks do not depend on scattered messages or manual reminders.",
    insightsTitle: "Know what needs review—and where work is slowing",
    insightsBody: "Bring review activity, outstanding tasks, and operational trends into a shared view. Help team leaders identify bottlenecks, check progress, and focus attention on cases that need a decision or further evidence.",
    connectedTitle: "Connected operations for modern risk organizations",
    connectedDescription: "Use a shared workspace to coordinate reviews while keeping responsibilities and progress visible.",
    connectedPoints: [
      "Keep customer requests and related evidence connected to each review.",
      "Coordinate KYC checks, document requests, and escalation steps across teams.",
      "Give reviewers and decision-makers clearer ownership of pending actions.",
      "Monitor review activity, delays, and outcomes through operational reporting.",
      "Maintain accessible case history to support governance and accountability.",
    ],
    ctaTitle: "Build a clearer approach to KYC & Risk Monitoring",
    ctaDescription: "Connect review work with the wider customer and operational context. NextGen helps teams organize evidence, coordinate follow-ups, and maintain visibility from the first concern through the final outcome.",
  },
  "replace-your-stack": {
    ...vertical(
      "replace-your-stack",
      "Replace Your Stack",
      "platform",
      "Replace disconnected tools with one workspace for customer service, work management, CRM, analytics, and governance. Give every team shared context and a clearer way to work, without switching between separate systems.",
      "use-cases",
    ),
    heroTitle: "Bring your operations together in one connected platform",
    highlightTitle: "Fewer disconnected systems. More connected work.",
    highlightDescription: "When teams rely on separate tools, information gets duplicated, updates are missed, and progress becomes harder to follow. NextGen brings everyday operations together so people can collaborate with the same information and maintain visibility from start to finish.",
    highlightItems: [
      { label: "01", title: "Workforce Operations", body: "Keep assignments, schedules, tasks, and team activity connected so everyone knows what needs attention and who owns the next step." },
      { label: "02", title: "Workflow Automation", body: "Connect routine processes across teams, reduce repetitive handoffs, and move work forward through clearer workflows." },
      { label: "03", title: "Operational Intelligence", body: "Bring activity, performance, and operational reporting into one view to support faster, better-informed decisions." },
    ],
    experienceTitle: "Keep every customer interaction connected",
    experienceBody: "Bring customer conversations, tickets, and follow-ups into a shared workspace. Teams can see the context behind each request, coordinate responses, and deliver a more consistent experience across channels.",
    workflowTitle: "Move work forward without switching between tools",
    workflowBody: "Connect requests, tasks, approvals, and follow-ups so work does not disappear between departments. Clear ownership, shared updates, and visible progress help teams complete more with less manual coordination.",
    insightsTitle: "Turn scattered activity into actionable insight",
    insightsBody: "See what is happening across customer service and internal operations through dashboards and reports. Identify workload trends, monitor progress, and spot areas that need attention without pulling updates from multiple systems.",
    connectedTitle: "One workspace for the work that keeps your organization moving",
    connectedDescription: "Bring your essential operations together with a platform designed to make collaboration, visibility, and control part of everyday work.",
    connectedPoints: [
      "Connect customer requests and conversations across channels.",
      "Coordinate workflows, approvals, and operational responsibilities.",
      "Give teams clear ownership and visibility into what comes next.",
      "Monitor performance through connected dashboards and reports.",
      "Support consistent governance with records and controlled access.",
    ],
    ctaTitle: "Make connected operations your new standard",
    ctaDescription: "NextGen brings customer service, work management, CRM, analytics, and governance into one intelligent workspace. Simplify the tools your teams rely on and create a more connected way to serve customers and manage work.",
  },
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
