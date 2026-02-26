import Image from "next/image";
import type { StaticImageData } from "next/image";

interface AuthorAvatarProps {
  avatarSrc: string | StaticImageData;
  title: string;
  subtitle: string;
  avatarSize?: number;          
  className?: string;
  titleClassName?: string;       
  subtitleClassName?: string;      
}

export function Avatar({
  avatarSrc,
  title,
  subtitle,
  avatarSize = 56,
  className = "",
  titleClassName = "",
  subtitleClassName = "",
}: AuthorAvatarProps) {
  return (
    <div
      className={`
        flex items-center gap-3 sm:gap-4
        ${className}
      `}
    >
      {/* Avatar image */}
      <div
        className="rounded-full overflow-hidden flex-shrink-0 bg-gray-100"
        style={{ width: avatarSize, height: avatarSize }}
      >
        <Image
          src={avatarSrc}
          alt=""
          width={avatarSize}
          height={avatarSize}
          className="object-cover w-full h-full"
          />
      </div>

      {/* Text stack */}
      <div className="flex flex-col min-w-0">
        <span
          className={`
            
            ${titleClassName}
          `}
        >
          {title}
        </span>
        <span
          className={`
            
            ${subtitleClassName}
          `}
        >
          {subtitle}
        </span>
      </div>
    </div>
  );
}