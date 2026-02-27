"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What are the entry requirements for the programs?",
    answer:
      "Entry requirements vary by program and institution. Generally, you will need to provide academic transcripts, proof of English proficiency, letters of recommendation, and a personal statement.",
  },
  {
    question: "How do I apply for a student visa?",
    answer:
      "The student visa application process depends on the country and institution. Typically, you will need an acceptance letter from the university, proof of financial support, health insurance, and other documents required by the embassy.",
  },
  {
    question: "Are scholarships available?",
    answer:
      "Yes, many of our partner universities offer scholarships for international students based on academic merit, financial need, or specific fields of study. Check individual program pages or contact us for current opportunities.",
  },
  {
    question: "What support services are available for international students?",
    answer:
      "Our partner institutions provide comprehensive support including orientation programs, academic advising, career services, housing assistance, visa guidance, language support, and student counseling.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white w-full py-16 md:py-20 lg:py-[112px]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-12 lg:px-[112px] flex flex-col items-center gap-10 lg:gap-[64px]">

        {/* Heading*/}
        <div className="flex flex-col items-center gap-4 lg:gap-5 max-w-[768px] text-center">
          <h2 className="
            font-Manrope font-[400]
            text-4xl sm:text-5xl lg:text-[48px]
            leading-tight lg:leading-[44px]
            text-[#101828]
          ">
            Frequently asked questions
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="w-full max-w-[768px] flex flex-col gap-6 lg:gap-8">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`
                border-b border-gray-200 pb-6 lg:pb-8 last:border-b-0
                transition-all duration-200
                ${openIndex === index ? "pb-8 lg:pb-10" : ""}
              `}
            >
              <button
                onClick={() => toggleItem(index)}
                className="
                  w-full flex items-center justify-between
                  text-left gap-4 lg:gap-6
                  focus:outline-none
                "
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="
                  font-Manrope font-[500]
                  text-base sm:text-lg lg:text-[18px]
                  leading-[140%] lg:leading-[28px]
                  text-[#101828]
                ">
                  {item.question}
                </span>

                {/* Plus / Minus icon */}
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <div className="flex flex-col items-start w-[24px] h-[26px] pt-[2px]">

                      <div className="w-[24px] h-[24px] border-2 border-[#98A2B3] rounded-full flex items-center justify-center">
                        <Minus size={16} className="text-[#98A2B3]" />
                      </div>

                    </div>) : (
                    <div className="flex flex-col items-start w-[24px] h-[26px] pt-[2px]">

                      <div className="w-[24px] h-[24px] border-2 border-[#98A2B3] rounded-full flex items-center justify-center">
                        <Plus size={16} className="text-[#98A2B3]" />
                      </div>

                    </div>)}
                </div>
              </button>

              {/* Answer*/}
              {openIndex === index && (
                <div
                  id={`faq-answer-${index}`}
                  className="
                    mt-4 lg:mt-6
                    font-Manrope font-[400]
                    text-base lg:text-[16px]
                    leading-[150%] lg:leading-[24px]
                    text-[#475467]
                    animate-fadeIn
                  "
                >
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}