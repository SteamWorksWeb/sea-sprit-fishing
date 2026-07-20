"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export const photos = [
  { src: "/IMG_0463.webp", alt: "Anglers holding a large haul of snapper and grouper caught on the Sea Spirit fishing charter out of Ponce Inlet, FL", caption: "Happy anglers with their catch" },
  { src: "/images/happy-angler-red-snapper-offshore-catch.jpg", alt: "Happy angler holding a large red snapper caught offshore on the Sea Spirit charter out of Ponce Inlet, FL", caption: "Red snapper offshore catch" },
  { src: "/images/smiling-family-holding-fish-charter-boat.jpg", alt: "Smiling family holding their fish catch on the Sea Spirit fishing charter boat near Daytona Beach", caption: "Family day on the water" },
  { src: "/images/angler-showing-red-snapper-catch.jpg", alt: "Angler proudly showing a red snapper caught on a deep sea charter out of Ponce Inlet, Florida", caption: "Perfect red snapper" },
  { src: "/images/kids-fishing-on-sea-spirit-charter.jpg", alt: "Kids fishing and having fun on the Sea Spirit charter boat out of Ponce Inlet, FL", caption: "Kids love the Sea Spirit" },
  { src: "/images/anglers-with-grouper-snapper-catch-deck.jpg", alt: "Anglers on deck holding a mix of grouper and snapper caught offshore on the Sea Spirit", caption: "Grouper & snapper mixed bag" },
  { src: "/images/full-catch-grouper-snapper-on-boat.jpg", alt: "Full catch of grouper and snapper displayed on the Sea Spirit charter boat deck", caption: "Full catch on deck" },
  { src: "/images/family-fishing-charter-daytona-beach.jpg", alt: "Family together on a fishing charter trip out of Daytona Beach area at Ponce Inlet, FL", caption: "Family charter out of Daytona" },
  { src: "/images/angler-holding-large-grouper-offshore.jpg", alt: "Angler holding a large grouper caught offshore on the Sea Spirit deep sea fishing charter", caption: "Big grouper offshore" },
  { src: "/images/couple-with-snapper-catch-fishing-charter.jpg", alt: "Couple smiling with their snapper catch on a Sea Spirit fishing charter trip", caption: "Couples trip on the Sea Spirit" },
  { src: "/images/father-son-holding-red-snapper.jpg", alt: "Father and son holding a red snapper together caught on the Sea Spirit half-day charter", caption: "Father & son red snapper" },
  { src: "/images/boy-with-first-fish-catch-boat.jpg", alt: "Young boy holding his first fish catch on the Sea Spirit fishing charter boat", caption: "First catch ever!" },
  { src: "/images/multiple-anglers-snapper-grouper-catch.jpg", alt: "Multiple anglers together holding snapper and grouper caught on the Sea Spirit fishing charter", caption: "Group haul of snapper & grouper" },
  { src: "/images/young-angler-with-snapper-fishing-charter.jpg", alt: "Young angler showing off a snapper caught on the Sea Spirit deep sea charter out of Ponce Inlet", caption: "Young angler's first snapper" },
  { src: "/images/fishing-charter-crew-ponce-inlet-dock.jpg", alt: "Sea Spirit fishing charter crew at the dock at Sea Love Marina in Ponce Inlet, Florida", caption: "The Sea Spirit crew at the dock" },
  { src: "/images/sea-spirit-boat-fishing-offshore-volusia.jpg", alt: "The Sea Spirit charter boat fishing offshore in the Atlantic Ocean off Volusia County, Florida", caption: "Offshore on the Atlantic" },
  { src: "/images/anglers-bottom-fishing-offshore-daytona.jpg", alt: "Anglers bottom fishing offshore out of Daytona Beach on the Sea Spirit charter", caption: "Bottom fishing offshore" },
  { src: "/images/kids-first-catch-sea-spirit-fishing.jpg", alt: "Kids holding their first catch of the day on the Sea Spirit fishing charter", caption: "Kids' first catch!" },
  { src: "/images/adult-child-holding-snapper-catch.jpg", alt: "Adult and child together holding a snapper caught on the Sea Spirit charter trip", caption: "Sharing the catch" },
  { src: "/images/group-holding-large-snapper-haul-boat.jpg", alt: "Group of anglers holding a large haul of snapper on the Sea Spirit boat deck", caption: "Monster snapper haul" },
  { src: "/images/charter-trip-catch-snapper-grouper-mixed.jpg", alt: "Mixed catch of snapper and grouper from a charter trip on the Sea Spirit out of Ponce Inlet", caption: "Mixed bag — snapper & grouper" },
  { src: "/images/child-holding-large-striped-bass-catch.jpg", alt: "Child holding a large striped bass caught on the Sea Spirit fishing charter", caption: "Big catch for a little angler" },
  { src: "/images/family-striped-bass-catch-dock.jpg", alt: "Family at the dock with striped bass caught on their Sea Spirit charter trip", caption: "Family dock catch" },
  { src: "/images/group-charter-striped-bass-catches.jpg", alt: "Charter group showing off their striped bass catches on the Sea Spirit", caption: "Group striped bass trip" },
  { src: "/images/dockside-striped-bass-and-sea-bass-catch.jpg", alt: "Dockside photo of striped bass and sea bass caught on the Sea Spirit charter", caption: "Dockside mixed catch" },
  { src: "/images/kids-and-adult-striped-bass-boat-catch.jpg", alt: "Kids and an adult together holding striped bass on the Sea Spirit boat", caption: "Family striped bass catch" },
  { src: "/images/large-group-charter-fishing-catch.jpg", alt: "Large group of anglers on a Sea Spirit fishing charter displaying their catch", caption: "Full boat charter crew" },
  { src: "/images/huge-striped-bass-catch-with-kids.jpg", alt: "Kids proudly showing a huge striped bass catch on the Sea Spirit fishing charter", caption: "Trophy bass with the kids" },
  { src: "/images/kids-striped-bass-fishing-charter-catch.jpg", alt: "Kids on the Sea Spirit fishing charter holding striped bass catches", caption: "Kids on the charter" },
  { src: "/images/family-charter-fishing-catches-boat.jpg", alt: "Family on the Sea Spirit charter boat showing off their fishing catches", caption: "Family catches on the boat" },
  { src: "/images/anglers-striped-bass-sea-bass-catches.jpg", alt: "Anglers holding striped bass and sea bass caught on the Sea Spirit charter", caption: "Striped bass & sea bass" },
  { src: "/images/angler-with-large-striped-bass.jpg", alt: "Angler holding a large striped bass caught on the Sea Spirit deep sea fishing charter", caption: "Trophy striped bass" },
  { src: "/images/teen-angler-striped-bass-catch.jpg", alt: "Teen angler proudly holding a striped bass caught on the Sea Spirit fishing charter", caption: "Teen angler's big catch" },
  { src: "/images/teenager-holding-striped-bass-boat-catch.jpg", alt: "Teenager holding a striped bass on the deck of the Sea Spirit charter boat", caption: "Teenager's first striped bass" },
  { src: "/images/three-anglers-striped-bass-boat-catches.jpg", alt: "Three anglers together holding striped bass caught on the Sea Spirit", caption: "Three anglers, three bass" },
  { src: "/images/boy-holding-large-striped-bass-boat.jpg", alt: "Boy holding a large striped bass on the Sea Spirit charter boat deck", caption: "Boy's trophy striped bass" },
  { src: "/images/teen-boy-striped-bass-fishing-catch.jpg", alt: "Teen boy with a striped bass catch on the Sea Spirit fishing charter out of Ponce Inlet", caption: "Teen boy's striped bass" },
  { src: "/images/close-up-striped-bass-catch-boat.jpg", alt: "Close-up of a striped bass catch on the Sea Spirit fishing charter boat", caption: "Close-up: striped bass" },
  { src: "/IMG_4256.webp", alt: "Kids posing with their snapper catch on the Sea Spirit half-day charter near Daytona Beach", caption: "Kids enjoying the half-day charter" },
  { src: "/IMG_9574-scaled.webp", alt: "The Sea Spirit 65ft fishing charter boat docked at Sea Love Marina in Ponce Inlet, FL", caption: "The Sea Spirit at the marina" },
  { src: "/Half-Day-Fishing-Charter-image-4.webp", alt: "Captain and crew holding a large grouper on a full-day deep sea charter from Ponce Inlet, FL", caption: "Full-day deep sea haul" },
  { src: "/438225079_1003674841383766_827103422273945656_n.webp", alt: "Sea Spirit charter boat at golden hour sunset on the Atlantic Ocean off Ponce Inlet, Florida", caption: "Sunset on the Atlantic" },
  { src: "/IMG_0323.webp", alt: "Angler holding a red snapper caught offshore on the Sea Spirit near Daytona Beach", caption: "Red snapper season action" },
  { src: "/IMG_0465.webp", alt: "Angler holding a large fish caught on the Sea Spirit deep sea fishing charter", caption: "Offshore species — full-day trip" },
  { src: "/399944413_890793816005203_1324923574226381773_n-e1701883611109.webp", alt: "Young girl smiling with her catch at the Sea Love Marina dock in Ponce Inlet, FL", caption: "Memories made at the dock" },
  { src: "/images/sea-spirit-fishing-boat-ponce-inlet.jpg", alt: "The Sea Spirit fishing charter boat at Ponce Inlet marina, Daytona Beach area, Florida", caption: "The Sea Spirit at Ponce Inlet" },
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
