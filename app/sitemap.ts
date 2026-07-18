import { MetadataRoute } from "next";

const SITE_URL = "https://seaspiritfishing.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/fishing-charters", priority: 0.95, changeFrequency: "weekly" as const },
    { url: "/half-day-fishing-charter", priority: 0.95, changeFrequency: "weekly" as const },
    { url: "/full-day-fishing-charter", priority: 0.95, changeFrequency: "weekly" as const },
    { url: "/the-fish", priority: 0.85, changeFrequency: "monthly" as const },
    { url: "/about-us", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/the-boat", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/location", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/gallery", priority: 0.75, changeFrequency: "monthly" as const },
    { url: "/faq", priority: 0.75, changeFrequency: "monthly" as const },
    { url: "/contact-us", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/legal-notice", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/terms-of-agreement", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return pages.map(({ url, priority, changeFrequency }) => ({
    url: `${SITE_URL}${url}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
