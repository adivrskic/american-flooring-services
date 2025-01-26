"use client";

import React, { useState } from "react";
import "./Contact.scss";
import Image from "next/image";
import { usePathname } from "next/navigation";

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
    const phoneRegex = /^[0-9]{10,15}$/; // Validates numeric-only phone numbers (10 to 15 digits)
    const emailRegex = /^\S+@\S+\.\S+$/; // Simple email regex

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (formData.name.length > 255) {
      newErrors.name = "Name cannot exceed 255 characters.";
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Phone number must be numeric and 10-15 digits.";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    } else if (formData.email.length > 255) {
      newErrors.email = "Email cannot exceed 255 characters.";
    }

    // Comments validation
    if (!formData.comments.trim()) {
      newErrors.comments = "Comments are required.";
    } else if (formData.comments.length > 1000) {
      newErrors.comments = "Comments cannot exceed 1000 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch("/.netlify/functions/send-contact-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        const result = await response.json();
        console.log("res: ", result);
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
    <div className={pathname === "/contact" ? "contact-container margin" : "contact-container"}>
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
                maxLength="255"
              />
            </label>
            {errors.name && <span className="error">{errors.name}</span>}
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
                maxLength="255"
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
                maxLength="1000"
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
