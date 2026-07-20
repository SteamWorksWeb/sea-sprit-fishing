import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock, Sun, ArrowRight, CalendarDays, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Fishing Charters Near Daytona Beach, FL | Sea Spirit Fishing — Ponce Inlet",
  description:
    "Book a half-day or full-day deep sea fishing charter out of Ponce Inlet, FL. Sea Spirit is the #1-rated charter near Daytona Beach — family owned, 65ft boat, all gear and license included.",
};

const sharedIncludes = [
  "Rod, reel & bait — all included",
  "Florida FWC fishing license",
  "Experienced captain & crew",
  "Ice for your catch",
  "Fish cleaning & filleting at the dock",
  "US Coast Guard certified 65ft vessel",
];

const charters = [
  {
    type: "Half-Day",
    tagline: "The perfect intro to offshore fishing.",
    duration: "5 Hours",
    distance: "10–15 miles offshore",
    depth: "60–80 ft",
    icon: <Clock size={28} className="text-coral" />,
    image: "/Half-Day-Fishing-Charter-image-4.webp",
    imageAlt: "Anglers fishing on the Sea Spirit half-day charter near Daytona Beach",
    times: "Morning 7am–12pm · Afternoon 1pm–6pm",
    pricing: [
      { label: "Adult", price: "$80" },
      { label: "Child (3–16)", price: "$70" },
    ],
    species: ["Mangrove Snapper", "Grouper", "Vermillion Snapper", "Amberjack", "King Mackerel", "Sea Bass"],
    href: "/half-day-fishing-charter",
    cta: "See Half-Day Details",
  },
  {
    type: "Full-Day",
    tagline: "Go further. Catch bigger.",
    duration: "10 Hours",
    distance: "20–30 miles offshore",
    depth: "80–100+ ft",
    icon: <Sun size={28} className="text-coral" />,
    image: "/IMG_0464.webp",
    imageAlt: "Full-day fishing charter haul of grouper and snapper on the Sea Spirit",
    times: "Wednesdays & Saturdays · 7am–5pm",
    pricing: [
      { label: "Adult", price: "$140" },
      { label: "Child (3–16)", price: "$130" },
    ],
    species: ["Gag Grouper", "Red Snapper", "Mahi-Mahi", "Amberjack", "Cobia", "Shark"],
    href: "/full-day-fishing-charter",
    cta: "See Full-Day Details",
  },
];

