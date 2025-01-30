'use client'; // Ensure this is a client component

import './TwoCol.scss';
import { urlFor } from '../../lib/sanity'; // Import helper to get image URL

const TwoCol = ({ twoColData }) => {
  if (!twoColData) return null; // Handle missing data gracefully

  const { imageSrc, heading, subheading } = twoColData;
  const imageUrl = imageSrc ? urlFor(imageSrc).url() : ''; // Get image URL safely

  return (
    <div className="two-column-layout">
      <div className="image-column">
        {imageUrl && <img src={imageUrl} alt={heading} />}
      </div>
      <div className="text-column">
        <h2>{heading}</h2>
        <p>{subheading}</p>
      </div>
    </div>
  );
};

export default TwoCol;
