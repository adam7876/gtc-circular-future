import { reports as sourceReports } from "../../reports/data";

const translations: Record<string, { title: string; category: string; agency: string }> = {
  "wpc-material-test": {title:"WPC Plastic Wood Test Report",category:"Material Tests",agency:"SGS"},
  "wpc-hips-tpe-weathering": {title:"WPC, HIPS and TPE Weathering Test Report",category:"Weathering Tests",agency:"SGS"},
  "tpe-weathering": {title:"TPE Weathering Test Report",category:"Weathering Tests",agency:"SGS"},
  "hips-weathering": {title:"HIPS Weathering Test Report",category:"Weathering Tests",agency:"SGS"},
  "eco-imitation-wood-test": {title:"Eco Imitation Wood Test Report",category:"Material Tests",agency:"Laboratory report"},
  "pallet-inspection": {title:"Pallet Inspection Report — 14 May 2021",category:"Product Tests",agency:"Inspection report"},
  "formwork-test": {title:"Formwork Test Report 101A011-J111983",category:"Product Tests",agency:"Plastics Industry Development Center"},
  "corrugated-sheet-test": {title:"Corrugated Sheet Test Report",category:"Product Tests",agency:"Laboratory report"},
  "yeaderlih-hips-test": {title:"Yeaderlih HIPS Plastic Wood Test Report",category:"Material Tests",agency:"Laboratory report"},
  "moon-world-inspection": {title:"Moon World Inspection Report",category:"Other Sample Tests",agency:"Laboratory report"},
};

export const reports = sourceReports.map((report) => ({...report, ...translations[report.slug]}));
export const reportCategories = ["Weathering Tests","Material Tests","Product Tests","Other Sample Tests"];
