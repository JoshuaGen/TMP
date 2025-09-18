import React from 'react';
import styles from './ContactInfo.module.css';

const ContactInfo: React.FC = () => (
  <section className={styles.contactInfo} aria-label="Map">
    <iframe
      className={styles.mapFrame}
      title="Temple Electrical Location - Leeds, West Yorkshire"
      src="https://www.google.com/maps?q=Leeds%2C%20West%20Yorkshire&output=embed"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  </section>
);

export default ContactInfo;
