import React from 'react';
import styles from './ComplianceStandards.module.css';

const ComplianceStandards: React.FC = () => (
  <section className={styles.complianceStandards}>
    <h2 className={styles.heading}>Compliance & Standards</h2>
    <p className={styles.text}>
      We adhere to the latest UK safety regulations and are accredited by leading industry bodies. Our certifications ensure your property is safe, legal, and up to code.
    </p>
    <div className={styles.logos}>
      {/* Replace with actual logos as needed */}
      <span className={styles.logo}>NICEIC</span>
      <span className={styles.logo}>Part P</span>
      <span className={styles.logo}>ECA</span>
    </div>
  </section>
);

export default ComplianceStandards;
