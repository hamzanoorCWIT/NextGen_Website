import { redirect } from "next/navigation";
import { getIndustryPage, industryPageHref } from "@/lib/industries";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function IndustrySlugRedirect({ params }: Props) {
  const { slug } = await params;
  const page = getIndustryPage(slug);
  if (page) redirect(industryPageHref(slug));
  redirect("/industries");
}
