'use client';

import React, { useState } from 'react';
import './SubcontractorApplicationForm.scss';

const SubcontractorApplicationForm = () => {
  const [formVisible, setFormVisible] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    businessPhone: '',
    altPhone: '',
    email: '',
    yearsInTrade: '',
    productsInstalled: [],
    generalLiabilities: '',
    workersComp: '',
    willingToObtain: '',
    additionalComments: '',
  });

  const products = ['Carpet', 'Lvt', 'Vinyl', 'Tile', 'Laminate'];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Add logic to send data to your API
  };

  return (
    <div className={`subcontractor-form ${formVisible ? 'expanded' : ''}`}>
      <h2>Subcontractor Application</h2>
      <p className="subtext">
        Please fill out the application below to apply as a subcontractor. Our team will review your information and get back to you promptly.
      </p>
      {!formVisible && (
        <div className="gradient-overlay"></div>
      )}
      <button
      type="button"
      className="button button--secondary"
      onClick={() => setFormVisible(!formVisible)}
      >
        {formVisible ? 'Hide Application Form' : 'Start Applying' }
      </button>
      <form onSubmit={handleSubmit} className={formVisible ? 'visible' : ''}>
        {/* Rest of the form fields */}
        <div className='flex'>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </label>
        </div>


        {/* Business Details */}
        <label>
          Company Name:
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </label>
        <div className='flex'>
          <label>
            City:
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </label>
          <label>
            State:
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
            />
          </label>
          <label>
            Zip:
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className='flex'>
          <label>
            Business Phone:
            <input
              type="tel"
              name="businessPhone"
              value={formData.businessPhone}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Alternate Phone:
            <input
              type="tel"
              name="altPhone"
              value={formData.altPhone}
              onChange={handleChange}
            />
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
        </label>
        <label>
          Years in the Trade:
          <input
            type="number"
            name="yearsInTrade"
            value={formData.yearsInTrade}
            onChange={handleChange}
          />
        </label>

        <div className='flex'>
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

          {/* Insurance Questions */}
          <fieldset>
            <legend>Do you have General Liabilities insurance?</legend>
            <label>
              <input
                type="radio"
                name="generalLiabilities"
                value="yes"
                checked={formData.generalLiabilities === 'yes'}
                onChange={handleChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="generalLiabilities"
                value="no"
                checked={formData.generalLiabilities === 'no'}
                onChange={handleChange}
              />
              No
            </label>
          </fieldset>
          </div>
          <div className='flex'>
          <fieldset>
            <legend>Do you have Workers Compensation insurance?</legend>
            <label>
              <input
                type="radio"
                name="workersComp"
                value="yes"
                checked={formData.workersComp === 'yes'}
                onChange={handleChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="workersComp"
                value="no"
                checked={formData.workersComp === 'no'}
                onChange={handleChange}
              />
              No
            </label>
          </fieldset>
          <fieldset>
            <legend>
              If you do not have one or either, are you willing to obtain it?
            </legend>
            <label>
              <input
                type="radio"
                name="willingToObtain"
                value="yes"
                checked={formData.willingToObtain === 'yes'}
                onChange={handleChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="willingToObtain"
                value="no"
                checked={formData.willingToObtain === 'no'}
                onChange={handleChange}
              />
              No
            </label>
          </fieldset>
        </div>

        <label>
          Additional Comments:
          <textarea
            name="additionalComments"
            value={formData.additionalComments}
            onChange={handleChange}
          />
        </label>

        {/* Submit Button */}
        <button type="submit" className='button button--secondary'>Submit Application</button>
      </form>
    </div>

  );
};

export default SubcontractorApplicationForm;
