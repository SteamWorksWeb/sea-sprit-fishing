"use client";

import { useEffect, useRef } from "react";

export default function FareHarborWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clean up any previous instance
    containerRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://fareharbor.com/embeds/script/items/seaspiritfishing/?full-items=yes&flow=139900&fallback=simple";
    script.async = true;

    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-[400px] w-full"
      id="fareharbor-embed-container"
    />
  );
}
