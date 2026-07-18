import type { Metadata } from "next";
import { MapPin, Clock, Car, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Location & Directions | Sea Spirit Fishing — Ponce Inlet, FL",
  description:
    "Sea Spirit Fishing departs from Sea Love Marina at 4884 Front St, Ponce Inlet, FL 32127 — just minutes from Daytona Beach. Get directions, parking info, and arrival tips.",
  alternates: { canonical: "https://seaspiritfishing.com/location" },
  openGraph: {
    title: "Location & Directions | Sea Spirit Fishing — Ponce Inlet, FL",
    description:
      "Sea Love Marina, 4884 Front St, Ponce Inlet, FL 32127. Free parking. Just south of Daytona Beach.",
    url: "https://seaspiritfishing.com/location",
    type: "website",
    images: [{ url: "https://seaspiritfishing.com/og-image.png", width: 1200, height: 630, alt: "Directions to Sea Spirit Fishing at Sea Love Marina, Ponce Inlet, FL" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Location & Directions | Sea Spirit Fishing",
    description: "4884 Front St, Ponce Inlet, FL 32127 — just south of Daytona Beach.",
    images: ["https://seaspiritfishing.com/og-image.png"],
  },
};

const landmarks = [
  { label: "Daytona Beach", distance: "~12 miles north" },
  { label: "New Smyrna Beach", distance: "~10 miles south" },
  { label: "Orlando (MCO)", distance: "~60 miles west" },
  { label: "Jacksonville", distance: "~95 miles north" },
];

const arrivalTips = [
  "Arrive at least 30 minutes before your scheduled departure.",
  "Free parking is available in the marina lot at Sea Love Marina.",
  "Check in at the Sea Spirit dock — we're the large 65ft vessel.",
  "Morning trips depart at 7:00am · Afternoon trips depart at 1:00pm.",
  "If you're running late, call us at 386-763-4388.",
];

export default function LocationPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        title="Our Location"
        subtitle="Sea Love Marina · Ponce Inlet, FL"
      />

      {/* Address + Info */}
      <section className="px-12 py-16 max-lg:px-8 max-lg:py-14 max-sm:px-5 max-sm:py-11">
        <div className="max-w-content mx-auto grid grid-cols-2 gap-16 max-lg:grid-cols-1 max-lg:gap-10">
          {/* Left — Info */}
          <div>
            <p className="text-[12px] font-extrabold tracking-[0.16em] uppercase text-sea-deep mb-[14px]">
              Where to find us
            </p>
            <h2 className="text-[38px] font-extrabold max-sm:text-[26px]">
              Sea Love Marina
            </h2>
            <p className="text-[16px] leading-[1.65] mt-[18px] text-ink/80 max-w-[52ch]">
              We depart from{" "}
              <strong>Sea Love Marina at 4884 Front St, Ponce Inlet, FL 32127</strong>{" "}
              — located just south of Daytona Beach at the southern tip of the
              peninsula, right on the Halifax River.
            </p>
            <p className="text-[16px] leading-[1.65] mt-[14px] text-ink/80 max-w-[52ch]">
              Ponce Inlet is one of Florida&apos;s premier sport-fishing
              destinations. We sit right at the inlet, giving us fast access to
              the Atlantic Ocean and the offshore reefs and wrecks where the big
              fish live.
            </p>

            {/* Address card */}
            <div className="mt-8 space-y-5">
              <a
                href="https://maps.app.goo.gl/kkSCuYSPAXKd3nqEA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <span className="w-[48px] h-[48px] bg-coral text-white flex items-center justify-center flex-none rounded-[7px] group-hover:bg-coral-deep transition-colors duration-150">
                  <MapPin size={20} />
                </span>
                <div>
                  <p className="text-[12px] font-extrabold uppercase tracking-[0.1em] text-sea-deep mb-1">
                    Address
                  </p>
                  <p className="text-[16px] font-extrabold text-navy group-hover:text-coral transition-colors duration-150">
                    4884 Front St
                  </p>
                  <p className="text-[14px] text-ink/70">
                    Ponce Inlet, FL 32127
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <span className="w-[48px] h-[48px] bg-sea text-white flex items-center justify-center flex-none rounded-[7px]">
                  <Clock size={20} />
                </span>
                <div>
                  <p className="text-[12px] font-extrabold uppercase tracking-[0.1em] text-sea-deep mb-1">
                    Departure Times
                  </p>
                  <p className="text-[15px] font-bold text-navy">
                    Morning: 7:00am · Afternoon: 1:00pm
                  </p>
                  <p className="text-[13px] text-ink/65 mt-1">
                    Arrive 30 minutes before your trip
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="w-[48px] h-[48px] bg-navy text-white flex items-center justify-center flex-none rounded-[7px]">
                  <Car size={20} />
                </span>
                <div>
                  <p className="text-[12px] font-extrabold uppercase tracking-[0.1em] text-sea-deep mb-1">
                    Parking
                  </p>
                  <p className="text-[15px] font-bold text-navy">
                    Free parking at Sea Love Marina
                  </p>
                  <p className="text-[13px] text-ink/65 mt-1">
                    Ample lot space — no reservation needed
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/kkSCuYSPAXKd3nqEA"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-[9px] bg-coral text-white font-extrabold text-[14px] tracking-[0.01em] px-6 py-[15px] border-2 border-transparent hover:bg-coral-deep transition-colors duration-150 rounded-[7px]"
            >
              Open in Google Maps <ArrowRight size={17} />
            </a>
          </div>

          {/* Right — Map */}
          <div>
            <p className="text-[12px] font-extrabold tracking-[0.16em] uppercase text-sea-deep mb-[14px]">
              Find us
            </p>
            <h2 className="text-[38px] font-extrabold max-sm:text-[26px] mb-7">
              Get directions
            </h2>
            <div className="border-2 border-ink overflow-hidden rounded-[7px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3538.4867948143736!2d-80.93157752378768!3d29.093736275245025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e6d21741c2cb0b%3A0x5d32d5a33a98b46a!2sSea%20Love%20Marina!5e0!3m2!1sen!2sus!4v1699899999999!5m2!1sen!2sus"
                width="100%"
                height="440"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sea Love Marina — Ponce Inlet, FL location map"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nearby landmarks */}
      <section className="bg-surface px-12 py-16 max-lg:px-8 max-lg:py-14 max-sm:px-5 max-sm:py-11">
        <div className="max-w-content mx-auto">
          <p className="text-[12px] font-extrabold tracking-[0.16em] uppercase text-sea-deep mb-[14px]">
            Nearby
          </p>
          <h2 className="text-[38px] font-extrabold max-sm:text-[26px]">
            Close to everywhere
          </h2>
          <p className="text-[16px] leading-[1.65] mt-[18px] max-w-[60ch] text-ink/80">
            Ponce Inlet is easy to reach from across Central Florida. We&apos;re
            a quick drive from Daytona Beach, New Smyrna Beach, and even the
            Orlando metro.
          </p>
          <div className="grid grid-cols-4 gap-5 mt-10 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {landmarks.map((lm, i) => (
              <div
                key={i}
                className="bg-white border-2 border-ink p-6 rounded-[7px]"
              >
                <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-sea-deep mb-2">
                  Distance
                </p>
                <p className="text-[18px] font-extrabold text-navy leading-[1.2]">
                  {lm.label}
                </p>
                <p className="text-[14px] text-ink/65 mt-2">{lm.distance}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Arrival tips */}
      <section className="px-12 py-16 max-lg:px-8 max-lg:py-14 max-sm:px-5 max-sm:py-11">
        <div className="max-w-content mx-auto max-w-[760px]">
          <p className="text-[12px] font-extrabold tracking-[0.16em] uppercase text-sea-deep mb-[14px]">
            Before you arrive
          </p>
          <h2 className="text-[38px] font-extrabold max-sm:text-[26px]">
            Arrival tips
          </h2>
          <ul className="mt-8 space-y-4">
            {arrivalTips.map((tip, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="w-[28px] h-[28px] bg-navy text-white text-[13px] font-extrabold flex items-center justify-center flex-none rounded-[5px] mt-[1px]">
                  {i + 1}
                </span>
                <p className="text-[15.5px] leading-[1.65] text-ink/80">{tip}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ClosingCTA />
      <Footer />
    </main>
  );
}
