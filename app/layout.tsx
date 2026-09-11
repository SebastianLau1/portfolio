import type { Metadata } from "next";
import { Archivo_Black, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const bodyFont = IBM_Plex_Sans({ variable: "--font-body", subsets: ["latin"], weight: ["400", "500", "600"] });
const displayFont = Archivo_Black({ variable: "--font-display", subsets: ["latin"], weight: "400" });
const monoFont = IBM_Plex_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: "Sebastian Lau | AI/ML Software Engineer",
  description: "AWS, generative AI, computer vision, and data analytics portfolio by Sebastian Lau.",
  metadataBase: new URL("https://sebastianlau.is-a.dev"),
  openGraph: {
    title: "Sebastian Lau | AI/ML Software Engineer",
    description: "AWS, generative AI, computer vision, and data analytics.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Sebastian Lau, AI/ML Software Engineer" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${bodyFont.variable} ${displayFont.variable} ${monoFont.variable}`}>{children}</body></html>;
}
