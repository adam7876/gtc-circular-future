import Link from "next/link";

const navigationGroupsZh = [
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

const navigationGroupsEn = [
  {
    label: "Governance",
    links: [
      ["Partnership", "/en/governance"],
      ["Cases & Evidence", "/en/governance/evidence"],
      ["Site Review Form", "/en/governance/intake"],
    ],
  },
  {
    label: "Technology & Products",
    links: [
      ["Core Technology", "/en/#technology"],
      ["Circular Sectors", "/en/#cycle"],
      ["Product Catalog", "/en/products"],
      ["Field Films", "/en/videos"],
      ["Test Reports", "/en/reports"],
    ],
  },
  {
    label: "About GTC",
    links: [
      ["Company Journey", "/en/#about"],
      ["Contact", "/en/#contact"],
    ],
  },
];

export default function SiteHeader({
  locale = "zh",
  ctaLabel,
  ctaShortLabel,
  ctaHref,
}: {
  locale?: "zh" | "en";
  ctaLabel?: string;
  ctaShortLabel?: string;
  ctaHref?: string;
}) {
  const isEnglish = locale === "en";
  const navigationGroups = isEnglish ? navigationGroupsEn : navigationGroupsZh;
  const homeHref = isEnglish ? "/en" : "/";
  const homeLabel = isEnglish ? "Home" : "首頁";
  const resolvedCtaLabel = ctaLabel ?? (isEnglish ? "Start Site Review" : "填寫場址初評");
  const resolvedCtaShortLabel = ctaShortLabel ?? (isEnglish ? "Site Review" : "填寫初評");
  const resolvedCtaHref = ctaHref ?? (isEnglish ? "/en/governance/intake" : "/governance/intake");
  const languageHref = isEnglish ? "/" : "/en";
  const languageLabel = isEnglish ? "中文" : "EN";

  return (
    <header className={`site-header${isEnglish ? " site-header-en" : ""}`}>
      <Link className="brand" href={homeHref} aria-label={isEnglish ? "GTC Global Holding Group home" : "GTC 全球控股集團首頁"}>
        <span className="brand-mark">G</span><span>GTC</span><small>GLOBAL HOLDING</small>
      </Link>

      <nav className="site-desktop-nav" aria-label={isEnglish ? "Primary navigation" : "全站主選單"}>
        <Link className="site-home-link" href={homeHref}>{homeLabel}</Link>
        {navigationGroups.map((group) => (
          <details className="site-nav-group" key={group.label}>
            <summary>{group.label}<span aria-hidden="true">＋</span></summary>
            <div className="site-nav-menu">
              {group.links.map(([label, href]) => <Link href={href} key={href}>{label}<span>↗</span></Link>)}
            </div>
          </details>
        ))}
      </nav>

      <Link className="site-language-link" href={languageHref} hrefLang={isEnglish ? "zh-Hant" : "en"}>{languageLabel}</Link>

      {resolvedCtaHref.startsWith("tel:") ? (
        <a className="site-primary-cta" href={resolvedCtaHref}>
          <span className="site-cta-long">{resolvedCtaLabel}</span><span className="site-cta-short">{resolvedCtaShortLabel}</span><b>↗</b>
        </a>
      ) : (
        <Link className="site-primary-cta" href={resolvedCtaHref}>
          <span className="site-cta-long">{resolvedCtaLabel}</span><span className="site-cta-short">{resolvedCtaShortLabel}</span><b>↗</b>
        </Link>
      )}

      <details className="site-mobile-nav">
        <summary>{isEnglish ? "Menu" : "選單"}<span aria-hidden="true">＋</span></summary>
        <div className="site-mobile-panel">
          <Link className="site-mobile-home" href={homeHref}>{homeLabel}</Link>
          {navigationGroups.map((group) => (
            <section key={group.label}>
              <h2>{group.label}</h2>
              {group.links.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
            </section>
          ))}
          <Link className="site-mobile-language" href={languageHref} hrefLang={isEnglish ? "zh-Hant" : "en"}>{languageLabel}</Link>
          {resolvedCtaHref.startsWith("tel:") ? <a className="site-mobile-primary" href={resolvedCtaHref}>{resolvedCtaLabel} <span>↗</span></a> : <Link className="site-mobile-primary" href={resolvedCtaHref}>{resolvedCtaLabel} <span>↗</span></Link>}
        </div>
      </details>
    </header>
  );
}
