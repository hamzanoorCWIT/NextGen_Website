import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { RequestDemoForm } from "@/components/request-demo-form";

export const metadata: Metadata = {
  title: "Request Demo | NextGen Contact Centre",
  description:
    "Discover how CWIT EMS connects customer service, workflows, analytics, and operations in one platform.",
};

export default function RequestDemoPage() {
  return (
    <div id="top" className="site">
      <Header className="border-b border-black/20" />
      <main className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto w-full max-w-[560px] rounded-[12px] bg-[#ececed] p-7 sm:rounded-[12px] sm:p-10">
          <h1 className="text-[clamp(32px,4vw,44px)] leading-[1.1] font-semibold tracking-[-0.04em] text-[#111111]">
            Request Demo
          </h1>
          <p className="mt-2 text-[15px] leading-6 text-[#111111] sm:text-[16px]">
            Experience connected service operations.
          </p>
          <div className="mt-8">
            <RequestDemoForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
