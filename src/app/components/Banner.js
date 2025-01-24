'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image"; // Import Image from Next.js
import "./Banner.scss";

const Banner = () => {
  return (
    <div className="banner">
      <Image 
        src="/images/banner.jpg"
        alt="Banner Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />

      <div className="banner__content">
        <h1 className="banner__title">American Flooring Services</h1>
        <p className="banner__text">
          Discover our wide range of services and solutions tailored to meet
          your unique needs. <br />Join us on a journey of excellence.
        </p>
        <div className="banner__buttons">
          <Link href="/products" className="button">
            View Products
          </Link>
          <Link href="/portfolio" className="button button--alt">
            View Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
