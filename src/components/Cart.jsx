import { useState } from "react";
import { Link } from "react-router-dom";

export default function Cart({
  cart,
  changeQuantity,
  removeFromCart,
}) {
  const [checkout, setCheckout] = useState(false);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main className="container av-page">
      <div className="av-page-heading">
        <span className="av-eyebrow">YOUR SELECTED PIECES</span>

        <h1>Your Shopping Bag</h1>

        <p>Review your chosen products before proceeding.</p>
      </div>

      {cart.length === 0 ? (
        <div className="av-empty-cart">
          <i className="bi bi-bag" />

          <h2>Your bag is waiting</h2>

          <p>
            Discover pieces that bring your space together.
          </p>

          <Link to="/products" className="btn av-btn">
            Explore Products
          </Link>
        </div>
      ) : (
        <div className="av-cart-panel">
          {cart.map((item) => (
            <div className="av-cart-row" key={item.id}>
              <img
                src={item.image}
                alt={item.name}
              />

              <div className="av-cart-product">
                <h3>{item.name}</h3>

                <p>
                  ₹{item.price.toLocaleString("en-IN")} each
                </p>
              </div>

              <div className="av-quantity">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => changeQuantity(item.id, -1)}
                >
                  −
                </button>

                <span>{item.quantity}</span>

                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => changeQuantity(item.id, 1)}
                >
                  +
                </button>
              </div>

              <strong className="av-line-total">
                ₹
                {(item.price * item.quantity).toLocaleString("en-IN")}
              </strong>

              <button
                type="button"
                className="av-remove"
                aria-label={`Remove ${item.name}`}
                onClick={() => removeFromCart(item.id)}
              >
                <i className="bi bi-trash" />
              </button>
            </div>
          ))}

          <div className="av-cart-total">
            <span>Subtotal</span>

            <strong>
              ₹{total.toLocaleString("en-IN")}
            </strong>
          </div>

          <p className="av-cart-caption">
            Delivery charges, if any, are calculated separately.
          </p>

          <div className="d-flex flex-wrap gap-3 align-items-center">
            <Link to="/products" className="btn av-outline">
              <i className="bi bi-arrow-left me-2" />
              Continue Shopping
            </Link>

            <button
              className="btn av-btn"
              onClick={() => setCheckout(true)}
            >
              Proceed to Checkout
            </button>
          </div>

          {checkout && (
            <p className="av-success">
              Demo checkout selected. No payment has been processed.
            </p>
          )}
        </div>
      )}
    </main>
  );
}