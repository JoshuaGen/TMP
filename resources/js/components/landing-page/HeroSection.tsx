import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { router } from '@inertiajs/react';
import styles from './HeroSection.module.css';

const backgroundImage = '/images/realimages/pexels-heyho-6238607 (1).webp';

const HeroSection: React.FC = () => {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', message: '' });
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    router.post('/quick-quote', form, {
      onSuccess: () => {
        setSuccess(true);
        setForm({ firstName: '', lastName: '', email: '', message: '' });
        setTimeout(() => setSuccess(false), 5000);
      },
      onFinish: () => setProcessing(false),
    });
  };

  return (
    <motion.section
      className={styles.heroSection}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className={styles.backgroundCarousel}>
        <img
          src={backgroundImage}
          className={styles.backgroundImage + ' ' + styles.active}
          alt="Background"
          aria-hidden="true"
        />
      </div>
      <div className={styles.heroCard + ' ' + styles.mainHeroCard}>
        <h1 className={styles.heroTitle}>Get Your Free Quote</h1>
        <p className={styles.heroSubtitle}>Fill out the form below to receive a free quote tailored to your needs.</p>
        
        {success && (
          <div style={{ padding: '10px', backgroundColor: '#d4edda', color: '#155724', borderRadius: '4px', marginBottom: '12px', fontSize: '14px' }}>
            Thank you! We'll send you a quote within 24 hours.
          </div>
        )}

        <form className={styles.form} autoComplete="off" onSubmit={handleSubmit}>
          <div className={styles.row}>
            <input className={styles.input} type="text" name="firstName" placeholder="First name" value={form.firstName} onChange={handleChange} required />
            <input className={styles.input} type="text" name="lastName" placeholder="Last name" value={form.lastName} onChange={handleChange} required />
          </div>
          <input className={styles.input} type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          <textarea className={styles.textarea} name="message" placeholder="How can we help?" rows={3} value={form.message} onChange={handleChange} />
          <button className={styles.submitBtn} type="submit" disabled={processing}>
            {processing ? 'Sending...' : 'Submit'}
          </button>
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
