import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="px-12 py-16 bg-surface max-lg:px-8 max-lg:py-14 max-sm:px-5 max-sm:py-11"
    >
      <div className="max-w-content mx-auto grid grid-cols-2 gap-[52px] items-center max-lg:grid-cols-1 max-lg:gap-8">
        {/* Image */}
        <div className="relative border-2 border-ink overflow-hidden" style={{ aspectRatio: "5/4" }}>
          <Image
            src="/IMG_9574-scaled.webp"
            alt="The Sea Spirit 65ft boat at sunset at Ponce Inlet with the crew"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Copy */}
        <div>
          <p className="text-[12px] font-extrabold tracking-[0.16em] uppercase text-sea-deep mb-[14px]">
            Family owned since day one
          </p>
          <h2 className="text-[38px] font-extrabold max-w-[16ch] max-sm:text-[26px]">
            The biggest boat, the friendliest crew, the best day out.
          </h2>
          <p className="text-[16px] leading-[1.65] mt-[18px] max-w-[52ch] text-ink/80">
            Sea Spirit is the longest-running and #1-rated deep sea fishing boat
            on the Daytona Beach coast. At 65 feet, we&apos;re the largest and
            most stable ride out of Ponce Inlet — with honest prices and
            southern hospitality. We&apos;ll send you home with a cooler full of
            fish and a story worth telling.
          </p>
          <div className="flex gap-[14px] flex-wrap mt-[26px]">
            <a
              href="https://fareharbor.com/embeds/book/seaspiritfishing/items/126757/?full-items=yes&flow=139900"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[9px] bg-navy text-white font-extrabold text-[14px] tracking-[0.01em] px-6 py-[15px] border-2 border-transparent hover:bg-sea-deep transition-colors duration-150"
            >
              Book a Private Trip <ArrowRight size={17} />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-[9px] bg-transparent text-ink font-extrabold text-[14px] tracking-[0.01em] px-6 py-[15px] border-2 border-ink hover:bg-navy hover:text-white hover:border-navy transition-colors duration-150"
            >
              View the Gallery
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
