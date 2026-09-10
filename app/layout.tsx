import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "sebastianlau portfolio",
  description: "AI and machine learning portfolio focused on computer vision, forecasting, and intelligent software.",
  metadataBase: new URL("https://sebastianlau.is-a.dev"),
  openGraph: {
    title: "sebastianlau portfolio",
    description: "I build AI that sees, reasons, and ships.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "sebastianlau portfolio, AI and Machine Learning Engineer" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
