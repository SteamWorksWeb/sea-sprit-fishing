import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, Users, Anchor, ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "The Boat | Sea Spirit — 65ft Charter Vessel, Ponce Inlet, FL",
  description:
    "Meet the Sea Spirit — a 65ft, US Coast Guard certified party fishing vessel out of Ponce Inlet, FL. The largest, safest, and most comfortable fishing boat near Daytona Beach.",
  alternates: { canonical: "https://seaspiritfishing.com/the-boat" },
  openGraph: {
    title: "The Boat | Sea Spirit — 65ft Charter Vessel, Ponce Inlet, FL",
    description:
      "65ft, US Coast Guard certified. The biggest fishing boat near Daytona Beach. Rod holders, live bait wells, full shade deck, and a friendly crew.",
    url: "https://seaspiritfishing.com/the-boat",
    type: "website",
    images: [{ url: "https://seaspiritfishing.com/og-image.png", width: 1200, height: 630, alt: "The Sea Spirit 65ft fishing charter boat at Ponce Inlet, FL" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Boat | Sea Spirit Fishing",
    description: "65ft, US Coast Guard certified. The biggest boat near Daytona Beach.",
    images: ["https://seaspiritfishing.com/og-image.png"],
  },
};


const specs = [
  { label: "Length", value: "65 ft" },
  { label: "Capacity", value: "Up to 50 passengers" },
  { label: "Certification", value: "US Coast Guard inspected & certified" },
  { label: "Home Port", value: "Sea Love Marina, Ponce Inlet, FL" },
  { label: "Half-Day Range", value: "10–15 miles offshore · 60–80ft depth" },
  { label: "Full-Day Range", value: "20–30 miles offshore · 80–100ft+ depth" },
];

const amenities = [
  "Shaded cabin seating",
  "Full rod & reel setup for every angler",
  "Live bait well kept stocked",
  "Ice coolers for your catch",
  "Restroom on board",
  "Life jackets & safety equipment",
  "First aid supplies on board",
  "PA system for crew communication",
];

export default function TheBoatPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        title="The Sea Spirit"
        subtitle="65ft · US Coast Guard Certified · Ponce Inlet, FL"
      />

      {/* Hero overview */}
      <section className="px-12 py-16 max-lg:px-8 max-lg:py-14 max-sm:px-5 max-sm:py-11">
        <div className="max-w-content mx-auto grid grid-cols-2 gap-[56px] items-center max-lg:grid-cols-1 max-lg:gap-9">
          {/* Image */}
          <div
            className="relative border-2 border-ink overflow-hidden"
            style={{ aspectRatio: "4/3" }}
          >
            <Image
              src="/IMG_9535-scaled.webp"
              alt="The Sea Spirit — 65ft fishing charter boat at Sea Love Marina, Ponce Inlet"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Copy */}
          <div>
            <p className="text-[12px] font-extrabold tracking-[0.16em] uppercase text-sea-deep mb-[14px]">
              The biggest boat on the coast
            </p>
            <h2 className="text-[38px] font-extrabold max-sm:text-[26px]">
              Built for the ocean.
            </h2>
            <p className="text-[16px] leading-[1.65] mt-[18px] text-ink/80">
              The Sea Spirit is a 65-foot party fishing boat and the largest
              charter vessel operating out of Ponce Inlet. Her size means a
              smoother, more stable ride — even on rougher days offshore. More
              deck space, more room to fish, and more room to enjoy the
              experience.
            </p>
            <p className="text-[16px] leading-[1.65] mt-[14px] text-ink/80">
              Inspected and certified by the United States Coast Guard, the Sea
              Spirit carries up to 50 passengers and meets the highest safety
              standards on the water. She&apos;s been Sea Spirit&apos;s flagship
              vessel for years — and she runs every trip like the first.
            </p>

            {/* Stat chips */}
            <div className="flex flex-wrap gap-3 mt-[24px]">
              {[
                { icon: <Anchor size={15} />, label: "65ft Vessel" },
                { icon: <Users size={15} />, label: "Up to 50 Guests" },
                { icon: <ShieldCheck size={15} />, label: "USCG Certified" },
              ].map((chip, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-[7px] text-[12px] font-bold px-[12px] py-[7px] text-sea-deep rounded-[5px]"
                  style={{
                    backgroundColor: "color-mix(in srgb, #0f9bb0 15%, transparent)",
                  }}
                >
                  {chip.icon} {chip.label}
                </span>
              ))}
            </div>

            <a
              href="https://fareharbor.com/embeds/book/seaspiritfishing/?full-items=yes&flow=1065391"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-[28px] inline-flex items-center gap-[9px] bg-coral text-white font-extrabold text-[14px] tracking-[0.01em] px-6 py-[15px] border-2 border-transparent hover:bg-coral-deep transition-colors duration-150 rounded-[7px]"
            >
              Book a Trip <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* Specs + Amenities */}
      <section className="bg-surface px-12 py-16 max-lg:px-8 max-lg:py-14 max-sm:px-5 max-sm:py-11">
        <div className="max-w-content mx-auto grid grid-cols-2 gap-16 max-lg:grid-cols-1 max-lg:gap-10">
          {/* Specs */}
          <div>
            <p className="text-[12px] font-extrabold tracking-[0.16em] uppercase text-sea-deep mb-[14px]">
              Vessel specs
            </p>
            <h2 className="text-[36px] font-extrabold max-sm:text-[26px]">
              By the numbers
            </h2>
            <div className="mt-8 border-2 border-ink overflow-hidden rounded-[7px]">
              {specs.map((s, i) => (
                <div
                  key={i}
                  className={`flex justify-between items-center px-5 py-[15px] text-[14px] ${
                    i < specs.length - 1 ? "border-b-2 border-ink" : ""
                  }`}
                >
                  <span className="font-extrabold text-navy">{s.label}</span>
                  <span className="text-ink/75 text-right max-w-[55%]">
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Amenities */}
          <div>
            <p className="text-[12px] font-extrabold tracking-[0.16em] uppercase text-sea-deep mb-[14px]">
              What&apos;s on board
            </p>
            <h2 className="text-[36px] font-extrabold max-sm:text-[26px]">
              Everything you need
            </h2>
            <ul className="mt-8 space-y-4">
              {amenities.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-[26px] h-[26px] bg-sea text-white flex items-center justify-center flex-none rounded-[4px]">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span className="text-[15px] font-medium text-ink/85">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Second image section */}
      <section className="px-12 py-16 max-lg:px-8 max-lg:py-14 max-sm:px-5 max-sm:py-11">
        <div className="max-w-content mx-auto grid grid-cols-2 gap-[56px] items-center max-lg:grid-cols-1 max-lg:gap-9">
          {/* Copy */}
          <div>
            <p className="text-[12px] font-extrabold tracking-[0.16em] uppercase text-sea-deep mb-[14px]">
              Safety first
            </p>
            <h2 className="text-[38px] font-extrabold max-sm:text-[26px]">
              Your safety is our priority.
            </h2>
            <p className="text-[16px] leading-[1.65] mt-[18px] text-ink/80">
              The Sea Spirit is US Coast Guard inspected and certified. She
              carries all required safety equipment including life jackets,
              flares, fire extinguishers, and emergency communication systems.
              Our captain and crew are licensed, experienced, and trained in
              first aid and emergency procedures.
            </p>
            <p className="text-[16px] leading-[1.65] mt-[14px] text-ink/80">
              The final decision to sail always rests with the captain. If
              conditions are deemed unsafe, we will reschedule or refund your
              trip — no exceptions, no arguments.
            </p>
          </div>
          {/* Image */}
          <div
            className="relative border-2 border-ink overflow-hidden"
            style={{ aspectRatio: "4/3" }}
          >
            <Image
              src="/IMG_9977-scaled.webp"
              alt="The Sea Spirit offshore with guests fishing off the deck"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <ClosingCTA />
      <Footer />
    </main>
  );
}
