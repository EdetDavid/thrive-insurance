import React from "react";
import male from "../../assets/images/male-avatar.jpg";
import female from "../../assets/images/female-avatar.jpg";
import david from "../../assets/images/team/David.png"
import "./Team.css";

const managementTeam = [
  {
    id: "kiklomo-ashogbon",
    imgSrc: female,
    name: "Kikelomo Ashogbon",
    role: "Technical Officer",
    bio: "Drives business growth and strategic partnerships.",
  },
  {
    id: "obinna-okoro",
    imgSrc: male,
    name: "Obinna Okoro",
    role: "Business Development",
    bio: "Drives business growth and strategic partnerships.",
  },
  {
    id: "karaki-deborah",
    imgSrc: female,
    name: "Karaki Deborah",
    role: "Business Development",
    bio: "Drives business growth and strategic partnerships.",
  },
  {
    id: "enirere-adesokan",
    imgSrc: male,
    name: "Enirere Adesokan",
    role: "Technical Officer",
    bio: "Runs operations and ensures delivery excellence.",
  },
  {
    id: "tofunmi-sulaimon",
    imgSrc: female,
    name: "Tofunmi Sulaimon",
    role: "Graduate Trainee",
    bio: "Runs operations and ensures delivery excellence.",
  },
  {
    id: "abibat-adeleke",
    imgSrc: female,
    name: "Abibat Adeleke",
    role: "Accounting Officer",
    bio: "Runs operations and ensures delivery excellence.",
  },
  {
    id: "david-edet",
    imgSrc: david,
    name: "David Edet",
    role: "IT Support Officer",
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

const OtherTeamMembers = () => {
  return (
    <section className="py-5" style={{ overflow: "hidden" }}>
      <div className="container">
        {/* Section Header */}
        <div data-aos="fade-up" className="row mb-5">
          <div className="col text-center">
            <h2 className="fw-bold text-dark display-5">Other Team Members</h2>
       
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

export default OtherTeamMembers;
