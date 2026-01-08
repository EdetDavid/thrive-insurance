import React from "react";
import liabilityImage from "./img/liability2.jpg";
import "./Liability.css";

const Liability = () => {
  return (
    <div className="container-fluid px-0 bg-dark m-0">
      <section className="liability d-flex flex-column justify-content-end align-items-center position-relative">
        <h1 className="fw-bold display-1 red-text black-text-shadow mb-4">
          Liability Insurance
        </h1>
      </section>

      <section className="row mx-0">
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center p-4 p-md-5 gap-4">
          <div className="col-12 col-md-6 bg-black rounded white-shadow p-4 p-md-5">
            <p className="lead text-white mb-0">
              Thrive Insurance offers comprehensive liability coverage to protect your business. Our Public Liability policy covers damages to the public for injury or property damage, including legal costs and employee vicarious liability. Product Liability compensates for damages from defective products, including exports. Professional Indemnity indemnifies professionals like engineers and doctors against liabilities from breach of duty.
            </p>
          </div>
          <div className="col-12 col-md-6 img-thumbnail gray-shadow">
            <img
              className="img-fluid"
              src={liabilityImage}
              alt="Liability Insurance"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Liability;
