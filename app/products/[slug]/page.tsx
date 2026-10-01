import { redirect } from "next/navigation";
import { productPageHref, productSubcategories } from "@/lib/products";

type Props = {
  params: Promise<{ slug: string }>;
};

/** Legacy flat product URLs → nested category/sub-cat paths */
export default async function ProductSlugRedirect({ params }: Props) {
  const { slug } = await params;
  if (productSubcategories[slug] || slug === "tickets") {
    redirect(productPageHref(slug));
  }
  redirect("/products");
}
