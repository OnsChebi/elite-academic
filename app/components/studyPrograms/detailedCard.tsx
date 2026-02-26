import { Check, ClockCheck } from "lucide-react";

interface DetailedProgramCardProps {
  title: string;
  subtitle?: string;         
  duration: string;           
  description: string;
  leftColumnItems: string[];
  rightColumnItems: string[];
  newItems?: string[];       
}

export default function DetailedProgramCard({
  title,
  subtitle,
  duration,
  description,
  leftColumnItems,
  rightColumnItems,
  newItems = [],
}: DetailedProgramCardProps) {
  return (
    <div
      className="
        bg-[#F9FAFB]
        border border-[#EBEBEB]
        rounded-[24px]
        p-6 sm:p-8 lg:p-[32px_42px_42px]
        flex flex-col gap-8 lg:gap-[32px]
        w-full
      "
    >
      {/* Header*/}
      <div
        className="
          flex flex-col lg:flex-row lg:items-start lg:justify-between
          gap-6 lg:gap-[24px]
          pb-6 lg:pb-8
          border-b border-[#DADADA]
        "
      >
        {/* Left */}
        <div className="flex flex-col gap-2 lg:gap-4 lg:max-w-[486px]">
          <h3
            className="
              font-Manrope font-[600]
              text-xl sm:text-2xl lg:text-[24px]
              leading-[140%] lg:leading-[34px]
              text-[#041136]/93
            "
          >
            {title}
            {subtitle && (
            <p>
              {subtitle}
            </p>
          )}
          </h3>

          
        </div>

        <div className="flex flex-col gap-4 lg:gap-6 lg:max-w-[622px]">
          

          {/* Blue duration pill */}
          <div
              className="
              inline-flex items-center gap-[10px]
                font-Manrope font-[500]
                text-sm sm:text-base lg:text-[16px]
                text-white
                bg-[#1686FA]
                px-4 sm:px-5 lg:px-[16px]
                py-1.5 lg:py-2
                rounded-full
                whitespace-nowrap
                max-w-[204px]
                max-h-[36px]
              "
            >
              <ClockCheck />
              {duration}
            </div>
             <p
            className="
              font-Manrope font-[400]
              text-base sm:text-lg lg:text-[18px]
              leading-[160%] lg:leading-[29px]
              text-[#475467]
            "
          >
            {description}
          </p>
        </div>
       
      </div>

      {/* Two-column checklist */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 lg:gap-x-[32px] gap-y-4 lg:gap-y-5">
        {/* Left column */}
        <div className="space-y-3 lg:space-y-4">
          {leftColumnItems.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 lg:gap-4">
              <div
                className="
                  w-5 h-5 lg:w-6 lg:h-6
                  rounded-full bg-[#DBEAFE]
                  flex items-center justify-center
                  flex-shrink-0 mt-0.5
                "
              >
                <Check size={12} className="text-[#0F70EA] lg:size-4" strokeWidth={3} />
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-Manrope text-base lg:text-[16px] text-[#475467] leading-relaxed">
                  {item}
                </span>
                {newItems.includes(item) && (
  <span
    className="
      inline-flex items-center gap-[4px]
      px-[6px_8px_2px_6px] lg:px-[6px_8px]
      h-[22px]
      bg-white
      border border-[rgba(255,255,255,0.3)]
      rounded-[16px]
      text-xs font-[500]
      font-['Inter']
      text-[#026AA2]
      shadow-sm
    "
  >
    {/* Blue dot */}
    <span
      className="
        relative w-[8px] h-[8px]
        flex items-center justify-center
      "
    >
      <span
        className="
          absolute w-[6px] h-[6px] rounded-full
          bg-[#0BA5EC]
        "
      />
    </span>

    New
  </span>
)}
              </div>
            </div>
          ))}
        </div>

        {/* Right column */}
        <div className="space-y-3 lg:space-y-4">
          {rightColumnItems.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 lg:gap-4">
              <div
                className="
                  w-5 h-5 lg:w-6 lg:h-6
                  rounded-full bg-[#DBEAFE]
                  flex items-center justify-center
                  flex-shrink-0 mt-0.5
                "
              >
                <Check size={12} className="text-[#0F70EA] lg:size-4" strokeWidth={3} />
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-Manrope text-base lg:text-[16px] text-[#475467] leading-relaxed">
                  {item}
                </span>
                {newItems.includes(item) && (
  <span
    className="
      inline-flex items-center gap-[4px]
      px-[6px_8px_6px_6px] lg:px-[6px_8px]
      h-[22px]
      bg-white
      border border-[rgba(255,255,255,0.3)]
      rounded-[16px]
      text-xs font-[500]
      font-['Inter']
      text-[#026AA2]
      shadow-sm
    "
  >
    {/* Blue dot */}
    <span
      className="
        relative w-[8px] h-[8px]
        flex items-center justify-center
      "
    >
      <span
        className="
          absolute w-[6px] h-[6px] rounded-full
          bg-[#0BA5EC]
        "
      />
    </span>

    New
  </span>
)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}