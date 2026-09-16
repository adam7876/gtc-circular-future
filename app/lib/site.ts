import type { Metadata } from "next";

export const SITE_URL = "https://gtc-circular-future.vercel.app";
export const SITE_NAME = "GTC 全球控股集團";
export const DEFAULT_DESCRIPTION =
  "GTC 以混雜廢塑資源化技術與司木循環材料，推動垃圾治理、再生製造與環境永續。";

export function createPageMetadata({
  title,
  description,
  path,
  image = "/og.png",
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "zh_TW",
      type: "website",
      images: [{ url: image, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
