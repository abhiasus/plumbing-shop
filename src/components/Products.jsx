import { useState } from "react";

import { products } from "../data/products";

export default function Products({ addToCart }) {
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts =
    category === "All"
      ? products
      : products.filter(
          (product) => product.category === category
        );

  return (
    <main className="container av-page">
      <div className="av-page-heading">
        <span className="av-eyebrow">
          THE AQUAVERA COLLECTION
        </span>

        <h1>Considered Essentials</h1>

        <p>
          Explore contemporary bathroom fixtures and plumbing
          essentials for your space.
        </p>
      </div>

      <div className="av-filters">
        {categories.map((item) => (
          <button
            key={item}
            className={category === item ? "active" : ""}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="row g-4">
        {filteredProducts.map((product) => (
          <div className="col-6 col-lg-3" key={product.id}>
            <article className="av-product-card">
              <div className="av-product-image">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                />

                <span className="av-product-tag">
                  {product.category}
                </span>
              </div>

              <div className="av-product-info">
                <h3>{product.name}</h3>

                <strong>
                  ₹{product.price.toLocaleString("en-IN")}
                </strong>

                <button
                  className="btn av-add-btn"
                  onClick={() => addToCart(product)}
                >
                  <i className="bi bi-bag-plus" />
                  Add to Bag
                </button>
              </div>
            </article>
          </div>
        ))}
      </div>
    </main>
  );
}