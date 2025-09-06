
import styles from './Testimonials.module.css';
import React, { useState } from 'react';

const testimonials = [
  {
    name: 'Jane D.',
    service: 'Residential Electrical',
    text: 'Fantastic service! Quick response and very professional.'
  },
  {
    name: 'Mark S.',
    service: 'Certifications & Testing',
    text: 'Highly recommend. The team was knowledgeable and efficient.'
  },
  {
    name: 'Lisa W.',
    service: 'Residential Electrical',
    text: 'Great experience from start to finish.'
  }
];

const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className={styles.testimonialsSection}>
      <h2 className={styles.testimonialsTitle}>What Our Clients Say</h2>
      <div className={styles.carouselWrapper}>
        <button className={styles.carouselBtn} onClick={prev} aria-label="Previous testimonial">&#8592;</button>
        <div className={styles.testimonialCard}>
          <p className={styles.testimonialText}>&ldquo;{testimonials[index].text}&rdquo;</p>
          <div className={styles.testimonialMeta}>
            <span className={styles.testimonialName}>{testimonials[index].name}</span>
            <span className={styles.testimonialService}>{testimonials[index].service}</span>
          </div>
        </div>
        <button className={styles.carouselBtn} onClick={next} aria-label="Next testimonial">&#8594;</button>
      </div>
    </section>
  );
};

export default Testimonials;
