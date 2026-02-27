import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface BlogPost {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  categories: { name: string; bg: string; text: string }[];
}

const mockPosts: BlogPost[] = [
  {
    title: "University Education in the Czech Republic",
    excerpt:
      "Like to know the secrets of transforming a 2-14 team into a 5x Super Bowl winning Dynasty?",
    author: "Alice Witton",
    date: "17 Jan 2022",
    image: "/images/post1.jpg",
    categories: [
      { name: "Management", bg: "#F8F9FC", text: "#363F72" },
    ],
  },
  {
    title: "University Education in Poland",
    excerpt:
      "Mental models are simple expressions of complex processes or relationships.",
    author: "Demi Wiliamson",
    date: "16 Jan 2022",
    image: "/images/post2.jpg",
    categories: [
      { name: "Product", bg: "#F0F9FF", text: "#026AA2" },
      { name: "Research", bg: "#EEF4FF", text: "#3538CD" },
       {name: "Framework", bg: "#FFF4ED", text: "#B93815" },
    ],
  },
  {
    title: "University Education in Italy",
    excerpt:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    author: "Candice Wu",
    date: "15 Jan 2022",
    image: "/images/post3.jpg",
    categories: [
      { name: "Design", bg: "#F9F5FF", text: "#0F70EA" },
      { name: "Research", bg: "#EEF4FF", text: "#3538CD" },
    ],
  },
  {
    title: "University Education in Latvia",
    excerpt:
      "Collaboration can make our teams stronger, and our individual designs better.",
    author: "Natali Craig",
    date: "14 Jan 2022",
    image: "/images/post4.jpg",
    categories: [
      { name: "Research", bg: "#EEF4FF", text: "#3538CD" },
    ],
  },
  {
    title: "Our top 10 JavaScript frameworks to use",
    excerpt:
      "JavaScript frameworks make development easy with extensive features and functionalities.",
    author: "Drew Cano",
    date: "13 Jan 2022",
    image: "/images/post5.jpg",
    categories: [
      { name: "Software", bg: "#ECFDF3", text: "#027A48" },
      { name: "Tools", bg: "#FDF2FA", text: "#C11574" },
      { name: "SaaS", bg: "#FFF1F3", text: "#C01048" },
    ],
  },
  {
    title: "Podcast: Creating a better CX Community",
    excerpt:
      "Starting a community doesn’t need to be complicated, but how do you get started?",
    author: "Orlando Diggs",
    date: "12 Jan 2022",
    image: "/images/post6.jpg",
    categories: [
      { name: "Podcasts", bg: "#F0F9FF", text: "#0F70EA" },
      { name: "Customer Success", bg: "#F8F9FC", text: "#363F72" },
    ],
  },
];

export default function AllBlogPosts() {
  return (
    <section className="bg-white w-full">
      {/* Section wrapper */}
      <div
        className="
          mx-auto max-w-[1440px]
          py-12 md:py-16 lg:pt-0 lg:pb-[96px]
          flex flex-col items-center gap-10 lg:gap-[64px]
        "
      >
        {/* Container */}
        <div
          className="
            w-full w-[1280px] 
            px-6 sm:px-8 md:px-10 lg:px-[32px]
            flex flex-col gap-10 lg:gap-[64px]
          "
        >
          <div className="flex flex-col gap-8 lg:gap-[32px]">
            {/* Heading */}
            <h2
              className="
                font-manrope font-[600]
                text-xl sm:text-2xl lg:text-[24px]
                leading-8 lg:leading-[32px]
                text-[#101828]
                w-full max-w-[1216px]
              "
            >
              All blog posts
            </h2>

            {/* Grid of cards */}
            <div
              className="
                grid grid-cols-1 md:grid-cols-3
                gap-6 md:gap-8 lg:gap-[32px]
                w-full max-w-[1216px] 
              "
            >
              {mockPosts.map((post, index) => (
                <article
                  key={index}
                  className="
                    group flex flex-col overflow-hidden
                    rounded-[24px] bg-white 
                
                    transition-all 
                  "
                >
                  {/* Image */}
                  <div className=" w-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={384}
                      height={240}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                   
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col gap-5 lg:gap-6 p-6 lg:p-8">
                    {/* Author + Date */}
                    <div className="
                      font-inter font-[600]
                      text-sm leading-5 text-[#0F70EA]
                    ">
                      {post.author} • {post.date}
                    </div>

                    {/* Title + Arrow */}
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="
                        font-['Comfortaa'] font-[600]
                        text-lg lg:text-[24px]
                        leading-7 lg:leading-8
                        text-[#101828]
                        line-clamp-2
                      ">
                        {post.title}
                      </h3>
                      <div className="pt-1">
                        <ArrowUpRight
                          className="h-6 w-6 text-[#101828] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          strokeWidth={2}
                        />
                      </div>
                    </div>

                    {/* Excerpt */}
                    <p className="
                      font-Manrope text-sm lg:text-[16px]
                      leading-6 lg:leading-[24px]
                      text-[#475467]
                      line-clamp-3
                    ">
                      {post.excerpt}
                    </p>

                    {/* Categories */}
                    <div className="mt-auto flex flex-wrap gap-2">
                      {post.categories.map((cat) => (
                        <Badge
                          key={cat.name}
                          className={`px-2.5 py-0.5 text-xs font-[500] rounded-full`}
                          style={{ backgroundColor: cat.bg, color: cat.text }}
                        >
                          {cat.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Pagination – bottom */}
          <div
            className="
              border-t border-[#EAECF0]
              pt-5 lg:pt-8
              flex flex-col lg:flex-row items-center justify-between gap-6
              w-full max-w-[1216px]
            "
          >
            {/* Previous */}
            <button className="
              flex items-center gap-2 text-[#475467] font-inter font-[600] text-sm
              hover:text-[#0F70EA] transition-colors
            ">
              <ArrowUpRight className="h-5 w-5 rotate-180" strokeWidth={2} />
              Previous
            </button>

            {/* Numbers */}
            <div className="flex items-center gap-1">
              {[1, 2, 3, "...", 8, 9, 10].map((page, i) => (
                <button
                  key={i}
                  className={`
                    flex h-10 w-10 items-center justify-center rounded-lg text-sm font-[500]
                    ${page === 1
                      ? "bg-[#F9FAFB] text-[#1D2939]"
                      : "text-[#475467] hover:bg-gray-100"
                    }
                  `}
                >
                  {page}
                </button>
              ))}
            </div>

            {/* Next */}
            <button className="
              flex items-center gap-2 text-[#475467] font-inter font-[600] text-sm
              hover:text-[#0F70EA] transition-colors
            ">
              Next
              <ArrowUpRight className="h-5 w-5" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}