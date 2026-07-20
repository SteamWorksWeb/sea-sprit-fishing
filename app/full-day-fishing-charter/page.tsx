import type { Metadata } from "next";
import Image from "next/image";
import { Clock, Users, ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Full-Day Deep Sea Fishing Charter in Ponce Inlet, FL | Sea Spirit Fishing",
  description:
    "Join Sea Spirit for a full-day deep sea fishing charter from Ponce Inlet — 10 hours, 20–30 miles offshore. Grouper, amberjack, mahi-mahi & more. All gear & license included.",
  alternates: { canonical: "https://seaspiritfishing.com/full-day-fishing-charter" },
  openGraph: {
    title: "Full-Day Fishing Charter | Sea Spirit — Ponce Inlet, FL",
    description:
      "10 hours, 20–30 miles offshore from Daytona Beach. $140 adults, $130 kids. All gear & license included. Runs Wednesdays & Saturdays.",
    url: "https://seaspiritfishing.com/full-day-fishing-charter",
    type: "website",
    images: [{ url: "https://seaspiritfishing.com/og-image.png", width: 1200, height: 630, alt: "Full-day deep sea fishing charter from Ponce Inlet, FL — Sea Spirit Fishing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Full-Day Fishing Charter | Sea Spirit Fishing",
    description: "10-hour offshore trip from Ponce Inlet, FL. $140 adults. All gear & license included.",
    images: ["https://seaspiritfishing.com/og-image.png"],
  },
};

const whatIsIncluded = [
  "Rod, reel & bait",
  "FWC fishing license",
  "Experienced captain & crew",
  "Ice for your catch",
  "Fish cleaning & filleting at the dock",
  "Coast Guard certified vessel",
  "Access to deeper offshore wrecks & ledges",
];

const pricing = [
  { label: "Adult", price: "$115" },
  { label: "Child (Ages 3–16)", price: "$95" },
  { label: "Priority Boarding (Stern Spot)", price: "+$10" },
];

export default function FullDayPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        title="Full-Day Deep Sea Fishing"
        subtitle="Ponce Inlet, FL · 9 Hours · 20–30 Miles Offshore"
      />

      {/* Overview */}
      <section className="px-12 py-16 max-lg:px-8 max-lg:py-14 max-sm:px-5 max-sm:py-11">
        <div className="max-w-content mx-auto grid grid-cols-2 gap-[56px] items-center max-lg:grid-cols-1 max-lg:gap-9">
          {/* Image */}
          <div
            className="relative border-2 border-ink overflow-hidden"
            style={{ aspectRatio: "4/3" }}
          >
            <Image
              src="/images/angler-holding-large-grouper-offshore.jpg"
              alt="Full-day deep sea fishing charter on the Sea Spirit — grouper on the deck"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute bottom-3 right-3 bg-navy text-white px-[14px] py-2 rounded-[5px]">
              <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-white/70 block leading-none">
                From
              </span>
              <span className="text-[20px] font-extrabold">$98.50</span>
            </div>
          </div>

          {/* Copy */}
          <div>
            <p className="text-[12px] font-extrabold tracking-[0.16em] uppercase text-sea-deep mb-[14px]">
              9 Hours · Wednesdays & Saturdays 7am–4pm
            </p>
            <h2 className="text-[38px] font-extrabold max-sm:text-[26px]">
              The full offshore experience.
            </h2>
            <p className="text-[16px] leading-[1.65] mt-[18px] text-ink/80">
              Join us for a day filled with excitement and adventure as you reel
              in the time of your life. Our experienced, professional, and
              courteous crew is dedicated to making your full-day fishing charter
              an exceptional journey.
            </p>
            <p className="text-[16px] leading-[1.65] mt-[14px] text-ink/80">
              We run 20–30 miles offshore into 80–100+ feet of water to fish the
              wrecks and ledges where the big grouper, amberjack, cobia, and
              mahi-mahi live. Full Days run Wednesdays and Saturdays, 7am–4pm.
            </p>

            {/* Chips */}
            <div className="flex flex-wrap gap-2 mt-[22px]">
              {[
                { icon: <Clock size={15} />, label: "9 Hours" },
                { icon: <Users size={15} />, label: "Ages 3+" },
                { icon: <Users size={15} />, label: "Up to 50 Guests" },
              ].map((chip, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-[6px] text-[12px] font-bold px-[11px] py-[6px] text-sea-deep rounded-[5px]"
                  style={{
                    backgroundColor: "color-mix(in srgb, #0f9bb0 15%, transparent)",
                  }}
                >
                  {chip.icon} {chip.label}
                </span>
              ))}
            </div>

            <a
              href="https://fareharbor.com/embeds/book/seaspiritfishing/items/126769/?full-items=yes&flow=139900"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-[28px] inline-flex items-center gap-[9px] bg-coral text-white font-extrabold text-[14px] tracking-[0.01em] px-6 py-[15px] border-2 border-transparent hover:bg-coral-deep transition-colors duration-150 rounded-[7px]"
            >
              Book Full-Day Now <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* What's Included + Pricing */}
      <section className="bg-surface px-12 py-16 max-lg:px-8 max-lg:py-14 max-sm:px-5 max-sm:py-11">
        <div className="max-w-content mx-auto grid grid-cols-2 gap-16 max-lg:grid-cols-1 max-lg:gap-10">
          <div>
            <p className="text-[12px] font-extrabold tracking-[0.16em] uppercase text-sea-deep mb-[14px]">
              Everything&apos;s included
            </p>
            <h2 className="text-[36px] font-extrabold max-sm:text-[26px]">
              What&apos;s included
            </h2>
            <ul className="mt-8 space-y-4">
              {whatIsIncluded.map((item, i) => (
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
              Pricing
            </p>
            <h2 className="text-[36px] font-extrabold max-sm:text-[26px]">
              Tickets
            </h2>
            <div className="mt-8 border-2 border-ink overflow-hidden rounded-[7px]">
              {pricing.map((p, i) => (
                <div
                  key={i}
                  className={`flex justify-between items-center px-5 py-[16px] text-[14px] ${
                    i < pricing.length - 1 ? "border-b-2 border-ink" : ""
                  }`}
                >
                  <span className="font-extrabold text-navy">{p.label}</span>
                  <span className="font-extrabold text-coral text-[20px]">{p.price}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-navy text-white p-5 rounded-[7px]">
              <p className="text-[13px] font-extrabold uppercase tracking-[0.1em] text-white/60 mb-2">
                Departure Schedule
              </p>
              <p className="text-[15px] font-bold">
                Wednesdays & Saturdays
              </p>
              <p className="text-[14px] text-white/75 mt-1">7am – 4pm (9 hours)</p>
              <p className="text-[13px] text-white/55 mt-2">
                20–30 miles offshore · 80–100ft+ depth
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Species */}
      <section className="px-12 py-16 max-lg:px-8 max-lg:py-14 max-sm:px-5 max-sm:py-11">
        <div className="max-w-content mx-auto">
          <p className="text-[12px] font-extrabold tracking-[0.16em] uppercase text-sea-deep mb-[14px]">
            Deep water wrecks & ledges
          </p>
          <h2 className="text-[38px] font-extrabold max-sm:text-[26px]">
            Targeting the big ones
          </h2>
          <p className="text-[16px] leading-[1.65] mt-[18px] max-w-[70ch] text-ink/80">
            On full-day trips we head to the deeper structure where trophy fish
            live. Target species include:{" "}
            <strong>
              Gag Grouper, Red Grouper, Black Grouper, Red Snapper, Amberjack,
              Cobia, Mahi-Mahi, King Mackerel, Barracuda, Shark, Triggerfish,
              Seabass
            </strong>{" "}
            and more — subject to season and regulations.
          </p>
          <div className="mt-10 flex items-center gap-4 flex-wrap">
            <a
              href="https://fareharbor.com/embeds/book/seaspiritfishing/items/126769/?full-items=yes&flow=139900"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[9px] bg-coral text-white font-extrabold text-[14px] tracking-[0.01em] px-6 py-[15px] border-2 border-transparent hover:bg-coral-deep transition-colors duration-150 rounded-[7px]"
            >
              Book Full-Day <ArrowRight size={17} />
            </a>
            <a
              href="/half-day-fishing-charter"
              className="inline-flex items-center gap-[9px] bg-transparent text-ink font-extrabold text-[14px] tracking-[0.01em] px-6 py-[15px] border-2 border-ink hover:bg-navy hover:text-white hover:border-navy transition-colors duration-150 rounded-[7px]"
            >
              View Half-Day Charter
            </a>
          </div>
        </div>
      </section>

      <ClosingCTA />
      <Footer />
    </main>
  );
}
