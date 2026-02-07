"use client";

import Link from "next/link";
import { useHeader } from "./useHeader";

const NAV_ITEMS = [
  { label: "About", href: "#" },
  { label: "Academics", href: "#" },
  { label: "Life@JSS", href: "#" },
  { label: "Placements", href: "#" },
  { label: "Research", href: "#" },
  { label: "Facilities", href: "#" },
];

export default function Header() {
  const { isMenuOpen, toggleMenu, closeMenu } = useHeader();

  return (
    <header className="sticky top-0 z-50 w-full bg-[#EAF4FB]">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="bg-white px-6 py-3 text-sm font-bold tracking-wide">
            LOGO HERE
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium uppercase text-[#1F2A44] hover:text-blue-600 transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Admissions Button */}
            <Link
              href="#"
              className="hidden lg:inline-flex bg-[#FFC107] text-black text-sm font-semibold px-5 py-2 rounded hover:bg-[#FFB300] transition"
            >
              Admissions
            </Link>

            {/* Hamburger / Close Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden flex items-center justify-center w-10 h-10 text-3xl font-bold"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? "×" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white shadow-md">
          <nav className="flex flex-col divide-y">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="px-6 py-4 text-sm font-medium uppercase text-[#1F2A44] hover:bg-gray-100"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="#"
              onClick={closeMenu}
              className="px-6 py-4 text-sm font-semibold bg-[#FFC107]"
            >
              Admissions
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
