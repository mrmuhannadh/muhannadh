import React from "react";

export default function SliderImage({ imagePath, alt }) {
  return (
    <div>
      <img src={imagePath} alt={alt} className="sliderImage" />
    </div>
  );
}
