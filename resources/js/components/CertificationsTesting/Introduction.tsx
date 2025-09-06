import React from 'react';
import styles from './Introduction.module.css';

const Introduction: React.FC = () => (
  <section className={styles.introduction}>
    <h2 className={styles.heading}>Why Certifications Matter</h2>
    <p className={styles.text}>
      Electrical certifications are essential for ensuring the safety and legal compliance of your property. Our accredited testing services help protect you, your tenants, and your investment.
    </p>
  </section>
);

export default Introduction;
