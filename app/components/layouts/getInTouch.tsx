import { Mail, Phone, MapPin } from "lucide-react";

export default function GetInTouch() {
  return (
    <section className="bg-[#F9FAFB] w-full">
      {/* Top contact info area */}
      <div className="
        py-16 md:py-20 lg:pt-[96px] lg:pb-[160px]
        px-6 sm:px-10 md:px-12 lg:px-[112px]
        flex flex-col items-center gap-10 lg:gap-[64px]
      ">
        <div className="w-full max-w-[1216px] flex flex-col lg:flex-row gap-12 lg:gap-[96px] items-start lg:items-center">
          
          {/* Left: Heading + text */}
          <div className="flex flex-col gap-4 lg:gap-5 max-w-[560px]">
            <span className="
              font-Manrope font-[600]
              text-base lg:text-[16px]
              text-[#0F70EA] uppercase tracking-wide
            ">
              Contact Us
            </span>

            <h2 className="
              font-Manrope font-[400]
              text-4xl sm:text-5xl lg:text-[48px]
              leading-tight lg:leading-[44px]
              text-[#101828]
            ">
              Get in Touch
            </h2>

            <p className="
              font-Manrope font-[400]
              text-base lg:text-[20px]
              leading-[150%] lg:leading-[30px]
              text-[#475467]
            ">
              Come visit our friendly team at one of our offices.
            </p>
          </div>

          {/* Right: Contact details */}
          <div className="flex flex-col gap-6 lg:gap-8 w-full lg:w-auto">
            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="
                w-12 h-12 lg:w-[48px] lg:h-[48px]
                rounded-[10px] bg-[#0F70EA]
                flex items-center justify-center flex-shrink-0
              ">
                <Mail size={24} className="text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-Manrope font-[500] text-lg lg:text-[20px] text-[#101828]">
                  info@academicdegree.com
                </span>
                <span className="text-sm lg:text-base text-[#475467]">Email us</span>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="
                w-12 h-12 lg:w-[48px] lg:h-[48px]
                rounded-[10px] bg-[#0F70EA]
                flex items-center justify-center flex-shrink-0
              ">
                <Phone size={24} className="text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-Manrope font-[500] text-lg lg:text-[20px] text-[#101828]">
                  +123 456 7890
                </span>
                <span className="text-sm lg:text-base text-[#475467]">Call us</span>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="
                w-12 h-12 lg:w-[48px] lg:h-[48px]
                rounded-[10px] bg-[#0F70EA]
                flex items-center justify-center flex-shrink-0
              ">
                <MapPin size={24} className="text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-Manrope font-[500] text-lg lg:text-[20px] text-[#101828]">
                  123 Academic Street, Education City
                </span>
                <span className="text-sm lg:text-base text-[#475467]">Visit us</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map card */}
      <div className="
        px-6 sm:px-10 md:px-12 lg:px-[112px]
        pb-16 lg:pb-[160px]
      ">
        <div className="
          w-full max-w-[1216px] mx-auto
          border border-[#D3D3D3] rounded-[24px]
          overflow-hidden
          shadow-sm
          bg-white
          aspect-[1216/516]
          relative
        ">
          {/* Mock Google Maps*/}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537363153169!3d-37.81720997975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577e8c1b5a0b0c!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sau!4v1634567890123"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
          />
        </div>
      </div>
    </section>
  );
}