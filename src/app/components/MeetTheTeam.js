'use client'; // Ensure this is a client component

import React from 'react';
import './MeetTheTeam.scss'; // Import styles

const teamMembers = [
  { name: 'John Doe', image: '/images/member1.jpg' },
  { name: 'Bill Jones', image: '/images/member2.jpg' },
  { name: 'Chris Johnson', image: '/images/member3.jpg' },
  { name: 'Michael Brown', image: '/images/member4.jpg' },
];

const MeetTheTeam = () => {
  return (
    <div className="meet-the-team">
      <h2 className="heading">Our Experts are like no other</h2>
      <p className='subheading'>Our team brings unparalleled craftsmanship and dedication to every project. 
        With years of experience and a passion for precision, we’re committed to transforming your spaces with flooring solutions that stand the test of time.
      </p>
      <div className="team-gallery">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={member.name} className="member-image" />
            <div className="overlay">
              <span className="member-name">{member.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetTheTeam;
