import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: 'Elara Voss',
    role: 'Estate Agent',
    text: 'Outstanding service and professionalism!',
    avatar: '/images/testimonial-elara.jpg',
  },
  {
    name: 'Liam Hargrove',
    role: 'Builder',
    text: 'Quick and efficient work.',
    avatar: '/images/testimonial-liam.jpg',
  },
  {
    name: 'Aurelia Kline',
    role: 'Homeowner',
    text: 'Highly recommended for residential needs.',
    avatar: '/images/testimonial-aurelia.jpg',
  },
  {
    name: 'Cyrus Thorne',
    role: 'Contractor',
    text: 'Professional and trustworthy.',
    avatar: '/images/testimonial-cyrus.jpg',
  },
  {
    name: 'Maya Chen',
    role: 'Interior Designer',
    text: 'Their attention to detail is unmatched. Will hire again!',
    avatar: '/images/testimonial-maya.jpg',
  },
];

const Testimonials: React.FC = () => (
  <section className={styles.testimonialsSection}>
    <h2 className={styles.testimonialsTitle}>What Our Clients Say</h2>
    <div className={styles.testimonialsGrid}>
      {testimonials.map((t) => (
        <div className={styles.testimonialCard} key={t.name}>
          <div className={styles.testimonialHeader}>
            <img src={t.avatar} alt={t.name} className={styles.avatar} />
            <div className={styles.metaText}>
              <span className={styles.testimonialName}>{t.name}</span>
              <span className={styles.testimonialRole}>{t.role}</span>
            </div>
          </div>
          <div className={styles.testimonialDivider} />
          <p className={styles.testimonialText}>{t.text}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
