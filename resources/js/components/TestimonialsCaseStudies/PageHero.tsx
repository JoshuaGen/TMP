import React from 'react';
import styles from './PageHero.module.css';

const PageHero: React.FC = () => (
  <section className={styles.pageHero}>
    <div className={styles.heroContent}>
      <h1 className={styles.title}>Our Clients Say It Best</h1>
      <p className={styles.subtitle}>See how we deliver results and satisfaction for every project.</p>
    </div>

  </section>
);

export default PageHero;
