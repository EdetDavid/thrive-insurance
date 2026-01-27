import React, { useMemo } from "react";
import female from "../../assets/images/female-avatar.jpg";
import david from "../../assets/images/team/David.png";
import obinna from "../../assets/images/team/Obinna.png";
import enirere from "../../assets/images/team/Enirere.png";
import susam from "../../assets/images/team/susam.png";
import "./Team.css";

// Team members data configuration
const TEAM_MEMBERS = [
    {
      id: "kiklomo-ashogbon",
      imgSrc: female,
      name: "Kikelomo Ashogbon",
      role: "Technical Officer",
      department: "Operations",
    },
    {
      id: "obinna-okoro",
      imgSrc: obinna,
      name: "Obinna Okoro",
      role: "Business Development",
      department: "Sales",
    },
    {
      id: "karaki-deborah",
      imgSrc: female,
      name: "Karaki Deborah",
      role: "Business Development",
      department: "Sales",
    },
    {
      id: "enirere-adesokan",
      imgSrc: enirere,
      name: "Enirere Adesokan",
      role: "Technical Officer",
      department: "Operations",
    },
    {
      id: "tofunmi-sulaimon",
      imgSrc: female,
      name: "Tofunmi Sulaimon",
      role: "Graduate Trainee",
      department: "Development",
    },
    {
      id: "abibat-adeleke",
      imgSrc: female,
      name: "Abibat Adeleke",
      role: "Accounts Officer",
      department: "Finance",
    },
    {
      id: "susam-samson",
      imgSrc: susam,
      name: "Susam Samson",
      role: "Admin Officer",
      department: "Administration",
    },
    {
      id: "david-edet",
      imgSrc: david,
      name: "David Edet",
      role: "IT Support Officer",
      department: "Information Technology",
    },
];

/**
 * TeamMemberCard - Displays individual team member information
 * @component
 */
const TeamMemberCard = React.memo(({ member }) => {
  return (
    <div className="team-member-card-wrapper">
      <article className="team-member-card" data-member-id={member.id}>
        {/* Image Container */}
        <div className="team-member-image">
          <img
            src={member.imgSrc}
            alt={member.name}
            className="team-member-photo"
            loading="lazy"
            title={member.name}
          />
          <div className="team-member-overlay" />
        </div>

        {/* Content Container */}
        <div className="team-member-content">
          <header className="team-member-header">
            <h3 className="team-member-name">{member.name}</h3>
            <p className="team-member-role">{member.role}</p>
          </header>

          <footer className="team-member-footer">
            <span className="team-member-department">{member.department}</span>
          </footer>
        </div>
      </article>
    </div>
  );
});

TeamMemberCard.displayName = "TeamMemberCard";

/**
 * SectionHeader - Displays section title
 * @component
 */
const SectionHeader = () => (
  <div className="team-section-header" data-aos="fade-up">
    <div className="team-header-content">
      <h2 className="team-section-title">Other Team Members</h2>
    </div>
  </div>
);

/**
 * TeamGrid - Container for team member cards
 * @component
 */
const TeamGrid = ({ members }) => (
  <div className="team-grid-wrapper" data-aos="zoom-in">
    <div className="team-grid">
      {members.map((member) => (
        <TeamMemberCard key={member.id} member={member} />
      ))}
    </div>
  </div>
);

/**
 * OtherTeamMembers - Displays team members list with organized layout
 * @component
 */
const OtherTeamMembers = () => {
  const teamMembers = useMemo(() => TEAM_MEMBERS, []);

  return (
    <section
      className="management-team-section"
      aria-label="Team Members"
    >
      <div className="team-container">
        <SectionHeader />
        <TeamGrid members={teamMembers} />
      </div>
    </section>
  );
};

export default OtherTeamMembers;
