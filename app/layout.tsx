import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sebastian Lau — AI / ML Engineer",
  description: "AI and machine learning engineer building production computer vision, forecasting, and intelligent software systems in Honolulu, Hawaii.",
  metadataBase: new URL("https://sebastian-lau-ai.sebastianlau843.chatgpt.site"),
  openGraph: {
    title: "Sebastian Lau — AI / ML Engineer",
    description: "I build AI that sees, reasons, and ships.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Sebastian Lau, AI and Machine Learning Engineer" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
