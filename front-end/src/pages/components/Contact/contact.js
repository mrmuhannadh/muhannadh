import React, { useEffect, useRef } from "react";
import {
  EnvelopeAt,
  GeoAltFill,
  Github,
  Instagram,
  Linkedin,
  Phone,
  Whatsapp,
} from "react-bootstrap-icons";
import "./style.css";
import SendEmail from "./sendEmail";
import showGif from "../../../assets/Gifs/contact.gif";
import ContactItem from "./contactItem";

export default function Contact() {
  const animContainerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelector(".animImage").classList.add("animate");
          } else {
            entry.target
              .querySelector(".animImage")
              .classList.remove("animate");
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    const currentRef = animContainerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
  

  return (
    <div className="container footer-container">
      <span className="subTopic">Contact Me</span>
      <div className="row">
        <div className="col-md-6 sendEmail">
          <SendEmail />
        </div>
        <div className="col-md-6 animContainer" ref={animContainerRef}>
          <div className="contactDetails">
            <ContactItem icon={<Phone />} value="+94 766649866" />
            <ContactItem icon={<EnvelopeAt />} value="mrmuhannadh@gmail.com" />
            <ContactItem icon={<GeoAltFill />} value="Kandy, Sri Lanka" />
          </div>
          <div className="walkingMan">
            <img src={showGif} alt="anim" className="animImage" />
          </div>
        </div>
      </div>
      <div>
        <div className="d-flex justify-content-center g-4 linksRow contactLinks">
          <a href="https://www.instagram.com/mr_muha98/" target="self">
            <Instagram className="iconHeader" />
          </a>
          <a href="https://wa.me/+94766649866" rel="noreferrer" target="_blank">
            <Whatsapp className="iconHeader" />
          </a>
          <a
            href="https://www.linkedin.com/in/razick-muhannadh"
            rel="noreferrer"
            target="_blank"
          >
            <Linkedin className="iconHeader" />
          </a>
          <a
            href="https://github.com/mrmuhannadh"
            rel="noreferrer"
            target="_blank"
          >
            <Github className="iconHeader" />
          </a>
        </div>
      </div>
    </div>
  );
}
