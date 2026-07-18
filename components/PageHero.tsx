interface PageHeroProps {
  title: string;
  subtitle?: string;
  bg?: string;
}

export default function PageHero({ title, subtitle, bg = "bg-navy" }: PageHeroProps) {
  return (
    <section
      className={`${bg} text-white px-12 pt-[120px] pb-[64px] max-lg:px-8 max-lg:pt-[100px] max-lg:pb-[52px] max-sm:px-5 max-sm:pt-[88px] max-sm:pb-10`}
    >
      <div className="max-w-content mx-auto">
        {subtitle && (
          <p className="text-[12px] font-extrabold tracking-[0.16em] uppercase text-white/60 mb-[14px]">
            {subtitle}
          </p>
        )}
        <h1
          className="font-extrabold text-white leading-none"
          style={{ fontSize: "clamp(38px, 5vw, 62px)" }}
        >
          {title}
        </h1>
      </div>
    </section>
  );
}
