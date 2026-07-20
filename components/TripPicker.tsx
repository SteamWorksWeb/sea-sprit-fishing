import Image from "next/image";
import { Clock, Users, Gift, ArrowRight } from "lucide-react";

interface Chip {
  icon: React.ReactNode;
  label: string;
}

interface TripCardProps {
  image: string;
  imageAlt: string;
  badge?: string;
  price?: string;
  title: string;
  chips: Chip[];
  description: string;
  ctaLabel: string;
  ctaHref: string;
  ctaVariant: "primary" | "line";
}

function TripCard({
  image,
  imageAlt,
  badge,
  price,
  title,
  chips,
  description,
  ctaLabel,
  ctaHref,
  ctaVariant,
}: TripCardProps) {
  return (
    <article className="flex flex-col bg-surface border-2 border-ink transition-all duration-150 hover:-translate-y-[3px] hover:shadow-[0_10px_28px_rgba(11,39,51,0.18)] rounded-[7px] overflow-hidden">
      {/* Image area */}
      <div className="relative" style={{ aspectRatio: "16/11" }}>
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {badge && (
          <span className="absolute top-3 left-3 bg-coral text-white text-[11px] font-extrabold tracking-[0.1em] uppercase px-3 py-[7px] z-10 rounded-[5px]">
            {badge}
          </span>
        )}
        {price && (
          <div className="absolute bottom-3 right-3 bg-navy text-white px-[14px] py-2 z-10 rounded-[5px]">
            <span className="text-[10px] font-bold tracking-[0.1em] uppercase text-white/70 block leading-none">
              From
            </span>
            <span className="text-[15px] font-extrabold">{price}</span>
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="flex flex-col gap-[14px] p-6 flex-1">
        <h3 className="text-[20px] font-extrabold text-ink">{title}</h3>

        {/* Chips */}
        <div className="flex flex-wrap gap-2">
          {chips.map((chip, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-[6px] text-[12px] font-bold px-[11px] py-[6px] text-sea-deep rounded-[5px]"
              style={{ backgroundColor: "color-mix(in srgb, #0f9bb0 15%, transparent)" }}
            >
              {chip.icon}
              {chip.label}
            </span>
          ))}
        </div>

        <p className="text-[14px] leading-[1.6] text-ink/75 flex-1">{description}</p>

        <a
          href={ctaHref}
          className={`w-full inline-flex items-center justify-between font-extrabold text-[14px] tracking-[0.01em] px-6 py-[15px] border-2 transition-colors duration-150 rounded-[7px] ${
            ctaVariant === "primary"
              ? "bg-coral text-white border-transparent hover:bg-coral-deep"
              : "bg-transparent text-ink border-ink hover:bg-navy hover:text-white hover:border-navy"
          }`}
        >
          {ctaLabel} <ArrowRight size={17} />
        </a>
      </div>
    </article>
  );
}

export default function TripPicker() {
  return (
    <section id="charters" className="px-12 py-16 max-lg:px-8 max-lg:py-14 max-sm:px-5 max-sm:py-11">
      <div className="max-w-content mx-auto">
        <div>
          <p className="text-[12px] font-extrabold tracking-[0.16em] uppercase text-sea-deep mb-[14px]">
            Choose your adventure
          </p>
          <h2 className="text-[40px] font-extrabold max-w-[20ch] max-sm:text-[26px]">
            Pick your day on the water.
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-[26px] mt-[42px] max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-5 max-sm:mt-7">
          <TripCard
            image="/IMG_4256.webp"
            imageAlt="Two kids holding snapper catches on the Sea Spirit"
            badge="Most Popular"
            price="$75"
            title="Half-Day Charter"
            chips={[
              { icon: <Clock size={14} />, label: "5 Hours" },
              { icon: <Users size={14} />, label: "Ages 3+" },
              { icon: <Users size={14} />, label: "Up to 50" },
            ]}
            description="Minutes offshore and already on the reefs — snapper, seabass and triggerfish action. Morning (7am–12pm) or afternoon (1pm–6pm), most days of the week."
            ctaLabel="Book Half-Day"
            ctaHref="/book-online"
            ctaVariant="primary"
          />

          <TripCard
            image="/Half-Day-Fishing-Charter-image-4.webp"
            imageAlt="Two crew members with a large grouper on the Sea Spirit"
            price="$98.50"
            title="Full-Day Deep Sea"
            chips={[
              { icon: <Clock size={14} />, label: "9 Hours" },
              { icon: <Users size={14} />, label: "Ages 3+" },
              { icon: <Users size={14} />, label: "Up to 50" },
            ]}
            description="Run to the deeper wrecks and ledges for grouper, amberjack, cobia and mahi. The full offshore experience — Wednesdays & Saturdays, 7am–4pm."
            ctaLabel="Book Full-Day"
            ctaHref="/book-online"
            ctaVariant="primary"
          />

          <TripCard
            image="/399944413_890793816005203_1324923574226381773_n-e1701883611109.webp"
            imageAlt="Young girl with her catch at the dock, pelicans in background"
            title="Gift Cards"
            chips={[{ icon: <Gift size={14} />, label: "Any Amount" }]}
            description="Give someone the day they'll talk about for years. Choose any amount — redeemable on any charter, delivered instantly."
            ctaLabel="Buy a Gift Card"
            ctaHref="/book-online"
            ctaVariant="line"
          />
        </div>
      </div>
    </section>
  );
}
