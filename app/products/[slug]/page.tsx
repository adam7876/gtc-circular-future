import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProduct, products } from "../data";
import { videos } from "../../videos/data";
import { reports } from "../../reports/data";

export function generateStaticParams() { return products.map(({slug}) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{slug:string}> }): Promise<Metadata> {
  const product = getProduct((await params).slug);
  if (!product) return {};
  return { title: `${product.name}｜GTC 司木產品`, description: product.short, openGraph: { title: product.name, description: product.short, images: [product.image] }, twitter: { card: "summary_large_image", images: [product.image] } };
}

export default async function ProductDetail({ params }: { params: Promise<{slug:string}> }) {
  const { slug } = await params; const product = getProduct(slug); if (!product) notFound();
  const index = products.findIndex(p => p.slug === slug);
  const relatedVideos = videos.filter(video => video.products.includes(slug));
  const relatedReports = reports.filter(report => report.products.includes(slug));
  return <main className="detail-page">
    <header className="detail-nav"><Link href="/">GTC</Link><Link href="/products">← 全部商品</Link><a href="tel:+88665811589">專案洽詢 ↗</a></header>
    <section className="detail-hero"><div className="detail-copy"><p className="eyebrow">{product.english} / {String(index+1).padStart(2,"0")}</p><span>{product.category}</span><h1>{product.name}</h1><p>{product.description}</p><a className="button primary" href="tel:+88665811589">洽詢應用規格</a></div><figure className="detail-product-image"><img src={product.image} alt={`${product.name}型錄與應用`} /><figcaption>PRODUCT CATALOG / APPLICATION REFERENCE</figcaption></figure></section>
    <section className="detail-info"><article><p className="eyebrow">DESIGNED FOR</p><h2>{product.use}</h2><p className="detail-material">材料系統<br/><b>{product.material}</b></p></article><article><p className="eyebrow">KEY FEATURES</p><ul>{product.features.map(f=><li key={f}><span>↗</span>{f}</li>)}</ul></article></section>
    <section className="material-story"><div><p className="eyebrow">MATERIAL LOOP</p><h2>材料不在使用後消失，<br/>而是回到下一次製造。</h2></div><div className="loop-steps"><span>混雜廢塑</span><i>→</i><span>精細分選</span><i>→</i><span>複合材料</span><i>→</i><span>{product.name}</span><i>↺</i></div></section>
    <nav className="next-product">{index>0?<Link href={`/products/${products[index-1].slug}`}>← {products[index-1].name}</Link>:<span/>}{index<products.length-1?<Link href={`/products/${products[index+1].slug}`}>{products[index+1].name} →</Link>:<Link href="/products">返回商品總覽 →</Link>}</nav>
    {relatedReports.length > 0 && <section className="related-reports"><p className="eyebrow">TEST REPORTS</p><h2>相關檢測資料</h2>{relatedReports.map(report=><a href={report.file} target="_blank" rel="noreferrer" key={report.slug}>{report.title}<span>開啟報告 ↗</span></a>)}</section>}
    {relatedVideos.length > 0 && <section className="related-films"><p className="eyebrow">RELATED FILMS</p><h2>觀看加工與應用紀錄</h2>{relatedVideos.map(video => <Link href={`/videos#${video.slug}`} key={video.slug}>{video.title}<span>觀看影片 →</span></Link>)}</section>}
  </main>
}
