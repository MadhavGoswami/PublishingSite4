"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Academic Books", href: "#academic-books" },
  { label: "Research Publications", href: "#research-publications" },
  { label: "Educational Resources", href: "#educational-resources" },
  { label: "Institutional Partnerships", href: "#institutional-partnerships" },
  { label: "Reviews", href: "#institution-reviews" },
  { label: "Teacher Resources", href: "#teacher-resources" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e7dcc8] bg-[#f8f4ec]/90 backdrop-blur-xl">
      
      {/* INNER CONTAINER */}
      <div className="mx-auto gap-10 flex max-w-[1280px] items-center justify-between px-6 py-5 lg:px-10">
        
        {/* LEFT: LOGO */}
        <Link href="/" className="group flex items-center gap-5">
          <div className="relative flex h-13 w-13 items-center justify-center rounded-2xl border border-[#dccfb8] bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
            <div className="absolute inset-[6px] rounded-[0.9rem] bg-[linear-gradient(135deg,#24463d,#31594e)]" />
            <div className="relative z-10 flex items-center gap-[3px]">
              <span className="h-5 w-[3px] rounded-full bg-[#f6d188]" />
              <span className="h-7 w-[3px] rounded-full bg-white/95" />
              <span className="h-4 w-[3px] rounded-full bg-[#f6d188]" />
            </div>
          </div>

          <div className="leading-tight">
            <p className="font-serif text-[22px] tracking-[-0.02em] text-[#1f2937]">
              Elmbridge Press
            </p>
            <p className="mt-[2px] text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8b6a2b]">
              Educational Publishing
            </p>
          </div>
        </Link>

        {/* CENTER: NAV */}
        <nav className="hidden flex-1 items-center justify-center lg:flex">
          <div className="flex items-center gap-10">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[15px] font-medium text-[#4b5563] transition duration-300 hover:text-[#24463d]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* RIGHT: CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <button className="rounded-full border border-[#d8c9ab] bg-white px-6 py-2.5 text-sm font-semibold text-[#334155] transition duration-300 hover:border-[#b99456] hover:bg-white">
            View Catalogue
          </button>

          <button className="rounded-full bg-[#24463d] px-6 py-2.5 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(36,70,61,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#1d3932]">
            Contact
          </button>
        </div>

        {/* MOBILE */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#ded2bf] bg-white text-[#24463d] shadow-sm lg:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`overflow-hidden border-t border-[#e9decb] bg-[#fbf8f2] transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex flex-col gap-3">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-[#334155] transition hover:bg-white hover:text-[#24463d]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <button className="rounded-full border border-[#d8c9ab] bg-white px-6 py-3 text-sm font-semibold text-[#334155]">
              View Catalogue
            </button>

            <button className="rounded-full bg-[#24463d] px-6 py-3 text-sm font-semibold text-white">
              Contact
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}