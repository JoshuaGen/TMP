import React from 'react';
import styles from './ImageCaptions.module.css';

const captions = [
  'Modern Home Rewire – Leeds, 2024',
  'Office Lighting Upgrade – City Centre, 2023',
  'Smart Home Install – Suburbs, 2024',
  'Retail Fit-Out – Shopping District, 2023',
];

const ImageCaptions: React.FC = () => (
  <section className={styles.imageCaptions}>
    <h2 className={styles.heading}>Project Captions</h2>
    <ul className={styles.captionList}>
      {captions.map((caption, idx) => (
        <li key={idx} className={styles.caption}>{caption}</li>
      ))}
    </ul>
  </section>
);

export default ImageCaptions;
