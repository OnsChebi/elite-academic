// components/about/AboutIntro.tsx
import { about } from "@/public";
import Image from "next/image";

export default function AboutIntro() {
  return (
    <div className="flex flex-col gap-6 lg:gap-10">
      {/* Title group */}
      <div className="space-y-3 lg:space-y-4">
        <span className="text-[#0F70EA] font-Manrope font-bold  lg:text-[16px] leading-[120%]  tracking-wide">
          About us
        </span>
        <h2 className="text-[#041136] font-Manrope font-[500] text-4xl sm:text-5xl lg:text-[48px] leading-[120%] lg:leading-[58px] tracking-tight">
          About <br /> Academic Degree        
        </h2>
      </div>
       {/* Image*/}
      <div className="relative w-full rounded-3xl overflow-hidden  mt-4 lg:mt-8 aspect-[4/5] lg:aspect-[580/592]">
        <Image
          src={about}   
          alt="Student studying online with laptop and headphones"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 580px"
        />
      </div>

      {/* Description */}
      <p className="text-[#041136] font-Manrope text-base lg:text-[18px] leading-relaxed opacity-85 max-w-[520px]">
        At Academic Degree, we are dedicated to connecting students with top-tier higher education institutions in Europe. Our mission is to provide comprehensive guidance and support to students seeking to advance their education and career prospects through international studies.
      </p>

      {/* Button */}
      <button className="w-fit px-8 py-4 lg:px-10 lg:py-5 bg-[#0F70EA] text-white font-Manrope font-[600] text-base lg:text-[16px] rounded-[14px] hover:bg-[#0B5BB3] transition-all shadow-md hover:shadow-lg">
        Join Now
      </button>

      
    </div>
  );
}