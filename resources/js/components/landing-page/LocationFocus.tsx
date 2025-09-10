import { motion } from 'framer-motion';

import styles from './LocationFocus.module.css';

const LocationFocus: React.FC = () => (
  <motion.section
    className={styles.locationFocus}
    initial={{ opacity: 0, y: -60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
  >
    <span className={styles.mapPin}>
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="24" cy="41" rx="7" ry="3" fill="#222" fillOpacity="0.18"/>
        <path d="M24 6C16.82 6 11 11.82 11 19C11 28.25 22.13 40.13 22.6 40.62C23.37 41.45 24.63 41.45 25.4 40.62C25.87 40.13 37 28.25 37 19C37 11.82 31.18 6 24 6ZM24 23C21.24 23 19 20.76 19 18C19 15.24 21.24 13 24 13C26.76 13 29 15.24 29 18C29 20.76 26.76 23 24 23Z" fill="#e53935"/>
        <circle cx="24" cy="18" r="4" fill="#fff"/>
      </svg>
    </span>
    <iframe
      className={styles.googleMap}
      src="https://www.google.com/maps?q=123+Electric+Ave,+Leeds,+LS1+1AB,+UK&output=embed"
      allowFullScreen
      loading="lazy"
      title="Map of 123 Electric Ave, Leeds, LS1 1AB"
    />
    <div className={styles.overlay}>
      <h2 className={styles.heading}>Serving Leeds, West Yorkshire</h2>
      <div className={styles.infoLine}>Mon-Fri: 8am - 6pm</div>
      <div className={styles.infoLine}>123 Electric Ave, Leeds, LS1 1AB</div>
    </div>
  </motion.section>
);

export default LocationFocus;
