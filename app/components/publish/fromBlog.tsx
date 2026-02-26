import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { BlogCard } from "./blogCard";
import { olivia, phoenix } from "@/public";
import { StaticImageData } from "next/image";

interface BlogPost {
  imageSrc: string;
  title: string;
  excerpt: string;
  authorAvatar: string | StaticImageData; 
  Avtitle: string;      
  Avsubtitle: string;    
  category: string;
  categoryColor?: string;
  className?: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "University Education in Lithuania",
    excerpt:
      "How do you create compelling presentations that wow your colleagues and impress your...",
    Avtitle: "Olivia Rhye",
    Avsubtitle: "20 Jan 2022",
    imageSrc: "/images/blog1.jpg",
    authorAvatar: olivia,
    category: "University",
    categoryColor: "#F0F9FF",
  },
  {
    title: "University Education in Slovakia",
    excerpt:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how...",
    Avtitle: "Phoenix Baker",
    Avsubtitle: "19 Jan 2022",
    imageSrc: "/images/blog2.jpg",
    authorAvatar: phoenix,
    category: "University",
    categoryColor: "#F0F9FF",
  },
];

export default function FromTheBlog() {
  return (
    <section className="bg-white w-full items-center">
      <div
        className="
          mx-auto w-full max-w-screen-2xl
          px-5 sm:px-6 lg:px-8 xl:px-12 2xl:px-16
          py-16  md:py-20 lg:py-24
          flex flex-col lg:flex-row items-start gap-12 lg:gap-16 xl:gap-20
        "
      >
        {/* Left column*/}
        <div className="w-full lg:w-[448px] flex-shrink-0">
          <div className="flex flex-col items-start gap-10 max-w-[448px]">
            <div className="flex flex-col gap-5 w-full">
              <h2
                className="
                  font-manrope font-[500]
                  text-4xl sm:text-[36px] leading-tight sm:leading-[44px]
                  text-[#101828]
                  tracking-tight
                "
              >
                From the blog
              </h2>

              <p
                className="
                  font-manrope font-[400]
                  text-lg sm:text-[18px] leading-7 sm:leading-[28px]
                  text-[#475467]
                "
              >
                The latest industry news, interviews, technologies, and resources.
              </p>
            </div>

            <Button
              variant="default"
              className="
                bg-[#0F70EA] hover:bg-[#0b5cd1] active:bg-[#094db5]
                text-white font-manrope font-[500] text-base
                h-12 px-6 min-w-[144px] rounded-lg
                shadow-[0_1px_2px_rgba(16,24,40,0.05)]
                border border-[#0F70EA]
                transition-all duration-200 flex items-center gap-2
              "
            >
              View all posts
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Right column*/}
        <div className="w-full ">
          <div className="grid grid-cols-1  gap-6 lg:gap-8 xl:gap-10">
            {blogPosts.map((post, idx) => (
              <BlogCard
                key={idx}
                imageSrc={post.imageSrc}
                title={post.title}
                excerpt={post.excerpt}
                authorAvatar={post.authorAvatar}
                authorName={post.Avtitle}    
                date={post.Avsubtitle}        
                category={post.category}
                categoryColor={post.categoryColor}
                className={post.className}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}