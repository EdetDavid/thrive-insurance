import React from "react";
import propertyImage from "./img/property2.jpg";
import "./Property.css";

const Property = () => {
  return (
    <div className="container-fluid px-0 bg-dark m-0">
      <section className="property d-flex flex-column justify-content-end align-items-center position-relative">
        <h1 className="fw-bold display-1 red-text black-text-shadow mb-4">
          Property Insurance
        </h1>
      </section>

      <section className="row mx-0">
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center p-4 p-md-5 gap-4">
          <div className="col-12 col-md-6 bg-black rounded white-shadow p-4 p-md-5">
            <p className="lead text-white mb-0">
              Thrive Insurance offers comprehensive property insurance solutions. Our Fire & Special Perils policy covers loss from fire, lightning, explosion, and extensions for storms, floods, earthquakes, and more, protecting buildings, contents, and rent. Burglary insurance indemnifies against theft with forceful entry, covering contents and stock. Household Insurance safeguards homes, fixtures, valuables, and public liability from fire, burglary, and accidental damage. Industrial All Risk Policy combines fire, burglary, fidelity, and money cover with business interruption protection.
            </p>
          </div>
          <div className="col-12 col-md-6 img-thumbnail gray-shadow">
            <img
              className="img-fluid"
              src={propertyImage}
              alt="Property Insurance"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Property;
