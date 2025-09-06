
import styles from './USPSection.module.css';


const USPSection: React.FC = () => (
  <section className={styles.uspSection}>
    <div className={styles.uspHeader}>
      <div>
        <h2 className={styles.uspHeading}>Make your<br />spend, Well-spent</h2>
      </div>
      <div className={styles.uspSubheading}>
        Manages a diversified group of specialized private credit brands with efficient tech-enabled processes.
      </div>
    </div>
    <div className={styles.uspGrid}>
      <div className={styles.uspCard}>
        <span className={styles.uspIcon} aria-hidden="true">
          {/* Minimal line icon for Transparency */}
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#181d1b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="16" cy="16" r="10"/><circle cx="16" cy="16" r="5"/></svg>
        </span>
        <div>
          <h3 className={styles.uspTitle}>Transparency</h3>
          <p className={styles.uspDesc}>A departure from the industry norm of ambiguity. Monitor, as a public and finest company.</p>
        </div>
        <button className={styles.uspArrowBtn} aria-label="Learn more about Transparency">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#181d1b" strokeWidth="2"><circle cx="9" cy="9" r="8"/><path d="M7 9h4M10 7l2 2-2 2"/></svg>
        </button>
      </div>
      <div className={styles.uspCard}>
        <span className={styles.uspIcon} aria-hidden="true">
          {/* Minimal line icon for Creative Expansion */}
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#181d1b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="16" cy="16" rx="10" ry="6"/><ellipse cx="16" cy="16" rx="5" ry="3"/></svg>
        </span>
        <div>
          <h3 className={styles.uspTitle}>Creative expansion</h3>
          <p className={styles.uspDesc}>Ascone proprietary fintech platform helps our subsidiaries locate and manage investments.</p>
        </div>
        <button className={styles.uspArrowBtn} aria-label="Learn more about Creative Expansion">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#181d1b" strokeWidth="2"><circle cx="9" cy="9" r="8"/><path d="M7 9h4M10 7l2 2-2 2"/></svg>
        </button>
      </div>
      <div className={styles.uspCard}>
        <span className={styles.uspIcon} aria-hidden="true">
          {/* Minimal line icon for Private Credit Investments */}
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#181d1b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 6c5.5 0 10 4.5 10 10"/><path d="M16 11c3 0 5 2 5 5"/><circle cx="16" cy="21" r="2"/></svg>
        </span>
        <div>
          <h3 className={styles.uspTitle}>Private Credit Investments</h3>
          <p className={styles.uspDesc}>We provide access to unique private credit investments; a rare but valuable part of a sound investment portfolio.</p>
        </div>
        <button className={styles.uspArrowBtn} aria-label="Learn more about Private Credit Investments">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#181d1b" strokeWidth="2"><circle cx="9" cy="9" r="8"/><path d="M7 9h4M10 7l2 2-2 2"/></svg>
        </button>
      </div>
    </div>
  </section>
);

export default USPSection;
