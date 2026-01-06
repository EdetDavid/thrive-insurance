import React from "react";
import male from "../../assets/images/male-avatar.jpg";
import female from "../../assets/images/female-avatar.jpg";
import "./Team.css";

const managementTeam = [
  {
    imgSrc: female,
    name: "Anifat Dare",
    role: "Head,Technical Business Services",
    bio: "Leads the company with a focus on innovation and long-term strategy.",
  },

  {
    imgSrc: male,
    name: " Opeyemi Okemakinde",
    role: "Chief Financial Officer",
    bio: "Chief Financial Officer",
  },

  {
    imgSrc: male,
    name: " Richard Katchy",
    role: "Head, Inter Financial Officer",
    bio: "Chief Financial Officer",
  },

  {
    imgSrc: female,
    name: "Adeola Ashimolowo",
    role: "R.M Corporates & FIs",
    bio: "Leads product engineering and technology strategy.",
  },
  {
    imgSrc: female,
    name: "Kikelomo Ashogbon",
    role: "Technical Officer",
    bio: "Runs operations and ensures delivery excellence.",
  },
];

const ManagementTeam = () => {
  return (
    <section className="management-team-section">
      <div className="container">
        <header className="management-header">
          <h2 className="management-title">Management Team</h2>
          <p className="management-subtitle">
            Experienced leadership driving business performance.
          </p>
        </header>

        <div className="management-grid">
          {managementTeam.map((m, i) => (
            <article className="management-card" key={i} tabIndex={0}>
              <div className="card-media">
                <img src={m.imgSrc} alt={m.name} className="card-photo" />
              </div>
              <div className="card-body">
                <h3 className="card-name">{m.name}</h3>
                <p className="card-role">{m.role}</p>
                <p className="card-bio">{m.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManagementTeam;
