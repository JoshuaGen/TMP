
import styles from './LocationFocus.module.css';

const LocationFocus: React.FC = () => (
  <section className={styles.locationFocus}>
    <div className={styles.locationGrid}>
      <div className={styles.locationText}>
        <h2 className={styles.locationTitle}>Serving Leeds, West Yorkshire & Nearby Areas</h2>
        <p className={styles.locationDesc}>We proudly serve homes and businesses across Leeds, West Yorkshire, and surrounding regions.</p>
      </div>
      <div className={styles.locationIllustration} aria-hidden="true">
        {/* Illustration placeholder, replace with SVG or image as needed */}
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="80" height="80" rx="20" fill="#eaf6ff"/>
          <path d="M40 20C50 20 60 30 60 40C60 50 50 60 40 60C30 60 20 50 20 40C20 30 30 20 40 20Z" stroke="#007BFF" strokeWidth="4"/>
          <circle cx="40" cy="40" r="8" fill="#007BFF"/>
        </svg>
      </div>
    </div>
  </section>
);

export default LocationFocus;
