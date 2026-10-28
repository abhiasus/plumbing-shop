
import { Link } from "react-router-dom";

const services = [
  {
    icon: "bi-palette",
    title: "Bathroom Design Consultation",
    description:
      "Explore finishes, styles and practical choices for your bathroom.",
  },
  {
    icon: "bi-droplet",
    title: "Installation Guidance",
    description:
      "Get advice on choosing fittings that suit your space.",
  },
  {
    icon: "bi-tools",
    title: "Repair & Replacement",
    description:
      "Find suitable replacement products for everyday plumbing needs.",
  },
  {
    icon: "bi-house-check",
    title: "Product Selection Support",
    description:
      "Compare materials, styles and features with our team.",
  },
];

export default function Services() {
  return (
    <main className="container av-page">
      <div className="av-page-heading">
        <span className="av-eyebrow">PERSONAL GUIDANCE</span>

        <h1>Services with You in Mind</h1>

        <p>
          Thoughtful support to help you create a space that feels right.
        </p>
      </div>

      <div className="row g-4">
        {services.map((service) => (
          <div className="col-md-6" key={service.title}>
            <article className="av-service-card">
              <div className="av-service-icon">
                <i className={`bi ${service.icon}`} />
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <Link to="/contact">
                Let's discuss
                <i className="bi bi-arrow-up-right ms-2" />
              </Link>
            </article>
          </div>
        ))}
      </div>

      <section className="av-note mt-5">
        <span className="av-eyebrow">YOUR SPACE, YOUR STYLE</span>

        <h2>Have a project in mind?</h2>

        <p>
          Share your ideas with us and start exploring suitable options.
        </p>

        <Link className="btn av-btn" to="/contact">
          Get in Touch
        </Link>
      </section>
    </main>
  );
}
