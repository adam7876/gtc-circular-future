import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProduct, products } from "../data";
import { videos } from "../../videos/data";
import { reports } from "../../reports/data";
import SiteHeader from "../../../components/SiteHeader";
import { createPageMetadata } from "../../../lib/site";

export function generateStaticParams() { return products.map(({slug}) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{slug:string}> }): Promise<Metadata> {
  const product = getProduct((await params).slug);
  if (!product) return {};
  return createPageMetadata({title:`${product.name} | GTC Siwood Products`,description:product.short,path:`/en/products/${product.slug}`,alternatePath:`/products/${product.slug}`,locale:"en_US",image:product.image});
}

export default async function ProductDetail({ params }: { params: Promise<{slug:string}> }) {
  const { slug } = await params; const product = getProduct(slug); if (!product) notFound();
  const index = products.findIndex((item) => item.slug === slug);
  const relatedVideos = videos.filter((video) => video.products.includes(slug));
  const relatedReports = reports.filter((report) => report.products.includes(slug));
  return <main className="detail-page">
    <SiteHeader locale="en" />
    <section className="detail-hero"><div className="detail-copy"><Link className="detail-back-link" href="/en/products">← Back to all products</Link><p className="eyebrow">{product.family.toUpperCase()} / {String(index+1).padStart(2,"0")}</p><span>{product.category}</span><h1>{product.name}</h1><p>{product.description}</p><a className="button primary" href="tel:+88665811589">Enquire about specifications</a></div><figure className="detail-product-image"><img src={product.image} alt={`${product.name} catalog and applications`} /><figcaption>PRODUCT CATALOG / APPLICATION REFERENCE</figcaption></figure></section>
    <section className="detail-info"><article><p className="eyebrow">DESIGNED FOR</p><h2>{product.use}</h2><p className="detail-material">MATERIAL SYSTEM<br/><b>{product.material}</b></p></article><article><p className="eyebrow">KEY FEATURES</p><ul>{product.features.map((feature)=><li key={feature}><span>↗</span>{feature}</li>)}</ul></article></section>
    <section className="material-story"><div><p className="eyebrow">MATERIAL LOOP</p><h2>Materials do not disappear after use.<br/>They return to the next production cycle.</h2></div><div className="loop-steps"><span>Mixed waste plastics</span><i>→</i><span>Precision sorting</span><i>→</i><span>Composite material</span><i>→</i><span>{product.name}</span><i>↺</i></div></section>
    <nav className="next-product">{index>0?<Link href={`/en/products/${products[index-1].slug}`}>← {products[index-1].name}</Link>:<span/>}{index<products.length-1?<Link href={`/en/products/${products[index+1].slug}`}>{products[index+1].name} →</Link>:<Link href="/en/products">All products →</Link>}</nav>
    {relatedReports.length > 0 && <section className="related-reports"><p className="eyebrow">TEST REPORTS</p><h2>Related test reports</h2>{relatedReports.map((report)=><a href={report.file} target="_blank" rel="noreferrer" key={report.slug}>{report.title}<span>Open report ↗</span></a>)}</section>}
    {relatedVideos.length > 0 && <section className="related-films"><p className="eyebrow">RELATED FILMS</p><h2>Processing and application records</h2>{relatedVideos.map((video) => <Link href={`/en/videos#${video.slug}`} key={video.slug}>{video.title}<span>Watch film →</span></Link>)}</section>}
  </main>;
}
