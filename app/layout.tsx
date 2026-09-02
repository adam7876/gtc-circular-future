import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000",
  ),
  title: "GTC 全球控股集團｜讓廢棄物回到資源的位置",
  description: "GTC 以混雜廢塑資源化技術與司木循環材料，推動垃圾治理、再生製造與環境永續。",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "讓廢棄物，回到資源的位置",
    description: "GTC 全球控股集團｜混雜廢塑資源化與司木循環材料",
    images: [{ url: "/og.png", width: 1536, height: 922, alt: "GTC 混雜廢塑資源化" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-Hant"><body>{children}</body></html>;
}
