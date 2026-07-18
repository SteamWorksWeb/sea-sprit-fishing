"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X, ChevronDown, Phone, Mail } from "lucide-react";

/* ─── Social icon SVGs ─────────────────────────────────────── */
function FacebookIcon({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
      <path d="M14 9h3V5h-3c-2.2 0-4 1.8-4 4v2H7v4h3v6h4v-6h3l1-4h-4V9c0-.6.4-1 1-1Z" />
    </svg>
  );
}

function InstagramIcon({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={size} height={size}>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TripadvisorIcon({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={size} height={size}>
      <circle cx="7" cy="13" r="3" />
      <circle cx="17" cy="13" r="3" />
      <path d="M7 9.8c2.4-2 7.6-2 10 0" strokeLinecap="round" />
      <path d="M2 10s2-2 5-2" strokeLinecap="round" />
      <path d="M22 10s-2-2-5-2" strokeLinecap="round" />
    </svg>
  );
}

/* ─── Top utility bar ───────────────────────────────────────── */
function TopBar() {
  return (
    <div className="bg-[#0b2733] text-white">
      <div className="max-w-content mx-auto px-12 max-lg:px-8 max-sm:px-5 flex items-center justify-between gap-4 py-[7px]">
        {/* Left — contact info */}
        <div className="flex items-center gap-5 flex-wrap">
          <a
            href="tel:3867634388"
            className="flex items-center gap-[7px] text-[12px] font-bold text-white/85 hover:text-white transition-colors duration-150"
          >
            <Phone size={12} className="text-white/60" />
            386-763-4388
          </a>
          <a
            href="mailto:fvseaspirit@gmail.com"
            className="flex items-center gap-[7px] text-[12px] font-bold text-white/85 hover:text-white transition-colors duration-150 max-sm:hidden"
          >
            <Mail size={12} className="text-white/60" />
            fvseaspirit@gmail.com
          </a>
        </div>

        {/* Right — social icons */}
        <div className="flex items-center gap-[10px]">
          <a
            href="https://www.facebook.com/seaspiritfishingtours/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-white/70 hover:text-white transition-colors duration-150"
          >
            <FacebookIcon size={15} />
          </a>
          <a
            href="https://www.instagram.com/seaspiritfishing/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white/70 hover:text-white transition-colors duration-150"
          >
            <InstagramIcon size={15} />
          </a>
          <a
            href="https://www.tripadvisor.com/Attraction_Review-g658215-d647105-Reviews-Sea_Spirit-Ponce_Inlet_Florida.html"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TripAdvisor"
            className="text-white/70 hover:text-white transition-colors duration-150"
          >
            <TripadvisorIcon size={15} />
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─── Nav data ──────────────────────────────────────────────── */
const navItems = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about-us",
    sub: [
      { label: "Location", href: "/location" },
      { label: "The Boat", href: "/the-boat" },
    ],
  },
  {
    label: "Fishing Charters",
    href: "/fishing-charters",
    sub: [
      { label: "Half-Day Charters", href: "/half-day-fishing-charter" },
      { label: "Full-Day Charters", href: "/full-day-fishing-charter" },
    ],
  },
  { label: "The Fish", href: "/the-fish" },
  { label: "FAQ", href: "/faq" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact-us" },
];

const mobileLinks = [
  { label: "Home", href: "/", indent: false },
  { label: "About Us", href: "/about-us", indent: false },
  { label: "Location", href: "/location", indent: true },
  { label: "The Boat", href: "/the-boat", indent: true },
  { label: "Fishing Charters", href: "/fishing-charters", indent: false },
  { label: "Half-Day Charters", href: "/half-day-fishing-charter", indent: true },
  { label: "Full-Day Charters", href: "/full-day-fishing-charter", indent: true },
  { label: "The Fish", href: "/the-fish", indent: false },
  { label: "FAQ", href: "/faq", indent: false },
  { label: "Gallery", href: "/gallery", indent: false },
  { label: "Contact Us", href: "/contact-us", indent: false },
];

/* ─── Navbar ────────────────────────────────────────────────── */
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDropdown = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(label);
  };

  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <>
      <TopBar />

      <nav className="sticky top-0 z-20 flex items-center gap-[22px] px-12 py-[20px] border-b-2 border-ink bg-sand max-lg:px-8 max-sm:px-5">
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
        <div className="hidden lg:flex items-center gap-[20px]">
          {navItems.map((item) =>
            item.sub ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => openDropdown(item.label)}
                onMouseLeave={closeDropdown}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-[13px] font-bold text-ink hover:text-coral transition-colors duration-150 whitespace-nowrap"
                >
                  {item.label} <ChevronDown size={13} />
                </Link>
                {activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-2 bg-sand border-2 border-ink shadow-[4px_4px_0px_rgba(11,39,51,1)] min-w-[200px] z-30 overflow-hidden">
                    {item.sub.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="block px-5 py-3 text-[13px] font-bold text-ink hover:bg-coral hover:text-white transition-colors duration-150 border-b last:border-b-0 border-ink/15"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="text-[13px] font-bold text-ink hover:text-coral transition-colors duration-150 whitespace-nowrap"
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* Book Online CTA */}
        <a
          href="https://fareharbor.com/embeds/book/seaspiritfishing/items/126757/?full-items=yes&flow=139900"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-[9px] bg-coral text-white font-extrabold text-[14px] tracking-[0.01em] px-6 py-[14px] hover:bg-coral-deep transition-colors duration-150 rounded-[7px]"
        >
          Book Online <ArrowRight size={16} />
        </a>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-ink"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu dropdown */}
      {mobileOpen && (
        <div className="lg:hidden fixed top-0 left-0 right-0 bottom-0 z-30 flex flex-col">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-ink/50"
            onClick={() => setMobileOpen(false)}
          />
          {/* Drawer */}
          <div className="relative z-10 bg-sand border-b-2 border-ink shadow-lg ml-auto w-full max-w-[320px] h-full flex flex-col overflow-y-auto">
            {/* Drawer header */}
            <div className="flex items-center justify-between px-5 py-4 border-b-2 border-ink/20">
              <span className="text-[15px] font-extrabold tracking-[0.04em] uppercase text-ink">
                Sea <span className="text-coral">Spirit</span>
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-1 text-ink"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Nav links */}
            <div className="flex flex-col flex-1">
              {mobileLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={
                    link.indent
                      ? "pl-9 pr-5 py-[12px] text-[13px] font-semibold text-ink/65 hover:text-coral border-b border-ink/10 border-l-2 border-l-ink/15 ml-5 transition-colors duration-150"
                      : "px-5 py-[15px] text-[14px] font-bold text-ink hover:text-coral border-b border-ink/12 transition-colors duration-150"
                  }
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile CTA + contact */}
            <div className="p-5 border-t-2 border-ink/15 space-y-3">
              <a
                href="https://fareharbor.com/embeds/book/seaspiritfishing/items/126757/?full-items=yes&flow=139900"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between bg-coral text-white font-extrabold text-[14px] px-6 py-[15px] hover:bg-coral-deep transition-colors duration-150"
              >
                Book Online <ArrowRight size={17} />
              </a>
              <div className="flex items-center justify-between pt-1">
                <a
                  href="tel:3867634388"
                  className="flex items-center gap-2 text-[13px] font-bold text-ink/75 hover:text-coral transition-colors duration-150"
                >
                  <Phone size={14} />
                  386-763-4388
                </a>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.facebook.com/seaspiritfishingtours/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="text-ink/50 hover:text-coral transition-colors duration-150"
                  >
                    <FacebookIcon size={16} />
                  </a>
                  <a
                    href="https://www.instagram.com/seaspiritfishing/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="text-ink/50 hover:text-coral transition-colors duration-150"
                  >
                    <InstagramIcon size={16} />
                  </a>
                  <a
                    href="https://www.tripadvisor.com/Attraction_Review-g658215-d647105-Reviews-Sea_Spirit-Ponce_Inlet_Florida.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TripAdvisor"
                    className="text-ink/50 hover:text-coral transition-colors duration-150"
                  >
                    <TripadvisorIcon size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
