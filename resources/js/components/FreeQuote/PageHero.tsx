import React from 'react';
import styles from './PageHero.module.css';

const PageHero: React.FC = () => (
  <section className={styles.pageHero}>
    <h1 className={styles.title}>Get Your Free, No-Obligation Quote</h1>
    <p className={styles.subtext}>Fill out the form below and our team will get back to you within 24 hours.</p>
    <a href="#quote-form" className={styles.ctaButton}>Request Quote</a>
  </section>
);

export default PageHero;
