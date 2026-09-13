import { useState } from "react";

const questions = [
  {
    question: "What is multi-tenant SaaS billing?",
    answer:
      "Multi-tenant billing allows one SaaS platform to serve multiple organizations while keeping each organization's users, usage, subscriptions and billing data securely separated."
  },
  {
    question: "Can I track custom usage metrics?",
    answer:
      "Yes. Your backend can record custom metrics such as API requests, storage, bandwidth, active users, AI tokens or any other resource your application provides."
  },
  {
    question: "Can usage automatically affect the bill?",
    answer:
      "Yes. You can configure your plans with included usage and additional usage rates. The billing engine can calculate overage charges automatically."
  },
  {
    question: "Can I invite my team?",
    answer:
      "Yes. Each organization can invite team members and assign roles such as Owner, Admin, Member and Viewer."
  },
  {
    question: "Can I integrate a payment gateway?",
    answer:
      "Yes. The backend architecture can later be connected to payment providers such as Stripe or Razorpay without changing the core usage-tracking system."
  }
];

function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="faq-section" id="faq">

      <div className="section-container faq-container">

        <div className="faq-intro">

          <span className="section-label">
            FAQ
          </span>

          <h2>
            Questions?
            <span> We've got answers.</span>
          </h2>

          <p>
            Everything you need to know about
            SaaSTrack and usage-based billing.
          </p>

        </div>

        <div className="faq-list">

          {questions.map((item, index) => (

            <div
              className={`faq-item ${
                open === index ? "open" : ""
              }`}
              key={index}
            >

              <button
                onClick={() =>
                  setOpen(open === index ? -1 : index)
                }
              >

                <span>
                  {item.question}
                </span>

                <span className="faq-plus">
                  {open === index ? "−" : "+"}
                </span>

              </button>

              {open === index && (
                <div className="faq-answer">
                  {item.answer}
                </div>
              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default FAQ;