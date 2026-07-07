import type { Metadata } from "next";

export const metadata: Metadata = { title: "Features" };

export default function FeaturesPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#e5f7f7]">
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute top-0 bottom-0 -right-[6%] w-[52%] bg-white rounded-tl-[360px] md:rounded-tl-[520px]"></div>
        </div>
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 xl:px-0 py-16 md:py-24 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 max-w-[567px] text-center lg:text-left">
            <h1 className="font-sans font-semibold text-black leading-[1.05] text-[42px] sm:text-[56px] lg:text-[64px]">
              Why Triagenius
            </h1>
            <p className="mt-6 text-[18px] text-black/90 leading-relaxed">
              Healthcare professionals using a medical triage mobile app experience a range of benefits that enhance their practice and patient care.
            </p>
          </div>

          <div className="flex-1 relative flex items-center justify-center min-h-[380px] w-full">
            <div className="relative flex items-end gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/features-hero-results.png" alt="Triagenius patient results screen" className="relative z-10 w-[150px] sm:w-[200px] rounded-2xl shadow-xl" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/features-hero-patientlist.png" alt="Triagenius patient list screen" className="relative z-20 w-[160px] sm:w-[210px] rounded-2xl shadow-xl -ml-8 mb-[-24px]" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 xl:px-0 py-16 md:py-24">
          <p className="text-[#490073] text-[18px] uppercase font-semibold tracking-wide">Our App</p>
          <h2 className="mt-2 font-sans font-semibold text-black text-[32px] md:text-[48px]">Benefits</h2>
          <p className="mt-6 max-w-[700px] text-[18px] text-[#494747] leading-relaxed">
            Health professionals using a medical triage mobile app experience a range of benefits that enhance their practice and patient care:
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/features-icon-efficiency.svg" alt="" className="w-[72px] h-[72px] rounded-[10px] bg-[#28b7b3] p-4" />
              <p className="mt-6 font-semibold text-[24px] text-black">Efficiency</p>
              <p className="mt-4 text-[16px] text-[#494747] leading-relaxed">Streamlines patient assessment, enabling quicker and more accurate identification of critical cases, optimizing time and resources.</p>
            </div>
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/features-icon-reception.svg" alt="" className="w-[72px] h-[72px] rounded-[10px] bg-[#28b7b3] p-4" />
              <p className="mt-6 font-semibold text-[24px] text-black">Optimized Patient Reception</p>
              <p className="mt-4 text-[16px] text-[#494747] leading-relaxed">Triagenius ensures hospitals are well-prepared to receive patients efficiently, optimizing resource utilization and streamlining medical procedures, especially for those arriving with ambulances.</p>
            </div>
            <div>
              <div className="w-[72px] h-[72px] rounded-[10px] bg-[#28b7b3] p-4 flex items-center gap-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/features-icon-decision1.svg" alt="" className="w-1/2" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/features-icon-decision2.svg" alt="" className="w-1/2" />
              </div>
              <p className="mt-6 font-semibold text-[24px] text-black">Improved Decision-Making</p>
              <p className="mt-4 text-[16px] text-[#494747] leading-relaxed">Structured symptom evaluation and integration with medical databases provide detailed patient information, facilitating precise diagnosis and treatment planning.</p>
            </div>
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/features-icon-time.svg" alt="" className="w-[72px] h-[72px] rounded-[10px] bg-[#28b7b3] p-4" />
              <p className="mt-6 font-semibold text-[24px] text-black">Time Optimization</p>
              <p className="mt-4 text-[16px] text-[#494747] leading-relaxed">Allows for faster responses to urgent cases, enabling timely interventions and reducing waiting times for patients in critical conditions.</p>
            </div>
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/features-icon-optimization.svg" alt="" className="w-[72px] h-[72px] rounded-[10px] bg-[#28b7b3] p-4" />
              <p className="mt-6 font-semibold text-[24px] text-black">Workflow Optimization</p>
              <p className="mt-4 text-[16px] text-[#494747] leading-relaxed">Integrates seamlessly into existing systems, reducing administrative burdens and improving the overall efficiency of healthcare delivery.</p>
            </div>
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/features-icon-accessibility.svg" alt="" className="w-[72px] h-[72px] rounded-[10px] bg-[#28b7b3] p-4" />
              <p className="mt-6 font-semibold text-[24px] text-black">Accessibility</p>
              <p className="mt-4 text-[16px] text-[#494747] leading-relaxed">Offline capability ensures continued functionality even in areas with limited connectivity, crucial during emergencies or in remote locations.</p>
            </div>
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/features-icon-communication.svg" alt="" className="w-[72px] h-[72px] rounded-[10px] bg-[#28b7b3] p-4" />
              <p className="mt-6 font-semibold text-[24px] text-black">Enhanced Communication</p>
              <p className="mt-4 text-[16px] text-[#494747] leading-relaxed">Features like multimedia attachments facilitate clearer communication between health professionals.</p>
            </div>
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/features-icon-accuracy.svg" alt="" className="w-[72px] h-[72px] rounded-[10px] bg-[#28b7b3] p-4" />
              <p className="mt-6 font-semibold text-[24px] text-black">Accuracy</p>
              <p className="mt-4 text-[16px] text-[#494747] leading-relaxed">The structured approach of Triagenius aids in precise symptom evaluation and helps in assigning appropriate emergency levels, leading to more accurate diagnosis.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= KEY FEATURES: CORE APP ================= */}
      <section className="bg-[#f8f8ff]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 xl:px-0 py-16 md:py-24">
          <p className="text-[#490073] text-[18px] uppercase font-semibold tracking-wide">Triagenius</p>
          <h2 className="mt-2 font-sans font-semibold text-black text-[32px] md:text-[48px]">Key Features</h2>

          <div className="mt-12 grid lg:grid-cols-[1fr_420px] gap-12 items-start">
            <ul className="space-y-8">
              <li className="flex gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/home-icon-check.svg" alt="" className="w-4 h-4 mt-1.5 shrink-0" />
                <div>
                  <p className="font-semibold text-[20px] text-black">User Authentication &amp; Profile Management</p>
                  <p className="mt-2 text-[16px] text-[#494747] leading-relaxed">Health professionals login, accessing their profiles to ensure data security and personalized functionalities.</p>
                </div>
              </li>
              <li className="flex gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/home-icon-check.svg" alt="" className="w-4 h-4 mt-1.5 shrink-0" />
                <div>
                  <p className="font-semibold text-[20px] text-black">Patient Registration</p>
                  <p className="mt-2 text-[16px] text-[#494747] leading-relaxed">The mobile app allows for patient registration, gathering essential information such as demographics, medical history, and current symptoms.</p>
                </div>
              </li>
              <li className="flex gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/home-icon-check.svg" alt="" className="w-4 h-4 mt-1.5 shrink-0" />
                <div>
                  <p className="font-semibold text-[20px] text-black">Vital Signs Data Entry</p>
                  <p className="mt-2 text-[16px] text-[#494747] leading-relaxed">Enables the input of vital signs and additional patient data for an accurate assessment.</p>
                </div>
              </li>
              <li className="flex gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/home-icon-check.svg" alt="" className="w-4 h-4 mt-1.5 shrink-0" />
                <div>
                  <p className="font-semibold text-[20px] text-black">Symptom Checker</p>
                  <p className="mt-2 text-[16px] text-[#494747] leading-relaxed">Users input patient symptoms using a structured interface or questionnaire designed to assess and categorize the severity of symptoms.</p>
                </div>
              </li>
              <li className="flex gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/home-icon-check.svg" alt="" className="w-4 h-4 mt-1.5 shrink-0" />
                <div>
                  <p className="font-semibold text-[20px] text-black">Assessment tools</p>
                  <p className="mt-2 text-[16px] text-[#494747] leading-relaxed">ABC (Airway-Breathing-Circulation), Revised Trauma Score (RTS), and the Glasgow Coma Scale, empower healthcare professionals to swiftly prioritize and evaluate patients&apos; vital functions, trauma severity, and consciousness levels for precise and efficient triage.</p>
                </div>
              </li>
              <li className="flex gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/home-icon-check.svg" alt="" className="w-4 h-4 mt-1.5 shrink-0" />
                <div>
                  <p className="font-semibold text-[20px] text-black">Emergency Level Assignment</p>
                  <p className="mt-2 text-[16px] text-[#494747] leading-relaxed">Based on the symptoms provided, Triagenius assigns an emergency level or priority, guiding healthcare professionals in prioritizing cases.</p>
                </div>
              </li>
              <li className="flex gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/home-icon-check.svg" alt="" className="w-4 h-4 mt-1.5 shrink-0" />
                <div>
                  <p className="font-semibold text-[20px] text-black">Optimized Ambulance Integration</p>
                  <p className="mt-2 text-[16px] text-[#494747] leading-relaxed">Leverage GPS-guided routes and real-time incident data for streamlined coordination with hospitals.</p>
                </div>
              </li>
            </ul>

            <div className="hidden lg:flex justify-center sticky top-32">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/features-keyfeature-illustration1.svg" alt="Illustration of Triagenius core app features" className="w-full max-w-[380px] h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= KEY FEATURES: ADDITIONAL ================= */}
      <section className="bg-[#f8f8ff]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 xl:px-0 pb-16 md:pb-24">
          <div className="grid lg:grid-cols-[420px_1fr] gap-12 items-start">
            <div className="hidden lg:flex justify-center sticky top-32 order-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/features-keyfeature-illustration2.svg" alt="Illustration of Triagenius additional features" className="w-full max-w-[420px] h-auto" />
            </div>

            <ul className="space-y-8 order-2">
              <li className="flex gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/home-icon-check.svg" alt="" className="w-4 h-4 mt-1.5 shrink-0" />
                <div>
                  <p className="font-semibold text-[20px] text-black">Real-time incident data</p>
                  <p className="mt-2 text-[16px] text-[#494747] leading-relaxed">Triagenius is seamlessly connected and updated in the management software, fostering continuous monitoring and information sharing among involved experts for coordinated care.</p>
                </div>
              </li>
              <li className="flex gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/home-icon-check.svg" alt="" className="w-4 h-4 mt-1.5 shrink-0" />
                <div>
                  <p className="font-semibold text-[20px] text-black">Multimedia Attachments</p>
                  <p className="mt-2 text-[16px] text-[#494747] leading-relaxed">Allows for attaching images, videos, or additional documents to complement the symptom description, aiding in clearer communication.</p>
                </div>
              </li>
              <li className="flex gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/home-icon-check.svg" alt="" className="w-4 h-4 mt-1.5 shrink-0" />
                <div>
                  <p className="font-semibold text-[20px] text-black">Offline Capability</p>
                  <p className="mt-2 text-[16px] text-[#494747] leading-relaxed">Provides functionality even in offline settings, ensuring continuous access to critical features during emergencies or in areas with poor connectivity.</p>
                </div>
              </li>
              <li className="flex gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/home-icon-check.svg" alt="" className="w-4 h-4 mt-1.5 shrink-0" />
                <div>
                  <p className="font-semibold text-[20px] text-black">Feedback &amp; Reporting</p>
                  <p className="mt-2 text-[16px] text-[#494747] leading-relaxed">Triagenius keeps a chronological record of patient symptom assessments, diagnoses, and referrals, aiding in seamless care.</p>
                </div>
              </li>
              <li className="flex gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/home-icon-check.svg" alt="" className="w-4 h-4 mt-1.5 shrink-0" />
                <div>
                  <p className="font-semibold text-[20px] text-black">Integration with Emergency Services</p>
                  <p className="mt-2 text-[16px] text-[#494747] leading-relaxed">Offers seamless integration with emergency services for swift referrals or immediate assistance when necessary.</p>
                </div>
              </li>
              <li className="flex gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/home-icon-check.svg" alt="" className="w-4 h-4 mt-1.5 shrink-0" />
                <div>
                  <p className="font-semibold text-[20px] text-black">Integration with Medical Databases</p>
                  <p className="mt-2 text-[16px] text-[#494747] leading-relaxed">Seamless integration with medical databases ensures access to up-to-date information, enhancing the quality of decision-making.</p>
                </div>
              </li>
              <li className="flex gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/home-icon-check.svg" alt="" className="w-4 h-4 mt-1.5 shrink-0" />
                <div>
                  <p className="font-semibold text-[20px] text-black">QR Code Integration</p>
                  <p className="mt-2 text-[16px] text-[#494747] leading-relaxed">Generates QR codes containing relevant patient data for easy sharing among healthcare providers or during emergency situations.</p>
                </div>
              </li>
              <li className="flex gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/home-icon-check.svg" alt="" className="w-4 h-4 mt-1.5 shrink-0" />
                <div>
                  <p className="font-semibold text-[20px] text-black">Multilingual Interface</p>
                  <p className="mt-2 text-[16px] text-[#494747] leading-relaxed">Triagenius interface, menus, and content are integrated in various languages, allowing users to navigate and interact comfortably in their preferred language.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="mt-8 lg:hidden flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/features-keyfeature-illustration2.svg" alt="Illustration of Triagenius additional features" className="w-full max-w-[320px] h-auto" />
          </div>
        </div>
      </section>

      {/* ================= CLOSING TAGLINE + APP DOWNLOAD ================= */}
      <section className="bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 xl:px-0 py-16 md:py-24 text-center">
          <p className="font-sans font-semibold text-[24px] md:text-[36px] text-[#490073] leading-snug max-w-[1120px] mx-auto">
            Your patients&apos; well-being depends on swift and accurate triage. Be the cornerstone of efficient healthcare!
          </p>

          <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
            <a href="#">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/features-badge-appstore.png" alt="Download on the App Store" className="h-[52px] w-auto" />
            </a>
            <a href="#">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/features-badge-googleplay.png" alt="Get it on Google Play" className="h-[52px] w-auto" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
