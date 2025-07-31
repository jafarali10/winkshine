import React from 'react';
import MapSection from '../components/MapSection';
import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';
import styles from './ContactPage.module.css';

const ContactPage: React.FC = () => {
  return (
    <div className={styles.contactPage}>
      <div className={styles.pageHeader}>
        <div className={styles.headerContent}>
          <h1 className={styles.pageTitle}>Contact Us</h1>
          <p className={styles.pageSubtitle}>
            Get in touch with us for any questions about our car care products and services
          </p>
        </div>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.contentContainer}>
          {/* Map Section */}
          <div className={styles.mapSection}>
            <MapSection />
          </div>

          {/* Contact Information and Form Section */}
          <div className={styles.contactSection}>
            <div className={styles.contactGrid}>
              {/* Contact Information */}
              <div className={styles.contactInfoWrapper}>
                <ContactInfo />
              </div>

              {/* Contact Form */}
              <div className={styles.contactFormWrapper}>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 