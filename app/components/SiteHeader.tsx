import Link from "next/link";

const navigationGroups = [
  {
    label: "治理合作",
    links: [
      ["合作方案", "/governance"],
      ["案例與證據", "/governance/evidence"],
      ["場址初評表", "/governance/intake"],
    ],
  },
  {
    label: "技術與產品",
    links: [
      ["核心技術", "/#technology"],
      ["循環產業", "/#cycle"],
      ["產品型錄", "/products"],
      ["影片紀錄", "/videos"],
      ["檢測資料", "/reports"],
    ],
  },
  {
    label: "關於 GTC",
    links: [
      ["集團沿革", "/#about"],
      ["聯絡資訊", "/#contact"],
    ],
  },
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="GTC 全球控股集團首頁">
        <span className="brand-mark">G</span><span>GTC</span><small>GLOBAL HOLDING</small>
      </Link>

      <nav className="site-desktop-nav" aria-label="全站主選單">
        <Link className="site-home-link" href="/">首頁</Link>
        {navigationGroups.map((group) => (
          <details className="site-nav-group" key={group.label}>
            <summary>{group.label}<span aria-hidden="true">＋</span></summary>
            <div className="site-nav-menu">
              {group.links.map(([label, href]) => <Link href={href} key={href}>{label}<span>↗</span></Link>)}
            </div>
          </details>
        ))}
      </nav>

      <Link className="site-primary-cta" href="/governance/intake">
        <span className="site-cta-long">填寫場址初評</span>
        <span className="site-cta-short">填寫初評</span>
        <b>↗</b>
      </Link>

      <details className="site-mobile-nav">
        <summary>選單<span aria-hidden="true">＋</span></summary>
        <div className="site-mobile-panel">
          <Link className="site-mobile-home" href="/">首頁</Link>
          {navigationGroups.map((group) => (
            <section key={group.label}>
              <h2>{group.label}</h2>
              {group.links.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
            </section>
          ))}
          <Link className="site-mobile-primary" href="/governance/intake">開始場址初評 <span>↗</span></Link>
        </div>
      </details>
    </header>
  );
}
