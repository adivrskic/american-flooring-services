import React from "react";
import Image from "next/image";
import { urlFor } from '../../lib/sanity'; // Sanity client
import './Footer.scss';

const Footer = ({ footerData }) => {
  const imageUrl = footerData?.image ? urlFor(footerData.image).url() : '/images/americanflooringlogo.png'; // Fallback to default image

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__logo">
          <Image
            src={imageUrl}
            alt="Contact our team"
            layout="fixed"
            width={230}
            height={60}
            loading="lazy"
            quality={100}
          />
        </div>
        <div className="footer__info">
          <div className="footer__section">
            <h3>Office</h3>
            <p>{footerData?.office?.address}</p>
          </div>
          <div className="footer__section">
            <h3>Contact Us</h3>
            <p>{footerData?.contact?.phone}</p>
            <p>{footerData?.contact?.email}</p>
          </div>
          <div className="footer__section">
            <h3>Operating Hours</h3>
            <p>{footerData?.hours?.mondayToFriday}</p>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} American Flooring Services LLC. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
