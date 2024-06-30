import React from "react";
import { NavLink } from "react-router-dom";
import img2 from "../../assets/images/slider/Pecuniary.jpg";
import img3 from "../../assets/images/slider/covered.jpg";
import img4 from "../../assets/images/slider/life.jpg";
import img5 from "../../assets/images/slider/mum.jpg";
import img6 from "../../assets/images/slider/property.jpg";
import travel from "../../assets/images/travelIN.jpg";
import motor from "../../assets/images/motor-insurance.jpg";
import cargo from "../../assets/images/cargo.jpg";

import "./Products.css";

const Products = () => {
  const cardData = [
    {
      imgSrc: img4,
      badge: "We are thrive",
      title: "Life and Personal Insurance",
      description:
        "This is an insurance cover purchased by a company on the life of a key person within the organization to protect the company against loss of profit or cost of replacing the key person in the event  of demise. The aim is to compensate the busines for losses and facilitate business continuity.",
      link: "/products/life&personal-insurance",
    },

    {
      imgSrc: img2,
      badge: "We are thrive",
      title: "Pecuniary Insurance",
      description:
        "Pecuniaproductsy insurance, also known as financial loss insurance, is designed to cover businesses and individuals against losses that have a direct financial impact. This type of insurance focuses on compensating for monetary losses rather than physical damage or injury. Pecuniary insurance is crucial for mitigating financial risks and ensuring stability in the face of various financial contingencies.",
      link: "/products/pecuniary-insurance",
    },
    {
      imgSrc: img3,
      badge: "We are thrive",
      title: "Engineering Insurance",
      description:
        "Engineering insurance is a specialized branch of insurance designed to cover a broad spectrum of risks associated with engineering projects, machinery, and equipment. This type of insurance is crucial for businesses involved in construction, manufacturing, and various engineering fields as it provides financial protection against potential losses that can arise from accidents, failures, and other unforeseen events.",
      link: "/products/engineering-insurance",
    },

    {
      imgSrc: img5,
      badge: "We are thrive",
      title: "Liability Insurance",
      description:
        "This type of insurance covers any awards of damages given to a member of the public because of an injury or damage to their property caused by the insured.",
      link: "/products/liability-insurance",
    },
    {
      imgSrc: img6,
      badge: "We are thrive",
      title: "Property Insurance",
      description:
        "Property insurance is a crucial type of insurance policy designed to provide financial protection against risks to property, including damage or loss of buildings, personal property, and other assets. This insurance is essential for homeowners, renters, and businesses as it helps mitigate the financial impact of unforeseen events such as fire, theft, natural disasters, and other perils.",
      link: "/products/property-insurance",
    },
    {
      imgSrc: travel,
      badge: "We are thrive",
      title: "Travel Insurance",
      description:
        "It provides cover on medical, financial and other losses incurred while traveling outside the country of residence. It covers all travellers for holiday and business purposes in the event of accidents, sickness or loss of property.",
      link: "/products/travel-insurance",
    },
    {
      imgSrc: motor,
      badge: "We are thrive",
      title: "Motor Insurance",
      description:
        "Motor insurance provides financial protection against damages and liabilities arising from accidents, theft, or other incidents involving your vehicle. It covers repair costs, medical expenses, and third-party liabilities, ensuring peace of mind and compliance with legal requirements.",

      link: "/products/motor-insurance",
    },
    {
      imgSrc: cargo,
      badge: "We are thrive",
      title: "Speciality Lines",
      description:
        "Marine and Oil & Gas insurance offers comprehensive coverage for risks associated with maritime operations and the oil and gas industry. It protects against damages, liabilities, and losses in shipping, offshore drilling, and related activities, ensuring financial security and operational continuity in these high-risk sectors.",

      link: "/products/specialty-lines",
    },
  ];

  return (
    <div className="container py-5 overflow-hidden">
      <div className="row my-4">
        <div
          className="col-md-8 col-xl-6 text-center mx-auto"
          data-aos="fade-up"
        >
          <h2 className="fw-bold text-dark">Our Products</h2>
          <p className="text-dark w-lg-50">
            Comprehensive Coverage for Life's Uncertainties
          </p>
        </div>

        {/* Card */}
      </div>
      <div
        id="products"
        className="row row-cols-1 row-cols-md-2 mx-auto "
        style={{ maxWidth: "1500px" }}
      >
        {cardData.map((card, index) => (
          <div
            className="col mb-4"
            key={index}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay={`${index * 100}`}
          >
            <div>
              <NavLink className="nav-link" to={card.link}>
                <img
                  id="product-img"
                  className="rounded img-fluid shadow w-100 fit-cover"
                  src={card.imgSrc}
                  alt="Product"
                />

                <div className="py-4">
                  {/* <span className="badge bg-danger mb-2">{card.badge}</span> */}
                  <h4 className="fw-bold text-dark">{card.title}</h4>
                  <p className="text-dark">{card.description}</p>
                </div>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
