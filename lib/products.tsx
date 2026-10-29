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
  ctaTitle?: string;
  ctaDescription?: string;
  children: string[];
  moduleLabels?: Record<string, string>;
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
  checklist: (string | { title: string; body: string })[];
  checklistImage: ProductImage;
  modulesTitle: string;
  modulesDescription: string;
  ctaTitle?: string;
  ctaDescription?: string;
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

const categoryBanner: ProductImage = {
  src: "/figma/product-cat-banner.png",
  alt: "NextGen product workspace on a laptop",
  width: 1662,
  height: 677,
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
  content?: Partial<ProductSubcategoryPage>;
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
    ...config.content,
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
    heroImage: categoryBanner,
    simplifyTitle: "Bring clarity to every workday",
    simplifyDescription:
      "Keep your team aligned from planning to delivery. Organize responsibilities, connect schedules, and make progress visible without switching between disconnected tools.",
    simplifyItems: [
      { label: "01", title: "Clear ownership", body: "Give every task a responsible owner, a defined priority, and a clear next step so work moves forward with fewer handoffs." },
      { label: "02", title: "Connected schedules", body: "Bring tasks, projects, and attendance into one coordinated view so everyone knows what is due and when." },
      { label: "03", title: "Operational visibility", body: "See what is progressing, what is waiting, and where attention is needed before small delays become bigger problems." },
    ],
    modulesTitle: "Work Management Products",
    modulesDescription: "Manage everyday work in one connected workspace. From individual tasks to team projects, timesheets, and attendance, each tool helps people stay organized and accountable.",
    workflowTitle: "A clearer path from assigned to done",
    workflowDescription:
      "Turn incoming work into a structured process. Set ownership, track time, follow progress, and keep a reliable record of activity as tasks and projects move toward completion.",
    workflowSteps: [
      { title: "Work is planned", body: "Create tasks and projects with clear scope and owners." },
      { title: "Teams take action" },
      { title: "Time is captured" },
      { title: "Progress is tracked" },
      { title: "Delivery is measured" },
    ],
    workflowImage: {
      src: "/figma/work-management.png",
      alt: "Team collaboration workspace",
      width: 685,
      height: 696,
    },
    builtTitle: "Help teams move forward with confidence",
    builtDescription: "Reduce the friction of daily coordination with clear responsibilities, connected information, and progress that everyone can follow.",
    builtItems: [
      { title: "Faster execution", body: "Make priorities and next steps easy to find, helping teams spend less time chasing updates and more time completing work." },
      { title: "Better coordination", body: "Keep teammates, schedules, and related work connected so handoffs happen with the right context." },
      { title: "Accurate time tracking", body: "Record time against tasks and projects to understand effort, support reporting, and plan resources more effectively." },
      { title: "Clear accountability", body: "Give managers and team members visibility into ownership, deadlines, and progress without relying on constant follow-ups." },
    ],
    ctaTitle: "Make everyday work easier to manage",
    ctaDescription: "Bring tasks, projects, schedules, and time tracking together in NextGen. Give your people a clearer way to organize work, collaborate, and keep progress moving.",
    children: ["tasks", "projects", "timesheets", "attendance"],
  },
  "crm-sales": {
    type: "category",
    slug: "crm-sales",
    title: "CRM & Sales",
    menuTitle: "CRM & Sales",
    description: "Manage contacts, leads, and customer relationships with complete visibility.",
    heroTitle: "Build stronger customer relationships, from first contact to next opportunity",
    heroDescription:
      "Bring contacts, leads, and sales activity into one connected workspace. Give your teams the context they need to follow up consistently, understand every interaction, and move opportunities forward.",
    heroImage: categoryBanner,
    simplifyTitle: "Keep customer relationships and sales activity connected",
    simplifyDescription: "Give sales and service teams a shared view of customer history, follow-ups, and opportunities so important details stay visible and next steps are clear.",
    simplifyItems: [
      { label: "01", title: "Complete contact history", body: "Keep customer conversations, requests, notes, and related opportunities together in one accessible record." },
      { label: "02", title: "Faster follow-ups", body: "See what needs attention, assign the next action, and keep leads moving without losing context between teams." },
      { label: "03", title: "Better decisions", body: "Use connected customer and pipeline information to prioritize promising opportunities and focus effort where it matters." },
    ],
    modulesTitle: "CRM & Sales Products",
    modulesDescription: "Make customer information easier to manage and sales activity easier to follow with connected tools for the people and opportunities behind your business.",
    workflowTitle: "A clearer path from first contact to the next opportunity",
    workflowDescription: "Keep the sales journey organized with shared records, defined ownership, and visible progress from initial interest through follow-up and outcomes.",
    workflowSteps: [
      { title: "Leads captured", body: "Record incoming interest and assign an owner so new opportunities are not missed." },
      { title: "Contact is enriched", body: "Bring relevant details, interactions, and notes into the customer record." },
      { title: "Opportunity is tracked", body: "Keep status, next steps, and follow-up activity visible as the relationship develops." },
      { title: "Teams collaborate", body: "Give sales and service teams the context to coordinate actions and handovers." },
      { title: "Outcome is measured", body: "Review pipeline activity and results to identify what is working and where to improve." },
    ],
    workflowImage: {
      src: "/figma/crm-sales.png",
      alt: "CRM collaboration workspace",
      width: 685,
      height: 696,
    },
    builtTitle: "Turn customer context into stronger sales execution",
    builtDescription: "Help teams build on every interaction with organized customer information, clearer pipelines, and better coordination across sales and service.",
    builtItems: [
      { title: "Shared customer context", body: "See relevant customer details and previous interactions without switching between disconnected records." },
      { title: "Cleaner pipelines", body: "Track leads and opportunities with defined stages, clear ownership, and visible next steps." },
      { title: "Stronger handoffs", body: "Pass customer context between teams so follow-up starts with the right information." },
      { title: "Revenue visibility", body: "Understand pipeline activity and outcomes with reporting that supports better decisions." },
    ],
    ctaTitle: "Bring your customer relationships and sales work together",
    ctaDescription: "Connect customer records, lead management, follow-ups, and operational activity in one workspace, helping your teams build lasting relationships and move work forward with greater clarity.",
    children: ["contacts-crm", "leads"],
  },
  analytics: {
    type: "category",
    slug: "analytics",
    title: "Analytics & BI",
    menuTitle: "Analytics and BI",
    description: "Turn operational activity into dashboards and insights teams can act on.",
    heroTitle: "Turn everyday activity into clearer business decisions",
    heroDescription:
      "Bring service, team, and operational performance into a clearer view. NextGen Analytics & BI helps you follow activity, spot patterns, and make informed decisions using information from across your workspace.",
    heroImage: categoryBanner,
    simplifyTitle: "See what is happening across your operations",
    simplifyDescription: "Move beyond disconnected reports. Give teams a shared view of current work, performance, and opportunities for improvement without losing the context behind the numbers.",
    simplifyItems: [
      { label: "01", title: "Live operational views", body: "Follow tickets, tasks, workload, and key activity as teams move work forward." },
      { label: "02", title: "Shared dashboards", body: "Keep departments aligned around the same important metrics and operational priorities." },
      { label: "03", title: "Deeper reporting", body: "Explore trends and compare results to better understand what is changing and why." },
    ],
    modulesTitle: "The right insights for every level of your business",
    modulesDescription: "From day-to-day operational views to more detailed business reporting, NextGen brings relevant information closer to the people who need it.",
    workflowTitle: "From connected data to informed action",
    workflowDescription: "Bring activity together, review what matters, and turn trends into clear next steps. A straightforward reporting process helps teams understand performance and follow through.",
    workflowSteps: [
      { title: "Data is connected", body: "Bring relevant operational activity into a common reporting picture." },
      { title: "Dashboards update", body: "Review changing workload and performance through current dashboard views." },
      { title: "Teams review trends", body: "Compare patterns, identify bottlenecks, and discuss what needs attention." },
      { title: "Actions are prioritized", body: "Use the findings to focus effort on the issues with the greatest impact." },
      { title: "Outcomes improve", body: "Track results over time and refine the decisions behind your day-to-day work." },
    ],
    workflowImage: {
      src: "/figma/analytic-bi.png",
      alt: "Analytics collaboration workspace",
      width: 685,
      height: 696,
    },
    builtTitle: "Make information easier to understand and act on",
    builtDescription: "Give teams practical visibility into their work, with consistent reporting that supports better coordination and more confident decisions.",
    builtItems: [
      { title: "Faster insights", body: "Find relevant operational information without searching across separate tools." },
      { title: "Shared metrics", body: "Help teams work from consistent measures and a clearer understanding of progress." },
      { title: "Flexible reporting", body: "Review the information most relevant to your role, team, and business priorities." },
      { title: "Actionable trends", body: "Spot recurring challenges, monitor changes, and decide where improvements are needed." },
    ],
    ctaTitle: "Make better decisions with connected Analytics & BI",
    ctaDescription: "Bring customer service, work management, and operational reporting into one connected experience. Give your people the context they need to understand performance and improve the way work gets done.",
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
      "Give your teams a consistent way to manage access, approvals, policies, and operational changes. NextGen connects governance with everyday work so decisions are clear, responsibilities are defined, and important activity stays traceable.",
    heroImage: categoryBanner,
    simplifyTitle: "Simplify governance & compliance",
    simplifyDescription: "Build practical controls into the way your teams already work. Manage who can do what, guide decisions through the right approvals, and keep essential policies accessible.",
    simplifyItems: [
      { label: "01", title: "Controlled access", body: "Give people access based on their role and responsibilities, while limiting sensitive actions to the right users." },
      { label: "02", title: "Structured approvals", body: "Move requests through defined approval steps so decisions reach the right people and do not get lost." },
      { label: "03", title: "Traceable policies", body: "Keep policies, acknowledgements, and relevant changes organized so teams know what applies and what has changed." },
    ],
    modulesTitle: "Governance & Compliance Products",
    modulesDescription: "Put the essential controls for permissions, approvals, policies, and oversight in one connected workspace. Explore the tools your organization needs to establish clarity without adding unnecessary administration.",
    moduleLabels: { "api-bank": "API Scan" },
    workflowTitle: "Governance Workflow",
    workflowDescription: "From assigning access to recording decisions, give each governance activity a clear owner, a defined next step, and a history your team can follow.",
    workflowSteps: [
      { title: "Access is defined", body: "Set roles and permissions so individuals can work within clear, appropriate boundaries." },
      { title: "Requests are approved", body: "Route access and operational requests to the people authorized to review and decide." },
      { title: "Policies are shared", body: "Make current policies available to the relevant teams and support acknowledgement where needed." },
      { title: "Compliance is tracked", body: "Track completion, exceptions, and outstanding actions to maintain visibility over required work." },
      { title: "Activity is auditable", body: "Keep a record of relevant actions and decisions to support internal reviews and accountability." },
    ],
    workflowImage: {
      src: "/figma/governance-compliance.png",
      alt: "Governance collaboration workspace",
      width: 685,
      height: 696,
    },
    builtTitle: "Built for safer operations",
    builtDescription: "Make governance part of everyday operations with controls that are easy to understand, simple to follow, and visible to the people responsible.",
    builtItems: [
      { title: "Stronger permissions", body: "Control access to features and sensitive information according to each person’s responsibilities." },
      { title: "Reliable approvals", body: "Keep decisions moving through structured reviews with clear ownership and status." },
      { title: "Policy confidence", body: "Organize key policies and acknowledgements so teams can work from the right information." },
      { title: "API control", body: "Manage and review API-related access and activity with greater oversight." },
    ],
    ctaTitle: "Create a better way to manage governance & compliance",
    ctaDescription: "Bring permissions, approvals, policy management, and operational oversight into a more connected workflow. Give your organization the structure to work confidently and the visibility to stay accountable.",
    children: ["permissions", "approvals", "policy-docs", "org-hierarchy", "kyc", "api-bank"],
  },
};

