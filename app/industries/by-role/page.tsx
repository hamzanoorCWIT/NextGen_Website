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
      heroTitle={
        <>
          Every role, equipped to
          <br />
          deliver better outcomes.
        </>
      }
      heroDescription="Different teams need different levels of visibility, control, and collaboration. CWIT EMS gives every role the tools designed around their daily workflows and business goals."
      highlightTitle="Everything your teams need to work smarter"
      highlightDescription="CWIT EMS brings customer service, workflows, analytics, and governance together so every role can manage daily work with clear ownership and visibility."
      highlightItems={[
        {
          label: "01",
          title: "Frontline Productivity",
          body: "Help agents resolve requests faster with complete customer context.",
        },
        {
          label: "02",
          title: "Manager Oversight",
          body: "Track team performance, queues, and escalations in one place.",
        },
        {
          label: "03",
          title: "Executive Visibility",
          body: "Monitor operations, risk, and outcomes across the organization.",
        },
      ]}
      cards={byRoleCards}
      cardsId="roles"
      baseHref="/industries/by-role"
    />
  );
}
