import type { Metadata } from "next";

import { HowItWorksSteps } from "@/components/how-it-works-steps";
import { FaqAccordion } from "@/components/faq-accordion";

export const metadata: Metadata = { title: "How it works" };

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative overflow-hidden bg-[#e5f7f7]">
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute top-0 bottom-0 left-0 w-[56%] bg-white rounded-tr-[360px] md:rounded-tr-[520px]"></div>
        </div>
        <div className="relative z-10 max-w-[1920px] mx-auto px-6 md:px-[100px] xl:px-[200px] py-16 md:py-24 flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="flex-1 max-w-[620px]">
            <h1 className="font-bold text-[40px] md:text-[56px] leading-[1.1] text-black">How it works</h1>
            <p className="mt-5 text-base md:text-lg text-[#494747] max-w-[520px]">At its core, Triagenius involves a systematic approach.</p>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/how-it-works-hero-illustration.svg"
              alt="Triagenius app shown on mobile devices with a healthcare worker"
              className="w-full max-w-[420px] h-auto"
            />
          </div>
        </div>
      </section>

      {/* Step-by-step process */}
      <HowItWorksSteps />

      {/* FAQ */}
      <section id="faq" className="bg-white">
        <div className="max-w-[900px] mx-auto px-6 py-16 md:py-24">
          <div className="text-center mb-10">
            <p className="text-[#490073] font-semibold tracking-wide uppercase text-sm mb-2">About our app</p>
            <h2 className="font-bold text-3xl md:text-[40px] text-black">Frequently Asked Questions</h2>
          </div>
          <FaqAccordion />
        </div>
      </section>

      {/* Closing tagline + app download */}
      <section className="bg-[#f4f5f9]">
        <div className="max-w-[1000px] mx-auto px-6 py-16 md:py-20 text-center">
          <p className="font-bold text-xl md:text-3xl text-[#490073] leading-snug max-w-3xl mx-auto">
            Your patients&apos; well-being depends on swift and accurate triage. Be the cornerstone of efficient healthcare!
          </p>
          <div className="flex items-center justify-center gap-4 mt-8 flex-wrap">
            <a href="#">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/how-it-works-app-store-badge.png" alt="Download on the App Store" className="h-[52px] md:h-[60px] w-auto" />
            </a>
            <a href="#">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/how-it-works-google-play-badge.png" alt="Get it on Google Play" className="h-[52px] md:h-[60px] w-auto" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
