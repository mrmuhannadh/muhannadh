import React from "react";
import Slider from "react-slick";
import SliderImage from "./sliderImage";

export default function CommonSlider({ items }) {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container sliderCustomStyle">
      <Slider {...settings}>
        {items.map((item, index) => {
          return (
            <div key={index} className="imageDiv">
              <SliderImage imagePath={item} alt={`slide-${index}`} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
