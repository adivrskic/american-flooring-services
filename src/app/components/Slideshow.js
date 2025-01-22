'use client';

import { useState } from 'react';
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

import './Slideshow.scss';

const Slideshow = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    setSelectedImageIndex(0); // Reset the selected image when changing slides
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    setSelectedImageIndex(0); // Reset the selected image when changing slides
  };

  const currentSlide = slides[currentIndex];

  return (
    <div className="slideshow">
      {/* Left Arrow */}
      <FaChevronCircleLeft className="arrow left-arrow" onClick={handlePrev} />

      {/* Main Image Section */}
      <div className="main-image">
        <img
          src={currentSlide.gallery[selectedImageIndex].src}
          alt={currentSlide.gallery[selectedImageIndex].alt}
        />
      </div>

      {/* Right Content */}
      <div className="right-section">
        {/* Gallery Row */}
        <div className="gallery">
          {currentSlide.gallery.map((image, index) => (
            <div
              key={index}
              className={`gallery-image ${index === selectedImageIndex ? 'active' : ''}`}
              onClick={() => setSelectedImageIndex(index)}
            >
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>

        {/* Description Section */}
        <div className="description">
          <h2>{currentSlide.header}</h2>
          <p>{currentSlide.text}</p>
        </div>
      </div>

      {/* Right Arrow */}
      <FaChevronCircleRight className="arrow right-arrow" onClick={handleNext} />
    </div>
  );
};

export default Slideshow;
