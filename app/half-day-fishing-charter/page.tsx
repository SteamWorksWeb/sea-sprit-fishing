import type { Metadata } from "next";
import Image from "next/image";
import { Clock, Users, ShieldCheck, ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Half-Day Fishing Charters in Ponce Inlet, FL | Sea Spirit Fishing",
  description:
    "Book a half-day deep sea fishing charter near Daytona Beach, FL. Sea Spirit departs from Ponce Inlet, 5 hours, 10–15 miles offshore. All gear, bait & license included.",
  alternates: { canonical: "https://seaspiritfishing.com/half-day-fishing-charter" },
  openGraph: {
    title: "Half-Day Fishing Charters | Sea Spirit — Ponce Inlet, FL",
    description:
      "5 hours offshore near Daytona Beach. $80 adults, $70 kids. All gear & license included. Book today.",
    url: "https://seaspiritfishing.com/half-day-fishing-charter",
    type: "website",
    images: [{ url: "https://seaspiritfishing.com/og-image.png", width: 1200, height: 630, alt: "Half-day deep sea fishing charter out of Ponce Inlet, FL near Daytona Beach" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Half-Day Fishing Charters | Sea Spirit Fishing",
    description: "5-hour offshore fishing trip from Ponce Inlet, FL. $80 adults. All gear included.",
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
];

const schedule = [
  { day: "Sunday", trips: "Morning 7am–12pm · Afternoon 1pm–6pm" },
  { day: "Monday", trips: "Morning 7am–12pm · Afternoon 1pm–6pm" },
  { day: "Tuesday", trips: "Morning 7am–12pm · Afternoon 1pm–6pm" },
  { day: "Thursday", trips: "Morning 7am–12pm · Afternoon 1pm–6pm" },
  { day: "Friday", trips: "Morning 7am–12pm · Afternoon 1pm–6pm" },
];

const pricing = [
  { label: "Adult", price: "$80" },
  { label: "Child (Ages 3–16)", price: "$70" },
  { label: "Priority Boarding (Stern Spot)", price: "+$10" },
];

export default function HalfDayPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        title="Half-Day Fishing Charters"
        subtitle="Ponce Inlet, FL · 5 Hours Offshore"
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
              src="/images/kids-and-adult-striped-bass-boat-catch.jpg"
              alt="Half-day fishing charter on the Sea Spirit out of Ponce Inlet"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute top-3 left-3 bg-coral text-white text-[11px] font-extrabold tracking-[0.1em] uppercase px-3 py-[7px] rounded-[5px]">
              Most Popular
            </div>
            <div className="absolute bottom-3 right-3 bg-navy text-white px-[14px] py-2 rounded-[5px]">
              <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-white/70 block leading-none">
                From
              </span>
              <span className="text-[20px] font-extrabold">$75</span>
            </div>
          </div>

          {/* Copy */}
          <div>
            <p className="text-[12px] font-extrabold tracking-[0.16em] uppercase text-sea-deep mb-[14px]">
              5 Hours · 10–15 Miles Offshore
            </p>
            <h2 className="text-[38px] font-extrabold max-sm:text-[26px]">
              Reel in the time of your life.
            </h2>
            <p className="text-[16px] leading-[1.65] mt-[18px] text-ink/80">
              Reel in the time of your life aboard the Sea Spirit — located in
              the Sea Love Marina in Ponce Inlet, Florida. Florida has some of
              the best deep sea fishing locations in the world! We head 10–15
              miles offshore into 60–80 feet of water where the reef fish live.
            </p>
            <p className="text-[16px] leading-[1.65] mt-[14px] text-ink/80">
              Half-Day trips are available Sundays, Mondays, Tuesdays,
              Thursdays, and Fridays. Morning departures run 7am–12pm, and
              afternoon sessions run 1pm–6pm.
            </p>

            {/* Chips */}
            <div className="flex flex-wrap gap-2 mt-[22px]">
              {[
                { icon: <Clock size={15} />, label: "5 Hours" },
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
              href="/book-online"
              
              className="mt-[28px] inline-flex items-center gap-[9px] bg-coral text-white font-extrabold text-[14px] tracking-[0.01em] px-6 py-[15px] border-2 border-transparent hover:bg-coral-deep transition-colors duration-150 rounded-[7px]"
            >
              Book Half-Day Now <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-surface px-12 py-16 max-lg:px-8 max-lg:py-14 max-sm:px-5 max-sm:py-11">
        <div className="max-w-content mx-auto grid grid-cols-2 gap-16 max-lg:grid-cols-1 max-lg:gap-10">
          <div>
            <p className="text-[12px] font-extrabold tracking-[0.16em] uppercase text-sea-deep mb-[14px]">
              Everything&apos;s included
            </p>
            <h2 className="text-[36px] font-extrabold max-sm:text-[26px]">
              What&apos;s included in every trip
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
              Schedule & Pricing
            </p>
            <h2 className="text-[36px] font-extrabold max-sm:text-[26px]">
              Pick your day
            </h2>

            {/* Schedule */}
            <div className="mt-8 border-2 border-ink overflow-hidden rounded-[7px]">
              {schedule.map((s, i) => (
                <div
                  key={i}
                  className={`flex justify-between items-center px-5 py-[14px] text-[14px] ${
                    i < schedule.length - 1 ? "border-b-2 border-ink" : ""
                  }`}
                >
                  <span className="font-extrabold text-navy">{s.day}</span>
                  <span className="text-ink/70 text-right">{s.trips}</span>
                </div>
              ))}
            </div>

            {/* Pricing */}
            <div className="mt-6 border-2 border-ink overflow-hidden rounded-[7px]">
              {pricing.map((p, i) => (
                <div
                  key={i}
                  className={`flex justify-between items-center px-5 py-[14px] text-[14px] ${
                    i < pricing.length - 1 ? "border-b-2 border-ink" : ""
                  }`}
                >
                  <span className="font-extrabold text-navy">{p.label}</span>
                  <span className="font-extrabold text-coral text-[18px]">{p.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Catch */}
      <section className="px-12 py-16 max-lg:px-8 max-lg:py-14 max-sm:px-5 max-sm:py-11">
        <div className="max-w-content mx-auto">
          <p className="text-[12px] font-extrabold tracking-[0.16em] uppercase text-sea-deep mb-[14px]">
            Bottom fishing the reefs
          </p>
          <h2 className="text-[38px] font-extrabold max-sm:text-[26px]">
            What you might catch
          </h2>
          <p className="text-[16px] leading-[1.65] mt-[18px] max-w-[70ch] text-ink/80">
            We fish the bottom reefs 10–15 miles offshore. Target species include:{" "}
            <strong>Mangrove Snapper, Lane Snapper, Vermillion Snapper,
            Triggerfish, Seabass, Amberjack, Cobia, King Mackerel, Flounder,
            Porgies, Gag Grouper, Black Grouper, Red Grouper</strong> and more.
          </p>
          <div className="mt-10 flex items-center gap-4 flex-wrap">
            <a
              href="/book-online"
              
              className="inline-flex items-center gap-[9px] bg-coral text-white font-extrabold text-[14px] tracking-[0.01em] px-6 py-[15px] border-2 border-transparent hover:bg-coral-deep transition-colors duration-150 rounded-[7px]"
            >
              Book Half-Day <ArrowRight size={17} />
            </a>
            <a
              href="/full-day-fishing-charter"
              className="inline-flex items-center gap-[9px] bg-transparent text-ink font-extrabold text-[14px] tracking-[0.01em] px-6 py-[15px] border-2 border-ink hover:bg-navy hover:text-white hover:border-navy transition-colors duration-150 rounded-[7px]"
            >
              View Full-Day Charter
            </a>
          </div>
        </div>
      </section>

      <ClosingCTA />
      <Footer />
    </main>
  );
}
