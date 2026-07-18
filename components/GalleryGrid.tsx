"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export const photos = [
  {
    src: "/IMG_0463.webp",
    alt: "Anglers holding a large haul of snapper and grouper caught on the Sea Spirit fishing charter out of Ponce Inlet, FL",
    caption: "Happy anglers with their catch",
  },
  {
    src: "/IMG_4256.webp",
    alt: "Kids posing with their snapper catch on the Sea Spirit half-day charter near Daytona Beach",
    caption: "Kids enjoying the half-day charter",
  },
  {
    src: "/IMG_9574-scaled.webp",
    alt: "The Sea Spirit 65ft fishing charter boat docked at Sea Love Marina in Ponce Inlet, FL",
    caption: "The Sea Spirit — 65ft, U.S. Coast Guard certified",
  },
  {
    src: "/Half-Day-Fishing-Charter-image-4.webp",
    alt: "Captain and crew holding a large grouper caught on a full-day deep sea charter from Ponce Inlet, FL",
    caption: "Full-day deep sea haul",
  },
  {
    src: "/438225079_1003674841383766_827103422273945656_n.webp",
    alt: "Sea Spirit charter boat at golden hour sunset on the Atlantic Ocean off Ponce Inlet, Florida",
    caption: "Sunset on the Atlantic",
  },
  {
    src: "/IMG_0323.webp",
    alt: "Angler holding a beautiful red snapper caught offshore on the Sea Spirit near Daytona Beach",
    caption: "Red snapper season action",
  },
  {
    src: "/IMG_0465.webp",
    alt: "Angler holding a large fish caught on the Sea Spirit deep sea fishing charter",
    caption: "Offshore species caught on a full-day trip",
  },
  {
    src: "/399944413_890793816005203_1324923574226381773_n-e1701883611109.webp",
    alt: "Young girl smiling with her catch at the Sea Love Marina dock in Ponce Inlet, FL, pelicans in the background",
    caption: "Memories made at the dock",
  },
];

export default function GalleryGrid() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const prev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + photos.length) % photos.length);
  };

  const next = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % photos.length);
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-4 mt-10 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-3">
        {photos.map((photo, i) => (
          <button
            key={i}
            onClick={() => setLightboxIndex(i)}
            className="group relative border-2 border-ink overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-coral rounded-[7px]"
            style={{ aspectRatio: "4/3" }}
            aria-label={`View photo: ${photo.caption}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/60 transition-all duration-300 flex items-end">
              <p className="text-white text-[13px] font-bold px-4 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                {photo.caption}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-5 right-5 text-white hover:text-coral transition-colors"
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-white hover:text-coral transition-colors bg-black/40 p-3 rounded-full"
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-5 top-1/2 -translate-y-1/2 text-white hover:text-coral transition-colors bg-black/40 p-3 rounded-full"
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>
          <div
            className="relative max-w-4xl w-full"
            style={{ aspectRatio: "4/3" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[lightboxIndex].src}
              alt={photos[lightboxIndex].alt}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
            <p className="absolute bottom-0 left-0 right-0 text-center text-white text-[14px] font-bold py-3 bg-black/50">
              {photos[lightboxIndex].caption}
            </p>
          </div>
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/60 text-[12px]">
            {lightboxIndex + 1} / {photos.length}
          </p>
        </div>
      )}
    </>
  );
}
