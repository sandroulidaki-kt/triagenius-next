import type { Metadata } from "next";
import { Open_Sans, Noto_Sans } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-open-sans",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-noto-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Triagenius",
    template: "%s — Triagenius",
  },
  description:
    "Streamlined Triage Software for Swift and Accurate Healthcare Assessment by Experts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} ${notoSans.variable} antialiased`}
    >
      <body className="text-black">
        <SiteNav />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
