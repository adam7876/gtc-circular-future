import Link from "next/link";
import type { Metadata } from "next";
import { reports, reportCategories } from "./data";
import SiteHeader from "../../components/SiteHeader";
import { createPageMetadata } from "../../lib/site";

export const metadata: Metadata = createPageMetadata({title:"Test Reports | GTC",description:"Browse original test and inspection reports for GTC Siwood materials and products.",path:"/en/reports",alternatePath:"/reports",locale:"en_US"});

export default function ReportsPage(){return <main className="reports-page"><SiteHeader locale="en" />
  <section className="reports-intro"><p className="eyebrow">TEST REPORT ARCHIVE</p><h1>Test reports</h1><p>Original material and product test documents in one place.<br/>Refer to each report for its sample, method, conditions and results.</p></section>
  <nav className="report-index" aria-label="Report categories">{reportCategories.map((category,index)=><a href={`#report-category-${index}`} key={category}>{category}<span>{reports.filter((report)=>report.category===category).length}</span></a>)}</nav>
  {reportCategories.map((category,index)=><section className="report-category" id={`report-category-${index}`} key={category}><header><p className="eyebrow">0{index+1}</p><h2>{category}</h2></header><div className="report-grid">{reports.filter((report)=>report.category===category).map((report)=><article className="report-card" key={report.slug}><a href={report.file} target="_blank" rel="noreferrer"><figure><img src={report.preview} alt={`First-page preview of ${report.title}`} loading="lazy"/></figure><div><span>{report.agency} / {report.pages} {report.pages === 1 ? "page" : "pages"}</span><h3>{report.title}</h3><b>Open original report ↗</b></div></a></article>)}</div></section>)}
  <aside className="report-disclaimer">This page indexes original documents and does not make a separate pass/fail judgment. Samples, methods and conditions vary between reports. For procurement, engineering selection or regulatory compliance, read the complete report and consult a qualified professional.</aside><footer className="mini-footer"><Link href="/en">Back to home</Link><Link href="/en/products">Browse product catalog</Link></footer>
</main>}
