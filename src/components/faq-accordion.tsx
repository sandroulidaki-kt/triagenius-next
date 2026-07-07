"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs: { question: string; answer: string }[] = [
  {
    question: "Is Triagenius compliant with healthcare regulations?",
    answer:
      "Yes, Triagenius adheres to strict healthcare data security standards, ensuring compliance with HIPAA and other relevant regulations to safeguard patient information.",
  },
  {
    question: "Can Triagenius be integrated with existing systems?",
    answer:
      "Yes, Triagenius is built to integrate smoothly with existing hospital and EMS systems, including common EHR platforms, so teams can adopt it without disrupting current workflows.",
  },
  {
    question: "How user-friendly is the Triagenius app?",
    answer:
      "Triagenius was designed with busy clinicians in mind, offering a clean, intuitive interface that requires minimal training to use confidently under pressure.",
  },
  {
    question: "Does Triagenius offer technical support?",
    answer:
      "Yes, our support team is available to help with onboarding, training, and any technical issues, ensuring your staff always has the help they need.",
  },
  {
    question: "Can Triagenius be customized to suit specific needs?",
    answer:
      "Absolutely, Triagenius can be configured to match your facility's triage protocols, priority levels, and workflows.",
  },
  {
    question: "How frequently is Triagenius updated?",
    answer:
      "We release regular updates with feature improvements, security patches, and refinements based on direct feedback from healthcare teams.",
  },
  {
    question: "Is Triagenius accessible on multiple devices?",
    answer:
      "Yes, Triagenius works across phones, tablets, and desktop browsers, so your team can access it on whatever device is on hand.",
  },
];

export function FaqAccordion() {
  return (
    <Accordion
      defaultValue={[0]}
      className="bg-[#f4f5f9] rounded-3xl shadow-[0_3px_6px_0_rgba(0,0,0,0.16)] divide-y divide-gray-200 overflow-hidden"
    >
      {faqs.map((faq, index) => (
        <AccordionItem key={faq.question} value={index} className="border-0">
          <AccordionTrigger className="w-full items-center gap-4 px-6 md:px-10 py-6 hover:no-underline [&_[data-slot=accordion-trigger-icon]]:text-[#490073]">
            <span className="font-semibold text-base md:text-lg text-black">
              {faq.question}
            </span>
          </AccordionTrigger>
          <AccordionContent className="px-6 md:px-10 pb-6">
            <p className="text-[#494747] text-sm md:text-base">{faq.answer}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
