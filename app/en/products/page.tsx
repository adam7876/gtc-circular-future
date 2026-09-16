import Link from "next/link";
import ProductCatalog from "./ProductCatalog";
import SiteHeader from "../../components/SiteHeader";
import { createPageMetadata } from "../../lib/site";

export const metadata = createPageMetadata({
  title: "Siwood Product Catalog | GTC",
  description: "Explore five Siwood material families alongside architectural, interior, furniture and circular-logistics applications.",
  path: "/en/products",
  alternatePath: "/products",
  locale: "en_US",
});

export default function ProductsPage() {
  return <main className="catalog-page">
    <SiteHeader locale="en" />
    <section className="catalog-hero"><p className="eyebrow">YEADER LIH × SIWOOD PRODUCT SYSTEM</p><h1>Start with the material<br/>and enter real-world use</h1><p>The catalog covers five Siwood material families, architectural landscapes, interiors, outdoor furniture and circular logistics. Filter by category to find a relevant material or application.</p></section>
    <ProductCatalog />
    <section className="catalog-note"><p>FIVE SIWOOD MATERIAL FAMILIES</p><div><b>WPC</b><b>PVC</b><b>HDPE</b><b>HIPS</b><b>TPE</b></div><span>The catalog is a reference for product and application planning. Actual performance, dimensions, colour and availability must be confirmed for each project.</span></section>
    <footer className="mini-footer"><Link href="/en">← Back to home</Link><span>GTC GLOBAL HOLDING · TAINAN</span></footer>
  </main>;
}
