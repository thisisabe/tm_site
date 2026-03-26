import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { jsonLdOrganization, jsonLdLocalBusiness } from "@/lib/metadata";

const inter = localFont({
  src: [
    { path: "../../public/fonts/inter-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/inter-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/inter-latin-600-normal.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-inter",
  display: "swap",
});

const playfair = localFont({
  src: [
    { path: "../../public/fonts/playfair-display-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/playfair-display-latin-400-italic.woff2", weight: "400", style: "italic" },
    { path: "../../public/fonts/playfair-display-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/playfair-display-latin-500-italic.woff2", weight: "500", style: "italic" },
    { path: "../../public/fonts/playfair-display-latin-600-normal.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Thinker Maker — AI Strategy, Design & Execution | Sydney",
    template: "%s | Thinker Maker",
  },
  description:
    "We embed AI into organisations with 40 years of design and product expertise. Boot camps, workflow automation, and full-scale transformation for enterprise and growing businesses.",
  metadataBase: new URL("https://thinkermaker.com.au"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      className={`${inter.variable} ${playfair.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdOrganization()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdLocalBusiness()),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
