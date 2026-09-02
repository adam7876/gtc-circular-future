import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, products } from "../data";

export function generateStaticParams() { return products.map(({slug}) => ({ slug })); }

export default async function ProductDetail({ params }: { params: Promise<{slug:string}> }) {
  const { slug } = await params; const product = getProduct(slug); if (!product) notFound();
  const index = products.findIndex(p => p.slug === slug);
  return <main className="detail-page">
    <header className="detail-nav"><Link href="/">GTC</Link><Link href="/products">← 全部商品</Link><a href="tel:+88665811589">專案洽詢 ↗</a></header>
    <section className={`detail-hero tone-${(index%3)+1}`}><div className="detail-copy"><p className="eyebrow">SIWOOD / 0{index+1}</p><span>{product.category}</span><h1>{product.name}</h1><p>{product.description}</p><a className="button primary" href="tel:+88665811589">洽詢應用規格</a></div><div className={`detail-object product-object object-${product.slug}`}><i></i><i></i><i></i></div></section>
    <section className="detail-info"><article><p className="eyebrow">DESIGNED FOR</p><h2>{product.use}</h2></article><article><p className="eyebrow">KEY FEATURES</p><ul>{product.features.map(f=><li key={f}><span>↗</span>{f}</li>)}</ul></article></section>
    <section className="material-story"><div><p className="eyebrow">MATERIAL LOOP</p><h2>材料不在使用後消失，<br/>而是回到下一次製造。</h2></div><div className="loop-steps"><span>混雜廢塑</span><i>→</i><span>精細分選</span><i>→</i><span>複合材料</span><i>→</i><span>{product.name}</span><i>↺</i></div></section>
    <nav className="next-product">{index>0?<Link href={`/products/${products[index-1].slug}`}>← {products[index-1].name}</Link>:<span/>}{index<products.length-1?<Link href={`/products/${products[index+1].slug}`}>{products[index+1].name} →</Link>:<Link href="/products">返回商品總覽 →</Link>}</nav>
  </main>
}
