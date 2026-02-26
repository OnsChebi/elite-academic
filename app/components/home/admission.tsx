export default function AdmissionProcess() {
  const steps = [
    {
      number: "1",
      title: "Choose Your",
      subtitle:"Program",
      description:
        "Explore our partner universities and colleges to find the program that best suits your academic interests and career goals.",
    },
    {
      number: "2",
      title: "Prepare Your",
      subtitle:"Documents",
      description:
        "Gather all necessary documents, including academic transcripts, proof of English proficiency, letters of recommendation, and a personal statement.",
    },
    {
      number: "3",
      title: "Apply",
      subtitle:"Online",
      description:
        "Complete the online application form on our website, upload the required documents, and submit your application.",
    },
    {
      number: "4",
      title: "Interview",
      subtitle: "",
      description:
        "Selected candidates may be invited for an interview to discuss their academic background and career aspirations.",
    },
    {
      number: "5",
      title: "Receive Your Offer",
      subtitle: "",
      description:
        "Successful applicants will receive an offer letter from the university or college. Follow the instructions to accept your offer and begin your journey.",
    },
  ];

  return (
    <section className="bg-[#F9FAFB] w-full py-16 md:py-20 lg:py-[112px]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-12 lg:px-[112px] flex flex-col  gap-10 lg:gap-[64px]">
        
        {/* Header*/}
       <div className="text-left gap-[24px] max-w-4xl">
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
            Admission  
            <span className="text-[#0F70EA]"> Process</span>
          </h2>
        </div>

        {/*cards*/}
        <div className="
          w-full grid 
          grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 
          gap-6 lg:gap-[24px]
        ">
          {steps.map((step, index) => (
            <div
              key={index}
              className="
                bg-white rounded-[24px] 
                p-6 lg:p-[32px_24px]
                flex flex-col 
                shadow-sm hover:shadow-md transition-shadow duration-300
                min-h-[280px] lg:min-h-[389px]
                
              "
            >
              {/* Number */}
              <div className="
                font-Manrope font-[600] 
                text-3xl lg:text-[32px] 
                leading-[120%] lg:leading-[38px] 
                text-[#0F70EA] mb-4 lg:mb-5
              ">
                {step.number}.
              </div>

              {/* Title */}
              <h3 className=" items-center text-center
                font-Manrope font-[500] 
                text-xl lg:text-[24px] 
                leading-[120%] lg:leading-[29px] 
                text-[#041136] mb-4 lg:mb-6
              ">
                {step.title}
                {step.subtitle && (
                  <span className="text-[#0F70EA]">
                    {" " + step.subtitle}
                  </span>
                )}
                
              </h3>

              {/* Description */}
              <p className="
                font-Manrope font-[400] 
                text-sm lg:text-[16px] 
                leading-[150%] lg:leading-[24px] 
                text-[#475467] 
                flex-1 items-center text-center
              ">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/*button */}
        <button className="w-fit mx-auto px-8 py-4 lg:px-10 lg:py-5 bg-[#0F70EA] text-white font-Manrope font-[600] text-base lg:text-[16px] rounded-[14px] hover:bg-[#0B5BB3] transition-all shadow-md hover:shadow-lg items-center flex justify-center">
        Join Now
      </button>
      </div>
    </section>
  );
}