export default function FishingChartersPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        title="Fishing Charters"
        subtitle="Half-Day & Full-Day · Departing Ponce Inlet, FL"
      />

      {/* Intro */}
      <section className="px-12 py-16 max-lg:px-8 max-lg:py-14 max-sm:px-5 max-sm:py-11">
        <div className="max-w-content mx-auto">
          <p className="text-[12px] font-extrabold tracking-[0.16em] uppercase text-sea-deep mb-[14px]">
            Party fishing out of Ponce Inlet
          </p>
          <h2 className="text-[42px] font-extrabold max-w-[22ch] max-sm:text-[28px]">
            Choose your adventure.
          </h2>
          <p className="text-[17px] leading-[1.65] mt-[18px] max-w-[65ch] text-ink/80">
            Sea Spirit runs two types of offshore fishing trips out of Sea Love
            Marina in Ponce Inlet — just south of Daytona Beach. Whether
            you&apos;re a first-timer looking for a fun morning on the water or
            an experienced angler chasing trophy grouper on the deep wrecks, we
            have a trip for you.
          </p>
          <p className="text-[17px] leading-[1.65] mt-[14px] max-w-[65ch] text-ink/80">
            Every trip includes rods, bait, a fishing license, an experienced
            crew, and fish cleaning at the dock. All you need to bring is
            yourself, sunscreen, and a cooler.
          </p>
        </div>
      </section>

      {/* Charter cards */}
      <section className="bg-surface px-12 py-16 max-lg:px-8 max-lg:py-14 max-sm:px-5 max-sm:py-11">
        <div className="max-w-content mx-auto space-y-16">
          {charters.map((charter, i) => (
            <div
              key={charter.type}
              className={`grid grid-cols-2 gap-[56px] items-start max-lg:grid-cols-1 max-lg:gap-9 ${
                i % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`relative border-2 border-ink overflow-hidden rounded-[7px] ${
                  i % 2 === 1 ? "lg:col-start-2" : ""
                }`}
                style={{ aspectRatio: "4/3" }}
              >
                <Image
                  src={charter.image}
                  alt={charter.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Info */}
              <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  {charter.icon}
                  <span className="text-[12px] font-extrabold tracking-[0.16em] uppercase text-sea-deep">
                    {charter.duration} · {charter.distance}
                  </span>
                </div>
                <h2 className="text-[38px] font-extrabold max-sm:text-[26px]">
                  {charter.type} Charter
                </h2>
                <p className="text-[17px] italic text-ink/65 mt-1">
                  {charter.tagline}
                </p>

                {/* Quick stats */}
                <div className="grid grid-cols-2 gap-3 mt-6">
                  <div className="bg-white border-2 border-ink p-4 rounded-[7px]">
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-sea-deep mb-1">Depth</p>
                    <p className="text-[15px] font-extrabold text-navy">{charter.depth}</p>
                  </div>
                  <div className="bg-white border-2 border-ink p-4 rounded-[7px]">
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-sea-deep mb-1">Schedule</p>
                    <p className="text-[13px] font-bold text-navy leading-[1.4]">{charter.times}</p>
                  </div>
                </div>

                {/* Pricing */}
                <div className="mt-5">
                  <p className="text-[12px] font-extrabold uppercase tracking-[0.12em] text-sea-deep mb-3">Pricing</p>
                  <div className="flex gap-3 flex-wrap">
                    {charter.pricing.map((p) => (
                      <div key={p.label} className="bg-navy text-white px-4 py-2 rounded-[5px]">
                        <span className="text-[12px] text-white/60 block">{p.label}</span>
                        <span className="text-[20px] font-extrabold">{p.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Common species */}
                <div className="mt-5">
                  <p className="text-[12px] font-extrabold uppercase tracking-[0.12em] text-sea-deep mb-3">
                    Common catches
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {charter.species.map((s) => (
                      <span
                        key={s}
                        className="text-[12px] font-bold px-3 py-1 border-2 border-ink/20 text-ink/70 rounded-[4px]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={charter.href}
                  className="mt-7 inline-flex items-center gap-[9px] bg-coral text-white font-extrabold text-[14px] tracking-[0.01em] px-6 py-[15px] border-2 border-transparent hover:bg-coral-deep transition-colors duration-150 rounded-[7px]"
                >
                  {charter.cta} <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What's included */}
      <section className="px-12 py-16 max-lg:px-8 max-lg:py-14 max-sm:px-5 max-sm:py-11">
        <div className="max-w-content mx-auto grid grid-cols-2 gap-16 max-lg:grid-cols-1 max-lg:gap-9">
          <div>
            <p className="text-[12px] font-extrabold tracking-[0.16em] uppercase text-sea-deep mb-[14px]">
              Every trip
            </p>
            <h2 className="text-[38px] font-extrabold max-sm:text-[26px]">
              Everything&apos;s included.
            </h2>
            <p className="text-[16px] leading-[1.65] mt-[18px] text-ink/80">
              We keep it simple. Show up ready to fish — we take care of the
              rest. No hidden fees, no gear to haul, no license to buy.
            </p>
            <ul className="mt-7 space-y-4">
              {sharedIncludes.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-[26px] h-[26px] bg-sea text-white flex items-center justify-center flex-none rounded-[4px]">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span className="text-[15px] font-medium text-ink/85">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[12px] font-extrabold tracking-[0.16em] uppercase text-sea-deep mb-[14px]">
              Good to know
            </p>
            <h2 className="text-[38px] font-extrabold max-sm:text-[26px]">
              Before you book.
            </h2>
            <div className="mt-7 space-y-5 text-[15px] leading-[1.7] text-ink/80">
              <p>
                <strong className="text-navy">Reservations are required.</strong>{" "}
                We book up fast — especially on weekends and holidays. Book
                online or call us to secure your spot.
              </p>
              <p>
                <strong className="text-navy">What to bring:</strong> Sunscreen,
                polarized sunglasses, snacks & drinks, a cooler for your catch,
                and weather-appropriate clothing. Coolers must fit under the
                gunwale.
              </p>
              <p>
                <strong className="text-navy">Weather policy:</strong> The
                captain has final say on sailing. If conditions are unsafe,
                we&apos;ll reschedule or refund — no questions asked.
              </p>
              <p>
                <strong className="text-navy">All ages welcome.</strong> Kids
                love it. We have children&apos;s pricing and the crew is
                experienced with young anglers.
              </p>
            </div>
            <a
              href="https://fareharbor.com/embeds/book/seaspiritfishing/?full-items=yes&flow=1065391"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-[9px] bg-coral text-white font-extrabold text-[14px] tracking-[0.01em] px-6 py-[15px] border-2 border-transparent hover:bg-coral-deep transition-colors duration-150 rounded-[7px]"
            >
              Book Online Now <CalendarDays size={17} />
            </a>
          </div>
        </div>
      </section>

      <ClosingCTA />
      <Footer />
    </main>
  );
}
