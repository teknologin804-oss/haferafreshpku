import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { BackToTop } from "@/components/back-to-top";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { brandImages, siteConfig } from "@/config/site";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "HAFERA FRESH — Distributor Buah, Daging & Frozen Food Pekanbaru",
    template: "%s | HAFERA FRESH Pekanbaru",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "distributor buah Pekanbaru",
    "supplier frozen food Pekanbaru",
    "distributor daging Pekanbaru",
    "pasokan bahan makanan bisnis",
    "HAFERA FRESH",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "business",
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: "HAFERA FRESH — Distributor Buah, Daging & Frozen Food Pekanbaru",
    description: siteConfig.description,
    images: [
      {
        url: brandImages.hero.src,
        width: 1500,
        height: 1125,
        alt: brandImages.hero.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HAFERA FRESH — Distributor Pangan Pekanbaru",
    description: siteConfig.description,
    images: [brandImages.hero.src],
  },
  robots: {
    index: true,
    follow: true,
  },
  formatDetection: { telephone: false, address: false },
};

export const viewport: Viewport = {
  themeColor: "#063B2D",
  width: "device-width",
  initialScale: 1,
};

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  description: siteConfig.description,
  slogan: siteConfig.tagline,
  url: siteConfig.url,
  logo: `${siteConfig.url}${brandImages.logo}`,
  image: `${siteConfig.url}${brandImages.hero.src}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.location.city,
    addressRegion: siteConfig.location.region,
    addressCountry: siteConfig.location.countryCode,
  },
  areaServed: {
    "@type": "City",
    name: siteConfig.location.city,
  },
  ...(siteConfig.whatsapp.isPlaceholder
    ? {}
    : { telephone: `+${siteConfig.whatsapp.number.replace(/\D/g, "")}` }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteConfig.lang} className={`${manrope.variable} ${fraunces.variable}`}>
      <body className="min-h-screen bg-ivory font-sans text-charcoal">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ivory focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-deep focus:shadow-lift"
        >
          Lompat ke konten utama
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <BackToTop />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
      </body>
    </html>
  );
}
