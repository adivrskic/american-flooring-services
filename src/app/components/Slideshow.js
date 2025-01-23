'use client';

import { useState } from 'react';
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import './Slideshow.scss';

const Slideshow = ({ slides, initialIndex }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex || 0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    setSelectedImageIndex(0);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    setSelectedImageIndex(0);
  };

  const currentSlide = slides[currentIndex];

  return (
    <div className="slideshow">
      <div className="main-image">
        <img
          src={currentSlide.gallery[selectedImageIndex].src}
          alt={currentSlide.gallery[selectedImageIndex].alt}
        />
      </div>

      <div className="right-section">
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

        <div className="description">
          <h2>{currentSlide.header}</h2>
          <p>{currentSlide.text}</p>
          <div className="arrows">
            <FaChevronCircleLeft className="arrow left-arrow" onClick={handlePrev} />
            <FaChevronCircleRight className="arrow right-arrow" onClick={handleNext} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
