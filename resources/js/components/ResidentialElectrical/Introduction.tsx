import React from 'react';
import styles from './Introduction.module.css';

const Introduction: React.FC = () => (
  <section className={styles.introduction}>
    <h2 className={styles.heading}>Overview</h2>
    <p className={styles.text}>
      Our residential electrical services cover everything from new installations to upgrades and repairs. We ensure your home is safe, energy-efficient, and up to code, with a focus on quality workmanship and customer satisfaction.
    </p>
  </section>
);

export default Introduction;
