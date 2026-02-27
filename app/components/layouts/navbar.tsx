"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: PointerEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
        setIsMobileDropdownOpen(false);
      }
    };

    document.addEventListener("pointerdown", handleClickOutside);
    return () => document.removeEventListener("pointerdown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handle = () => {
      setIsMobileMenuOpen(false);
      setIsMobileDropdownOpen(false);
    };
    window.addEventListener("popstate", handle);
    return () => window.removeEventListener("popstate", handle);
  }, [isMobileMenuOpen]);

  return (
    <header
      className="
        w-full h-[80px] bg-white text-[#041136]
        flex items-center px-4 sm:px-8 md:px-16 lg:px-16
        sticky top-0 z-50
      "
    >
      <div className="flex items-center justify-between w-full max-w-[1440px] mx-auto">

        {/* LEFT */}
        <div className="flex items-center gap-4 sm:gap-6 lg:gap-6">

          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>

          <div className="text-[#041136] text-3xl font-bold">Logo</div>

          <nav className="hidden md:flex items-center gap-8 font-Manrope text-[16px]">
            <Link href="/" className="hover:text-[#0F70EA] transition-colors">Home</Link>
            <Link href="/blog" className="hover:text-[#0F70EA] transition-colors">Link Two</Link>
            <Link href="/publish" className="hover:text-[#0F70EA] transition-colors">Link Three</Link>

            {/* Dropdown – group hover */}
            <div className="relative group">
              <button
                className="
                  flex items-center gap-1 cursor-default
                  group-hover:text-[#0F70EA] transition-colors
                "
              >
                Link Four
                <span
                  className={`text-xs transition-transform duration-200 group-hover:rotate-180`}
                >
                  ▼
                </span>
              </button>

              <div
                className="
                  absolute left-0 top-full -mt-1
                  w-48 bg-white rounded-[14px]
                  shadow-[0_10px_40px_rgba(0,0,0,0.12)]
                  z-50
                  opacity-0 invisible pointer-events-none
                  group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto
                  transition-opacity duration-150
                "
              >
                <Link
                  href="/document"
                  className="block px-6 py-4 hover:bg-[#F8FAFC] transition-colors"
                >
                  Sub Link 1
                </Link>
                <Link
                  href="/sub2"
                  className="block px-6 py-4 hover:bg-[#F8FAFC] transition-colors"
                >
                  Sub Link 2
                </Link>
                <Link
                  href="/sub3"
                  className="block px-6 py-4 hover:bg-[#F8FAFC] transition-colors"
                >
                  Sub Link 3
                </Link>
              </div>
            </div>
          </nav>
        </div>

        {/* RIGHT */}
        <div className="hidden sm:flex items-center gap-2">
          <button className="w-[85px] h-[44px] rounded-[14px] hover:bg-gray-100 transition">
            Log in
          </button>
          <button
            className="w-[115px] h-[48px] rounded-[14px] bg-[#0F70EA] text-white hover:bg-[#0d5fc8] transition"
          >
            Join Now
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        ref={mobileMenuRef}
        className={`
          md:hidden absolute top-[80px] left-0 right-0
          bg-white border-b shadow-md
          transition-all duration-300
          ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0 pointer-events-none"}
        `}
      >
        <nav className="flex flex-col p-6 gap-6 text-lg">
          <Link
            href="/"
            className="hover:text-[#0F70EA]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="hover:text-[#0F70EA]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Link Two
          </Link>
          <Link
            href="/publish"
            className="hover:text-[#0F70EA]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Link Three
          </Link>

          <div className="flex flex-col">
            <button
              onClick={() => setIsMobileDropdownOpen((prev) => !prev)}
              className="flex justify-between items-center hover:text-[#0F70EA] transition"
            >
              Link Four
              <span className="text-sm">{isMobileDropdownOpen ? "▲" : "▼"}</span>
            </button>

            <div
              className={`
                flex flex-col pl-6 gap-4 mt-3 overflow-hidden transition-all duration-200
                ${isMobileDropdownOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
              `}
            >
              <Link
                href="/document"
                className="hover:text-[#0F70EA]"
                onClick={() => {
                  setIsMobileDropdownOpen(false);
                  setIsMobileMenuOpen(false);
                }}
              >
                Sub Link 1
              </Link>
              <Link
                href="/sub2"
                className="hover:text-[#0F70EA]"
                onClick={() => {
                  setIsMobileDropdownOpen(false);
                  setIsMobileMenuOpen(false);
                }}
              >
                Sub Link 2
              </Link>
              <Link
                href="/sub3"
                className="hover:text-[#0F70EA]"
                onClick={() => {
                  setIsMobileDropdownOpen(false);
                  setIsMobileMenuOpen(false);
                }}
              >
                Sub Link 3
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}