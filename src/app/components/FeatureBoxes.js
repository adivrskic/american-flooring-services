'use client';

import './FeatureBoxes.scss';
import Link from 'next/link';

const FeatureBoxes = ({ features, link, linkHref }) => {

  return (
    <div className="feature-boxes">
      <h2>Our Expert Services</h2>
      <div className="box-container">
        {features.map((feature, index) => (
          <div key={index} className="box">
            {feature.icon && <div className="icon">{feature.icon}</div>}
            <h3 className="box-title">{feature.title}</h3>
            <p className="box-text">{feature.description}</p>
          </div>
        ))}
      </div>
      {link && <Link className='button button--secondary' href={linkHref}>View Portfolio</Link> }
    </div>
  );
};

export default FeatureBoxes;
