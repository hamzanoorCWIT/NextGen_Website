import Image from "next/image";
import { CtaSection } from "@/components/cta-section";
import { FeatureSplit } from "@/components/feature-split";
import { Footer } from "@/components/footer";
import { HeroBanner } from "@/components/hero-banner";
import { HighlightCards } from "@/components/highlight-cards";
import { Pill } from "@/components/pill";
import { ProductModules } from "@/components/product-modules";
import { ServiceWorkflow } from "@/components/service-workflow";
import { Testimonials } from "@/components/testimonials";
import { getSiblingModules, type ProductCategory, type ProductSubcategoryPage } from "@/lib/products";

const ctaImage = {
  src: "/figma/cta-new.png",
  alt: "Payments, customers, and successful transactions connected in one flow",
  width: 802,
  height: 609,
};

export function ProductCategoryPageView({ page }: { page: ProductCategory }) {
  const modules = getSiblingModules(page.slug);

  return (
    <div id="top" className="site">
      <HeroBanner
        title={page.heroTitle}
        description={page.heroDescription}
        titleClassName="max-w-[980px]"
        descriptionClassName="max-w-[760px]"
        actions={[
          { href: "#simplify", label: "Explore Platform", tone: "light" },
          { href: "/request-demo", label: "Request Demo" },
        ]}
        image={page.heroImage}
      />

      <HighlightCards
        id="simplify"
        variant="numbered"
        title={page.simplifyTitle}
        description={page.simplifyDescription}
        items={page.simplifyItems}
      />

      <ProductModules
        id="products"
        title={page.modulesTitle}
        description={page.modulesDescription}
        actions={[
          { href: "/products", label: "Products Overview", tone: "ghost-dark" },
          { href: "#products", label: "All Modules" },
        ]}
        tabs={modules.map((module, index) => ({
          id: module.id,
          label: module.label,
          active: index === 0,
          image: module.image,
        }))}
      />

      <ServiceWorkflow
        frameClassName="content-1407"
        title={page.workflowTitle}
        description={page.workflowDescription}
        steps={page.workflowSteps}
        image={page.workflowImage}
      />

      <HighlightCards variant="icon" title={page.builtTitle} description={page.builtDescription} items={page.builtItems} />

      <Testimonials />

      <CtaSection
        title={`Create a better way to manage ${page.title.toLowerCase()}`}
        description="CWIT EMS connects customer support, work management, CRM, analytics, and governance into one intelligent workspace."
        titleClassName="max-w-[620px]"
        actions={[{ href: "/request-demo", label: "Request Demo" }]}
        image={ctaImage}
      />
      <Footer />
    </div>
  );
}

export function ProductSubcategoryPageView({ page }: { page: ProductSubcategoryPage }) {
  const modules = getSiblingModules(page.slug);

  return (
    <div id="top" className="site">
      <HeroBanner
        title={page.heroTitle}
        description={page.heroDescription}
        titleClassName="max-w-[980px]"
        descriptionClassName="max-w-[820px]"
        actions={[
          { href: "/request-demo", label: "See Pricing", tone: "light" },
          { href: "/request-demo", label: "Request Demo" },
        ]}
        image={page.heroImage}
      />

      <HighlightCards
        id="views"
        variant="numbered"
        title={page.viewsTitle}
        description={page.viewsDescription}
        items={page.viewsItems}
      />

      <FeatureSplit
        items={page.splits.map((item) => ({
          ...item,
          ctaLabel: "Request Demo",
          ctaHref: "/request-demo",
        }))}
      />

      <section className="bg-black py-16 text-white sm:py-24">
        <div className="content-1426">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[720px]">
              <h2 className="text-[clamp(32px,2.6vw,44px)] leading-[1.15] font-semibold tracking-[-0.03em]">{page.captureTitle}</h2>
              <p className="mt-4 max-w-[640px] text-[15px] leading-7 text-white/75 sm:text-[16px]">{page.captureDescription}</p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Pill href="/request-demo" tone="light">
                See pricing
              </Pill>
              <Pill href="/request-demo" tone="ghost">
                Request Demo
              </Pill>
            </div>
          </div>

          <div className="mt-12 grid items-stretch gap-4 sm:grid-cols-2 sm:gap-5">
            {page.captureCards.map((card) => (
              <article
                key={card.title}
                className="flex min-h-[280px] flex-col rounded-[12px] bg-[#f6f4f1] p-6 text-[#111111] sm:min-h-[320px] sm:p-7"
              >
                <h3 className="max-w-[420px] text-[18px] leading-snug font-semibold tracking-[-0.02em] sm:text-[20px]">{card.title}</h3>
                <p className="mt-4 text-[15px] leading-7 text-[#3a3a3a]">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <HighlightCards variant="icon" title={page.pathTitle} description={page.pathDescription} items={page.pathItems} />

      <section className="bg-white py-8 sm:py-16">
        <div className="content-1426 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="max-w-[520px] text-[clamp(32px,2.6vw,44px)] leading-[1.15] font-semibold tracking-[-0.03em]">
              {page.checklistTitle}
            </h2>
            <p className="mt-4 max-w-[520px] text-[15px] leading-7 text-[#1a1a1a] sm:text-[16px]">{page.checklistDescription}</p>
            <ul className="mt-6 space-y-3">
              {page.checklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] sm:text-[16px]">
                  <span
                    className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-black text-[11px] text-white"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Pill href="/request-demo" tone="ghost-dark">
                See pricing
              </Pill>
              <Pill href="/request-demo">Request Demo</Pill>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image
              src={page.checklistImage.src}
              alt={page.checklistImage.alt}
              width={page.checklistImage.width}
              height={page.checklistImage.height}
              className="h-auto w-full max-w-[560px] object-contain"
            />
          </div>
        </div>
      </section>

      {modules.length > 0 ? (
        <ProductModules
          id="modules"
          indicator="check"
          title={page.modulesTitle}
          description={page.modulesDescription}
          actions={[
            { href: "/products", label: "Products Overview", tone: "ghost-dark" },
            { href: "#modules", label: "All Modules" },
          ]}
          tabs={modules.map((module, index) => ({
            id: module.id,
            label: module.label,
            active: index === 0,
            image: module.image,
          }))}
        />
      ) : null}

      <CtaSection
        title={`Build a ${page.title.toLowerCase()} process that works for your organization`}
        description="CWIT EMS connects customer support, work management, CRM, analytics, and governance into one intelligent workspace."
        titleClassName="max-w-[640px]"
        descriptionClassName="max-w-[640px]"
        actions={[{ href: "/request-demo", label: "Request Demo" }]}
        image={ctaImage}
      />
      <Footer />
    </div>
  );
}
