'use client'; // Ensure this is a client component

import './HeaderList.scss';
import { FaCheckCircle } from 'react-icons/fa'; // Import icons


const HeaderList = ({ header, subheader, items }) => {
  return (
    <div className="header-list">
      <h2>{header}</h2>
      <p>{subheader}</p>
      <ul>
        {items.map((item, index) => (
          <li key={index}><FaCheckCircle /><span>{item}</span></li>
        ))}
      </ul>
    </div>
  );
};

export default HeaderList;
