import type { Metadata } from "next";
import { IndustryCatalogPageView } from "@/components/industry-catalog-page";
import { byIndustryCards } from "@/lib/industries";

export const metadata: Metadata = {
  title: "By Industry | NextGen Contact Centre",
  description:
    "CWIT EMS brings customer service, workflows, analytics, and governance together so every industry can manage daily operations in one connected platform.",
};

export default function ByIndustryPage() {
  return (
    <IndustryCatalogPageView
      heroTitle={
        <>
          Every customer request, tracked from
          <br />
          start to resolution.
        </>
      }
      heroDescription="Manage incoming requests, internal issues, and service cases in one organized workspace. Assign ownership, track progress, manage SLAs, and keep every interaction connected to the ticket."
      highlightTitle="Everything your industry needs to operate smarter"
      highlightDescription="CWIT EMS brings customer service, workflows, analytics, and governance together in one connected platform. Empower teams with the tools they need to manage daily operations, automate processes, improve visibility."
      highlightItems={[
        {
          label: "01",
          title: "Connected Customer Operations",
          body: "Manage conversations, requests, and customer journeys across multiple channels.",
        },
        {
          label: "02",
          title: "Automated Workflows",
          body: "Create structured processes that improve efficiency and reduce manual effort.",
        },
        {
          label: "03",
          title: "Real-Time Visibility",
          body: "Monitor operations through dashboards, reports, and actionable insights.",
        },
      ]}
      cards={byIndustryCards}
      cardsId="industries"
      baseHref="/industries/by-industry"
    />
  );
}
