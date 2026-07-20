"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { CalendarDays, X } from "lucide-react";
import type { FareHarborWindow } from "@/lib/fareharbor";

const FAREHARBOR_SHORTNAME = "seaspiritfishing";
const FAREHARBOR_FLOW = 139900;

type FareHarborBookingLinkProps = {
  href: string;
  itemId: number;
  tripName: string;
};

export default function FareHarborBookingLink({
  href,
  itemId,
  tripName,
}: FareHarborBookingLinkProps) {
  const [iframeHref, setIframeHref] = useState<string | null>(null);

  useEffect(() => {
    if (!iframeHref) return;

    const originalOverflow = document.body.style.overflow;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIframeHref(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [iframeHref]);

  const openBooking = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    try {
      const fareHarbor = (window as FareHarborWindow).FH;

      if (typeof fareHarbor?.open === "function") {
        const opened = fareHarbor.open({
          shortname: FAREHARBOR_SHORTNAME,
          flow: FAREHARBOR_FLOW,
          view: { item: itemId },
        });

        if (opened !== false) {
          return;
        }
      }
    } catch {
      // Fall back to our own iframe modal below.
    }

    setIframeHref(href);
  };

  return (
    <>
      <a
        href={href}
        onClick={openBooking}
        className="mt-auto inline-flex items-center justify-center gap-[9px] bg-coral text-white font-extrabold text-[15px] tracking-[0.01em] px-7 py-[17px] hover:bg-coral-deep transition-colors duration-150 rounded-[7px] w-full"
      >
        Book {tripName} <CalendarDays size={17} />
      </a>

      {iframeHref ? (
        <div
          className="fixed inset-0 z-[1000] bg-black/70 px-4 py-5 max-sm:px-2 max-sm:py-2"
          role="dialog"
          aria-modal="true"
          aria-label={`Book ${tripName}`}
        >
          <div className="mx-auto flex h-[calc(100vh-40px)] max-w-[1040px] flex-col overflow-hidden rounded-[7px] bg-white shadow-2xl max-sm:h-[calc(100vh-16px)]">
            <div className="flex h-14 shrink-0 items-center justify-between border-b border-black/10 bg-white px-5">
              <p className="text-[15px] font-extrabold text-navy">
                {tripName}
              </p>
              <button
                type="button"
                onClick={() => setIframeHref(null)}
                className="inline-flex size-9 items-center justify-center rounded-[7px] text-navy hover:bg-[#f0ece4]"
                aria-label="Close booking"
              >
                <X size={20} />
              </button>
            </div>
            <iframe
              src={iframeHref}
              title={`Book ${tripName}`}
              className="min-h-0 flex-1 border-0"
              allow="payment *; clipboard-write; fullscreen"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
