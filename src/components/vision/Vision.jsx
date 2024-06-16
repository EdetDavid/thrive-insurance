import React from "react";
import vision from "../../assets/images/vision.jpg";
import "./Vision.css";

const Vision = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light w-100 my-5 p-5">
      <br />
      <br />
      <br />
      <div
        data-aos="fade-in"
        className="d-flex flex-column justify-content-center align-items-center text-center"
      >
        <h1 className="blue-text   gray-text-shadow">Our Vision</h1>
        <div id="mission_wrapper" className="row my-5 w-100  ">
          {/* Text */}
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
            <div className="mission-text-container shadow border-double rounded p-3">
              <p className="lead">
                To be a thought leader in the insurance industry in Africa while
                delivering superior services to clients.
              </p>
            </div>
          </div>
          {/* Img */}
          <div className="col-12 col-md-6">
            <img
              className="img-fluid img-thumbnail gray-shadow rounded-5"
              src={vision}
              alt="mission-img"
              s
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
