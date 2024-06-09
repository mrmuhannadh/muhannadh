import React from "react";
import "./style.css";
import EducationCard from "./educationCard";
import CertificateSlider from "./certificateSlider";
import ruhuna from "../../../assets/Logo/uniLogo.png";
import almanar from "../../../assets/Logo/sclLogo.png";
import azhar from "../../../assets/Logo/Logo.png";

export default function Education() {
  return (
    <div className="container">
      <div data-aos="fade-right">
        <span className="subTopic">Education</span>
      </div>
      <div className="row eduCards">
        <EducationCard
          className="col-md"
          logo={ruhuna}
          institute="University of Ruhuna"
          location="Faculty of Technology"
          body="Bachelor of Information and Communication Technology - GPA 3.83 (First
          class)"
        />
        <EducationCard
          className="col-md"
          logo={almanar}
          institute="Al Manar N.S"
          location="Advanced Level-Science and Technology"
          body={`Z-score: 1.384`}
        />
        <EducationCard
          className="col-md"
          logo={azhar}
          institute="Al Azhar Central Collage"
          location="Ordinary Level"
          body="Results - 3As, 2Bs and 4Cs"
        />
      </div>
      <div className="row certificates">
        <CertificateSlider />
      </div>
    </div>
  );
}
