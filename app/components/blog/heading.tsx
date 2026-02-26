export default function BlogHeader() {
  return (
    <div className="w-full bg-[#F9FAFB]">
      {/* Header section*/}
      <div
        className="
          w-full max-w-[1440px] mx-auto
          py-16 sm:py-20 lg:py-[96px]
          flex flex-col items-center
          gap-10 sm:gap-12 lg:gap-[64px]
        "
      >
        {/* Container*/}
        <div
          className="
            w-full max-w-[1280px]
            px-6 sm:px-8 md:px-10 lg:px-[32px]
            flex flex-col items-center
            gap-8 sm:gap-10 lg:gap-[32px]
          "
        >
          <div
            className="
              w-full max-w-[1216px]
              flex flex-col items-center
              gap-8 sm:gap-10 lg:gap-[40px]
            "
          >
            {/* Heading */}
            <div
              className="
                w-full max-w-[960px]
                flex flex-col items-center
                gap-5 sm:gap-6 lg:gap-[24px]
              "
            >
              <span
                className="
                  font-['Inter'] font-[600]
                  text-sm sm:text-base lg:text-[16px]
                  leading-6 lg:leading-[24px]
                  text-[#0F70EA]
                  text-center
                  tracking-wide uppercase
                "
              >
                Our blog
              </span>

              <h1
                className="
                  font-Manrope font-[600]
                  text-3xl sm:text-4xl md:text-5xl lg:text-[48px]
                  leading-tight sm:leading-snug lg:leading-[60px]
                  tracking-[-0.02em]
                  text-[#101828]
                  text-center
                "
              >
                Our Blog Post
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}