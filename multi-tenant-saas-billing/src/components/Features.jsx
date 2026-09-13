const features = [
  {
    icon: "◫",
    title: "Real-time usage tracking",
    description:
      "Monitor API calls, storage, users, bandwidth and custom metrics in real time."
  },
  {
    icon: "₹",
    title: "Usage-based billing",
    description:
      "Automatically calculate charges based on your customers' actual usage."
  },
  {
    icon: "◎",
    title: "Multi-tenant architecture",
    description:
      "Keep every organization's data isolated while managing everything from one platform."
  },
  {
    icon: "▣",
    title: "Subscriptions & plans",
    description:
      "Create flexible plans with limits, pricing tiers and usage-based charges."
  },
  {
    icon: "⌁",
    title: "Powerful analytics",
    description:
      "Understand revenue, usage trends, customer growth and business performance."
  },
  {
    icon: "♢",
    title: "Team management",
    description:
      "Invite members and control access with powerful role-based permissions."
  }
];

function Features() {
  return (
    <section className="features-section" id="features">

      <div className="section-container">

        <div className="section-heading">

          <span className="section-label">
            POWERFUL FEATURES
          </span>

          <h2>
            Everything you need to
            <span> run your SaaS billing.</span>
          </h2>

          <p>
            From usage tracking to revenue analytics,
            SaaSTrack gives you the tools to understand
            and manage your entire SaaS business.
          </p>

        </div>

        <div className="features-grid">

          {features.map((feature, index) => (

            <div
              className="feature-card"
              key={index}
            >

              <div className="feature-icon">
                {feature.icon}
              </div>

              <h3>
                {feature.title}
              </h3>

              <p>
                {feature.description}
              </p>

              <a href="#pricing">
                Learn more →
              </a>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;