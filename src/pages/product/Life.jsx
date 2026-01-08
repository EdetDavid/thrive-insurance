import React from "react";
import lifeImage from "./img/life2.jpg";
import "./Life.css";

const Life = () => {
  return (
    <div className="container-fluid px-0 bg-dark m-0">
      <section className="life d-flex flex-column justify-content-end align-items-center position-relative">
        <h1 className="fw-bold display-1 red-text black-text-shadow mb-4">
          Life Insurance
        </h1>
      </section>

      <section className="row mx-0">
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center p-4 p-md-5 gap-4">
          <div className="col-12 col-md-6 bg-black rounded white-shadow p-4 p-md-5">
            <p className="lead text-white mb-0">
              Thrive Insurance offers tailored life insurance solutions for personal and business needs. Our Keyman Insurance protects businesses from profit loss due to the death of a key person, ensuring continuity and covering replacement costs. Term Life provides affordable coverage for a chosen amount and duration, paying beneficiaries upon death within the term, with no surrender value.
            </p>
          </div>
          <div className="col-12 col-md-6 img-thumbnail gray-shadow">
            <img
              className="img-fluid"
              src={lifeImage}
              alt="Life Insurance"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Life;
