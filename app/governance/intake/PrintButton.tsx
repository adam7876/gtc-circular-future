"use client";

export default function PrintButton({ label = "列印或儲存為 PDF" }: { label?: string }) {
  return (
    <button className="button primary intake-print-button" type="button" onClick={() => window.print()}>
      {label}
    </button>
  );
}
