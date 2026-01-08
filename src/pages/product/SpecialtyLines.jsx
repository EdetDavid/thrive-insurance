import React from "react";
import specialtyImage from "./img/speciality2.jpg";
import "./SpecialtyLines.css";

const SpecialtyLines = () => {
  return (
    <div className="container-fluid px-0 bg-dark m-0">
      <section className="specialty-lines d-flex flex-column justify-content-end align-items-center position-relative">
        <h1 className="fw-bold display-1 red-text black-text-shadow mb-4">
          Specialty Lines Insurance
        </h1>
      </section>

      <section className="row mx-0">
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center p-4 p-md-5 gap-4">
          <div className="col-12 col-md-6 bg-black rounded white-shadow p-4 p-md-5">
            <p className="lead text-white mb-0">
              Thrive Insurance provides niche specialty lines insurance for
              unique risks. From cyber liability to marine insurance, we offer
              customized coverage for specialized industries and needs.
            </p>
          </div>
          <div className="col-12 col-md-6 img-thumbnail gray-shadow">
            <img
              className="img-fluid"
              src={specialtyImage}
              alt="Specialty Lines Insurance"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpecialtyLines;
