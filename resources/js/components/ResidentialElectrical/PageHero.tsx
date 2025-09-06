import React from 'react';
import styles from './PageHero.module.css';

const PageHero: React.FC = () => (
  <section className={styles.pageHero}>
    <h1 className={styles.title}>Residential Electrical Services</h1>
    <p className={styles.intro}>Safe, modern, and reliable electrical solutions for your home. Trust our experts for all your residential needs.</p>
    <a href="/FreeQuote" className={styles.ctaButton}>Get a Free Quote</a>
  </section>
);

export default PageHero;
