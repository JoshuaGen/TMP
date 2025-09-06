import React from 'react';
import styles from './FinalCallToAction.module.css';

const FinalCallToAction: React.FC = () => (
  <section className={styles.finalCta}>
    <a href="#quote-form" className={styles.ctaButton}>Request Quote Now</a>
  </section>
);

export default FinalCallToAction;
