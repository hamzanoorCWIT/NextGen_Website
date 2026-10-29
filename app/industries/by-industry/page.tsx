import type { Metadata } from "next";
import { IndustryCatalogPageView } from "@/components/industry-catalog-page";
import { byIndustryCards } from "@/lib/industries";

export const metadata: Metadata = {
  title: "By Industry | NextGen Contact Centre",
  description:
    "From high-volume customer requests to regulated approvals and complex projects, NextGen brings teams, conversations, workflows, and reporting together. Give every department the clarity and control it needs to deliver better outcomes.",
};

export default function ByIndustryPage() {
  return (
    <IndustryCatalogPageView
      heroTitle="Built for the demands of your industry"
      heroDescription="From high-volume customer requests to regulated approvals and complex projects, NextGen brings teams, conversations, workflows, and reporting together. Give every department the clarity and control it needs to deliver better outcomes."
      highlightTitle="One platform. Built around how your industry works."
      highlightDescription="Connect customer-facing services with the people and processes behind them. NextGen helps organizations organize requests, reduce manual handoffs, and maintain visibility across day-to-day operations."
      highlightItems={[
        {
          label: "01",
          title: "Connected Customer Operations",
          body: "Keep conversations, service requests, and customer history connected across teams and channels, so every interaction has context.",
        },
        {
          label: "02",
          title: "Automated Workflows",
          body: "Set clear responsibilities, route work to the right teams, and keep requests moving through consistent processes.",
        },
        {
          label: "03",
          title: "Real-Time Visibility",
          body: "Follow workloads, progress, and service performance through dashboards and reporting that make the next step clearer.",
        },
      ]}
      cards={byIndustryCards}
      cardsTitle="Solutions for the teams and challenges you know"
      cardsDescription="Different sectors work differently. Explore how NextGen connects the operational details that matter to each industry without fragmenting teams across separate systems."
      ctaTitle="Bring your industry’s work together"
      ctaDescription="Whether your priority is responsive service, stronger coordination, or greater operational control, NextGen helps connect the people, processes, and information your organization relies on."
      cardsId="industries"
      baseHref="/industries/by-industry"
    />
  );
}
