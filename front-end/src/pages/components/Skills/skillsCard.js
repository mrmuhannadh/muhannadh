import React from "react";

export default function SkillsCard({ skill, icon }) {
  return (
    <div className="col skillCard">
      <img src={icon} className="skillImage" alt={`im-${skill}`} />
      <span className="skillText">{skill}</span>
    </div>
  );
}
