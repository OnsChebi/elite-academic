import { MapPin, GraduationCap } from "lucide-react";

const partners = [
  {
    name: "Share team inboxes",
    location: "Vilnius, Lithuania",
    degrees: "Bachelor's Degree",
    description:
      "Vilnius Business College is renowned for its innovative teaching methods and strong focus on practical skills. The college offers a range of bachelor's programs designed to equip students with the knowledge and experience needed to succeed in the business world.",
  },
  {
    name: "Vytauto Didžiojo Universitetas, Kaunas",
    location: "Kaunas, Lithuania",
    degrees: "Bachelor's and Master's Degrees",
    description:
      "Vytautas Magnus University, also known as Vytautas Magnus University, is one of the most prestigious institutions in Lithuania. It offers a broad spectrum of undergraduate and graduate programs with a strong emphasis on research, innovation, and interdisciplinary studies.",
  },
  {
    name: "Academia, Maribor",
    location: "Maribor, Slovenia",
    degrees: "Bachelor's Degrees",
    description:
      "Academia in Maribor is dedicated to providing high-quality education in various disciplines. The institution prides itself on modern facilities, experienced faculty, and a curriculum that integrates theoretical knowledge with practical application.",
  },
  {
    name: "Ekonomikas un Kultūras Augstskola",
    location: "Riga, Latvia",
    degrees: "Bachelor's and Master's Degrees",
    description:
      "Ekonomikas un Kultūras Augstskola (EKA) offers a diverse range of programs in economics, culture, and arts. EKA is known for its dynamic learning environment and strong industry connections, providing students with valuable insights and opportunities in their chosen fields.",
  },
];

export default function PartnerCards() {
  return (
    <div className="flex flex-col gap-6 lg:gap-[24px] w-full lg:max-w-[580px]">
      {partners.map((partner, index) => (
        <div
          key={index}
          className="
            bg-white 
            border border-[#EDEDED] 
            rounded-[24px] 
            p-5 sm:p-6 px-32px py-24px
            
            hover:shadow-md 
            transition-shadow 
            duration-300
          "
        >
          {/* Heading block*/}
          <div className="flex flex-col gap-4 lg:gap-[16px] mb-5 lg:mb-6">
            <h3 
              className="
                font-Manrope 
                font-[600] 
                text-[22px] sm:text-[24px] 
                leading-[120%] 
                text-[#041136]/93
              "
            >
              {partner.name}
            </h3>

            <div className="flex flex-wrap items-center gap-3 lg:gap-[14px]">
              {/* Degree pill */}
              <div 
                className="
                  flex items-center gap-2 lg:gap-[10px] 
                  bg-[#F7F6F5] 
                  rounded-full 
                  px-4 sm:px-[16px] 
                  py-1.5 lg:py-[4px] 
                  text-[#0F70EA]
                "
              >
                <GraduationCap size={16} className="flex-shrink-0 lg:size-[18px]" />
                <span className="font-[500] text-[#475467] text-sm sm:text-base">
                  {partner.degrees}
                </span>
              </div>

              {/* Location pill */}
              <div 
                className="
                  flex items-center gap-2 lg:gap-[10px] 
                  bg-[#F7F6F5] 
                  rounded-full 
                  px-4 sm:px-[16px] 
                  py-1.5 lg:py-[4px] 
                  text-[#0F70EA]
                "
              >
                <MapPin size={16} className="flex-shrink-0 lg:size-[18px]" />
                <span className="font-[500] text-[#475467] text-sm sm:text-base">
                  {partner.location}
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-[#041136] text-base sm:text-[15px] lg:text-[16px] leading-[1.55] lg:leading-relaxed opacity-85">
            {partner.description}
          </p>
        </div>
      ))}
    </div>
  );
}