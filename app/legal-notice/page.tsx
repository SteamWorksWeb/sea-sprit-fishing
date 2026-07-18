import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Legal Notice | Sea Spirit Fishing",
  description: "Legal notice for Sea Spirit Fishing — Ponce Inlet, FL.",
};

export default function LegalNoticePage() {
  return (
    <main>
      <Navbar />
      <PageHero title="Legal Notice" subtitle="Sea Spirit Fishing" />
      <section className="px-12 py-16 max-lg:px-8 max-lg:py-14 max-sm:px-5 max-sm:py-11">
        <div className="max-w-[760px] mx-auto prose-styles">
          <h2 className="text-[28px] font-extrabold text-navy mb-6">Legal Notice</h2>
          <p className="text-[16px] leading-[1.7] text-ink/80 mb-5">
            Sea Spirit Fishing is operated by Sea Spirit, LLC, a Florida limited
            liability company. All content on this website, including but not
            limited to text, photographs, graphics, and design, is the property
            of Sea Spirit Fishing and may not be reproduced without written
            permission.
          </p>
          <p className="text-[16px] leading-[1.7] text-ink/80 mb-5">
            Sea Spirit Fishing operates under all required federal, state, and
            local licenses and permits. Our vessel is United States Coast Guard
            inspected and certified. FWC fishing licenses are included in every
            charter package.
          </p>
          <p className="text-[16px] leading-[1.7] text-ink/80 mb-5">
            All prices listed on this website are subject to change without
            notice. Online booking is the only accepted method of reservation.
            Sea Spirit Fishing reserves the right to cancel or reschedule trips
            due to weather, mechanical issues, or circumstances beyond our
            control. In such cases, guests will be offered a full refund or the
            opportunity to rebook.
          </p>
          <p className="text-[16px] leading-[1.7] text-ink/80 mb-5">
            For all legal inquiries, please contact us at:
          </p>
          <address className="not-italic text-[15px] text-ink/80 bg-surface border-2 border-ink p-6 rounded-[7px]">
            <strong>Sea Spirit Fishing</strong><br />
            Sea Love Marina<br />
            4884 Front St<br />
            Ponce Inlet, FL 32127<br />
            <a href="tel:3867634388" className="text-coral hover:underline">386-763-4388</a><br />
            <a href="mailto:fvseaspirit@gmail.com" className="text-coral hover:underline">fvseaspirit@gmail.com</a>
          </address>
        </div>
      </section>
      <Footer />
    </main>
  );
}
