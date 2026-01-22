import React from "react";
import male from "../../assets/images/male-avatar.png";
import female from "../../assets/images/female-avatar.png";
import remi from "../../assets/images/team/Remi.jpg";
import richard from "../../assets/images/team/Richard.jpeg";
import tokunbo from "../../assets/images/directors/Tokunbo.png";
import akinwale from "../../assets/images/directors/AKINWALE.png";
import "./Team.css";

const managementTeam = [
  {
    id: "akinwale-adedoyin",
    imgSrc: akinwale,
    name: "Akinwale Adedoyin",
    role: "Managing Director",
    bio: "Leads the company with a focus on innovation and long-term strategy.",
  },
  {
    id: "tokunbo-adeleke",
    imgSrc: tokunbo,
    name: "Tokunbo Adeleke",
    role: "Executive Director",
    bio: "Leads the company with a focus on innovation and long-term strategy.",
  },
  {
    id: "anifat-dare",
    imgSrc: female,
    name: "Anifat Dare",
    role: "Head, Technical Business Services",
    bio: "Leads the company with a focus on innovation and long-term strategy.",
  },

  {
    id: "adeola-ashimolowo",
    imgSrc: female,
    name: "Adeola Ashimolowo",
    role: "R.M Corporates & FIs",
    bio: "Leads the company with a focus on innovation and long-term strategy.",
  },
  {
    id: "opeyemi-okemakinde",
    imgSrc: male,
    name: "Opeyemi Okemakinde",
    role: "Chief Financial Officer",
    bio: "Leads the company with a focus on innovation and long-term strategy.",
  },

  {
    id: "richard-katchy",
    imgSrc: richard,
    name: "Richard Katchy",
    role: "Head, Internal Audit",
    bio: "Oversees financial planning and investor relations.",
  },
  {
    id: "beatrice-diyan",
    imgSrc: female,
    name: "Beatrice Diyan",
    role: "Head, H.R & Admin",
    bio: "Leads product engineering and technology strategy.",
  },
  {
    id: "oluwaremilekun-adebowale",
    imgSrc: remi,
    name: "Oluwaremilekun Adebowale",
    role: "Head, Branding and Corporate Communications",
    bio: "Runs operations and ensures delivery excellence.",
  },
];

const TeamMemberCard = ({ member }) => (
  <div className="col">
    <div className="card h-100 d-flex flex-column">
      <img
        src={member.imgSrc}
        className="card-img-top team-img"
        alt={member.name}
        loading="lazy"
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title mb-2">{member.name}</h5>
        <h6 className="card-subtitle text-muted">{member.role}</h6>
      </div>
    </div>
  </div>
);

const ManagementTeam = () => {
  return (
    <section className="py-5" style={{ overflow: "hidden" }}>
      <div className="container">
        {/* Section Header */}
        <div data-aos="fade-up" className="row mb-5">
          <div className="col text-center">
            <h2 className="fw-bold text-dark display-5">Management Team</h2>
            <p className="text-muted mt-3">
              Meet our leadership team driving innovation and excellence
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div
          data-aos="zoom-in"
          className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-4"
          style={{ overflow: "hidden" }}
        >
          {managementTeam.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManagementTeam;
