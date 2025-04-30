'use client';
import { urlFor } from '../../lib/sanity';
import React, { useState, useEffect, useRef } from "react";
import "./ImageRow.scss";
import { usePathname } from 'next/navigation';
import FeatureBoxes from './FeatureBoxes';

const ImageRow = ({ imageRowData, featureBoxesData }) => {
  const pathname = usePathname();
  const [clickedIndex, setClickedIndex] = useState(0);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const featureBoxesRef = useRef(null);
  const images = imageRowData?.images || [];

  // Initialize with first image active and check for mobile
  useEffect(() => {
    if (images.length > 0) {
      setClickedIndex(0);
      setActiveSlideIndex(0);
    }
    
    // Check if we're on mobile
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 1080);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, [imageRowData, images.length]);

  const onImageClick = (index) => {
    if (!images) return;
    setActiveSlideIndex(index);
    setClickedIndex(index);
    
    if (isMobile && featureBoxesData && featureBoxesData.length > 0) {
      setTimeout(() => {
        const yOffset = -78;
        const element = featureBoxesRef.current;
        if (element) {
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({
            top: y,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  };

  return (
    <>
      <div className={`image-row ${pathname === '/products' || pathname === '/portfolio' ? 'margin' : ''} ${pathname === '/portfolio' ? 'half' : ''}`}>
        {images.map((image, index) => {
          const imageUrl = image?.image ? urlFor(image.image).url() : null;
          return (
            <div
              key={index}
              className={`image-row__item ${clickedIndex === index ? 'active' : ''}`}
              style={{ backgroundImage: `url(${imageUrl})` }}
              onClick={() => onImageClick(index)}
              aria-label={`Select ${image.text}`}
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
      <div ref={featureBoxesRef}>
        {featureBoxesData?.map((featureBox, index) => (
          index === activeSlideIndex && <FeatureBoxes key={index} featureBoxesData={featureBox} />
        ))}
      </div>
    </>
  );
};

export default ImageRow;