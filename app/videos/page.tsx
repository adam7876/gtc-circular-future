import Link from "next/link";
import type { Metadata } from "next";
import { videos, videoCategories } from "./data";
export const metadata: Metadata = {title:"影片紀錄｜GTC",description:"從掩埋場治理、司木加工到棧板應用，觀看 GTC 的材料與製造現場紀錄。"};
export default function VideosPage(){
 return <main className="video-page">
 <header className="detail-nav"><Link href="/">GTC</Link><Link href="/products">產品型錄</Link><Link href="/#contact">洽詢合作</Link></header>
 <section className="video-intro"><p className="eyebrow">FIELD NOTES / FILM ARCHIVE</p><h1>從現場看見循環</h1><p>材料如何加工、廢塑如何成為產品、治理如何銜接製造<br/>以八段影片記錄理念走向應用的過程</p></section>
 <nav className="video-index" aria-label="影片分類">{videoCategories.map((c,i)=><a href={`#category-${i}`} key={c}>{c}</a>)}</nav>
 {videoCategories.map((c,i)=><section className="video-category" id={`category-${i}`} key={c}><header><p className="eyebrow">0{i+1}</p><h2>{c}</h2></header><div className="video-grid">{videos.filter(v=>v.category===c).map(v=><article className="film-card" id={v.slug} key={v.slug}>
 <video controls playsInline preload="none" poster={`/videos/${v.slug}.jpg`} aria-label={v.title} aria-describedby={`${v.slug}-description`}><source src={`/videos/${v.slug}.mp4`} type="video/mp4"/>您的瀏覽器不支援播放，請<a href={`/videos/${v.slug}.mp4`}>開啟影片</a>觀看。</video>
 <h3>{v.title}</h3><p id={`${v.slug}-description`}>{v.description}</p>{v.products.length>0&&<Link className="text-link" href={`/products/${v.products[0]}`}>查看相關產品 →</Link>}
 </article>)}</div></section>)}
 <aside className="video-note">影片由集團提供；簡介依影片標題與公司資料整理。現場紀錄不取代產品規格、檢驗報告或工程適用性評估。</aside>
 <footer className="mini-footer"><Link href="/">回到首頁</Link><Link href="/products">瀏覽產品型錄</Link></footer>
 </main>;
}
