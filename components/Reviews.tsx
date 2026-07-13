import { Star } from "lucide-react";

const reviews = [
  {
    title: "We'll Be Back!",
    quote:
      "What an amazing morning. This is a great crew that hustles the entire time to keep you fishing. We will be repeat customers.",
    author: "Scott G., Tripadvisor",
  },
  {
    title: "Amazing!",
    quote:
      "Reed and Jeremy are amazing — so kind, helpful and funny. We went out with my 4 daughters and they made wonderful memories for them.",
    author: "kristalheller, Tripadvisor",
  },
  {
    title: "Outstanding!",
    quote:
      "Half-day deep sea fishing with my husband. All kinds of fish were caught! We saw dolphins, sharks and many beautiful fish.",
    author: "Laura A., Tripadvisor",
  },
];

function StarRow() {
  return (
    <div className="flex gap-[3px] text-coral">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={18} fill="currentColor" />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="px-12 py-16 max-lg:px-8 max-lg:py-14 max-sm:px-5 max-sm:py-11">
      <div className="max-w-content mx-auto">
        {/* Heading row */}
        <div className="flex justify-between items-end flex-wrap gap-4">
          <div>
            <p className="text-[12px] font-extrabold tracking-[0.16em] uppercase text-sea-deep mb-[14px]">
              5 Stars on Tripadvisor
            </p>
            <h2 className="text-[40px] font-extrabold max-w-[20ch] max-sm:text-[26px]">
              Guests keep coming back.
            </h2>
          </div>
          <StarRow />
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-3 gap-6 mt-9 max-lg:grid-cols-1 max-lg:gap-5 max-sm:gap-5">
          {reviews.map((rev, i) => (
            <div
              key={i}
              className="bg-white border-2 border-ink p-[26px] flex flex-col gap-[14px] transition-shadow duration-150 hover:shadow-[0_8px_22px_rgba(11,39,51,0.14)] rounded-[7px]"
            >
              <StarRow />
              <h4 className="text-[16px] font-extrabold text-navy">{rev.title}</h4>
              <p className="text-[14.5px] leading-[1.6] flex-1 text-ink/[0.82]">
                &ldquo;{rev.quote}&rdquo;
              </p>
              <div className="text-[12.5px] font-bold text-sea-deep tracking-[0.02em]">
                — {rev.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
