'use client';

import React from "react";
import "./ImageRow.scss";
import { usePathname } from 'next/navigation'; // Use usePathname for App Router

const ImageRow = () => {
  const images = [
    { src: "/images/carpettile.jpg", text: "Carpet Tile" },
    { src: "/images/carpet.jpg", text: "Carpet" },
    { src: "/images/tile.jpg", text: "Tile" },
    { src: "/images/laminate.jpg", text: "Laminate" },
    { src: "/images/vinyl.jpg", text: "Vinyl" },
  ];

  const pathname = usePathname(); // Get the current path for App Router

  return (
    <div className={pathname === '/products'? 'image-row margin' : 'image-row'}>
      {images.map((image, index) => (
        <div
          key={index}
          className="image-row__item"
          style={{ backgroundImage: `url(${image.src})` }}
        >
          <div className="image-row__overlay">
            <span className="image-row__text">{image.text}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageRow;
