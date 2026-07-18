import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import ClosingCTA from "@/components/ClosingCTA";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Photo Gallery | Sea Spirit Fishing Charters — Ponce Inlet, FL",
  description:
    "Browse photos from Sea Spirit Fishing charters near Daytona Beach, FL — catches, crew, sunsets, and smiling anglers from half-day and full-day trips out of Ponce Inlet.",
  alternates: { canonical: "https://seaspiritfishing.com/gallery" },
  openGraph: {
    title: "Photo Gallery | Sea Spirit Fishing — Ponce Inlet, FL",
    description:
      "Real photos from real trips on the Sea Spirit — grouper, snapper, mahi-mahi, and smiling anglers out of Ponce Inlet, FL.",
    url: "https://seaspiritfishing.com/gallery",
    type: "website",
    images: [
      {
        url: "https://seaspiritfishing.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sea Spirit Fishing charter photo gallery — Ponce Inlet, FL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery | Sea Spirit Fishing Charters",
    description: "Photos from real fishing trips on the Sea Spirit out of Ponce Inlet, FL.",
    images: ["https://seaspiritfishing.com/og-image.png"],
  },
};

export default function GalleryPage() {
  return (
    <main>
      <Navbar />
      <PageHero title="Gallery" subtitle="Real trips · Real catches · Real memories" />

      <section className="px-12 py-16 max-lg:px-8 max-lg:py-14 max-sm:px-5 max-sm:py-11">
        <div className="max-w-content mx-auto">
          <p className="text-[12px] font-extrabold tracking-[0.16em] uppercase text-sea-deep mb-[14px]">
            Real trips, real catches
          </p>
          <h2 className="text-[38px] font-extrabold max-sm:text-[26px]">
            Photos from the water
          </h2>
          <p className="text-[16px] text-ink/75 mt-4 max-w-[60ch]">
            Every photo below is from an actual trip on the Sea Spirit out of Ponce Inlet.
            Half-day, full-day — the fish don&apos;t care which one you book.
          </p>
          <GalleryGrid />
        </div>
      </section>

      <ClosingCTA />
      <Footer />
    </main>
  );
}
