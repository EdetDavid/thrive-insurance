import React from "react";
import mission from "../../assets/images/mission.jpg";
import "./Mission.css";

const Mission = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-white w-100 my-5 p-5">
      <div
        data-aos="zoom-in"
        className="d-flex flex-column justify-content-center align-items-center text-center"
      >
        <h1 className="blue-text  gray-text-shadow">Our Mission</h1>
        <div id="mission_wrapper" className="row my-5 w-100">
          {/* Img */}
          <div className="col-12 col-md-6">
            <img className="img-fluid" src={mission} alt="mission-img" />
          </div>
          {/* Text */}
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
            <div className="mission-text-container shadow border-double rounded p-3">
              <p className="lead">
                To provide outstanding insurance intermediation service through
                continuous customer evaluation and cutting edge technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
