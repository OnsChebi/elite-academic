export default function Newsletter() {
  return (
    <section className="bg-[#F9FAFB] w-full py-10 sm:py-12 lg:py-12 px-6 sm:px-10 md:px-12 lg:px-[112px] flex flex-col items-center gap-10 lg:gap-[64px]">
      <div className="w-full max-w-[1216px] flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-[32px]">
        
        {/* Left: Text block */}
        <div className="flex flex-col gap-2 lg:gap-3 max-w-[734px]">
          <h3 className="font-Manrope font-[600] text-xl sm:text-2xl lg:text-[24px] leading-tight lg:leading-[140%] text-[#041136]">
            Join our newsletter
          </h3>

          <p className="font-Manrope font-[400] text-base sm:text-lg lg:text-[16px] leading-[150%] lg:leading-[24px] text-[#475467]">
            Banking technology that has your back.
          </p>
        </div>

        {/* Right: Email input + button */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto lg:min-w-[450px]">
          {/* Input field */}
          <input
            type="email"
            placeholder="Enter your email"
            className="
              w-full lg:w-[319px]
              px-4 py-3 lg:px-5 lg:py-[10px]
              bg-white border border-gray-300 rounded-[14px]
              text-base text-[#475467]
              placeholder:text-gray-400
              focus:outline-none focus:border-[#0F70EA] focus:ring-1 focus:ring-[#0F70EA]/30
              transition-all
            "
          />

          {/* Subscribe button */}
          <button
            className="
              w-full sm:w-auto
              px-6 py-3 lg:px-[18px] lg:py-[10px]
              bg-[#0F70EA] text-white
              font-Manrope font-bold text-base lg:text-[16px] leading-[150%] lg:leading-[24px]
              rounded-[14px]
              shadow-[0_1px_2px_rgba(16,24,40,0.05)]
              hover:bg-[#0B5BB3] hover:shadow-md
              active:scale-[0.98]
              transition-all duration-200
              whitespace-nowrap
            "
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}