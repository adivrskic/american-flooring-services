'use client'; // Mark as client component

import React from "react";
import "./CTA.scss";

const CenteredCTA = () => {
  return (
    <div className="centered-cta">
      <div className="centered-cta__content">
        <h2 className="centered-cta__title">
          The American Flooring Advantage
        </h2>
        <p className="centered-cta__subtitle">
          As a company deeply rooted in the world of flooring, we take immense
          pride in every step we take, from the first consultation to the final
          installation. We understand that the choice of flooring can make or
          break the aesthetics and functionality of a space. We are
          driven by a passion to help you bring your vision to life, one tile at
          a time.
        </p>
        <button
          className="button button--secondary"
          onClick={() => window.location.href = "/about"}
        >
          Learn More About Us
        </button>
      </div>
    </div>
  );
};

export default CenteredCTA;
