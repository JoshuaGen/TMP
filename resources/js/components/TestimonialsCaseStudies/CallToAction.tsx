import React from 'react';
import styles from './CallToAction.module.css';

const CallToAction: React.FC = () => (
  <section className={styles.callToAction}>
    <h2 className={styles.heading}>Work With Us</h2>
    <p className={styles.text}>See how we can help you achieve your goals. Contact us for a free consultation or quote.</p>
    <a href="/FreeQuote" className={styles.ctaButton}>See How We Can Help You</a>
  </section>
);

export default CallToAction;
