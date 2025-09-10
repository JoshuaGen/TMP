import { motion, easeOut } from 'framer-motion';
import styles from './ServiceOverview.module.css';

const services = [
  {
    title: 'Residential Electrical',
    desc: 'Expert electrical installations and repairs for homes.',
    img: '/images/pexels-kseniachernaya-5767926.jpg',
    link: '#',
  },
  {
    title: 'Certifications & Testing',
    desc: 'Professional certifications and testing services.',
    img: '/images/pexels-thembaforfun-33755219.jpg',
    link: '#',
  },
  {
    title: 'Commercial Services',
    desc: 'Reliable electrical solutions for businesses.',
    img: '/images/pexels-cottonbro-5090652.jpg',
    link: '#',
  },
];

const cardVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.22, duration: 0.35, ease: easeOut },
  }),
};

const ServiceOverview: React.FC = () => (
  <motion.section
    className={styles.serviceOverview}
    initial={{ opacity: 0, x: -60 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
  >
    <h2 className={styles.heading}>Our Services</h2>
    <div className={styles.serviceGrid}>
      {services.map((service, i) => (
        <motion.div
          className={styles.serviceItem}
          key={service.title}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={cardVariants}
        >
          <div className={styles.cardImageWrap}>
            <img
              src={service.img}
              alt={service.title}
              className={styles.cardImage}
              loading="lazy"
            />
          </div>
          <h3 className={styles.serviceTitle}>{service.title}</h3>
          <p className={styles.serviceDesc}>{service.desc}</p>
          <a className={styles.serviceButton} href={service.link}>Learn More</a>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default ServiceOverview;
