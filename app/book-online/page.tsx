import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FareHarborWidget from "@/components/FareHarborWidget";
import { CalendarDays, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Book Online | Sea Spirit Fishing Charters — Ponce Inlet, FL",
  description:
    "Book your half-day or full-day deep sea fishing charter online with Sea Spirit Fishing out of Ponce Inlet, FL. Instant confirmation. All gear, bait & license included.",
  alternates: { canonical: "https://seaspiritfishing.com/book-online" },
  openGraph: {
    title: "Book Online | Sea Spirit Fishing Charters",
    description:
      "Reserve your spot on Ponce Inlet's #1 rated fishing charter. Half-day & full-day trips available. Instant online booking.",
    url: "https://seaspiritfishing.com/book-online",
    type: "website",
  },
};

export default function BookOnlinePage() {
  return (
    <main>
      <Navbar />

      {/* Page header */}
      <section className="bg-navy text-white px-12 py-14 max-lg:px-8 max-sm:px-5 max-sm:py-10">
        <div className="max-w-content mx-auto">
          <p className="text-[12px] font-extrabold tracking-[0.16em] uppercase text-coral mb-3">
            Instant Confirmation
          </p>
          <h1 className="text-[44px] font-extrabold leading-[1.08] mb-4 max-sm:text-[30px]">
            Book Your Trip Online
          </h1>
          <p className="text-white/70 text-[16px] leading-[1.65] max-w-[55ch] mb-8">
            Select your trip below and book your spot in minutes. All gear, bait, and fishing
            license are included. No experience needed — our crew handles everything.
          </p>

          {/* Quick info strip */}
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-[9px] text-[13px] font-bold text-white/80">
              <CalendarDays size={15} className="text-coral flex-shrink-0" />
              Half-day from $80 · Full-day from $140
            </div>
            <a
              href="tel:3867634388"
              className="flex items-center gap-[9px] text-[13px] font-bold text-white/80 hover:text-white transition-colors"
            >
              <Phone size={15} className="text-coral flex-shrink-0" />
              (386) 763-4388
            </a>
            <div className="flex items-center gap-[9px] text-[13px] font-bold text-white/80">
              <MapPin size={15} className="text-coral flex-shrink-0" />
              4884 Front St, Ponce Inlet, FL 32127
            </div>
          </div>
        </div>
      </section>

      {/* FareHarbor embed */}
      <section className="px-12 py-14 max-lg:px-8 max-sm:px-5 max-sm:py-10">
        <div className="max-w-content mx-auto">
          <FareHarborWidget />
        </div>
      </section>

      {/* Help strip */}
      <section className="bg-[#f5f1eb] px-12 py-12 max-lg:px-8 max-sm:px-5">
        <div className="max-w-content mx-auto flex flex-wrap gap-8 items-center justify-between">
          <div>
            <h2 className="text-[22px] font-extrabold text-navy mb-1">
              Prefer to book by phone?
            </h2>
            <p className="text-[15px] text-ink/70">
              Call or text us and we&apos;ll get you set up in minutes.
            </p>
          </div>
          <a
            href="tel:3867634388"
            className="inline-flex items-center gap-[9px] bg-navy text-white font-extrabold text-[14px] tracking-[0.01em] px-7 py-[15px] hover:bg-[#0d3040] transition-colors duration-150 rounded-[7px]"
          >
            <Phone size={16} />
            (386) 763-4388
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
