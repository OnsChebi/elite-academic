export default function StudentLife() {
  const testimonials = [
    {
      name: "Albert Flores",
      location: "London, UK",
      quote:
        "Academic Degree helped me find the perfect program at Vytauto Didžiojo Universitetas. The support and guidance I received were invaluable.",
      role: "Economics Student",
      image: "/images/man.jpg", 
    },
    {
      name: "Leslie Alexander",
      location: "Manila, Philippines",
      quote:
        "Thanks to Academic Degree, I am now studying Business Administration at Vilnius Business College. The application process was smooth, and I couldn't be happier with my choice.",
      role: "Business Administration Student",
      image: "/images/girl1.png",
    },
    {
      name: "Courtney Henry",
      location: "Sydney, Australia",
      quote:
        "Academic Degree made everything so easy. From program selection to visa support, they were with me every step. Highly recommend!",
      role: "International Relations Student",
      image: "/images/girl2.png",
    },
  ];

  return (
    <section
      className="
        bg-gradient-to-b from-[#041136] via-[#041136] to-[#0F70EA]
        w-full py-16 md:py-20 lg:py-[112px]
        text-white
      "
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-12 lg:px-[112px] flex flex-col items-center gap-12 lg:gap-[80px]">
        
        {/* Header */}
        <div className="text-center max-w-4xl">
          <span className="
            font-Manrope font-Bold font-[700] 
            text-base lg:text-[16px] font-size-[48px]
            text-[#A5CDFF]  tracking-wide
          ">
Process          </span>

          <h2 className="
            mt-4 lg:mt-6
            font-Manrope font-[500] font-size-[48px]
            text-4xl sm:text-5xl lg:text-[48px] 
            leading-tight lg:leading-[58px] 
            text-white/93
          ">
            Student <span className="text-[#A5CDFF]">Life</span>
          
          </h2>

          <p
  className="
    mt-4 lg:mt-6
    font-manrope font-[400]
    text-[18px]
    leading-[160%]
    text-white
    text-center
    max-w-[1216px]
   

    
  "
>
  Studying in Europe offers a unique cultural experience and vibrant student life.
  From exploring historic cities to participating in diverse cultural events,
  students have numerous opportunities to immerse themselves in local culture,
  join student clubs, and engage in various extracurricular activities to enrich
  their educational experience.
</p>
        </div>

        {/* Student video/testimonial cards */}
        <div className="
          w-full grid 
          grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
          gap-6 lg:gap-[26px]
        ">
          {testimonials.map((student, idx) => (
            <div
              key={idx}
              className="
                relative rounded-[24px] overflow-hidden
                aspect-[316/568] lg:aspect-auto
                group cursor-pointer
              "
            >
              {/* Background image */}
              <img
                src={student.image}
                alt={student.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Bottom gradient overlay */}
              <div className="
                absolute inset-x-0 bottom-0 h-1/2
                bg-gradient-to-t from-black to-transparent opacity-80
              " />

              {/* Play button overlay */}
              <div className="
                absolute right-6 lg:right-8 bottom-6 lg:bottom-8
                w-12 lg:w-[58px] h-12 lg:h-[58px]
                bg-white/10 backdrop-blur-md border border-white/30
                rounded-[10px] flex items-center justify-center
                shadow-[0_15px_75px_rgba(27,25,68,0.3)]
              ">
                <svg
                  width="14"
                  height="17"
                  viewBox="0 0 14 17"
                  fill="none"
                  className="text-white"
                >
                  <path d="M13 7.268C14.3333 8.03775 14.3333 9.96225 13 10.732L3 16.0622C1.66667 16.832 0 15.8697 0 14.3301L0 2.66988C0 1.13028 1.66667 0.168003 3 0.937752L13 7.268Z" fill="white"/>
                </svg>
              </div>

              {/* Name & location */}
              <div className="absolute bottom-6 lg:bottom-8 left-6 lg:left-8 text-white">
                <p className="
                  font-Manrope font-[600] 
                  text-base lg:text-[18px] 
                  tracking-[-0.5px]
                ">
                  {student.name}
                </p>
                <p className="
                  font-Manrope font-[400] 
                  text-xs lg:text-[14px] 
                  text-[#D4D4D8] mt-1
                ">
                  {student.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials quotes */}
        <div className="
          w-full max-w-[1216px]
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
          gap-6 lg:gap-8
        ">
          {testimonials.map((student, idx) => (
            <div
              key={idx}
              className="
                bg-white rounded-[24px] p-6 lg:p-8
                
                 hover:shadow-md transition-shadow
              "
            >
              <p className="
                font-Manrope font-[400] 
                text-base lg:text-[18px] 
                leading-[150%] lg:leading-[27px] 
                text-[#475467]
              ">
                "{student.quote}"
              </p>

              <div className="mt-6 flex items-center gap-3 px-4 border-l-4 border-[#0F70EA]">
                <div className="flex flex-col ">
                  <span className="
                    font-Manrope font-[600] 
                    text-base lg:text-[16px] 
                    text-[#1F2937]
                  ">
                    {student.name}
                  </span>
                  <span className="
                    font-Manrope font-[600] 
                    text-xs lg:text-[14px] 
                    text-[#2563EB]/60
                  ">
                    {student.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}