import Image from "next/image";
import { CalendarDays, Star } from "lucide-react";

export default function Hero() {
  return (
    <header className="relative min-h-[600px] flex items-end overflow-hidden max-sm:min-h-[520px]">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/IMG_0463.webp"
          alt="Anglers with a large red snapper offshore on the Sea Spirit"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Diagonal gradient overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(105deg, rgba(8,34,43,.9) 8%, rgba(8,34,43,.5) 52%, rgba(8,34,43,.15) 100%)",
        }}
      />

      {/* Rating badge — mobile only (top-right absolute position) */}
      <div className="absolute top-[26px] right-[26px] z-[2] flex items-center gap-[9px] bg-coral text-white px-[15px] py-[10px] font-extrabold text-[13px] tracking-[0.02em] lg:hidden max-sm:top-4 max-sm:right-4 max-sm:left-4 max-sm:text-[10.5px] max-sm:py-2 max-sm:px-3 max-sm:justify-center rounded-[7px]">
        <Star size={16} fill="currentColor" />
        #1 Rated · Ponce Inlet
      </div>

      {/* Text content */}
      <div
        className="relative z-[2] max-w-[780px] text-white px-12 pb-[66px] pt-[60px] max-lg:px-8 max-lg:pb-[54px] max-lg:pt-12 max-sm:px-5 max-sm:pb-10 max-sm:pt-9 max-sm:max-w-full"
      >
        <p className="text-[12px] font-extrabold tracking-[0.16em] uppercase text-[#7fdce8] mb-[14px]">
          Deep Sea Fishing · Daytona Beach, FL
        </p>

        {/* Rating badge — desktop / landscape tablet inline position */}
        <div className="hidden lg:inline-flex items-center gap-[9px] bg-coral text-white px-[15px] py-[10px] font-extrabold text-[13px] tracking-[0.02em] mb-[18px] rounded-[7px]">
          <Star size={16} fill="currentColor" />
          #1 Rated · Ponce Inlet
        </div>

        <h1
          className="text-white font-extrabold leading-none max-sm:text-[32px]"
          style={{ fontSize: "clamp(46px, 5vw, 68px)" }}
        >
          Reel in the day you&apos;ll never forget.
        </h1>

        <p className="text-[19px] leading-[1.55] mt-[22px] max-w-[52ch] text-white/90 max-sm:text-[15.5px]">
          Half-day and full-day charters out of Ponce Inlet — big-water action
          the whole family can handle, aboard the Daytona coast&apos;s largest
          and #1-rated fishing boat.
        </p>
        <div className="flex gap-[14px] flex-wrap mt-[30px]">
          <a
            href="https://fareharbor.com/embeds/book/seaspiritfishing/items/126757/?full-items=yes&flow=139900"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-[9px] bg-coral text-white font-extrabold text-[14px] tracking-[0.01em] px-6 py-[15px] border-2 border-transparent hover:bg-coral-deep transition-colors duration-150 rounded-[7px]"
          >
            Book Your Trip <CalendarDays size={17} />
          </a>
          <a
            href="#charters"
            className="inline-flex items-center gap-[9px] bg-transparent text-white font-extrabold text-[14px] tracking-[0.01em] px-6 py-[15px] border-2 border-white/55 hover:bg-white/[0.14] hover:border-white transition-colors duration-150 rounded-[7px]"
          >
            See Trips &amp; Prices
          </a>
        </div>
      </div>
    </header>
  );
}
