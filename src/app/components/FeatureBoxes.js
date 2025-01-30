'use client';

import './FeatureBoxes.scss';
import Link from 'next/link';
import { useState } from 'react';
import Modal from './Modal';
import Slideshow from './Slideshow';
import { urlFor } from '../../lib/sanity';

const FeatureBoxes = ({ featureBoxesData }) => {
  console.log(featureBoxesData);
  const { title, features, link, linkHref, linkText } = featureBoxesData;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="feature-boxes">
        <h2>{title + ' Projects' || 'Our Expert Services'}</h2>

        <div className="box-container">
          {features?.map((feature, index) => {
            console.log(feature);
            const backgroundImage = feature.backgroundImage ? urlFor(feature.backgroundImage).url() : null;
            const featureImages = feature.images?.map(img => urlFor(img).url()) || [];
            const iconSvgUrl = feature.iconSvg?.asset?._ref
              ? feature.iconSvg.asset._ref.replace("file-", "https://cdn.sanity.io/files/gsi2wq20/production/").replace("-svg", ".svg")
              : null;

            return (
              <div
                key={index}
                className="box"
                style={{ backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none' }}
                onClick={() => featureImages.length > 0 && openModal(index, featureImages)}
              >
                {backgroundImage && <div className="box-overlay"></div>}
                {feature.iconType === 'image' && feature.iconImage && (
                  <div className="icon">
                    <img
                      src={feature.iconImage?.asset.url}
                      alt={feature.title}
                      loading="lazy"
                      className="icon-image"
                    />
                  </div>
                )}

                {feature.iconType === 'svg' && feature.iconSvg && (
                  <img className="icon" src={iconSvgUrl} />
                )}

                <h3 className="box-title">{feature.title}</h3>
                <p className="box-text">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {link && linkHref && linkText && (
          <Link className="button button--secondary" href={linkHref}>
            {linkText}
          </Link>
        )}
      </div>

      {/* Modal Slideshow */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Slideshow slides={featureBoxesData?.features?.[0]?.images} />
      </Modal>
    </>
  );
};

export default FeatureBoxes;
