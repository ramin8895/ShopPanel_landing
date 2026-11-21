import type { Metadata, Viewport } from "next";
import { preload } from "react-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCta } from "@/components/MobileCta";
import { PageEffects } from "@/components/PageEffects";
import { ENAMAD_META, SITE_URL } from "@/lib/site";
import "./site.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  other: { enamad: ENAMAD_META },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0052d6",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Only the two weights used above the fold are preloaded (light is rarely used).
  for (const w of ["bold", "regular"]) {
    preload(`/fonts/iranyekan-${w}.woff2`, { as: "font", type: "font/woff2", crossOrigin: "anonymous" });
  }
  return (
    <html lang="fa-IR" dir="rtl" suppressHydrationWarning>
      <head>
        {/* Google Search Console: verification meta goes here */}
        <script dangerouslySetInnerHTML={{ __html: 'document.documentElement.classList.add("js")' }} />
      </head>
      <body>
        <a className="skip-link" href="#main">
          پرش به محتوای اصلی
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileCta />
        <PageEffects />
      </body>
    </html>
  );
}
