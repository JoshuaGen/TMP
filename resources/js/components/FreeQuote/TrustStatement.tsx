import React from 'react';
import styles from './TrustStatement.module.css';

const TrustStatement: React.FC = () => (
  <section className={styles.trustStatement}>
    <p className={styles.text}>We’ll respond within 24 hours. No hidden costs. Your information is safe with us.</p>
  </section>
);

export default TrustStatement;
