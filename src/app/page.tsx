import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Home" };

export default function HomePage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#f8f8ff]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 xl:px-0 py-16 md:py-24 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 max-w-[567px] text-center lg:text-left">
            <h1 className="font-sans font-semibold text-black leading-[1.05] text-[42px] sm:text-[56px] lg:text-[72px]">
              Discover <span className="font-bold">Triage</span>nius
            </h1>
            <p className="mt-6 text-[18px] text-black/90 leading-relaxed">
              A Streamlined Triage Software for Swift and Accurate Healthcare Assessment by Experts
            </p>
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 flex-wrap">
              <a href="#">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/home-badge-appstore.svg" alt="Download on the App Store" className="h-[52px] w-auto" />
              </a>
              <a href="#">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/home-badge-googleplay.svg" alt="Get it on Google Play" className="h-[52px] w-auto" />
              </a>
            </div>
          </div>

          <div className="flex-1 relative flex items-center justify-center min-h-[380px] w-full">
            <div className="absolute bg-[#9de5e3] h-[220px] w-[220px] md:h-[292px] md:w-[300px] rounded-[40px] -translate-x-20 md:-translate-x-24 -translate-y-6"></div>
            <div className="absolute bg-[#28b7b3] h-[220px] w-[220px] md:h-[292px] md:w-[300px] rounded-[40px] translate-x-20 md:translate-x-24 translate-y-10"></div>
            <div className="relative flex items-end gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/home-hero-symptom-area.png" alt="Triagenius symptom assessment screen" className="relative z-10 w-[150px] sm:w-[210px] rounded-2xl shadow-xl" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/home-hero-splash.png" alt="Triagenius app splash screen" className="relative z-20 w-[130px] sm:w-[180px] rounded-2xl shadow-xl -ml-8 mb-4" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT IS MEDICAL TRIAGE ================= */}
      <section className="bg-white">
        <div className="max-w-[1060px] mx-auto px-6 md:px-10 py-16 md:py-24 text-center">
          <h2 className="font-sans font-semibold text-black text-[32px] md:text-[48px]">What is Medical Triage?</h2>
          <p className="mt-6 text-[18px] text-[#494747] leading-relaxed">
            Medical triage is the process of prioritizing patients based on the severity of their condition and the urgency of care required.
            It involves rapid assessment, sorting, and allocation of resources to ensure that those with the most critical needs receive
            immediate attention while efficiently managing resources for others.
          </p>
        </div>
      </section>

      {/* ================= WHAT IS TRIAGENIUS? / FOR WHOM? ================= */}
      <section className="bg-[#f8f8ff]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 xl:px-0 py-16 md:py-24">

          {/* What is Triagenius */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative flex items-center justify-center min-h-[300px]">
              <div className="absolute bg-[rgba(206,241,241,0.54)] h-[240px] w-[240px] md:h-[292px] md:w-[300px] rounded-[40px]"></div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/home-illustr-2.svg" alt="Healthcare professional using Triagenius" className="relative z-10 w-[220px] md:w-[300px]" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/home-illustr-1.svg" alt="Triagenius app on mobile device" className="relative z-10 w-[140px] md:w-[190px] -ml-10 mt-16" />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-[#490073] text-[18px] uppercase font-semibold tracking-wide">Overview</p>
              <h2 className="mt-2 font-sans font-semibold text-black text-[32px] md:text-[48px]">What is Triagenius?</h2>
              <div className="mt-6 text-[18px] text-[#494747] leading-relaxed space-y-4">
                <p>Triagenius is your ultimate tool for <strong className="font-bold text-black">precise</strong> and <strong className="font-bold text-black">efficient</strong> patient assessment, both in the field and within health facilities.</p>
                <p>Seamlessly designed for healthcare professionals, doctors and nurses, this mobile app revolutionizes the medical triage process.</p>
                <p>With features tailored to streamline symptom evaluation, emergency level identification, and seamless integration with medical databases, our mobile app ensures <strong className="font-bold text-black">quick</strong> and <strong className="font-bold text-black">accurate diagnosis</strong>.</p>
              </div>
              <Link prefetch={false} href="/how-it-works" className="mt-6 inline-flex items-center gap-2 font-semibold text-[18px] text-[#28b7b3] hover:underline">
                Learn More
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/home-icon-arrow-right.svg" alt="" className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Triagenius: For whom */}
          <div className="mt-20 md:mt-28 grid lg:grid-cols-[1fr_1.35fr] gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-[#490073] text-[18px] uppercase font-semibold tracking-wide">Industries</p>
              <h2 className="mt-2 font-sans font-semibold text-black text-[32px] md:text-[48px]">Triagenius: For whom?</h2>
              <p className="mt-6 max-w-[600px] text-[18px] text-[#494747] leading-relaxed">
                The app serves as an excellent decision support tool for first responders and healthcare professionals, supporting the entire incident management flow.
              </p>
            </div>

            <div className="relative">
              {/* decorative off-balance backdrop: shifted right so the ambulance spills out on the left */}
              <div aria-hidden="true" className="pointer-events-none absolute z-0 rounded-[40px] bg-[#e5f7f7] inset-y-0 left-8 right-8 sm:left-[160px] sm:right-0"></div>
              <div className="relative z-10 grid sm:grid-cols-2 gap-8 sm:gap-10 py-10">
                <div className="flex flex-col items-center text-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/assets/home-icon-ambulance-v2.svg" alt="First Responders" className="h-[120px] w-auto" />
                  <p className="mt-6 font-semibold text-[20px] md:text-[22px] text-black whitespace-nowrap">First Responders</p>
                  <p className="mt-1 font-semibold text-[18px] text-black">Ambulance in the Field</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/assets/home-icon-hospital-v2.svg" alt="Healthcare Professionals" className="h-[120px] w-auto" />
                  <p className="mt-6 font-semibold text-[20px] md:text-[22px] text-black whitespace-nowrap">Healthcare Professionals</p>
                  <p className="mt-1 font-semibold text-[18px] text-black">Healthcare Facilities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 xl:px-0 py-16 md:py-24">
          <p className="text-[#490073] text-[18px] uppercase font-semibold tracking-wide">Triagenius</p>
          <h2 className="mt-2 font-sans font-semibold text-black text-[32px] md:text-[48px]">Benefits</h2>
          <p className="mt-6 max-w-[600px] text-[18px] text-[#494747] leading-relaxed">
            Healthcare professionals using a medical triage mobile app experience a range of benefits that enhance their practice and patient care:
          </p>

          <div className="mt-10 grid lg:grid-cols-2 gap-10">
            {/* Left: checklist items */}
            <ul className="space-y-8">
              <li className="flex gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/home-icon-check.svg" alt="" className="w-4 h-4 mt-1.5 shrink-0" />
                <div>
                  <p className="font-semibold text-[18px] text-black">Optimized Patient Reception</p>
                  <p className="mt-2 text-[16px] text-[#494747] leading-relaxed max-w-[556px]">Triagenius ensures hospitals are well-prepared to receive patients efficiently, optimizing resource utilization and streamlining medical procedures, especially for those arriving with ambulances.</p>
                </div>
              </li>
              <li className="flex gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/home-icon-check.svg" alt="" className="w-4 h-4 mt-1.5 shrink-0" />
                <div>
                  <p className="font-semibold text-[18px] text-black">Accuracy</p>
                  <p className="mt-2 text-[16px] text-[#494747] leading-relaxed max-w-[556px]">The structured approach of Triagenius aids in precise symptom evaluation and helps in assigning appropriate emergency levels, leading to more accurate diagnosis.</p>
                </div>
              </li>
              <li className="flex gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/home-icon-check.svg" alt="" className="w-4 h-4 mt-1.5 shrink-0" />
                <div>
                  <p className="font-semibold text-[18px] text-black">Workflow Optimization</p>
                  <p className="mt-2 text-[16px] text-[#494747] leading-relaxed max-w-[556px]">Integrates seamlessly into existing systems, reducing administrative burdens and improving the overall efficiency of healthcare delivery.</p>
                </div>
              </li>
              <li className="flex gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/home-icon-check.svg" alt="" className="w-4 h-4 mt-1.5 shrink-0" />
                <div>
                  <p className="font-semibold text-[18px] text-black">Accessibility</p>
                  <p className="mt-2 text-[16px] text-[#494747] leading-relaxed max-w-[556px]">Offline capability ensures continued functionality even in areas with limited connectivity, crucial during emergencies or in remote locations.</p>
                </div>
              </li>
              <li className="flex gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/home-icon-check.svg" alt="" className="w-4 h-4 mt-1.5 shrink-0" />
                <div>
                  <p className="font-semibold text-[18px] text-black">Enhanced Communication</p>
                  <p className="mt-2 text-[16px] text-[#494747] leading-relaxed max-w-[556px]">Features like multimedia attachments facilitate clearer communication between healthcare professionals.</p>
                </div>
              </li>
              <li>
                <Link prefetch={false} href="/features" className="inline-flex items-center gap-2 font-semibold text-[18px] text-[#28b7b3] hover:underline">
                  Explore Features
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/assets/home-icon-arrow-right.svg" alt="" className="w-3 h-3" />
                </Link>
              </li>
            </ul>

            {/* Right: benefit cards grid */}
            <div className="grid sm:grid-cols-2 gap-6 content-start">
              <div className="bg-[rgba(206,241,241,0.35)] rounded-2xl p-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/home-icon-efficiency.svg" alt="" className="w-[48px] h-[42px]" />
                <p className="mt-4 font-semibold text-[18px] text-black">Efficiency</p>
                <p className="mt-2 text-[16px] text-black/80 leading-relaxed">Streamlines patient assessment, enabling quicker and more accurate identification of critical cases, optimizing time and resources.</p>
              </div>
              <div className="bg-[rgba(206,241,241,0.35)] rounded-2xl p-6">
                <div className="flex -space-x-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/assets/home-icon-decision-1.svg" alt="" className="w-[26px] h-[26px]" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/assets/home-icon-decision-2.svg" alt="" className="w-[26px] h-[26px]" />
                </div>
                <p className="mt-4 font-semibold text-[18px] text-black">Improved Decision-Making</p>
                <p className="mt-2 text-[16px] text-[#494747] leading-relaxed">Structured symptom evaluation and integration with medical databases provide detailed patient information, facilitating precise diagnosis and treatment planning.</p>
              </div>
              <div className="bg-[rgba(206,241,241,0.35)] rounded-2xl p-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/home-icon-time.svg" alt="" className="w-[48px] h-[48px]" />
                <p className="mt-4 font-semibold text-[18px] text-black">Time Optimization</p>
                <p className="mt-2 text-[16px] text-[#494747] leading-relaxed">Allows for faster responses to urgent cases, enabling timely interventions and reducing waiting times for patients in critical conditions.</p>
              </div>
              <div className="bg-[rgba(206,241,241,0.35)] rounded-2xl p-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/home-icon-remote.svg" alt="" className="w-[40px] h-[54px]" />
                <p className="mt-4 font-semibold text-[18px] text-black">Remote Accessibility</p>
                <p className="mt-2 text-[16px] text-[#494747] leading-relaxed">Offers offline capabilities, ensuring continued functionality even in areas with limited connectivity, essential during emergencies or in remote locations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY TRIAGENIUS / VIDEO ================= */}
      <section className="bg-[#f8f8ff]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 xl:px-0 py-16 md:py-24 text-center">
          <p className="text-[#490073] text-[18px] uppercase font-semibold tracking-wide">Our App</p>
          <h2 className="mt-2 font-sans font-semibold text-black text-[32px] md:text-[48px]">Why Triagenius?</h2>

          <button
            type="button"
            aria-label="Watch the Triagenius demo video"
            className="group mt-10 mx-auto max-w-[1120px] w-full block relative overflow-hidden rounded-[40px] h-[320px] md:h-[420px] bg-gradient-to-br from-[#28b7b3]/15 via-[#e5f7f7] to-[#490073]/15"
          >
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex items-center justify-center h-[76px] w-[76px] md:h-[92px] md:w-[92px] rounded-full bg-white shadow-xl transition-transform duration-200 group-hover:scale-110">
                <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-8 w-8 md:h-10 md:w-10 text-[#28b7b3]"><path d="M8 5v14l11-7z" /></svg>
              </span>
            </span>
            <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[15px] font-semibold text-[#490073]/80">Watch the demo</span>
          </button>

          <hr className="mt-16 border-black/10 max-w-[1120px] mx-auto" />

          <p className="mt-16 font-sans font-semibold text-[24px] md:text-[36px] text-[#490073] leading-snug max-w-[1120px] mx-auto">
            Your patients&apos; well-being depends on swift and accurate triage. Be the cornerstone of efficient healthcare!
          </p>

          <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
            <a href="#">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/home-badge-appstore.svg" alt="Download on the App Store" className="h-[52px] w-auto" />
            </a>
            <a href="#">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/home-badge-googleplay.svg" alt="Get it on Google Play" className="h-[52px] w-auto" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
