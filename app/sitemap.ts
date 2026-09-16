import type { MetadataRoute } from "next";
import { products } from "./products/data";
import { SITE_URL } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticPairs = [
    ["", "/en", 1],
    ["/governance", "/en/governance", 0.95],
    ["/governance/evidence", "/en/governance/evidence", 0.9],
    ["/governance/intake", "/en/governance/intake", 0.8],
    ["/products", "/en/products", 0.9],
    ["/videos", "/en/videos", 0.75],
    ["/reports", "/en/reports", 0.8],
  ] as const;

  const staticPages: MetadataRoute.Sitemap = staticPairs.flatMap(([zhPath, enPath, priority]) => {
    const zhUrl = `${SITE_URL}${zhPath}`;
    const enUrl = `${SITE_URL}${enPath}`;
    const languages = { "zh-Hant": zhUrl, en: enUrl, "x-default": zhUrl };
    return [
      { url: zhUrl, lastModified, changeFrequency: "monthly" as const, priority, alternates: { languages } },
      { url: enUrl, lastModified, changeFrequency: "monthly" as const, priority, alternates: { languages } },
    ];
  });

  return [
    ...staticPages,
    ...products.flatMap((product) => {
      const zhUrl = `${SITE_URL}/products/${product.slug}`;
      const enUrl = `${SITE_URL}/en/products/${product.slug}`;
      const languages = { "zh-Hant": zhUrl, en: enUrl, "x-default": zhUrl };
      return [
        { url: zhUrl, lastModified, changeFrequency: "monthly" as const, priority: 0.75, alternates: { languages } },
        { url: enUrl, lastModified, changeFrequency: "monthly" as const, priority: 0.75, alternates: { languages } },
      ];
    }),
  ];
}
