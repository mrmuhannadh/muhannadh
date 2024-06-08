import React from "react";

export default function OldPortfolio() {
  return (
    <div className="portfolio-container">
      <div className="text-container">
        <span className="smallText" data-aos="fade-right">
          Just Take a look on my
        </span>
        <br />
        <span className="oldPortStyle" data-aos="zoom-in-down">
          OLD PORTFOLIO
        </span>
      </div>
      <div className="laptop">
        <div className="content">
          <iframe
            src="https://mrmuhannadh.github.io/Muhannadh_Portforlio/"
            className="contentStyle"
            title="Muhannadh's Old Portfolio"
          />
        </div>
      </div>
    </div>
  );
}
