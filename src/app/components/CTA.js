import React from "react";
import Link from 'next/link';
import "./CTA.scss";

const CenteredCTA = async ({ ctaData }) => {
  if(!ctaData) return null;

  return (
    <div className="centered-cta">
      <div className="centered-cta__content">
        {ctaData?.title && 
          <h2 className="centered-cta__title">
            {ctaData?.title}
          </h2>
        }
        {ctaData?.subtitle && 
          <p className="centered-cta__subtitle">
            {ctaData?.subtitle}
          </p>
        }
        {ctaData?.buttonText && 
          <Link
            className="button button--secondary"
            href={ctaData?.buttonLink}
          >
            {ctaData?.buttonText}
          </Link>
        }
      </div>
    </div>
  );
};

export default CenteredCTA;
