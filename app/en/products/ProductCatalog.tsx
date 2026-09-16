"use client";

import Link from "next/link";
import { useState } from "react";
import { categories, products } from "./data";

export default function ProductCatalog() {
  const [active, setActive] = useState<(typeof categories)[number]>("All Products");
  const visible = active === "All Products" ? products : products.filter((product) => product.category === active);

  return <>
    <div className="catalog-tabs" role="tablist" aria-label="Product categories">
      {categories.map((category) => <button key={category} type="button" role="tab" aria-selected={active === category} onClick={() => setActive(category)}>{category}<span>{category === "All Products" ? products.length : products.filter((product) => product.category === category).length}</span></button>)}
    </div>
    <section className="catalog-grid">
      {visible.map((product, index) => <Link className="catalog-card" href={`/en/products/${product.slug}`} key={product.slug}>
        <div className="catalog-number">{String(index + 1).padStart(2, "0")} / {product.family.toUpperCase()}</div>
        <figure className="catalog-image"><img src={product.image} alt={`${product.name} catalog`} /></figure>
        <div className="catalog-card-copy"><span>{product.category}</span><h2>{product.name}</h2><p>{product.short}</p><b>View specifications and uses <i>↗</i></b></div>
      </Link>)}
    </section>
  </>;
}
