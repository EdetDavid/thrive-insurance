import React from "react";
import { Carousel } from "react-bootstrap";
import Life from "../../assets/images/slider/life.jpg";
import Pecuniary from "../../assets/images/slider/Pecuniary.jpg";
import Liability from "../../assets/images/slider/liability.jpg";
import Eng from "../../assets/images/slider/ENG.jpg";
import Tour from "../../assets/images/slider/tour.jpg";
import Property from "../../assets/images/slider/property.jpg";

import "./Header.css";

const Header = () => {
  return (
    <header className="header ">
      <Carousel interval={4000} controls={false}>
        {/* slide 1 */}
        <Carousel.Item>
          <img
            src={Property}
            className="slide-image d-block w-100 img-fluid"
            alt="covered"
          />
          <Carousel.Caption className=" position-absolute caption black-shadow text-shadow">
            <h1 className="blue-text gray-text-shadow  font-bold display-1">
              Property <br /> Insurance
            </h1>
            <p className="text-dark">
              Protecting Your Assets, Securing Your Future!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* slide 2 */}
        <Carousel.Item>
          <img
            src={Pecuniary}
            className="slide-image d-block w-100 img-fluid"
            alt="pecuniary"
          />
          <Carousel.Caption className=" position-absolute caption black-shadow text-shadow">
            <h1 className="blue-text gray-text-shadow  font-bold display-1">
              Pecuniary <br /> Insurance
            </h1>
            <p className="text-dark">Guarding Your Financial Interests.</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* slide 3 */}
        <Carousel.Item>
          <img
            src={Liability}
            className="slide-image d-block w-100 img-fluid"
            alt="liability"
          />
          <Carousel.Caption className=" position-absolute caption black-shadow text-shadow">
            <h1 className="blue-text gray-text-shadow  font-bold display-1">
              Liability <br /> Insurance
            </h1>
            <p className="text-dark">Your Shield Against Unexpected Claims.</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* slide 4 */}
        <Carousel.Item>
          <img
            src={Eng}
            className="slide-image d-block w-100 img-fluid"
            alt="eng"
          />
          <Carousel.Caption className=" position-absolute caption black-shadow text-shadow">
            <h1 className="blue-text gray-text-shadow  font-bold display-1">
              Engineering <br /> Insurance
            </h1>
            <p className="text-dark">Building Confidence in Every Project.</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* slide 5 */}
        <Carousel.Item>
          <img
            src={Tour}
            className="slide-image d-block w-100 img-fluid"
            alt="tour"
          />
          <Carousel.Caption className=" position-absolute caption black-shadow text-shadow">
            <h1 className="blue-text gray-text-shadow  font-bold display-1">
              Travel <br /> Insurance
            </h1>
            <p className="text-dark">Your Safety Net Around the World.</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* slide 6 */}
        <Carousel.Item>
          <img
            src={Life}
            className="slide-image d-block w-100 img-fluid"
            alt="tour"
          />
          <Carousel.Caption className=" position-absolute caption black-shadow text-shadow">
            <h1 className="blue-text gray-text-shadow  font-bold display-1 life">
              Life & Personal <br /> Insurance
            </h1>
            <p className="text-dark">Caring for You and Your Loved Ones.</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* end */}
      </Carousel>
    </header>
  );
};

export default Header;
