import type { Metadata } from "next";
import Image from "next/image";
import { SignInForm } from "@/components/sign-in-form";

export const metadata: Metadata = {
  title: "Sign In | NextGen Contact Centre",
  description:
    "Book a personalized demo and discover how CWIT EMS connects customer service, workflows, analytics, and operations in one powerful platform.",
};

export default function SignInPage() {
  return (
    <div className="min-h-dvh bg-white">
      <div className="grid min-h-dvh lg:grid-cols-2">
        <aside className="hidden min-h-dvh p-4 lg:block xl:p-5">
          <div className="relative h-full min-h-[calc(100dvh-2rem)] overflow-hidden rounded-[28px] xl:min-h-[calc(100dvh-2.5rem)] xl:rounded-[32px]">
            <Image
              src="/figma/sign-in-bg.png"
              alt=""
              fill
              priority
              sizes="50vw"
              className="object-cover object-center"
            />

            <div className="relative z-10 flex h-full min-h-[calc(100dvh-2rem)] flex-col justify-between px-10 py-10 xl:min-h-[calc(100dvh-2.5rem)] xl:px-14 xl:py-12">
              <a href="/" className="inline-flex w-fit shrink-0">
                <Image
                  src="/figma/logo.png"
                  alt="NextGen Contact Centre"
                  width={385}
                  height={95}
                  priority
                  className="h-14 w-auto xl:h-16"
                  style={{ width: "auto" }}
                />
              </a>

              <div className="w-full max-w-[776.9248px] pb-4">
                <div className="flex items-center gap-3">
                  <Image
                    src="/figma/img8.png"
                    alt=""
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-[16px] font-semibold text-[#111111]">Michel Ferry</p>
                    <p className="text-[14px] text-[#667085]">Head of Product @Zeffy</p>
                  </div>
                </div>
                <p className="mt-5 w-[min(100%,776.9248px)] text-[clamp(32px,3.5vw,53.46px)] leading-[1.2] font-medium tracking-[-0.035em] text-[#111111]">
                  The collaboration successfully
                  <br />
                  assessed our assets and
                  <br />
                  validated our ideas.
                </p>
              </div>
            </div>
          </div>
        </aside>

        <main className="relative flex min-h-dvh flex-col px-6 py-10 sm:px-10 lg:px-12 xl:px-16">
          <div className="mb-10 lg:hidden">
            <a href="/" className="inline-flex w-fit">
              <Image
                src="/figma/logo.png"
                alt="NextGen Contact Centre"
                width={385}
                height={95}
                priority
                className="h-12 w-auto"
                style={{ width: "auto" }}
              />
            </a>
          </div>

          <div className="flex flex-1 items-center justify-center">
            <SignInForm />
          </div>
        </main>
      </div>
    </div>
  );
}
