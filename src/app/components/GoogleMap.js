import React from "react";
import './GoogleMap.scss';

const GoogleMap = () => {

  return (
    <div className="google-map">
      <h2 className="google-map__heading">Office located in <br /> <span>Hiram, GA</span></h2>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4088.859159296454!2d-84.74597952357011!3d33.87694207322355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f53ac51ef16d25%3A0xf5ab158ae40e1751!2s783%20Metromont%20Rd%2C%20Hiram%2C%20GA%2030141!5e1!3m2!1sen!2sus!4v1737428892639!5m2!1sen!2sus" 
        width="800" 
        height="600" 
        allowFullScreen
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
