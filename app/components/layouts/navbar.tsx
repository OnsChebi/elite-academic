"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header
      className="
      w-full h-[80px]
      bg-white text-[#041136]
      flex items-center
      px-4
      sm:px-8
      md:px-16
      lg:px-16
    "
    >
      <div className="flex items-center justify-between w-full max-w-[1440px] mx-auto">

        {/* LEFT */}
        <div className="flex items-center gap-4 sm:gap-6 lg:gap-[24px]">

          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>

          {/* Logo */}
          <div className="text-[#041136] text-3xl font-bold">
            Logo
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-Manrope text-[16px]">

            <Link href="/">Home</Link>

            <Link href="/blog">Link Two</Link>

            <Link href="/publish">Link Three</Link>

            {/* Dropdown */}
            <div className="relative">

              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-1 hover:text-[#0F70EA]"
              >
                Link Four

                <span
                  className={`text-xs transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>

              </button>

              {isDropdownOpen && (
                <div
                  className="
                  absolute left-0 top-full mt-2
                  w-48 bg-white rounded-[14px]
                  shadow-[0_10px_40px_rgba(0,0,0,0.1)]
                  z-50
                "
                >

                  <Link
                    href="/document"
                    className="block px-6 py-4 hover:bg-[#F8FAFC]"
                  >
                    Sub Link 1
                  </Link>

                  <Link
                    href="#"
                    className="block px-6 py-4 hover:bg-[#F8FAFC]"
                  >
                    Sub Link 2
                  </Link>

                  <Link
                    href="#"
                    className="block px-6 py-4 hover:bg-[#F8FAFC]"
                  >
                    Sub Link 3
                  </Link>

                </div>
              )}
            </div>

          </nav>
        </div>

        {/* RIGHT */}
        <div className="hidden sm:flex items-center gap-2">

          <button className="w-[85px] h-[44px] rounded-[14px]">
            Log in
          </button>

          <button
            className="
            w-[115px] h-[48px]
            rounded-[14px]
            bg-[#0F70EA]
            text-white
          "
          >
            Join Now
          </button>

        </div>

      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div
          className="
          md:hidden absolute top-[80px] left-0 right-0
          bg-white border-b
        "
        >
          <nav className="flex flex-col p-6 gap-6">

            <Link href="/">Home</Link>

            <Link href="/blog">Link Two</Link>

            <Link href="/publish">Link Three</Link>

            {/* Mobile dropdown */}

            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex justify-between"
            >
              Link Four
              <span>{isDropdownOpen ? "▲" : "▼"}</span>
            </button>

            {isDropdownOpen && (
              <div className="flex flex-col pl-4 gap-4">

                <Link href="/document">Sub Link 1</Link>

                <Link href="#">Sub Link 2</Link>

                <Link href="#">Sub Link 3</Link>

              </div>
            )}

          </nav>
        </div>
      )}
    </header>
  );
}