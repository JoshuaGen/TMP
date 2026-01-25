import React, { useState } from 'react';
import { motion, easeOut } from 'framer-motion';
import { router } from '@inertiajs/react';
import styles from './GetQuoteSection.module.css';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.22, duration: 0.35, ease: easeOut },
  }),
};

const GetQuoteSection: React.FC = () => {
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
      className={styles.getQuoteSection}
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className={styles.card}>
        <h2 className={styles.title}>Get Your Free Quote</h2>
        <p className={styles.subtitle}>Fill out the form below to receive a free quote tailored to your needs.</p>
        
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
      <div className={styles.bentoGrid}>
        {[
          { label: 'Fast Response', className: styles.fastResponseCard },
          { label: 'Transparent Pricing', className: styles.transparentPricingCard },
          { label: 'Certified Electricians', className: styles.certifiedElectriciansCard },
          { label: 'Satisfaction Guarantee', className: styles.satisfactionGuaranteeCard },
          { label: '24/7 Support', className: styles.twentyFourSevenCard },
          { label: 'Fully Insured', className: styles.fullyInsuredCard },
        ].map((item, i) => (
          <motion.div
            className={`${styles.bentoCard} ${item.className}`}
            key={item.label}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={cardVariants}
          >
            <span style={{ position: 'relative', zIndex: 2 }}>
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default GetQuoteSection;
