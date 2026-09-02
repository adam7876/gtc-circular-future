export type Product = {
  slug: string; name: string; english: string;
  category: "司木建材" | "空間應用" | "戶外家具" | "循環載具";
  short: string; description: string; image: string; material: string;
  features: string[]; use: string;
};

export const categories = ["全部產品", "司木建材", "空間應用", "戶外家具", "循環載具"] as const;

export const products: Product[] = [
  { slug:"smoof-basic", name:"潤滑木", english:"SMOOF BASIC", category:"司木建材", short:"WPC 木塑複合基礎系列，提供板材、角材與多種表面規格。", description:"以 WPC 木塑複合材料發展的基礎系列，從平板、企口板到結構角材皆有對應規格；可依應用選擇色澤與表面，適合作為戶外地板、圍籬與景觀構件的材料基礎。", image:"/catalog/smoof-basic.jpg", material:"WPC 木塑複合材料", features:["多種斷面與尺寸","戶外耐候應用","色澤與表面可選","可依工程需求加工"], use:"景觀地板、圍籬、欄杆、戶外構件" },
  { slug:"smoof-raise", name:"楓潤木", english:"SMOOF RAISE", category:"司木建材", short:"PVC 系列板材與線材，對應裝潢、櫃體及空間收邊。", description:"以 PVC 為材料基礎的板材與線材系列，型錄列有多款踢腳、收邊、板件與異形斷面，能延伸至室內裝潢、櫃體與機能空間。", image:"/catalog/smoof-raise.jpg", material:"PVC 複合材料", features:["板材與異形材完整","色彩選擇多元","容易清潔維護","適合空間系統整合"], use:"室內裝潢、櫃體、踢腳板、收邊系統" },
  { slug:"smoof-free", name:"艾司木", english:"SMOOF FREE", category:"司木建材", short:"HDPE 系列，適用於板材、建築內材及戶外機能構件。", description:"以 HDPE 為基礎的再生複合材料系列，重視耐水、耐候與材料穩定性。型錄呈現板材與結構斷面，可依實際場域進行設計與加工。", image:"/catalog/smoof-free.jpg", material:"HDPE 複合材料", features:["耐水耐候","多種斷面選擇","適合再生料應用","尺寸依專案確認"], use:"建築內材、戶外板材、潮濕環境構件" },
  { slug:"smoof-happy", name:"樂司木", english:"SMOOF HAPPY", category:"司木建材", short:"HIPS 系列，以色彩與造型彈性支援空間及創意應用。", description:"HIPS 系列提供豐富色彩與造型加工彈性，型錄中包含格柵、收邊、踏板與多種機能斷面，適合需要視覺辨識與造型表現的設計。", image:"/catalog/smoof-happy.jpg", material:"HIPS 複合材料", features:["色彩表現豐富","斷面造型多元","可進行設計加工","適合創意空間應用"], use:"格柵、收邊、踏板、展示與創意構件" },
  { slug:"smoof-grand", name:"森司木", english:"SMOOF GRAND", category:"司木建材", short:"TPE 彈性系列，對應需要柔韌、止滑或緩衝的應用。", description:"以 TPE 為材料基礎的彈性複合系列，保留柔韌與觸感特性，可用於需要止滑、包覆或緩衝的構件，實際硬度與規格依應用確認。", image:"/catalog/smoof-grand.jpg", material:"TPE 彈性複合材料", features:["柔韌與緩衝性","觸感與色澤可調","可作異形斷面","機能配方可共同開發"], use:"止滑構件、包覆件、緩衝與特殊機能材料" },
  { slug:"architecture", name:"建築與景觀系統", english:"ARCHITECTURE", category:"空間應用", short:"平台、涼亭、木屋、圍籬與公共景觀的整合應用。", description:"司木材料已延伸至平台、步道、涼亭、圍籬、小木屋及公共空間。以模組化構件整合耐候與易維護特性，減少天然木材使用。", image:"/catalog/architecture.jpg", material:"依場域選用司木系列", features:["室外耐候","模組化規劃","降低天然木材使用","適合公共與私人空間"], use:"公園、步道、涼亭、圍籬、小木屋" },
  { slug:"interior-system", name:"室內機能空間", english:"INTERIOR SYSTEM", category:"空間應用", short:"從廚房、浴室到櫃體，讓循環材料進入生活空間。", description:"型錄展示司木在廚房、浴室、地板與櫃體中的應用，依水氣、清潔與表面質感需求選擇材料，讓循環材料不只停留在工業端。", image:"/catalog/interior.jpg", material:"PVC／HDPE／複合板材", features:["耐水易清潔","櫃體與板材整合","表面色澤可選","空間尺寸客製"], use:"廚房、浴室、櫃體、室內地板" },
  { slug:"lounge", name:"休閒座椅系列", english:"LOUNGE SEATING", category:"戶外家具", short:"Bubble、Couch Potato 等休閒座椅，兼顧戶外造型與使用情境。", description:"戶外家具系列涵蓋吊椅、單椅、沙發與休閒躺座。藤編質感與有機曲線適合庭院、露台、飯店及商業休憩空間。", image:"/catalog/lounge.jpg", material:"戶外編織材料與金屬結構", features:["戶外情境設計","多款座椅與沙發","適合單品或成套配置","款式依型錄及供應確認"], use:"庭院、露台、飯店、泳池與商業休憩區" },
  { slug:"sun-lounge", name:"日光躺椅系列", english:"SUN LOUNGES", category:"戶外家具", short:"躺椅、遮棚與海灘休憩家具，為長時間戶外使用而設計。", description:"從 Beach、Rainbow 到 Sun Lounges，型錄呈現多種躺椅、遮棚與情境家具，可依泳池畔、海灘與度假場域進行組合。", image:"/catalog/sun-lounge.jpg", material:"戶外耐候面材與金屬結構", features:["躺臥角度與遮棚款式","適合濱海與泳池情境","系列化空間配置","顏色與款式依供應確認"], use:"泳池畔、海灘、度假村、戶外休憩空間" },
  { slug:"dining", name:"戶外餐桌椅系列", english:"DINING SET", category:"戶外家具", short:"餐桌、茶几與座椅套組，支援不同尺度的戶外聚會。", description:"型錄收錄圓桌、長桌、茶几及多種椅款，從精緻小型組合到多人用餐配置皆可選擇，適合住宅庭院與商業餐飲空間。", image:"/catalog/dining.jpg", material:"戶外編織、板材與金屬結構", features:["二至多人套組","桌椅系列化搭配","多種造型語彙","可依空間尺度選型"], use:"戶外餐飲、庭院聚會、咖啡座、商業空間" },
  { slug:"recycled-pallet", name:"環保棧板", english:"RECYCLED PALLET", category:"循環載具", short:"以再生 PVC 製作、可回收再利用的物流棧板。", description:"型錄介紹以 PVC 再生材料製作的環保棧板，對應倉儲、運輸與出口周轉；材料不以天然木材為基礎，並可進一步回收再利用。", image:"/catalog/pallet.jpg", material:"再生 PVC", features:["防水與易清潔","免除木材蟲蛀疑慮","可回收再利用","尺寸與承載依需求確認"], use:"倉儲物流、出口運輸、廠內周轉" },
];

export function getProduct(slug: string) { return products.find((product) => product.slug === slug); }
