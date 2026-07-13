import { Fish, Users, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <Fish size={24} />,
    title: "Big-Game Species",
    description:
      "Mangrove & red snapper, grouper, amberjack, cobia, mahi, kingfish, seabass and more — Florida's east-coast offshore grounds are loaded.",
  },
  {
    icon: <Users size={24} />,
    title: "Expert Local Crews",
    description:
      "Avid angler or total first-timer, our friendly captains and mates bait your hook, work the best spots and keep you on fish all day long.",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Safety, Handled",
    description:
      "U.S. Coast Guard inspected and certified. High-quality gear and FWC fishing licenses are included in every single package.",
  },
];

export default function WhySeaSpirit() {
  return (
    <section className="px-12 py-16 max-lg:px-8 max-lg:py-14 max-sm:px-5 max-sm:py-11">
      <div className="max-w-content mx-auto">
        <div>
          <p className="text-[12px] font-extrabold tracking-[0.16em] uppercase text-sea-deep mb-[14px]">
            Why Sea Spirit
          </p>
          <h2 className="text-[40px] font-extrabold max-w-[20ch] max-sm:text-[26px]">
            The #1-rated charter on the coast — for a reason.
          </h2>
        </div>

        <div className="grid grid-cols-3 border-t-2 border-ink mt-10 max-lg:grid-cols-1">
          {features.map((feat, i) => (
            <div
              key={i}
              className={`py-[34px] ${
                i === 0
                  ? "px-[30px] max-lg:px-0 max-lg:py-7"
                  : "pl-[30px] border-l-2 border-ink max-lg:border-l-0 max-lg:pl-0 max-lg:border-t-2 max-lg:border-ink max-lg:py-7"
              }`}
            >
              {/* Icon tile */}
              <div className="w-[46px] h-[46px] bg-sea text-white flex items-center justify-center mb-5 rounded-[7px]">
                {feat.icon}
              </div>
              <h3 className="text-[16px] font-extrabold uppercase tracking-[0.06em] text-navy mb-[10px]">
                {feat.title}
              </h3>
              <p className="text-[14.5px] leading-[1.6] text-ink/75 max-w-[42ch]">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
