import type { MetadataRoute } from "next";
import { products } from "./products/data";
import { SITE_URL } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/governance`, lastModified, changeFrequency: "monthly", priority: 0.95 },
    { url: `${SITE_URL}/governance/evidence`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/governance/intake`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/products`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/videos`, lastModified, changeFrequency: "monthly", priority: 0.75 },
    { url: `${SITE_URL}/reports`, lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];

  return [
    ...staticPages,
    ...products.map((product) => ({
      url: `${SITE_URL}/products/${product.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];
}
