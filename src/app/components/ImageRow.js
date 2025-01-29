'use client';
import { urlFor } from '../../lib/sanity';
import React, { useState } from "react";
import "./ImageRow.scss";
import { usePathname } from 'next/navigation';
import Slideshow from "./Slideshow";
import Modal from './Modal';

const ImageRow = ({ imageRowData }) => {
  const pathname = usePathname();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const images = imageRowData?.images || [];

  const onImageClick = (index) => {
    if (!images) return;
    setActiveSlideIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={pathname === '/products' || pathname === '/portfolio' ? 'image-row margin' : 'image-row'}>
        {images.map((image, index) =>  {
          const imageUrl = image?.image ? urlFor(image.image).url() : null;
          
          return (          
            <div
              key={index}
              className="image-row__item"
              style={{ backgroundImage: `url(${imageUrl})` }}
              onClick={() => onImageClick(index)} // Trigger modal with slide index
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
          )})}
      </div>

      {/* Modal to show Slideshow */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Slideshow slides={images} initialIndex={activeSlideIndex} />
      </Modal>
    </>
  );
};

export default ImageRow;
