import React from "react";
import ExpCard from "./ExpCard";
import "./style.css";

export default function Experience() {
  return (
    <div className="container subContainer">
      <div data-aos="fade-right">
        <span className="subTopic">My Experiences</span>
      </div>
      <div className="row my-4">
        <div className="col-md-6 ddd" data-aos="zoom-in-right">
          <ExpCard
            company="Eyepax IT Consulting(Pvt) Ltd"
            position="Intern Software Engineer"
            startDate="Mar 2023"
            endDate="Nov 2023"
            body="I was worked as a Full stack developer on a workload allocation manangment system which developed using React and Symphony."
          />
        </div>
        <div className="col-md-6 ddd" data-aos="zoom-in-left">
          <ExpCard
            company="Eyepax IT Consulting(Pvt) Ltd"
            position="Junior Software Engineer"
            startDate="Mar 2023"
            endDate="Nov 2023"
            body="I was worked on a Flutter mobile application development for a Fleet user application"
          />
        </div>
      </div>
    </div>
  );
}
