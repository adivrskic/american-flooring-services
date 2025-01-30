'use client';
import { urlFor } from '../../lib/sanity';
import React, { useState } from "react";
import "./ImageRow.scss";
import { usePathname } from 'next/navigation';
import FeatureBoxes from './FeatureBoxes';

const ImageRow = ({ imageRowData, featureBoxesData }) => {
  const pathname = usePathname();

  const [clickedIndex, setClickedIndex] = useState(0);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const images = imageRowData?.images || [];

  const onImageClick = (index) => {
    if (!images) return;
    setActiveSlideIndex(index);
    setClickedIndex(index);
  };

  return (
    <>
      <div className={`image-row ${pathname === '/products' || pathname === '/portfolio' ? 'margin' : ''} ${pathname === '/portfolio' ? 'half' : ''}`}>        {images.map((image, index) => {
        const imageUrl = image?.image ? urlFor(image.image).url() : null;
        return (          
          <div
            key={index}
            className={`image-row__item ${clickedIndex === index ? 'active' : ''}`}
            style={{ backgroundImage: `url(${imageUrl})` }}
            onClick={() => onImageClick(index)}
          >
            <div className="image-row__overlay">
              <span className="image-row__text">{image.text}</span>

              {image?.subtextItems && (
                <div className="image-row__subtext">
                  {image.subtextItems.map((item, subIndex) => (
                    <span key={subIndex}>{item}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      })}
      </div>

      {featureBoxesData?.map((featureBox, index) => (
        index === activeSlideIndex && <FeatureBoxes key={index} featureBoxesData={featureBox} />
      ))}
    </>
  );
};

export default ImageRow;
