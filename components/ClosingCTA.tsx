import { ArrowRight, Phone } from "lucide-react";

export default function ClosingCTA() {
  return (
    <section className="bg-coral text-white px-12 py-[78px] max-lg:px-8 max-lg:py-16 max-sm:px-5 max-sm:py-[52px]">
      <div className="max-w-content mx-auto">
        <p className="text-[12px] font-extrabold tracking-[0.16em] uppercase text-white/85 mb-[14px]">
          Live Availability · Book in Minutes
        </p>
        <h2
          className="font-extrabold text-white max-w-[16ch] max-sm:text-[28px]"
          style={{ fontSize: "clamp(38px, 4vw, 54px)" }}
        >
          Your next big catch is waiting.
        </h2>
        <p className="text-[18px] mt-[18px] max-w-[52ch] text-white/88 max-sm:text-[16px]">
          Mornings and afternoons open all week. Grab your spot on the Sea
          Spirit before the good days are gone.
        </p>
        <div className="flex gap-4 flex-wrap mt-8 items-center max-sm:flex-col max-sm:items-start max-sm:gap-[18px]">
          <a
            href="https://fareharbor.com/embeds/book/seaspiritfishing/items/126757/?full-items=yes&flow=139900"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-[9px] bg-white text-coral font-extrabold text-[14px] tracking-[0.01em] px-6 py-[15px] border-2 border-white hover:bg-white/90 transition-colors duration-150 rounded-[7px]"
          >
            Book Online Now <ArrowRight size={17} />
          </a>
          <a
            href="tel:3867634388"
            className="inline-flex items-center gap-[9px] font-extrabold text-[16px] text-white hover:text-sand transition-colors duration-150"
          >
            <Phone size={18} /> 386-763-4388
          </a>
        </div>
      </div>
    </section>
  );
}
