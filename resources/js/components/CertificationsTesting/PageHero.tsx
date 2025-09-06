import React from 'react';
import styles from './PageHero.module.css';

const PageHero: React.FC = () => (
  <section className={styles.pageHero}>
    <h1 className={styles.title}>Certified for Your Safety</h1>
    <p className={styles.subtitle}>Accredited testing and certification for landlords and residents. Stay safe, stay compliant.</p>
    <a href="/FreeQuote" className={styles.ctaButton}>Book Your Test</a>
  </section>
);

export default PageHero;
