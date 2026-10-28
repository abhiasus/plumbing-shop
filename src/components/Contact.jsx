import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function submitForm(event) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <main className="container av-page">
      <div className="av-page-heading">
        <span className="av-eyebrow">
          WE'D LOVE TO HEAR FROM YOU
        </span>

        <h1>Let's Talk About Your Space</h1>

        <p>
          Ask us about a product, a fitting or your next
          home improvement project.
        </p>
      </div>

      <div className="row g-4 align-items-stretch">
        <div className="col-lg-5">
          <div className="av-contact-info">
            <span className="av-eyebrow">GET IN TOUCH</span>

            <h2>Good design starts with a conversation.</h2>

            <p>
              <i className="bi bi-geo-alt" />
              Bengaluru, Karnataka, India
            </p>

            <p>
              <i className="bi bi-envelope" />
              support@aquavera.in
            </p>

            <p>
              <i className="bi bi-clock" />
              Monday–Saturday, 10 AM–6 PM
            </p>
          </div>
        </div>

        <div className="col-lg-7">
          <form className="av-form" onSubmit={submitForm}>
            <h2>Send an Enquiry</h2>

            <label>
              Your Name
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Your full name"
                required
              />
            </label>

            <label>
              Email Address
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="you@example.com"
                required
              />
            </label>

            <label>
              What are you looking for?
              <select
                name="subject"
                className="form-select"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select a topic
                </option>
                <option>Product enquiry</option>
                <option>Bathroom consultation</option>
                <option>Installation guidance</option>
                <option>Repair and replacement</option>
                <option>Other question</option>
              </select>
            </label>

            <label>
              Your Message
              <textarea
                name="message"
                rows="4"
                className="form-control"
                placeholder="Tell us about your project"
                required
              />
            </label>

            <button className="btn av-btn" type="submit">
              Send Enquiry
              <i className="bi bi-arrow-right ms-2" />
            </button>

            {sent && (
              <p className="av-success">
                Thank you! Your enquiry has been captured in this demo.
              </p>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}