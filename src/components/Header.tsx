import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const location = useLocation();

  const handleJoinUsClick = () => {
    setShowLoginModal(true);
  };

  const closeModal = () => {
    setShowLoginModal(false);
  };

  const switchToRegister = () => {
    setIsLoginMode(false);
  };

  const switchToLogin = () => {
    setIsLoginMode(true);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.logoCircle}>
            <Link to="/" className={styles.logoLink}>
              <span className={styles.logoText}>W<span className={styles.logoDot}>.</span></span>
            </Link>
          </div>
          <nav className={styles.nav}>
            <Link 
              to="/" 
              className={location.pathname === "/" ? styles.activeLink : ""}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={location.pathname === "/about" ? styles.activeLink : ""}
            >
              About
            </Link>
            <Link 
              to="/products" 
              className={location.pathname === "/products" ? styles.activeLink : ""}
            >
              Products
            </Link>
            <Link 
              to="/contact" 
              className={location.pathname === "/contact" ? styles.activeLink : ""}
            >
              Contact
            </Link>
            <Link 
              to="/faq" 
              className={location.pathname === "/faq" ? styles.activeLink : ""}
            >
              FAQ
            </Link>
          </nav>
          <div className={styles.rightSection}>
            <button className={styles.joinUsBtn} onClick={handleJoinUsClick}>
              Join Us
            </button>
          </div>
        </div>
      </header>

      {/* Login/Register Modal */}
      {showLoginModal && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3>{isLoginMode ? 'Login' : 'Register'}</h3>
              <button className={styles.closeBtn} onClick={closeModal}>×</button>
            </div>
            
            <div className={styles.modalBody}>
              {isLoginMode ? (
                <form className={styles.loginForm}>
                  <div className={styles.formGroup}>
                    <label>Email</label>
                    <input type="email" placeholder="Enter your email" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password" required />
                  </div>
                  <button type="submit" className={styles.submitBtn}>Login</button>
                  <div className={styles.switchMode}>
                    <p>Don't have an account? <button type="button" onClick={switchToRegister} className={styles.switchBtn}>Register here</button></p>
                  </div>
                </form>
              ) : (
                <form className={styles.registerForm}>
                  <div className={styles.formGroup}>
                    <label>Full Name</label>
                    <input type="text" placeholder="Enter your full name" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Email</label>
                    <input type="email" placeholder="Enter your email" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Password</label>
                    <input type="password" placeholder="Create a password" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Confirm Password</label>
                    <input type="password" placeholder="Confirm your password" required />
                  </div>
                  <button type="submit" className={styles.submitBtn}>Register</button>
                  <div className={styles.switchMode}>
                    <p>Already have an account? <button type="button" onClick={switchToLogin} className={styles.switchBtn}>Login here</button></p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header; 