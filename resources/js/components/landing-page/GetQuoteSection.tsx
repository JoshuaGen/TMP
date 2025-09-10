import styles from './GetQuoteSection.module.css';

const GetQuoteSection: React.FC = () => (
  <section className={styles.getQuoteSection}>
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
      <div
        className={styles.bentoCard + ' ' + styles.fastResponseCard}
      >
        Fast Response
      </div>
      <div
        className={styles.bentoCard + ' ' + styles.transparentPricingCard}
      >
        Transparent Pricing
      </div>
      <div
        className={styles.bentoCard + ' ' + styles.certifiedElectriciansCard}
      >
        Certified Electricians
      </div>
      <div
        className={styles.bentoCard + ' ' + styles.satisfactionGuaranteeCard}
      >
        Satisfaction Guarantee
      </div>
      <div
        className={styles.bentoCard + ' ' + styles.twentyFourSevenCard}
      >
        24/7 Support
      </div>
      <div
        className={styles.bentoCard + ' ' + styles.fullyInsuredCard}
      >
        Fully Insured
      </div>
    </div>
  </section>
);

export default GetQuoteSection;
