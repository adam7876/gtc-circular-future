import type { Metadata } from "next";
import Link from "next/link";
import PrintButton from "./PrintButton";
import SiteHeader from "../../components/SiteHeader";

export const metadata: Metadata = {
  title: "場址初評資料表｜GTC 垃圾治理合作",
  description:
    "政府、城市與公共事業單位可使用此資料表整理垃圾來源、場址條件、既有監測資料與治理目標，作為 GTC 技術初評的討論基礎。",
};

const Field = ({ label, wide = false }: { label: string; wide?: boolean }) => (
  <label className={wide ? "intake-field intake-field-wide" : "intake-field"}>
    <span>{label}</span>
    <input type="text" autoComplete="off" />
  </label>
);

const Check = ({ children }: { children: React.ReactNode }) => (
  <label className="intake-check"><input type="checkbox" /> <span>{children}</span></label>
);

export default function GovernanceIntakePage() {
  return (
    <main className="intake-page">
      <SiteHeader ctaLabel="致電確認傳送方式" ctaShortLabel="致電確認" ctaHref="tel:+88665811589" />

      <section className="intake-hero">
        <div>
          <p className="eyebrow">SITE REVIEW WORKSHEET / 01</p>
          <h1>場址初評資料表</h1>
        </div>
        <div>
          <p>
            此表協助政府、城市與公共事業單位整理第一次技術討論需要的資訊。不確定的欄位可填「待確認」，不需要為了送出資料而自行估算。
          </p>
          <PrintButton />
          <p className="intake-privacy">本頁不會上傳或儲存填寫內容。請完成後列印，或使用瀏覽器另存為 PDF。</p>
        </div>
      </section>

      <section className="intake-path" aria-label="場址初評三步流程">
        <article><span>01</span><div><h2>填寫</h2><p>依現有資料填寫，不確定的欄位可註明「待確認」。</p></div></article>
        <article><span>02</span><div><h2>儲存</h2><p>列印紙本，或使用瀏覽器另存為 PDF 留存。</p></div></article>
        <article><span>03</span><div><h2>確認交付</h2><p>致電 GTC，確認正式文件與敏感資料的安全傳送方式。</p></div></article>
      </section>

      <nav className="intake-index" aria-label="初評資料表段落">
        <a href="#intake-contact">基本資料</a>
        <a href="#intake-waste">垃圾規模</a>
        <a href="#intake-site">場址條件</a>
        <a href="#intake-goals">治理目標</a>
        <a href="#intake-documents">既有文件</a>
        <a href="#intake-questions">討論問題</a>
      </nav>

      <form className="intake-form">
        <section className="intake-section" id="intake-contact">
          <header><b>01</b><div><h2>聯絡與專案基本資料</h2><p>確認負責單位及希望處理的地點。</p></div></header>
          <div className="intake-fields">
            <Field label="國家／地區" />
            <Field label="城市／行政區" />
            <Field label="政府或機構名稱" />
            <Field label="承辦單位／部門" />
            <Field label="聯絡人姓名與職稱" />
            <Field label="電話或電子信箱" />
            <Field label="場址名稱" wide />
            <Field label="場址地址或座標" wide />
          </div>
        </section>

        <section className="intake-section" id="intake-waste">
          <header><b>02</b><div><h2>垃圾來源與規模</h2><p>先區分歷史堆置量與目前每日新增量。</p></div></header>
          <div className="intake-fields">
            <Field label="估計總存量（噸）" />
            <Field label="目前每日新增量（噸／日）" />
            <Field label="最早堆置年份" />
            <Field label="可提供樣品數量" />
            <Field label="既有採樣或組成分析日期" wide />
          </div>
          <div className="intake-options">
            <p>主要來源</p>
            <div><Check>陳年掩埋垃圾</Check><Check>都市生活垃圾</Check><Check>轉運或分選後篩上物</Check><Check>混雜廢塑</Check><Check>其他</Check></div>
          </div>
          <label className="intake-textarea"><span>已知垃圾組成、含水率、污染物或其他特性</span><textarea rows={4} /></label>
        </section>

        <section className="intake-section" id="intake-site">
          <header><b>03</b><div><h2>場址與基礎設施</h2><p>設備配置需要土地、交通與能源條件。</p></div></header>
          <div className="intake-fields">
            <Field label="可使用土地面積" />
            <Field label="現有建築或棚廠面積" />
            <Field label="可用電力規格／容量" />
            <Field label="供水與排水條件" />
            <Field label="道路及大型車輛進出條件" wide />
          </div>
          <div className="intake-options">
            <p>場址現況</p>
            <div><Check>仍持續接收垃圾</Check><Check>已封場</Check><Check>可分區施工</Check><Check>鄰近住宅或敏感區</Check><Check>狀況待確認</Check></div>
          </div>
        </section>

        <section className="intake-section" id="intake-goals">
          <header><b>04</b><div><h2>目前處理方式與治理目標</h2><p>說明現況成本與希望優先改善的問題。</p></div></header>
          <label className="intake-textarea"><span>目前垃圾處理、轉運、焚化或掩埋方式</span><textarea rows={4} /></label>
          <div className="intake-options">
            <p>優先目標</p>
            <div><Check>降低掩埋量</Check><Check>改善異味或環境風險</Check><Check>回收混雜廢塑</Check><Check>恢復土地使用</Check><Check>建立再生材料去向</Check><Check>其他</Check></div>
          </div>
          <div className="intake-fields">
            <Field label="希望啟動評估的時間" />
            <Field label="預定完成或政策目標年份" />
          </div>
        </section>

        <section className="intake-section" id="intake-documents">
          <header><b>05</b><div><h2>法規、監測與既有文件</h2><p>正式方案需依當地法律與環境條件設計。</p></div></header>
          <div className="intake-options intake-documents">
            <p>可提供的資料</p>
            <div><Check>場址配置圖或航拍圖</Check><Check>現場照片與影片</Check><Check>垃圾組成或採樣報告</Check><Check>歷年進場量紀錄</Check><Check>地下水或滲出水監測</Check><Check>空氣、異味或粉塵監測</Check><Check>環境影響評估文件</Check><Check>現有許可與土地資料</Check><Check>現行處理成本資料</Check><Check>其他技術報告</Check></div>
          </div>
          <label className="intake-textarea"><span>當地法規、採購程序或其他限制</span><textarea rows={4} /></label>
        </section>

        <section className="intake-section intake-final" id="intake-questions">
          <header><b>06</b><div><h2>第一次技術會議希望確認的問題</h2><p>請列出最需要 GTC 回答的三至五項問題。</p></div></header>
          <label className="intake-textarea"><span>問題與補充說明</span><textarea rows={8} /></label>
          <aside>
            <h3>提交前檢查</h3>
            <Check>數據已註明單位與資料年份</Check>
            <Check>估計值與正式紀錄已清楚區分</Check>
            <Check>敏感或受限制文件已先確認傳遞方式</Check>
            <Check>知道無法確認的欄位已填「待確認」</Check>
          </aside>
        </section>
      </form>

      <section className="intake-end">
        <div><p className="eyebrow">NEXT STEP</p><h2>完成資料整理後<br/>安排初次技術討論</h2></div>
        <div><p>本頁不會自動送出資料。請先將內容列印或另存為 PDF，再致電 GTC 確認正式文件與場址資料的傳遞方式。</p><div className="intake-end-actions"><PrintButton /><a className="button primary" href="tel:+88665811589">致電 +886 6 581 1589</a></div></div>
      </section>

      <footer className="mini-footer governance-footer">
        <Link href="/">回到首頁</Link><Link href="/governance">垃圾治理合作</Link><Link href="/reports">檢測資料</Link><span>GTC 全球控股集團</span>
      </footer>
    </main>
  );
}
