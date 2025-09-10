import { motion, easeOut } from 'framer-motion';

import styles from './GetQuoteSection.module.css';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.22, duration: 0.35, ease: easeOut },
  }),
};

const GetQuoteSection: React.FC = () => (
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

export default GetQuoteSection;
