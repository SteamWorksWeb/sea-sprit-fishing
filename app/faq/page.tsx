import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";
import FaqAccordion from "@/components/FaqAccordion";
import { faqs } from "@/lib/faqData";


export const metadata: Metadata = {
  title: "FAQ | Fishing Charter Questions Answered — Sea Spirit, Ponce Inlet FL",
  description:
    "Answers to the most common questions about Sea Spirit Fishing charters near Daytona Beach — pricing, what's included, schedules, what to bring, weather policy, and more.",
  alternates: { canonical: "https://seaspiritfishing.com/faq" },
  openGraph: {
    title: "FAQ | Sea Spirit Fishing Charters — Ponce Inlet, FL",
    description:
      "Everything you need to know before booking a Sea Spirit fishing charter near Daytona Beach, FL.",
    url: "https://seaspiritfishing.com/faq",
    type: "website",
    images: [
      {
        url: "https://seaspiritfishing.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sea Spirit Fishing FAQ — Ponce Inlet, FL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | Sea Spirit Fishing Charters",
    description: "Common questions about Sea Spirit charter trips near Daytona Beach, FL.",
    images: ["https://seaspiritfishing.com/og-image.png"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main>
        <Navbar />
        <PageHero title="FAQ" subtitle="Frequently Asked Questions" />

        <section className="px-12 py-16 max-lg:px-8 max-lg:py-14 max-sm:px-5 max-sm:py-11">
          <div className="max-w-content mx-auto grid grid-cols-[2fr_1fr] gap-16 items-start max-lg:grid-cols-1 max-lg:gap-10">
            {/* FAQ Accordion */}
            <FaqAccordion />

            {/* Sidebar */}
            <div className="sticky top-24 space-y-6">
              <div className="bg-navy text-white p-7 rounded-[7px]">
                <p className="text-[12px] font-extrabold uppercase tracking-[0.14em] text-white/60 mb-3">
                  Still have questions?
                </p>
                <h3 className="text-[22px] font-extrabold">
                  We&apos;re happy to help.
                </h3>
                <p className="text-[14px] leading-[1.6] text-white/75 mt-3">
                  Give us a call — we can&apos;t take reservations over the
                  phone, but we can answer any question you have.
                </p>
                <a
                  href="tel:3867634388"
                  className="mt-5 block text-center bg-coral text-white font-extrabold text-[14px] px-6 py-[14px] hover:bg-coral-deep transition-colors duration-150 rounded-[7px]"
                >
                  386-763-4388
                </a>
                <a
                  href="mailto:fvseaspirit@gmail.com"
                  className="mt-3 block text-center border-2 border-white/30 text-white font-bold text-[13px] px-6 py-[13px] hover:border-white transition-colors duration-150 rounded-[7px]"
                >
                  fvseaspirit@gmail.com
                </a>
              </div>
              <div className="bg-surface border-2 border-ink p-7 rounded-[7px]">
                <h4 className="text-[16px] font-extrabold text-navy mb-3">
                  Ready to book?
                </h4>
                <p className="text-[14px] text-ink/70 mb-5 leading-[1.6]">
                  Reservations are online only. Live availability updates in
                  real time. Check out our{" "}
                  <a href="/fishing-charters" className="text-coral font-bold hover:underline">
                    charter options
                  </a>{" "}
                  or book directly below.
                </p>
                <a
                  href="/book-online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-coral text-white font-extrabold text-[14px] px-6 py-[14px] hover:bg-coral-deep transition-colors duration-150 rounded-[7px]"
                >
                  Book Online
                </a>
              </div>
            </div>
          </div>
        </section>

        <ClosingCTA />
        <Footer />
      </main>
    </>
  );
}
