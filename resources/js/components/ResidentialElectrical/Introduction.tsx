import React, { useState } from 'react';
import styles from './Introduction.module.css';

const overviews = [
  "As a trusted electrician in Leeds, we provide safe, tidy and compliant residential electrical services across West Yorkshire — from fault finding and repairs to full rewires, consumer unit upgrades, EV charger installation and modern LED lighting.",
  "Every home project is completed to BS 7671 standards by fully certified and insured electricians. We keep you informed at every step and deliver a neat finish, whether it’s a small fix or a full home renovation.",
  "Need advice or a price for your job? Get a free quote today for electrical services in Leeds — fast response, transparent pricing and friendly, professional support."
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
