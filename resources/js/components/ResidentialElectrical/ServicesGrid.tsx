import React from 'react';
import styles from './ServicesGrid.module.css';

const services = [
  { title: 'Re-wiring', desc: 'Upgrade or replace your home wiring for safety and efficiency.', link: '#' },
  { title: 'Smart Homes', desc: 'Integrate smart technology for modern living.', link: '#' },
  { title: 'LED Lighting', desc: 'Energy-saving LED lighting solutions.', link: '#' },
  { title: 'Socket Installations', desc: 'Add or move sockets for convenience.', link: '#' },
  { title: 'Light Switches', desc: 'Modern, safe, and stylish switches.', link: '#' },
  { title: 'Lighting', desc: 'Indoor and outdoor lighting design and install.', link: '#' },
];

const ServicesGrid: React.FC = () => (
  <section className={styles.servicesGrid}>
    <h2 className={styles.heading}>Our Residential Services</h2>
    <div className={styles.grid}>
      {services.map(service => (
        <div key={service.title} className={styles.card}>
          <h3 className={styles.cardTitle}>{service.title}</h3>
          <p className={styles.cardDesc}>{service.desc}</p>
          <a href={service.link} className={styles.cardLink}>Learn More</a>
        </div>
      ))}
    </div>
  </section>
);

export default ServicesGrid;
