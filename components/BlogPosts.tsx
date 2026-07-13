import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    image: "/IMG_0465.webp",
    imageAlt: "Angler holding a large red drum caught off Ponce Inlet",
    category: "Fishing Tips",
    date: "June 28, 2026",
    title: "Best Times to Fish Off Ponce Inlet All Year",
    excerpt:
      "Spring and fall bring the hottest action off the Volusia coast — but the Sea Spirit runs trips all year. Here's what to target by season and why some of our best days happen in January.",
  },
  {
    image: "/438225079_1003674841383766_827103422273945656_n.webp",
    imageAlt: "A massive haul of snapper and reef fish spread across the deck of the Sea Spirit",
    category: "Trip Reports",
    date: "June 14, 2026",
    title: "What to Expect on Your First Deep Sea Charter",
    excerpt:
      "Never been offshore? Here's everything first-timers ask before boarding — what to wear, what to bring, when to be at the dock, and why the 7am departure time is not negotiable.",
  },
  {
    image: "/IMG_0323.webp",
    imageAlt: "Happy angler with a beautiful snapper on the Sea Spirit",
    category: "Seasonal",
    date: "May 30, 2026",
    title: "Red Snapper Season on Florida's East Coast: Your Guide",
    excerpt:
      "Red snapper season is one of the most anticipated events on the Daytona Beach calendar. Learn the dates, limits, regulations, and why the Sea Spirit's reef access puts you right on them every trip.",
  },
];

export default function BlogPosts() {
  return (
    <section className="px-12 py-16 max-lg:px-8 max-lg:py-14 max-sm:px-5 max-sm:py-11">
      <div className="max-w-content mx-auto">
        {/* Section heading */}
        <div className="mb-10">
          <p className="text-[12px] font-extrabold tracking-[0.16em] uppercase text-sea-deep mb-[14px]">
            From the crew
          </p>
          <h2 className="text-[40px] font-extrabold max-w-[20ch] max-sm:text-[26px]">
            Tips, reports &amp; stories.
          </h2>
        </div>

        {/* Blog cards */}
        <div className="grid grid-cols-3 gap-[26px] max-lg:grid-cols-1 max-sm:gap-5">
          {posts.map((post, i) => (
            <article
              key={i}
              className="group flex flex-col border-2 border-ink bg-white transition-all duration-150 hover:-translate-y-[3px] hover:shadow-[0_10px_28px_rgba(11,39,51,0.18)] cursor-pointer rounded-[7px] overflow-hidden"
            >
              {/* Cover image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                {/* Category badge */}
                <span className="absolute top-3 left-3 bg-navy text-white text-[11px] font-extrabold tracking-[0.1em] uppercase px-3 py-[7px] z-10 rounded-[5px]">
                  {post.category}
                </span>
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 p-6 gap-3">
                <span className="text-[12px] font-bold text-ink/50 tracking-[0.04em]">{post.date}</span>
                <h3 className="text-[19px] font-extrabold text-navy leading-[1.2]">
                  {post.title}
                </h3>
                <p className="text-[14px] leading-[1.65] text-ink/70 flex-1">{post.excerpt}</p>
                <div className="flex items-center gap-2 font-extrabold text-[13px] text-coral mt-2 border-t-2 border-ink/10 pt-4 group-hover:gap-3 transition-all duration-150">
                  Read Article <ArrowRight size={15} />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Read More Articles button */}
        <div className="flex justify-center mt-10">
          <Link
            href="#"
            className="inline-flex items-center gap-[9px] bg-transparent text-ink font-extrabold text-[14px] tracking-[0.01em] px-7 py-[15px] border-2 border-ink hover:bg-navy hover:text-white hover:border-navy transition-colors duration-150 rounded-[7px]"
          >
            Read More Articles <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
