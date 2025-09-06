import React from 'react';
import styles from './TrustBadgeRow.module.css';

const badges = [
  { label: 'NICEIC Approved', icon: '✔️' },
  { label: 'Part P Registered', icon: '✔️' },
  { label: 'ECA Member', icon: '✔️' },
  { label: 'Fully Insured', icon: '✔️' },
];

const TrustBadgeRow: React.FC = () => (
  <section className={styles.trustBadgeRow}>
    <div className={styles.grid}>
      {badges.map(badge => (
        <div key={badge.label} className={styles.badge}>
          <span className={styles.icon}>{badge.icon}</span>
          <span className={styles.label}>{badge.label}</span>
        </div>
      ))}
    </div>
  </section>
);

export default TrustBadgeRow;
