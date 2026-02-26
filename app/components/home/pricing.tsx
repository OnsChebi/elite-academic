import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: 390,
    currency: "€",
    features: [
      "Consultation",
      "Document review",
      "Preparation of documents and application to the selected higher education",
      "Obtaining Acceptance Letter",
    ],
    buttonText: "Get started",
    type: "basic",
  },
  {
    name: "Silver",
    price: 490,
    currency: "€",
    features: [
      "Consultation",
      "Document review",
      "Preparation of documents and application to the selected higher education",
      "Obtaining Acceptance Letter",
      "Consultation for Visa Interview",
    ],
    buttonText: "Get started",
    type: "silver",
  },
  {
    name: "Gold Premium",
    price: 590,
    currency: "€",
    features: [
      "Consultation",
      "Document review",
      "Preparation of documents and application to the selected higher education",
      "Obtaining Acceptance Letter",
      "Review and preparation of Visa Interview",
      "Lawyer Consultation",
      "Fast Acceptance",
    ],
    buttonText: "Get started",
    type: "gold",
  },
];

export default function Pricing() {
  return (
    <section className="bg-white w-full py-16 md:py-20 lg:py-[112px]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-12 lg:px-[112px] flex flex-col items-center gap-10 lg:gap-[64px]">
        
        {/* Header */}
        <div className="text-center gap-[24px] max-w-4xl">
          <span className="
            font-Manrope font-bold font-[700]
            text-base lg:text-[16px] 
            text-[#0F70EA]  
          ">
            Proccess
          </span>

          <h2 className="
            mt-3 lg:mt-5
            font-Manrope font-[500]
            text-4xl sm:text-5xl lg:text-[48px] 
            leading-tight lg:leading-[58px] 
            text-[#041136]/93
          ">
            Select your  
            <span className="text-[#0F70EA]"> package</span>
          </h2>
        </div>

        {/* Pricing cards */}
        <div className="
          w-full grid 
          grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
          gap-8 lg:gap-10 xl:gap-12
        ">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`
                rounded-[24px] overflow-hidden
                flex flex-col
                w-full
                ${plan.type === "basic" ? "lg:h-[514px]" : ""}
                ${plan.type === "silver" ? "lg:h-[618px]" : ""}
                ${plan.type === "gold" ? "lg:h-[698px] bg-[#FFFCEA]" : "bg-white border border-[#EAECF0]"}
                shadow-sm hover:shadow-lg transition-all duration-300
                ${plan.type === "gold" ? "lg:scale-105 lg:z-10" : ""}
              `}
            >
              {/* Header */}
              <div className="px-6 sm:px-8 lg:px-[32px] pt-6 sm:pt-8 lg:pt-[32px] pb-0 flex flex-col gap-5 lg:gap-[24px]">
                <div className="flex flex-col items-center gap-2 lg:gap-[8px]">
                  {/* Plan name */}
                  <h3
                    className={`
                      font-Manrope font-[600]
                      text-lg sm:text-xl lg:text-[20px]
                      leading-[150%] lg:leading-[30px]
                      text-center
                      ${plan.type === "gold" ? "text-[#EABA0F]" : plan.type === "silver" ? "text-[#838383]" : "text-[#0F70EA]"}
                    `}
                  >
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="text-center">
                    <span
                      className="
                        font-Manrope font-[600]
                        text-5xl sm:text-6xl lg:text-[64px]
                        leading-none lg:leading-[60px]
                        tracking-[-0.02em]
                        text-[#101828]
                      "
                    >
                      {plan.price}
                    </span>
                    <span className="text-2xl lg:text-4xl font-[500] text-[#101828]">
                      {plan.currency}
                    </span>
                  </div>
                </div>
              </div>

              {/* Features list */}
              <div className="p-6 sm:p-8 lg:p-[32px] flex-1 flex flex-col gap-4 lg:gap-[24px]">
                <div className="flex flex-col gap-4 lg:gap-[16px]">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 lg:gap-[12px]">
                      {/* Check circle */}
                      <div
                        className={`
                          w-6 h-6 lg:w-[24px] lg:h-[24px]
                          rounded-full flex items-center justify-center flex-shrink-0 mt-0.5
                          ${plan.type === "gold" ? "bg-[#FCF5CF]" : "bg-[#DBEAFE]"}
                        `}
                      >
                        <Check
                          size={14}
                          className={`
                            ${plan.type === "gold" ? "text-[#FFB74B]" : "text-[#0F70EA]"}
                            lg:size-[16px]
                          `}
                          strokeWidth={3}
                        />
                      </div>

                      {/* Feature text */}
                      <span className="
                        font-Manrope font-[400]
                        text-sm sm:text-base lg:text-[16px]
                        leading-[150%] lg:leading-[24px]
                        text-[#475467]
                      ">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer*/}
              <div
                className={`
                  p-6 sm:p-8 lg:p-[32px]
                  ${plan.type === "gold" ? "bg-[#FCF5CF]" : "bg-[#F9FAFB]"}
                `}
              >
                <button
                  className={`
                    w-full h-12 lg:h-[64px]
                    rounded-[14px]
                    font-Manrope font-[600]
                    text-base lg:text-[18px]
                    shadow-[0_1px_2px_rgba(16,24,40,0.05)]
                    transition-all duration-200
                    ${plan.type === "gold"
                      ? "bg-[#FFB74B] hover:bg-[#FFA726] text-white"
                      : "bg-[#0F70EA] hover:bg-[#0B5BB3] text-white"}
                  `}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}