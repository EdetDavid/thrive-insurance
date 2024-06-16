import React from "react";

import img from "../../assets/images/img_service.png";

import "./Services.css";

const Services = () => {
  return (
    <div className="container p-5 m-5 mx-auto bg-light">
      <div className="d-flex flex-column justify-content-center align-items-center ">
        <h1 className="blue-text text-center gray-text-shadow mb-5">
          {" "}
          Services
        </h1>
        {/* row */}
        <div className="row gap-5">
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="linear"
            className="col-md "
          >
            <img
              src={img}
              alt="services"
              className="img-fluid img-thumbnail shadow w-100 h-100"
            />
            {/* color div */}
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="linear"
              className="d-flex justify-content-end box mt-2 "
            ></div>
          </div>
          <div className="col-md ">
            {/* color div */}
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-easing="linear"
              className="d-flex  justify-content-end box "
            ></div>
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-easing="linear"
              className="w-100 text-white shadow"
            >
              <ul class="list-group mt-1">
                <li class="list-group-item lead blue-text">
                  Risk assessment and analysis.
                </li>
                <li class="list-group-item lead blue-text">
                  Advisory services & solutions.
                </li>
                <li class="list-group-item lead blue-text">
                  Negotiation of competitive premiums and policy terms with
                  insurers; giving clients the best coverages at optimal price.
                </li>
                <li class="list-group-item lead blue-text">
                  Ensuring prompt arrangement of insurance cover and renewals
                </li>

                <li class="list-group-item lead blue-text">
                  Researching policies from different insurers.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
