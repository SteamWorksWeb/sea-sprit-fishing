"use client";

import { useEffect } from "react";

/**
 * Calls window.FH.autoLightframe() after mount so that FareHarbor's
 * Lightframe API intercepts booking links on Next.js SPA navigations.
 * The global Lightframe script in layout.tsx handles hard page loads;
 * this component handles client-side navigation.
 */
export default function FareHarborInit() {
  useEffect(() => {
    const init = () => {
      if (typeof window !== "undefined" && (window as any).FH) {
        (window as any).FH.autoLightframe();
      }
    };

    // If FH is already loaded (hard load), call immediately
    init();

    // If FH hasn't loaded yet (client nav), poll briefly
    const interval = setInterval(() => {
      if (typeof window !== "undefined" && (window as any).FH) {
        (window as any).FH.autoLightframe();
        clearInterval(interval);
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return null;
}
