import React, { useState } from 'react';
import styles from './TestimonialsCarousel.module.css';
import { googleReviews } from '../../data/googleReviews';

const TestimonialsCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);
  const n = googleReviews.length;
  const next = () => setIndex((i) => (i + 1) % n);
  const prev = () => setIndex((i) => (i - 1 + n) % n);

  const review = googleReviews[index];

  return (
    <section className={styles.carouselSection}>
      <h2 className={styles.heading}>Testimonials</h2>
      <div className={styles.carouselWrapper}>
        <button className={styles.carouselBtn} onClick={prev} aria-label="Previous testimonial">&#8592;</button>
        <div className={styles.testimonialCard}>
          <p className={styles.testimonialText}>&ldquo;{review.text}&rdquo;</p>
          <span className={styles.testimonialName}>- {review.name}</span>
        </div>
        <button className={styles.carouselBtn} onClick={next} aria-label="Next testimonial">&#8594;</button>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
