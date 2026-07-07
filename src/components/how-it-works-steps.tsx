"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

type Step = {
  title: string;
  body: React.ReactNode;
};

const facilitiesSteps: Step[] = [
  {
    title: "Hospital Triage Assessment",
    body: (
      <p className="text-[#494747] text-base md:text-lg">
        Trained healthcare professionals evaluate patients upon arrival, quickly identifying those needing urgent attention versus those who can wait.
      </p>
    ),
  },
  {
    title: "Prioritization",
    body: (
      <>
        <p className="text-[#494747] text-base md:text-lg mb-4">
          Patients are categorized into different priority levels based on the severity of their condition. This often follows a color-coded system like:
        </p>
        <ul className="space-y-2 text-sm md:text-base text-[#494747]">
          <li className="flex items-start gap-2">
            <span className="mt-1.5 w-2.5 h-2.5 rounded-full bg-red-600 shrink-0"></span>
            <span>
              <strong className="text-black font-semibold">Immediate (Red):</strong> Life-threatening conditions needing immediate attention.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 w-2.5 h-2.5 rounded-full bg-yellow-400 shrink-0"></span>
            <span>
              <strong className="text-black font-semibold">Delayed (Yellow):</strong> Serious conditions requiring prompt care but not immediately life-threatening.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 w-2.5 h-2.5 rounded-full bg-green-500 shrink-0"></span>
            <span>
              <strong className="text-black font-semibold">Minimal (Green):</strong> Minor injuries or illnesses that can wait longer for treatment.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 w-2.5 h-2.5 rounded-full bg-black shrink-0"></span>
            <span>
              <strong className="text-black font-semibold">Expectant (Black):</strong> Conditions where immediate treatment wouldn&apos;t impact the outcome due to the severity of injuries.
            </span>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Resource Allocation",
    body: (
      <p className="text-[#494747] text-base md:text-lg">
        Once categorized, patients are directed to appropriate care areas based on their triage level. This ensures critical cases are seen first while efficiently managing resources.
      </p>
    ),
  },
];

const ambulancesSteps: Step[] = [
  {
    title: "On-Scene Assessment",
    body: (
      <p className="text-[#494747] text-base md:text-lg">
        Paramedics use Triagenius in the field to quickly evaluate patient condition and severity right where the incident occurs.
      </p>
    ),
  },
  {
    title: "Real-Time Data Relay",
    body: (
      <p className="text-[#494747] text-base md:text-lg">
        Vitals and triage levels are transmitted instantly to the receiving hospital, so the care team can prepare before the ambulance arrives.
      </p>
    ),
  },
  {
    title: "Seamless Handover",
    body: (
      <p className="text-[#494747] text-base md:text-lg">
        On arrival, patient records sync automatically with the hospital system, ensuring a smooth, informed handover to in-house staff.
      </p>
    ),
  },
];

function Timeline({ steps }: { steps: Step[] }) {
  return (
    <ol className="relative flex flex-col gap-16">
      {steps.map((step, index) => (
        <li key={step.title} className="relative pl-12 md:pl-20">
          <span className="absolute left-0 top-2 flex items-center justify-center w-6 h-6 rounded-md bg-[#9de5e3]"></span>
          {index < steps.length - 1 && (
            <span className="absolute left-3 top-2 bottom-[-4rem] border-l-2 border-[#9de5e3]"></span>
          )}
          <div className="bg-white rounded-3xl shadow-[0_3px_6px_0_rgba(0,0,0,0.16)] p-6 md:p-8">
            <h3 className="font-semibold text-xl md:text-2xl text-black mb-3">{step.title}</h3>
            {step.body}
          </div>
        </li>
      ))}
    </ol>
  );
}

export function HowItWorksSteps() {
  return (
    <section className="bg-[#f4f5f9]">
      <div className="max-w-[1000px] mx-auto px-6 py-16 md:py-24">
        <Tabs defaultValue="facilities">
          {/* Tab toggle */}
          <div className="flex justify-center mb-12">
            <TabsList className="inline-flex items-center gap-2 bg-white rounded-full shadow-[0_3px_6px_0_rgba(0,0,0,0.16)] p-2 h-auto w-fit">
              <TabsTrigger
                value="facilities"
                className="px-6 py-3 rounded-full font-normal text-base md:text-lg text-[#9de5e3] transition-colors data-active:bg-[#27c5c0] data-active:text-white data-active:font-bold data-active:shadow-[0_3px_6px_0_rgba(0,0,0,0.16)]"
              >
                Healthcare Facilities
              </TabsTrigger>
              <TabsTrigger
                value="ambulances"
                className="px-6 py-3 rounded-full font-normal text-base md:text-lg text-[#9de5e3] transition-colors data-active:bg-[#27c5c0] data-active:text-white data-active:font-bold data-active:shadow-[0_3px_6px_0_rgba(0,0,0,0.16)]"
              >
                Ambulances in the field
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="facilities">
            <Timeline steps={facilitiesSteps} />
          </TabsContent>
          <TabsContent value="ambulances">
            <Timeline steps={ambulancesSteps} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
