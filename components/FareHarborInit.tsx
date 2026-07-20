"use client";

import { useEffect } from "react";

/**
 * Re-calls FH.autoLightframe() on mount so FareHarbor's Lightframe
 * overlay intercepts booking link clicks after Next.js client-side
 * navigation. The global ?autolightframe=yes script in layout.tsx
 * handles initial hard-load scans automatically.
 */
export default function FareHarborInit() {
  useEffect(() => {
    const initLightframe = () => {
      if (typeof window !== "undefined" && (window as any).FH) {
        (window as any).FH.autoLightframe();
        return true;
      }
      return false;
    };

    if (initLightframe()) return;

    // Poll until FH script loads (in case of slow network)
    let attempts = 0;
    const interval = setInterval(() => {
      if (initLightframe() || ++attempts > 20) {
        clearInterval(interval);
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return null;
}
