"use client";

import React, { useState } from "react";
import "./Contact.scss";
import Image from "next/image"; // Import Image from Next.js
import { usePathname } from 'next/navigation';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    comments: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.phone) newErrors.phone = "Phone number is required.";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required.";
    if (!formData.comments) newErrors.comments = "Please add your comments.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch("/.netlify/functions/send-contact-email", { // Update the endpoint to match your Netlify function
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        const result = await response.json();
        console.log('res: ', result);
        if (response.ok) {
          console.log(result.message);
          setFormData({ name: "", phone: "", email: "", comments: "" });
        } else {
          console.error(result.error);
        }
      } catch (err) {
        console.error("Failed to submit form:", err);
      }
    }
  };

  const pathname = usePathname();

  return (
    <div className={pathname === '/contact'? 'contact-container margin' : 'contact-container'}>
      <div className="contact-container__image">
        <Image 
          src="/images/contact.jpg"
          alt="Contact our team"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="contact-container__form">
        <h2>Contact Us</h2>
        <p>Have questions or need assistance? Fill out the form below, and our expert team will get back to you as soon as possible!</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">
              Name
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
            {errors.name && <span cla
            ssName="error">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="phone">
              Phone Number
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </label>
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">
              Email
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="comments">
              Comments
              <textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
              ></textarea>
            </label>
            {errors.comments && <span className="error">{errors.comments}</span>}
          </div>

          <button type="submit" className="button button--secondary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
