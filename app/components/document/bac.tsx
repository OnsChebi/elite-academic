import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";

interface DocumentItem {
  number: string;
  title: string;
  description: string | string[];
}

const documents: DocumentItem[] = [
  {
    number: "1",
    title: "Completed Application Form",
    description:
      "Most universities have an online application portal where you need to fill out your personal details, educational background, and the program you are applying for",
  },
  {
    number: "2",
    title: "High School Diploma",
    description:
      "A copy of your high school diploma or an equivalent qualification. If the document is not in the language of the university or in English, a certified translation might be required.",
  },
  {
    number: "3",
    title: "Academic Transcripts",
    description:
      "Official transcripts from your high school, detailing the courses you have taken and your grades.",
  },
  {
    number: "4",
    title: "Proof of Language Proficiency",
    description: [
      "For programs taught in English, you may need to provide TOEFL, IELTS, or Cambridge English scores.",
      "For programs taught in other languages, proficiency tests in that language may be required (e.g., TestDaF for German, DELF/DALF for French, DELE for Spanish).",
    ],
  },
  {
    number: "5",
    title: "Personal Statement or Motivation Letter",
    description:
      "A written statement explaining why you want to study at the particular university and in the chosen program, your career goals, and how the program aligns with them.",
  },
  {
    number: "6",
    title: "Letters of Recommendation",
    description:
      "Usually, two letters from teachers or other individuals who can attest to your academic abilities and character.",
  },
  {
    number: "7",
    title: "Curriculum Vitae (CV) or Resume",
    description:
      "A detailed CV outlining your educational background, work experience, extracurricular activities, and any other relevant experiences.",
  },
  {
    number: "8",
    title: "Passport Copy",
    description:
      "A copy of your passport or national ID to confirm your identity and nationality.",
  },
  {
    number: "9",
    title: "Passport-Sized Photographs",
    description:
      "Recent photographs, typically required for your student ID and other official documents.",
  },
  {
    number: "10",
    title: "Application Fee Receipt",
    description: "Proof of payment of the application fee, if applicable.",
  },
  {
    number: "11",
    title: "Proof of Financial Resources",
    description:
      "Some universities require proof that you have the financial means to support yourself during your studies, such as bank statements or a financial guarantee letter.",
  },
  {
    number: "12",
    title: "Portfolio (for certain programs)",
    description:
      "If you are applying for programs in fields like art, design, architecture, or other creative disciplines, you might need to submit a portfolio of your work.",
  },
  {
    number: "13",
    title: "Entrance Exam Results",
    description:
      "For some programs or universities, you might need to take and pass an entrance exam.",
  },
  {
    number: "14",
    title: "Health Insurance",
    description:
      "Proof of health insurance coverage may be required for visa purposes or university registration.",
  },
  {
    number: "15",
    title: "Other Specific Requirements",
    description:
      "Some universities or programs might have additional specific requirements, such as a video interview, a test of logical reasoning, or specific subject prerequisites.",
  },
];

export default function BacDocuments() {
  return (
    <section className="bg-white w-full">

      {/* Section wrapper */}
      <div className="w-full max-w-[1440px] mx-auto py-16 md:py-20 lg:py-[112px]">

        {/* Container */}
        <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-10 md:px-12 lg:px-[32px] flex flex-col gap-10 lg:gap-[64px]">

          {/* Heading */}
          <div className="flex flex-col gap-6">

            <h2 className="font-manrope font-[500] text-3xl sm:text-4xl lg:text-[48px] leading-tight lg:leading-[44px] tracking-[-0.02em] text-[#101828]">
              BACHELORS
            </h2>

            <p className="font-manrope font-[400] text-lg sm:text-xl lg:text-[20px] leading-7 lg:leading-[30px] text-[#475467]">
              Applying for a bachelor's degree in Europe typically requires several key documents,
              which may vary slightly depending on the country and institution. Below is a general list of necessary documents:
            </p>

          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[24px]">

            {documents.map((doc) => (

              <div
                key={doc.number}
                className="bg-[#F9FAFB] rounded-[24px] p-6 lg:p-[24px] flex flex-col gap-6 min-h-[222px]"
              >

                {/* Number + Title */}
                <div className="flex flex-col gap-2">

                  <span className="font-manrope font-[600] text-[24px] leading-[120%] text-[#0F70EA]">
                    {doc.number}.
                  </span>

                  <h3 className="font-manrope font-[500] text-[18px] leading-[120%] text-[#041136]">
                    {doc.title}:
                  </h3>

                </div>

                {/* Description */}
                <div className="font-manrope font-[400] text-base lg:text-[16px] leading-[150%] text-[#475467]">

                  {Array.isArray(doc.description) ? (

                    <ul className="list-disc pl-5 space-y-2">

                      {doc.description.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}

                    </ul>

                  ) : (

                    <p>{doc.description}</p>

                  )}

                </div>

              </div>

            ))}

          </div>


          {/* Alert Box */}
          <div className="bg-[#0F70EA] rounded-[16px] p-6 sm:p-8 lg:p-[32px] flex flex-col sm:flex-row items-center justify-between gap-6 lg:gap-[32px] w-full max-w-[1216px] mx-auto min-h-[140px] lg:min-h-[156px] shadow-sm">

            <div className=" flex flex-col   gap-2  text-white">

              <Info className="w-6 h-6"/>

              <h3 className="font-manrope font-[600] text-lg sm:text-xl lg:text-[20px] leading-7 lg:leading-[30px] max-w-[768px]">
                Always check the specific requirements of each university and program you are applying to,
                as they can vary significantly.
              </h3>

            </div>


            <Button
              variant="secondary"
              className="bg-white text-[#0F70EA] hover:bg-gray-100 font-[600] text-base px-8 lg:px-[32px] py-4 lg:py-[16px] rounded-[14px] shadow-md hover:shadow-lg transition-all whitespace-nowrap h-12 lg:h-[56px] w-[150px] h-[56px] "
            >
              Learn more
            </Button>


          </div>


        </div>

      </div>

    </section>
  );
}