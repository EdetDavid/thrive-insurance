import React from "react";
import travelImage from "./img/travels2.jpg";
import "./Travel.css";

const Travel = () => {
  return (
    <div className="container-fluid px-0 bg-dark m-0">
      <section className="travel d-flex flex-column justify-content-end align-items-center position-relative">
        <h1 className="fw-bold display-1 red-text black-text-shadow mb-4">
          Travel Insurance
        </h1>
      </section>

      <section className="row mx-0">
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center p-4 p-md-5 gap-4">
          <div className="col-12 col-md-6 bg-black rounded white-shadow p-4 p-md-5">
            <p className="lead text-white mb-0">
              Travel Insurance - Covers medical, financial, and other losses
              during travel outside country of residence. - Applies to holiday
              and business travelers. - Covers accidents, sickness, and property
              loss. Thrive Insurance offers comprehensive travel insurance
              packages that ensure your journeys are safe and worry-free. Our
              services include coverage for trips, medical emergencies, lost
              baggage, and trip cancellations.
            </p>
          </div>
          <div className="col-12 col-md-6 img-thumbnail gray-shadow">
            <img
              className="img-fluid"
              src={travelImage}
              alt="Travel Insurance"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Travel;
