import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Plans" };

type Plan = {
  name: string;
  subtitle: string;
  price: string;
  period?: string;
  cta: string;
  disabled?: boolean;
  featured?: boolean;
  features: string[];
  icon: React.ReactNode;
};

const SparkleIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
    <path d="M18 15l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z" />
  </svg>
);
const CrownIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <path d="M3 8l4.5 3.5L12 5l4.5 6.5L21 8l-1.6 10H4.6z" />
    <path d="M4.6 18h14.8" />
  </svg>
);
const BuildingIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <path d="M5 21V4a1 1 0 011-1h8a1 1 0 011 1v17M15 9h3a1 1 0 011 1v11M3 21h18" />
    <path d="M8 7h1M11 7h1M8 11h1M11 11h1M8 15h1M11 15h1" />
  </svg>
);
const ShieldIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <path d="M12 3l7 2.5V11c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V5.5z" />
  </svg>
);

const PLANS: Plan[] = [
  {
    name: "Free",
    subtitle: "Perfect for demonstrations.",
    price: "€0",
    cta: "Current Plan",
    disabled: true,
    icon: SparkleIcon,
    features: ["1 user", "20 patients/month", "Basic triage", "Limited AI recommendations", "Community support"],
  },
  {
    name: "Professional",
    subtitle: "For individual clinics.",
    price: "€99",
    period: "/month",
    cta: "Subscribe",
    featured: true,
    icon: CrownIcon,
    features: ["10 users", "Unlimited patients", "AI recommendations", "Clinical reports", "Dashboard", "Export to PDF", "Email support"],
  },
  {
    name: "Business",
    subtitle: "For hospitals.",
    price: "€499",
    period: "/month",
    cta: "Subscribe",
    icon: BuildingIcon,
    features: ["Unlimited users", "Multi-department", "Role management", "KPI dashboards", "Analytics", "Custom workflows", "API", "HL7/FHIR integration", "Audit logs"],
  },
  {
    name: "Enterprise",
    subtitle: "Large hospitals & governments.",
    price: "€2,000",
    period: "/month",
    cta: "Subscribe",
    icon: ShieldIcon,
    features: ["Unlimited everything", "White label", "Dedicated AI models", "SSO", "Active Directory", "On-premise deployment", "SLA", "Custom integrations", "Training", "Account manager"],
  },
];

function Check({ featured }: { featured?: boolean }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={`mt-0.5 h-4 w-4 shrink-0 ${featured ? "text-[#490073]" : "text-[#28b7b3]"}`}>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex h-full flex-col rounded-[24px] bg-white p-7 md:p-8 ${
                  plan.featured
                    ? "border-2 border-[#490073] shadow-[0px_12px_30px_0px_rgba(73,0,115,0.18)]"
                    : "border border-black/10 shadow-[0px_3px_10px_0px_rgba(0,0,0,0.06)]"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#490073] px-4 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                    Most Popular
                  </span>
                )}

                <div className="flex items-start gap-3">
                  <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${plan.featured ? "bg-[#490073]/10 text-[#490073]" : "bg-[#28b7b3]/10 text-[#28b7b3]"}`}>
                    {plan.icon}
                  </span>
                  <div>
                    <h3 className="text-[22px] font-bold leading-tight text-black">{plan.name}</h3>
                    <p className="mt-0.5 text-[14px] text-[#494747]">{plan.subtitle}</p>
                  </div>
                </div>

                <div className="mt-6 flex items-end gap-1">
                  <span className="text-[40px] font-bold leading-none text-black">{plan.price}</span>
                  {plan.period && <span className="pb-1 text-[16px] text-[#494747]">{plan.period}</span>}
                </div>

                {plan.disabled ? (
                  <button
                    type="button"
                    disabled
                    className="mt-6 w-full cursor-default rounded-2xl bg-black/[0.06] py-3.5 text-[16px] font-semibold text-black/40"
                  >
                    {plan.cta}
                  </button>
                ) : (
                  <Link
                    href="/contact"
                    className={`mt-6 block w-full rounded-2xl py-3.5 text-center text-[16px] font-semibold text-white transition-colors ${
                      plan.featured ? "bg-[#490073] hover:bg-[#3a005c]" : "bg-[#28b7b3] hover:bg-[#1f9b98]"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                )}

                <ul className="mt-7 space-y-3 text-[15px] text-black/80">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check featured={plan.featured} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
