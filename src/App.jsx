
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Products from "./components/Products";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Cart from "./components/Cart";

export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((previous) => {
      const existing = previous.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return previous.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...previous, { ...product, quantity: 1 }];
    });
  }

  function changeQuantity(id, amount) {
    setCart((previous) =>
      previous
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeFromCart(id) {
    setCart((previous) =>
      previous.filter((item) => item.id !== id)
    );
  }

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <Navbar cartCount={cartCount} />

      <div className="av-nav-gap" />

      <Routes>
        <Route
          path="/"
          element={<Home addToCart={addToCart} />}
        />

        <Route
          path="/products"
          element={<Products addToCart={addToCart} />}
        />

        <Route path="/services" element={<Services />} />

        <Route path="/contact" element={<Contact />} />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              changeQuantity={changeQuantity}
              removeFromCart={removeFromCart}
            />
          }
        />

        <Route
          path="*"
          element={<Home addToCart={addToCart} />}
        />
      </Routes>

      <Footer />
    </>
  );
}
