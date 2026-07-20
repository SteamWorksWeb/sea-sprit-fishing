"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getSortedPosts, getCategories } from "@/lib/blogData";

export default function BlogIndexClient() {
  const allPosts = getSortedPosts();
  const categories = ["All", ...getCategories()];
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? allPosts
      : allPosts.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Category filter tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-[10px] text-[13px] font-extrabold tracking-[0.06em] uppercase border-2 rounded-[7px] transition-colors duration-150 ${
              activeCategory === cat
                ? "bg-navy text-white border-navy"
                : "bg-transparent text-ink border-ink/30 hover:border-navy hover:text-navy"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Post grid */}
      <div className="grid grid-cols-3 gap-[26px] max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-5">
        {filtered.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col border-2 border-ink bg-white transition-all duration-150 hover:-translate-y-[3px] hover:shadow-[0_10px_28px_rgba(11,39,51,0.18)] rounded-[7px] overflow-hidden"
          >
            {/* Cover */}
            <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <span className="absolute top-3 left-3 bg-navy text-white text-[11px] font-extrabold tracking-[0.1em] uppercase px-3 py-[7px] z-10 rounded-[5px]">
                {post.category}
              </span>
            </div>

            {/* Body */}
            <div className="flex flex-col flex-1 p-6 gap-3">
              <div className="flex items-center gap-3 text-[12px] font-bold text-ink/50 tracking-[0.04em]">
                <span>{post.date}</span>
                <span className="text-ink/25">·</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-[18px] font-extrabold text-navy leading-[1.25]">
                {post.title}
              </h2>
              <p className="text-[14px] leading-[1.65] text-ink/70 flex-1">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-2 font-extrabold text-[13px] text-coral mt-2 border-t-2 border-ink/10 pt-4 group-hover:gap-3 transition-all duration-150">
                Read Article <ArrowRight size={15} />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-ink/60 text-[16px] py-10">
          No posts in this category yet — check back soon.
        </p>
      )}
    </>
  );
}
