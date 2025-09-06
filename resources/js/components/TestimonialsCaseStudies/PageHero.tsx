import React from 'react';
import styles from './PageHero.module.css';

const PageHero: React.FC = () => (
  <section className={styles.pageHero}>
    <div className={styles.heroContent}>
      <h1 className={styles.title}>Our Clients Say It Best</h1>
      <p className={styles.subtitle}>See how we deliver results and satisfaction for every project.</p>
    </div>
    <div className={styles.heroImage} aria-hidden="true">
      {/* Replace with actual image or SVG */}
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none"><rect width="120" height="120" rx="24" fill="#eaf6ff"/><path d="M60 30C75 30 90 45 90 60C90 75 75 90 60 90C45 90 30 75 30 60C30 45 45 30 60 30Z" stroke="#007BFF" strokeWidth="6"/><circle cx="60" cy="60" r="16" fill="#007BFF"/></svg>
    </div>
  </section>
);

export default PageHero;
