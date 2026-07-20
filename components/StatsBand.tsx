const stats = [
  {
    number: "#1",
    label: "Rated charter on the Daytona & Ponce Inlet coast",
  },
  {
    number: (
      <>
        65<span className="text-[22px]"> ft</span>
      </>
    ),
    label: "The largest, steadiest boat out of the inlet",
  },
  {
    number: "48–50",
    label: "Anglers welcome aboard all trips",
  },
  {
    number: "All-in",
    label: "Rod, reel, bait & FWC license included",
  },
];

export default function StatsBand() {
  return (
    <section className="bg-navy text-white px-12 py-[54px] max-lg:px-8 max-lg:py-12 max-sm:px-5 max-sm:py-10">
      <div className="max-w-content mx-auto grid grid-cols-4 gap-8 max-lg:grid-cols-2 max-lg:gap-7 max-sm:gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="border-l-2 border-white/[0.18] pl-5"
          >
            <div className="text-[48px] font-extrabold leading-none text-coral tracking-[-0.03em] max-sm:text-[32px]">
              {stat.number}
            </div>
            <div className="text-[13px] leading-[1.4] mt-3 text-white/[0.82] font-medium max-sm:text-[12px]">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
