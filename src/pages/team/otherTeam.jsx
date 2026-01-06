import React from "react";
import male from "../../assets/images/male-avatar.jpg";
import female from "../../assets/images/female-avatar.jpg";
import "./Team.css";

const managementMembers = [
  {
    imgSrc: male,
    name: "Obinna Okoro",
    role: "Business Development",
    bio: " Drives business growth and strategic partnerships.",
  },
  {
    imgSrc: female,
    name: "Karaki Deborah",
    role: "Business Development",
    bio: " Drives business growth and strategic partnerships.",
  },
  {
    imgSrc: male,
    name: "Enirere Adesokan",
    role: "Technical Officer",
    bio: "Runs operations and ensures delivery excellence.",
  },
  {
    imgSrc: female,
    name: "Tofunmi Sulaimon",
    role: "Graduate Trainee",
    bio: "Runs operations and ensures delivery excellence.",
  },
];

const OtherTeamMembers = () => {
  return (
    <section className="management-team-section">
      <div className="container">
        <header className="management-header">
          <h2 className="management-title">Other Team Members</h2>
          <p className="management-subtitle">
            Experienced leadership driving business performance.
          </p>
        </header>

        <div className="management-grid">
          {managementMembers.map((m, i) => (
            <article className="management-card" key={i} tabIndex={0}>
              <div className="card-media">
                <img src={m.imgSrc} alt={m.name} className="card-photo" />
              </div>
              <div className="card-body">
                <h3 className="card-name">{m.name}</h3>
                <p className="card-role">{m.role}</p>
                {/* <p className="card-bio">{m.bio}</p> */}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherTeamMembers;
