"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "About", href: "#" },
  { label: "Academics", href: "#" },
  { label: "Life@JSS", href: "#" },
  { label: "Placements", href: "#" },
  { label: "Research", href: "#" },
  { label: "Facilities", href: "#" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#EAF4FB]">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            className={`font-bold tracking-wide transition ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          >
            LOGO HERE
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium uppercase text-[#1F2A44] hover:text-blue-600"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right section */}
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="hidden lg:inline-flex bg-[#FFC107] px-5 py-2 text-sm font-semibold rounded"
            >
              Admissions
            </Link>

            {/* Hamburger / Close (same position) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-3xl font-bold z-50"
              aria-label="Toggle Menu"
            >
              {menuOpen ? "X" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Overlay Menu */}
      <div
        className={`fixed top-0 left-0 w-full min-h-screen bg-[#EAF4FB]/90 backdrop-blur-sm
        flex items-center justify-center transition-transform duration-300
        ${menuOpen ? "translate-x-0" : "-translate-x-full"} lg:hidden`}
      >
        <nav className="flex flex-col items-center gap-8 text-center">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-lg font-semibold uppercase text-[#1F2A44]"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="#"
            onClick={() => setMenuOpen(false)}
            className="mt-4 bg-[#FFC107] px-6 py-3 text-lg font-semibold rounded"
          >
            Admissions
          </Link>
        </nav>
      </div>
    </header>
  );
}
