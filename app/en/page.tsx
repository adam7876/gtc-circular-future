import Link from "next/link";
import { products } from "./products/data";
import SiteHeader from "../components/SiteHeader";
import { createPageMetadata } from "../lib/site";

export const metadata = createPageMetadata({
  title: "GTC Global Holding Group | Returning Waste to Resources",
  description: "GTC advances waste governance, recycled manufacturing and environmental sustainability through mixed-plastic resource recovery and Siwood circular materials.",
  path: "/en",
  alternatePath: "/",
  locale: "en_US",
});

const chains = [
  ["01", "Waste governance", "Transform mixed waste plastics that are difficult to recycle into material for another production cycle."],
  ["02", "Sludge treatment", "Connect wastewater-treatment sludge management with pathways that reduce environmental burden."],
  ["03", "Soil improvement", "Explore circular uses for petrochemical sludge and potential soil-improvement pathways."],
  ["04", "Food preservation", "Use environmentally conscious technology to extend the useful life of food and ingredients."],
  ["05", "Health R&D", "Extend circular technology into research and applications for the health sector."],
  ["06", "Odour control & disinfection", "Address airborne odour and support cleaner living environments."],
];

const milestones = [
  ["1963", "Manufacturing foundations", "Fulong Advanced Technology was established, building precision-manufacturing capability."],
  ["2007", "Environmental transition", "Siwood formwork was successfully developed to replace natural timber with recycled material."],
  ["2017", "Resource-recovery development", "Waste-resource concepts and technology R&D were promoted in Wuhan."],
  ["2021", "Technology review", "Company materials state that the Changshankou pilot project passed a national-level expert review."],
  ["2023", "Circular integration", "Concentric Circular Technology was established and proposed a direction for urban waste governance."],
  ["2026", "Global implementation", "Collaboration with GTC began to advance waste-governance technology internationally."],
];

