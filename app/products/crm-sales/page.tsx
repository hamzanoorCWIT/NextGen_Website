import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductCategoryPageView } from "@/components/product-page-views";
import { getProductPage } from "@/lib/products";

const page = getProductPage("crm-sales");

export const metadata: Metadata = page
  ? { title: `${page.title} | NextGen Contact Centre`, description: page.description }
  : { title: "CRM & Sales | NextGen Contact Centre" };

export default function CrmSalesPage() {
  if (!page || page.type !== "category") notFound();
  return <ProductCategoryPageView page={page} />;
}
