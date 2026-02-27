import Image, { StaticImageData } from "next/image";
import { Badge } from "@/components/ui/badge";
type SmallBlogCardProps = {
  image: string | StaticImageData;
  author: string;
  date: string;
  title: string;
  excerpt: string;
  badges: { label: string; bg: string; text: string }[];
};

export function SmallBlogCard({ image, author, date, title, excerpt, badges }: SmallBlogCardProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-6">
      {/* Image */}
      <div className="relative w-full sm:w-[320px] aspect-[16/10] sm:aspect-[320/200] overflow-hidden rounded-2xl">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Text content */}
      <div className="flex flex-col gap-6 flex-1">
        <div className="flex flex-col gap-2">
          <p className="font-inter font-semibold text-sm text-[#0F70EA]">
            {author} • {date}
          </p>
          <h4 className="font-manrope font-semibold text-lg leading-6 text-[#101828] line-clamp-2">
            {title}
          </h4>
          <p className="font-manrope text-sm leading-5 text-[#475467] line-clamp-2">
            {excerpt}
          </p>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2">
          {badges.map((badge, i) => (
            <Badge
              key={i}
              className="px-2.5 py-1 text-xs font-[500] rounded-full"
              style={{ backgroundColor: badge.bg, color: badge.text }}
            >
              {badge.label}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}