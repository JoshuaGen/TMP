import React from 'react';
import styles from './CaseStudies.module.css';

const caseStudies = [
  {
    title: 'Smart Home Upgrade',
    challenge: 'Outdated wiring and lack of smart features.',
    solution: 'Full rewire and installation of smart lighting and controls.',
    outcome: 'Modern, energy-efficient home with remote control features.',
    image: '', // Add image path or leave blank for placeholder
  },
  {
    title: 'LED Lighting Transformation',
    challenge: 'High energy bills and poor lighting.',
    solution: 'Replaced all lighting with LED fixtures.',
    outcome: 'Lower bills and brighter, more comfortable spaces.',
    image: '',
  },
];

const CaseStudies: React.FC = () => (
  <section className={styles.caseStudies}>
    <h2 className={styles.heading}>Case Studies</h2>
    <div className={styles.grid}>
      {caseStudies.map(cs => (
        <div key={cs.title} className={styles.card}>
          <div className={styles.image} aria-hidden="true">
            {/* Replace with actual image */}
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none"><rect width="80" height="80" rx="16" fill="#eaf6ff"/><path d="M40 20L30 45H42L32 60" stroke="#007BFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <h3 className={styles.title}>{cs.title}</h3>
          <div className={styles.flow}>
            <div><strong>Challenge:</strong> {cs.challenge}</div>
            <div><strong>Solution:</strong> {cs.solution}</div>
            <div><strong>Outcome:</strong> {cs.outcome}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default CaseStudies;
