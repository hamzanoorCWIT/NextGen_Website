import type { Metadata } from "next";
import { IndustryCatalogPageView } from "@/components/industry-catalog-page";
import { byRoleCards } from "@/lib/industries";

export const metadata: Metadata = {
  title: "By Role | NextGen Contact Centre",
  description:
    "CWIT EMS empowers support teams, managers, operations leaders, and executives with tools designed around their daily workflows.",
};

export default function ByRolePage() {
  return (
    <IndustryCatalogPageView
      heroTitle="Give every role the clarity to do its best work"
      heroDescription="From frontline support to executive leadership, NextGen brings customer interactions, team activity, and operational information into one connected workspace. Each role gets the visibility and tools it needs to act confidently and stay aligned."
      highlightTitle="One connected platform. A better way for every team to work."
      highlightDescription="Different responsibilities require different views of the same business. NextGen helps employees manage daily work, gives managers a clearer picture of performance, and provides leadership with insight into operations across teams."
      highlightItems={[
        {
          label: "01",
          title: "Frontline Productivity",
          body: "Give support teams the customer context, assignments, and workflow visibility they need to respond promptly and follow each request through.",
        },
        {
          label: "02",
          title: "Manager Oversight",
          body: "Bring queues, workloads, escalations, and team progress into a single view so managers can identify bottlenecks and keep work moving.",
        },
        {
          label: "03",
          title: "Executive Visibility",
          body: "See how service, workforce activity, and operational risk connect, with reporting that supports timely, informed decisions.",
        },
      ]}
      cards={byRoleCards}
      cardsTitle="The right workspace for the way you work"
      cardsDescription="Each role works toward a different outcome. NextGen connects their activities without forcing everyone to use the same view or follow disconnected processes."
      ctaTitle="Bring every team together in one connected workspace"
      ctaDescription="Help your people work with clearer ownership, shared information, and less operational friction. NextGen connects customer service, workforce management, CRM, analytics, and governance so teams can move in the same direction."
      cardsId="roles"
      baseHref="/industries/by-role"
    />
  );
}
