"use client";

import { useEffect } from "react";

const SHORTNAME = "seaspiritfishing";

/**
 * Re-calls FH.autoLightframe({ shortname }) on every Next.js client-side
 * navigation so FareHarbor's Lightframe overlay intercepts booking link
 * clicks correctly on a SPA. The global script in layout.tsx handles the
 * initial hard-load; this handles subsequent in-app navigation.
 */
export default function FareHarborInit() {
  useEffect(() => {
    const initLightframe = () => {
      if (typeof window !== "undefined" && (window as any).FH) {
        (window as any).FH.autoLightframe({ shortname: SHORTNAME });
      }
    };

    // If FH is already available (client-side nav after hard load)
    initLightframe();

    // Poll briefly in case the script hasn't fully executed yet
    let attempts = 0;
    const interval = setInterval(() => {
      if (typeof window !== "undefined" && (window as any).FH) {
        (window as any).FH.autoLightframe({ shortname: SHORTNAME });
        clearInterval(interval);
      }
      attempts++;
      if (attempts > 20) clearInterval(interval); // stop after 4 seconds
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return null;
}
