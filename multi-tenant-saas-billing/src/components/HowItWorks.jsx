const steps = [
  {
    number: "01",
    title: "Create your organization",
    description:
      "Create an account and invite your team. Your organization gets its own secure workspace."
  },
  {
    number: "02",
    title: "Connect your usage",
    description:
      "Send usage events through our API and start tracking resources across your application."
  },
  {
    number: "03",
    title: "Track & bill",
    description:
      "Monitor usage, calculate charges and generate invoices automatically from one dashboard."
  }
];

function HowItWorks() {
  return (
    <section className="how-section" id="how-it-works">

      <div className="section-container">

        <div className="section-heading centered">

          <span className="section-label">
            HOW IT WORKS
          </span>

          <h2>
            From usage to
            <span> revenue in minutes.</span>
          </h2>

          <p>
            A simple workflow designed to make
            SaaS billing easy to understand.
          </p>

        </div>

        <div className="steps">

          {steps.map((step, index) => (

            <div className="step" key={step.number}>

              <div className="step-number">
                {step.number}
              </div>

              <div className="step-content">

                <h3>
                  {step.title}
                </h3>

                <p>
                  {step.description}
                </p>

              </div>

              {index < steps.length - 1 && (
                <div className="step-line"></div>
              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;