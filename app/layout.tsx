import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ScrollReveal } from "@/components/scroll-reveal";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextGen Contact Centre",
  description:
    "CWIT EMS connects customer support, work management, CRM, analytics, and governance into one intelligent workspace.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-white text-[#111111]">
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
