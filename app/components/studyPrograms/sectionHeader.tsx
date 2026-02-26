export default function SectionHeader() {
  return (
    <div className="w-full max-w-[1216px] flex flex-col items-start gap-[32px]">
      <span
        className="
          font-Manrope font-[700]
           
          tracking-wide 
          text-[#0F70EA] 
          text-sm sm:text-base lg:text-[16px] 
          leading-[120%]
        "
      >
        Study Programs
      </span>

      <h2
        className="
          font-Manrope font-[500] 
          text-4xl sm:text-5xl lg:text-[48px] 
          leading-tight sm:leading-[1.15] lg:leading-[58px] 
          text-[#041136]/93
          max-w-4xl lg:max-w-[1216px]
          tracking-[-0.02em]
        "
      >
        Explore <br></br>
        Our <span className="text-[#0F70EA]">Study Programs</span>
      </h2>

      {/* Description paragraph */}
      <p
        className="
          font-Manrope font-[400] 
          text-base sm:text-lg lg:text-[18px] 
          leading-[1.6] lg:leading-[29px] 
          text-[#475467]
          max-w-3xl lg:max-w-[1216px]
        "
      >
        At Academic Degree, we are dedicated to connecting students with top-tier higher education institutions in Europe. Our mission is to provide comprehensive guidance and support to students seeking to advance their education and career prospects through international studies.
      </p>
    </div>
  );
}