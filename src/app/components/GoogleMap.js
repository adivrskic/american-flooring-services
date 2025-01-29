import React from "react";
import './GoogleMap.scss';

const GoogleMap = ({ googleMapData }) => {
  return (
    <div className="google-map">
      <h2 className="google-map__heading">{googleMapData?.title} <br /> <span>{googleMapData?.location}</span></h2>
      <iframe 
        src={googleMapData?.embedUrl}
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
