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
      heroTitle="Bring Every Use Case Into One Connected Workflow"
      heroDescription="From customer conversations and sales opportunities to time tracking, approvals, and compliance, NextGen connects the everyday processes that keep your business moving. Give teams a shared workspace to manage work, stay accountable, and deliver consistent results."
      highlightTitle="One Platform for the Work That Matters"
      highlightDescription="Bring customer service, workforce operations, and governance together without losing visibility between teams. NextGen helps people move from one task to the next with the context, ownership, and information they need."
      highlightItems={[
        {
          label: "01",
          title: "Customer Engagement",
          body: "Keep customer requests, conversations, and opportunities connected so teams can respond with context and follow through with confidence.",
        },
        {
          label: "02",
          title: "Workforce Control",
          body: "Coordinate daily responsibilities, attendance, timesheets, and costs with clear ownership and better visibility into team activity.",
        },
        {
          label: "03",
          title: "Governance & Risk",
          body: "Support controlled decisions with structured approvals, policy acknowledgements, and documented compliance checks.",
        },
      ]}
      cards={useCaseCards}
      cardsTitle="Practical Solutions for Everyday Operations"
      cardsDescription="Explore how NextGen brings common business workflows together, from the first customer interaction to the final approval, update, or completed task."
      ctaTitle="Build a Better Way to Manage Customer Service"
      ctaDescription="Connect customer support, workforce coordination, CRM, analytics, and governance in one workspace. With shared information and clearer processes, your teams can spend less time navigating tools and more time moving work forward."
      cardsId="use-cases"
      baseHref="/industries/use-cases"
    />
  );
}
