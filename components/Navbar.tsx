"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Charters", href: "#charters" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-20 flex items-center gap-[30px] px-12 py-[22px] border-b-2 border-ink bg-sand">
        {/* Brand */}
        <Link href="/" className="flex flex-col leading-none mr-auto no-underline text-ink">
          <span className="text-[21px] font-extrabold tracking-[0.04em] uppercase">
            Sea <span className="text-coral">Spirit</span>
          </span>
          <span className="text-[9.5px] font-bold tracking-[0.24em] uppercase text-sea-deep mt-[5px]">
            Fishing Charters · Ponce Inlet
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-[30px]">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[13.5px] font-bold text-ink hover:text-coral transition-colors duration-150"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Book Online CTA */}
        <a
          href="https://fareharbor.com/embeds/book/seaspiritfishing/items/126757/?full-items=yes&flow=139900"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-[9px] bg-coral text-white font-extrabold text-[14px] tracking-[0.01em] px-6 py-[15px] hover:bg-coral-deep transition-colors duration-150 rounded-[7px]"
        >
          Book Online <ArrowRight size={17} />
        </a>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-ink rounded-[7px]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu dropdown */}
      {mobileOpen && (
        <div className="lg:hidden fixed top-[65px] left-0 right-0 z-20 bg-sand border-b-2 border-ink shadow-lg">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-5 py-4 text-[14px] font-bold text-ink hover:text-coral border-b border-ink/20 transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://fareharbor.com/embeds/book/seaspiritfishing/items/126757/?full-items=yes&flow=139900"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-5 my-4 inline-flex items-center justify-between bg-coral text-white font-extrabold text-[14px] px-6 py-[15px] hover:bg-coral-deep transition-colors duration-150 rounded-[7px]"
            >
              Book Online <ArrowRight size={17} />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
