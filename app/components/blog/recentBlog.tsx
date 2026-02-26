import { blog2, blog3 } from "@/public";
import { SmallBlogCard } from "./rightPart";
import LeftCard from "./leftCard";

export default function RecentPosts() {
  return (
    <section
      className="
        flex flex-col items-center
        pt-[69px] pb-[96px]
        gap-[64px]
        w-full bg-white
      "
    >
      {/* Container*/}
      <div
        className="
          w-full max-w-[1280px]
          px-6 sm:px-8 lg:px-8 xl:px-[32px]
          flex flex-col gap-8
        "
      >
        {/* Heading */}
        <h2
          className="
            font-manrope font-[600]
            text-2xl sm:text-[24px] leading-8 sm:leading-10
            text-[#101828] w-full
          "
        >
          Recent blog posts
        </h2>

        {/* Content area*/}
        <div
          className="
            flex flex-col lg:flex-row
            gap-8 lg:gap-[32px]
            w-full
          "
        >
          {/* Left Card */}
          <div className="w-full lg:w-[624px]">
            <LeftCard /> 
          </div>

          {/* Right cards */}
          <div className="flex flex-col gap-[32px] w-full lg:w-[592px]">
            <SmallBlogCard
              image={blog2}
              author="Phoenix Baker"
              date="19 Jan 2022"
              title="University Education in Lithuania"
              excerpt="Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get..."
              badges={[
                { label: "University", bg: "#F0F9FF", text: "#026AA2" },
                { label: "Research", bg: "#FDF2FA", text: "#C11574" },
              ]}
            />

            <SmallBlogCard
              image={blog3}
              author="Lana Steiner"
              date="18 Jan 2022"
              title="University Education in Slovakia"
              excerpt="The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing..."
              badges={[
                { label: "University", bg: "#ECFDF3", text: "#027A48" },
                { label: "Research", bg: "#FDF2FA", text: "#C11574" },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}