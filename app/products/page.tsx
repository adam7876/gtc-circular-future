import Link from "next/link";
import { products } from "./data";

export default function ProductsPage() {
  return <main className="catalog-page">
    <header className="nav-wrap dark-nav"><Link className="brand" href="/"><span className="brand-mark">G</span><span>GTC</span><small>GLOBAL HOLDING</small></Link><nav><Link href="/#technology">核心技術</Link><Link href="/#cycle">循環產業</Link><Link href="/products">司木商品</Link><Link href="/#about">關於集團</Link></nav><Link className="nav-cta" href="/#contact">洽詢合作 <span>↗</span></Link></header>
    <section className="catalog-hero"><p className="eyebrow">SIWOOD PRODUCT SYSTEM</p><h1>把循環材料，<br/>做成真正被使用的商品。</h1><p>從物流棧板、營建模板到戶外建材，司木依不同場域調整材料性能，讓混雜廢塑有機會持續留在價值鏈中。</p></section>
    <section className="catalog-grid">{products.map((p,i)=><Link className={`catalog-card tone-${(i%3)+1}`} href={`/products/${p.slug}`} key={p.slug}><div className="catalog-number">0{i+1}</div><span>{p.category}</span><div className={`product-object object-${p.slug}`}><i></i><i></i><i></i></div><h2>{p.name}</h2><p>{p.short}</p><b>商品詳情 ↗</b></Link>)}</section>
    <section className="catalog-note"><p>四類材料配方</p><div><b>一般系列</b><b>抗 UV 系列</b><b>耐燃系列</b><b>特殊機能系列</b></div><span>實際性能、尺寸與認證依專案需求確認。</span></section>
    <footer className="mini-footer"><Link href="/">← 回到首頁</Link><span>GTC GLOBAL HOLDING · TAINAN</span></footer>
  </main>
}
