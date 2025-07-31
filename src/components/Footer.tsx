import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.topSection}>
          <div className={styles.about}>
            <h3>About Winkshine</h3>
            <p>Your trusted partner for premium car care products. Excellence, innovation, and customer satisfaction are our core values.</p>
          </div>
          <div className={styles.links}>
            <h4>Quick Links</h4>
            <a href="/">Home</a>
            <a href="/shop">Shop</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/faq">FAQ</a>
          </div>
          <div className={styles.policies}>
            <h4>Policies</h4>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms & Conditions</a>
            <a href="/returns">Return Policy</a>
          </div>
          <div className={styles.newsletter}>
            <h4>Newsletter</h4>
            <form className={styles.form}>
              {/* <input type="email" placeholder="Your email" />  */}
              {/* <button type="submit">Subscribe</button> */}
            </form>
            <div className={styles.socials}>
              <a href="#" aria-label="Facebook">🌐</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="Instagram">📸</a>
            </div>
          </div>
        </div>
        <div className={styles.bottomSection}>
          <div className={styles.address}>
            <span>Office: E/88, MAHAVIR IND. PARK-2, NR.VINAYAK IND. ESTATE-2, SINGARWA-KATHAWADA ROAD, KATHWADA, AHMEDABAD, 382430</span>
            <span>Email: sales@winkshine.com</span>
          </div>
          <div className={styles.copyright}>
            &copy; {new Date().getFullYear()} Winkshine. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 