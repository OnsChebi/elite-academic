import Image from "next/image";
import type { StaticImageData } from "next/image";
import { Avatar } from "./avatar";

interface BlogCardProps {
  imageSrc: string | StaticImageData;
  title: string;
  excerpt: string;
  authorAvatar: string | StaticImageData;
  authorName: string;
  date: string;
  category?: string;
  categoryColor?: string;
  className?: string;
}

export function BlogCard({
  imageSrc,
  title,
  excerpt,
  authorAvatar,
  authorName,
  date,
  category,
  categoryColor = "#F0F9FF",
  className = "",
}: BlogCardProps) {
  return (
    <article
      className={`
        group flex flex-col sm:flex-row
        overflow-hidden rounded-3xl bg-white der der-gray-200
        hover:shadow-md hover:der-gray-300
        transition-all duration-300
        w-full
        ${className}
      `}
    >
      {/* Image*/}
      <div className="
        relative w-full sm:w-[320px] 
        aspect-[16/10] sm:aspect-auto sm:h-[200px]
        flex-shrink-0 overflow-hidden rounded-[16px]
      ">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="
            object-cover
            transition-transform duration-500
            group-hover:scale-105
          "
          sizes="(max-width: 640px) 100vw, 320px"
        />
      </div>

      {/* Content*/}
      <div className="flex-1 flex flex-col px-5 py-5 sm:py-4">
        <div className="flex flex-col flex-grow gap-2.5 sm:gap-2">
          {/* Category */}
          {category && (
            <span
              className="
                w-fit px-2.5 py-1 text-xs sm:text-[11px] font-medium 
                rounded-full
              "
              style={{
                backgroundColor: categoryColor,
                color: "#026AA2",
              }}
            >
              {category}
            </span>
          )}

          {/* Title*/}
          <h3
            className="
              font-['Manrope'] font-semibold
              text-lg sm:text-[17px] lg:text-xl
              leading-6 sm:leading-[22px]
              text-[#101828]
              line-clamp-2
            "
          >
            {title}
          </h3>

          {/* Excerpt*/}
          <p
            className="
              font-['Manrope'] font-normal
              text-sm sm:text-[13px] lg:text-base
              leading-5 sm:leading-[17px] lg:leading-6
              text-[#475467]
              line-clamp-3
            "
          >
            {excerpt}
          </p>
        </div>

        {/* Author*/}
        <div className="mt-4 pt-3 der-t der-gray-100">
          <Avatar
            avatarSrc={authorAvatar}
            title={authorName}
            subtitle={date}
            avatarSize={36} 
            className="gap-2.5"
            titleClassName="
              font-['Comfortaa'] font-semibold
              text-sm sm:text-[14px] leading-5
              text-[#101828]
            "
            subtitleClassName="
              font-['Inter'] font-normal
              text-sm sm:text-[14px] leading-5
              text-[#475467]
            "
          />
        </div>
      </div>
    </article>
  );
}