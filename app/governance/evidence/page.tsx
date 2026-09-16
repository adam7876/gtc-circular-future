import type { Metadata } from "next";
import Link from "next/link";
import { reports } from "../../reports/data";
import SiteHeader from "../../components/SiteHeader";
import { createPageMetadata } from "../../lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "垃圾治理案例與證據｜GTC 全球控股集團",
  description:
    "整理 GTC 垃圾治理現場影片、公司簡報中的專案紀錄、產品檢測文件，以及政府專案仍需補充查證的資料。",
  path: "/governance/evidence",
});

const observedStages = [
  {
    number: "01",
    time: "約 00:24",
    title: "場址與作業環境",
    description:
      "影片可見垃圾堆置區、工程車輛與作業設施，呈現治理工作所處的現場尺度。公開素材未標示拍攝地點與日期。",
  },
  {
    number: "02",
    time: "約 02:14",
    title: "前端分選流程",
    description:
      "影片可見輸送與分選設備處理混合物料。畫面可說明流程存在，但不能據此推算設備處理量或回收率。",
  },
  {
    number: "03",
    time: "約 04:03",
    title: "後端材料製造",
    description:
      "影片記錄分選後材料進入製造端的作業情境，提供資源化去向的視覺紀錄；完整物料平衡仍需專案數據支持。",
  },
];

const evidenceRegister = [
  {
    type: "現場影片",
    state: "已公開",
    supports: "可觀察開挖、輸送分選與後端製造的作業情境。",
    boundary: "未公開場址、拍攝日期、連續運轉時數與設備處理量。",
  },
  {
    type: "長山口專案敘述",
    state: "公司簡報記載",
    supports: "公司資料記載專案於 2021 年通過國家級專家審查。",
    boundary: "網站尚未公開審查原件、審查單位、範圍與量化結果。",
  },
  {
    type: "材料與產品檢測",
    state: "已公開",
    supports: "可查閱特定樣品於報告條件下的材料、耐候與產品檢測結果。",
    boundary: "產品測試不能單獨證明垃圾治理量能、污染控制或整體回收率。",
  },
  {
    type: "產品與加工影片",
    state: "已公開",
    supports: "可觀察司木加工、棧板生產與材料應用方向。",
    boundary: "影像本身不代表所有進料均來自同一治理場址。",
  },
];

const featuredReports = reports.filter((report) =>
  ["wpc-material-test", "pallet-inspection", "formwork-test"].includes(report.slug),
);

