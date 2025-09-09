import styles from './HeroSection.module.css';


const HeroSection: React.FC = () => (
  <section className={styles.heroSection}>
    <img
      className={styles.backgroundImage}
      src={"/images/pexels-timmossholder-942316.jpg"}
      alt="Background"
      aria-hidden="true"
    />
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

    {/* Lower right cards: only Card 2 and Card 3 stacked vertically */}
    <div className={styles.lowerRightCards}>
      <div className={styles.cardColumn}>
        <div className={styles.heroCard + ' ' + styles.sideCard + ' ' + styles.narrowCard}>
          <h2 className={styles.heroTitle}>Card Title 2</h2>
          <p className={styles.heroSubtitle}>Description or content for card 2.</p>
        </div>
        <div className={styles.heroCard + ' ' + styles.sideCard + ' ' + styles.narrowCard}>
          <h2 className={styles.heroTitle}>Card Title 3</h2>
          <p className={styles.heroSubtitle}>Description or content for card 3.</p>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
