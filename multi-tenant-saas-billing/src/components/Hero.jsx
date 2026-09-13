function Hero({ onLogin }) {
  return (
    <section className="hero">

      <div className="hero-glow glow-one"></div>
      <div className="hero-glow glow-two"></div>

      <div className="hero-container">

        <div className="hero-content">

          <div className="announcement">
            <span className="announcement-dot"></span>
            Built for modern SaaS teams
            <span className="announcement-arrow">→</span>
          </div>

          <h1>
            Know exactly what
            <span> your SaaS costs.</span>
          </h1>

          <p className="hero-description">
            Track usage, manage subscriptions, automate billing,
            and understand your revenue — all from one powerful
            multi-tenant platform.
          </p>

          <div className="hero-buttons">

            <a href="#pricing" className="primary-button">
              Start for free
              <span>→</span>
            </a>

            <button
              className="secondary-button"
              onClick={onLogin}
            >
              View dashboard
              <span>↗</span>
            </button>

          </div>

          <div className="hero-trust">

            <div className="trust-avatars">
              <div>A</div>
              <div>B</div>
              <div>C</div>
              <div>D</div>
            </div>

            <div>
              <div className="stars">★★★★★</div>
              <p>
                Trusted by growing SaaS teams
              </p>
            </div>

          </div>

        </div>

        <div className="hero-side">

          <div className="floating-card card-top">
            <div className="floating-icon">↗</div>
            <div>
              <strong>+24.8%</strong>
              <small>Monthly revenue</small>
            </div>
          </div>

          <div className="floating-card card-bottom">
            <div className="status-check">✓</div>
            <div>
              <strong>Usage tracked</strong>
              <small>All systems operational</small>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;