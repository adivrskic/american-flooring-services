import React from "react";
import "./Logos.scss";

const logos = [
  "/images/mohawk.png",
  "/images/shaw.png",
  "/images/floorfolio.png",
  "/images/daltile.png",
  "/images/emsertile.jpg",
  "/images/haines.png",
];

const LogoGrid = () => {
  return (
    <div className="logo-grid">
      <h2>Brands we work with</h2>
      <div className="logo-grid__images">
        {logos.map((logo, index) => (
          <div className="logo-grid__item" key={index}>
            <img src={logo} alt={`Logo ${index + 1}`} className="logo-grid__image" />
          </div>
        ))}
      </div>

      <div className="logo-grid__stats">
        <div className="logo-grid__stat">
          150+
          <span>Clients</span>
        </div>
        <div className="logo-grid__stat">
          180+
          <span>Years Of Combined Team Experience</span>
        </div>
        <div className="logo-grid__stat">
          100M+
          <span>Square Feet Of Flooring Provided</span>
        </div>
      </div>
    </div>
  );
};

export default LogoGrid;
