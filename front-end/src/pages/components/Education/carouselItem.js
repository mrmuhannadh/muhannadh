import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function CarouselItemCard({ img, body, title }) {
  return (
    <div className="carouselItemCardStyle">
      <img className="d-block w-100" src={img} alt="Third slide" />
      test
      {/* <Carousel.Caption>
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption> */}
    </div>
  );
}
