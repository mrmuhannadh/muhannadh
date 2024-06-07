import React from "react";
import eyepax from "../../../assets/Logo/eyepax.png";

export default function ExpCard({
  company,
  position,
  startDate,
  endDate,
  body,
}) {
  return (
    <div className="myBox">
      <img src={eyepax} alt={position} className="sclLogo" />
      <div className="textArea">
        <div>
          <h4>{company}</h4>
          <span className="positionText">
            {position} - {startDate} to {endDate}
          </span>
        </div>
        <p>{body}</p>
      </div>
    </div>
  );
}
