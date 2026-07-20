import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Sea Spirit Fishing | Family Owned Charter — Ponce Inlet, FL",
  description:
    "Learn about Sea Spirit Fishing — the longest-running, #1-rated deep sea fishing charter near Daytona Beach. Family owned, 65ft vessel, experienced crew. Departing Ponce Inlet, FL.",
  alternates: { canonical: "https://seaspiritfishing.com/about-us" },
  openGraph: {
    title: "About Sea Spirit Fishing | Family Owned Charter — Ponce Inlet, FL",
    description:
      "Meet the crew and learn about Sea Spirit — the biggest boat, the friendliest crew, the best day out near Daytona Beach.",
    url: "https://seaspiritfishing.com/about-us",
    type: "website",
    images: [
      {
        url: "https://seaspiritfishing.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sea Spirit Fishing crew and 65ft charter boat at Ponce Inlet, FL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Sea Spirit Fishing | Ponce Inlet, FL",
    description: "Meet the crew behind the #1-rated fishing charter near Daytona Beach.",
    images: ["https://seaspiritfishing.com/og-image.png"],
  },
};

const crew = [
  {
    name: "Captain Nick",
    role: "Head Captain",
    bio: "Captain Nick has spent decades mastering the waters off Ponce Inlet. Known for finding fish when no one else can, and for making every guest feel at home on the water.",
  },
  {
    name: "Reed",
    role: "First Mate",
    bio: "Reed is the energy of every trip — baiting hooks, working the decks, and making sure guests of all experience levels have the time of their lives.",
  },
  {
    name: "Jeremy",
    role: "Mate",
    bio: "Jeremy brings southern hospitality to every charter. If you've got a question about fishing, he's got the answer — and a laugh to go with it.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        title="About Sea Spirit Fishing"
        subtitle="Family owned & operated since day one"
      />

      {/* Main About Section */}
      <section className="px-12 py-16 max-lg:px-8 max-lg:py-14 max-sm:px-5 max-sm:py-11">
        <div className="max-w-content mx-auto grid grid-cols-2 gap-[56px] items-center max-lg:grid-cols-1 max-lg:gap-9">
          {/* Image */}
          <div
            className="relative border-2 border-ink overflow-hidden rounded-[7px]"
            style={{ aspectRatio: "5/4" }}
          >
            <Image
              src="/IMG_9574-scaled.webp"
              alt="The Sea Spirit 65ft fishing charter boat at Ponce Inlet marina"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Copy */}
          <div>
            <p className="text-[12px] font-extrabold tracking-[0.16em] uppercase text-sea-deep mb-[14px]">
              Ponce Inlet, Florida
            </p>
            <h2 className="text-[38px] font-extrabold max-sm:text-[26px]">
              The biggest boat, the friendliest crew.
            </h2>
            <p className="text-[16px] leading-[1.65] mt-[18px] text-ink/80">
              Sea Spirit is the longest-running and #1-rated deep sea fishing
              boat in the Daytona Beach area. At 65 feet long, we are the
              largest boat in the area — with the friendliest crew and the most
              honest prices around.
            </p>
            <p className="text-[16px] leading-[1.65] mt-[14px] text-ink/80">
              Proud to be family owned and operated. Guests will be greeted with
              southern hospitality on the way to making memories of a lifetime
              out on the water. We&apos;ll send you home with a cooler full of
              fish and a story worth telling.
            </p>
            <p className="text-[16px] leading-[1.65] mt-[14px] text-ink/80">
              We depart from the <strong>Sea Love Marina at 4884 Front St,
              Ponce Inlet, FL 32127</strong>, located just minutes from Daytona
              Beach. Our vessel is United States Coast Guard inspected and
              certified.
            </p>
            <div className="flex gap-3 flex-wrap mt-[28px]">
              <a
                href="/book-online"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-[9px] bg-coral text-white font-extrabold text-[14px] tracking-[0.01em] px-6 py-[15px] border-2 border-transparent hover:bg-coral-deep transition-colors duration-150 rounded-[7px]"
              >
                Book a Trip <CalendarDays size={17} />
              </a>
              <a
                href="/location"
                className="inline-flex items-center gap-[9px] bg-transparent text-ink font-extrabold text-[14px] tracking-[0.01em] px-6 py-[15px] border-2 border-ink hover:bg-navy hover:text-white hover:border-navy transition-colors duration-150 rounded-[7px]"
              >
                Get Directions <MapPin size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Crew */}
      <section className="bg-surface px-12 py-16 max-lg:px-8 max-lg:py-14 max-sm:px-5 max-sm:py-11">
        <div className="max-w-content mx-auto">
          <p className="text-[12px] font-extrabold tracking-[0.16em] uppercase text-sea-deep mb-[14px]">
            The team
          </p>
          <h2 className="text-[38px] font-extrabold max-sm:text-[26px]">
            Meet the crew
          </h2>
          <div className="grid grid-cols-3 gap-[26px] mt-10 max-lg:grid-cols-1 max-sm:gap-5">
            {crew.map((member, i) => (
              <div
                key={i}
                className="bg-white border-2 border-ink p-7 rounded-[7px]"
              >
                <div className="w-[52px] h-[52px] bg-navy rounded-[7px] flex items-center justify-center mb-5">
                  <span className="text-white font-extrabold text-[22px]">
                    {member.name[0]}
                  </span>
                </div>
                <h3 className="text-[18px] font-extrabold text-navy">
                  {member.name}
                </h3>
                <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-sea-deep mt-1 mb-4">
                  {member.role}
                </p>
                <p className="text-[14.5px] leading-[1.6] text-ink/75">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ash Scattering */}
      <section
        id="ash"
        className="px-12 py-16 max-lg:px-8 max-lg:py-14 max-sm:px-5 max-sm:py-11"
      >
        <div className="max-w-content mx-auto grid grid-cols-2 gap-16 items-center max-lg:grid-cols-1 max-lg:gap-9">
          <div>
            <p className="text-[12px] font-extrabold tracking-[0.16em] uppercase text-sea-deep mb-[14px]">
              A meaningful service
            </p>
            <h2 className="text-[38px] font-extrabold max-sm:text-[26px]">
              Ash Scattering at Sea
            </h2>
            <p className="text-[16px] leading-[1.65] mt-[18px] text-ink/80">
              Sea Spirit offers ash scattering services at sea — a peaceful,
              meaningful way to honor a loved one&apos;s final wishes. We take
              the utmost care in handling these private ceremonies with
              compassion, dignity, and professionalism.
            </p>
            <p className="text-[16px] leading-[1.65] mt-[14px] text-ink/80">
              We can accommodate your entire family and group for up to 65
              guests aboard our spacious 65ft vessel. To inquire about ash
              scattering services, please call us directly.
            </p>
            <a
              href="tel:3867634388"
              className="mt-[28px] inline-flex items-center gap-[9px] bg-navy text-white font-extrabold text-[14px] tracking-[0.01em] px-6 py-[15px] border-2 border-transparent hover:bg-sea-deep transition-colors duration-150 rounded-[7px]"
            >
              Call 386-763-4388
            </a>
          </div>
          <div
            className="relative border-2 border-ink overflow-hidden"
            style={{ aspectRatio: "4/3" }}
          >
            <Image
              src="/438225079_1003674841383766_827103422273945656_n.webp"
              alt="Sea Spirit fishing boat at sunset on the Atlantic"
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
