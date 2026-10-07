import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import styles from "./security-trust.module.css";

export const metadata: Metadata = {
  title: "Security & Trust | NextGen Contact Centre",
  description:
    "Learn how CWIT EMS protects data, controls access, and keeps operations auditable across every team.",
};

const layers = [
  {
    title: "Identity & Access Control",
    description: "Control who can access your organization, what they can see, and what actions they can perform.",
    items: ["Role-based permissions", "Controlled user access", "Organization-level access management", "Approval-based workflows", "Access controls for sensitive operations"],
  },
  {
    title: "Data Protection",
    description: "Protect business and customer information throughout its lifecycle.",
    items: ["Data protection in transit", "Secure data storage", "Controlled access to business information", "Protection of sensitive customer and operational data"],
  },
  {
    title: "Audit & Accountability",
    description: "Maintain visibility into important activity across your organization.",
    items: ["Activity tracking", "User and system actions", "Operational history", "Traceable changes", "Audit-ready records"],
  },
  {
    title: "Governance & Compliance",
    description: "Give organizations the controls they need to manage policies, responsibilities, and operational processes.",
    items: ["Policy documentation", "Permissions management", "Approval workflows", "Organizational hierarchy", "Governance controls"],
  },
];

const operations = [
  ["Customer Service", "Control access to tickets, conversations, customer information, and service workflows."],
  ["Work Management", "Manage permissions across tasks, projects, assignments, and approvals."],
  ["Analytics", "Control access to dashboards, reports, and operational information."],
  ["Integrations", "Connect external systems while maintaining controlled access to integrated data and workflows."],
];

function SecurityList({ items, checks = false }: { items: string[]; checks?: boolean }) {
  return (
    <ul className={checks ? styles.checks : styles.bullets}>
      {items.map((item) => (
        <li key={item}>
          {checks && <span className={styles.check} aria-hidden="true"><Image src="/figma/bullets-tick.png" alt="" width={16} height={16} /></span>}
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function SecurityTrustPage() {
  return (
    <div id="top" className="site">
      <Header />
      <main className={styles.content}>
        <section className={styles.intro}>
          <h1>Your data. Protected by design.</h1>
          <p>CWIT EMS is built to help organizations manage customer interactions, operational workflows, and business information with security and control at every layer.<br />From access management and permissions to data protection, auditability, and operational governance, security is built into how the platform is designed and managed.</p>
        </section>

        <section className={styles.layers} aria-labelledby="security-layers">
          <h2 id="security-layers">Security at every layer</h2>
          {layers.map((layer) => (
            <div className={styles.group} key={layer.title}>
              <h3>{layer.title}</h3>
              <p>{layer.description}</p>
              <SecurityList items={layer.items} />
            </div>
          ))}
        </section>

        <section className={styles.section} aria-labelledby="controlled-access">
          <h2 id="controlled-access">Built for controlled access</h2>
          <p>Give every team the access they need — and nothing more.<br />CWIT EMS supports structured permissions so organizations can define access according to roles, responsibilities, and operational requirements.</p>
          <SecurityList checks items={[
            "Role-based access — Assign permissions according to user responsibilities.",
            "Controlled administration — Manage access to sensitive functions and organizational data.",
            "Approval workflows — Keep important operational actions subject to defined approval processes.",
            "Organizational structure — Align access and responsibilities with your organization’s hierarchy.",
          ]} />
        </section>

        <section className={styles.section} aria-labelledby="information-protection">
          <h2 id="information-protection" className={styles.protectionTitle}>Protect the information behind every interaction</h2>
          <p>Customer conversations contain sensitive information. Keep it controlled.<br />CWIT EMS brings customer interactions, tickets, communications, and operational data into a controlled environment designed around secure access and responsible data handling.</p>
          <SecurityList checks items={[
            "Customer information — Keep customer and contact information within controlled workflows.",
            "Communication data — Manage service conversations and interactions through authorized users.",
            "Operational information — Control access to internal tasks, projects, reports, and workflows.",
            "Business records — Maintain traceable records across operational activity.",
          ]} />
        </section>

        <section className={styles.section} aria-labelledby="operations-security">
          <h2 id="operations-security">Security across your operations</h2>
          <p>Security shouldn’t stop at the login screen.<br />Customer service is connected to teams, workflows, integrations, analytics, and business systems. CWIT EMS extends governance across these operational areas so organizations can maintain control as work moves through the platform.</p>
          {operations.map(([title, description]) => (
            <div className={styles.operation} key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </section>

        <section className={styles.section} aria-labelledby="visibility-accountability">
          <h2 id="visibility-accountability">Designed for visibility and accountability</h2>
          <p>Know what happened, who acted, and where the work stands.<br />Operational visibility helps organizations investigate activity, maintain accountability, and understand changes across their environment.</p>
          <SecurityList items={["User activity records", "Workflow history", "Assignment tracking", "Approval history", "Operational changes", "Traceable customer-service activity"]} />
        </section>
      </main>
      <Footer />
    </div>
  );
}
