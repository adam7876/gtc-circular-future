import type { Metadata } from "next";
import "./globals.css";
import { DEFAULT_DESCRIPTION, SITE_NAME, SITE_URL } from "./lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "GTC 全球控股集團｜讓廢棄物回到資源的位置",
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: ["垃圾治理", "混雜廢塑", "資源化", "循環材料", "司木", "掩埋場治理", "GTC"],
  manifest: "/manifest.webmanifest",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "讓廢棄物，回到資源的位置",
    description: "GTC 全球控股集團｜混雜廢塑資源化與司木循環材料",
    url: "/",
    siteName: SITE_NAME,
    locale: "zh_TW",
    type: "website",
    images: [{ url: "/og.png", width: 1536, height: 922, alt: "GTC 混雜廢塑資源化" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/favicon.svg`,
        telephone: "+886-6-581-1589",
        address: {
          "@type": "PostalAddress",
          streetAddress: "溪美里溪尾 72-36 號",
          addressLocality: "善化區",
          addressRegion: "台南市",
          addressCountry: "TW",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: SITE_NAME,
        url: SITE_URL,
    inLanguage: ["zh-Hant", "en"],
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };

  return (
    <html lang="zh-Hant">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
