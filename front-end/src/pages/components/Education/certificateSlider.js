import React from "react";
import adagrad from "../../../assets/Certificates/AdaGrad.PNG";
import csc from "../../../assets/Certificates/CloudSkillsChallange.PNG";
import ricit from "../../../assets/Certificates/RICIT.PNG";
import bigPic from "../../../assets/Certificates/UnderstaningBigPicture.PNG";
import proDev from "../../../assets/Certificates/ProfessionalDevelopment.PNG";
import imun from "../../../assets/Certificates/imun.jpeg";
import flutter from "../../../assets/Certificates/flutter.jpg";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import "./style.css";

export default function CertificateSlider() {
  const state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    enableSwipe: false,
    config: config.gentle,
  };

  const slides = [
    {
      key: 0,
      content: <img src={flutter} alt="flutter" className="sliderImageCert" />,
    },
    {
      key: 1,
      content: <img src={csc} alt="csc" className="sliderImageCert" />,
    },
    {
      key: 2,
      content: <img src={ricit} alt="ricit" className="sliderImageCert" />,
    },
    {
      key: 3,
      content: <img src={proDev} alt="prodev" className="sliderImageCert" />,
    },
    {
      key: 4,
      content: <img src={bigPic} alt="bigpic" className="sliderImageCert" />,
    },
    {
      key: 5,
      content: <img src={imun} alt="imun" className="sliderImageCert" />,
    },
    {
      key: 6,
      content: <img src={adagrad} alt="adagrad" className="sliderImageCert" />,
    },
  ];

  return (
    <div className="container customCarousel">
      <div data-aos="fade-right">
        <span className="subTopic">Certificates</span>
      </div>
      <div className="customSlider">
        <Carousel
          slides={slides}
          goToSlide={state.goToSlide}
          offsetRadius={state.offsetRadius}
          showNavigation={state.showNavigation}
          animationConfig={state.config}
        />
      </div>
    </div>
  );
}
