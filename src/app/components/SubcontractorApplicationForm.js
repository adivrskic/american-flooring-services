"use client";

import React, { useState } from "react";
import "./SubcontractorApplicationForm.scss";

const SubcontractorApplicationForm = () => {
  const [formVisible, setFormVisible] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    businessPhone: "",
    altPhone: "",
    email: "",
    yearsInTrade: "",
    productsInstalled: [],
    generalLiabilities: "",
    workersComp: "",
    willingToObtain: "",
    additionalComments: "",
  });

  const [errors, setErrors] = useState({});

  const states = [
    "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY",
  ];

  const products = ["Carpet Tile", "Carpet", "Tile", "Natural Stone", "Vinyl"];

  const validateForm = () => {
    const newErrors = {};
    const phoneRegex = /^[0-9]{10}$/; // 10-digit phone numbers only
    const emailRegex = /^\S+@\S+\.\S+$/; // Basic email format

    if (!formData.firstName.trim() || formData.firstName.length > 50) {
      newErrors.firstName = "First name is required and cannot exceed 50 characters.";
    }
    if (!formData.lastName.trim() || formData.lastName.length > 50) {
      newErrors.lastName = "Last name is required and cannot exceed 50 characters.";
    }
    if (!formData.companyName.trim() || formData.companyName.length > 250) {
      newErrors.companyName = "Company name is required and cannot exceed 250 characters.";
    }
    if (!formData.address.trim() || formData.address.length > 250) {
      newErrors.address = "Address is required and cannot exceed 250 characters.";
    }
    if (!formData.city.trim() || formData.city.length > 50) {
      newErrors.city = "City is required and cannot exceed 50 characters.";
    }
    if (!formData.state.trim()) {
      newErrors.state = "State is required.";
    }
    if (!formData.zip.trim() || !/^[0-9]{5}$/.test(formData.zip)) {
      newErrors.zip = "ZIP code is required and must be 5 numeric digits.";
    }
    if (!formData.businessPhone.trim() || !phoneRegex.test(formData.businessPhone)) {
      newErrors.businessPhone = "Business phone is required and must be a 10-digit number.";
    }
    if (formData.altPhone && !phoneRegex.test(formData.altPhone)) {
      newErrors.altPhone = "Alternate phone must be a 10-digit number if provided.";
    }
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "A valid email is required.";
    }
    if (!formData.yearsInTrade.trim()) {
      newErrors.yearsInTrade = "Years in trade is required.";
    }
    if (formData.additionalComments.length > 1000) {
      newErrors.additionalComments = "Comments cannot exceed 1000 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        productsInstalled: checked
          ? [...prevData.productsInstalled, value]
          : prevData.productsInstalled.filter((product) => product !== value),
      }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch("/.netlify/functions/send-subcontractor-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        const result = await response.json();
        console.log("res: ", result);
        if (response.ok) {
          console.log(result.message);
          setFormData({
            firstName: "",
            lastName: "",
            companyName: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            businessPhone: "",
            altPhone: "",
            email: "",
            yearsInTrade: "",
            productsInstalled: [],
            generalLiabilities: "",
            workersComp: "",
            willingToObtain: "",
            additionalComments: "",
          });
        } else {
          console.error(result.error);
        }
      } catch (err) {
        console.error("Failed to submit form:", err);
      }
    }
  };

  return (
    <div className={`subcontractor-form ${formVisible ? "expanded" : ""}`}>
      <h2>Subcontractor Application</h2>
      <p className="subtext">
        Please fill out the application below to apply as a subcontractor. Our team will review your information and get back to you promptly.
      </p>
      {!formVisible && <div className="gradient-overlay"></div>}
      <button
        type="button"
        className="button button--secondary"
        onClick={() => setFormVisible(!formVisible)}
      >
        {formVisible ? "Hide Application Form" : "Start Applying"}
      </button>
      <form onSubmit={handleSubmit} className={formVisible ? "visible" : ""}>
        <div className="flex">
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              maxLength="50"
            />
            {errors.firstName && <span className="error">{errors.firstName}</span>}
          </label>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              maxLength="50"
            />
            {errors.lastName && <span className="error">{errors.lastName}</span>}
          </label>
        </div>

        <label>
          Company Name:
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
            maxLength="250"
          />
          {errors.companyName && <span className="error">{errors.companyName}</span>}
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            maxLength="250"
          />
          {errors.address && <span className="error">{errors.address}</span>}
        </label>
        <div className="flex">
          <label>
            City:
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              maxLength="50"
            />
            {errors.city && <span className="error">{errors.city}</span>}
          </label>
          <label>
            State:
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            >
              <option value="">Select a state</option>
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            {errors.state && <span className="error">{errors.state}</span>}
          </label>
          <label>
            ZIP:
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              required
              maxLength="5"
            />
            {errors.zip && <span className="error">{errors.zip}</span>}
          </label>
        </div>
        <div className="flex">
          <label>
            Business Phone:
            <input
              type="tel"
              name="businessPhone"
              value={formData.businessPhone}
              onChange={handleChange}
              required
            />
            {errors.businessPhone && <span className="error">{errors.businessPhone}</span>}
          </label>
          <label>
            Alternate Phone:
            <input
              type="tel"
              name="altPhone"
              value={formData.altPhone}
              onChange={handleChange}
            />
            {errors.altPhone && <span className="error">{errors.altPhone}</span>}
          </label>
        </div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>

        <div className="flex">
          <fieldset>
            <legend>Products Installed</legend>
            {products.map((product) => (
              <label key={product}>
                <input
                  type="checkbox"
                  name="productsInstalled"
                  value={product}
                  checked={formData.productsInstalled.includes(product)}
                  onChange={handleChange}
                />
                {product}
              </label>
            ))}
          </fieldset>
          <label>
            Years in the Trade:
            <select
              name="yearsInTrade"
              value={formData.yearsInTrade}
              onChange={handleChange}
              required
            >
              <option value="">Select years</option>
              {[...Array(99).keys()].map((year) => (
                <option key={year + 1} value={year + 1}>
                  {year + 1}
                </option>
              ))}
            </select>
            {errors.yearsInTrade && <span className="error">{errors.yearsInTrade}</span>}
          </label>
        </div>
        <label>
          Do You Have General Liability Insurance:
          <select
            name="generalLiabilities"
            value={formData.generalLiabilities}
            onChange={handleChange}
            required
          >
            <option value="">Select an option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          {errors.generalLiabilities && <span className="error">{errors.generalLiabilities}</span>}
        </label>
        <label>
          Do You Have Workers Compensation Insurance:
          <select
            name="workersComp"
            value={formData.workersComp}
            onChange={handleChange}
            required
          >
            <option value="">Select an option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          {errors.workersComp && <span className="error">{errors.workersComp}</span>}
        </label>
        <label>
          Are You Willing to Obtain Necessary Licenses/Certifications:
          <select
            name="willingToObtain"
            value={formData.willingToObtain}
            onChange={handleChange}
            required
          >
            <option value="">Select an option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          {errors.willingToObtain && <span className="error">{errors.willingToObtain}</span>}
        </label>
        <label>
          Additional Comments:
          <textarea
            name="additionalComments"
            value={formData.additionalComments}
            onChange={handleChange}
            maxLength="1000"
          />
          {errors.additionalComments && <span className="error">{errors.additionalComments}</span>}
        </label>

        <button type="submit" className="button button--primary">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default SubcontractorApplicationForm;
