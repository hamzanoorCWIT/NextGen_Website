import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IndustryVerticalPageView } from "@/components/industry-page-views";
import { allIndustrySlugsForParent, getIndustryPageForParent } from "@/lib/industries";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return allIndustrySlugsForParent("use-cases").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getIndustryPageForParent("use-cases", slug);
  if (!page) return { title: "Use Case | NextGen Contact Centre" };
  return {
    title: `${page.title} | NextGen Contact Centre`,
    description: page.description,
  };
}

export default async function UseCaseChildPage({ params }: Props) {
  const { slug } = await params;
  const page = getIndustryPageForParent("use-cases", slug);
  if (!page) notFound();
  return <IndustryVerticalPageView page={page} />;
}
