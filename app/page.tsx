import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TripPicker from "@/components/TripPicker";
import StatsBand from "@/components/StatsBand";
import WhySeaSpirit from "@/components/WhySeaSpirit";
import About from "@/components/About";
import PhotoGallery from "@/components/PhotoGallery";
import Reviews from "@/components/Reviews";
import BlogPosts from "@/components/BlogPosts";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sea Spirit Fishing | #1 Rated Deep Sea Charter — Ponce Inlet, Daytona Beach",
  description:
    "Half-day and full-day deep sea fishing charters out of Ponce Inlet, FL — the Daytona coast's largest boat, friendliest crew, and #1-rated experience. All gear, bait & license included. Book today.",
  alternates: { canonical: "https://seaspiritfishing.com" },
  openGraph: {
    title: "Sea Spirit Fishing | #1 Rated Charter — Ponce Inlet, FL",
    description:
      "Half-day and full-day deep sea fishing charters out of Ponce Inlet. The biggest boat, the friendliest crew, the best day out.",
    url: "https://seaspiritfishing.com",
    type: "website",
    images: [
      {
        url: "https://seaspiritfishing.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sea Spirit Fishing — #1 Rated Charter out of Ponce Inlet, FL near Daytona Beach",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sea Spirit Fishing | #1 Rated Charter — Ponce Inlet, FL",
    description: "Half-day & full-day fishing charters from Ponce Inlet, FL. Book your trip today.",
    images: ["https://seaspiritfishing.com/og-image.png"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://seaspiritfishing.com" },
    { "@type": "ListItem", position: 2, name: "Fishing Charters", item: "https://seaspiritfishing.com/fishing-charters" },
    { "@type": "ListItem", position: 3, name: "Half-Day Charters", item: "https://seaspiritfishing.com/half-day-fishing-charter" },
    { "@type": "ListItem", position: 4, name: "Full-Day Charters", item: "https://seaspiritfishing.com/full-day-fishing-charter" },
  ],
};

export default function Home() {
  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main>
        <Navbar />
        <Hero />
        <TripPicker />
        <StatsBand />
        <WhySeaSpirit />
        <About />
        <PhotoGallery />
        <Reviews />
        <BlogPosts />
        <ClosingCTA />
        <Footer />
      </main>
    </>
  );
}
