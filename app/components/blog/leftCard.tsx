import Image from "next/image";
import { blog1 } from "@/public";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function LeftCard() {
  return (
    <article
      className="
        flex flex-col items-start
        gap-8               // ≈ 32px
        w-full lg:w-[592px]
        lg:h-[456px]
      "
    >
      {/* Image*/}
      <div className="
        relative w-full lg:w-[592px] h-[236px]
        rounded-3xl overflow-hidden flex-shrink-0
      ">
        <Image
          src={blog1}
          alt="University Education in Estonia"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 592px"
          priority
        />
      </div>

      {/* Content*/}
      <div className="
        flex flex-col items-start
        gap-6               // ≈ 24px
        w-full lg:w-[592px]
        lg:h-[188px]
      ">
        {/* Author*/}
        <p className="
          font-inter font-semibold
          text-sm leading-5
          text-[#0F70EA]
        ">
          Olivia Rhye • 20 Jan 2024
        </p>

        {/* Title + Arrow row */}
        <div className="
          flex items-start justify-between
          w-full
          gap-4
        ">
          <h3 className="
            font-manrope font-semibold
            text-2xl leading-8
            text-[#101828]
            line-clamp-2
            flex-1
          ">
            University Education in Estonia
          </h3>

          {/* Arrow icon */}
          <div className="pt-1 flex-shrink-0">
            <ArrowUpRight
              className="w-6 h-6 text-[#101828] stroke-[2.5]"
            />
          </div>
        </div>

        <p className="
          font-manrope font-[400]
          text-base leading-6
          text-[#475467]
          line-clamp-3
        ">
          Estonia, a rising star in Europe, is home to 9 universities, 7 of which offer programs entirely in English for international students. With a population of approximately 1.3 million...
        </p>

        {/* Badges */}
        <div className="flex flex-wrap gap-2">
          <Badge
            variant="outline"
            className=" font-inter font-[14px]
              text-xs font-[500]
              px-2.5 py-0.5 rounded-full
              border-none
            "
            style={{ backgroundColor: "#EEF4FF", color: "#3538CD" }}
          >
            Education
          </Badge>
          <Badge
            variant="outline"
            className="
              font-inter font-[14px]
              text-xs font-[500]
              px-2.5 py-0.5 rounded-full
              border-none
            "
            style={{ backgroundColor: "#FDF2FA", color: "#C11574" }}
          >
            University
          </Badge>
        </div>
      </div>
    </article>
  );
}