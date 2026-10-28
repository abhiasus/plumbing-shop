import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar({ cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="av-header">
      <nav className="navbar navbar-expand-lg av-navbar">
        <div className="container">
          <Link
            className="navbar-brand av-brand"
            to="/"
            onClick={closeMenu}
          >
            <img
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt="AQUAVERA"
                className="av-logo-img"
            />

            <span>
              AQUAVERA
              <small>BATHROOM &amp; PLUMBING STUDIO</small>
            </span>
          </Link>

          <button
            className="navbar-toggler av-toggler"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i
              className={`bi ${
                menuOpen ? "bi-x-lg" : "bi-list"
              }`}
            />
          </button>

          <div
            className={`collapse navbar-collapse ${
              menuOpen ? "show" : ""
            }`}
          >
            <div className="navbar-nav mx-auto av-links">
              <NavLink
                end
                to="/"
                onClick={closeMenu}
                className="nav-link"
              >
                Home
              </NavLink>

              <NavLink
                to="/products"
                onClick={closeMenu}
                className="nav-link"
              >
                Products
              </NavLink>

              <NavLink
                to="/services"
                onClick={closeMenu}
                className="nav-link"
              >
                Services
              </NavLink>

              <NavLink
                to="/contact"
                onClick={closeMenu}
                className="nav-link"
              >
                Contact
              </NavLink>
            </div>

            <Link
              to="/cart"
              onClick={closeMenu}
              className="av-cart-link"
            >
              <i className="bi bi-bag" />
              <span>Bag</span>
              <span className="av-cart-count">{cartCount}</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}