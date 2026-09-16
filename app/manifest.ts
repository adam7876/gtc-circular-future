import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "GTC 全球控股集團",
    short_name: "GTC",
    description: "混雜廢塑資源化、垃圾治理與司木循環材料",
    start_url: "/",
    display: "standalone",
    background_color: "#f4f3ee",
    theme_color: "#111411",
    lang: "zh-Hant",
    icons: [{ src: "/favicon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
