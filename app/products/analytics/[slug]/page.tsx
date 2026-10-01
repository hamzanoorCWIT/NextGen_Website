import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductSubcategoryPageView } from "@/components/product-page-views";
import { allProductSlugsForParent, getProductPageForParent } from "@/lib/products";

type Props = {
  params: Promise<{ slug: string }>;
};

const PARENT = "analytics" as const;

export function generateStaticParams() {
  return allProductSlugsForParent(PARENT).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getProductPageForParent(PARENT, slug);
  if (!page) return { title: "Product | NextGen Contact Centre" };
  return {
    title: `${page.title} | NextGen Contact Centre`,
    description: page.description,
  };
}

export default async function AnalyticsChildPage({ params }: Props) {
  const { slug } = await params;
  const page = getProductPageForParent(PARENT, slug);
  if (!page) notFound();
  return <ProductSubcategoryPageView page={page} />;
}
