"use client";

import Link from "next/link";
import { useState } from "react";
import { categories, products } from "./data";

export default function ProductCatalog() {
  const [active, setActive] = useState<(typeof categories)[number]>("全部產品");
  const visible = active === "全部產品" ? products : products.filter((product) => product.category === active);

  return <>
    <div className="catalog-tabs" role="tablist" aria-label="產品分類">
      {categories.map((category) => <button key={category} type="button" role="tab" aria-selected={active === category} onClick={() => setActive(category)}>{category}<span>{category === "全部產品" ? products.length : products.filter((product) => product.category === category).length}</span></button>)}
    </div>
    <section className="catalog-grid">
      {visible.map((product, index) => <Link className="catalog-card" href={`/products/${product.slug}`} key={product.slug}>
        <div className="catalog-number">{String(index + 1).padStart(2, "0")} / {product.english}</div>
        <figure className="catalog-image"><img src={product.image} alt={`${product.name}產品型錄`} /></figure>
        <div className="catalog-card-copy"><span>{product.category}</span><h2>{product.name}</h2><p>{product.short}</p><b>查看規格與應用 <i>↗</i></b></div>
      </Link>)}
    </section>
  </>;
}
