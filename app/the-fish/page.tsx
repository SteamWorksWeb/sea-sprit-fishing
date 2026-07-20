import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "What Fish Can I Catch? | Sea Spirit Fishing — Ponce Inlet, FL",
  description:
    "Discover what species you can catch on a Sea Spirit fishing charter near Daytona Beach — snapper, grouper, mahi-mahi, amberjack, cobia, and more. Seasonal guide included.",
  alternates: { canonical: "https://seaspiritfishing.com/the-fish" },
  openGraph: {
    title: "What Fish Can I Catch? | Sea Spirit — Ponce Inlet, FL",
    description:
      "Snapper, grouper, mahi-mahi, amberjack, cobia & more. Find out what's biting on the Sea Spirit near Daytona Beach.",
    url: "https://seaspiritfishing.com/the-fish",
    type: "website",
    images: [{ url: "https://seaspiritfishing.com/og-image.png", width: 1200, height: 630, alt: "Fish species caught on Sea Spirit Fishing charters near Daytona Beach, FL" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Fish Can I Catch? | Sea Spirit Fishing",
    description: "Snapper, grouper, mahi-mahi & more. See what's biting off Ponce Inlet, FL.",
    images: ["https://seaspiritfishing.com/og-image.png"],
  },
};


const halfDaySpecies = [
  {
    name: "Mangrove Snapper",
    img: "/fish/fish_mangrove_snapper.png",
    notes: "One of the most abundant reef fish off the Volusia coast. Feisty fighters that are excellent table fare.",
  },
  {
    name: "Lane Snapper",
    img: "/fish/fish_lane_snapper.png",
    notes: "A colorful, cooperative species that shows up in numbers on the nearshore reefs.",
  },
  {
    name: "Vermillion Snapper",
    img: "/fish/fish_vermillion_snapper.png",
    notes: "Also called \u2018beeliners\u2019 \u2014 they school tight and bite aggressively. Great for kids and new anglers.",
  },
  {
    name: "Gag Grouper",
    img: "/fish/fish_gag_grouper.png",
    notes: "The most prized catch on any Florida reef trip. Hits hard, pulls hard, and tastes incredible.",
  },
  {
    name: "Black Grouper",
    img: "/fish/fish_black_grouper.png",
    notes: "Less common inshore but shows up on ledges and rocky bottom. Big fish when they cooperate.",
  },
  {
    name: "Red Grouper",
    img: "/fish/fish_red_grouper.png",
    notes: "Found on structured bottom throughout the year. One of Florida\u2019s most popular food fish.",
  },
  {
    name: "Triggerfish",
    img: "/fish/fish_triggerfish.png",
    notes: "Notoriously hard to hook with their small mouths, but worth the effort \u2014 great eating.",
  },
  {
    name: "Sea Bass",
    img: "/fish/fish_sea_bass.png",
    notes: "Abundant on nearshore structure. A favorite for beginner anglers.",
  },
  {
    name: "Amberjack",
    img: "/fish/fish_amberjack.png",
    notes: "Powerful, relentless fighters. Amberjack will test any angler\u2019s endurance.",
  },
  {
    name: "Cobia",
    img: "/fish/fish_cobia.png",
    notes: "Seasonal. When they show up around structure, they\u2019re one of the most exciting catches offshore.",
  },
  {
    name: "King Mackerel",
    img: "/fish/fish_king_mackerel.png",
    notes: "Fast, silver missiles. Kings are a thrill on light tackle \u2014 and make great smoked fish.",
  },
  {
    name: "Flounder",
    img: "/fish/fish_flounder.png",
    notes: "Bottom-dwelling and delicious. A nice bonus catch when the bite is right.",
  },
];

const fullDaySpecies = [
  {
    name: "Gag Grouper",
    img: "/fish/fish_gag_grouper.png",
    notes: "The top target on full-day trips \u2014 we reach the deeper ledges where the big gags live.",
  },
  {
    name: "Red Snapper",
    img: "/fish/fish_red_snapper.png",
    notes: "During open season, this is the most prized catch of the trip. Big, beautiful, and delicious.",
  },
  {
    name: "Amberjack",
    img: "/fish/fish_amberjack.png",
    notes: "Trophy-sized AJs live on the deep wrecks. These fish will absolutely wear you out.",
  },
  {
    name: "Mahi-Mahi",
    img: "/fish/fish_mahi_mahi.png",
    notes: "When the weed lines show up offshore, mahi are game. Some of the most colorful fish in the sea.",
  },
  {
    name: "Cobia",
    img: "/fish/fish_cobia.png",
    notes: "Regularly caught around structure and buoys offshore. Big, aggressive, and delicious.",
  },
  {
    name: "Black Grouper",
    img: "/fish/fish_black_grouper.png",
    notes: "Found on deeper, harder structure. A rare and rewarding catch.",
  },
  {
    name: "Red Grouper",
    img: "/fish/fish_red_grouper.png",
    notes: "Abundant on the offshore wrecks \u2014 one of the tastiest fish in the Gulf Stream.",
  },
  {
    name: "King Mackerel",
    img: "/fish/fish_king_mackerel.png",
    notes: "Fast and relentless \u2014 kings frequently cruise the deeper offshore structure.",
  },
  {
    name: "Barracuda",
    img: "/fish/fish_barracuda.png",
    notes: "Toothy and fast \u2014 a thrilling strike on any light-tackle setup.",
  },
  {
    name: "Shark",
    img: "/fish/fish_shark.png",
    notes: "Various species frequent the offshore wrecks. Sandbar, spinner, and blacktip are most common.",
  },
  {
    name: "Triggerfish",
    img: "/fish/fish_triggerfish.png",
    notes: "Notoriously bait-stealing structure fish \u2014 but worth targeting on the deeper wrecks.",
  },
  {
    name: "Sea Bass",
    img: "/fish/fish_sea_bass.png",
    notes: "A consistent bonus catch on the offshore ledges and wrecks.",
  },
];

export default function TheFishPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        title="The Fish"
        subtitle="What you might reel in off Ponce Inlet"
      />

      {/* Intro */}
      <section className="px-12 py-16 max-lg:px-8 max-lg:py-14 max-sm:px-5 max-sm:py-11">
        <div className="max-w-content mx-auto grid grid-cols-2 gap-[56px] items-center max-lg:grid-cols-1 max-lg:gap-9">
          {/* Image */}
          <div
            className="relative border-2 border-ink overflow-hidden"
            style={{ aspectRatio: "4/3" }}
          >
            <Image
              src="/IMG_0463.webp"
              alt="Anglers with a big haul of snapper and grouper on the Sea Spirit"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Copy */}
          <div>
            <p className="text-[12px] font-extrabold tracking-[0.16em] uppercase text-sea-deep mb-[14px]">
              Florida East Coast fishing
            </p>
            <h2 className="text-[38px] font-extrabold max-sm:text-[26px]">
              World-class species, right off Ponce Inlet.
            </h2>
            <p className="text-[16px] leading-[1.65] mt-[18px] text-ink/80">
              The Atlantic Ocean off Volusia County is one of the richest fishing
              grounds on Florida&apos;s east coast. With natural limestone ledges,
              artificial reefs, and offshore wrecks just miles from the inlet, the
              Sea Spirit reaches productive water quickly — giving you more time
              to fish.
            </p>
            <p className="text-[16px] leading-[1.65] mt-[14px] text-ink/80">
              What you catch depends on the season, the trip length, and how the
              fish are cooperating. Below you&apos;ll find common target species
              for both our half-day and full-day charters.
            </p>
            <p className="text-[13px] mt-5 text-ink/55 italic">
              All fishing is subject to Florida FWC regulations. Season dates and
              bag limits change. Our crew stays current on all rules — you fish
              legally on every trip.
            </p>
          </div>
        </div>
      </section>

      {/* Half-Day Species */}
      <section className="bg-surface px-12 py-16 max-lg:px-8 max-lg:py-14 max-sm:px-5 max-sm:py-11">
        <div className="max-w-content mx-auto">
          <p className="text-[12px] font-extrabold tracking-[0.16em] uppercase text-sea-deep mb-[14px]">
            Half-day trips · 10–15 miles offshore
          </p>
          <h2 className="text-[38px] font-extrabold max-sm:text-[26px]">
            Half-day target species
          </h2>
          <p className="text-[16px] leading-[1.65] mt-[18px] max-w-[65ch] text-ink/80">
            On half-day trips we fish the nearshore reefs in 60–80 feet of
            water. These trips are great for families, first-timers, and anyone
            who wants a full fishing experience in 5 hours.
          </p>
          <div className="grid grid-cols-3 gap-[20px] mt-10 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {halfDaySpecies.map((fish, i) => (
              <div
                key={i}
                className="bg-white border-2 border-ink rounded-[7px] overflow-hidden"
              >
                {/* Fish illustration */}
                <div className="relative bg-[#f0f7f9] border-b-2 border-ink" style={{ aspectRatio: "2/1" }}>
                  <Image
                    src={fish.img}
                    alt={`${fish.name} fish identification illustration`}
                    fill
                    className="object-contain p-3"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-[17px] font-extrabold text-navy">
                    {fish.name}
                  </h3>
                  <p className="text-[13.5px] leading-[1.6] text-ink/70 mt-3">
                    {fish.notes}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <a
              href="/half-day-fishing-charter"
              className="inline-flex items-center gap-[9px] bg-coral text-white font-extrabold text-[14px] tracking-[0.01em] px-6 py-[15px] border-2 border-transparent hover:bg-coral-deep transition-colors duration-150 rounded-[7px]"
            >
              See Half-Day Charter Details <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* Full-Day Species */}
      <section className="px-12 py-16 max-lg:px-8 max-lg:py-14 max-sm:px-5 max-sm:py-11">
        <div className="max-w-content mx-auto">
          <p className="text-[12px] font-extrabold tracking-[0.16em] uppercase text-sea-deep mb-[14px]">
            Full-day trips · 20–30 miles offshore
          </p>
          <h2 className="text-[38px] font-extrabold max-sm:text-[26px]">
            Full-day target species
          </h2>
          <p className="text-[16px] leading-[1.65] mt-[18px] max-w-[65ch] text-ink/80">
            Full-day trips go deeper — to the offshore wrecks and ledges in
            80–100+ feet of water. Bigger structure means bigger fish. These
            are the trips where trophy grouper and amberjack come to the
            surface.
          </p>
          <div className="grid grid-cols-3 gap-[20px] mt-10 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {fullDaySpecies.map((fish, i) => (
              <div
                key={i}
                className="bg-white border-2 border-ink rounded-[7px] overflow-hidden"
              >
                {/* Fish illustration */}
                <div className="relative bg-[#f0f7f9] border-b-2 border-ink" style={{ aspectRatio: "2/1" }}>
                  <Image
                    src={fish.img}
                    alt={`${fish.name} fish identification illustration`}
                    fill
                    className="object-contain p-3"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-[17px] font-extrabold text-navy">
                    {fish.name}
                  </h3>
                  <p className="text-[13.5px] leading-[1.6] text-ink/70 mt-3">
                    {fish.notes}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex items-center gap-4 flex-wrap">
            <a
              href="/full-day-fishing-charter"
              className="inline-flex items-center gap-[9px] bg-coral text-white font-extrabold text-[14px] tracking-[0.01em] px-6 py-[15px] border-2 border-transparent hover:bg-coral-deep transition-colors duration-150 rounded-[7px]"
            >
              See Full-Day Charter Details <ArrowRight size={17} />
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

      {/* Second image */}
      <section className="bg-surface px-12 py-16 max-lg:px-8 max-lg:py-14 max-sm:px-5 max-sm:py-11">
        <div className="max-w-content mx-auto grid grid-cols-2 gap-[56px] items-center max-lg:grid-cols-1 max-lg:gap-9">
          <div>
            <p className="text-[12px] font-extrabold tracking-[0.16em] uppercase text-sea-deep mb-[14px]">
              Keep what you catch
            </p>
            <h2 className="text-[38px] font-extrabold max-sm:text-[26px]">
              Fish cleaning included.
            </h2>
            <p className="text-[16px] leading-[1.65] mt-[18px] text-ink/80">
              All of our trips include fish cleaning and filleting at the dock.
              We&apos;ll take care of your catch so you can focus on the
              experience — just bring a cooler and you&apos;ll leave with
              fresh fillets ready for the kitchen.
            </p>
            <p className="text-[16px] leading-[1.65] mt-[14px] text-ink/80">
              Ice for your fish is also provided on every trip. Whatever the
              ocean gives you, we help you take it home.
            </p>
          </div>
          <div
            className="relative border-2 border-ink overflow-hidden"
            style={{ aspectRatio: "4/3" }}
          >
            <Image
              src="/438225079_1003674841383766_827103422273945656_n.webp"
              alt="Happy anglers holding fish caught on the Sea Spirit out of Ponce Inlet"
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
