import React from "react";
import { Github, Instagram, Linkedin, Whatsapp } from "react-bootstrap-icons";
import "./style.css";
import myImage from "../../../assets/images/pencil.png";

export default function AboutMe() {
  return (
    <div>
      <div className="container aboutMe">
        <div className="row">
          <div className="col-md-6">
            <h3 data-aos="fade-up">Hi, This is Muhannadh</h3>
            <p className="py-4" data-aos="fade-down">
              A Software Engineer with 1 years of experience specializing in
              full stack web development with frameworks like React, Next JS,
              Symphony and .NET Core, mobile applications using Flutter, etc.. I
              am passionate about creating efficient and innovative software
              solutions that enhance user experiences. When I'm not coding, I
              enjoy drawing, travelling. Feel free to explore my portfolio to
              see my work!
            </p>
            <div className="d-flex justify-content-start g-4 linksRow">
              <a
                rel="noreferrer"
                href="https://www.instagram.com/mr_muha98/"
                target="self"
                data-aos="fade-right"
                data-aos-offset="50"
                data-aos-delay="50"
              >
                <Instagram className="iconHeader" />
              </a>

              <a
                rel="noreferrer"
                href="https://wa.me/+94766649866"
                target="_blank"
                data-aos="fade-right"
                data-aos-offset="50"
                data-aos-delay="100"
              >
                <Whatsapp className="iconHeader" />
              </a>
              <a
                rel="noreferrer"
                href="https://www.linkedin.com/in/razick-muhannadh"
                target="_blank"
                data-aos="fade-right"
                data-aos-offset="50"
                data-aos-delay="150"
              >
                <Linkedin className="iconHeader" />
              </a>
              <a
                rel="noreferrer"
                href="https://github.com/mrmuhannadh"
                target="_blank"
                data-aos="fade-right"
                data-aos-offset="50"
                data-aos-delay="200"
              >
                <Github className="iconHeader" />
              </a>
            </div>
          </div>
          <div
            className="col-md-6 d-flex align-items-center justify-content-center"
            data-aos="zoom-out-left"
          >
            <img src={myImage} alt="myImage" className="imageAboutMe" />
          </div>
        </div>
      </div>
    </div>
  );
}
