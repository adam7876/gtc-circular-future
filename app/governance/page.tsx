import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "城市垃圾治理合作｜GTC 全球控股集團",
  description:
    "面向政府、城市與公共事業單位的垃圾治理合作說明，涵蓋掩埋場開挖、混雜廢塑分選、材料資源化與專案初評資料。",
};

const process = [
  {
    number: "01",
    title: "場址與垃圾資料盤點",
    description:
      "先確認垃圾來源、堆置年限、估計存量、現行處置方式與場址條件。資料不足時，以採樣和現場勘查補足判斷依據。",
  },
  {
    number: "02",
    title: "開挖與前端分選",
    description:
      "依場址條件規劃開挖與分選，將可回收物、惰性物質及篩上輕質料分流。實際設備配置須依垃圾組成評估。",
  },
  {
    number: "03",
    title: "混雜廢塑精細分選",
    description:
      "以自動分選為基礎，處理傳統回收鏈較難利用的混雜廢塑與輕質料，為後續材料化建立較穩定的進料條件。",
  },
  {
    number: "04",
    title: "複合材料再製造",
    description:
      "公司資料指出，核心材料製程不以焚燒或水洗為主，並將分選後材料製成可再次加工的複合高分子材料。",
  },
  {
    number: "05",
    title: "產品應用與回收路徑",
    description:
      "再生材料可延伸至司木建材、景觀構件、棧板等產品。產品使用後的回收與再製造條件，須依材料與專案規格確認。",
  },
];

const collaboration = [
  ["01", "提交場址摘要", "提供城市、垃圾來源、估計存量、現場照片及目前最需要解決的問題。"],
  ["02", "技術範圍確認", "雙方確認可處理範圍、需要補充的採樣資料，以及當地法規與基礎設施條件。"],
  ["03", "採樣或試驗規劃", "依垃圾組成決定是否進行樣品測試、小規模驗證或現場勘查。"],
  ["04", "專案方案評估", "取得必要資料後，再提出流程配置、產出去向、建置條件與後續合作範圍。"],
];

const dueDiligence = [
  ["處理能力", "日處理量、年運轉日數與擴充方式"],
  ["物料平衡", "各類進料、可回收物、再生材料與最終剩餘物比例"],
  ["環境控制", "廢氣、廢水、粉塵、異味、噪音及土壤與地下水監測"],
  ["建置條件", "用地、能源、人力、設備配置、施工期與維護需求"],
  ["商業條件", "投資費用、營運費用、材料與產品去向及合作模式"],
  ["法規文件", "當地許可、環評、工程標準與第三方驗證需求"],
];

