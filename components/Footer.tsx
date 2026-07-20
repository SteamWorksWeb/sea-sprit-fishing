import Link from "next/link";
import Image from "next/image";
import { CalendarDays, Phone, Mail, MapPin, ArrowRight } from "lucide-react";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={17} height={17}>
      <path d="M14 9h3V5h-3c-2.2 0-4 1.8-4 4v2H7v4h3v6h4v-6h3l1-4h-4V9c0-.6.4-1 1-1Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={17} height={17}>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TripadvisorIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={17} height={17}>
      <circle cx="7" cy="13" r="3" />
      <circle cx="17" cy="13" r="3" />
      <path d="M7 9.8c2.4-2 7.6-2 10 0" strokeLinecap="round" />
      <path d="M2 10s2-2 5-2" strokeLinecap="round" />
      <path d="M22 10s-2-2-5-2" strokeLinecap="round" />
    </svg>
  );
}

const charterLinks = [
  { label: "Fishing Charters Overview", href: "/fishing-charters" },
  { label: "Half-Day Charters", href: "/half-day-fishing-charter" },
  { label: "Full-Day Charters", href: "/full-day-fishing-charter" },
];

const exploreLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Location & Directions", href: "/location" },
  { label: "The Boat", href: "/the-boat" },
  { label: "The Fish", href: "/the-fish" },
  { label: "Ash Scattering", href: "/about-us#ash" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Legal Notice", href: "/legal-notice" },
  { label: "Terms of Agreement", href: "/terms-of-agreement" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white px-12 pt-[58px] pb-[34px] max-lg:px-8 max-lg:pt-[52px] max-lg:pb-[30px] max-sm:px-5 max-sm:pt-11 max-sm:pb-6">
      <div className="max-w-content mx-auto">
        <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 max-lg:grid-cols-2 max-lg:gap-8 max-sm:grid-cols-1 max-sm:gap-8">
          {/* Col 1 — Brand */}
          <div>
            <Link href="/" aria-label="Sea Spirit Fishing — Home" className="inline-block">
              <Image
                src="/images/logo4.png"
                alt="Sea Spirit Fishing Charters — Ponce Inlet, FL"
                width={180}
                height={68}
                className="h-[116px] w-auto object-contain"
              />
            </Link>
            <p className="text-[13.5px] leading-[1.6] text-white/70 mt-[18px] max-w-[34ch]">
              The Daytona coast&apos;s longest-running, #1-rated deep sea
              fishing charter. Family owned and operated.
            </p>
            {/* Social icons */}
            <div className="flex gap-[10px] mt-[22px]">
              <a
                href="https://www.facebook.com/seaspiritfishingtours/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-[38px] h-[38px] flex items-center justify-center border-2 border-white/28 text-white hover:bg-coral hover:border-coral transition-colors duration-150 rounded-[7px]"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.instagram.com/seaspiritfishing/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-[38px] h-[38px] flex items-center justify-center border-2 border-white/28 text-white hover:bg-coral hover:border-coral transition-colors duration-150 rounded-[7px]"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.tripadvisor.com/Attraction_Review-g658215-d647105-Reviews-Sea_Spirit-Ponce_Inlet_Florida.html"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tripadvisor"
                className="w-[38px] h-[38px] flex items-center justify-center border-2 border-white/28 text-white hover:bg-coral hover:border-coral transition-colors duration-150 rounded-[7px]"
              >
                <TripadvisorIcon />
              </a>
            </div>
          </div>

          {/* Col 2 — Get in touch */}
          <div>
            <h4 className="text-[13px] font-extrabold uppercase tracking-[0.14em] text-coral mb-[28px]">
              Get in touch
            </h4>
            <a
              href="tel:3867634388"
              className="flex items-start gap-[11px] text-[14px] text-white/85 mb-[14px] hover:text-white transition-colors duration-150 no-underline"
            >
              <Phone size={17} className="text-coral flex-none mt-[2px]" />
              386-763-4388
            </a>
            <a
              href="mailto:fvseaspirit@gmail.com"
              className="flex items-start gap-[11px] text-[14px] text-white/85 mb-[14px] hover:text-white transition-colors duration-150 no-underline"
            >
              <Mail size={17} className="text-coral flex-none mt-[2px]" />
              fvseaspirit@gmail.com
            </a>
            <a
              href="https://maps.app.goo.gl/kkSCuYSPAXKd3nqEA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-[11px] text-[14px] text-white/85 mb-[14px] hover:text-white transition-colors duration-150 no-underline"
            >
              <MapPin size={17} className="text-coral flex-none mt-[2px]" />
              4884 Front St, Ponce Inlet, FL 32127
            </a>
            <a
              href="https://fareharbor.com/embeds/book/seaspiritfishing/items/129709/?flow=139900"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-[9px] bg-coral text-white font-extrabold text-[14px] tracking-[0.01em] px-6 py-[15px] border-2 border-transparent hover:bg-coral-deep transition-colors duration-150 rounded-[7px]"
            >
              Buy a Gift Card <ArrowRight size={17} />
            </a>
          </div>

          {/* Col 3 — Charters + Explore */}
          <div>
            <h4 className="text-[13px] font-extrabold uppercase tracking-[0.14em] text-coral mb-[28px]">
              Fishing Charters
            </h4>
            <div className="flex flex-col gap-[10px] mb-6">
              {charterLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[13.5px] text-white/82 hover:text-coral transition-colors duration-150"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <h4 className="text-[13px] font-extrabold uppercase tracking-[0.14em] text-coral mb-[28px] mt-2">
              Explore
            </h4>
            <div className="flex flex-col gap-[10px]">
              {exploreLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[13.5px] text-white/82 hover:text-coral transition-colors duration-150"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 4 — Book */}
          <div>
            <h4 className="text-[13px] font-extrabold uppercase tracking-[0.14em] text-coral mb-[28px]">
              Ready to fish?
            </h4>
            <p className="text-[13.5px] leading-[1.6] text-white/70 mb-6">
              Book online with live availability. All ages welcome.
              Reservations are required — we book up fast.
            </p>
            <a
              href="https://fareharbor.com/embeds/book/seaspiritfishing/?full-items=yes&flow=1065391"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[9px] bg-coral text-white font-extrabold text-[14px] tracking-[0.01em] px-6 py-[15px] border-2 border-transparent hover:bg-coral-deep transition-colors duration-150 rounded-[7px] w-full justify-center"
            >
              Book Online <CalendarDays size={17} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t-2 border-white/[0.16] mt-10 pt-5 flex justify-between flex-wrap gap-3 text-[12px] text-white/55 max-sm:flex-col max-sm:gap-2">
          <span>© {new Date().getFullYear()} Sea Spirit Fishing. All rights reserved.</span>
          <span>Departing Sea Love Marina · Ponce Inlet, FL</span>
        </div>
      </div>
    </footer>
  );
}
