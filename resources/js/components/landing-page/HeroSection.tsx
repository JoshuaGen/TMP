
import styles from './HeroSection.module.css';

const HeroSection: React.FC = () => (
  <section className={styles.heroSection}>
    <div className={styles.heroBgOverlay}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Professional Electrical Services in Leeds</h1>
        <p className={styles.heroSubtitle}>Super Responsive, Super Professional</p>
        <button className={styles.ctaButton}>Get a Free Quote</button>
      </div>
    </div>
  </section>
);

export default HeroSection;
