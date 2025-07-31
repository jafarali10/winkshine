import React, { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    country: '',
    message: '',
    privacyPolicy: false
  });

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className={styles.contactFormContainer}>
      <h2 className={styles.formTitle}>Get in touch !</h2>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleTextChange}
            required
            className={styles.formInput}
          />
        </div>
        
        <div className={styles.formGroup}>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleTextChange}
            required
            className={styles.formInput}
          />
        </div>
        
        <div className={styles.formGroup}>
          <input
            type="tel"
            name="contactNumber"
            placeholder="Contact Number"
            value={formData.contactNumber}
            onChange={handleTextChange}
            required
            className={styles.formInput}
          />
        </div>
        
        <div className={styles.formGroup}>
          <select
            name="country"
            value={formData.country}
            onChange={handleTextChange}
            required
            className={styles.formInput}
          >
            <option value="">Your Country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
            <option value="Germany">Germany</option>
            <option value="France">France</option>
            <option value="Other">Other</option>
          </select>
        </div>
        
        <div className={styles.formGroup}>
          <textarea
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleTextChange}
            required
            className={`${styles.formInput} ${styles.textarea}`}
            rows={5}
          />
        </div>
        
        <div className={styles.checkboxGroup}>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="privacyPolicy"
              checked={formData.privacyPolicy}
              onChange={handleCheckboxChange}
              required
              className={styles.checkbox}
            />
            <span className={styles.checkboxText}>
              I have read and agree to the Privacy Policy.
            </span>
          </label>
        </div>
        
        <button type="submit" className={styles.submitButton}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm; 