export default function GovernancePage() {
  return (
    <main className="governance-page">
      <header className="governance-nav">
        <Link className="brand" href="/" aria-label="GTC 全球控股集團首頁">
          <span className="brand-mark">G</span><span>GTC</span><small>GLOBAL HOLDING</small>
        </Link>
        <nav aria-label="垃圾治理頁選單">
          <a href="#scope">方案範圍</a>
          <a href="#process">治理流程</a>
          <Link href="/governance/evidence">案例與證據</Link>
          <a href="#cooperation">合作方式</a>
          <Link href="/governance/intake">初評資料表</Link>
        </nav>
        <a className="nav-cta" href="#contact">提出場址需求 <span>↘</span></a>
      </header>

      <section className="governance-hero">
        <div className="governance-hero-copy">
          <p className="eyebrow">PUBLIC SECTOR PARTNERSHIP / WASTE REMEDIATION</p>
          <h1>城市垃圾治理合作</h1>
          <p>
            面對陳年掩埋場與難以進入既有回收鏈的混雜廢塑，GTC 將開挖治理、精細分選與材料再製造放在同一條處理路徑中。
          </p>
          <div className="governance-hero-actions">
            <a className="button primary" href="#cooperation">開始專案初評</a>
            <Link className="text-link" href="/governance/evidence">查看現有證據 <span>↗</span></Link>
          </div>
        </div>
        <div className="governance-hero-index" aria-label="方案摘要">
          <span>01</span>
          <p>LANDFILL<br/>TO RESOURCE</p>
          <dl>
            <div><dt>對象</dt><dd>掩埋垃圾與混雜廢塑</dd></div>
            <div><dt>方法</dt><dd>開挖、分選與材料化</dd></div>
            <div><dt>目的</dt><dd>降低堆置並建立資源去向</dd></div>
          </dl>
        </div>
      </section>

      <section className="governance-scope" id="scope">
        <div className="governance-heading">
          <p className="eyebrow">SCOPE / 01</p>
          <h2>先確認問題<br/>再決定處理方案</h2>
        </div>
        <div className="scope-summary">
          <p className="scope-lead">
            垃圾治理無法只靠單一設備回答。每個場址的垃圾組成、含水率、堆置年限與法規條件不同，合作應從資料盤點和樣品驗證開始。
          </p>
          <dl>
            <div><dt>目前聚焦</dt><dd>陳年掩埋場、篩上輕質料，以及難以用傳統方式回收的混雜廢塑。</dd></div>
            <div><dt>技術目的</dt><dd>將可利用材料分流，並把其中的混雜廢塑轉化為可再次製造的材料。</dd></div>
            <div><dt>專案前提</dt><dd>處理量、回收率、剩餘物與設備規模，必須依實際採樣及場址資料評估。</dd></div>
          </dl>
        </div>
      </section>

      <section className="governance-process" id="process">
        <header>
          <p className="eyebrow">PROCESS / 02</p>
          <h2>從場址盤點到材料去向</h2>
          <p>以下呈現目前資料可支持的治理邏輯。實際工程流程會依垃圾組成、當地法規與專案目標調整。</p>
        </header>
        <ol>
          {process.map((step) => (
            <li key={step.number}>
              <b>{step.number}</b>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="governance-evidence" id="evidence">
        <div className="evidence-film">
          <video controls playsInline preload="none" poster="/videos/landfill-recovery.jpg" aria-label="掩埋垃圾場開挖治理與生產過程介紹">
            <source src="/videos/landfill-recovery.mp4" type="video/mp4" />
            您的瀏覽器不支援影片播放，請<a href="/videos/landfill-recovery.mp4">開啟影片</a>觀看。
          </video>
          <p>現場紀錄 / 掩埋垃圾場開挖治理與生產過程介紹</p>
        </div>
        <div className="evidence-copy">
          <p className="eyebrow">FIELD EVIDENCE / 03</p>
          <h2>現場紀錄與既有驗證</h2>
          <p>
            公司資料記載，長山口實驗專案於 2021 年通過國家級專家審查。現有網站同時公開掩埋場治理影片、材料加工紀錄與產品檢測文件，供合作方建立初步理解。
          </p>
          <p className="evidence-note">
            上述專案資訊依 GTC 公司簡報整理。正式評估仍需查閱審查原件、專案邊界、處理數據與持續運轉紀錄。
          </p>
          <div className="evidence-links">
            <Link href="/governance/evidence">進入案例與證據頁 <span>↗</span></Link>
            <Link href="/videos#landfill-recovery">查看全部現場影片 <span>↗</span></Link>
            <Link href="/reports">查看產品檢測文件 <span>↗</span></Link>
          </div>
        </div>
      </section>

      <section className="governance-proof">
        <header>
          <p className="eyebrow">DUE DILIGENCE / 04</p>
          <h2>專案評估所需資料</h2>
          <p>
            現有檢測文件主要證明再生材料與產品性能。政府採購或城市級治理專案還需要以下場址與工程資料，產品測試不能取代治理成效驗證。
          </p>
        </header>
        <div className="proof-action"><Link className="button outline" href="/governance/intake">開啟場址初評資料表</Link><span>可直接填寫、列印或另存 PDF</span></div>
        <div className="due-diligence-list">
          {dueDiligence.map(([title, description], index) => (
            <div key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="governance-output">
        <div>
          <p className="eyebrow">RESOURCE OUTPUT / 05</p>
          <h2>資源化之後<br/>材料需要明確去向</h2>
          <p>
            司木建材、景觀構件與循環棧板，呈現再生材料可進入的應用方向。每一項工程仍須依規格、檢測報告及當地標準選用。
          </p>
          <Link className="button outline" href="/products">查看材料與產品</Link>
        </div>
        <div className="output-images">
          <Link href="/products/architecture">
            <img src="/catalog/architecture.jpg" alt="司木建築與景觀應用" loading="lazy" />
            <span>建築與景觀應用</span>
          </Link>
          <Link href="/products/recycled-pallet">
            <img src="/catalog/pallet.jpg" alt="再生塑料棧板" loading="lazy" />
            <span>循環棧板</span>
          </Link>
        </div>
      </section>

      <section className="governance-cooperation" id="cooperation">
        <header>
          <p className="eyebrow">PROJECT INTAKE / 06</p>
          <h2>政府合作流程</h2>
          <p>初次洽詢不需要完整規格書。先提供現有場址資訊，GTC 再判斷需要補充的採樣、文件與技術討論。</p>
        </header>
        <div className="collaboration-list">
          {collaboration.map(([number, title, description]) => (
            <article key={number}>
              <b>{number}</b><h3>{title}</h3><p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="governance-contact" id="contact">
        <div>
          <p className="eyebrow">START A SITE REVIEW</p>
          <h2>從一個場址<br/>開始技術評估</h2>
        </div>
        <div>
          <p>建議準備：國家與城市、垃圾來源、估計存量或每日產生量、現場照片，以及希望優先解決的環境問題。</p>
          <div className="governance-contact-actions"><Link className="button" href="/governance/intake">填寫初評資料表</Link><a className="button primary" href="tel:+88665811589">致電 +886 6 581 1589</a></div>
          <p className="contact-limitation">正式文件與場址資料的傳遞方式，將於初次聯絡後由專人確認。</p>
        </div>
      </section>

      <footer className="mini-footer governance-footer">
        <Link href="/">回到首頁</Link>
        <Link href="/videos">現場影片</Link>
        <Link href="/governance/evidence">案例與證據</Link>
        <Link href="/reports">檢測資料</Link>
        <Link href="/governance/intake">初評資料表</Link>
        <span>GTC 全球控股集團</span>
      </footer>
    </main>
  );
}
