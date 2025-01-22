'use client';

import './FeatureBoxes.scss';
import { FaTools, FaFastForward, FaTree, FaLock, FaPaintRoller, FaPhone } from "react-icons/fa";

const FeatureBoxes = () => {
  const features = [
    {
      icon: <FaTools />,
      title: 'Quality Tools',
      description: 'Our tools are built to last and ensure top-notch performance.',
    },
    {
      icon: <FaFastForward />,
      title: 'Fast Service',
      description: 'We provide quick and reliable service for all your needs.',
    },
    {
      icon: <FaTree />,
      title: 'Eco-Friendly',
      description: 'Committed to sustainable and environmentally friendly solutions.',
    },
    {
      icon: <FaLock />,
      title: 'Secure',
      description: 'Your safety and security are our top priorities.',
    },
    {
      icon: <FaPaintRoller />,
      title: 'Custom Designs',
      description: 'Tailored designs to meet your unique requirements.',
    },
    {
      icon: <FaPhone />,
      title: '24/7 Support',
      description: 'We’re here to assist you anytime, day or night.',
    },
  ];

  return (
    <div className="feature-boxes">
      <h2 className="heading">Our Expert Services</h2>
      <div className="box-container">
        {features.map((feature, index) => (
          <div key={index} className="box">
            <div className="icon">{feature.icon}</div>
            <h3 className="box-title">{feature.title}</h3>
            <p className="box-text">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureBoxes;
