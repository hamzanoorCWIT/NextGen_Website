import Image from "next/image";

export type WorkflowStep = {
  title: string;
  body?: string;
};

export function ServiceWorkflow({
  title,
  description,
  steps,
  image,
  frameClassName = "wrap",
}: {
  title: string;
  description: string;
  steps: WorkflowStep[];
  image: { src: string; alt: string; width: number; height: number };
  frameClassName?: string;
}) {
  return (
    <section className="bg-black py-16 text-white sm:py-24">
      <div className={frameClassName}>
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="text-[clamp(32px,2.6vw,44px)] leading-[1.15] font-semibold tracking-[-0.03em]">{title}</h2>
          <p className="mx-auto mt-4 max-w-[640px] text-[15px] leading-7 text-white/75 sm:text-[16px]">{description}</p>
        </div>
        <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-2">
          <article className="rounded-[22px] bg-white p-6 text-[#111111] sm:p-8">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#f4f5f7]">
              <svg width="16" height="16" viewBox="0 0 18 18" aria-hidden="true">
                <path d="M10.2 1.5 4.2 10h4.1l-1 6.5 6.5-9.2H9.6l.6-5.8Z" fill="currentColor" />
              </svg>
            </span>
            <ol className="mt-6">
              {steps.map((step, index) => (
                <li key={step.title} className={index === 0 ? "" : "mt-5 border-t border-[#ececec] pt-5"}>
                  <p className="text-[16px] font-semibold">{step.title}</p>
                  {step.body ? <p className="mt-2 text-[14px] leading-6 text-[#3a3a3a]">{step.body}</p> : null}
                </li>
              ))}
            </ol>
          </article>
          <div className="overflow-hidden rounded-[22px]">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="h-full w-full object-cover"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
