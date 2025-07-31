import React from 'react';
import styles from './ContactInfo.module.css';

const ContactInfo: React.FC = () => {
  return (
    <div className={styles.contactInfoContainer}>
      <div className={styles.infoSection}>
        <h3 className={styles.sectionTitle}>ADDRESS</h3>
        <p className={styles.infoText}>
          E/88, MAHAVIR IND. PARK-2, NR.VINAYAK IND. ESTATE-2, SINGARWA KATHAWADA ROAD, CHAPI, GUJARAT, 382430
        </p>
      </div>

      <div className={styles.infoSection}>
        <h3 className={styles.sectionTitle}>EMAIL US</h3>
        <a href="mailto:sales@winkshine.com" className={styles.infoLink}>
          sales@winkshine.com
        </a>
      </div>

      <div className={styles.infoSection}>
        <h3 className={styles.sectionTitle}>TELEPHONE</h3>
        <div className={styles.phoneNumbers}>
          <a href="tel:+919724698607" className={styles.infoLink}>
            +91 9724698607
          </a>
          <a href="tel:+919327496578" className={styles.infoLink}>
            +91 9327496578
          </a>
        </div>
      </div>

      <div className={styles.infoSection}>
        <h3 className={styles.sectionTitle}>WORKING HOURS</h3>
        <div className={styles.workingHours}>
          <p className={styles.infoText}>Open: 10:00AM - Close: 19:00PM</p>
          <p className={styles.infoText}>Sunday: Close</p>
        </div>
      </div>

      <div className={styles.infoSection}>
        <h3 className={styles.sectionTitle}>FOLLOW US</h3>
        <div className={styles.socialLinks}>
          <a href="#" className={styles.socialLink} aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className={styles.socialLink} aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className={styles.socialLink} aria-label="YouTube">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo; 