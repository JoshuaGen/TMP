import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './legal.module.css';
import { legalConfig } from './legal.config';

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.container}>
          <div className={styles.kicker}>Legal</div>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.intro}>
            We respect your privacy. This policy explains what personal information we collect, how we use it, and your
            rights. If you have any questions, contact us at
            {' '}<a href="mailto:templeelectricalleeds@gmail.com">templeelectricalleeds@gmail.com</a>.
          </p>

          <section className={styles.section}>
            <h2>Information we collect</h2>
            <p>
              We collect information you provide via forms (e.g., name, email, phone, project details) and basic usage data
              to improve our website performance and security.
            </p>
          </section>

          <section className={styles.section}>
            <h2>How we use your data</h2>
            <p>
              We use your information to respond to enquiries, provide quotes and services, improve our site, and comply with
              legal obligations. We do not sell your data.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Sharing</h2>
            <p>
              We may share data with trusted service providers (for example, email or analytics providers) under agreements
              that protect your information, or where required by law.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Your rights</h2>
            <p>
              You can request access, correction, deletion, or restriction of your personal data. Contact us to exercise your rights.
            </p>
          </section>

          <p className={styles.muted}>Updated: {legalConfig.lastUpdated}</p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
