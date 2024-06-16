import React from "react";
import colors from "../config/colors";

const Newsletter = () => {
  return (
    <div className="">
      <section className="text-white">
        <div className="">
          <div
            style={{ backgroundColor: colors.blue }}
            className="black-shadow opacity-100 border-dark d-flex flex-column flex-lg-row justify-content-between align-items-center p-4 p-lg-5"
          >
            <div className="text-center text-lg-start py-3 py-lg-1">
              <h2 className="fw-bold mb-2">Subscribe to our newsletter</h2>
              <p className="mb-0">to keep in touch with us.</p>
            </div>
            <form
              className="d-flex justify-content-center flex-wrap flex-lg-nowrap align-items-center"
              method="post"
            >
              <div className="mt-3 me-lg-2">
                <input
                  className="border rounded-pill shadow-sm form-control"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="my-2 mx-2">
                <button
                  style={{ backgroundColor: colors.red }}
                  className="btn shadow"
                  type="submit"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
