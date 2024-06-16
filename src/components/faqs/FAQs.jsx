import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FAQs.css";
import color from "../../config/colors";

const FAQS = () => {
  return (
    <section className="p-5 mb-3" id="questions">
      <div className="container">
        <h2
          style={{ color: color.blue }}
          className="text-center mb-4"
          id="questions"
        >
          Frequently Asked Questions
        </h2>
        <div className="accordion accordion-flush" id="questions">
          {/* <!-- Item 1 --> */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                style={{ color: color.red }}
                className="accordion-button collapsed gray-text-shadow"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-One"
                aria-expanded="true"
                aria-controls="question-One"
              >
                Who are we?
              </button>
            </h2>
            <div
              id="question-One"
              className="accordion-collapse collapse"
              aria-labelledby="question-One"
              data-bs-parent="#questions"
            >
              <div style={{ color: color.blue }} className="accordion-body">
                Thrive Insurance Brokers Limited is a registered and licensed
                insurance broker in Nigeria, providing comprehensive risk
                management and insurance solutions for both businesses and
                individuals. Our goal is to help clients effectively quantify
                and manage their risks to ensure they not only survive but
                thrive.
              </div>
            </div>
          </div>
          {/* <!-- Item 2 --> */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                style={{ color: color.red }}
                className="accordion-button collapsed gray-text-shadow"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-Two"
                aria-expanded="true"
                aria-controls="question-Two"
              >
                What services do we offer?
              </button>
            </h2>
            <div
              id="question-Two"
              className="accordion-collapse collapse"
              aria-labelledby="question-Two"
              data-bs-parent="#questions"
            >
              <div style={{ color: color.blue }} className="accordion-body">
                We offer a wide range of services including:
                <li>Property insurance</li>
                <li>Life and Personal insurance</li>
                <li>Motor insurance</li>
                <li>Liability insurance</li>
                <li>Travel insurance</li>
                <li>Engineering insurance</li>
                <li>Pecuniary insurance</li>
                <li>Speciality Lines </li>
              </div>
            </div>
          </div>
          {/* <!-- item 3 --> */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                style={{ color: color.red }}
                className="accordion-button collapsed gray-text-shadow"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-Three"
                aria-expanded="true"
                aria-controls="question-Three"
              >
                Are we licensed and regulated?
              </button>
            </h2>
            <div
              id="question-Three"
              className="accordion-collapse collapse"
              aria-labelledby="question-Three"
              data-bs-parent="#questions"
            >
              <div style={{ color: color.blue }} className="accordion-body">
                Yes, we are fully licensed and regulated by the Nigerian Council
                of Registered Insurance Brokers (NCRIB) and the National
                Insurance Commission (NAICOM), in compliance with the Insurance
                Act of 2003 and the NCRIB Act of 2003.
              </div>
            </div>
          </div>
          {/* <!-- Item 4 --> */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                style={{ color: color.red }}
                className="accordion-button collapsed gray-text-shadow"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-four"
                aria-expanded="true"
                aria-controls="question-four"
              >
                How can Thrive Insurance Brokers help my business?
              </button>
            </h2>
            <div
              id="question-four"
              className="accordion-collapse collapse"
              aria-labelledby="question-four"
              data-bs-parent="#questions"
            >
              <div style={{ color: color.blue }} className="accordion-body">
                We provide tailored risk management and insurance solutions to
                help your business mitigate potential risks, protect your
                assets, and ensure operational continuity. Our expertise ensures
                you receive the best possible coverage and advice.
              </div>
            </div>
          </div>
          {/* <!-- Item 5 --> */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                style={{ color: color.red }}
                className="accordion-button collapsed gray-text-shadow"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-five"
                aria-expanded="true"
                aria-controls="question-five"
              >
                What industries do we serve?
              </button>
            </h2>
            <div
              id="question-five"
              className="accordion-collapse collapse"
              aria-labelledby="question-five"
              data-bs-parent="#questions"
            >
              <div style={{ color: color.blue }} className="accordion-body">
                We serve a diverse range of industries including but not limited
                to:
                <li>Manufacturing</li>
                <li>Construction</li>
                <li>Motor insurance</li>
                <li>Healthcare</li>
                <li>Agriculture</li>
                <li>Hospitality</li>
                <li>Transportation</li>
              </div>
            </div>
          </div>
          {/* <!-- Item 6 --> */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                style={{ color: color.red }}
                className="accordion-button collapsed gray-text-shadow"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-six"
                aria-expanded="true"
                aria-controls="question-six"
              >
                Can individuals also get insurance through Thrive?
              </button>
            </h2>
            <div
              id="question-six"
              className="accordion-collapse collapse"
              aria-labelledby="question-six"
              data-bs-parent="#questions"
            >
              <div style={{ color: color.blue }} className="accordion-body">
                Absolutely! We offer various personal insurance solutions such
                as health insurance, life insurance, property insurance, and
                more, ensuring you and your loved ones are protected.
              </div>
            </div>
          </div>
          {/* Item 7 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                style={{ color: color.red }}
                className="accordion-button collapsed gray-text-shadow"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-seven"
                aria-expanded="true"
                aria-controls="question-seven"
              >
                What makes us Brokers different from other insurance brokers?
              </button>
            </h2>
            <div
              id="question-seven"
              className="accordion-collapse collapse"
              aria-labelledby="question-seven"
              data-bs-parent="#questions"
            >
              <div style={{ color: color.blue }} className="accordion-body">
                Our unique approach combines personalized service, in-depth risk
                analysis, and tailored insurance solutions. We prioritize our
                clients' needs, ensuring they receive the best coverage and
                support to thrive in any situation.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQS;
