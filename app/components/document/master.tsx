import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";

interface DocumentItem {
  number: string;
  title: string;
  description: string | string[];
}

const mastersDocuments: DocumentItem[] = [
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
  {
    number: "16",
    title: "Health Insurance",
    description:
      "Proof of health insurance coverage may be required for visa purposes or university registration.",
  },
  {
    number: "17",
    title: "Other Specific Requirements",
    description:
      "Some universities or programs might have additional specific requirements, such as a video interview, a test of logical reasoning, or specific subject prerequisites.",
  },
];

export default function MastersDocuments() {
  return (
    <section className="bg-[#F9FAFB] w-full">
      <div className="
        w-full max-w-[1440px] mx-auto
        py-16 md:py-20 lg:py-[112px]
        flex flex-col items-center gap-10 lg:gap-[64px]
      ">
        {/* Container */}
        <div className="
          w-full max-w-[1280px]
          px-6 sm:px-10 md:px-12 lg:px-[32px]
          flex flex-col gap-10 lg:gap-[64px]
        ">
          {/* Heading*/}
          <div className="flex flex-col gap-6">

            <h2 className="font-manrope font-[500] sm:text-4xl lg:text-[48px] lg:leading-[60px]  text-[#0F70EA]">
              MASTERS            
              </h2>

            <p className="font-manrope font-[400] text-lg sm:text-xl lg:text-[20px] leading-7 lg:leading-[30px] text-[#475467]">
Applying for a master's degree in Europe typically requires a specific set of documents. Although the exact requirements can vary by country and institution, the following list includes the most commonly requested documents:            </p>

          </div>

          <div className="
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
            gap-6 lg:gap-[24px]
            w-full
          ">
            {mastersDocuments.map((doc, index) => (
              <div
                key={index}
                className="
                  bg-white rounded-[24px]
                  p-6 lg:p-[24px]
                  flex flex-col gap-6
                  shadow-sm hover:shadow-md transition-shadow
                  border border-gray-100
                  min-h-[222px]
                "
              >
                {/* Number + Title */}
                <div className="flex flex-col gap-2">
                  <span className="
                    font-Manrope font-[600]
                    text-[24px] leading-[120%]
                    text-[#0F70EA]
                  ">
                    {doc.number}.
                  </span>

                  <h3 className="
                    font-Manrope font-[500]
                    text-[18px] leading-[120%]
                    text-[#041136]
                  ">
                    {doc.title}:
                  </h3>
                </div>

                {/* Description */}
                <p className="
                  font-Manrope font-[400]
                  text-base lg:text-[16px]
                  leading-[150%]
                  text-[#475467]
                  line-clamp-4
                ">
                  {doc.description}
                </p>
              </div>
            ))}
          </div>

         {/* Alert Box */}
          <div className="bg-[#0F70EA] rounded-[16px] p-6 sm:p-8 lg:p-[32px] flex flex-col sm:flex-row items-center justify-between gap-6 lg:gap-[32px] w-full max-w-[1216px] mx-auto min-h-[140px] lg:min-h-[156px] shadow-sm">

            <div className=" flex flex-col   gap-2  text-white">

              <Info className="w-6 h-6"/>

              <h3 className="font-manrope font-[600] text-lg sm:text-xl lg:text-[20px] leading-7 lg:leading-[30px] max-w-[941px]">
                It's crucial to check the specific requirements of each university and program you are applying to, as they can vary significantly. Always refer to the official university websites for the most accurate and detailed information.
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