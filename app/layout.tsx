import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["400", "700", "900"],
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Bracket Studio — We build the last mile.",
  description:
    "A small student dev team building real software for professors, campus orgs, and small businesses. Websites, apps, and tools — shipped, not just written.",
  openGraph: {
    title: "Bracket Studio",
    description: "We build the last mile.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${ibmPlexSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
