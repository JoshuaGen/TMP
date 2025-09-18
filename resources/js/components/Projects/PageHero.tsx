import React from 'react';
import styles from './PageHero.module.css';

const PageHero: React.FC = () => (
  <section className={styles.pageHero}>
    <h1 className={styles.title}>Our Projects</h1>
    <p className={styles.tagline}>See Our Work in Action</p>
    <p style={{ maxWidth: 820, margin: '0.75rem auto 0', color: '#fff', lineHeight: 1.7 }}>
      Explore recent electrical projects in Leeds and across West Yorkshire — from smart home installations and consumer unit upgrades to commercial LED lighting. If you’re looking for a dependable electrician in Leeds, our portfolio shows the quality, safety and neat finish you can expect.
    </p>
  </section>
);

export default PageHero;
