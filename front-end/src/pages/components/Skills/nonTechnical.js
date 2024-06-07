import React from "react";
import SkillsCard from "./skillsCard";
import att from "../../../assets/Logo/Other/att.svg";
import comm from "../../../assets/Logo/Other/comm.svg";
import leader from "../../../assets/Logo/Other/leader.svg";
import learner from "../../../assets/Logo/Other/learner.svg";
import presentation from "../../../assets/Logo/Other/presentation.svg";
import probSolv from "../../../assets/Logo/Other/probSolv.svg";
import risk from "../../../assets/Logo/Other/risk.svg";
import teamwork from "../../../assets/Logo/Other/teamwork.svg";
import think from "../../../assets/Logo/Other/think.svg";
import time from "../../../assets/Logo/Other/time.svg";

export default function NonTechnicalSkills() {
  return (
    <div className="nonTechSkills">
      <div className="row">
        <SkillsCard skill="Communication" icon={comm} className="col-md" />
        <SkillsCard
          skill="Presentation"
          icon={presentation}
          className="col-md"
        />
        <SkillsCard skill="Leadership" icon={leader} className="col-md" />
        <SkillsCard skill="Risk Management" icon={risk} className="col-md" />
        <SkillsCard skill="Time Management" icon={time} className="col-md" />
      </div>
      <div className="row">
        <SkillsCard
          skill="Problem solving"
          icon={probSolv}
          className="col-md"
        />
        <SkillsCard skill="Teamwork" icon={teamwork} className="col-md" />
        <SkillsCard skill="Positive attitude" icon={att} className="col-md" />
        <SkillsCard skill="Quick Learner" icon={learner} className="col-md" />
        <SkillsCard skill="Critical thinker" icon={think} className="col-md" />
      </div>
    </div>
  );
}
