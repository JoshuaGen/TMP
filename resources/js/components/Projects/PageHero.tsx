import React from 'react';
import styles from './PageHero.module.css';

const PageHero: React.FC = () => (
  <section className={styles.pageHero}>
    <h1 className={styles.title}>Our Projects</h1>
    <p className={styles.tagline}>See Our Work in Action</p>
  </section>
);

export default PageHero;
