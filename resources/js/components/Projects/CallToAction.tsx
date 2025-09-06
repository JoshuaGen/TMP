import React from 'react';
import styles from './CallToAction.module.css';

const CallToAction: React.FC = () => (
  <section className={styles.callToAction}>
    <h2 className={styles.heading}>Start Your Project With Us</h2>
    <a href="/FreeQuote" className={styles.ctaButton}>Get a Free Quote</a>
  </section>
);

export default CallToAction;
