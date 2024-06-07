import React from "react";
import oba from "../../../assets/images/Projects/oba.png";
import { Github } from "react-bootstrap-icons";

export default function WebProjectMonitor({
  image,
  descriptions,
  technologies,
  gitLink,
}) {
  const handleMouseEnter = () => {
    const textDiv = document.querySelector(".text-div");
    if (textDiv) {
      textDiv.style.display = "block";
      textDiv.style.transform = "translateX(0)";
    }
  };

  const handleMouseLeave = () => {
    const textDiv = document.querySelector(".text-div");
    if (textDiv) {
      textDiv.style.display = "block";
      textDiv.style.transform = "translateX(-70%)";
    }
  };

  return (
    <div className="row myPro g-5 d-flex justify-content-center align-items-center">
      <div className="col-md-4 " data-aos="zoom-in-up">
        <div className="iMac">
          <div className="body">
            <div className="screen">
              <div>
                <img src={oba} alt="hms" className="imgPro" />
              </div>
            </div>
            <div className="logo"></div>
          </div>
          <div className="stand"></div>
        </div>
      </div>
      <div className="col-md-7 text-div">
        <span className="topic">Web site for Old Boys Association</span>
        <p>
          Used Technologies: React JS, React Bootstrap
          <br />
          <a
            href="https://github.com/mrmuhannadh/OBA.git"
            target="_blank"
            className="linkPro"
          >
            <Github className="m-1" />
            View Code
          </a>{" "}
        </p>
      </div>
    </div>
  );
}
