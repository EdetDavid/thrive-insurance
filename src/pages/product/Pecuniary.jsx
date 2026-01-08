import React from "react";
import pecuniaryImage from "./img/money2.jpg";
import "./Pecuniary.css";

const Pecuniary = () => {
  return (
    <div className="container-fluid px-0 bg-dark m-0">
      <section className="pecuniary d-flex flex-column justify-content-end align-items-center position-relative">
        <h1 className="fw-bold display-1 red-text black-text-shadow mb-4">
          Pecuniary Insurance
        </h1>
      </section>

      <section className="row mx-0">
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center p-4 p-md-5 gap-4">
          <div className="col-12 col-md-6 bg-black rounded white-shadow p-4 p-md-5">
            <p className="lead text-white mb-0">
              Thrive Insurance provides pecuniary loss insurance to safeguard against financial damages. Our Fidelity Guarantee indemnifies against employee dishonesty, embezzlement, or misappropriation of funds and property. Consequential Loss covers business interruption from operational premises damage, including loss of profit and wages, triggered by perils like fire, explosion, aircraft, riots, and earthquakes.
            </p>
          </div>
          <div className="col-12 col-md-6 img-thumbnail gray-shadow">
            <img
              className="img-fluid"
              src={pecuniaryImage}
              alt="Pecuniary Insurance"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pecuniary;
