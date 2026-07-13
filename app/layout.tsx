import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-archivo-var",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sea Spirit Fishing | #1 Rated Charter — Ponce Inlet, Daytona Beach",
  description:
    "Half-day and full-day deep sea fishing charters out of Ponce Inlet, FL. The Daytona coast's largest boat, friendliest crew, and #1-rated fishing experience. Book your trip today.",
  keywords:
    "Sea Spirit Fishing, Ponce Inlet fishing charter, Daytona Beach fishing, deep sea fishing, half day charter, full day charter, Florida fishing",
  openGraph: {
    title: "Sea Spirit Fishing | #1 Rated Charter — Ponce Inlet, FL",
    description:
      "Half-day and full-day deep sea fishing charters out of Ponce Inlet. The biggest boat, the friendliest crew, the best day out.",
    type: "website",
    url: "https://seaspiritfishing.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={archivo.variable}>
      <body className="font-archivo">{children}</body>
    </html>
  );
}
