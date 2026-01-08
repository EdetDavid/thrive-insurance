import React from "react";
import motorImage from "./img/motor2.jpg";
import "./Motor.css";

const Motor = () => {
  return (
    <div className="container-fluid px-0 bg-dark m-0">
      <section className="motor d-flex flex-column justify-content-end align-items-center position-relative">
        <h1 className="fw-bold display-1 red-text black-text-shadow mb-4">
          Motor Insurance
        </h1>
      </section>

      <section className="row mx-0">
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center p-4 p-md-5 gap-4">
          <div className="col-12 col-md-6 bg-black rounded white-shadow p-4 p-md-5">
            <p className="lead text-white mb-0">
              Thrive Insurance offers comprehensive motor and related insurance solutions. Our Motor Vehicle Insurance includes Comprehensive coverage for accidental damage and third-party risks, Third Party Fire & Theft for fire/theft and third-party claims, and Third Party for basic liability. Goods in Transit (GIT) protects goods during transportation by road or rail. Money Insurance safeguards cash in transit or storage. All Risk Insurance covers theft, loss, or accidental damage to property with broad indemnification.
            </p>
          </div>
          <div className="col-12 col-md-6 img-thumbnail gray-shadow">
            <img
              className="img-fluid"
              src={motorImage}
              alt="Motor Insurance"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Motor;
