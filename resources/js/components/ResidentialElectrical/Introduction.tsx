import React, { useState } from 'react';
import styles from './Introduction.module.css';

const overviews = [
  "Our residential electrical services cover everything from new installations to upgrades and repairs. We ensure your home is safe, energy-efficient, and up to code, with a focus on quality workmanship and customer satisfaction.",
  "We offer 24/7 emergency support for all residential electrical issues, ensuring your peace of mind and safety at any hour.",
  "Our team specializes in smart home upgrades, helping you modernize your living space with the latest technology and energy-saving solutions."
];

const Introduction: React.FC = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % overviews.length);
  const prev = () => setIndex((i) => (i - 1 + overviews.length) % overviews.length);

  return (
    <section className={styles.introduction}>
      <h2 className={styles.heading}>Overview</h2>
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
