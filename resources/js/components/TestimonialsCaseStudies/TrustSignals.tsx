import React from 'react';
import styles from './TrustSignals.module.css';

const signals = [
  { label: 'NICEIC Approved', icon: '✔️' },
  { label: 'Part P Registered', icon: '✔️' },
  { label: 'Fully Insured', icon: '✔️' },
  { label: 'Local Authority Approved', icon: '✔️' },
];

const TrustSignals: React.FC = () => (
  <section className={styles.trustSignals}>
    <h2 className={styles.heading}>Our Credentials</h2>
    <div className={styles.grid}>
      {signals.map(signal => (
        <div key={signal.label} className={styles.signal}>
          <span className={styles.icon}>{signal.icon}</span>
          <span className={styles.label}>{signal.label}</span>
        </div>
      ))}
    </div>
  </section>
);

export default TrustSignals;
