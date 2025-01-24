import React from "react";
import "./Footer.scss";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__logo">
          <Image 
            src="/images/americanflooringlogo.png"
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
            <p>783 Metromont Rd.<br />Hiram, GA 30141</p>
          </div>
          <div className="footer__section">
            <h3>Contact Us</h3>
            <p>+1 (770) 445-5955</p>
            <p>alex@americanflooringservices.com</p>
          </div>
          <div className="footer__section">
            <h3>Operating Hours</h3>
            <p>Mon - Fri: 8:00 AM - 5:00 PM</p>
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
