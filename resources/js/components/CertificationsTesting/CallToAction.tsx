import React from 'react';
import styles from './CallToAction.module.css';

const CallToAction: React.FC = () => (
  <section className={styles.callToAction}>
    <h2 className={styles.heading}>Book Your Certification</h2>
    <a href="/FreeQuote" className={styles.ctaButton}>Request an EICR</a>
  </section>
);

export default CallToAction;
