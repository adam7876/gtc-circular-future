import Link from "next/link";
import ProductCatalog from "./ProductCatalog";
import SiteHeader from "../components/SiteHeader";

export default function ProductsPage() {
  return <main className="catalog-page">
    <SiteHeader />
    <section className="catalog-hero"><p className="eyebrow">YEADER LIH × SIWOOD PRODUCT SYSTEM</p><h1>從材料開始<br/>走進真實生活場景</h1><p>完整型錄涵蓋五大司木材料、建築景觀、室內空間、戶外家具與循環載具。選擇分類，快速找到適合的材料與應用。</p></section>
    <ProductCatalog />
    <section className="catalog-note"><p>五類司木材料</p><div><b>WPC</b><b>PVC</b><b>HDPE</b><b>HIPS</b><b>TPE</b></div><span>型錄為產品與應用規劃參考；實際性能、尺寸、色澤與供應狀態請依專案洽詢確認。</span></section>
    <footer className="mini-footer"><Link href="/">← 回到首頁</Link><span>GTC GLOBAL HOLDING · TAINAN</span></footer>
  </main>
}
