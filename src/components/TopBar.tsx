import React from 'react';
import styles from './TopBar.module.css';

const TopBar: React.FC = () => {
  return (
    <div className={styles.topBar}>
      <div className={styles.topBarContainer}>
        <div className={styles.contactInfo}>
          <span className={styles.phoneNumber}>+91 9724698607</span>
          <span className={styles.phoneNumber}>+91 9327496578</span>
        </div>
        <div className={styles.socialAndActions}>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.socialIcon} aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className={styles.socialIcon} aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className={styles.socialIcon} aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <div className={styles.actionIcons}>
            <button className={styles.actionIcon} aria-label="Search">
              <i className="fas fa-search"></i>
            </button>
            <button className={styles.actionIcon} aria-label="Account">
              <i className="fas fa-user"></i>
            </button>
            <button className={styles.actionIcon} aria-label="Cart">
              <i className="fas fa-shopping-cart"></i>
              <span className={styles.cartCount}>0</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar; 