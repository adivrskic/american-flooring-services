'use client';
import { urlFor } from '../../lib/sanity';
import { useState, useEffect } from 'react';
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import Image from 'next/image';
import './Slideshow.scss';

const Slideshow = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Handle automatic rotation if desired
  useEffect(() => {
    // Uncomment the below for auto-rotation
    /*
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    
    return () => clearInterval(interval);
    */
  }, []);

  const handlePrev = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    
    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    
    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  // Handle touch events for swipe functionality
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      // Swipe left
      handleNext();
    }

    if (touchStart - touchEnd < -100) {
      // Swipe right
      handlePrev();
    }
  };

  const currentSlide = slides[currentIndex];
  const imageUrl = currentSlide?.asset ? urlFor(currentSlide.asset).url() : null;

  // Generate indicators based on slides count
  const renderIndicators = () => {
    return slides.map((_, index) => (
      <div 
        key={index} 
        className={`indicator ${index === currentIndex ? 'active' : ''}`}
        onClick={() => {
          if (isTransitioning) return;
          setIsTransitioning(true);
          setCurrentIndex(index);
          setTimeout(() => setIsTransitioning(false), 500);
        }}
      />
    ));
  };

  return (
    <div className="slideshow">
      <div 
        className={`main-image ${isTransitioning ? 'transitioning' : ''}`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          src={imageUrl}
          alt={currentSlide?.alt || "Slideshow Image"}
          layout="fill"
          objectFit="cover"
          quality={80}
          priority
          className="slide-image"
        />
        
        <button className="arrow left-arrow" onClick={handlePrev} aria-label="Previous slide">
          <FaChevronCircleLeft />
        </button>
        
        <button className="arrow right-arrow" onClick={handleNext} aria-label="Next slide">
          <FaChevronCircleRight />
        </button>
        
        <div className="indicators">
          {renderIndicators()}
        </div>
      </div>
    </div>
  );
};

export default Slideshow;