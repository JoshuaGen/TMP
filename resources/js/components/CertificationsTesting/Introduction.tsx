import React, { useState } from 'react';
import styles from './Introduction.module.css';

const overviews = [
  "Electrical certifications are essential for ensuring the safety and legal compliance of your property. Our accredited testing services help protect you, your tenants, and your investment.",
  "We provide landlord safety certificates, EICRs, and PAT testing to keep your property compliant and your residents safe.",
  "Our team is fully accredited and up-to-date with the latest regulations, ensuring your peace of mind and legal protection."
];

const Introduction: React.FC = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % overviews.length);
  const prev = () => setIndex((i) => (i - 1 + overviews.length) % overviews.length);

  return (
    <section className={styles.introduction}>
      <h2 className={styles.heading}>Why Certifications Matter</h2>
      <p className={styles.text}>{overviews[index]}</p>
      <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1.2rem', justifyContent: 'center', alignItems: 'center' }}>
        <button onClick={prev} aria-label="Previous" style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#888', padding: 0 }}>&#8592;</button>
        <span style={{ fontSize: '0.95rem', color: '#aaa' }}>{index + 1} / {overviews.length}</span>
        <button onClick={next} aria-label="Next" style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#888', padding: 0 }}>&#8594;</button>
      </div>
    </section>
  );
};

export default Introduction;
