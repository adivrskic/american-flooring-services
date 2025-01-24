'use client';

import React, { useState } from "react";
import "./ImageRow.scss";
import { usePathname } from 'next/navigation';
import Slideshow from "./Slideshow";
import Modal from './Modal';

const ImageRow = ({ images, slides }) => {
  const pathname = usePathname();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const onImageClick = (index) => {
    if(!slides) return;
    setActiveSlideIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={pathname === '/products' || pathname === '/portfolio' ? 'image-row margin' : 'image-row'}>
        {images.map((image, index) => (
          <div
            key={index}
            className="image-row__item"
            style={{ backgroundImage: `url(${image.src})` }}
            onClick={() => onImageClick(index)} // Trigger modal with slide index
          >
            <div className="image-row__overlay">
              <span className="image-row__text">{image.text}</span>

              {image?.subtextItems &&
                <div className="image-row__subtext">
                  {image?.subtextItems?.map(item => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              }
            </div>
          </div>
        ))}
      </div>


      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Slideshow slides={slides} initialIndex={activeSlideIndex} />
      </Modal>
    </>

  );
};

export default ImageRow;
