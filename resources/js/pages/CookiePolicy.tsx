import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './legal.module.css';
import { legalConfig } from './legal.config';

const CookiePolicy: React.FC = () => {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.container}>
          <div className={styles.kicker}>Legal</div>
          <h1 className={styles.title}>Cookie Policy</h1>
          <p className={styles.intro}>
            Cookies help us provide and improve our services. This page explains the cookies we use and how you can control them.
          </p>

          <section className={styles.section}>
            <h2>What are cookies?</h2>
            <p>
              Cookies are small text files placed on your device when you visit a website. They are widely used to make
              websites work, or work more efficiently, as well as to provide information to the site owners.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Types of cookies we use</h2>
            <p>
              - Essential cookies: required for basic site functionality (e.g., security, load balancing).<br />
              - Performance cookies: help us understand how visitors use the site (aggregated and anonymous).<br />
              - Preference cookies: remember your settings such as cookie choices.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Analytics providers</h2>
            <p>
              We may use the following analytics providers to help us understand site usage:
            </p>
            <ul>
              {legalConfig.analyticsProviders.map((provider) => (
                <li key={provider.name}>
                  <a href={provider.url} target="_blank" rel="noopener noreferrer">{provider.name}</a>
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Managing cookies</h2>
            <p>
              You can control cookies through your browser settings. Disabling some cookies may impact site functionality.
            </p>
          </section>

          <p className={styles.muted}>Updated: {legalConfig.lastUpdated}</p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CookiePolicy;
