import React from "react";
import "./Banner.scss";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__content">
        <h1 className="banner__title">American Flooring Services</h1>
        {/* <h2 className="banner__subtitle">Affordable Commercial Flooring Solutions</h2> */}
        <p className="banner__text">
          Discover our wide range of services and solutions tailored to meet
          your unique needs. Join us on a journey of excellence.
        </p>
        <div className="banner__buttons">
          <button className="banner__button">Learn More</button>
          <button className="banner__button banner__button--alt">View Portfolio</button>
        </div>
      </div>
    </div>
  );

};

export default Banner;