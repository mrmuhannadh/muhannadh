import React from "react";
import WebProjectMonitor from "./webProjectMonitor";
import oba from "../../../assets/images/Projects/oba.png";
import mob from "../../../assets/images/Projects/mob.png";
import port from "../../../assets/images/Projects/port.png";
import hms from "../../../assets/images/Projects/HMS.png";
import { ArrowRightCircle } from "react-bootstrap-icons";

export default function OtherProjects() {
  const projects = [
    {
      id: 0,
      isMobile: true,
      image: mob,
      descriptions: "This is the mobile portfolio to showcase about my self",
      technologies: "Flutter, Dart",
      gitLink: "https://github.com/mrmuhannadh/my_portfolio",
      viewDemo: true,
      demoVideo: true,
    },
    {
      id: 1,
      image: oba,
      descriptions: "Web site for Old Boys Association",
      technologies: "React JS, React Bootstrap",
      gitLink: "https://github.com/mrmuhannadh/OBA.git",
    },
    {
      id: 2,
      image: port,
      descriptions: "Portfolio to showcase my skills",
      technologies: "React JS, React Bootstrap",
      gitLink: "https://github.com/mrmuhannadh/Muhannadh_Portforlio.git",
      viewDemo: true,
      siteLink: "https://mrmuhannadh.github.io/Muhannadh_Portforlio/",
    },
    {
      id: 3,
      image: hms,
      descriptions:
        "Hostel Managment System for Faculty of Technology, University of Ruhuna",
      technologies: "Codelgniter 4, Bootstrap 5, MySQL",
      gitLink: "https://github.com/mrmuhannadh/HMS.git",
    },
  ];
  return (
    <div className="container">
      <div className="subTopic otherProjectsSubTopic" data-aos="fade-right">
        Other Projects
      </div>
      {projects.map((project) => {
        return (
          <WebProjectMonitor
            key={project.id}
            isMobile={project.isMobile ?? false}
            image={project.image}
            descriptions={project.descriptions}
            technologies={project.technologies}
            gitLink={project.gitLink}
            viewDemo={project.viewDemo ?? false}
            demoVideo={project.demoVideo ?? false}
            siteLink={project.siteLink}
          />
        );
      })}
      <div
        className="d-flex align-items-center justify-content-center viewMoreDiv"
        data-aos="fade-down"
      >
        <a
          rel="noreferrer"
          href="https://github.com/mrmuhannadh/"
          className="viewMoreLink"
          target="_blank"
        >
          View More Projects{" "}
          <span>
            <ArrowRightCircle
              className="arrowRight"
            />
          </span>
        </a>
      </div>
    </div>
  );
}
