import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logoCircle}>
          <span className={styles.logoText}>W<span className={styles.logoDot}>.</span></span>
        </div>
        <nav className={styles.nav}>
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/faq">FAQ</a>
        </nav>
        <div className={styles.rightSection}>
          <input className={styles.search} type="text" placeholder="Search products..." />
          <a href="/account" className={styles.account}>Account</a>
        </div>
      </div>
    </header>
  );
};

export default Header; 