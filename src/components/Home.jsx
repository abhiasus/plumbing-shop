import { Link } from "react-router-dom";

import { products } from "../data/products";

const featuredProducts = products.slice(0, 4);

export default function Home({ addToCart }) {
  return (
    <>
      <section className="container av-hero">
        <div className="av-hero-content">
          <span className="av-eyebrow">
            THE ART OF EVERYDAY LIVING
          </span>

          <h1>
            Elegant Plumbing
            <br />
            for Modern Living
          </h1>

          <p>
            Discover thoughtfully selected taps, showers,
            basins and refined essentials for your home.
          </p>

          <Link to="/products" className="btn av-btn">
            Explore Collection
            <i className="bi bi-arrow-right ms-2" />
          </Link>
        </div>
      </section>

      <section className="container av-benefits">
        <div>
          <i className="bi bi-gem" />
          <span>
            Premium Quality
            <small>Beautifully made</small>
          </span>
        </div>

        <div>
          <i className="bi bi-flower1" />
          <span>
            Modern Design
            <small>Timeless details</small>
          </span>
        </div>

        <div>
          <i className="bi bi-person-check" />
          <span>
            Expert Guidance
            <small>Help when you need it</small>
          </span>
        </div>

        <div>
          <i className="bi bi-truck" />
          <span>
            Reliable Delivery
            <small>Carefully handled</small>
          </span>
        </div>
      </section>

      <section className="container av-section">
        <div className="av-section-heading">
          <span className="av-eyebrow">
            CURATED FOR YOUR HOME
          </span>

          <h2>Details Make the Difference</h2>

          <p>
            Beautiful, practical fittings for the spaces
            you use every day.
          </p>
        </div>

        <div className="row g-4">
          {featuredProducts.map((product) => (
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

        <div className="text-center mt-4">
          <Link to="/products" className="btn av-outline">
            View the Collection
          </Link>
        </div>
      </section>

      <section className="av-lifestyle">
        <div className="container">
          <span className="av-eyebrow">
            A MORE THOUGHTFUL SPACE
          </span>

          <h2>Small details. A more beautiful home.</h2>

          <p>
            From choosing a finish to planning a bathroom
            update, let us help you find the right fit.
          </p>

          <Link to="/services" className="btn av-btn">
            Discover Our Services
            <i className="bi bi-arrow-right ms-2" />
          </Link>
        </div>
      </section>
    </>
  );
}