import Link from "next/link";
import {
 FaTwitter,
 FaLinkedin,
 FaFacebook,
 FaGithub,
 FaDribbble,
 FaRegHandPeace
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-white flex justify-center">

      {/* Section */}
      <div className="
        w-full max-w-[1440px] mx-auto
        px-6 sm:px-10 md:px-12 lg:px-[112px]
        pt-16 pb-12
        flex flex-col gap-16
      ">

        {/* Top */}
        <div className="flex flex-col gap-12">

          <div className="flex flex-col lg:flex-row gap-16">

            {/* Logo */}
            <div className="flex flex-col gap-8 w-[320px]">

              <h2 className="
                font-Inter
                font-bold
                text-[32px]
                text-[#0F70EA]
              ">
                LOGO
              </h2>

              <p className="text-[#667085] text-[16px] leading-6">
                Design amazing digital experiences that create more happy in the world.
              </p>

            </div>


            {/* Links */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5
            gap-x-8 gap-y-10 lg:gap-x-12 flex-1">

              <FooterColumn
                title="Product"
                links={[
                  "Overview",
                  "Features",
                  "Solutions",
                  "Tutorials",
                  "Pricing",
                  "Releases",
                ]}
                badgeIndex={2}
              />

              <FooterColumn
                title="Company"
                links={[
                  "About us",
                  "Careers",
                  "Press",
                  "News",
                  "Media kit",
                  "Contact",
                ]}
              />

              <FooterColumn
                title="Resources"
                links={[
                  "Blog",
                  "Newsletter",
                  "Events",
                  "Help centre",
                  "Tutorials",
                  "Support",
                ]}
              />

              <FooterColumn
                title="Social"
                links={[
                  "Twitter",
                  "LinkedIn",
                  "Facebook",
                  "GitHub",
                  "Dribbble",
                ]}
              />

              <FooterColumn
                title="Legal"
                links={[
                  "Terms",
                  "Privacy",
                  "Cookies",
                  "Licenses",
                  "Settings",
                  "Contact",
                ]}
              />

            </div>

          </div>

        </div>


        {/* Bottom */}
        <div className="
          flex flex-col md:flex-row
          justify-between
          items-center
          gap-6
          pt-8
          border-t border-[#EAECF0]
        ">

          <p className="text-[#667085] text-sm">
            © 2077 Untitled UI. All rights reserved.
          </p>


          {/* Lucide Social Icons */}
          <div className="flex gap-6 text-[#98A2B3]">

            <FaTwitter
              size={20}
              className="cursor-pointer hover:text-[#0F70EA]"
            />

            <FaLinkedin
              size={20}
              className="cursor-pointer hover:text-[#0F70EA]"
            />

            <FaFacebook
              size={20}
              className="cursor-pointer hover:text-[#0F70EA]"
            />

            <FaGithub
              size={20}
              className="cursor-pointer hover:text-[#0F70EA]"
            />

            <FaRegHandPeace
              size={20}
              className="cursor-pointer hover:text-[#0F70EA]"
            />

            <FaDribbble
              size={20}
              className="cursor-pointer hover:text-[#0F70EA]"
            />

          </div>

        </div>

      </div>

    </footer>
  );
}



function FooterColumn({
  title,
  links,
  badgeIndex,
}: {
  title: string;
  links: string[];
  badgeIndex?: number;
}) {
  return (
    <div className="flex flex-col gap-4 min-w-[140px]">

      <h3 className="
        font-Manrope
        font-[600]
        text-[16px]
        text-[#101828]
      ">
        {title}
      </h3>


      {links.map((link, index) => (

        <Link
          key={index}
          href="#"
          className="
            text-[#667085]
            text-sm
            hover:text-[#0F70EA]
            flex items-center gap-2
          "
        >

          {link}


          {badgeIndex === index && (

            <span className="
              text-[#027A48]
              text-xs
              px-2 py-[2px]
              bg-[#ECFDF3]
              rounded-full
            ">
              New
            </span>

          )}

        </Link>

      ))}

    </div>
  );
}