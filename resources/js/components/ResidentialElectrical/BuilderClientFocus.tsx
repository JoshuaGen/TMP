import React from 'react';
import styles from './BuilderClientFocus.module.css';

const BuilderClientFocus: React.FC = () => (
  <section className={styles.builderClientFocus}>
    <h2 className={styles.heading}>For Homeowners & Builders</h2>
    <div className={styles.content}>
      <div className={styles.textBlock + ' ' + styles.homeownersCard}>
        <h3 className={styles.subheading}>Homeowners</h3>
        <p className={styles.text}>From quick repairs and fault finding to full rewires, consumer unit upgrades, EV chargers and LED lighting — we deliver safe, tidy work with minimal disruption. Fully certified and insured, serving homes across Leeds & West Yorkshire.</p>
      </div>
      <div className={styles.textBlock + ' ' + styles.buildersCard}>
        <h3 className={styles.subheading}>Builders</h3>
        <p className={styles.text}>Count on coordinated, code‑compliant electrics from first fix to final handover. We keep your schedule on track with clear communication, competitive pricing and certified electricians trusted by contractors across Leeds.</p>
      </div>
    </div>
  </section>
);

export default BuilderClientFocus;
