import { students } from "@/public";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white w-full pt-12 pb-12 sm:pt-16 sm:pb-16 md:pt-20 md:pb-20 lg:pt-[112px] lg:pb-[112px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-[112px] flex flex-col lg:flex-row lg:items-center gap-10 sm:gap-12 lg:gap-16 xl:gap-[80px]">
        
        <div className="flex flex-col items-start gap-6 lg:gap-8 w-full lg:w-5/12 xl:w-1/2">
          <h1 className="text-[#041136] font-Manrope font-bold text-4xl leading-tight sm:text-5xl sm:leading-[1.15] lg:text-[68px] lg:leading-[82px] xl:text-[72px] xl:leading-[86px] tracking-[-0.02em]">
            Welcome to
            <span className="block text-[#0F70EA]">Academic Degree!</span>
          </h1>

          <p className="text-[#041136] font-Manrope font-[400] text-base leading-relaxed sm:text-lg sm:leading-[1.6] lg:text-[19px] lg:leading-[30px] opacity-75 max-w-[520px] lg:max-w-none">
            Unlock your potential by studying at some of the finest universities and colleges in Europe. With our trusted partners, we offer a variety of bachelor and master programs tailored to help you achieve your academic and career goals.
          </p>

          <button className="mt-2 sm:mt-4 px-7 py-4 sm:px-8 sm:py-5 lg:px-[32px] lg:py-[20px] bg-[#0F70EA] text-white rounded-[14px] font-Manrope font-[600] text-base sm:text-[16px] leading-[24px] hover:bg-[#0B5BB3] transition-all duration-200 shadow-sm hover:shadow-md">
            Join Now
          </button>
        </div>

        <div className="relative w-full lg:w-7/12 xl:w-1/2 aspect-[4/3] sm:aspect-[5/3] lg:aspect-auto lg:min-h-[520px] flex-shrink-0">
          <Image
            src={students}
            alt="Students studying at Academic Degree"
            fill
            className="object-cover lg:object-contain rounded-xl lg:rounded-none"
            priority
            sizes="(max-width: 1023px) 100vw, 55vw"
            quality={92}
          />
        </div>

      </div>
    </section>
  );
}