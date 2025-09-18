import React from 'react';
import styles from './PageHero.module.css';

const PageHero: React.FC = () => (
  <section className={styles.pageHero}>
    <h1 className={styles.title}>Get Your Free, No-Obligation Quote</h1>
    <p className={styles.subtext}>Fill out the form below and our team will get back to you within 24 hours.</p>
    <p style={{ maxWidth: 820, margin: '0.75rem auto 0', color: '#fff', lineHeight: 1.7 }}>
      Need an electrician in Leeds? Tell us about your project — rewires, LED lighting, EV chargers, fault finding, or electrical testing in Leeds — and we’ll respond quickly with clear pricing and professional advice.
    </p>
    <a href="#quote-form" className={styles.ctaButton}>Request Quote</a>
  </section>
);

export default PageHero;
