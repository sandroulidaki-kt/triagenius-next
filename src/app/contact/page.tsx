import type { Metadata } from "next";
import Link from "next/link";

import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative overflow-hidden bg-[#e5f7f7]">
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute top-0 bottom-0 left-0 w-[56%] bg-white rounded-tr-[360px] md:rounded-tr-[520px]"></div>
        </div>
        <div className="relative z-10 max-w-[1920px] mx-auto px-6 md:px-[100px] xl:px-[200px] pt-16 pb-20 md:pt-24 md:pb-28">
          <h1 className="font-semibold text-[44px] leading-tight md:text-[64px] lg:text-[80px] text-black">
            Contact Us
          </h1>
          <div className="mt-8 max-w-[567px] text-[16px] md:text-[18px] leading-relaxed text-black">
            <p>Looking for more information or wanting to try one of our plans?</p>
            <p>Our team is on hand to answer your questions.</p>
          </div>
        </div>
      </section>

      {/* Get in Touch */}
      <section className="bg-[#f8f8ff]">
        <div className="max-w-[1920px] mx-auto px-6 md:px-[100px] xl:px-[200px] py-16 md:py-24">
          <div className="text-center">
            <p className="text-[18px] uppercase tracking-wide text-[#490073]">
              Contact us
            </p>
            <h2 className="mt-2 font-semibold text-[32px] md:text-[40px] lg:text-[48px] text-black">
              Get in Touch
            </h2>
          </div>

          <div className="mt-14 max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Left: contact info card */}
            <div className="bg-white rounded-[40px] shadow-[0px_3px_6px_0px_rgba(0,0,0,0.16)] px-8 py-10 md:px-10 md:py-12 h-full">
              <div className="flex flex-col gap-10">
                {/* Location */}
                <div className="flex items-start gap-5">
                  <div className="shrink-0 h-[72px] w-[72px] rounded-[10px] bg-[#9de5e3] flex items-center justify-center p-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/assets/contact-icon-location.svg"
                      alt=""
                      className="h-full w-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[22px] md:text-[24px] text-black">
                      Our location
                    </h3>
                    <p className="mt-2 text-[16px] leading-relaxed text-black/80">
                      Marine Point (2nd Floor), Belview Port, Waterford, X91 W0XW
                    </p>
                  </div>
                </div>

                {/* Call */}
                <div className="flex items-start gap-5">
                  <div className="shrink-0 h-[72px] w-[72px] rounded-[10px] bg-[#9de5e3] flex items-center justify-center p-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/assets/contact-icon-call.svg"
                      alt=""
                      className="h-full w-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[22px] md:text-[24px] text-black">
                      Call us On
                    </h3>
                    <p className="mt-2 text-[16px] leading-relaxed text-black/80">
                      +353 51349127
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-5">
                  <div className="shrink-0 h-[72px] w-[72px] rounded-[10px] bg-[#9de5e3] flex items-center justify-center p-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/assets/contact-icon-mail.svg"
                      alt=""
                      className="h-full w-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[22px] md:text-[24px] text-black">
                      Email us
                    </h3>
                    <p className="mt-2 text-[16px] leading-relaxed text-black/80">
                      <a
                        href="mailto:info@triagenius.com"
                        className="hover:text-[#28b7b3]"
                      >
                        info@triagenius.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: contact form */}
            <div className="bg-white rounded-[40px] shadow-[0px_3px_6px_0px_rgba(0,0,0,0.16)] px-8 py-10 md:px-12 md:py-12 h-full">
              <h3 className="font-semibold text-[22px] md:text-[24px] text-black">
                Send us a Message directly
              </h3>
              <ContactForm />
            </div>
          </div>

          {/* Support link */}
          <p className="max-w-[1100px] mx-auto mt-8 text-[16px] md:text-[18px] text-black">
            Looking for support? Visit{" "}
            <Link prefetch={false}
              href="/training-support"
              className="text-[#28b7b3] underline decoration-from-font hover:text-[#490073] transition-colors"
            >
              Training and support
            </Link>
          </p>
        </div>

        {/* Divider */}
        <div className="max-w-[1520px] mx-auto border-t border-black/10 md:mx-[200px] xl:mx-auto"></div>

        {/* Closing tagline + app download band */}
        <div className="max-w-[1920px] mx-auto px-6 md:px-[100px] xl:px-[200px] py-16 md:py-20 text-center">
          <p className="mx-auto max-w-[1120px] font-semibold text-[26px] md:text-[36px] lg:text-[42px] leading-snug text-[#490073]">
            Your patients&apos; well-being depends on swift and accurate triage.
            Be the cornerstone of efficient healthcare!
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#" aria-label="Download on the App Store">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/home-badge-appstore.svg"
                alt="Download on the App Store"
                className="h-[52px] w-auto"
              />
            </a>
            <a href="#" aria-label="Get it on Google Play">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/home-badge-googleplay.svg"
                alt="Get it on Google Play"
                className="h-[52px] w-auto"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
