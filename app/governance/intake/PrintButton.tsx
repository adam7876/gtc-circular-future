"use client";

export default function PrintButton() {
  return (
    <button className="button primary intake-print-button" type="button" onClick={() => window.print()}>
      列印或儲存為 PDF
    </button>
  );
}
