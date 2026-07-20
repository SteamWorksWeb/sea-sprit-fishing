"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const galleryImages = [
  {
    src: "/images/group-holding-large-snapper-haul-boat.jpg",
    alt: "Group of anglers holding a large haul of snapper on the Sea Spirit boat deck off Ponce Inlet, FL",
    span: "featured",
  },
  {
    src: "/images/father-son-holding-red-snapper.jpg",
    alt: "Father and son holding a red snapper together caught on the Sea Spirit half-day charter",
  },
  {
    src: "/images/kids-fishing-on-sea-spirit-charter.jpg",
    alt: "Kids fishing and having fun on the Sea Spirit charter boat out of Ponce Inlet, FL",
  },
  {
    src: "/images/angler-holding-large-grouper-offshore.jpg",
    alt: "Angler holding a large grouper caught offshore on the Sea Spirit deep sea fishing charter",
  },
  {
    src: "/images/family-fishing-charter-daytona-beach.jpg",
    alt: "Family together on a fishing charter trip out of Daytona Beach area at Ponce Inlet, FL",
  },
  {
    src: "/images/sea-spirit-boat-fishing-offshore-volusia.jpg",
    alt: "The Sea Spirit charter boat fishing offshore in the Atlantic Ocean off Volusia County, Florida",
  },
];

export default function PhotoGallery() {
  const [lightbox, setLightbox] = useState<{ open: boolean; index: number }>({
    open: false,
    index: 0,
  });

  const close = useCallback(() => setLightbox({ open: false, index: 0 }), []);
  const prev = useCallback(() =>
    setLightbox((l) => ({ ...l, index: (l.index - 1 + galleryImages.length) % galleryImages.length })), []);
  const next = useCallback(() =>
    setLightbox((l) => ({ ...l, index: (l.index + 1) % galleryImages.length })), []);

  useEffect(() => {
    if (!lightbox.open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox.open, close, prev, next]);

  return (
    <section id="gallery" className="px-12 py-16 bg-surface max-lg:px-8 max-lg:py-14 max-sm:px-5 max-sm:py-11">
      <div className="max-w-content mx-auto">
        {/* Heading */}
        <div className="mb-8">
          <p className="text-[12px] font-extrabold tracking-[0.16em] uppercase text-sea-deep mb-[14px]">
            From the boat
          </p>
          <h2 className="text-[40px] font-extrabold max-sm:text-[26px]">Real days. Real fish.</h2>
        </div>

        {/* Mosaic grid — fixed-height rows, zero gap fill */}
        <div
          className="grid max-sm:grid-cols-2"
          style={{
            gridTemplateColumns: "2fr 1fr 1fr",
            gridTemplateRows: "310px 310px",
            gap: "4px",
          }}
        >
          {galleryImages.map((img, i) => {
            const isFeatured = i === 0;
            return (
              <button
                key={i}
                onClick={() => setLightbox({ open: true, index: i })}
                className="group relative overflow-hidden border-0 p-0 bg-transparent cursor-zoom-in rounded-[7px]"
                style={
                  isFeatured
                    ? { gridColumn: "1", gridRow: "1 / 3" }
                    : {}
                }
                aria-label={`View photo: ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/35 transition-all duration-300 rounded-[7px]" />
                {/* Zoom hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-coral text-white text-[11px] font-extrabold tracking-[0.08em] px-3 py-[6px] rounded-[7px]">
                    View Photo
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* See More Photos button */}
        <div className="flex justify-center mt-8">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-[9px] bg-transparent text-ink font-extrabold text-[14px] tracking-[0.01em] px-7 py-[15px] border-2 border-ink hover:bg-navy hover:text-white hover:border-navy transition-colors duration-150 rounded-[7px]"
          >
            See More Photos <ArrowRight size={17} />
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox.open && (
        <div
          className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center"
          onClick={close}
        >
          {/* Image container */}
          <div
            className="relative max-w-[90vw] max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
              <Image
                src={galleryImages[lightbox.index].src}
                alt={galleryImages[lightbox.index].alt}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </div>

            {/* Caption */}
            <div className="absolute bottom-[-36px] left-0 right-0 text-center text-white/60 text-[12px] tracking-[0.04em]">
              {lightbox.index + 1} / {galleryImages.length}
            </div>
          </div>

          {/* Close */}
          <button
            onClick={close}
            className="absolute top-5 right-5 w-[44px] h-[44px] flex items-center justify-center bg-white/10 hover:bg-coral text-white transition-colors duration-150 rounded-[7px]"
            aria-label="Close lightbox"
          >
            <X size={22} />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-[48px] h-[48px] flex items-center justify-center bg-white/10 hover:bg-coral text-white transition-colors duration-150 rounded-[7px]"
            aria-label="Previous photo"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-[48px] h-[48px] flex items-center justify-center bg-white/10 hover:bg-coral text-white transition-colors duration-150 rounded-[7px]"
            aria-label="Next photo"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </section>
  );
}