export default function EnglishHome() {
  return <main>
    <SiteHeader locale="en" />

    <section className="hero">
      <div className="hero-copy">
        <div className="hero-kicker"><span>GTC / 2026</span><p className="eyebrow">MIXED WASTE PLASTIC RESOURCEIZATION</p></div>
        <h1><span className="hero-line">Returning waste</span><span className="hero-line hero-emphasis">to the resource cycle</span></h1>
        <p className="hero-lead">GTC connects mixed-plastic resource recovery with materials, manufacturing, use and recycling—turning a single-use endpoint into the starting point of the next production cycle.</p>
        <div className="hero-actions"><Link className="button primary" href="/en/governance">Explore waste governance</Link><a className="text-link" href="#technology">View core technology <span>↓</span></a></div>
      </div>
      <div className="hero-facts" aria-label="Core technology summary">
        <div className="hero-fact-index">01</div><p>RESOURCE<br/>RECOVERY</p>
        <dl><div><dt>Process</dt><dd>No fire or water-based core process</dd></div><div><dt>Material</dt><dd>Mixed-waste-plastic composite</dd></div><div><dt>Outcome</dt><dd>Recoverable and remanufacturable</dd></div></dl>
        <div className="hero-fact-foot"><span>TAIWAN</span><span>→ GLOBAL</span></div>
      </div>
    </section>

    <section className="statement"><p>OUR BELIEF</p><h2>Eliminate waste and pollution<br/>help nature <span>regenerate</span></h2><div className="statement-side">From reduce, reuse and repair to refurbish, remanufacture, repurpose and recycle, GTC uses 7R thinking to reorganise the material life cycle.</div></section>

    <section className="governance-preview">
      <div className="governance-preview-copy"><p className="eyebrow">PUBLIC SECTOR PARTNERSHIP</p><h2>From landfill challenges<br/>to an assessable remediation pathway</h2><p>For governments, cities and public utilities, we organise the governance scope, process, available evidence and information required to begin a site review.</p><Link className="button outline" href="/en/governance">Explore the governance partnership</Link></div>
      <div className="governance-preview-image"><video controls playsInline preload="metadata" aria-label="Landfill excavation, remediation and production process"><source src="/videos/landfill-recovery.mp4" type="video/mp4"/>Your browser does not support video playback. <a href="/videos/landfill-recovery.mp4">Open the video</a>.</video><Link href="/en/governance/evidence">View the original film, case statements and evidence boundaries</Link></div>
    </section>

    <section className="technology" id="technology">
      <div className="section-intro"><p className="eyebrow">CORE TECHNOLOGY · 01</p><h2>From mixed waste plastics<br/>to new composite materials</h2></div>
      <div className="process-grid">
        <figure className="process-photo process-video"><video controls playsInline preload="none" poster="/factory-process.png" aria-label="Fire-resistant plastic board test" aria-describedby="material-video-caption-en"><source src="/videos/fire-resistant-board-test.mp4" type="video/mp4"/>Your browser does not support video playback. <a href="/videos/fire-resistant-board-test.mp4">Open the video</a>.</video><figcaption id="material-video-caption-en"><span>MATERIAL TEST RECORD</span><Link href="/en/videos#fire-resistant-board-test">Film context and full record →</Link></figcaption></figure>
        <div className="process-copy"><p>Based on high-precision automated sorting, lightweight oversize material is transformed into a new composite polymer material. Company materials describe a core process that does not rely on fire or water, reducing the risk of secondary pollution to water, air and soil.</p><div className="feature-list"><article><b>01</b><h3>Reduce secondary pollution</h3><p>Incineration and water washing are not the core process.</p></article><article><b>02</b><h3>Keep materials in circulation</h3><p>Products may be collected and manufactured again after use.</p></article><article><b>03</b><h3>Move toward higher-value use</h3><p>Material properties support products intended to replace timber in selected uses.</p></article></div></div>
      </div>
    </section>

    <section className="metrics"><article><b>60<sup>+</sup></b><span>Utility-model patents stated in company materials</span></article><article><b>1.8–3.5<sup>t</sup></b><span>Potential avoided virgin-plastic emissions per tonne of recycled plastic*</span></article><article><b>10<sup>%</sup></b><span>Residual-value estimate stated in the company presentation</span></article><p>*Range reproduced from the global-average life-cycle assessment cited in the source presentation.</p></section>

    <section className="cycle" id="cycle"><div className="section-intro light"><p className="eyebrow">NATURE&apos;S CYCLE · 02</p><h2>Six sectors in a<br/>nature-based circular economy</h2><p>The aim extends beyond plastics: different environmental challenges are considered within one circular system oriented toward ecological balance.</p></div><div className="chain-list">{chains.map(([number,title,description])=><article key={number}><b>{number}</b><h3>{title}</h3><p>{description}</p><span>↗</span></article>)}</div></section>

    <section className="products-preview"><div className="section-intro"><p className="eyebrow">PRODUCT CATALOG · 03</p><h2>See the material<br/>and where it is used</h2><p>From five Siwood material families to architecture, furniture and circular logistics, catalog imagery makes specifications and settings easier to understand.</p></div><div className="product-row">{[products[0],products[5],products[7]].map((product)=><Link className="product-card" href={`/en/products/${product.slug}`} key={product.slug}><span>{product.category} / {product.family.toUpperCase()}</span><figure className="product-photo"><img src={product.image} alt={`${product.name} catalog`}/></figure><h3>{product.name}</h3><p>{product.short}</p><b>View product →</b></Link>)}</div><Link className="button outline" href="/en/products">Browse the complete product range</Link></section>

    <section className="films-preview"><div><p className="eyebrow">FIELD NOTES / FILM ARCHIVE</p><h2>Beyond the concept<br/>see the actual process</h2><p>Eight field films cover environmental governance, material processing and product applications.</p><Link className="button outline" href="/en/videos">Browse all films</Link></div><Link className="film-preview-image" href="/en/videos#siwood-natural-grain"><img src="/videos/siwood-natural-grain.jpg" alt="Naturally formed wood-grain fibres during Siwood production" loading="lazy"/><span>Naturally formed wood-grain fibres during Siwood production →</span></Link></section>
    <section className="reports-preview"><p className="eyebrow">TEST REPORT ARCHIVE</p><div><h2>Return to the<br/>original test documents</h2><p>Weathering, material and product reports are indexed together with their complete source files.</p></div><Link className="button outline" href="/en/reports">View test reports</Link></section>

    <section className="about" id="about"><div className="section-intro"><p className="eyebrow">OUR JOURNEY · 04</p><h2>From manufacturing<br/>to global environmental governance</h2></div><figure className="team-photo"><img src="/technology-team.jpg" alt="GTC technical team discussing a waste-governance plan"/><figcaption>The technical team reviews a waste-governance proposal.</figcaption></figure><div className="timeline">{milestones.map(([year,title,description])=><article key={year}><b>{year}</b><h3>{title}</h3><p>{description}</p></article>)}</div></section>

    <section className="vision"><div><p className="eyebrow">ESG · SDGs · GRS</p><h2>Environmental responsibility<br/>is more than a statement</h2></div><p>GTC applies an ESG perspective, aligns its direction with the UN Sustainable Development Goals, and continues to develop a verifiable green supply chain across material traceability, social responsibility, environmental management and chemical management.</p></section>

    <footer id="contact"><div className="footer-lead"><p>RETURN VALUE TO THE EARTH</p><h2>Turn today&apos;s waste<br/>into resources for the next generation</h2><a href="tel:+88665811589">+886 6 581 1589 ↗</a></div><div className="footer-meta"><div><b>GTC Global Holding Group</b><p>72-36 Xiwei, Ximei Village, Shanhua District, Tainan, Taiwan</p></div><div><b>Site navigation</b><Link href="/en/governance">Waste-governance partnership</Link><Link href="/en/products">Siwood products</Link><a href="#technology">Core technology</a><a href="#about">Company journey</a></div></div><p className="copyright">© 2026 GTC GLOBAL HOLDING GROUP. CONTENT ADAPTED FROM THE CORPORATE PROFILE.</p></footer>
  </main>;
}
