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

const ServiceOverview: React.FC = () => (
  <section className={styles.serviceOverview}>
    <h2 className={styles.heading}>Our Services</h2>
    <div className={styles.serviceGrid}>
      {services.map((service) => (
        <div className={styles.serviceItem} key={service.title}>
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
        </div>
      ))}
    </div>
  </section>
);

export default ServiceOverview;
