
import styles from './ServiceOverview.module.css';

const ServiceOverview: React.FC = () => (
  <section className={styles.serviceOverview}>
    <div className={styles.serviceHeader}>
      <h2 className={styles.serviceHeading}>Our Services</h2>
      <div className={styles.serviceSubheading}>
        Explore our core offerings for residential and commercial clients.
      </div>
    </div>
    <div className={styles.serviceGrid}>
      <div className={styles.serviceCard}>
        <span className={styles.serviceIcon} aria-hidden="true">
          {/* Minimal line icon for Residential Electrical */}
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#181d1b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="13" width="18" height="12" rx="2"/><path d="M7 13l9-7 9 7"/></svg>
        </span>
        <div>
          <h3 className={styles.serviceTitle}>Residential Electrical</h3>
          <p className={styles.serviceDesc}>Safe, reliable, and modern electrical solutions for your home.</p>
        </div>
        <button className={styles.serviceArrowBtn} aria-label="Learn more about Residential Electrical">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#181d1b" strokeWidth="2"><circle cx="9" cy="9" r="8"/><path d="M7 9h4M10 7l2 2-2 2"/></svg>
        </button>
      </div>
      <div className={styles.serviceCard}>
        <span className={styles.serviceIcon} aria-hidden="true">
          {/* Minimal line icon for Certifications & Testing */}
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#181d1b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="8" width="16" height="16" rx="3"/><path d="M12 16l3 3 5-5"/></svg>
        </span>
        <div>
          <h3 className={styles.serviceTitle}>Certifications & Testing</h3>
          <p className={styles.serviceDesc}>Certified inspections and testing for peace of mind and compliance.</p>
        </div>
        <button className={styles.serviceArrowBtn} aria-label="Learn more about Certifications & Testing">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#181d1b" strokeWidth="2"><circle cx="9" cy="9" r="8"/><path d="M7 9h4M10 7l2 2-2 2"/></svg>
        </button>
      </div>
    </div>
  </section>
);

export default ServiceOverview;
