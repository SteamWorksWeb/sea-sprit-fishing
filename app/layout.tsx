import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-archivo-var",
  display: "swap",
});

const SITE_URL = "https://seaspiritfishing.com";
const SITE_NAME = "Sea Spirit Fishing";
const OG_IMAGE = `${SITE_URL}/images/social.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sea Spirit Fishing | #1 Rated Charter — Ponce Inlet, Daytona Beach",
    template: "%s | Sea Spirit Fishing",
  },
  description:
    "Half-day and full-day deep sea fishing charters out of Ponce Inlet, FL. The Daytona coast's largest boat, friendliest crew, and #1-rated fishing experience. Book your trip today.",
  keywords: [
    "Sea Spirit Fishing",
    "Ponce Inlet fishing charter",
    "Daytona Beach fishing charter",
    "deep sea fishing Florida",
    "half day fishing charter Florida",
    "full day fishing charter",
    "party fishing boat Daytona",
    "Ponce Inlet boat charter",
    "offshore fishing Volusia County",
  ],
  authors: [{ name: "Sea Spirit Fishing" }],
  creator: "Sea Spirit Fishing",
  publisher: "Sea Spirit Fishing",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Sea Spirit Fishing | #1 Rated Charter — Ponce Inlet, FL",
    description:
      "Half-day and full-day deep sea fishing charters out of Ponce Inlet. The biggest boat, the friendliest crew, the best day out.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Sea Spirit Fishing — #1 Rated Charter out of Ponce Inlet, FL near Daytona Beach",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sea Spirit Fishing | #1 Rated Charter — Ponce Inlet, FL",
    description:
      "Half-day and full-day deep sea fishing charters out of Ponce Inlet, FL. Book your trip today.",
    images: [OG_IMAGE],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "manifest", url: "/site.webmanifest" },
    ],
  },
  manifest: "/site.webmanifest",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "@id": `${SITE_URL}/#business`,
  name: "Sea Spirit Fishing",
  alternateName: "Sea Spirit Fishing Charters",
  description:
    "Half-day and full-day deep sea fishing charters out of Ponce Inlet, FL. The #1-rated fishing charter near Daytona Beach. Family owned and operated.",
  url: SITE_URL,
  telephone: "+13867634388",
  email: "fvseaspirit@gmail.com",
  image: OG_IMAGE,
  logo: OG_IMAGE,
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4884 Front St",
    addressLocality: "Ponce Inlet",
    addressRegion: "FL",
    postalCode: "32127",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 29.0937,
    longitude: -80.9316,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Thursday", "Friday"],
      opens: "06:30",
      closes: "18:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Wednesday", "Saturday"],
      opens: "06:30",
      closes: "17:30",
    },
  ],
  hasMap: "https://maps.app.goo.gl/kkSCuYSPAXKd3nqEA",
  sameAs: [
    "https://www.facebook.com/seaspiritfishingtours/",
    "https://www.instagram.com/seaspiritfishing/",
    "https://www.tripadvisor.com/Attraction_Review-g658215-d647105-Reviews-Sea_Spirit-Ponce_Inlet_Florida.html",
  ],
  offers: [
    {
      "@type": "Offer",
      name: "Half-Day Fishing Charter",
      description: "5-hour offshore fishing trip, 10–15 miles offshore. Includes rods, bait, license, and fish cleaning.",
      price: "80",
      priceCurrency: "USD",
      url: `${SITE_URL}/half-day-fishing-charter`,
    },
    {
      "@type": "Offer",
      name: "Full-Day Fishing Charter",
      description: "10-hour offshore fishing trip, 20–30 miles offshore. Includes rods, bait, license, and fish cleaning.",
      price: "140",
      priceCurrency: "USD",
      url: `${SITE_URL}/full-day-fishing-charter`,
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "800",
    bestRating: "5",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={archivo.variable}>
      <head>
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="font-archivo">{children}</body>
    </html>
  );
}
