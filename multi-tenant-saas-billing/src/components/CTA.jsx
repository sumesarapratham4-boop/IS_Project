function CTA() {
  return (
    <section className="cta-section">

      <div className="cta-glow"></div>

      <div className="cta-content">

        <span className="section-label">
          START BUILDING
        </span>

        <h2>
          Turn your usage data
          <br />
          into <span>business insight.</span>
        </h2>

        <p>
          Track usage, understand your customers,
          and build a smarter SaaS billing experience.
        </p>

        <div className="cta-buttons">

          <a href="#pricing" className="cta-primary">
            Get started for free
            <span>→</span>
          </a>

          <a href="#features" className="cta-secondary">
            Explore features
          </a>

        </div>

        <small>
          No credit card required · Setup in minutes
        </small>

      </div>

    </section>
  );
}

export default CTA;