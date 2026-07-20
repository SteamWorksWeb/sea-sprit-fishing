import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClosingCTA from "@/components/ClosingCTA";
import { getPostBySlug, getSortedPosts } from "@/lib/blogData";

/* ── Static params for build-time generation ───────────────── */
export async function generateStaticParams() {
  const posts = getSortedPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

/* ── Per-post metadata ─────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not Found" };

  return {
    title: `${post.title} | Sea Spirit Fishing Blog`,
    description: post.excerpt,
    alternates: { canonical: `https://seaspiritfishing.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://seaspiritfishing.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.dateISO,
      images: [
        {
          url: `https://seaspiritfishing.com${post.image}`,
          width: 1200,
          height: 630,
          alt: post.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`https://seaspiritfishing.com${post.image}`],
    },
  };
}

/* ── Body renderer: converts markdown-style body to React ───── */
function renderBody(body: string) {
  const sections = body.split("\n\n");
  return sections.map((section, i) => {
    const trimmed = section.trim();
    if (!trimmed) return null;

    // H2 headings
    if (trimmed.startsWith("## ")) {
      return (
        <h2
          key={i}
          className="text-[24px] font-extrabold text-navy mt-10 mb-4 leading-[1.2]"
        >
          {trimmed.slice(3)}
        </h2>
      );
    }

    // Bullet lists (lines starting with "- ")
    if (trimmed.includes("\n- ") || trimmed.startsWith("- ")) {
      const items = trimmed
        .split("\n")
        .filter((l) => l.startsWith("- "))
        .map((l) => l.slice(2));
      return (
        <ul key={i} className="list-none space-y-[10px] my-5">
          {items.map((item, j) => {
            // Handle **bold** inside list items
            const parts = item.split(/(\*\*[^*]+\*\*)/g);
            return (
              <li key={j} className="flex gap-3 text-[16px] leading-[1.7] text-ink/80">
                <span className="text-coral mt-[3px] flex-shrink-0">—</span>
                <span>
                  {parts.map((part, k) =>
                    part.startsWith("**") && part.endsWith("**") ? (
                      <strong key={k} className="font-extrabold text-navy">
                        {part.slice(2, -2)}
                      </strong>
                    ) : (
                      part
                    )
                  )}
                </span>
              </li>
            );
          })}
        </ul>
      );
    }

    // Regular paragraphs — handle **bold** inline
    const parts = trimmed.split(/(\*\*[^*]+\*\*)/g);
    return (
      <p key={i} className="text-[16px] leading-[1.8] text-ink/80 mb-[18px]">
        {parts.map((part, j) =>
          part.startsWith("**") && part.endsWith("**") ? (
            <strong key={j} className="font-extrabold text-navy">
              {part.slice(2, -2)}
            </strong>
          ) : (
            part
          )
        )}
      </p>
    );
  });
}

/* ── Page component ────────────────────────────────────────── */
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getSortedPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  // 3 related posts (same category or just latest, excluding current)
  const related = allPosts
    .filter((p) => p.slug !== slug)
    .sort((a, b) => (a.category === post.category ? -1 : b.category === post.category ? 1 : 0))
    .slice(0, 3);

  return (
    <main>
      <Navbar />

      {/* Hero image */}
      <div className="relative w-full overflow-hidden" style={{ height: "480px" }}>
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/30 to-navy/70" />
        <div className="absolute bottom-0 left-0 right-0 px-12 pb-10 max-lg:px-8 max-sm:px-5">
          <div className="max-w-[860px]">
            <span className="inline-block bg-coral text-white text-[11px] font-extrabold tracking-[0.1em] uppercase px-3 py-[6px] rounded-[5px] mb-4">
              {post.category}
            </span>
            <h1 className="text-[42px] font-extrabold text-white leading-[1.1] max-lg:text-[32px] max-sm:text-[26px]">
              {post.title}
            </h1>
            <div className="flex items-center gap-5 mt-4 text-white/70 text-[13px] font-bold">
              <span className="flex items-center gap-[7px]">
                <CalendarDays size={14} />
                {post.date}
              </span>
              <span className="flex items-center gap-[7px]">
                <Clock size={14} />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Article body */}
      <article className="px-12 py-14 max-lg:px-8 max-sm:px-5">
        <div className="max-w-[860px] mx-auto">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[13px] font-extrabold text-ink/50 hover:text-coral transition-colors duration-150 mb-10"
          >
            <ArrowLeft size={14} />
            All Articles
          </Link>

          {/* Excerpt / lead */}
          <p className="text-[18px] leading-[1.7] text-ink font-medium border-l-4 border-coral pl-6 mb-10 max-sm:text-[16px]">
            {post.excerpt}
          </p>

          {/* Body content */}
          <div>{renderBody(post.body)}</div>

          {/* CTA block */}
          <div className="mt-14 bg-navy rounded-[7px] p-10 text-white text-center max-sm:p-7">
            <p className="text-[12px] font-extrabold tracking-[0.16em] uppercase text-coral mb-3">
              Ready to go fishing?
            </p>
            <h2 className="text-[28px] font-extrabold leading-[1.1] mb-4 max-sm:text-[22px]">
              Book Your Trip on the Sea Spirit
            </h2>
            <p className="text-white/70 text-[15px] mb-7 max-w-[50ch] mx-auto leading-[1.65]">
              Half-day and full-day charters departing from Ponce Inlet, FL. All gear included. All ages welcome.
            </p>
            <a
              href="https://fareharbor.com/embeds/book/seaspiritfishing/?full-items=yes&flow=1065391"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[9px] bg-coral text-white font-extrabold text-[14px] tracking-[0.01em] px-7 py-[15px] hover:bg-coral-deep transition-colors duration-150 rounded-[7px]"
            >
              Book Online <CalendarDays size={16} />
            </a>
          </div>

          {/* Prev / Next navigation */}
          {(prevPost || nextPost) && (
            <nav className="flex items-start justify-between gap-6 mt-12 pt-10 border-t-2 border-ink/10 max-sm:flex-col">
              {prevPost ? (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="group flex flex-col gap-1 max-w-[45%] max-sm:max-w-full"
                >
                  <span className="flex items-center gap-2 text-[12px] font-extrabold uppercase tracking-[0.1em] text-ink/40 group-hover:text-coral transition-colors">
                    <ArrowLeft size={12} /> Older
                  </span>
                  <span className="text-[15px] font-extrabold text-navy group-hover:text-coral transition-colors leading-[1.2]">
                    {prevPost.title}
                  </span>
                </Link>
              ) : <div />}
              {nextPost && (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="group flex flex-col gap-1 text-right max-w-[45%] max-sm:max-w-full max-sm:text-left"
                >
                  <span className="flex items-center justify-end gap-2 text-[12px] font-extrabold uppercase tracking-[0.1em] text-ink/40 group-hover:text-coral transition-colors max-sm:justify-start">
                    Newer <ArrowRight size={12} />
                  </span>
                  <span className="text-[15px] font-extrabold text-navy group-hover:text-coral transition-colors leading-[1.2]">
                    {nextPost.title}
                  </span>
                </Link>
              )}
            </nav>
          )}
        </div>
      </article>

      {/* Related posts */}
      <section className="px-12 py-14 bg-[#f5f1eb] max-lg:px-8 max-sm:px-5">
        <div className="max-w-content mx-auto">
          <h2 className="text-[26px] font-extrabold mb-8">More from the crew</h2>
          <div className="grid grid-cols-3 gap-[22px] max-lg:grid-cols-2 max-sm:grid-cols-1">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group flex flex-col border-2 border-ink bg-white rounded-[7px] overflow-hidden transition-all duration-150 hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(11,39,51,0.14)]"
              >
                <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
                  <Image
                    src={p.image}
                    alt={p.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <span className="absolute top-3 left-3 bg-navy text-white text-[10px] font-extrabold tracking-[0.1em] uppercase px-3 py-[6px] z-10 rounded-[5px]">
                    {p.category}
                  </span>
                </div>
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <span className="text-[12px] font-bold text-ink/40">{p.date}</span>
                  <h3 className="text-[16px] font-extrabold text-navy leading-[1.25] group-hover:text-coral transition-colors">
                    {p.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[12px] font-extrabold text-coral mt-auto pt-3 border-t border-ink/10 group-hover:gap-3 transition-all duration-150">
                    Read Article <ArrowRight size={13} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA />
      <Footer />
    </main>
  );
}
