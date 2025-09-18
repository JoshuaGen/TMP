import React from 'react';
import styles from './PageHero.module.css';

const PageHero: React.FC = () => (
  <section className={styles.pageHero}>
    <div className={styles.heroContent}>
      <h1 className={styles.title}>Our Clients Say It Best</h1>
      <p className={styles.subtitle}>See how we deliver results and satisfaction for every project.</p>
      <p style={{ maxWidth: 820, margin: '0.25rem auto 0', color: '#fff', lineHeight: 1.7 }}>
        Looking for a reliable electrician in Leeds? Read our testimonials and case studies to see how we’ve helped homeowners, landlords and builders with electrical services in Leeds — from rewires and consumer unit upgrades to electrical testing and LED lighting. Get a free quote and join our satisfied clients across West Yorkshire.
      </p>
    </div>

  </section>
);

export default PageHero;
