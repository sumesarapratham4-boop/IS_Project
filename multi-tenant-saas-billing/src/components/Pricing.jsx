const plans = [
  {
    name: "Starter",
    description: "For small teams getting started.",
    price: "₹499",
    features: [
      "10,000 API requests",
      "10 GB storage",
      "3 team members",
      "Basic analytics",
      "Email support"
    ]
  },
  {
    name: "Pro",
    description: "For growing SaaS businesses.",
    price: "₹2,499",
    popular: true,
    features: [
      "100,000 API requests",
      "50 GB storage",
      "10 team members",
      "Advanced analytics",
      "Usage-based billing",
      "API access"
    ]
  },
  {
    name: "Enterprise",
    description: "For large-scale SaaS platforms.",
    price: "Custom",
    features: [
      "Custom usage limits",
      "Unlimited team members",
      "Advanced security",
      "Priority support",
      "Custom integrations",
      "Dedicated assistance"
    ]
  }
];

function Pricing() {
  return (
    <section className="pricing-section" id="pricing">

      <div className="section-container">

        <div className="section-heading centered">

          <span className="section-label">
            SIMPLE PRICING
          </span>

          <h2>
            Plans that grow
            <span> with your business.</span>
          </h2>

          <p>
            Start small and upgrade whenever
            your SaaS needs more power.
          </p>

        </div>

        <div className="pricing-grid">

          {plans.map((plan) => (

            <div
              className={`pricing-card ${
                plan.popular ? "popular" : ""
              }`}
              key={plan.name}
            >

              {plan.popular && (
                <div className="popular-badge">
                  MOST POPULAR
                </div>
              )}

              <h3>
                {plan.name}
              </h3>

              <p className="plan-description">
                {plan.description}
              </p>

              <div className="price">

                <strong>
                  {plan.price}
                </strong>

                {plan.price !== "Custom" && (
                  <span>/month</span>
                )}

              </div>

              <button className="plan-button">
                {plan.name === "Enterprise"
                  ? "Contact sales"
                  : "Start free"}
                <span>→</span>
              </button>

              <div className="feature-divider"></div>

              <p className="includes">
                Includes:
              </p>

              <ul>

                {plan.features.map((feature) => (

                  <li key={feature}>
                    <span>✓</span>
                    {feature}
                  </li>

                ))}

              </ul>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Pricing;