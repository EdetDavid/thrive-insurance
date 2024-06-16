import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import color from "../../config/colors";

import "./Contact.css";

const Contact = () => {
  return (
    <section
      data-aos="fade-up"
      id="contact"
      data-aos-easing="linear"
      className="text-center text-white"
      style={{ maxWidth: "100%" }}
    >
      <h1 className="mb-5 blue-text gray-text-shadow">Contact us</h1>
      <div
        style={{ backgroundColor: color.blue }}
        className="row  mx-auto black-shadow p-4"
      >
        {/* Start */}
        <div id="contactForm" className="d-flex   mx-auto">
          <div className="col-lg-5 mb-4 mb-lg-0">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                title="map"
                className="w-100 embed-responsive"
                height={400}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.537680020366!2d3.387126973116849!3d6.453342123978535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b6e2f3d6691%3A0xa6d76c12d001ff55!2sThrive%20Insurance%20Brokers%20Limited!5e0!3m2!1sen!2sng!4v1716093425393!5m2!1sen!2sng"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="col-lg-7">
            <form className="d-flex flex-column p-3">
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <input
                      type="text"
                      id="formFirstName"
                      className="form-control border-white border"
                    />
                    <label
                      className="form-label text-white "
                      htmlFor="formFirstName"
                    >
                      First name
                    </label>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <input
                      type="email"
                      id="formEmail"
                      className="form-control border-white border"
                    />
                    <label
                      className="form-label text-white"
                      htmlFor="formEmail"
                    >
                      Email Address
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="formSubject"
                  className="form-control border-white border"
                />
                <label className="form-label text-white" htmlFor="formSubject">
                  Subject
                </label>
              </div>
              <div className="form-outline mb-4">
                <textarea
                  id="formMessage"
                  className="form-control border-white border"
                  rows="4"
                ></textarea>
                <label className="form-label text-white" htmlFor="formMessage">
                  Message
                </label>
              </div>
              <button type="submit" className="  btn btn-primary mb-4 ">
                Send
              </button>
              <div className="row text-left">
                <div className="col-md-4 mb-3">
                  <i className="fas fa-map-marker-alt fa-2x text-primary"></i>
                  <p>
                    <small>
                      Western House, 17th Floor, Wing C, 8-10 Broad St, Lagos
                      Island, Lagos
                    </small>
                  </p>
                </div>
                <div className="col-md-4 mb-3">
                  <i className="fas fa-phone fa-2x text-primary"></i>
                  <p>
                    <small>08180996418, 07087943708</small>
                  </p>
                </div>
                <div className="col-md-4 mb-3">
                  <i className="fas fa-envelope fa-2x text-primary"></i>
                  <p>
                    <small>infoinsurance@thrivenig.com</small>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* end */}
      </div>
    </section>
  );
};

export default Contact;
