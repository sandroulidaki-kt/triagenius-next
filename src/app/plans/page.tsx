import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Plans" };

function Check({ light }: { light?: boolean }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={`mt-0.5 h-4 w-4 shrink-0 ${light ? "text-white" : "text-[#28b7b3]"}`}>
      <path d="M4 10.5l4 4 8-9" />
    </svg>
  );
}

export default function PlansPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative overflow-hidden bg-[#e5f7f7]">
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute top-0 bottom-0 left-0 w-[56%] bg-white rounded-tr-[360px] md:rounded-tr-[520px]"></div>
        </div>
        <div className="relative z-10 max-w-[1920px] mx-auto px-6 md:px-[100px] xl:px-[200px] pt-16 pb-20 md:pt-24 md:pb-28">
          <h1 className="font-semibold text-[44px] leading-tight md:text-[64px] lg:text-[80px] text-black">Plans</h1>
          <div className="mt-8 max-w-[886px] text-[16px] md:text-[18px] leading-relaxed text-black">
            <p>Simple and affordable plans for everyone.</p>
            <p>Download our Triagenius app and select the plan that suits your demands depending on the functionalities you need.</p>
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="bg-[#f8f8ff]">
        <div className="max-w-[1920px] mx-auto px-6 md:px-[100px] xl:px-[200px] py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* FREE */}
            <div className="flex h-full flex-col items-center text-center bg-white rounded-[40px] shadow-[0px_3px_6px_0px_rgba(0,0,0,0.16)] px-8 py-10">
              <div className="h-[72px] w-[72px] rounded-[10px] bg-[#9de5e3]" aria-hidden="true"></div>
              <h3 className="mt-8 font-semibold text-[24px] uppercase tracking-wide text-black">Free</h3>
              <p className="mt-3 text-[18px] text-[#494747]">Perfect for demonstrations.</p>
              <div className="mt-6">
                <p className="font-bold text-[48px] leading-none text-black">€0</p>
              </div>
              <ul className="mt-8 w-full space-y-3 text-left text-[16px] text-[#494747]">
                {["1 user", "20 patients/month", "Basic triage", "Limited AI recommendations", "Community support"].map((f) => (
                  <li key={f} className="flex items-start gap-2.5"><Check /><span>{f}</span></li>
                ))}
              </ul>
              <div className="flex-1" />
              <Link prefetch={false} href="/contact" className="mt-8 block w-full rounded-2xl bg-[#28b7b3] py-3.5 text-center text-[16px] font-semibold text-white transition-colors hover:bg-[#1f9b98]">Get Started</Link>
            </div>

            {/* PROFESSIONAL (featured) */}
            <div className="relative flex h-full flex-col items-center text-center bg-[#28b7b3] rounded-[40px] shadow-[0px_8px_20px_0px_rgba(40,183,179,0.35)] px-8 py-10 md:-mt-4 md:mb-4">
              <span className="absolute -top-3 right-6 z-10 rounded-full bg-white px-3 py-1 text-[12px] font-semibold uppercase tracking-wide text-[#28b7b3] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.12)]">Most Popular</span>
              <div className="relative h-[84px] w-[84px]" aria-hidden="true">
                <div className="absolute left-0 top-0 h-[84px] w-[84px] rounded-[10px] bg-[#9de5e3]"></div>
                <div className="absolute left-3 top-3 h-[72px] w-[72px] rounded-[10px] bg-[#cef1f1]"></div>
              </div>
              <h3 className="mt-8 font-semibold text-[24px] uppercase tracking-wide text-white">Professional</h3>
              <p className="mt-3 text-[18px] text-white/90">For individual clinics.</p>
              <div className="mt-6">
                <p className="font-bold text-[48px] leading-none text-white">€99</p>
                <p className="mt-2 text-[18px] text-white/90">/month</p>
              </div>
              <ul className="mt-8 w-full space-y-3 text-left text-[16px] text-white/90">
                {["10 users", "Unlimited patients", "AI recommendations", "Clinical reports", "Dashboard", "Export to PDF", "Email support"].map((f) => (
                  <li key={f} className="flex items-start gap-2.5"><Check light /><span>{f}</span></li>
                ))}
              </ul>
              <div className="flex-1" />
              <Link prefetch={false} href="/contact" className="mt-8 block w-full rounded-2xl bg-white py-3.5 text-center text-[16px] font-semibold text-[#28b7b3] transition-colors hover:bg-white/90">Subscribe</Link>
            </div>

            {/* BUSINESS */}
            <div className="flex h-full flex-col items-center text-center bg-white rounded-[40px] shadow-[0px_3px_6px_0px_rgba(0,0,0,0.16)] px-8 py-10">
              <div className="relative h-[92px] w-[92px]" aria-hidden="true">
                <div className="absolute left-0 top-0 h-[92px] w-[92px] rounded-[10px] bg-[#9de5e3]"></div>
                <div className="absolute left-0 top-0 h-[72px] w-[72px] rounded-[10px] bg-[#e5f7f7]"></div>
                <div className="absolute left-6 top-6 h-[48px] w-[48px] rounded-[10px] bg-[#cef1f1]"></div>
              </div>
              <h3 className="mt-8 font-semibold text-[24px] uppercase tracking-wide text-black">Business</h3>
              <p className="mt-3 text-[18px] text-[#494747]">For hospitals.</p>
              <div className="mt-6">
                <p className="font-bold text-[48px] leading-none text-black">€499</p>
                <p className="mt-2 text-[18px] text-[#494747]">/month</p>
              </div>
              <ul className="mt-8 w-full space-y-3 text-left text-[16px] text-[#494747]">
                {["Unlimited users", "Multi-department", "Role management", "KPI dashboards", "Analytics", "Custom workflows", "API", "HL7/FHIR integration", "Audit logs"].map((f) => (
                  <li key={f} className="flex items-start gap-2.5"><Check /><span>{f}</span></li>
                ))}
              </ul>
              <div className="flex-1" />
              <Link prefetch={false} href="/contact" className="mt-8 block w-full rounded-2xl bg-[#28b7b3] py-3.5 text-center text-[16px] font-semibold text-white transition-colors hover:bg-[#1f9b98]">Subscribe</Link>
            </div>

            {/* ENTERPRISE */}
            <div className="flex h-full flex-col items-center text-center bg-white rounded-[40px] shadow-[0px_3px_6px_0px_rgba(0,0,0,0.16)] px-8 py-10">
              <div className="relative h-[92px] w-[92px]" aria-hidden="true">
                <div className="absolute left-0 top-0 h-[92px] w-[92px] rounded-[16px] border-[1.5px] border-solid border-[#9de5e3]"></div>
                <div className="absolute left-2.5 top-2.5 h-[72px] w-[72px] rounded-[10px] bg-[#9de5e3]"></div>
              </div>
              <h3 className="mt-8 font-semibold text-[24px] uppercase tracking-wide text-black">Enterprise</h3>
              <p className="mt-3 text-[18px] text-[#494747]">Large hospitals &amp; governments.</p>
              <div className="mt-6">
                <p className="font-bold text-[48px] leading-none text-black">€2,000</p>
                <p className="mt-2 text-[18px] text-[#494747]">/month</p>
              </div>
              <ul className="mt-8 w-full space-y-3 text-left text-[16px] text-[#494747]">
                {["Unlimited everything", "White label", "Dedicated AI models", "SSO", "Active Directory", "On-premise deployment", "SLA", "Custom integrations", "Training", "Account manager"].map((f) => (
                  <li key={f} className="flex items-start gap-2.5"><Check /><span>{f}</span></li>
                ))}
              </ul>
              <div className="flex-1" />
              <Link prefetch={false} href="/contact" className="mt-8 block w-full rounded-2xl bg-[#28b7b3] py-3.5 text-center text-[16px] font-semibold text-white transition-colors hover:bg-[#1f9b98]">Subscribe</Link>
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
              <img src="/assets/plans-badge-appstore.svg" alt="Download on the App Store" className="h-[52px] w-auto" />
            </a>
            <a href="#" aria-label="Get it on Google Play">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/plans-badge-googleplay.svg" alt="Get it on Google Play" className="h-[52px] w-auto" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
