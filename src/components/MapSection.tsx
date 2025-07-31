import React from 'react';
import styles from './MapSection.module.css';

const MapSection: React.FC = () => {
  return (
    <div className={styles.mapContainer}>
      <div className={styles.mapWrapper}>
        {/* Google Maps iframe - Updated for Chapi, Gujarat */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.5!2d72.5!3d23.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAwJzAwLjAiTiA3MsKwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Winkshine Location - Chapi, Gujarat"
          className={styles.map}
        />
        
        {/* Map overlay with location pin */}
        <div className={styles.mapOverlay}>
          <div className={styles.locationPin}>
            <div className={styles.pinIcon}>📍</div>
            <div className={styles.pinLabel}>
              <strong>Winkshine</strong>
              <span>E/88, MAHAVIR IND. PARK-2</span>
              <span>Chapi, Gujarat</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Map legend/info */}
      <div className={styles.mapInfo}>
        <h3 className={styles.mapTitle}>Our Location</h3>
        <p className={styles.mapDescription}>
          Find us at Mahavir Industrial Park-2, near Vinayak Industrial Estate-2, 
          Chapi, Gujarat. We're easily accessible and ready to serve your car care needs.
        </p>
        <div className={styles.mapFeatures}>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>🚗</span>
            <span>Free Parking Available</span>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>🕒</span>
            <span>Open 10:00 AM - 7:00 PM</span>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>📞</span>
            <span>Call for Directions</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSection; 