export default function GovernanceEvidencePage() {
  return (
    <main className="gov-evidence-page">
      <SiteHeader />

      <section className="gov-evidence-hero">
        <div>
          <p className="eyebrow">CASE RECORD / EVIDENCE REVIEW</p>
          <h1>垃圾治理<br/>案例與證據</h1>
        </div>
        <div className="gov-evidence-hero-copy">
          <p>
            把現場紀錄、公司敘述與檢測文件放在各自正確的位置，讓合作方看見目前已能查閱的資料，也清楚知道正式決策前還需要什麼。
          </p>
          <div className="gov-evidence-hero-links">
            <a href="#field-record">查看現場紀錄 <span>↓</span></a>
            <Link href="/governance/intake">開始場址初評 <span>↗</span></Link>
          </div>
        </div>
      </section>

      <section className="gov-evidence-position">
        <header>
          <p className="eyebrow">EVIDENCE POSITION / 01</p>
          <h2>先分清楚<br/>資料能證明什麼</h2>
        </header>
        <div className="gov-evidence-status">
          <article>
            <span>已公開</span>
            <h3>可直接查閱的資料</h3>
            <p>垃圾治理現場影片、材料加工影片、產品型錄，以及十份材料與產品檢測文件。</p>
          </article>
          <article>
            <span>依公司資料記載</span>
            <h3>需要原件支持的敘述</h3>
            <p>長山口實驗專案於 2021 年通過國家級專家審查；目前網站未公開該審查原件。</p>
          </article>
          <article>
            <span>正式專案需補充</span>
            <h3>尚不能直接下結論</h3>
            <p>處理量、回收率、物料平衡、污染排放、連續運轉、投資與營運成本。</p>
          </article>
        </div>
      </section>

      <section className="gov-field-record" id="field-record">
        <header className="gov-evidence-section-heading">
          <p className="eyebrow">FIELD RECORD / 02</p>
          <h2>先看原始影片<br/>再閱讀觀察整理</h2>
          <p>
            以下直接呈現 GTC 提供的「掩埋垃圾場開挖治理與生產過程介紹」原始影片。觀察整理僅限於影片可辨識內容，不以影像推定未揭露的工程數據。
          </p>
        </header>
        <div className="gov-evidence-video">
          <video controls playsInline preload="metadata" aria-label="掩埋垃圾場開挖治理與生產過程介紹">
            <source src="/videos/landfill-recovery.mp4" type="video/mp4" />
            您的瀏覽器不支援影片播放，請<a href="/videos/landfill-recovery.mp4">開啟影片</a>觀看。
          </video>
          <div>
            <p className="eyebrow">FULL FIELD FILM</p>
            <h3>掩埋垃圾場開挖治理與生產過程介紹</h3>
            <p>GTC 提供的原始影片，完整長度約五分鐘。影片可作為初步流程理解，正式查證仍應搭配場址文件、設備規格與運轉紀錄。</p>
            <Link href="/videos#landfill-recovery">前往影片專區查看說明 <span>↗</span></Link>
          </div>
        </div>
        <div className="gov-observed-label">
          <p className="eyebrow">OBSERVED IN THE FILM</p>
          <p>下列時間為方便查找的約略位置，請以播放器顯示為準。</p>
        </div>
        <div className="gov-observed-stages">
          {observedStages.map((stage) => (
            <article key={stage.number}>
              <span>{stage.number}</span>
              <div><small>{stage.time}</small><h3>{stage.title}</h3><p>{stage.description}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="gov-project-record" id="project-record">
        <div className="gov-project-year">
          <span>2021</span>
          <p>公司簡報中的專案里程碑</p>
        </div>
        <div className="gov-project-copy">
          <p className="eyebrow">CORPORATE RECORD / 03</p>
          <h2>長山口實驗專案</h2>
          <blockquote>公司資料記載，長山口實驗專案於 2021 年通過國家級專家審查。</blockquote>
          <div className="gov-claim-boundaries">
            <article>
              <h3>目前可以陳述</h3>
              <p>這是 GTC 公司簡報中的既有專案紀錄，可用來說明公司主張的發展歷程與驗證節點。</p>
            </article>
            <article>
              <h3>目前不能延伸陳述</h3>
              <p>在審查原件公開前，不能自行推論審查範圍、處理能力、環境績效、經濟效益或長期運轉結果。</p>
            </article>
          </div>
          <p className="gov-source-note">資料來源：GTC 集團公司介紹簡報。網站尚待補入審查文件原件或可公開摘要。</p>
        </div>
      </section>

      <section className="gov-evidence-register" id="evidence-register">
        <header className="gov-evidence-section-heading">
          <p className="eyebrow">EVIDENCE REGISTER / 04</p>
          <h2>證據適用範圍</h2>
          <p>每一份資料都保留其用途與邊界，避免把產品測試、現場影像與城市級治理成效混為一談。</p>
        </header>
        <div className="gov-register-table" role="table" aria-label="垃圾治理證據適用範圍">
          <div className="gov-register-head" role="row">
            <span role="columnheader">資料類型</span><span role="columnheader">目前狀態</span><span role="columnheader">可支持</span><span role="columnheader">不能取代</span>
          </div>
          {evidenceRegister.map((item, index) => (
            <article role="row" key={item.type}>
              <h3 role="cell"><b>{String(index + 1).padStart(2, "0")}</b>{item.type}</h3>
              <p role="cell"><span>目前狀態</span>{item.state}</p>
              <p role="cell"><span>可支持</span>{item.supports}</p>
              <p role="cell"><span>不能取代</span>{item.boundary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="gov-product-proof">
        <header>
          <p className="eyebrow">DOWNSTREAM VERIFICATION / 05</p>
          <h2>產品檢測證明的是<br/>資源化後的特定樣品</h2>
          <p>
            這些文件可用於了解材料或產品在各報告測試條件下的表現。它們是資源去向的佐證之一，但不是垃圾治理成效報告。
          </p>
        </header>
        <div className="gov-report-links">
          {featuredReports.map((report, index) => (
            <a href={report.file} target="_blank" rel="noreferrer" key={report.slug}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><small>{report.agency} / {report.category}</small><h3>{report.title}</h3></div>
              <b>開啟原始文件 ↗</b>
            </a>
          ))}
        </div>
        <Link className="text-link" href="/reports">查看全部十份檢測文件 <span>↗</span></Link>
      </section>

      <section className="gov-next-review" id="next-review">
        <div>
          <p className="eyebrow">NEXT DUE DILIGENCE / 06</p>
          <h2>正式合作前<br/>把缺口變成查證清單</h2>
        </div>
        <div>
          <p>
            下一階段應取得原始審查文件、場址基本資料、垃圾組成、設備規格、物料平衡、環境監測、連續運轉紀錄與成本邊界。這些資料將決定技術能否對應特定城市，而不是由網站文案代替答案。
          </p>
          <div className="gov-next-actions">
            <Link className="button primary" href="/governance/intake">填寫場址初評資料表</Link>
            <Link className="button outline" href="/governance">返回治理合作方案</Link>
          </div>
        </div>
      </section>

      <footer className="mini-footer governance-footer">
        <Link href="/">回到首頁</Link>
        <Link href="/governance">垃圾治理合作</Link>
        <Link href="/videos">現場影片</Link>
        <Link href="/reports">檢測資料</Link>
        <span>GTC 全球控股集團</span>
      </footer>
    </main>
  );
}
