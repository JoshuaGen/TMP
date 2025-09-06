import React, { useState } from 'react';
import styles from './TestimonialsCarousel.module.css';

const testimonials = [
  { name: 'Jane D.', text: 'Temple Electrical exceeded my expectations. Highly recommended!' },
  { name: 'Mark S.', text: 'Professional, prompt, and reliable service every time.' },
  { name: 'Lisa W.', text: 'Great experience from start to finish.' },
];

const TestimonialsCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className={styles.carouselSection}>
      <h2 className={styles.heading}>Testimonials</h2>
      <div className={styles.carouselWrapper}>
        <button className={styles.carouselBtn} onClick={prev} aria-label="Previous testimonial">&#8592;</button>
        <div className={styles.testimonialCard}>
          <p className={styles.testimonialText}>&ldquo;{testimonials[index].text}&rdquo;</p>
          <span className={styles.testimonialName}>- {testimonials[index].name}</span>
        </div>
        <button className={styles.carouselBtn} onClick={next} aria-label="Next testimonial">&#8594;</button>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
