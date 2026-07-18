import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },

  // ─── 301 Redirects ──────────────────────────────────────────────────────────
  // Maps every old WordPress URL (with trailing slashes) to the new URL.
  // NOTE: No catch-all trailing-slash rule — it causes infinite redirect loops
  // on the homepage. Every redirect is listed explicitly instead.
  async redirects() {
    return [
      // ── Trailing-slash normalisation (old WordPress URLs) ──────────────────
      {
        source: "/half-day-fishing-charter/",
        destination: "/half-day-fishing-charter",
        permanent: true,
      },
      {
        source: "/full-day-fishing-charter/",
        destination: "/full-day-fishing-charter",
        permanent: true,
      },
      {
        source: "/about-us/",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/contact-us/",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/gallery/",
        destination: "/gallery",
        permanent: true,
      },
      {
        source: "/faq/",
        destination: "/faq",
        permanent: true,
      },
      {
        source: "/legal-notice/",
        destination: "/legal-notice",
        permanent: true,
      },
      {
        source: "/terms-of-agreement/",
        destination: "/terms-of-agreement",
        permanent: true,
      },
      {
        source: "/fishing-charters/",
        destination: "/fishing-charters",
        permanent: true,
      },
      {
        source: "/the-boat/",
        destination: "/the-boat",
        permanent: true,
      },
      {
        source: "/the-fish/",
        destination: "/the-fish",
        permanent: true,
      },
      {
        source: "/location/",
        destination: "/location",
        permanent: true,
      },

      // ── Removed / merged pages ─────────────────────────────────────────────
      {
        source: "/privacy-policy",
        destination: "/legal-notice",
        permanent: true,
      },
      {
        source: "/privacy-policy/",
        destination: "/legal-notice",
        permanent: true,
      },
      {
        source: "/gift-card",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/gift-card/",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/red-snapper-full-moon-night-trip-departing-at-11pm-on-july-10th",
        destination: "/fishing-charters",
        permanent: true,
      },
      {
        source: "/red-snapper-full-moon-night-trip-departing-at-11pm-on-july-10th/",
        destination: "/fishing-charters",
        permanent: true,
      },
      {
        source: "/ash-scattering",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/ash-scattering/",
        destination: "/about-us",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

