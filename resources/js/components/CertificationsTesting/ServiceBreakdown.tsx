import React from 'react';
import styles from './ServiceBreakdown.module.css';

const services = [
  {
    icon: '🏢',
    title: 'EICR for Landlords',
    desc: 'Ensure your rental properties meet legal safety standards with our comprehensive EICR testing.',
    link: '#',
  },
  {
    icon: '🏠',
    title: 'EICR for Residents',
    desc: 'Protect your home and family with certified electrical inspections and reports.',
    link: '#',
  },
];

const ServiceBreakdown: React.FC = () => (
  <section className={styles.serviceBreakdown}>
    <h2 className={styles.heading}>Our EICR Services</h2>
    <div className={styles.grid}>
      {services.map(service => (
        <div key={service.title} className={styles.card}>
          <span className={styles.icon}>{service.icon}</span>
          <h3 className={styles.cardTitle}>{service.title}</h3>
          <p className={styles.cardDesc}>{service.desc}</p>
          <a href={service.link} className={styles.cardLink}>Learn More</a>
        </div>
      ))}
    </div>
  </section>
);

export default ServiceBreakdown;
