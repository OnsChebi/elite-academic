import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { publish1 } from "@/public";

export default function PubHeader() {
  return (
    <div className="w-full bg-white">
      <div className="
        w-full max-w-[1440px] max-h-[1060px] mx-auto
        py-16 md:py-20 lg:py-[96px] lg:px-[112px]
        flex flex-col items-center gap-10 lg:gap-[64px]
        bg-white
      ">
        {/* Container  */}
        <div className="
          w-full max-w-[1024px]
          px-6 sm:px-10 md:px-12 lg:px-[32px]
          flex flex-col items-center gap-[32px] lg:gap-[32px]
        ">
          {/* Content  */}
          <div className="
            w-full max-w-[960px]
            flex flex-col items-center gap-8 lg:gap-[40px]
          ">
            {/* Heading */}
            <div className="
              w-full max-w-[960px]
              flex flex-col items-center gap-6 lg:gap-[12px]
              text-center
            ">
              <span className="
                font-Manrope font-[600]
                text-base lg:text-[16px]
                leading-6 lg:leading-[24px]
                text-[#0F70EA]
              ">
                Published 20 Jan 2022
              </span>

              <h1 className="
                font-Manrope font-[400]
                text-4xl sm:text-5xl lg:text-[48px]
                leading-tight lg:leading-[60px]
                tracking-[-0.02em]
                text-[#101828]
              ">
                University Education in Estonia
              </h1>
              <p className="
                font-Manrope font-[400]
                text-lg sm:text-xl lg:text-[20px]
                leading-7 lg:leading-[30px]
                text-[#475467]
                max-w-[660px]
              ">
                 Estonia, a rising star in Europe, is home to 9 universities, 7 of which offer <br /> programs entirely in English for international students.</p>
            </div>

            {/* Categories*/}
            <div className="flex flex-wrap justify-center gap-2">
              <Badge className="
              
                text-xs lg:text-sm font-[500]
                px-2.5 py-0.5 rounded-full
              "
              style={{ backgroundColor: '#EEF4FF', color: '#3538CD' }}>
                University
              </Badge>

              <Badge className="
                text-xs lg:text-sm font-[500]
                px-2.5 py-0.5 rounded-full
              "
              style={{ backgroundColor: '#FDF2FA', color: '#C11574' }}>
                Education
              </Badge>
            </div>
          </div>
        </div>

        <div className="
          w-full max-w-[1216px] mx-auto
          aspect-[1216/560]
          rounded-[24px] overflow-hidden
          shadow-xl
        ">
          <Image
            src={publish1}
            alt="Featured university scene"
            width={1216}
            height={560}
            className="object-cover"
            
          />
        </div>
      </div>
    </div>
  );
}