import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import styles from './HomeSEO.module.css';

const HomeSEO: React.FC = () => (
  <section className={styles.section}>
    <div className={styles.grid}>
      <div>
        <h2 className={styles.title}>
          Electrician in Leeds You Can Trust
        </h2>
        <p className={styles.text}>
          Temple Electrical is your local electrician in Leeds, serving homeowners, landlords, estate agents and builders across West Yorkshire. From emergency repairs and fault finding to full rewires, consumer unit upgrades, EV charger installation and LED lighting, we deliver reliable electrical services in Leeds with transparent pricing and fast response times.
        </p>
        <p className={styles.text}>
          We’re fully certified and insured, and our work meets current British Standards (BS 7671). Whether you need electrical testing in Leeds (EICR for landlords and homeowners), PAT testing for rentals, or planned upgrades, our qualified team ensures safety, compliance and a neat finish on every job.
        </p>
        <p className={styles.text}>
          Ready to get started? Request your free quote today or call us to book an electrician in Leeds. We’re here to help with friendly advice and professional service.
        </p>
      </div>
      <aside>
        <div className={styles.asideCard}>
          <h3 className={styles.asideHeading}>Why Choose Temple Electrical</h3>
          <ul className={styles.featureList}>
            <li className={styles.featureItem}>
              <span className={styles.iconSquare} aria-hidden>
                <Check className={styles.iconGlyph} size={16} />
              </span>
              Fully insured and certified
            </li>
            <li className={styles.featureItem}>
              <span className={styles.iconSquare} aria-hidden>
                <Check className={styles.iconGlyph} size={16} />
              </span>
              Transparent pricing
            </li>
            <li className={styles.featureItem}>
              <span className={styles.iconSquare} aria-hidden>
                <Check className={styles.iconGlyph} size={16} />
              </span>
              Fast response times
            </li>
            <li className={styles.featureItem}>
              <span className={styles.iconSquare} aria-hidden>
                <Check className={styles.iconGlyph} size={16} />
              </span>
              Neat, professional workmanship
            </li>
          </ul>
          <a href="#free-quote" className={styles.ctaBtn} aria-label="Request a free quote">
            Request a Free Quote
            <ArrowRight size={16} className="arrow" />
          </a>
        </div>
      </aside>
    </div>
  </section>
);

export default HomeSEO;