import React, { useState } from 'react';
import styles from './Introduction.module.css';

const overviews = [
  "We specialise in electrical testing in Leeds — including EICR landlord certificates, homeowner reports and PAT testing for rentals — to keep your property safe and legally compliant.",
  "Our certified electricians carry out thorough inspections to BS 7671, providing clear recommendations and rapid remedial support where needed. Ideal for landlords, estate agents and HMO owners.",
  "Book your electrical testing in Leeds today for reliable documentation, fast turnaround and competitive pricing — all handled by a trusted local team."
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