export const productSubcategories: Record<string, ProductSubcategoryPage> = {
  "chat-whatsapp": sub({
    slug: "chat-whatsapp",
    title: "Chat & WhatsApp",
    parent: "customer-service",
    description: "Manage live chat and WhatsApp conversations with shared history, routing, and reply context.",
    heroTitle: "Every customer conversation, in one connected workspace",
    heroDescription:
      "Bring customer chats and WhatsApp conversations together so your team can respond, collaborate, and follow every interaction without switching between disconnected tools.",
    focus: "Keep chat transcripts, notes, and customer context together.",
    focusAlt: "Route WhatsApp and chat conversations by intent, team, and urgency.",
    content: {
      viewsTitle: "Make every conversation easier to manage",
      viewsDescription: "From the first message to the final response, give your team the context, coordination, and visibility they need to keep customer conversations moving.",
      viewsItems: [
        { label: "01", title: "Conversation view", body: "See incoming messages and conversation history in one place, so your team knows what has been discussed and what needs attention." },
        { label: "02", title: "Collaboration view", body: "Keep teammates aligned on ownership, follow-ups, and the next steps required to move a conversation forward." },
        { label: "03", title: "Progress view", body: "Understand which conversations are waiting, being handled, or completed, without losing sight of ongoing work." },
      ],
      splits: [
        {
          id: "chat-whatsapp-details",
          title: "The full conversation, without the guesswork",
          body: "Give your team a clear view of each customer exchange, including message context, relevant details, and previous interactions. Spend less time finding information and more time helping customers.",
          image: ticketDetails.src,
          imageAlt: ticketDetails.alt,
          imageWidth: ticketDetails.width,
          imageHeight: ticketDetails.height,
          imageSide: "right",
        },
        {
          id: "chat-whatsapp-route",
          title: "Get conversations to the right people",
          body: "Organize incoming chats and WhatsApp messages into manageable workflows. Help teams identify the right owner, reduce unnecessary handoffs, and respond with greater consistency.",
          image: ticketRoute.src,
          imageAlt: ticketRoute.alt,
          imageWidth: ticketRoute.width,
          imageHeight: ticketRoute.height,
          imageSide: "left",
        },
        {
          id: "chat-whatsapp-priorities",
          title: "Keep important conversations on track",
          body: "Bring attention to conversations that need a response or follow-up. Set clear priorities so urgent customer needs are visible and work is less likely to be overlooked.",
          image: ticketPriorities.src,
          imageAlt: ticketPriorities.alt,
          imageWidth: ticketPriorities.width,
          imageHeight: ticketPriorities.height,
          imageSide: "right",
        },
      ],
      captureTitle: "Give every conversation the context it deserves",
      captureDescription: "Keep essential conversation information organized and accessible, from customer details to assignments and follow-up activity. Your team can pick up the conversation with confidence.",
      captureCards: [
        { title: "Capture the conversation", body: "Keep message history and key details together to create a clearer record of each interaction." },
        { title: "Keep ownership clear", body: "Make it easier to see who is responsible for a conversation and what should happen next." },
        { title: "Support smoother handoffs", body: "Help another team member continue the discussion with the context already available." },
        { title: "Track follow-up activity", body: "Keep next steps visible so customers are not left waiting without direction." },
      ],
      pathTitle: "A clear path from first message to resolution",
      pathDescription: "Make the progress of a conversation easy to understand. Give your team a consistent way to receive, manage, and complete customer requests across chat and WhatsApp.",
      pathItems: [
        { title: "Receive a message", body: "Bring a new customer conversation into the team’s shared workspace." },
        { title: "Review the context", body: "Understand the request, conversation history, and relevant customer details." },
        { title: "Take action", body: "Assign ownership, respond, and move the conversation toward an outcome." },
        { title: "Complete and follow up", body: "Close out the immediate request and keep any remaining next steps visible." },
      ],
      checklistTitle: "Everything your team needs to stay connected",
      checklistDescription: "Help agents work with greater clarity using a shared view of messages, ownership, activity, and outcomes. Build a more consistent experience across customer conversations.",
      checklist: [
        { title: "Shared conversation history", body: "Keep previous messages available to support informed, continuous communication." },
        { title: "Clear responsibilities", body: "Help agents understand which conversations need their attention." },
        { title: "More reliable follow-ups", body: "Organize outstanding responses and next steps in one place." },
        { title: "Better operational visibility", body: "See how conversation work is progressing across your team." },
      ],
      modulesTitle: "Connect conversations to the rest of your work",
      modulesDescription: "Chat & WhatsApp fits into a broader customer service workflow, helping teams connect customer communication with tickets and other related work across NextGen.",
      ctaTitle: "Build a better way to manage customer conversations",
      ctaDescription: "Give your team a more connected approach to chat and WhatsApp, with the visibility, context, and coordination needed to deliver timely and consistent support.",
    },
  }),
  "calls-campaigns": sub({
    slug: "calls-campaigns",
    title: "Calls & Campaigns",
    parent: "customer-service",
    description: "Run outbound campaigns and manage call activity with clear ownership and tracking.",
    heroTitle: "Keep every call and campaign connected.",
    heroDescription:
      "Bring outbound calling, campaign activity, customer conversations, and follow-ups into one workspace. Give teams the context they need to engage customers and move every interaction forward.",
    focus: "Capture campaign briefs, lists, and call outcomes in one place.",
    focusAlt: "Organize campaigns by audience, channel, owner, and priority.",
    content: {
      viewsTitle: "A clearer way to manage Calls & Campaigns.",
      viewsDescription: "Organize campaign activity from planning to follow-up. Keep teams aligned on who to contact, what happened, and what needs attention next - without switching between disconnected records.",
      viewsItems: [
        { label: "01", title: "Summary view", body: "See active campaigns, calling activity, and outstanding follow-ups together, so priorities are clear at a glance." },
        { label: "02", title: "Collaboration view", body: "Give agents and managers shared context for customer conversations, assignments, and next steps." },
        { label: "03", title: "Progress view", body: "Follow campaign progress and outcomes in one place, with the information needed to review performance." },
      ],
      splits: [
        {
          id: "calls-campaigns-details",
          title: "Every conversation has context.",
          body: "Keep call records, contact details, campaign information, and interaction history connected. Teams can review previous activity before the next conversation and avoid losing important customer context.",
          image: ticketDetails.src,
          imageAlt: ticketDetails.alt,
          imageWidth: ticketDetails.width,
          imageHeight: ticketDetails.height,
          imageSide: "right",
        },
        {
          id: "calls-campaigns-route",
          title: "Get calls and follow-ups to the right team.",
          body: "Organize activity by campaign, customer, team, or outcome. Clear ownership and routing help agents work from the right queues and make the next action easier to identify.",
          image: ticketRoute.src,
          imageAlt: ticketRoute.alt,
          imageWidth: ticketRoute.width,
          imageHeight: ticketRoute.height,
          imageSide: "left",
        },
        {
          id: "calls-campaigns-priorities",
          title: "Know which follow-up comes next.",
          body: "Set priorities for customer callbacks, campaign tasks, and time-sensitive conversations. Help teams focus on important actions while keeping upcoming commitments visible.",
          image: ticketPriorities.src,
          imageAlt: ticketPriorities.alt,
          imageWidth: ticketPriorities.width,
          imageHeight: ticketPriorities.height,
          imageSide: "right",
        },
      ],
      captureTitle: "Keep the details that drive every campaign.",
      captureDescription: "Connect the information teams need to understand customer interactions, coordinate work, and review results without rebuilding the story from separate systems.",
      captureCards: [
        { title: "Capture requests and call context", body: "Keep the purpose of the conversation, relevant customer details, and previous interactions together." },
        { title: "Organize campaigns, owners, and priorities", body: "Make it clear which campaign an interaction belongs to, who is responsible, and what matters most." },
        { title: "Set expectations and track outcomes", body: "Record call outcomes and next steps so teams can return to every conversation with direction." },
        { title: "Keep work and follow-ups connected", body: "Link campaign activity with assigned tasks, notes, and follow-up actions to reduce handoff gaps." },
      ],
      pathTitle: "From first outreach to the next action.",
      pathDescription: "Give every campaign interaction a clear path through assignment, engagement, follow-up, and review. Teams can understand progress without searching through disconnected updates.",
      pathItems: [
        { title: "Assign a role", body: "Give agents and teams ownership of campaign activity and customer follow-ups." },
        { title: "Prioritize work", body: "Bring time-sensitive calls and next actions to the top of the queue." },
        { title: "Track progress", body: "Record interaction outcomes and monitor what has been completed or still requires attention." },
        { title: "Collaborate early", body: "Share conversation context with the next person involved to support smoother handoffs." },
      ],
      checklistTitle: "Understand campaign activity without losing the details.",
      checklistDescription: "Review calling activity, campaign outcomes, team workload, and follow-up progress in a connected view. Use that context to identify bottlenecks and improve how teams engage customers.",
      checklist: [
        { title: "Campaign activity", body: "See work underway and recent interactions across campaigns." },
        { title: "Call outcomes", body: "Understand the results recorded by agents and the next actions they create." },
        { title: "Team ownership", body: "Keep responsibility visible across agents, managers, and departments." },
        { title: "Follow-up visibility", body: "Spot outstanding callbacks and commitments before they fall through the cracks." },
      ],
      modulesTitle: "Related products",
      modulesDescription: "Connect Calls & Campaigns with other NextGen products to keep customer records, requests, and follow-up work in context.",
      ctaTitle: "Build a Calls & Campaigns process around your team.",
      ctaDescription: "Bring customer communication and campaign coordination into one connected workspace. Help teams manage outreach, maintain context, and follow through with greater consistency.",
    },
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
      "Bring team responsibilities, deadlines, and progress into one organized workspace. NextGen Tasks gives everyone a clearer view of what needs to happen, who is responsible, and what comes next.",
    focus: "Capture task details, notes, and due dates together.",
    focusAlt: "Classify tasks by team, priority, and source.",
    content: {
      viewsTitle: "Every Tasks workflow, organized around your team.",
      viewsDescription: "Keep individual work connected to the people, projects, and deadlines behind it. Give teams the context they need to prioritize assignments and follow progress without switching between disconnected updates.",
      viewsItems: [
        { label: "01", title: "Summary view", body: "See the tasks that need attention, upcoming deadlines, and overall progress in one focused overview." },
        { label: "02", title: "Collaboration view", body: "Keep task ownership, assignees, and ongoing updates visible so everyone knows where work stands." },
        { label: "03", title: "Progress view", body: "Review task stages and completion status to spot delays and keep work moving." },
      ],
      splits: [
        {
          id: "tasks-details",
          title: "Complete Tasks details",
          body: "Give every task a clear title, description, owner, status, and supporting context. Keep the information people need to act in one place, from initial assignment to final completion.",
          image: ticketDetails.src,
          imageAlt: ticketDetails.alt,
          imageWidth: ticketDetails.width,
          imageHeight: ticketDetails.height,
          imageSide: "right",
        },
        {
          id: "tasks-route",
          title: "Categorize and route work clearly",
          body: "Organize tasks by project, department, or priority and direct each assignment to the right people. Make responsibilities easier to understand and reduce the time spent clarifying who should take action.",
          image: ticketRoute.src,
          imageAlt: ticketRoute.alt,
          imageWidth: ticketRoute.width,
          imageHeight: ticketRoute.height,
          imageSide: "left",
        },
        {
          id: "tasks-priorities",
          title: "Set priorities and deadlines",
          body: "Distinguish urgent work from routine activity with clear priorities and due dates. Help teams plan ahead, recognize overdue tasks, and focus on the next important action.",
          image: ticketPriorities.src,
          imageAlt: ticketPriorities.alt,
          imageWidth: ticketPriorities.width,
          imageHeight: ticketPriorities.height,
          imageSide: "right",
        },
      ],
      captureTitle: "Capture every task with complete information.",
      captureDescription: "Build a reliable record of work from the moment a task is created. Centralize essential details, assignments, and progress updates so teams can pick up work with confidence.",
      captureCards: [
        { title: "Capture requests, tasks, and context", body: "Record the task objective, relevant instructions, and any project or customer context needed to begin." },
        { title: "Define responsibility, status, and priority", body: "Make ownership, current status, and urgency clear to everyone involved." },
        { title: "Keep updates and attachments together", body: "Maintain conversations, notes, and supporting files alongside the work they relate to." },
        { title: "Track progress and completion", body: "Follow changes, completed actions, and outstanding steps without losing the history of the task." },
      ],
      pathTitle: "Every task follows a clear path to completion.",
      pathDescription: "Give teams a consistent way to move from planning to delivery. Each stage makes it easier to see what has been assigned, what is underway, and what still needs attention.",
      pathItems: [
        { title: "Assign a task", body: "Create the work item, define its scope, and give it a clear owner." },
        { title: "Prioritize work", body: "Set priority and due dates so the team can plan the right order of action." },
        { title: "Track progress", body: "Update task status as work moves forward and keep stakeholders informed." },
        { title: "Collaborate easily", body: "Share updates, resolve questions, and bring work to a documented close." },
      ],
      checklistTitle: "Capture every task with complete information.",
      checklistDescription: "See ownership, activity, deadlines, and progress in one consistent view. Review work across people and projects, identify what needs follow-up, and make informed decisions with less manual coordination.",
      checklist: [
        { title: "Clear ownership", body: "Know who is responsible for each task and who else is involved." },
        { title: "Status visibility", body: "Distinguish pending, active, in-review, and completed work." },
        { title: "Deadline awareness", body: "See upcoming and overdue work before it becomes a larger issue." },
        { title: "Connected project context", body: "Keep tasks aligned with the broader projects and teams they support." },
      ],
      modulesTitle: "Related products",
      modulesDescription: "Connect Tasks with Projects, Timesheets, and Attendance to coordinate delivery, understand effort, and keep day-to-day work aligned across your organization.",
      ctaTitle: "Build a Tasks process that works for your organization",
      ctaDescription: "From daily assignments to cross-team delivery, NextGen brings structure, visibility, and accountability to the way work gets done. Keep your people aligned and every task moving toward completion.",
    },
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
      "Bring project planning, team responsibilities, tasks, and progress updates together in NextGen. Give everyone a clear view of what needs to happen, who owns it, and how work is moving toward completion.",
    focus: "Capture project scope, milestones, and updates together.",
    focusAlt: "Organize projects by team, timeline, and priority.",
    content: {
      viewsTitle: "Every Projects workflow, organized around your team.",
      viewsDescription: "Keep project information connected from the first plan to the final update. Teams can work with shared context, clear ownership, and a consistent view of progress.",
      viewsItems: [
        { label: "01", title: "Structured view", body: "See projects and their key details in one organized workspace, so important work is easy to locate and follow." },
        { label: "02", title: "Collaboration view", body: "Keep team members aligned around responsibilities, updates, and the work that needs attention." },
        { label: "03", title: "Progress view", body: "Understand the current state of each project and identify work that needs a follow-up." },
      ],
      splits: [
        {
          id: "projects-details",
          title: "Complete Projects details, without scattered information.",
          body: "Bring a project’s purpose, assigned team, relevant tasks, dates, and updates into one place. Give people the context they need to take the next step without searching across separate tools.",
          image: ticketDetails.src,
          imageAlt: ticketDetails.alt,
          imageWidth: ticketDetails.width,
          imageHeight: ticketDetails.height,
          imageSide: "right",
        },
        {
          id: "projects-route",
          title: "Organize projects around the right people.",
          body: "Assign clear ownership and connect each project to the people responsible for moving it forward. Keep responsibilities visible as work changes and new tasks are added.",
          image: ticketRoute.src,
          imageAlt: ticketRoute.alt,
          imageWidth: ticketRoute.width,
          imageHeight: ticketRoute.height,
          imageSide: "left",
        },
        {
          id: "projects-priorities",
          title: "Keep priorities and deadlines in focus.",
          body: "Make urgent work easier to recognize with visible priorities, due dates, and progress information. Help teams plan their next actions and address delays before they affect delivery.",
          image: ticketPriorities.src,
          imageAlt: ticketPriorities.alt,
          imageWidth: ticketPriorities.width,
          imageHeight: ticketPriorities.height,
          imageSide: "right",
        },
      ],
      captureTitle: "The full project picture, in one workspace.",
      captureDescription: "Keep the details behind every project accessible, consistent, and easier to work with.",
      captureCards: [
        { title: "Capture essential project details", body: "Record project names, objectives, responsibilities, and dates to establish a shared foundation for delivery." },
        { title: "Keep team ownership clear", body: "Show who is responsible for the project and how related work is distributed across the team." },
        { title: "Connect tasks and updates", body: "Keep related tasks, status changes, and activity connected to the project they support." },
        { title: "Review progress with context", body: "See what has moved forward, what remains outstanding, and where attention is required." },
      ],
      pathTitle: "Every project follows a clear path to completion.",
      pathDescription: "Turn plans into trackable work with visible steps, ownership, and progress. Give teams a consistent way to move projects from setup to delivery.",
      pathItems: [
        { title: "Assign a role", body: "Set project ownership and make responsibilities clear from the start." },
        { title: "Prioritize work", body: "Identify the work that matters most and establish the next actions." },
        { title: "Track progress", body: "Follow tasks, milestones, and updates as the project moves forward." },
        { title: "Collaborate easily", body: "Keep people aligned through shared project context and timely updates." },
      ],
      checklistTitle: "Know where every project stands.",
      checklistDescription: "Get a clearer view of project status, responsibilities, and outstanding tasks without piecing updates together manually. Use the information already in your workspace to support better follow-ups.",
      checklist: [
        { title: "Project status", body: "See the current state of work at a glance." },
        { title: "Task ownership", body: "Understand who is responsible for each next step." },
        { title: "Dates and priorities", body: "Keep deadlines and urgent work visible." },
        { title: "Progress updates", body: "Follow changes and identify items that need attention." },
      ],
      modulesTitle: "Related products",
      modulesDescription: "Connect Projects with other parts of Work Management to keep your day-to-day operations coordinated. Explore Tasks, Timesheets, and Attendance as part of a more connected way to manage work.",
      ctaTitle: "Build a Projects process that works for your organization.",
      ctaDescription: "Give teams a shared place to plan work, track responsibilities, and monitor delivery. Keep projects connected to the people and tasks behind them, from start to finish.",
    },
  }),
  timesheets: sub({
    slug: "timesheets",
    title: "Timesheets",
    parent: "work-management",
    description: "Track time against work with clear records for teams and managers.",
    heroTitle: "Track time where the work happens",
    heroDescription:
      "Keep timesheets connected to the tasks and projects your team works on. Record hours, review activity and understand where time goes without moving between disconnected tools.",
    focus: "Capture time entries, notes, and related work items together.",
    focusAlt: "Classify time by project, team, and activity type.",
    content: {
      viewsTitle: "A clearer way to manage every timesheet",
      viewsDescription: "From recording daily hours to reviewing work and tracking progress, NextGen brings the essential steps of time management into one organized workspace.",
      viewsItems: [
        { label: "01", title: "Record work as it happens", body: "Capture time against the right task or project, keeping each entry connected to the work it represents." },
        { label: "02", title: "Keep hours organized", body: "Bring recorded time, work details and reporting periods together so teams can review their activity with less effort." },
        { label: "03", title: "Review team progress", body: "See which work has been recorded and where follow-up is needed, without relying on scattered updates." },
      ],
      splits: [
        {
          id: "timesheets-details",
          title: "Every time entry, with the context you need",
          body: "Go beyond a simple hours total. View time records alongside their tasks, projects and relevant work details, making it easier to understand activity and follow up when information is missing.",
          image: ticketDetails.src,
          imageAlt: ticketDetails.alt,
          imageWidth: ticketDetails.width,
          imageHeight: ticketDetails.height,
          imageSide: "right",
        },
        {
          id: "timesheets-route",
          title: "Organize hours by task and project",
          body: "Keep logged time associated with the work it belongs to. A consistent structure makes it easier to review entries, compare workloads and keep project records clear.",
          image: ticketRoute.src,
          imageAlt: ticketRoute.alt,
          imageWidth: ticketRoute.width,
          imageHeight: ticketRoute.height,
          imageSide: "left",
        },
        {
          id: "timesheets-priorities",
          title: "Keep time aligned with priorities",
          body: "Make planned work and due dates visible alongside recorded activity. Teams can focus on what matters next while managers gain a clearer view of how time is being spent.",
          image: ticketPriorities.src,
          imageAlt: ticketPriorities.alt,
          imageWidth: ticketPriorities.width,
          imageHeight: ticketPriorities.height,
          imageSide: "right",
        },
      ],
      captureTitle: "Make every timesheet easier to understand",
      captureDescription: "Keep the important details together so time entries are useful beyond simple attendance or hour totals. Clear records support better reviews, handovers and reporting.",
      captureCards: [
        { title: "Capture accurate dates and durations", body: "Record when work took place and how much time was spent, with details that are easy to check later." },
        { title: "Connect time to actual work", body: "Associate entries with tasks and projects so recorded hours have meaningful business context." },
        { title: "Keep records easy to review", body: "Present logged work in a consistent format that helps users and managers locate the information they need." },
        { title: "Build a more reliable work history", body: "Maintain a clearer record of activity over time, helping teams understand past effort and prepare future plans." },
      ],
      pathTitle: "A straightforward path from entry to review",
      pathDescription: "A well-structured timesheet process helps teams record work consistently, check details and maintain a useful history as activity progresses.",
      pathItems: [
        { title: "Assign and plan work", body: "Connect time tracking to the tasks and projects already being managed." },
        { title: "Record the hours", body: "Add time entries as work is completed, rather than reconstructing activity later." },
        { title: "Track progress", body: "Review logged activity in the context of deadlines and ongoing work." },
        { title: "Collaborate with clarity", body: "Give the right people a shared view of recorded effort and work context." },
      ],
      checklistTitle: "Turn recorded hours into useful insight",
      checklistDescription: "View timesheet activity in a clearer format to understand effort, recognize workload patterns and support informed planning. Keep day-to-day recording connected to a broader picture of team productivity.",
      checklist: [],
      modulesTitle: "Keep timesheets connected to the rest of your work",
      modulesDescription: "Bring time tracking alongside tasks, projects and other work management tools in NextGen. Your team gets a more connected way to plan, execute and review work.",
      ctaTitle: "Make time tracking part of a better workflow",
      ctaDescription: "Give your teams a simpler way to capture hours, stay organized and see the work behind every timesheet - all within a connected NextGen workspace.",
    },
  }),
  attendance: sub({
    slug: "attendance",
    title: "Attendance",
    parent: "work-management",
    description: "Monitor attendance, shifts, and workforce presence with clear records.",
    heroTitle: "Attendance and shifts, clearly visible across your teams.",
    heroDescription:
      "Know who is working, when they checked in, and how their time aligns with scheduled shifts. NextGen Attendance brings daily attendance records and team visibility into one organized workspace.",
    focus: "Capture attendance events, shift details, and exceptions together.",
    focusAlt: "Organize attendance by team, location, and shift type.",
    content: {
      viewsTitle: "Every Attendance workflow, organized around your team.",
      viewsDescription: "From daily check-ins to attendance reviews, keep the information your team needs in one place without relying on scattered records.",
      viewsItems: [
        { label: "01", title: "Summary view", body: "See attendance activity at a glance, including check-ins, check-outs, and the records that need review." },
        { label: "02", title: "Calendar view", body: "Understand attendance across days and scheduled shifts, making it easier to spot gaps and plan ahead." },
        { label: "03", title: "Reports view", body: "Review attendance records over time and make the information easier to share with the people who need it." },
      ],
      splits: [
        {
          id: "attendance-details",
          title: "Complete Attendance details.",
          body: "Bring each employee’s attendance information together, from recorded times to the associated date and shift. Give managers a clear view of what has been logged and what may require attention.",
          image: ticketDetails.src,
          imageAlt: ticketDetails.alt,
          imageWidth: ticketDetails.width,
          imageHeight: ticketDetails.height,
          imageSide: "right",
        },
        {
          id: "attendance-route",
          title: "Keep attendance organized automatically.",
          body: "Organize records by employee, team, date, and attendance status so the right information is easier to find. Help supervisors review the relevant records without searching through separate spreadsheets.",
          image: ticketRoute.src,
          imageAlt: ticketRoute.alt,
          imageWidth: ticketRoute.width,
          imageHeight: ticketRoute.height,
          imageSide: "left",
        },
        {
          id: "attendance-priorities",
          title: "Make shifts and exceptions easier to manage.",
          body: "Keep scheduled working times and actual attendance visible together. Highlight late arrivals, missing entries, or other exceptions for timely review, rather than letting them disappear into daily records.",
          image: ticketPriorities.src,
          imageAlt: ticketPriorities.alt,
          imageWidth: ticketPriorities.width,
          imageHeight: ticketPriorities.height,
          imageSide: "right",
        },
      ],
      captureTitle: "Capture every Attendance record with the details that matter.",
      captureDescription: "Give teams a consistent way to record time and review attendance history, with enough context to understand each entry.",
      captureCards: [
        { title: "Record check-in and check-out times", body: "Keep the essential time information together for a clear view of each working day." },
        { title: "Connect records to employees and shifts", body: "Make attendance easier to understand by showing who the entry belongs to and when they were expected to work." },
        { title: "Review exceptions with context", body: "Identify unusual or incomplete attendance entries and make follow-up more straightforward." },
        { title: "Keep attendance history accessible", body: "Maintain a clear record of attendance activity so teams can refer back to earlier dates when needed." },
      ],
      pathTitle: "Every Attendance record follows a clear process.",
      pathDescription: "Bring structure to the day-to-day attendance journey, from recording work hours through review and reporting.",
      pathItems: [
        { title: "Check in", body: "Employees record the beginning of their workday." },
        { title: "Track the shift", body: "Working time is viewed alongside the relevant day or planned shift." },
        { title: "Review attendance", body: "Supervisors identify missing entries, late arrivals, and records that need clarification." },
        { title: "Close the record", body: "Completed records stay available for attendance history and reporting." },
      ],
      checklistTitle: "Turn Attendance records into useful team visibility.",
      checklistDescription: "See attendance patterns across your organization without manually combining separate logs. Give managers the information they need to understand presence, follow up on exceptions, and plan with greater confidence.",
      checklist: [
        { title: "Daily attendance overview", body: "Check who has recorded attendance for the day." },
        { title: "Shift-level visibility", body: "Review time records in relation to planned working hours." },
        { title: "Exceptions and follow-up", body: "Surface entries that may need a closer look." },
        { title: "Attendance history", body: "Refer to earlier records to understand patterns over time." },
      ],
      modulesTitle: "Related products",
      modulesDescription: "Connect Attendance with the work your teams manage every day. Explore complementary NextGen products to bring task execution, project coordination, and time records into a more connected workflow.",
      ctaTitle: "Build an Attendance process that works for your organization.",
      ctaDescription: "Give employees a simpler way to record their time and managers a clearer way to review it. NextGen Attendance helps keep daily records, shift visibility, and follow-up organized in one place.",
    },
  }),
  "contacts-crm": sub({
    slug: "contacts-crm",
    title: "Contacts & CRM",
    menuTitle: "Contacts & CRM",
    parent: "crm-sales",
    description: "Maintain a complete customer record across conversations and opportunities.",
    heroTitle: "Every contact. Every conversation. One complete view.",
    heroDescription:
      "Keep customer details, conversations, requests, and sales activity connected in a single workspace. Give your teams the context they need to respond personally, follow up confidently, and build stronger relationships.",
    focus: "Capture contact details, notes, and interaction history together.",
    focusAlt: "Organize contacts by account, owner, and relationship stage.",
    content: {
      viewsTitle: "Keep your customer relationships organized, from first contact onward.",
      viewsDescription: "Contacts & CRM brings customer information and everyday activity together, helping your teams see what has happened, what needs attention, and what comes next.",
      viewsItems: [
        { label: "01", title: "Customer view", body: "Bring contact profiles, associated requests, conversations, and relevant account information into one accessible view." },
        { label: "02", title: "Collaboration view", body: "Help sales and service teams share context, coordinate ownership, and stay informed as customer needs evolve." },
        { label: "03", title: "Progress view", body: "See open follow-ups, recent interactions, and developing opportunities without switching between disconnected tools." },
      ],
      splits: [
        {
          id: "contacts-crm-details",
          title: "Customer details that stay connected to the work.",
          body: "Build a clearer picture of every relationship with organized contact information, company associations, conversation history, and linked customer activity. Teams can find relevant context quickly rather than rebuilding it at each interaction.",
          image: ticketDetails.src,
          imageAlt: ticketDetails.alt,
          imageWidth: ticketDetails.width,
          imageHeight: ticketDetails.height,
          imageSide: "right",
        },
        {
          id: "contacts-crm-route",
          title: "Keep the right customer information in the right hands.",
          body: "Organize contacts by company, department, or other relevant attributes, and connect customer work to the appropriate people and teams. Maintain clear ownership so requests and follow-ups do not lose context.",
          image: ticketRoute.src,
          imageAlt: ticketRoute.alt,
          imageWidth: ticketRoute.width,
          imageHeight: ticketRoute.height,
          imageSide: "left",
        },
        {
          id: "contacts-crm-priorities",
          title: "Give every follow-up a clear next step.",
          body: "Turn important customer conversations into trackable actions. Assign responsibility, set due dates, and keep upcoming commitments visible so your teams can follow through consistently.",
          image: ticketPriorities.src,
          imageAlt: ticketPriorities.alt,
          imageWidth: ticketPriorities.width,
          imageHeight: ticketPriorities.height,
          imageSide: "right",
        },
      ],
      captureTitle: "Keep the full customer story within reach.",
      captureDescription: "Give teams the details behind every interaction, from the original request to the latest response, so decisions are made with better context.",
      captureCards: [
        { title: "Capture customer details and context", body: "Maintain contact information, company relationships, preferences, and relevant notes in an organized record." },
        { title: "Organize ownership and follow-ups", body: "See who is responsible for an account or action and what needs to happen next." },
        { title: "Connect conversations and related work", body: "Keep linked tickets, tasks, and communication history accessible alongside customer information." },
        { title: "Track activity and relationship history", body: "Review key updates and previous interactions to support consistent, informed communication." },
      ],
      pathTitle: "A clear path from new contact to lasting relationship.",
      pathDescription: "Keep customer information and the actions around it connected at every stage, giving teams a simple process they can follow together.",
      pathItems: [
        { title: "Create a contact", body: "Capture essential customer or company details to establish a useful starting record." },
        { title: "Build customer context", body: "Link conversations, requests, and other relevant information as the relationship develops." },
        { title: "Manage follow-ups", body: "Assign tasks, plan next actions, and keep owners aligned on commitments." },
        { title: "Collaborate and grow", body: "Use shared history and visible activity to support customers and identify the next opportunity." },
      ],
      checklistTitle: "Customer records that help teams act with confidence.",
      checklistDescription: "Access relevant contact data, relationship history, linked work, and follow-up activity in one place. Make it easier to understand customer needs, maintain continuity, and recognize opportunities for better engagement.",
      checklist: [
        { title: "Connected records", body: "Keep contacts and their associated business activity easy to reference." },
        { title: "Shared context", body: "Reduce repeated questions by making interaction history visible to the people who need it." },
        { title: "Clear ownership", body: "Give teams a straightforward view of responsibilities and pending actions." },
        { title: "Better follow-through", body: "Track next steps and upcoming commitments so important conversations continue." },
      ],
      modulesTitle: "Connect Contacts & CRM with Leads.",
      modulesDescription: "Bring your contact records and lead management into a connected workflow. Give your team a clearer route from initial interest to timely follow-up and ongoing customer engagement.",
      ctaTitle: "Build customer relationships on better information.",
      ctaDescription: "Bring customer records, conversations, follow-ups, and teamwork into one connected workspace. With NextGen Contacts & CRM, teams can spend less time searching for context and more time supporting customers and developing relationships.",
    },
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
      "Keep new enquiries, prospect details, and follow-up activity connected in one place. Give your team the context to qualify opportunities, respond at the right time, and move promising conversations towards a sale.",
    focus: "Capture lead source, notes, and next steps together.",
    focusAlt: "Classify leads by channel, owner, and qualification stage.",
    content: {
      viewsTitle: "Every Leads workflow, organized around your team.",
      viewsDescription: "From the first enquiry to the next sales conversation, bring lead information, ownership, and activity into a clear workflow so your team knows what to do next.",
      viewsItems: [
        { label: "01", title: "Summary view", body: "See your lead pipeline at a glance, including what needs attention, where each lead stands, and who is responsible." },
        { label: "02", title: "Collaboration view", body: "Keep notes, updates, and follow-up conversations connected so teammates can pick up work with the context they need." },
        { label: "03", title: "Progress view", body: "Understand which leads are moving, which are waiting, and where your team should focus next." },
      ],
      splits: [
        {
          id: "leads-details",
          title: "Complete Leads details",
          body: "Bring contact information, enquiry history, source details, assigned owners, and follow-up notes together in a single record. Make every next conversation informed by what has already happened.",
          image: ticketDetails.src,
          imageAlt: ticketDetails.alt,
          imageWidth: ticketDetails.width,
          imageHeight: ticketDetails.height,
          imageSide: "right",
        },
        {
          id: "leads-route",
          title: "Connect the right leads with the right people.",
          body: "Organize leads by source, interest, status, or priority and assign them to the team members best placed to follow up. Keep ownership clear as enquiries move through your sales process.",
          image: ticketRoute.src,
          imageAlt: ticketRoute.alt,
          imageWidth: ticketRoute.width,
          imageHeight: ticketRoute.height,
          imageSide: "left",
        },
        {
          id: "leads-priorities",
          title: "Make every follow-up count.",
          body: "Give time-sensitive enquiries the attention they deserve. Set priorities and follow-up dates so important conversations stay visible and leads are not left waiting.",
          image: ticketPriorities.src,
          imageAlt: ticketPriorities.alt,
          imageWidth: ticketPriorities.width,
          imageHeight: ticketPriorities.height,
          imageSide: "right",
        },
      ],
      captureTitle: "Give every lead the context it deserves.",
      captureDescription: "Build a more useful picture of each prospect by keeping the details your team needs close to the work.",
      captureCards: [
        { title: "Capture enquiry details", body: "Record contact information, requirements, and the reason for each enquiry without scattering details across tools." },
        { title: "Qualify opportunities with clarity", body: "Keep qualification notes, lead status, and next steps visible so the team can focus on relevant opportunities." },
        { title: "Keep conversations together", body: "Connect notes and interaction history to the lead record so every follow-up starts with context." },
        { title: "Maintain clear ownership", body: "Show who is responsible, when the next action is due, and what progress has been made." },
      ],
      pathTitle: "Every lead follows a clear path from enquiry to opportunity.",
      pathDescription: "Create consistency from the first contact through qualification and handoff. Give teams a shared view of each stage without losing the flexibility to work the way they need.",
      pathItems: [
        { title: "Assign a lead", body: "Give each incoming enquiry a clear owner and a defined next step." },
        { title: "Prioritize work", body: "Identify the leads that need attention first based on urgency and potential." },
        { title: "Track progress", body: "Record conversations, status changes, and follow-ups as the relationship develops." },
        { title: "Collaborate easily", body: "Share context across colleagues so the right person can continue the conversation." },
      ],
      checklistTitle: "See the complete picture behind every lead.",
      checklistDescription: "Bring together the information that matters for follow-through and reporting, from ownership and contact history to qualification, activity, and upcoming actions.",
      checklist: [
        { title: "Contact and company context", body: "Keep essential prospect and company details accessible to the team." },
        { title: "Interaction history", body: "Review previous conversations and updates before taking the next step." },
        { title: "Lead ownership and status", body: "Understand who is working each lead and how far it has progressed." },
        { title: "Follow-up visibility", body: "Spot pending actions and keep your sales conversations moving." },
      ],
      modulesTitle: "Related products",
      modulesDescription: "Connect Leads with Contacts & CRM to keep prospect information and customer relationships consistent as opportunities develop.",
      ctaTitle: "Build a Leads process that works for your organization.",
      ctaDescription: "Give your team a connected way to capture enquiries, organize follow-ups, and collaborate around opportunities. NextGen helps turn scattered lead activity into a clearer, more manageable sales workflow.",
    },
  }),
  dashboard: sub({
    slug: "dashboard",
    title: "Dashboard",
    parent: "analytics",
    description: "Monitor live operational metrics across service, work, and sales activity.",
    heroTitle: "See what matters. Act with confidence.",
    heroDescription:
      "Bring the numbers, trends and operational updates your team relies on into clear, connected dashboards. Spot what needs attention, understand performance and make informed decisions without switching between reports.",
    focus: "Capture the metrics, filters, and views each team needs.",
    focusAlt: "Organize dashboards by team, KPI, and reporting period.",
    content: {
      viewsTitle: "Make operational performance easier to understand",
      viewsDescription: "Turn activity across teams and services into a consistent view of progress. From everyday monitoring to deeper reporting, Dashboards helps the right people see the information they need.",
      viewsItems: [
        { label: "01", title: "Live operational views", body: "Follow changes in tickets, tasks, workload and team activity as information is updated." },
        { label: "02", title: "Shared dashboards", body: "Give teams a common view of priorities, progress and outcomes without maintaining separate spreadsheets." },
        { label: "03", title: "Deeper reporting", body: "Explore patterns and compare performance over time to understand where improvements are needed." },
      ],
      splits: [
        {
          id: "dashboard-details",
          title: "All the details behind your key metrics",
          body: "Move beyond headline numbers to the records, categories and activity that explain them. Review performance in context so teams can understand what changed and where to focus next.",
          image: ticketDetails.src,
          imageAlt: ticketDetails.alt,
          imageWidth: ticketDetails.width,
          imageHeight: ticketDetails.height,
          imageSide: "right",
        },
        {
          id: "dashboard-route",
          title: "Organize insights around the way teams work",
          body: "Group dashboards and metrics by department, workflow or business priority. Keep relevant information within easy reach and make it simpler for each team to monitor its responsibilities.",
          image: ticketRoute.src,
          imageAlt: ticketRoute.alt,
          imageWidth: ticketRoute.width,
          imageHeight: ticketRoute.height,
          imageSide: "left",
        },
        {
          id: "dashboard-priorities",
          title: "Keep targets, thresholds and deadlines in view",
          body: "Monitor the measures that matter, highlight exceptions and follow progress against operational goals. Help teams identify issues earlier and take the next step with greater clarity.",
          image: ticketPriorities.src,
          imageAlt: ticketPriorities.alt,
          imageWidth: ticketPriorities.width,
          imageHeight: ticketPriorities.height,
          imageSide: "right",
        },
      ],
      captureTitle: "Build a complete picture of performance",
      captureDescription: "Connect the metrics, context and reporting details that make dashboards useful for everyday decisions.",
      captureCards: [
        { title: "Track activity and outcomes", body: "View key totals, status changes and completion figures together rather than checking disconnected sources." },
        { title: "Understand performance over time", body: "Compare periods and recognize recurring trends in workload, response and progress." },
        { title: "Explore underlying records", body: "Use detailed views to investigate the tickets, projects or tasks contributing to a result." },
        { title: "Keep teams informed", body: "Share consistent reporting views so managers and teams work from the same information." },
      ],
      pathTitle: "From connected data to clearer decisions",
      pathDescription: "A straightforward reporting flow helps teams move from collecting activity to understanding results and acting on what they see.",
      pathItems: [
        { title: "Connect the information", body: "Bring relevant operational records and measures into the dashboard view." },
        { title: "Organize the metrics", body: "Group related measures so each dashboard answers a clear business question." },
        { title: "Review progress", body: "Follow trends, exceptions and changes across teams and reporting periods." },
        { title: "Take informed action", body: "Use the findings to prioritize follow-ups and improve day-to-day operations." },
      ],
      checklistTitle: "The context you need, alongside every metric",
      checklistDescription: "Keep essential reporting information easy to find so performance discussions are based on evidence, not guesswork.",
      checklist: [
        { title: "Operational activity", body: "See volumes and changes across the work your teams manage." },
        { title: "Status and progress", body: "Understand what is pending, in progress, completed or awaiting review." },
        { title: "Trends and comparisons", body: "Compare results across time periods to identify patterns and exceptions." },
        { title: "Team-level visibility", body: "Review the measures relevant to each team and its responsibilities." },
      ],
      modulesTitle: "Connect Dashboards with the rest of your workspace",
      modulesDescription: "Bring reporting closer to daily operations by using Dashboards alongside the other NextGen products your teams already work with.",
      ctaTitle: "Make every decision better informed",
      ctaDescription: "Give teams a clearer view of work, performance and priorities in one connected environment. With Dashboards, operational insight becomes part of the way your organization works every day.",
    },
  }),
  "power-bi": sub({
    slug: "power-bi",
    title: "Power BI",
    parent: "analytics",
    description: "Extend operational reporting with deeper Power BI analysis.",
    heroTitle: "Power BI reporting that brings the whole picture together",
    heroDescription:
      "Connect operational data with Power BI to explore trends, compare performance, and give teams a clearer understanding of what drives results.",
    focus: "Connect operational datasets and report definitions together.",
    focusAlt: "Organize Power BI views by domain, audience, and refresh needs.",
    content: {
      viewsTitle: "From connected data to confident decisions",
      viewsDescription: "Bring reporting sources, dashboards, and business context into a workflow that makes insights easier to access, interpret, and share.",
      viewsItems: [
        { label: "01", title: "Source view", body: "See which operational data contributes to your reports, so teams understand where the numbers come from." },
        { label: "02", title: "Collaboration view", body: "Share consistent reporting views with the people responsible for reviewing performance and taking action." },
        { label: "03", title: "Progress view", body: "Follow reporting updates and changing results over time without losing sight of the bigger picture." },
      ],
      splits: [
        {
          id: "power-bi-details",
          title: "Complete Power BI details",
          body: "Keep reporting context, connected data, ownership, and dashboard information organized so users can understand and use every report with confidence.",
          image: ticketDetails.src,
          imageAlt: ticketDetails.alt,
          imageWidth: ticketDetails.width,
          imageHeight: ticketDetails.height,
          imageSide: "right",
        },
        {
          id: "power-bi-route",
          title: "Bring the right data into the right view",
          body: "Organize reporting by team, department, or business activity to help users focus on relevant metrics and reduce time spent navigating unrelated information.",
          image: ticketRoute.src,
          imageAlt: ticketRoute.alt,
          imageWidth: ticketRoute.width,
          imageHeight: ticketRoute.height,
          imageSide: "left",
        },
        {
          id: "power-bi-priorities",
          title: "Keep important metrics in focus",
          body: "Identify the measures that matter most, monitor changes against business goals, and help decision-makers recognize areas that need attention.",
          image: ticketPriorities.src,
          imageAlt: ticketPriorities.alt,
          imageWidth: ticketPriorities.width,
          imageHeight: ticketPriorities.height,
          imageSide: "right",
        },
      ],
      captureTitle: "Give every report the context it needs",
      captureDescription: "Make Power BI reporting more useful with clear definitions, accountable ownership, and consistent access to supporting information.",
      captureCards: [
        { title: "Connect reporting sources", body: "Bring related operational information together to support a more complete reporting view." },
        { title: "Clarify metrics and ownership", body: "Define what each key measure represents and who is responsible for reviewing it." },
        { title: "Keep reporting information current", body: "Maintain consistent reporting context as teams, activities, and operational requirements evolve." },
        { title: "Support decisions with evidence", body: "Use shared reports and supporting records to guide reviews, follow-ups, and operational improvements." },
      ],
      pathTitle: "A clear path from data to insight",
      pathDescription: "Turn business information into reporting that people can review, discuss, and act on through a consistent process.",
      pathItems: [
        { title: "Connect data", body: "Identify relevant operational sources and bring the required information into the reporting process." },
        { title: "Prepare reports", body: "Organize measures and views so the right information is presented clearly." },
        { title: "Review performance", body: "Explore trends, compare results, and identify changes requiring further attention." },
        { title: "Share findings", body: "Put relevant insights in front of teams and decision-makers to support next steps." },
      ],
      checklistTitle: "Make reporting easier to understand and act on",
      checklistDescription: "Help teams move beyond isolated numbers with shared visibility into performance, reporting context, and operational priorities.",
      checklist: [
        { title: "Consistent performance views", body: "Compare results using clear, repeatable reporting structures." },
        { title: "Connected operational context", body: "Understand the work and activity behind the numbers." },
        { title: "Clear reporting ownership", body: "Know who maintains, reviews, and follows up on important reports." },
        { title: "Trend-based decisions", body: "Identify meaningful patterns and focus improvements where they matter." },
        { title: "Accessible business insights", body: "Make information easier for relevant teams to review and discuss." },
      ],
      modulesTitle: "Related products",
      modulesDescription: "Explore how Dashboards and Power BI support different reporting needs, from everyday operational visibility to deeper analysis across teams.",
      ctaTitle: "Build a Power BI reporting process that works for your organization",
      ctaDescription: "Connect reporting to the work your teams already do. Give stakeholders clearer information, more consistent reviews, and a stronger foundation for informed decisions.",
    },
  }),
  permissions: sub({
    slug: "permissions",
    title: "Permissions",
    parent: "governance",
    description: "Control who can view, edit, and approve work across the platform.",
    heroTitle: "Permissions that reflect how your organization works.",
    heroDescription:
      "Give every team member access to the tools and information they need, while keeping sensitive actions and data under the right controls.",
    focus: "Capture roles, access levels, and exceptions in one place.",
    focusAlt: "Classify permissions by role, team, and resource type.",
    content: {
      viewsTitle: "Every Permissions workflow, clear from the start.",
      viewsDescription: "Make access easier to understand, manage, and review across teams with structured permissions and defined responsibilities.",
      viewsItems: [
        { label: "01", title: "Summary view", body: "See who has access to what, identify gaps, and review permission settings from one organized workspace." },
        { label: "02", title: "Collaboration view", body: "Keep administrators and department leads aligned when access needs change across teams." },
        { label: "03", title: "Progress view", body: "Follow access requests and changes from submission through review and completion." },
      ],
      splits: [
        {
          id: "permissions-details",
          title: "Keep every permission detail in one place.",
          body: "Review roles, assigned users, access levels, and relevant changes without switching between disconnected records. Give administrators the context to make informed access decisions.",
          image: ticketDetails.src,
          imageAlt: ticketDetails.alt,
          imageWidth: ticketDetails.width,
          imageHeight: ticketDetails.height,
          imageSide: "right",
        },
        {
          id: "permissions-route",
          title: "Assign access with structure and clarity.",
          body: "Organize permissions around roles, teams, and responsibilities so the right people can access the right features. Keep assignments consistent as your organization grows.",
          image: ticketRoute.src,
          imageAlt: ticketRoute.alt,
          imageWidth: ticketRoute.width,
          imageHeight: ticketRoute.height,
          imageSide: "left",
        },
        {
          id: "permissions-priorities",
          title: "Stay ahead of access requests and reviews.",
          body: "Give time-sensitive permission requests the attention they need, assign reviewers, and keep approvals moving without losing visibility of outstanding decisions.",
          image: ticketPriorities.src,
          imageAlt: ticketPriorities.alt,
          imageWidth: ticketPriorities.width,
          imageHeight: ticketPriorities.height,
          imageSide: "right",
        },
      ],
      captureTitle: "Everything needed to manage permissions, together.",
      captureDescription: "Bring access context, ownership, decisions, and history into a single view so administrators can work confidently and consistently.",
      captureCards: [
        { title: "Capture roles and access levels", body: "See which roles grant access to specific areas of the platform and understand what each permission allows." },
        { title: "Manage users, teams, and responsibilities", body: "Connect permission assignments with the people and departments responsible for each area." },
        { title: "Keep decisions and changes traceable", body: "Maintain visibility into access updates, including the reason for a change and who authorized it." },
        { title: "Review access with the right context", body: "Use the available details to check whether permissions still match a person’s responsibilities." },
      ],
      pathTitle: "A clear path from access request to approval.",
      pathDescription: "Give every permission change a defined process, with clear ownership and visibility at each step.",
      pathItems: [
        { title: "Request access", body: "A user or administrator identifies the access needed for a role or responsibility." },
        { title: "Review permissions", body: "An authorized reviewer checks the requested access against the person’s responsibilities." },
        { title: "Apply the decision", body: "Approved changes are assigned and reflected in the relevant permission settings." },
        { title: "Track the outcome", body: "Keep a clear record of the request, decision, and resulting access change." },
      ],
      checklistTitle: "Make access easier to review and maintain.",
      checklistDescription: "Understand how permissions are assigned across the organization and support regular reviews as responsibilities change.",
      checklist: [
        { title: "Role-based visibility", body: "View permissions by role to understand what each group can do." },
        { title: "User-level access", body: "Check the permissions assigned to individual users." },
        { title: "Clear ownership", body: "Identify who is responsible for reviewing or managing access." },
        { title: "Change visibility", body: "Follow permission updates and decisions over time." },
        { title: "Consistent controls", body: "Apply a structured approach to access across departments." },
      ],
      modulesTitle: "Connect Permissions with your wider governance workflow.",
      modulesDescription: "Explore the other governance products that help organize approvals, reporting relationships, verification, and operational control.",
      ctaTitle: "Build a Permissions process that works for your organization.",
      ctaDescription: "Bring role assignments, access reviews, and permission oversight into a clearer, more manageable process as your teams and responsibilities evolve.",
    },
  }),
  approvals: sub({
    slug: "approvals",
    title: "Approvals",
    parent: "governance",
    description: "Route requests through multi-level approval flows with full visibility.",
    heroTitle: "Make every approval clear, accountable, and easy to move forward.",
    heroDescription:
      "Bring requests, reviewers, decisions, and supporting information into one place. NextGen Approvals helps teams route work to the right people, reduce follow-ups, and maintain a clear record of every decision.",
    focus: "Capture approval requests, comments, and outcomes together.",
    focusAlt: "Organize approvals by type, level, and owning team.",
    content: {
      viewsTitle: "Every approval, organized around the way your team works.",
      viewsDescription: "Give teams a consistent way to submit, review, and track approvals without losing context across conversations, departments, or handoffs.",
      viewsItems: [
        { label: "01", title: "Submission view", body: "Capture what needs approval, why it matters, and who is requesting it—so reviewers have the right context from the start." },
        { label: "02", title: "Collaboration view", body: "Keep reviewers, requesters, and relevant teams aligned through shared updates, comments, and visible decisions." },
        { label: "03", title: "Progress view", body: "See what is pending, approved, or returned for changes, and identify where a request needs attention next." },
      ],
      splits: [
        {
          id: "approvals-details",
          title: "Everything a reviewer needs, in one approval record.",
          body: "Keep each approval connected to its request details, documents, stakeholders, comments, and decision history. Reviewers can understand the context and take action without searching across separate tools.",
          image: ticketDetails.src,
          imageAlt: ticketDetails.alt,
          imageWidth: ticketDetails.width,
          imageHeight: ticketDetails.height,
          imageSide: "right",
        },
        {
          id: "approvals-route",
          title: "Send approval requests to the right people.",
          body: "Organize requests by type, team, or business requirement and direct them through defined approval paths. Clear ownership helps reduce delays and keeps work moving to the next reviewer.",
          image: ticketRoute.src,
          imageAlt: ticketRoute.alt,
          imageWidth: ticketRoute.width,
          imageHeight: ticketRoute.height,
          imageSide: "left",
        },
        {
          id: "approvals-priorities",
          title: "Keep critical approvals on schedule.",
          body: "Set due dates and priorities so teams can distinguish urgent decisions from routine reviews. Make outstanding requests easier to spot and follow up on before they become bottlenecks.",
          image: ticketPriorities.src,
          imageAlt: ticketPriorities.alt,
          imageWidth: ticketPriorities.width,
          imageHeight: ticketPriorities.height,
          imageSide: "right",
        },
      ],
      captureTitle: "Capture the full context behind every approval.",
      captureDescription: "Standardize the information collected at each stage, giving decision-makers a complete and reliable view of the request.",
      captureCards: [
        { title: "Capture requests and supporting details", body: "Record the purpose, scope, requester, and supporting files in a consistent approval record." },
        { title: "Define reviewers and decision paths", body: "Set who must review, in what order, and what happens when additional input is required." },
        { title: "Keep decisions and comments together", body: "Retain approvals, rejections, requested changes, and relevant discussion alongside the original request." },
        { title: "Maintain an auditable history", body: "Track decision dates, participants, status changes, and actions so teams can review how an outcome was reached." },
      ],
      pathTitle: "A clear path from request to final decision.",
      pathDescription: "Make the next step visible at every point, from submitting a request through review, resolution, and recordkeeping.",
      pathItems: [
        { title: "Submit a request", body: "Create an approval request with the necessary context, supporting information, and intended reviewers." },
        { title: "Review and respond", body: "Route the request to the designated reviewer, who can approve it, decline it, or ask for changes." },
        { title: "Track progress", body: "Monitor pending decisions, review stages, and follow-ups without chasing updates across channels." },
        { title: "Close with a decision record", body: "Confirm the outcome and retain the supporting history for future reference and accountability." },
      ],
      checklistTitle: "Turn approval activity into actionable oversight.",
      checklistDescription: "Understand request volumes, pending work, and review outcomes through a clear view of approval activity. Use these insights to spot delays, improve ownership, and refine approval processes.",
      checklist: [
        { title: "Track pending requests", body: "See which approvals are awaiting action and who is responsible for the next decision." },
        { title: "Review turnaround times", body: "Identify slow-moving stages and opportunities to improve response times." },
        { title: "Understand decision outcomes", body: "Review approved, declined, and returned requests to spot recurring issues." },
        { title: "Keep records accessible", body: "Find previous decisions and supporting information when teams need to verify what happened." },
      ],
      modulesTitle: "Connect Approvals with the rest of your governance workflow.",
      modulesDescription: "Keep approval decisions connected to the policies, permissions, and records that shape how your organization operates. Explore the related NextGen products shown in this section to build a more consistent governance process.",
      ctaTitle: "Build an approval process that works for your organization.",
      ctaDescription: "Bring structure to everyday decisions without adding unnecessary complexity. With clearer responsibilities, connected information, and visible progress, teams can move work forward with greater confidence.",
    },
  }),
  "policy-docs": sub({
    slug: "policy-docs",
    title: "Policy Docs",
    parent: "governance",
    description: "Distribute policies and track acknowledgements across the organization.",
    heroTitle: "Keep every policy clear, accessible, and accountable.",
    heroDescription:
      "Bring company policies into one organized workspace where teams can find the latest guidance, understand their responsibilities, and acknowledge important updates. NextGen Policy Docs helps organizations maintain consistency without relying on scattered files or manual follow-ups.",
    focus: "Capture policy versions, audiences, and acknowledgement status.",
    focusAlt: "Organize policies by department, risk level, and review cycle.",
    content: {
      viewsTitle: "Every Policy Docs workflow, organized around your team.",
      viewsDescription: "Give employees a clear way to find, review, and acknowledge policies while helping administrators maintain visibility over documents, versions, and outstanding actions.",
      viewsItems: [
        { label: "01", title: "Summary view", body: "See policy documents, publication status, and pending acknowledgements together, so the next action is always clear." },
        { label: "02", title: "Collaboration view", body: "Make it easier for departments and reviewers to coordinate updates and keep policy information consistent." },
        { label: "03", title: "Progress view", body: "Track which policies have been shared, reviewed, and acknowledged without chasing updates manually." },
      ],
      splits: [
        {
          id: "policy-docs-details",
          title: "Complete Policy Docs details, without the document chaos.",
          body: "Keep each policy connected to its purpose, owner, department, current version, and related requirements. Give your team the context it needs to follow the right guidance with confidence.",
          image: ticketDetails.src,
          imageAlt: ticketDetails.alt,
          imageWidth: ticketDetails.width,
          imageHeight: ticketDetails.height,
          imageSide: "right",
        },
        {
          id: "policy-docs-route",
          title: "Organize policies so the right people can find them.",
          body: "Structure documents by department, category, or responsibility and make relevant policies easier to discover. Clear organization reduces confusion and helps employees work from the correct information.",
          image: ticketRoute.src,
          imageAlt: ticketRoute.alt,
          imageWidth: ticketRoute.width,
          imageHeight: ticketRoute.height,
          imageSide: "left",
        },
        {
          id: "policy-docs-priorities",
          title: "Keep policy reviews and acknowledgements on track.",
          body: "Set review dates and track outstanding acknowledgements so important updates are not overlooked. Give responsible teams a clearer view of what needs attention and when.",
          image: ticketPriorities.src,
          imageAlt: ticketPriorities.alt,
          imageWidth: ticketPriorities.width,
          imageHeight: ticketPriorities.height,
          imageSide: "right",
        },
      ],
      captureTitle: "Keep every policy documented and understood.",
      captureDescription: "Move beyond file storage with a structured approach to policy information, responsibility, communication, and follow-up.",
      captureCards: [
        { title: "Keep policy information together", body: "Store titles, descriptions, versions, owners, and related details in one organized place." },
        { title: "Make the latest guidance easier to find", body: "Help employees locate relevant policies and reduce reliance on outdated copies or fragmented folders." },
        { title: "Track acknowledgement and review", body: "Maintain visibility into which documents require attention and what has already been completed." },
        { title: "Support accountability across teams", body: "Connect each policy to the people and departments responsible for its review and communication." },
      ],
      pathTitle: "Every Policy Docs item follows a clear path.",
      pathDescription: "From drafting and review to publication and acknowledgement, make each stage visible so teams know the status of a policy and what action comes next.",
      pathItems: [
        { title: "Create and organize", body: "Add policy details and assign a clear owner so documents begin with the right context." },
        { title: "Review and approve", body: "Coordinate reviews with the relevant stakeholders before guidance is distributed." },
        { title: "Publish and share", body: "Make approved policies accessible to the teams that need them." },
        { title: "Acknowledge and maintain", body: "Track acknowledgements and revisit policies when updates or periodic reviews are due." },
      ],
      checklistTitle: "Make policy records easier to manage and audit.",
      checklistDescription: "Maintain an organized view of document ownership, versions, review activity, and acknowledgement status. Clear records help teams answer questions about which guidance was shared and when.",
      checklist: [
        { title: "Clear document ownership", body: "Make responsibility visible for each policy and its updates." },
        { title: "Version and review context", body: "Keep important changes and review milestones connected to the relevant document." },
        { title: "Acknowledgement visibility", body: "Identify policies that still require employee attention." },
        { title: "Organized policy history", body: "Maintain usable context for internal reviews and governance activities." },
      ],
      modulesTitle: "Connect Policy Docs with your wider governance processes.",
      modulesDescription: "Explore how Policy Docs works alongside other NextGen Governance & Compliance products to support consistent access, accountability, and operational oversight.",
      ctaTitle: "Make policy management simpler for every team.",
      ctaDescription: "Give your organization one place to organize policies, communicate updates, and keep responsibilities visible. With NextGen Policy Docs, important guidance becomes easier to manage and easier for people to follow.",
    },
  }),
  "org-hierarchy": sub({
    slug: "org-hierarchy",
    title: "Org Hierarchy",
    parent: "governance",
    description: "Model teams, reporting lines, and ownership across the business.",
    heroTitle: "Make ownership clear across every level of your organization",
    heroDescription:
      "Build a connected organizational structure where teams know who they report to, managers understand their responsibilities, and work reaches the right people without unnecessary handoffs.",
    focus: "Capture teams, managers, and reporting relationships together.",
    focusAlt: "Organize hierarchy by division, function, and location.",
    content: {
      viewsTitle: "A clearer view of how your organization works",
      viewsDescription: "Bring reporting relationships, team responsibilities, and approval paths into one organized view so everyone can see where decisions belong and how work moves between teams.",
      viewsItems: [
        { label: "01", title: "Structure view", body: "See departments, teams, and reporting lines in a clear hierarchy that makes organizational relationships easier to understand." },
        { label: "02", title: "Collaboration view", body: "Help employees and managers identify the right contacts and work together across functions." },
        { label: "03", title: "Progress view", body: "Follow assigned responsibilities and outstanding actions without losing sight of accountability." },
      ],
      splits: [
        {
          id: "org-hierarchy-details",
          title: "Understand every role and reporting relationship",
          body: "Keep essential information about departments, positions, and reporting connections in one place. Give teams a reliable view of who owns what and who to contact when support or a decision is needed.",
          image: ticketDetails.src,
          imageAlt: ticketDetails.alt,
          imageWidth: ticketDetails.width,
          imageHeight: ticketDetails.height,
          imageSide: "right",
        },
        {
          id: "org-hierarchy-route",
          title: "Direct work through the right reporting lines",
          body: "Connect responsibilities to the relevant departments, teams, and managers so requests and decisions follow a defined organizational path rather than relying on guesswork.",
          image: ticketRoute.src,
          imageAlt: ticketRoute.alt,
          imageWidth: ticketRoute.width,
          imageHeight: ticketRoute.height,
          imageSide: "left",
        },
        {
          id: "org-hierarchy-priorities",
          title: "Keep responsibilities moving on schedule",
          body: "Make important requests and tasks visible to their owners. With clear priorities and target dates, managers can identify outstanding work early and help teams stay accountable.",
          image: ticketPriorities.src,
          imageAlt: ticketPriorities.alt,
          imageWidth: ticketPriorities.width,
          imageHeight: ticketPriorities.height,
          imageSide: "right",
        },
      ],
      captureTitle: "Keep organizational information complete and accessible",
      captureDescription: "Capture the context people need to understand a role, a responsibility, or a decision. Consistent records help teams coordinate and reduce confusion as the organization grows.",
      captureCards: [
        { title: "Capture responsibilities and contacts", body: "Record each role’s responsibilities, team placement, and relevant contacts so ownership is easy to identify." },
        { title: "Clarify reporting and approval paths", body: "Make it easier to understand who reviews, approves, or escalates work at each level." },
        { title: "Keep organizational changes visible", body: "Maintain an understandable record of reporting changes and updates to team responsibilities." },
        { title: "Give teams the right context", body: "Bring people, departments, and related work together so decisions are informed by the correct organizational context." },
      ],
      pathTitle: "A clear path from assigning ownership to completing work",
      pathDescription: "Establish responsibilities, route work through the appropriate reporting structure, track progress, and maintain visibility as actions are completed.",
      pathItems: [
        { title: "Assign a role", body: "Identify the responsible person or team and clarify where the work belongs within the hierarchy." },
        { title: "Prioritize work", body: "Set expectations and urgency so the right people understand what needs attention first." },
        { title: "Track progress", body: "Monitor outstanding work and keep reporting lines informed as activities move forward." },
        { title: "Collaborate easily", body: "Connect colleagues and managers around shared responsibilities to resolve questions and complete work." },
      ],
      checklistTitle: "Make organizational responsibilities easier to manage",
      checklistDescription: "Use a clearer picture of teams, reporting relationships, and assigned work to identify gaps, improve handoffs, and support decisions with better context.",
      checklist: [
        { title: "Understand the structure", body: "See how departments and teams connect and where responsibility sits." },
        { title: "Reduce ownership gaps", body: "Spot work without a clear owner and direct it to the right person or team." },
        { title: "Support coordinated decisions", body: "Help managers act with an understanding of reporting lines and shared responsibilities." },
        { title: "Adapt as teams change", body: "Keep the organizational view useful as roles and structures evolve." },
      ],
      modulesTitle: "Connect Org Hierarchy with the rest of your workspace",
      modulesDescription: "Org Hierarchy works best as part of a connected approach to managing people, responsibilities, and operations. Explore related NextGen products to support the wider workflow.",
      ctaTitle: "Build an organizational structure that supports better work",
      ctaDescription: "Bring clarity to ownership, simplify collaboration between teams, and make everyday responsibilities easier to manage with a connected Org Hierarchy workspace.",
    },
  }),
  kyc: sub({
    slug: "kyc",
    title: "KYC",
    parent: "governance",
    description: "Track KYC checks and risk monitoring with clear evidence and status.",
    heroTitle: "Keep every KYC check clear, accountable, and easy to track.",
    heroDescription:
      "Bring identity verification, risk checks, supporting documents, and review decisions into one organized workflow. Give teams the context they need to progress each KYC case without losing visibility or control.",
    focus: "Capture KYC submissions, documents, and review notes together.",
    focusAlt: "Organize KYC cases by risk level, owner, and review stage.",
    content: {
      viewsTitle: "Every KYC workflow, organized around your team.",
      viewsDescription: "Keep KYC cases structured from initial review to final decision. Organize evidence, coordinate reviewers, and make it easier to see what needs attention at every stage.",
      viewsItems: [
        { label: "01", title: "Structured view", body: "See KYC cases, supporting documents, owners, and current status together, without searching through disconnected records." },
        { label: "02", title: "Collaborative view", body: "Give reviewers shared context, clear responsibilities, and a consistent place to record updates and decisions." },
        { label: "03", title: "Progress view", body: "Understand which checks are complete, which are pending, and what needs to happen next." },
      ],
      splits: [
        {
          id: "kyc-details",
          title: "Complete KYC details in one place.",
          body: "Keep identity information, verification requirements, risk observations, supporting evidence, and reviewer notes connected to the right case. Teams can understand each request quickly and follow its history.",
          image: ticketDetails.src,
          imageAlt: ticketDetails.alt,
          imageWidth: ticketDetails.width,
          imageHeight: ticketDetails.height,
          imageSide: "right",
        },
        {
          id: "kyc-route",
          title: "Route KYC reviews to the right people.",
          body: "Organize cases by review type, risk level, or team responsibility, then direct them through the appropriate review process. Clear routing helps reduce handoffs and keeps ownership visible.",
          image: ticketRoute.src,
          imageAlt: ticketRoute.alt,
          imageWidth: ticketRoute.width,
          imageHeight: ticketRoute.height,
          imageSide: "left",
        },
        {
          id: "kyc-priorities",
          title: "Keep important reviews on schedule.",
          body: "Set clear priorities and review deadlines so urgent or time-sensitive cases receive attention. Help teams identify outstanding checks and stay focused on the next required action.",
          image: ticketPriorities.src,
          imageAlt: ticketPriorities.alt,
          imageWidth: ticketPriorities.width,
          imageHeight: ticketPriorities.height,
          imageSide: "right",
        },
      ],
      captureTitle: "Keep the full KYC record together.",
      captureDescription: "Make each review easier to follow by capturing the information, evidence, and decisions that matter in a single connected record.",
      captureCards: [
        { title: "Capture requests, risks, and context", body: "Record the reason for review, essential customer information, risk observations, and related requirements." },
        { title: "Organize documents and evidence", body: "Keep uploaded materials, verification notes, and supporting references linked to the relevant case." },
        { title: "Record outcomes and reviewer decisions", body: "Document the checks performed, the review outcome, and the rationale behind each decision." },
        { title: "Keep a history of updates", body: "Maintain a clear record of status changes, comments, and responsibilities throughout the review." },
      ],
      pathTitle: "Every KYC item follows a clear path to completion.",
      pathDescription: "Move each case through a consistent sequence so everyone knows its status, the person responsible, and the evidence still needed before completion.",
      pathItems: [
        { title: "Assign a case", body: "Capture the request, identify its owner, and establish what needs to be reviewed." },
        { title: "Prioritize review", body: "Set the review priority and confirm the checks or documents required." },
        { title: "Track progress", body: "Follow verification activity, outstanding information, and review updates in one place." },
        { title: "Collaborate early", body: "Bring relevant people into the review to resolve questions before they delay a decision." },
      ],
      checklistTitle: "See KYC progress and review activity clearly.",
      checklistDescription: "Give teams a practical view of open cases, pending checks, review outcomes, and workload. Use consistent records to identify bottlenecks and understand how reviews are progressing.",
      checklist: [
        { title: "Case status visibility", body: "See which reviews are new, in progress, pending information, or complete." },
        { title: "Review workload", body: "Understand how cases are distributed across reviewers and teams." },
        { title: "Evidence tracking", body: "Identify records that need additional documentation or clarification." },
        { title: "Decision history", body: "Keep past actions and outcomes accessible for internal review and accountability." },
      ],
      modulesTitle: "Related products",
      modulesDescription: "Explore the other NextGen products that support connected operations, shared information, and coordinated teams.",
      ctaTitle: "Build a KYC process that works for your organization.",
      ctaDescription: "Connect reviewers, evidence, and decisions in one structured workspace. Give your team a clearer way to manage KYC cases while supporting oversight, consistency, and accountability.",
    },
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
      "Bring API Bank access, approvals, policies, and activity into one organized place, so teams can manage integrations with clearer ownership and oversight.",
    focus: "Capture API credentials, owners, and usage policies together.",
    focusAlt: "Organize APIs by system, owner, and access level.",
    content: {
      viewsTitle: "Every API Bank workflow, organized around your team.",
      viewsDescription: "Give teams a consistent way to manage API access from the first request through approval, use, and review.",
      viewsItems: [
        { label: "01", title: "Structured view", body: "See API requests, access details, and ongoing activity in one connected workspace." },
        { label: "02", title: "Collaborative view", body: "Keep requesters, reviewers, and responsible teams aligned on what needs attention." },
        { label: "03", title: "Progress view", body: "Follow each request through its current stage without losing the context behind decisions." },
      ],
      splits: [
        {
          id: "api-bank-details",
          title: "Complete API Bank details, without scattered records.",
          body: "Keep every API access request clear and accessible, with its purpose, requester, assigned owner, supporting information, and current status together.",
          image: ticketDetails.src,
          imageAlt: ticketDetails.alt,
          imageWidth: ticketDetails.width,
          imageHeight: ticketDetails.height,
          imageSide: "right",
        },
        {
          id: "api-bank-route",
          title: "Categorize and route automatically.",
          body: "Organize API requests by service, department, or purpose and direct them to the appropriate team for review. Reduce manual handoffs while keeping responsibility clear.",
          image: ticketRoute.src,
          imageAlt: ticketRoute.alt,
          imageWidth: ticketRoute.width,
          imageHeight: ticketRoute.height,
          imageSide: "left",
        },
        {
          id: "api-bank-priorities",
          title: "Set priorities and deadlines.",
          body: "Identify time-sensitive API access needs, establish review deadlines, and keep important requests visible as they move through the process.",
          image: ticketPriorities.src,
          imageAlt: ticketPriorities.alt,
          imageWidth: ticketPriorities.width,
          imageHeight: ticketPriorities.height,
          imageSide: "right",
        },
      ],
      captureTitle: "Capture every API Bank request with complete information.",
      captureDescription: "Give reviewers the context they need at every stage. Keep access requirements, decisions, ownership, and supporting records together.",
      captureCards: [
        { title: "Capture requests, roles, and context", body: "Record the purpose of access, the requested permissions, and the information reviewers need to make a decision." },
        { title: "Create clear approval workflows", body: "Bring requests to the right decision-makers and make each approval stage easy to follow." },
        { title: "Keep communication connected", body: "Maintain notes, updates, and decisions alongside the request instead of across disconnected conversations." },
        { title: "Keep an accessible activity history", body: "Make it easier to review changes, understand past decisions, and follow who handled each step." },
      ],
      pathTitle: "Every API Bank request follows a clear path to completion.",
      pathDescription: "A structured process helps teams manage access consistently, from initial submission to the final decision and ongoing oversight.",
      pathItems: [
        { title: "Assign a role", body: "Identify the requester, responsible owner, and reviewers for each access request." },
        { title: "Prioritize work", body: "Evaluate urgency and impact so important requests receive timely attention." },
        { title: "Track progress", body: "Follow the request through review, approval, and any required follow-up." },
        { title: "Collaborate easily", body: "Keep questions, supporting context, and decisions in one place until the request is resolved." },
      ],
      checklistTitle: "Capture every API Bank request with complete information.",
      checklistDescription: "Move beyond fragmented access records with a clearer view of requests, review activity, and outstanding work. Help teams spot delays and support accountable decision-making.",
      checklist: [
        { title: "Clear request history", body: "Review submitted information, status changes, and important decisions." },
        { title: "Approval visibility", body: "See which requests are waiting, who is responsible, and where follow-up is needed." },
        { title: "Operational reporting", body: "Identify recurring requests and monitor how work progresses across teams." },
        { title: "Organized ownership", body: "Keep assigned responsibilities visible throughout the access lifecycle." },
      ],
      modulesTitle: "Related products",
      modulesDescription: "Connect API Bank workflows with other Governance & Compliance capabilities to support consistent access control, clear approvals, and better oversight across operations.",
      ctaTitle: "Build an API Bank process that works for your organization.",
      ctaDescription: "Bring requests, access decisions, and oversight into a single, structured workflow. Give your teams the clarity to manage API access with confidence as operations grow.",
    },
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
