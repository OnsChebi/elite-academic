import AboutIntro from "../about/aboutIntro";
import PartnerCards from "../about/partnerCard";

export default function AboutSection() {
  return (
    <section 
      className="
        bg-[#F9FAFB] 
        w-full 
        py-16 md:py-20 lg:py-[112px] 
        flex flex-col 
        items-center 
        justify-center 
        overflow-hidden
      "
    >
      <div 
        className="
          w-full 
          max-w-[1440px] 
          mx-auto 
          px-6 sm:px-10 md:px-12 lg:px-[112px] 
          flex flex-col 
          items-center 
          gap-12 lg:gap-[80px]
        "
      >
        <div 
          className="
            w-full 
            flex flex-col lg:flex-row 
            items-start 
            gap-10 lg:gap-[56px]
          "
        >
          {/* LEFT COLUMN */}
          <div 
            className="
              w-full 
              lg:w-[580px] 
              flex flex-col 
              gap-8 lg:gap-[42px]
            "
          >
            <AboutIntro />
          </div>

          {/* RIGHT COLUMN*/}
          <div 
            className="
              w-full 
              lg:max-w-[580px]
            "
          >
            <PartnerCards />
          </div>
        </div>
      </div>
    </section>
  );
}