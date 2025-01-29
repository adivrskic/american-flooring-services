import React from "react";
import { urlFor } from '../../lib/sanity';
import "./Logos.scss";

const LogoGrid = ({ logosData }) => {
  const { title = "Our Brand Partners", logos = [], stats = [] } = logosData || {};

  return (
    <div className="logo-grid">
      <h2>{title}</h2>
      <div className="logo-grid__images">
        {logos.map((logo, index) => {
          console.log(logo);
          
          const logoUrl = logo?.asset ? urlFor(logo.asset).url() : null;
          const altText = logo?.alt || `Logo ${index + 1}`; 
          
          return (
            <div className="logo-grid__item" key={index}>
              <img 
                src={logoUrl} 
                alt={altText} 
                className="logo-grid__image" 
              />
            </div>
          );
        })}
      </div>

      <div className="logo-grid__stats">
        {stats.map((stat, index) => (
          <div className="logo-grid__stat" key={index}>
            <strong>{stat.value}</strong>
            <span>{stat.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoGrid;
