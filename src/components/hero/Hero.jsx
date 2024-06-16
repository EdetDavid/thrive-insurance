import React from "react";
import "./Hero.css";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-light container-fluid p-5 overflow-hidden">
      <h1 className=" text-shadow gray-text-shadow red-text text-center text-decoration-underline my-3">
        Our Attributes
      </h1>
      <div
        id="hero-wrapper"
        data-aos="fade-up"
        data-aos-easing="linear"
        className="d-flex justify-content-center align-items-center flex-wrap "
      >
        <div className="Card p-2 shadow bg-white gray-shadow ">
          <div className="content p-2 d-flex justify-content-center align-items-center flex-column">
            <h3 className="blue-text gray-text-shadow text-justify">
              Exceptional Customer Care
            </h3>
            <p className="blue-text  text-justify">
              At Thrive Insurance Brokers, we prioritize our clients by
              providing exceptional customer care. Our dedicated team is always
              ready to assist you with personalized support and prompt responses
              to your queries and claims. We understand that each client is
              unique, and we tailor our services to meet your individual needs,
              ensuring a seamless and satisfactory experience.
            </p>
            <NavLink
              to="/who-we-are"
              className="btn btn-secondary blue-text mb-2"
            >
              Read More
            </NavLink>
          </div>
        </div>
        <div className="Card p-2 shadow bg-white gray-shadow ">
          <div className="content p-2 d-flex justify-content-center align-items-center flex-column">
            <h3 className="blue-text gray-text-shadow text-justify">
              Comprehensive and Flexible Coverage
            </h3>
            <p className=" blue-text  text-justify">
              Thrive Insurance Brokers offers a wide range of comprehensive
              insurance solutions designed to provide robust protection. Our
              flexible coverage options allow you to customize your policies to
              fit your specific requirements, giving you peace of mind knowing
              that you are adequately covered in all aspects of your life and
              business.
            </p>
            <NavLink
              to="/who-we-are"
              className="btn btn-secondary blue-text mb-2"
            >
              Read More
            </NavLink>
          </div>
        </div>
        <div className="Card p-2 shadow bg-white gray-shadow ">
          <div className="content p-2 d-flex justify-content-center align-items-center flex-column">
            <h3 className="blue-text gray-text-shadow text-justify">
              Local Expertise with Global Standards
            </h3>
            <p className=" blue-text  text-justify">
              With a deep understanding of the Nigerian market, Thrive Insurance
              Brokers combines local expertise with global best practices. We
              stay ahead of industry trends and regulatory changes to offer you
              innovative and reliable insurance products. Our commitment to
              excellence ensures that you receive world-class service and
              solutions tailored to the local context.
            </p>
            <a href="/who-we-are" className="btn btn-secondary blue-text mb-2 ">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
