import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FareHarborInit from "@/components/FareHarborInit";
import { CalendarDays, Clock, Fish, Users, Star, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Book Online | Sea Spirit Fishing Charters — Ponce Inlet, FL",
  description:
    "Book your half-day or full-day deep sea fishing charter online with Sea Spirit Fishing out of Ponce Inlet, FL. Instant confirmation. All gear, bait & license included.",
  alternates: { canonical: "https://seaspiritfishing.com/book-online" },
  openGraph: {
    title: "Book Online | Sea Spirit Fishing Charters",
    description:
      "Reserve your spot on Ponce Inlet's #1 rated fishing charter. Half-day & full-day trips available. Instant online booking.",
  },
};

const trips = [
  {
    id: "half-day",
    label: "Most Popular",
    name: "Half-Day Charter",
    price: "From $80/person",
    duration: "5 Hours",
    passengers: "Up to 49",
    departure: "6:30 AM · 1:00 PM",
    description:
      "Our most popular trip. Fish 10–15 miles offshore for red snapper, grouper, mahi-mahi, and more. All gear, bait, and fishing license included.",
    fish: ["Red Snapper", "Grouper", "Mahi-Mahi", "Amberjack"],
    href: "https://fareharbor.com/embeds/book/seaspiritfishing/items/126757/?full-items=yes&flow=139900",
  },
  {
    id: "full-day",
    label: "Best Catch",
    name: "Full-Day Charter",
    price: "From $140/person",
    duration: "10 Hours",
    passengers: "Up to 49",
    departure: "6:30 AM",
    description:
      "Go 20–30 miles offshore for bigger fish and deeper water action. The full-day trip is for serious anglers who want the best shot at trophy fish.",
    fish: ["Scamp Grouper", "Red Snapper", "Tilefish", "Wahoo"],
    href: "https://fareharbor.com/embeds/book/seaspiritfishing/items/126769/?full-items=yes&flow=139900",
  },
];

export default function BookOnlinePage() {
  return (
    <main>
      <FareHarborInit />
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
          <p className="text-white/70 text-[16px] leading-[1.65] max-w-[55ch] mb-6">
            Select your trip below and book in minutes. All gear, bait, and
            fishing license are included. No experience needed.
          </p>
          <div className="flex items-center gap-[10px] text-[13px] font-bold text-white/70">
            <Star size={14} fill="currentColor" className="text-coral" />
            <Star size={14} fill="currentColor" className="text-coral" />
            <Star size={14} fill="currentColor" className="text-coral" />
            <Star size={14} fill="currentColor" className="text-coral" />
            <Star size={14} fill="currentColor" className="text-coral" />
            <span className="ml-1">4.9 · 800+ reviews on TripAdvisor & Google</span>
          </div>
        </div>
      </section>

      {/* Trip cards */}
      <section
        data-fareharbor-lightframe
        className="px-12 py-16 max-lg:px-8 max-sm:px-5 max-sm:py-10 bg-[#f5f1eb]"
      >
        <div className="max-w-content mx-auto grid grid-cols-2 gap-8 max-lg:grid-cols-1">
          {trips.map((trip) => (
            <article
              key={trip.id}
              className="bg-white rounded-[7px] overflow-hidden shadow-sm flex flex-col"
            >
              {/* Card header */}
              <div className="bg-navy px-7 py-5 flex items-center justify-between">
                <h2 className="text-white font-extrabold text-[22px]">
                  {trip.name}
                </h2>
                <span className="bg-coral text-white text-[11px] font-extrabold tracking-[0.1em] uppercase px-3 py-[5px] rounded-[7px]">
                  {trip.label}
                </span>
              </div>

              {/* Card body */}
              <div className="px-7 py-6 flex flex-col gap-5 flex-1">
                <p className="text-[2rem] font-extrabold text-navy leading-none">
                  {trip.price}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="flex flex-col gap-1">
                    <Clock size={15} className="text-coral" />
                    <span className="text-[11px] font-bold text-ink/50 uppercase tracking-wide">Duration</span>
                    <span className="text-[14px] font-extrabold text-navy">{trip.duration}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <Users size={15} className="text-coral" />
                    <span className="text-[11px] font-bold text-ink/50 uppercase tracking-wide">Passengers</span>
                    <span className="text-[14px] font-extrabold text-navy">{trip.passengers}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <CalendarDays size={15} className="text-coral" />
                    <span className="text-[11px] font-bold text-ink/50 uppercase tracking-wide">Departs</span>
                    <span className="text-[14px] font-extrabold text-navy">{trip.departure}</span>
                  </div>
                </div>

                <p className="text-[14px] text-ink/70 leading-[1.7]">
                  {trip.description}
                </p>

                {/* Fish list */}
                <div className="flex flex-wrap gap-2">
                  {trip.fish.map((f) => (
                    <span
                      key={f}
                      className="inline-flex items-center gap-[5px] bg-[#f0ece4] text-navy text-[12px] font-bold px-3 py-[5px] rounded-[7px]"
                    >
                      <Fish size={11} />
                      {f}
                    </span>
                  ))}
                </div>

                {/* FareHarbor Lightframe link */}
                <a
                  href={trip.href}
                  className="mt-auto inline-flex items-center justify-center gap-[9px] bg-coral text-white font-extrabold text-[15px] tracking-[0.01em] px-7 py-[17px] hover:bg-coral-deep transition-colors duration-150 rounded-[7px] w-full"
                >
                  Book {trip.name} <CalendarDays size={17} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* What's included */}
      <section className="px-12 py-14 max-lg:px-8 max-sm:px-5">
        <div className="max-w-content mx-auto">
          <h2 className="text-[28px] font-extrabold text-navy mb-8">
            Everything is included
          </h2>
          <div className="grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {[
              { icon: "🎣", title: "Rods & Reels", desc: "Pro-grade tackle provided" },
              { icon: "🪣", title: "Bait & Ice", desc: "Fresh bait, live & cut" },
              { icon: "📋", title: "Fishing License", desc: "Covered for all passengers" },
              { icon: "🔪", title: "Fish Cleaning", desc: "We clean & fillet your catch" },
            ].map((item) => (
              <div key={item.title} className="flex flex-col gap-2">
                <span className="text-[28px]">{item.icon}</span>
                <h3 className="font-extrabold text-navy text-[15px]">{item.title}</h3>
                <p className="text-[13px] text-ink/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phone CTA */}
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
