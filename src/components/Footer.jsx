import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="av-footer">
      <div className="container">
        <div className="row g-4 text-center">
          <div className="col-12">
            <Link to="/" className="av-brand footer-av-brand">
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

            <p className="av-footer-description">
              Bringing style and function to everyday living
              through thoughtfully selected plumbing and
              bathroom products.
            </p>
          </div>

          <div className="col-12">
            <h6>Discover</h6>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/services">Our Services</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/cart">Shopping Bag</Link>
          </div>

          <div className="col-12">
            <h6>Visit &amp; Connect</h6>

            <p>
              <i className="bi bi-geo-alt" />
              Bengaluru, Karnataka
            </p>

            <p>
              <i className="bi bi-envelope" />
              support@aquavera.in
            </p>

            <p>
              <i className="bi bi-clock" />
              Monday–Saturday, 10 AM–6 PM
            </p>

            <div className="av-socials">
              <a href="https://www.instagram.com/" aria-label="Instagram">
                <i className="bi bi-instagram" />
              </a>

              <a href="https://www.facebook.com/" aria-label="Facebook">
                <i className="bi bi-facebook" />
              </a>

              <a href="https://www.pinterest.com/" aria-label="Pinterest">
                <i className="bi bi-pinterest" />
              </a>
            </div>
          </div>
        </div>

        <div className="av-copyright">
          © 2026 AQUAVERA. All rights reserved.
        </div>
      </div>
    </footer>
  );
}