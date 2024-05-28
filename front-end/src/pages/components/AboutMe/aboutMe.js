import { Github, Instagram, Linkedin, Whatsapp } from "react-bootstrap-icons";
import "./style.css";

export default function AboutMe() {
  return (
    <div>
      <div className="container aboutMe">
        <h3>Hi, This is Muhannadh</h3>
        <p className="py-4">
          A Software Engineer with 1 years of experience specializing in full
          stack web development with frameworks like React, Next JS, Symphony
          and .NET Core, mobile applications using Flutter, etc.. I am
          passionate about creating efficient and innovative software solutions
          that enhance user experiences. When I'm not coding, I enjoy drawing,
          travelling. Feel free to explore my portfolio to see my work!
        </p>
        <div className="d-flex justify-content-start g-4 linksRow">
          <Linkedin className="iconHeader" />
          <Github className="iconHeader" />
          <Instagram className="iconHeader" />
          <Whatsapp className="iconHeader" />
        </div>
      </div>
    </div>
  );
}
