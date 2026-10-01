import type { Metadata } from "next";
import { IndustryCatalogPageView } from "@/components/industry-catalog-page";
import { useCaseCards } from "@/lib/industries";

export const metadata: Metadata = {
  title: "Use Cases | NextGen Contact Centre",
  description:
    "From managing customer conversations to automating approvals and tracking performance, CWIT EMS helps organizations streamline critical processes.",
};

export default function UseCasesPage() {
  return (
    <IndustryCatalogPageView
      heroTitle={
        <>
          Use cases that drive
          <br />
          daily operations.
        </>
      }
      heroDescription="From managing customer conversations and service requests to automating approvals, tracking performance, and improving decision-making, CWIT EMS helps organizations streamline critical processes across every department."
      highlightTitle="Everything your organization needs to operate smarter"
      highlightDescription="CWIT EMS brings customer service, workflows, analytics, and governance together so teams can run high-impact use cases in one connected platform."
      highlightItems={[
        {
          label: "01",
          title: "Customer Engagement",
          body: "Unify ticketing, chat, and campaigns in one workspace.",
        },
        {
          label: "02",
          title: "Workforce Control",
          body: "Track time, attendance, and billable work with clarity.",
        },
        {
          label: "03",
          title: "Governance & Risk",
          body: "Run approvals, policies, and KYC with accountability.",
        },
      ]}
      cards={useCaseCards}
      cardsId="use-cases"
      baseHref="/industries/use-cases"
    />
  );
}
