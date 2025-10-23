import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { CookieBanner } from "@/components/site/cookie-banner";
import { GoogleAnalytics } from "@/components/analytics/analytics";
import { MetaPixel } from "@/components/analytics/analytics";
import { siteConfig } from "@/config/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    // template: `%s | ${siteConfig.name}`, // Temporarily disabled to fix duplication
  },
  description: siteConfig.description,
  keywords: [
    "programmatic SEO",
    "local SEO",
    "SEO automation",
    "local business SEO",
    "SEO site builder",
    "automated SEO",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.GA_MEASUREMENT_ID;
  const pixelId = process.env.META_PIXEL_ID;

  return (
    <html lang="en" className={inter.variable}>
      <head>
        {gaId && <GoogleAnalytics measurementId={gaId} />}
        {pixelId && <MetaPixel pixelId={pixelId} />}
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
