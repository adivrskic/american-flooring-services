'use client';

import { urlFor } from '../../lib/sanity';
import { useState } from 'react';
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import Image from 'next/image';
import './Slideshow.scss';

const Slideshow = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const currentSlide = slides[currentIndex];
  const imageUrl = currentSlide?.asset ? urlFor(currentSlide.asset).url() : null;

  return (
    <div className="slideshow">
      <div className="main-image">
        <Image 
          src={imageUrl}
          alt="Project Image"
          layout="fill"
          objectFit="cover"
          quality={50}
          priority
        />
        <div className="arrows">
          <FaChevronCircleLeft className="arrow left-arrow" onClick={handlePrev} />
          <FaChevronCircleRight className="arrow right-arrow" onClick={handleNext} />
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
