import type { Metadata } from "next";

export const SITE_URL = "https://gtc-circular-future.vercel.app";
export const SITE_NAME = "GTC 全球控股集團";
export const SITE_NAME_EN = "GTC Global Holding Group";
export const DEFAULT_DESCRIPTION =
  "GTC 以混雜廢塑資源化技術與司木循環材料，推動垃圾治理、再生製造與環境永續。";

export function createPageMetadata({
  title,
  description,
  path,
  image = "/og.png",
  locale = "zh_TW",
  alternatePath,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  locale?: "zh_TW" | "en_US";
  alternatePath?: string;
}): Metadata {
  const isEnglish = locale === "en_US";
  const languages = alternatePath
    ? {
        "zh-Hant": isEnglish ? alternatePath : path,
        en: isEnglish ? path : alternatePath,
        "x-default": isEnglish ? alternatePath : path,
      }
    : undefined;

  return {
    title,
    description,
    alternates: { canonical: path, languages },
    openGraph: {
      title,
      description,
      url: path,
      siteName: isEnglish ? SITE_NAME_EN : SITE_NAME,
      locale,
      alternateLocale: alternatePath ? [isEnglish ? "zh_TW" : "en_US"] : undefined,
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
