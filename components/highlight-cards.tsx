function Bolt() {
  return (
    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#111111] shadow-[0_0_0_1px_rgba(0,0,0,0.06)]">
      <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
        <path d="M10.2 1.5 4.2 10h4.1l-1 6.5 6.5-9.2H9.6l.6-5.8Z" fill="currentColor" />
      </svg>
    </span>
  );
}

export type HighlightCard = {
  label?: string;
  title: string;
  body: string;
  icon?: boolean;
  href?: string;
};

export type HighlightCardsVariant = "numbered" | "icon";

const variants: Record<HighlightCardsVariant, { frameClassName: string; cardClassName: string; icon: boolean }> = {
  numbered: {
    frameClassName: "content-1426",
    cardClassName: "min-h-0 sm:min-h-[380px] lg:h-[448px]",
    icon: false,
  },
  icon: {
    frameClassName: "content-1721",
    cardClassName: "min-h-0 sm:min-h-[380px] lg:h-[448px]",
    icon: true,
  },
};

export function HighlightCards({
  id,
  title,
  description,
  items,
  variant,
  frameClassName,
  cardClassName,
  tone = "light",
}: {
  id?: string;
  title: string;
  description?: string;
  items: HighlightCard[];
  variant?: HighlightCardsVariant;
  frameClassName?: string;
  cardClassName?: string;
  tone?: "light" | "dark";
}) {
  const preset = variant ? variants[variant] : undefined;
  const frame = frameClassName ?? preset?.frameClassName ?? "wrap";
  const card = cardClassName ?? preset?.cardClassName ?? "min-h-[250px] sm:min-h-[280px]";
  const columns = items.length % 3 === 0 ? "md:grid-cols-3" : items.length >= 4 ? "sm:grid-cols-2 xl:grid-cols-4" : "md:grid-cols-3";
  const dark = tone === "dark";

  return (
    <section id={id} className="bg-white py-12 sm:py-16 lg:py-24">
      <div className={frame}>
        <div className="mx-auto max-w-[820px] text-center">
          <h2 className="text-[clamp(32px,2.6vw,44px)] leading-[1.15] font-semibold tracking-[-0.03em]">{title}</h2>
          {description ? (
            <p className="mx-auto mt-4 max-w-[680px] text-[15px] leading-7 text-[#1a1a1a] sm:text-[16px]">{description}</p>
          ) : null}
        </div>
        <div className={`mt-12 grid gap-4 sm:mt-14 sm:gap-5 ${columns}`}>
          {items.map((item) => {
            const className = `flex flex-col rounded-[12px] p-6 no-underline sm:p-8 ${dark ? "bg-black text-white" : "bg-[#f5f6f8] text-inherit"} ${card}`;
            const content = (
              <>
                {item.icon || preset?.icon ? <Bolt /> : <p className={`text-[14px] ${dark ? "text-white/60" : "text-[#9aa0a8]"}`}>{item.label}</p>}
                <div className={item.icon || preset?.icon ? "mt-auto pt-10" : "mt-6 flex flex-1 flex-col"}>
                  <h3 className="text-[18px] font-semibold tracking-[-0.02em] sm:text-[20px]">
                    {item.title}
                  </h3>
                  <p className={`text-[14px] leading-6 sm:text-[15px] ${dark ? "text-white" : "text-[#3a3a3a]"} ${item.icon || preset?.icon ? "mt-2" : "mt-auto pt-8"}`}>
                    {item.body}
                  </p>
                </div>
              </>
            );
            return item.href ? (
              <a key={item.title} href={item.href} className={className}>
                {content}
              </a>
            ) : (
              <article key={item.title} className={className}>
                {content}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
