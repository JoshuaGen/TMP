import { motion, easeOut } from 'framer-motion';
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

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.22, duration: 0.35, ease: easeOut },
  }),
};

const Testimonials: React.FC = () => (
  <motion.section
    className={styles.testimonialsSection}
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
  >
    <h2 className={styles.testimonialsTitle}>What Our Clients Say</h2>
    <div className={styles.testimonialsGrid}>
      {testimonials.map((t, i) => (
        <motion.div
          className={styles.testimonialCard}
          key={t.name}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={cardVariants}
        >
          <div className={styles.testimonialHeader}>
            <img
              src={t.avatar}
              alt={t.name}
              className={styles.avatar}
              onError={e => {
                (e.currentTarget as HTMLImageElement).src = '/images/avatar-account-flat-isolated-on-transparent-background-for-graphic-and-web-design-default-social-media-profile-photo-symbol-profile-and-people-silhouette-user-icon-vector.jpg';
              }}
            />
            <div className={styles.metaText}>
              <span className={styles.testimonialName}>{t.name}</span>
              <span className={styles.testimonialRole}>{t.role}</span>
            </div>
          </div>
          <div className={styles.testimonialDivider} />
          <p className={styles.testimonialText}>{t.text}</p>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default Testimonials;
