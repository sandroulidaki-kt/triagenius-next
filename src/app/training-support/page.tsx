import type { Metadata } from "next";

export const metadata: Metadata = { title: "Training & Support" };

export default function TrainingSupportPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative overflow-hidden bg-[#e5f7f7]">
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute top-0 bottom-0 -right-[6%] w-[52%] bg-white rounded-tl-[360px] md:rounded-tl-[520px]"></div>
        </div>
        <div className="relative z-10 max-w-[1920px] mx-auto px-6 md:px-[100px] xl:px-[200px] pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="max-w-[886px]">
              <h1 className="font-semibold text-[44px] leading-tight md:text-[64px] lg:text-[80px] text-black">Training &amp; Support</h1>
              <div className="mt-8 space-y-4 text-[16px] md:text-[18px] leading-relaxed text-black">
                <p>As the pioneers in Triagenius app training and support, we are committed to maximizing your team&apos;s efficiency and proficiency in utilizing this powerful tool.</p>
                <p>From introductory sessions to advanced features and updates, we provide in-depth, hands-on training for seamless integration into your daily operations.</p>
              </div>
            </div>
            <div className="shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/training-hero-illustration.png" alt="Training and support illustration" className="w-[220px] md:w-[280px] lg:w-[316px] h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Feature rows */}
      <section className="bg-[#f8f8ff]">
        <div className="max-w-[1000px] mx-auto px-6 py-16 md:py-24 space-y-8">
          {/* 1 */}
          <div className="flex flex-col sm:flex-row gap-6 bg-white rounded-[40px] shadow-[0px_3px_6px_0px_rgba(0,0,0,0.16)] p-8 md:p-10">
            <div className="shrink-0 flex items-center justify-center h-[72px] w-[72px] rounded-[10px] bg-[#9de5e3]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/training-icon-support.png" alt="" className="h-9 w-9" />
            </div>
            <div>
              <h2 className="font-semibold text-[24px] text-black">Dedicated Support &amp; Guidance</h2>
              <p className="mt-3 text-[16px] md:text-[18px] leading-relaxed text-[#494747]">Our team of experts is always at your service, offering ongoing support and guidance. Whether it&apos;s troubleshooting, clarifying doubts, or optimizing app utilization, we&apos;re here to ensure a smooth experience and swift resolution of any queries or concerns.</p>
            </div>
          </div>

          {/* 2 */}
          <div className="flex flex-col sm:flex-row gap-6 bg-white rounded-[40px] shadow-[0px_3px_6px_0px_rgba(0,0,0,0.16)] p-8 md:p-10">
            <div className="shrink-0 flex items-center justify-center h-[72px] w-[72px] rounded-[10px] bg-[#9de5e3]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/training-icon-customize.png" alt="" className="h-9 w-9" />
            </div>
            <div>
              <h2 className="font-semibold text-[24px] text-black">Customized Implementation Strategies</h2>
              <p className="mt-3 text-[16px] md:text-[18px] leading-relaxed text-[#494747]">Understanding that every medical facility is unique, we craft personalized implementation strategies that align with your specific needs and workflows. Our goal is to make the integration of Triagenius into your practice as effortless and impactful as possible.</p>
            </div>
          </div>

          {/* 3 */}
          <div className="flex flex-col sm:flex-row gap-6 bg-white rounded-[40px] shadow-[0px_3px_6px_0px_rgba(0,0,0,0.16)] p-8 md:p-10">
            <div className="shrink-0 flex items-center justify-center h-[72px] w-[72px] rounded-[10px] bg-[#9de5e3]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/training-icon-update.png" alt="" className="h-9 w-9" />
            </div>
            <div>
              <h2 className="font-semibold text-[24px] text-black">Continuous Updates &amp; Upgrades</h2>
              <p className="mt-3 text-[16px] md:text-[18px] leading-relaxed text-[#494747]">Stay ahead with the latest advancements in the Triagenius app. We keep you informed about updates, new features, and enhancements, empowering your team to leverage the app&apos;s full potential continually.</p>
            </div>
          </div>

          {/* 4 */}
          <div className="flex flex-col sm:flex-row gap-6 bg-white rounded-[40px] shadow-[0px_3px_6px_0px_rgba(0,0,0,0.16)] p-8 md:p-10">
            <div className="shrink-0 flex items-center justify-center h-[72px] w-[72px] rounded-[10px] bg-[#9de5e3]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/training-icon-patient-care.png" alt="" className="h-9 w-9" />
            </div>
            <div>
              <h2 className="font-semibold text-[24px] text-black">Maximize Efficiency, Enhance Patient Care</h2>
              <p className="mt-3 text-[16px] md:text-[18px] leading-relaxed text-[#494747]">By partnering with us for Triagenius app training and support, you&apos;re not just adopting a digital solution; you&apos;re elevating your healthcare services. Improve operational efficiency, streamline patient care, and embrace innovation seamlessly with our expertise.</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="max-w-[1520px] mx-auto border-t border-black/10 md:mx-[200px] xl:mx-auto"></div>

        {/* Closing tagline + app download band */}
        <div className="max-w-[1920px] mx-auto px-6 md:px-[100px] xl:px-[200px] py-16 md:py-20 text-center">
          <p className="mx-auto max-w-[1120px] font-semibold text-[26px] md:text-[36px] lg:text-[42px] leading-snug text-[#490073]">
            Your patients&apos; well-being depends on swift and accurate triage. Be the cornerstone of efficient healthcare!
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#" aria-label="Download on the App Store">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/home-badge-appstore.svg" alt="Download on the App Store" className="h-[52px] w-auto" />
            </a>
            <a href="#" aria-label="Get it on Google Play">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/home-badge-googleplay.svg" alt="Get it on Google Play" className="h-[52px] w-auto" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
