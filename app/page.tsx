import Link from "next/link";
import { products } from "./products/data";

const chains = [
  ["01", "垃圾治理", "將難以回收的混雜廢塑轉化為可再次製造的材料。"],
  ["02", "污泥治理", "串連污水處理廠污泥治理，降低環境負擔。"],
  ["03", "土壤改良", "探索石化污泥的循環應用與土壤改良路徑。"],
  ["04", "食材保鮮", "以環境友善技術延長食品與食材的有效使用。"],
  ["05", "健康研發", "把循環技術延伸至健康產業的研發與利用。"],
  ["06", "除臭殺菌", "處理空氣惡臭，建立更潔淨的生活環境。"],
];

const milestones = [
  ["1963", "製造根基", "福隆尖端科技成立，建立精密製造能力。"],
  ["2007", "環保轉型", "成功研發司木模板，開始以再生材料取代木材。"],
  ["2017", "資源化布局", "於武漢推廣垃圾資源化理念與技術研發。"],
  ["2021", "技術驗證", "長山口實驗專案通過國家級專家審查。"],
  ["2023", "循環整合", "成立同心圓循環科技，提出城市垃圾治理方針。"],
  ["2026", "全球落地", "與 GTC 合作，推動垃圾治理技術走向國際。"],
];

export default function Home() {
  return (
    <main>
      <header className="nav-wrap">
        <Link className="brand" href="/" aria-label="GTC 全球控股集團首頁">
          <span className="brand-mark">G</span><span>GTC</span><small>GLOBAL HOLDING</small>
        </Link>
        <nav aria-label="主選單">
          <a href="#technology">核心技術</a><a href="#cycle">循環產業</a>
          <Link href="/products">司木商品</Link><a href="#about">關於集團</a>
        </nav>
        <a className="nav-cta" href="#contact">洽詢合作 <span>↗</span></a>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <div className="hero-kicker"><span>GTC / 2026</span><p className="eyebrow">MIXED WASTE PLASTIC RESOURCEIZATION</p></div>
          <h1><span className="hero-line">讓廢棄物，</span><span className="hero-line hero-emphasis">回到資源的位置。</span></h1>
          <p className="hero-lead">以混雜廢塑資源化技術，串連材料、製造、使用與回收，讓一次性的終點成為下一次生產的起點。</p>
          <div className="hero-actions"><a className="button primary" href="#technology">探索循環技術</a><Link className="text-link" href="/products">查看司木商品 <span>→</span></Link></div>
        </div>
        <div className="hero-facts" aria-label="核心技術重點">
          <div className="hero-fact-index">01</div>
          <p>RESOURCE<br/>RECOVERY</p>
          <dl><div><dt>製程</dt><dd>不使用火、不使用水</dd></div><div><dt>材料</dt><dd>混雜廢塑複合材料</dd></div><div><dt>結果</dt><dd>可回收、可再製造</dd></div></dl>
          <div className="hero-fact-foot"><span>TAIWAN</span><span>→ GLOBAL</span></div>
        </div>
      </section>

      <section className="statement">
        <p>OUR BELIEF</p><h2>地球沒有真正的垃圾，<br/>只有<span>放錯位置的資源。</span></h2>
        <div className="statement-side">我們從治理的難題出發，以可被市場採用的材料與商品，讓循環經濟真正運轉。</div>
      </section>

      <section className="technology" id="technology">
        <div className="section-intro"><p className="eyebrow">CORE TECHNOLOGY · 01</p><h2>從混雜廢塑，<br/>到新型複合材料</h2></div>
        <div className="process-grid">
          <figure className="process-photo"><img src="/factory-process.png" alt="司木材料製造現場"/><figcaption><span>台南善化</span><b>司木材料製造與應用紀錄</b></figcaption></figure>
          <div className="process-copy"><p>以高精度、精細化自動分選為基礎，將篩上輕質料轉化為新型複合高分子材料。製程回歸自然，不使用火與水，降低對水、空氣與土壤造成二次污染的風險。</p>
            <div className="feature-list"><article><b>01</b><h3>減少二次污染</h3><p>製程不以焚燒或水洗為核心。</p></article><article><b>02</b><h3>材料持續循環</h3><p>產品使用後可再回收、再製造。</p></article><article><b>03</b><h3>高價值再利用</h3><p>材料性能可應用於替代木材的產品。</p></article></div>
          </div>
        </div>
      </section>

      <section className="metrics">
        <article><b>60<sup>+</sup></b><span>全球新型專利</span></article>
        <article><b>1.8–3.5<sup>t</sup></b><span>每噸再生塑料可避免的原生塑料碳排量*</span></article>
        <article><b>10<sup>%</sup></b><span>產品循環後仍具殘餘價值之簡報估值</span></article>
        <p>*依原簡報引用的全球平均生命週期評估區間呈現。</p>
      </section>

      <section className="cycle" id="cycle">
        <div className="section-intro light"><p className="eyebrow">NATURE'S CYCLE · 02</p><h2>大自然循環經濟<br/>六大產業鏈</h2><p>不只處理塑膠，而是以生態平衡為目標，將不同環境問題納入同一個循環系統。</p></div>
        <div className="chain-list">{chains.map(([n,t,d])=><article key={n}><b>{n}</b><h3>{t}</h3><p>{d}</p><span>↗</span></article>)}</div>
      </section>

      <section className="products-preview">
        <div className="section-intro"><p className="eyebrow">SIWOOD PRODUCTS · 03</p><h2>循環材料，<br/>成為日常使用的商品</h2><p>司木系列以再生複合材料為基礎，依耐候、耐燃與強度需求調整配方，應用於物流、營建與生活空間。</p></div>
        <div className="product-row">{products.slice(0,3).map((p,i)=><Link className={`product-card tone-${i+1}`} href={`/products/${p.slug}`} key={p.slug}><span>{p.category}</span><div className={`product-object object-${p.slug}`}><i></i><i></i><i></i></div><h3>{p.name}</h3><p>{p.short}</p><b>了解商品 →</b></Link>)}</div>
        <Link className="button outline" href="/products">瀏覽完整商品系列</Link>
      </section>

      <section className="about" id="about">
        <div className="section-intro"><p className="eyebrow">OUR JOURNEY · 04</p><h2>從製造走向<br/>全球環境治理</h2></div>
        <figure className="team-photo"><img src="/technology-team.jpg" alt="GTC 技術團隊研討垃圾治理方案"/><figcaption>技術團隊進行垃圾治理方案研討</figcaption></figure>
        <div className="timeline">{milestones.map(([year,title,desc])=><article key={year}><b>{year}</b><h3>{title}</h3><p>{desc}</p></article>)}</div>
      </section>

      <section className="vision"><div><p className="eyebrow">ESG · SDGs · GRS</p><h2>環境責任，不只是一句口號。</h2></div><p>以 ESG 作為經營視角、呼應聯合國永續發展目標，並以全球回收標準的材料追溯、社會責任、環境與化學品管理四大面向，持續建立可驗證的綠色供應鏈。</p></section>

      <footer id="contact"><div className="footer-lead"><p>LET'S RETURN VALUE TO THE EARTH</p><h2>一起把垃圾，<br/>變成下一代的資源。</h2><a href="tel:+88665811589">+886 6 581 1589 ↗</a></div><div className="footer-meta"><div><b>GTC 全球控股集團</b><p>台南市善化區溪美里溪尾 72-36 號</p></div><div><b>網站導覽</b><Link href="/products">司木商品</Link><a href="#technology">核心技術</a><a href="#about">集團沿革</a></div></div><p className="copyright">© 2026 GTC GLOBAL HOLDING GROUP. CONTENT ADAPTED FROM THE CORPORATE PROFILE.</p></footer>
    </main>
  );
}
