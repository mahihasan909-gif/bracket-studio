import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Bracket Studio — Production Software & Digital Engineering",
  description:
    "Engineering team in Dhaka building custom full-stack software, agentic AI pipelines, mobile applications, and high-performance web systems.",
  openGraph: {
    title: "Bracket Studio — Systems & Software Architecture",
    description: "We build the last mile of digital products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} scroll-smooth`}>
      <body className="antialiased selection:bg-blue-600 selection:text-white bg-[#0A0D14] text-[#F8FAFC]">
        {children}
      </body>
    </html>
  );
}
