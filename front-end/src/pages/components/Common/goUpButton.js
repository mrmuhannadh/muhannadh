import React, { useEffect, useState } from "react";
import { ArrowUpCircleFill } from "react-bootstrap-icons";
import "./style.css";

export default function GoUpButton() {
  const [backTopTopButton, setBackToTopButton] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {backTopTopButton && (
        <ArrowUpCircleFill className="btnToTop" size={40} onClick={scrollUp} />
      )}
    </div>
  );
}
