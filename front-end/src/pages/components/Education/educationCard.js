import React from "react";


export default function EducationCard({institute, location, body, logo}) {
  return (
    <div className="eduCard">
      <h3>{institute}</h3>
      <span>{location}</span>
      <p>
        {body}
      </p>
      <img src={logo} alt="University of Ruhuna" />
    </div>
  );
}
