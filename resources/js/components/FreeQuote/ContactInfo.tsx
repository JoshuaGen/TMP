import React from 'react';
import styles from './ContactInfo.module.css';

const ContactInfo: React.FC = () => (
  <section className={styles.contactInfo}>
    <h2 className={styles.heading}>Contact Us Directly</h2>
    <ul className={styles.infoList}>
      <li><a href="tel:01131234567" className={styles.link}>Phone: 0113 123 4567</a></li>
      <li><a href="mailto:info@templeelectrical.co.uk" className={styles.link}>Email: info@templeelectrical.co.uk</a></li>
      <li className={styles.location}>Leeds, West Yorkshire</li>
    </ul>
  </section>
);

export default ContactInfo;
