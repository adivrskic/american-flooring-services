'use client';

import './FeatureBoxes.scss';
import Link from 'next/link';

const FeatureBoxes = ({ featureBoxesData }) => {
  const { title, features, link, linkHref, linkText } = featureBoxesData;

  return (
    <div className="feature-boxes">
      {/* Use the title from the schema */}
      <h2>{title || 'Our Expert Services'}</h2>

      <div className="box-container">
        {/* Map over the features data */}
        {features?.map((feature, index) => (
          <div key={index} className="box">
            {/* Display icon based on type */}
            {feature.iconType === 'image' && feature.iconImage && (
              <div className="icon">
                <img
                  src={feature.iconImage?.asset.url}
                  alt={feature.title}
                  loading="lazy"
                  className="icon-image"
                />
              </div>
            )}

            {feature.iconType === 'svg' && feature.iconSvg && (
              <div className="icon">
                <img
                  src={feature.iconSvg?.asset.url}
                  alt={feature.title}
                  loading="lazy"
                  className="icon-svg"
                />
              </div>
            )}

            {/* Display the feature title and description */}
            <h3 className="box-title">{feature.title}</h3>
            <p className="box-text">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Conditionally render the link if it's enabled */}
      {link && linkHref && linkText && (
        <Link className="button button--secondary" href={linkHref}>
          {linkText}
        </Link>
      )}
    </div>
  );
};

export default FeatureBoxes;
