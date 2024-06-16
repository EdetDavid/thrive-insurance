import React from "react";
import { Image } from "react-bootstrap";
import Life from "../../assets/images/slider/life.jpg";
import Pecuniary from "../../assets/images/slider/Pecuniary.jpg";
import Liability from "../../assets/images/slider/liability.jpg";
import Eng from "../../assets/images/slider/ENG.jpg";
import Tour from "../../assets/images/slider/tour.jpg";
import Property from "../../assets/images/slider/property.jpg";
import cover from "../../assets/images/slider/covered.jpg";

import "./Claim.css";

const claimsData = [
  {
    id: 1,
    title: "Property Insurance",
    text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    imgSrc: Property,
    buttonText: "Claim",
  },
  {
    id: 2,
    title: "Life & Personal Insurance",
    text: "This is another card with supporting text below as a natural lead-in to additional content.",
    imgSrc: Life,
    buttonText: "Claim",
  },
  {
    id: 3,
    title: "Pecuniary Insurance",
    text: "This is another card with supporting text below as a natural lead-in to additional content.",
    imgSrc: Pecuniary,
    buttonText: "Claim",
  },
  {
    id: 4,
    title: "Liability Insurance",
    text: "This is another card with supporting text below as a natural lead-in to additional content.",
    imgSrc: Liability,
    buttonText: "Claim",
  },
  {
    id: 5,
    title: "Engineering Insurance",
    text: "This is another card with supporting text below as a natural lead-in to additional content.",
    imgSrc: Eng,
    buttonText: "Claim",
  },
  {
    id: 6,
    title: "Travel Insurance",
    text: "This is another card with supporting text below as a natural lead-in to additional content.",
    imgSrc: Tour,
    buttonText: "Claim",
  },
  {
    id: 7,
    title: "Another Card",
    text: "This is another card with supporting text below as a natural lead-in to additional content.",
    imgSrc: cover,
    buttonText: "Claim",
  },
  // Add more card data as needed...
];

const Claim = () => {
  return (
    <div className="container-fluid px-0">
      <div className="d-flex flex-column ">
        <div className="header d-flex position-relative">
          <Image
            style={styles.img}
            className="position-relative w-100"
            height={450}
            src={cover}
            alt="cover"
          />
          <span
            style={styles.headerText}
            className="display-3 font-bold red-text blue-text-shadow"
          >
            Make a Claim
          </span>
        </div>

        {/* Claims Section */}
        <div
          id="claim_wrapper"
          className="container my-5 d-flex flex-wrap  justify-content-center align-items-center  "
        >
          {claimsData.map((claim) => (
            <div className="card mb-3" style={styles.card} key={claim.id}>
              <div className="row g-0">
                <div className="col-md-7">
                  <img
                    style={styles.img}
                    src={claim.imgSrc}
                    className="img-fluid rounded-start h-100 w-100"
                    alt={claim.title}
                  />
                </div>
                <div className="col-md-5 d-flex flex-column justify-content-center">
                  <div className="card-body">
                    <h5 className="card-title">{claim.title}</h5>
                    <p className="card-text">{claim.text}</p>
                    <button className="custom-button rounded-2">
                      {claim.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  headerText: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
    textAlign: "center",
  },
  card: {
    maxWidth: "540px",
    flex: "1 1 calc(33% - 20px)",
    margin: "10px",
  },
};

export default Claim;
