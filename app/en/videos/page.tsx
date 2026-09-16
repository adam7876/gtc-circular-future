import Link from "next/link";
import type { Metadata } from "next";
import { videos, videoCategories } from "./data";
import SiteHeader from "../../components/SiteHeader";
import { createPageMetadata } from "../../lib/site";

export const metadata: Metadata = createPageMetadata({title:"Field Films | GTC",description:"Watch original GTC field records covering landfill governance, Siwood processing, pallet applications and manufacturing.",path:"/en/videos",alternatePath:"/videos",locale:"en_US"});

export default function VideosPage(){
  return <main className="video-page">
    <SiteHeader locale="en" />
    <section className="video-intro"><p className="eyebrow">FIELD NOTES / FILM ARCHIVE</p><h1>See circularity in the field</h1><p>How materials are processed, how waste plastic becomes products,<br/>and how remediation connects with manufacturing—documented in eight films.</p></section>
    <nav className="video-index" aria-label="Film categories">{videoCategories.map((category,index)=><a href={`#category-${index}`} key={category}>{category}</a>)}</nav>
    {videoCategories.map((category,index)=><section className="video-category" id={`category-${index}`} key={category}><header><p className="eyebrow">0{index+1}</p><h2>{category}</h2></header><div className="video-grid">{videos.filter((video)=>video.category===category).map((video)=><article className="film-card" id={video.slug} key={video.slug}>
      <video controls playsInline preload="none" poster={video.slug === "landfill-recovery" ? undefined : `/videos/${video.slug}.jpg`} aria-label={video.title} aria-describedby={`${video.slug}-description`}><source src={`/videos/${video.slug}.mp4`} type="video/mp4"/>Your browser does not support video playback. <a href={`/videos/${video.slug}.mp4`}>Open the video</a>.</video>
      <h3>{video.title}</h3><p id={`${video.slug}-description`}>{video.description}</p>{video.products.length>0&&<Link className="text-link" href={`/en/products/${video.products[0]}`}>View related product →</Link>}
    </article>)}</div></section>)}
    <aside className="video-note">All eight films are original files provided by GTC; no external footage has been added. Descriptions are based on the supplied titles and company materials. Field records do not replace product specifications, test reports or engineering suitability assessment.</aside>
    <footer className="mini-footer"><Link href="/en">Back to home</Link><Link href="/en/products">Browse product catalog</Link></footer>
  </main>;
}
