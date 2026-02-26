import { Check } from "lucide-react";

interface SimpleProgramCardProps {
  title: string;
  subtitle: string;
  modules: string[];
}

export default function SimpleProgramCard({
  title,
  subtitle,
  modules,
}: SimpleProgramCardProps) {
  return (
    <div
      className="
        bg-[#F9FAFB]
        border border-[#EBEBEB]
        rounded-[24px]
        p-6 sm:p-8 lg:p-[32px_42px_42px]
        flex flex-col gap-6 lg:gap-[32px]
        w-full
      "
    >
      {/* Heading */}
      <div
        className="
          flex flex-col sm:flex-row sm:items-center sm:justify-between
          gap-4 sm:gap-0
          pb-6 lg:pb-8
          border-b border-[#DADADA]
        "
      >
        {/* Title */}
        <h3
          className="
            font-Manrope font-[600]
            text-xl sm:text-2xl lg:text-[24px]
            leading-[140%] lg:leading-[34px]
            text-[#041136]/93
          "
        >
          {title}
          <br />
          {subtitle}
        </h3>

       
      </div>

      <div
        className="
          flex flex-wrap
          gap-[24px]
        "
      >
        {modules.map((module, idx) => (
          <div
            key={idx}
            className="
              flex items-center gap-2.5 lg:gap-[10px]
              font-[400] font-Manrope
              sm:px-5 lg:px-[16px] 
              text-[#475467]
              text-sm sm:text-base lg:text-[16px]
              leading-[140%] lg:leading-[28px]
            "
          >
            {/* Check icon circle */}
            <div
              className="
                w-5 h-5 lg:w-[20px] lg:h-[20px]
                rounded-full
                bg-[#DBEAFE]
                flex items-center justify-center
                flex-shrink-0
                relative
              "
            >
              <Check
                size={12}
                className="text-[#0F70EA] lg:size-[14px]"
                strokeWidth={3}
              />
            </div>

            {module}
          </div>
        ))}
      </div>
    </div>
  );
}