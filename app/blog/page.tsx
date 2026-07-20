import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import ClosingCTA from "@/components/ClosingCTA";
import BlogIndexClient from "./BlogIndexClient";

export const metadata: Metadata = {
  title: "Fishing Blog | Sea Spirit Fishing Charters — Ponce Inlet, FL",
  description:
    "Fishing tips, trip reports, seasonal guides, and local knowledge from the crew of the Sea Spirit — Ponce Inlet's #1 rated deep sea fishing charter near Daytona Beach.",
  alternates: { canonical: "https://seaspiritfishing.com/blog" },
  openGraph: {
    title: "Fishing Blog | Sea Spirit Fishing — Ponce Inlet, FL",
    description:
      "Expert fishing tips, seasonal guides, and trip reports from the Sea Spirit crew — your guide to offshore fishing near Daytona Beach, FL.",
    url: "https://seaspiritfishing.com/blog",
    type: "website",
    images: [
      {
        url: "https://seaspiritfishing.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sea Spirit Fishing Blog — Ponce Inlet, FL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fishing Blog | Sea Spirit Fishing Charters",
    description:
      "Tips, trip reports, and seasonal guides from the Sea Spirit crew out of Ponce Inlet, FL.",
    images: ["https://seaspiritfishing.com/og-image.png"],
  },
};

export default function BlogPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        title="Fishing Blog"
        subtitle="Tips, trip reports & local knowledge from the crew"
      />

      <section className="px-12 py-16 max-lg:px-8 max-lg:py-14 max-sm:px-5 max-sm:py-11">
        <div className="max-w-content mx-auto">
          <div className="mb-10">
            <p className="text-[12px] font-extrabold tracking-[0.16em] uppercase text-sea-deep mb-[14px]">
              From the crew
            </p>
            <h1 className="text-[40px] font-extrabold max-sm:text-[28px] leading-[1.1] mb-4">
              Stories, tips & intel<br />
              <span className="text-coral">from offshore.</span>
            </h1>
            <p className="text-[16px] text-ink/70 max-w-[55ch] leading-[1.65]">
              Whether you&apos;re planning your first charter or your fiftieth, our crew shares
              everything we know about fishing the waters off Ponce Inlet — seasonally, honestly,
              and without the fluff.
            </p>
          </div>

          <BlogIndexClient />
        </div>
      </section>

      <ClosingCTA />
      <Footer />
    </main>
  );
}
