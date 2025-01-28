'use client'; // Ensure this is a client component

import './TwoCol.scss';

const TwoCol = ({ imageSrc, heading, subheading }) => {
  return (
    <div className="two-column-layout">
      <div className="image-column">
        <img src={imageSrc} alt={heading} />
      </div>
      <div className="text-column">
        <h2>{heading}</h2>
        <p>{subheading}</p>
      </div>
    </div>
  );
};

export default TwoCol;
