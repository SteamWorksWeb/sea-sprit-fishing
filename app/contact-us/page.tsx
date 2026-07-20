import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, ArrowRight, CalendarDays } from "lucide-react";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us | Sea Spirit Fishing — Ponce Inlet, FL",
  description:
    "Contact Sea Spirit Fishing — call us at 386-763-4388, email fvseaspirit@gmail.com, or visit us at Sea Love Marina, 4884 Front St, Ponce Inlet, FL 32127.",
  alternates: { canonical: "https://seaspiritfishing.com/contact-us" },
  openGraph: {
    title: "Contact Sea Spirit Fishing | Ponce Inlet, FL",
    description: "Call 386-763-4388 or email us. Located at Sea Love Marina, 4884 Front St, Ponce Inlet, FL 32127.",
    url: "https://seaspiritfishing.com/contact-us",
    type: "website",
    images: [{ url: "https://seaspiritfishing.com/og-image.png", width: 1200, height: 630, alt: "Sea Spirit Fishing contact — Ponce Inlet marina" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Sea Spirit Fishing | Ponce Inlet, FL",
    description: "Call 386-763-4388. Located at Sea Love Marina, Ponce Inlet, FL.",
    images: ["https://seaspiritfishing.com/og-image.png"],
  },
};

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <PageHero title="Contact Us" subtitle="Sea Spirit Fishing · Ponce Inlet, FL" />

      <section className="px-12 py-16 max-lg:px-8 max-lg:py-14 max-sm:px-5 max-sm:py-11">
        <div className="max-w-content mx-auto grid grid-cols-2 gap-16 max-lg:grid-cols-1 max-lg:gap-10">
          {/* Contact Info */}
          <div>
            <p className="text-[12px] font-extrabold tracking-[0.16em] uppercase text-sea-deep mb-[14px]">
              Reach us directly
            </p>
            <h2 className="text-[38px] font-extrabold max-sm:text-[26px]">
              Get in touch
            </h2>
            <p className="text-[16px] leading-[1.65] mt-[18px] text-ink/80 max-w-[52ch]">
              We love hearing from future guests! While reservations must be
              made online, we&apos;re always happy to answer questions by phone
              or email.
            </p>

            <div className="mt-9 space-y-5">
              <a
                href="tel:3867634388"
                className="flex items-start gap-4 group"
              >
                <span className="w-[48px] h-[48px] bg-coral text-white flex items-center justify-center flex-none rounded-[7px] group-hover:bg-coral-deep transition-colors duration-150">
                  <Phone size={20} />
                </span>
                <div>
                  <p className="text-[12px] font-extrabold uppercase tracking-[0.1em] text-sea-deep mb-1">
                    Phone
                  </p>
                  <p className="text-[17px] font-extrabold text-navy group-hover:text-coral transition-colors duration-150">
                    386-763-4388
                  </p>
                </div>
              </a>

              <a
                href="mailto:fvseaspirit@gmail.com"
                className="flex items-start gap-4 group"
              >
                <span className="w-[48px] h-[48px] bg-sea text-white flex items-center justify-center flex-none rounded-[7px] group-hover:bg-sea-deep transition-colors duration-150">
                  <Mail size={20} />
                </span>
                <div>
                  <p className="text-[12px] font-extrabold uppercase tracking-[0.1em] text-sea-deep mb-1">
                    Email
                  </p>
                  <p className="text-[17px] font-extrabold text-navy group-hover:text-coral transition-colors duration-150">
                    fvseaspirit@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://maps.app.goo.gl/kkSCuYSPAXKd3nqEA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <span className="w-[48px] h-[48px] bg-navy text-white flex items-center justify-center flex-none rounded-[7px] group-hover:bg-sea-deep transition-colors duration-150">
                  <MapPin size={20} />
                </span>
                <div>
                  <p className="text-[12px] font-extrabold uppercase tracking-[0.1em] text-sea-deep mb-1">
                    Location
                  </p>
                  <p className="text-[16px] font-extrabold text-navy group-hover:text-coral transition-colors duration-150">
                    4884 Front St
                  </p>
                  <p className="text-[14px] text-ink/70">Ponce Inlet, FL 32127</p>
                  <p className="text-[13px] text-sea-deep mt-1">Sea Love Marina</p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <span className="w-[48px] h-[48px] bg-surface border-2 border-ink text-ink flex items-center justify-center flex-none rounded-[7px]">
                  <Clock size={20} />
                </span>
                <div>
                  <p className="text-[12px] font-extrabold uppercase tracking-[0.1em] text-sea-deep mb-1">
                    Departure Times
                  </p>
                  <p className="text-[14px] font-bold text-navy">
                    Morning: 7:00am · Afternoon: 1:00pm
                  </p>
                  <p className="text-[13px] text-ink/65 mt-1">
                    Arrive 30 minutes before departure
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 bg-surface border-2 border-ink rounded-[7px]">
              <p className="text-[13px] font-extrabold text-navy mb-2">
                ⚠️ Reservations are online only
              </p>
              <p className="text-[14px] text-ink/75 leading-[1.6]">
                We cannot take bookings over the phone. All reservations must be
                completed through our online booking system. Live availability
                is shown in real time.
              </p>
              <a
                href="/book-online"
                
                className="mt-4 inline-flex items-center gap-[9px] bg-coral text-white font-extrabold text-[14px] tracking-[0.01em] px-6 py-[14px] hover:bg-coral-deep transition-colors duration-150 rounded-[7px]"
              >
                Book Online <CalendarDays size={17} />
              </a>
            </div>
          </div>

          {/* Map embed */}
          <div>
            <p className="text-[12px] font-extrabold tracking-[0.16em] uppercase text-sea-deep mb-[14px]">
              Find us
            </p>
            <h2 className="text-[38px] font-extrabold max-sm:text-[26px] mb-7">
              Sea Love Marina
            </h2>
            <div className="border-2 border-ink rounded-[7px] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3538.4867948143736!2d-80.93157752378768!3d29.093736275245025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e6d21741c2cb0b%3A0x5d32d5a33a98b46a!2sSea%20Love%20Marina!5e0!3m2!1sen!2sus!4v1699899999999!5m2!1sen!2sus"
                width="100%"
                height="440"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sea Love Marina location map"
              />
            </div>
            <a
              href="https://maps.app.goo.gl/kkSCuYSPAXKd3nqEA"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-[9px] bg-transparent text-ink font-extrabold text-[14px] tracking-[0.01em] px-6 py-[14px] border-2 border-ink hover:bg-navy hover:text-white hover:border-navy transition-colors duration-150 rounded-[7px]"
            >
              Open in Google Maps <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
