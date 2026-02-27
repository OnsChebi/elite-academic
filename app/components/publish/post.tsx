import Image from "next/image";
import { Link2, Copy } from "lucide-react"; // assuming you have lucide-react installed
import { olivia, publish2 } from "@/public"; // your images
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Avatar } from "./avatar";

export default function Post() {
  return (
    <section className="bg-white w-full">
      <div 
        className="
          mx-auto w-full max-w-[720px] 
          px-5 sm:px-6 md:px-8 lg:px-0
          flex flex-col items-start
        "
      >
        {/* Main*/}
        <div className="flex flex-col w-full gap-10 lg:gap-12 pt-6 lg:pt-10 pb-12 lg:pb-16">
          {/* Introduction block */}
          <div className="flex flex-col gap-5 lg:gap-6">
            <h2
              className="
                font-manrope font-[600]
                text-[30px] leading-[38px]
                text-[#101828]
              "
            >
              Introduction
            </h2>

            <p
              className="
                font-manrope font-[400]
                text-base leading-7 
                lg:text-[18px] lg:leading-[28px]
                text-[#475467]
              "
            >
              Estonia, a rising star in Europe, is home to 9 universities, 7 of which offer programs entirely in English for international students. With a population of approximately 1.3 million, Estonia has around 69,000 students enrolled in its universities. Estonia is becoming increasingly attractive to international students each year due to its high-quality education, affordable tuition fees, and lower living costs compared to other European countries. Currently, there are about 1,300 foreign students in Estonia.
            </p>
          </div>

          {/* Image + caption */}
          <div className="flex flex-col gap-3 lg:gap-4 w-full">
            <div className="w-full rounded-[12px] lg:rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src={publish2}
                alt="Students in classroom"
                width={720}
                height={480} 
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            <div className="flex items-center gap-1.5 text-[#475467]">
              <Link2 className="w-4 h-4 stroke-[1.5] text-[#98A2B3]" />
              <p className="text-sm leading-5 font-['Inter']">
                Image courtesy of Fauxels via{" "}
                <a
                  href="https://www.pexels.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#475467] hover:text-blue-600 transition-colors"
                >
                  Pexels
                </a>
              </p>
            </div>
          </div>

          {/* Main body text */}
          <div
            className="
              font-manrope font-[400]
              text-base leading-7 
              lg:text-[18px] lg:leading-[28px]
              text-[#475467]
              flex flex-col gap-6 lg:gap-8
            "
          >
            <p>
              Aware of the attractive educational opportunities in Estonia, Turkish students are also choosing Estonia for both undergraduate and graduate studies. Estonia also hosts many Turkish students each year through the Erasmus program. Currently, there are 28 Turkish students studying in Estonia for higher education, along with approximately 70 Erasmus students from Turkey.
            </p>

            <p>
              Estonian universities offer English-language programs at the undergraduate, master&apos;s, and doctoral levels in various fields such as Business, Industrial Engineering, Law, and International Relations. Additionally, there are programs in Nuclear Energy and Nuclear Safety, Sustainable Energy Instruments, and Processes, which are not yet widely available at higher education levels in Turkey but are quite popular among international students.
            </p>

            <p>
              Tuition fees in Estonia vary depending on the chosen field of study. For undergraduate and master&apos;s programs, fees range from €1,880 to €4,000 per year. The annual living costs are estimated to be around €5,000-6,000. Estonia also offers scholarships for education and study, which further attract foreign students. Doctoral education in Estonia is free, and some doctoral programs offer state-funded scholarships.
            </p>

            <p>
              Admission requirements for Estonian universities vary depending on the chosen program. For example, a portfolio may be required for applications to art-based programs. Other programs may require academic documents and an online interview with school officials. Students applying at the undergraduate level must present their OSS exam results. All students must prove their English proficiency by taking IELTS/TOEFL exams or passing the level determination exam of the applied school.
            </p>
          </div>

          <div
            className="
              bg-[#F9FAFB] rounded-[16px]
               0 overflow-hidden
              px-6 py-8 lg:p-10
              flex flex-col gap-5 lg:gap-6
            "
          >
            <h3
              className="
                font-manrope font-[600]
                text-[30px] lg:leading-[38px]
                text-[#101828]
              "
            >
              Conclusion
            </h3>

            <p
              className="
                font-manrope font-[400]
                lg:text-[18px] lg:leading-[28px]
                text-[#475467]
              "
            >
              Estonia, a rising star in Europe, is home to 9 universities, 7 of which offer programs entirely in English for international students. With a population of approximately 1.3 million, Estonia has around 69,000 students enrolled in its universities. Estonia is becoming increasingly attractive to international students each year due to its high-quality education, affordable tuition fees, and lower living costs compared to other European countries. Currently, there are about 1,300 foreign students in Estonia.
            </p>
          </div>

        </div>

        {/* Author & social links */}
        <div
          className="
            w-full max-w-[720px] mx-auto
            pt-6 lg:pt-8
            border-t border-[#EAECF0]
            flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 lg:gap-8
          "
        >
          {/* Avatar*/}
          <Avatar
            avatarSrc={olivia}
            title="Olivia Rhye"
            subtitle="Product Designer, Untitled"
            titleClassName="font-['Comfortaa'] font-[600]
            text-[17px] sm:text-lg leading-6 sm:leading-7
            text-[#101828] truncate"
            subtitleClassName="font-['Inter'] font-[400]
            text-xs sm:text-sm lg:text-[13.5px]
            leading-5 sm:leading-6
            text-[#475467] truncate"
            
          />

          {/* Social / share buttons */}
          <div className="flex items-center gap-3 mx-auto sm:mx-0">
            <button
              className="
                flex items-center gap-2 px-4 py-2.5 
                border border-[#D0D5DD] rounded-lg
                shadow-xs hover:bg-gray-50 transition-colors
                text-sm font-[600] text-[#344054] font-['Inter']
              "
            >
              <Copy className="w-5 h-5" />
              Copy link
            </button>

            <button className="p-3 border border-[#D0D5DD] rounded-lg hover:bg-gray-50 transition-colors">
              <FaTwitter
                            size={20}
                            className="cursor-pointer text-[#475467] hover:text-[#0F70EA]"
                          />
              
                          
              
                          
            </button>
            <button className="p-3 border border-[#D0D5DD] rounded-lg hover:bg-gray-50 transition-colors">
              <FaFacebook
                            size={20}
                            className="cursor-pointer text-[#475467] hover:text-[#0F70EA]"
                          />
            </button>
            <button className="p-3 border border-[#D0D5DD] rounded-lg hover:bg-gray-50 transition-colors">
              <FaLinkedin
                            size={20}
                            className="cursor-pointer text-[#475467] hover:text-[#0F70EA]"
                          />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}