import React from "react";
import eng1 from "./img/eng1.jpg";
import eng2 from "./img/eng2.jpg";
import "./Engineering.css";

const Engineering = () => {
  return (
    <div className="container-fluid px-0 bg-dark m-0">
      <section className="engineering d-flex flex-column justify-content-end align-items-center position-relative">
        <h1 className="fw-bold display-1 red-text black-text-shadow mb-4">
          Engineering Insurance
        </h1>
      </section>

      <section className="row mx-0">
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center p-4 p-md-5 gap-4">
          <div className="col-12 col-md-6 bg-black rounded white-shadow p-4 p-md-5">
            <p className="lead text-white mb-0">
              Thrive Insurance provides specialized engineering insurance to protect your projects and assets. Our offerings include Plant All Risk (PAR) for contractor machinery against environmental hazards, Contractors All Risks (CAR) for construction projects, Erection All Risks (EAR) for machinery erection, Machinery Breakdown Policy for equipment damage, and Electronic Equipment Policy for computers and data protection.
            </p>
          </div>
          <div className="col-12 col-md-6 img-thumbnail gray-shadow">
            <img
              className="img-fluid"
              src={eng2}
              alt="Engineering Insurance"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Engineering;
