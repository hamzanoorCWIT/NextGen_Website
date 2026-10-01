import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductCategoryPageView } from "@/components/product-page-views";
import { getProductPage } from "@/lib/products";

const page = getProductPage("work-management");

export const metadata: Metadata = page
  ? { title: `${page.title} | NextGen Contact Centre`, description: page.description }
  : { title: "Work Management | NextGen Contact Centre" };

export default function WorkManagementPage() {
  if (!page || page.type !== "category") notFound();
  return <ProductCategoryPageView page={page} />;
}
