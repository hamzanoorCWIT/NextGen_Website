import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { FaqSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "Contact Us | NextGen Contact Centre",
  description:
    "Let’s build better customer operations together. Reach the CWIT EMS team by form, email, or phone.",
};

export default function ContactPage() {
  return (
    <div id="top" className="site">
      <Header className="border-b border-black/20" />

      <section className="bg-white pt-20 pb-12 sm:pt-[100px] sm:pb-16 lg:pt-[120px] lg:pb-24">
        <div className="content-1442">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,460px)] lg:gap-14 xl:gap-20">
            <div className="min-w-0">
              <h1 className="max-w-[560px] text-[clamp(28px,3.2vw,48px)] leading-[1.1] font-medium tracking-[-0.045em] text-[#111111]">
                Let’s build better customer
                <br className="hidden sm:block" /> operations together.
              </h1>
              <div className="mt-8 sm:mt-10">
                <ContactForm />
              </div>
            </div>

            <aside className="overflow-hidden rounded-[28px] bg-[#f3f4f6] lg:min-h-[560px]">
              <div className="px-6 pt-7 pb-5 sm:px-8 sm:pt-10 sm:pb-6">
                <h2 className="max-w-[260px] text-[20px] leading-[1.25] font-semibold tracking-[-0.03em] text-[#111111] sm:text-[26px]">
                  Want to reach out directly?
                </h2>
                <ul className="mt-5 space-y-4 sm:mt-6">
                  <li className="flex items-center gap-3 text-[14px] text-[#111111] sm:text-[15px]">
                    <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center text-[#111111]" aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <rect x="2" y="4" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
                        <path d="m3 5.5 6 4.5 6-4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <a href="mailto:inquiry@cwit.net" className="break-all hover:underline">
                      inquiry.cwit.net
                    </a>
                  </li>
                  <li className="flex items-center gap-3 text-[14px] text-[#111111] sm:text-[15px]">
                    <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center text-[#111111]" aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path
                          d="M6.2 3.8c.3-.7 1.1-1 1.8-.7l1.2.5c.6.3.9 1 .7 1.6l-.4 1.3a1.4 1.4 0 0 1-1.5 1c-.3 0-.5.1-.6.3-.5.7 1.1 2.9 2.2 3.6.2.1.4.1.6 0a1.4 1.4 0 0 1 1.5-.2l1.2.5c.6.3.9 1 .7 1.6l-.4 1.2c-.2.7-1 1.1-1.7 1-2.2-.3-4.5-2.2-6.3-4.6C4 9.2 2.9 6.7 3.2 4.5c.1-.7.7-1.3 1.5-1.4l1.2-.2c.1 0 .2 0 .3.1Z"
                          stroke="currentColor"
                          strokeWidth="1.3"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <a href="tel:+97111234567" className="hover:underline">
                      + (971) 1 123 4567
                    </a>
                  </li>
                </ul>
              </div>
              <div className="relative h-[220px] w-full sm:h-[320px] lg:h-[340px]">
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-[#f3f4f6] to-transparent"
                  aria-hidden="true"
                />
                <Image
                  src="/figma/contact.jpg"
                  alt="City skyline with modern towers in fog"
                  width={2448}
                  height={3264}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-white pb-12 sm:pb-16 lg:pb-24" aria-label="Office location map">
        <div className="content-1442">
          <div className="overflow-hidden rounded-[20px] sm:rounded-[24px]">
            <iframe
              title="CWIT office location map"
              src="https://www.google.com/maps?q=24.7585,46.6515&z=13&output=embed"
              className="h-[260px] w-full border-0 sm:h-[420px] lg:h-[640px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <FaqSection className="pt-0" />
      <Footer />
    </div>
  );
}
