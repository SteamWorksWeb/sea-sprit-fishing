import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getSortedPosts } from "@/lib/blogData";

export default function BlogPosts() {
  // Show 3 most recent posts on homepage
  const posts = getSortedPosts().slice(0, 3);

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
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
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
                <div className="flex items-center gap-3 text-[12px] font-bold text-ink/50 tracking-[0.04em]">
                  <span>{post.date}</span>
                  <span className="text-ink/25">·</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-[19px] font-extrabold text-navy leading-[1.2]">
                  {post.title}
                </h3>
                <p className="text-[14px] leading-[1.65] text-ink/70 flex-1">{post.excerpt}</p>
                <div className="flex items-center gap-2 font-extrabold text-[13px] text-coral mt-2 border-t-2 border-ink/10 pt-4 group-hover:gap-3 transition-all duration-150">
                  Read Article <ArrowRight size={15} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Read More Articles button */}
        <div className="flex justify-center mt-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-[9px] bg-transparent text-ink font-extrabold text-[14px] tracking-[0.01em] px-7 py-[15px] border-2 border-ink hover:bg-navy hover:text-white hover:border-navy transition-colors duration-150 rounded-[7px]"
          >
            Read More Articles <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
