import { client, urlFor } from '../../lib/sanity';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./Banner.scss";

const Banner = async ({bannerData}) => {
  const imageUrl = bannerData?.image ? urlFor(bannerData.image).url() : '/images/banner.jpg'; // Fallback to default image

  return (
    <div className="banner">
      <Image 
        src={imageUrl}
        alt="Banner Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />

      <div className="banner__content">
        <h1 className="banner__title">{bannerData?.title}</h1>
        <p className="banner__text">{bannerData?.text}</p>
        <div className="banner__buttons">
          { bannerData?.button1Link && (
            <Link href={bannerData.button1Link} className="button">
              {bannerData?.button1Text}
            </Link>
          )}
          {bannerData?.button2Link && (
            <Link href={bannerData.button2Link} className="button button--alt">
              {bannerData?.button2Text}
            </Link>
          )}

        </div>
      </div>
    </div>
  );
};

export default Banner;
