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
      {caseStudies.map(cs => {
        const isSmartHome = cs.title === 'Smart Home Upgrade';
        const isLedLighting = cs.title === 'LED Lighting Transformation';
        let cardClass = styles.card;
        if (isSmartHome) cardClass += ` ${styles.smartHomeCard}`;
        if (isLedLighting) cardClass += ` ${styles.ledLightingCard}`;
        return (
          <div key={cs.title} className={cardClass}>
            {/* Removed icon for cleaner card background */}
            <h3 className={styles.title}>{cs.title}</h3>
            <div className={styles.flow}>
              <div><strong>Challenge:</strong> {cs.challenge}</div>
              <div><strong>Solution:</strong> {cs.solution}</div>
              <div><strong>Outcome:</strong> {cs.outcome}</div>
            </div>
          </div>
        );
      })}
    </div>
  </section>
);

export default CaseStudies;
