import React from 'react';
import styles from './ClientFeedbackStrip.module.css';

const feedback = [
  { name: 'Jane D.', text: 'The team delivered on time and exceeded expectations.' },
  { name: 'Mark S.', text: 'Professional, reliable, and great communication.' },
  { name: 'Lisa W.', text: 'Our project was a huge success thanks to Temple Electrical.' },
];

const ClientFeedbackStrip: React.FC = () => (
  <section className={styles.feedbackStrip}>
    <div className={styles.grid}>
      {feedback.map(fb => (
        <div key={fb.name} className={styles.card}>
          <p className={styles.text}>&ldquo;{fb.text}&rdquo;</p>
          <span className={styles.name}>- {fb.name}</span>
        </div>
      ))}
    </div>
  </section>
);

export default ClientFeedbackStrip;
