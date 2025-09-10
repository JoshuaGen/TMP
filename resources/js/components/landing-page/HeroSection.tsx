import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './HeroSection.module.css';


const carouselImages = [
  '/images/pexels-pok-rie-33563-171428.jpg',
  '/images/pexels-timmossholder-942316.jpg',
  // Add more images here if desired
];

const HeroSection: React.FC = () => {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section
      className={styles.heroSection}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className={styles.backgroundCarousel}>
        {carouselImages.map((src, idx) => (
          <img
            key={src}
            src={src}
            className={
              styles.backgroundImage + ' ' + (active === idx ? styles.active : '')
            }
            alt="Background"
            aria-hidden="true"
          />
        ))}
      </div>
      <div className={styles.heroCard + ' ' + styles.mainHeroCard}>
        <h1 className={styles.heroTitle}>Get Your Free Quote</h1>
        <p className={styles.heroSubtitle}>Fill out the form below to receive a free quote tailored to your needs.</p>
        <form className={styles.form} autoComplete="off">
          <div className={styles.row}>
            <input className={styles.input} type="text" placeholder="First name" />
            <input className={styles.input} type="text" placeholder="Last name" />
          </div>
          <input className={styles.input} type="email" placeholder="Email" />
          <textarea className={styles.textarea} placeholder="Placeholder" rows={3} />
          <button className={styles.submitBtn} type="submit">Submit</button>
        </form>
      </div>
      <div className={styles.lowerRightCards}>
        <div className={styles.cardColumn}>
          <div className={styles.heroCard + ' ' + styles.sideCard + ' ' + styles.narrowCard}>
            <h2 className={styles.heroTitle}>Certified & Insured</h2>
            <p className={styles.heroSubtitle}>All work is carried out by fully certified electricians and is covered by comprehensive insurance for your peace of mind.</p>
          </div>
          <div className={styles.heroCard + ' ' + styles.sideCard + ' ' + styles.narrowCard}>
            <h2 className={styles.heroTitle}>Fast, Friendly Service</h2>
            <p className={styles.heroSubtitle}>We pride ourselves on quick response times and a friendly, professional approach to every project—big or small.</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
