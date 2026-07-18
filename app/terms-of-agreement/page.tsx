import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Agreement | Sea Spirit Fishing",
  description: "Terms of agreement for Sea Spirit Fishing charters — Ponce Inlet, FL.",
};

export default function TermsPage() {
  return (
    <main>
      <Navbar />
      <PageHero title="Terms of Agreement" subtitle="Sea Spirit Fishing" />
      <section className="px-12 py-16 max-lg:px-8 max-lg:py-14 max-sm:px-5 max-sm:py-11">
        <div className="max-w-[760px] mx-auto space-y-8">
          {[
            {
              title: "1. Reservations & Payment",
              body: "All reservations must be made online through our secure booking portal. Full payment is required at the time of booking. Sea Spirit Fishing does not accept reservations via phone or email. Prices are subject to change without notice.",
            },
            {
              title: "2. Cancellation & Refund Policy",
              body: "Cancellations made more than 48 hours prior to the scheduled departure may receive a full refund or rebooking credit. Cancellations made within 48 hours of departure are non-refundable. If Sea Spirit Fishing cancels a trip due to weather or mechanical issues, guests will receive a full refund or the option to rebook at no additional charge.",
            },
            {
              title: "3. Weather & Sea Conditions",
              body: "The final decision to sail rests solely with the Captain. If conditions are deemed unsafe, the trip will be canceled and guests will be given the option to rebook or receive a full refund. No compensation is provided for weather beyond a refund or rebook.",
            },
            {
              title: "4. Age Requirements & Minors",
              body: "All passengers must be at least 3 years of age. Guests under 18 years of age must be accompanied by a paying adult. Sea Spirit Fishing reserves the right to refuse boarding to any guest who does not comply with this policy.",
            },
            {
              title: "5. Safety & Conduct",
              body: "Closed-toed shoes are required on all trips. Guests wearing flip flops or open-toed sandals will not be permitted to board and will not receive a refund. Behavior deemed dangerous or disruptive by the Captain or crew may result in immediate removal from the vessel. No hard liquor or glass bottles are permitted.",
            },
            {
              title: "6. Fishing Regulations",
              body: "All fishing is subject to Florida Fish and Wildlife Conservation Commission (FWC) regulations. Guests may keep fish that meet size and season requirements. Sea Spirit Fishing is not responsible for fish that do not meet legal requirements. FWC fishing licenses are included in the charter price.",
            },
            {
              title: "7. Liability Waiver",
              body: "By booking a charter with Sea Spirit Fishing, guests acknowledge the inherent risks of offshore fishing and agree to hold Sea Spirit Fishing, its captains, crew, and affiliates harmless from any injury, loss, or damage arising from participation in any charter activity. Guests participate at their own risk.",
            },
            {
              title: "8. Photography & Media",
              body: "Sea Spirit Fishing may photograph or record trips for promotional purposes. By boarding the vessel, guests consent to the use of their likeness in marketing materials. Guests who do not wish to be photographed should notify a crew member before departure.",
            },
            {
              title: "9. Changes to Terms",
              body: "Sea Spirit Fishing reserves the right to update these Terms of Agreement at any time without prior notice. Continued use of our services constitutes acceptance of the current terms.",
            },
            {
              title: "10. Contact",
              body: "For questions about these terms, contact us at fvseaspirit@gmail.com or by calling 386-763-4388.",
            },
          ].map((section, i) => (
            <div key={i}>
              <h3 className="text-[18px] font-extrabold text-navy mb-3">
                {section.title}
              </h3>
              <p className="text-[15.5px] leading-[1.7] text-ink/80">
                {section.body}
              </p>
            </div>
          ))}

          <div className="border-t-2 border-ink/15 pt-8">
            <p className="text-[13px] text-ink/50">
              Last updated: July 2025. Sea Spirit Fishing · 4884 Front St, Ponce
              Inlet, FL 32127
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
