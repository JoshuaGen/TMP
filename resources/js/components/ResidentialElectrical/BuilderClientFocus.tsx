import React from 'react';
import styles from './BuilderClientFocus.module.css';

const BuilderClientFocus: React.FC = () => (
  <section className={styles.builderClientFocus}>
    <h2 className={styles.heading}>For Homeowners & Builders</h2>
    <div className={styles.content}>
      <div className={styles.textBlock + ' ' + styles.homeownersCard}>
        <h3 className={styles.subheading}>Homeowners</h3>
        <p className={styles.text}>We provide tailored solutions for every home, whether you’re renovating, building new, or upgrading your electrical systems.</p>
      </div>
      <div className={styles.textBlock + ' ' + styles.buildersCard}>
        <h3 className={styles.subheading}>Builders</h3>
        <p className={styles.text}>Partner with us for reliable, code-compliant electrical work on your residential projects, delivered on time and on budget.</p>
      </div>
    </div>
  </section>
);

export default BuilderClientFocus;
