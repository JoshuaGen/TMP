import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram } from 'lucide-react';
import styles from './Footer.module.css';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Residential Electrical', href: '/ResidentialElectrical' },
  { name: 'Certifications & Testing', href: '/CertificationsTesting' },
  { name: 'Testimonials & Case Studies', href: '/TestimonialsCaseStudies' },
  { name: 'Projects', href: '/Projects' },
  { name: 'Free Quote', href: '/FreeQuote' },
];

const Footer: React.FC = () => (
  <motion.footer
    className={styles.footer}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
  >
    <div className={styles.footerCol}>
      <div className={styles.footerLogo}>
        <img
          src="/images/logo/475998601_122102365544757641_4418396888111844212_n-removebg-preview__1___1_-removebg-preview.webp"
          alt="Temple Electrical Logo"
          style={{ height: '38px', width: 'auto', display: 'block', filter: 'brightness(0) invert(1)' }}
        />
      </div>
      <div className={styles.footerDesc}>
        Temple Electrical – Professional, responsive, and local electrical services in Leeds & West Yorkshire.
      </div>
      <div style={{ marginTop: '1.2rem', display: 'flex', gap: '1rem' }}>
        <a href="/PrivacyPolicy" className={styles.footerLink}>Privacy Policy</a>
        <a href="/CookiePolicy" className={styles.footerLink}>Cookie Policy</a>
      </div>
    </div>
    <div className={styles.footerCol}>
      <div className={styles.footerHeading}>Quick Links</div>
      {navLinks.map(link => (
        <a key={link.name} href={link.href} className={styles.footerLink}>
          {link.name}
        </a>
      ))}
    </div>
    <div className={styles.footerCol}>
  <div className={styles.footerHeading}>Contact</div>
  <div className={styles.footerContact}><a href="tel:+447526688808" className={styles.footerLink}>+44 7526 688808</a></div>
  <div className={styles.footerContact}><a href="mailto:templeelectricalleeds@gmail.com" className={styles.footerLink}>templeelectricalleeds@gmail.com</a></div>
      <div className={styles.footerContact}>Leeds, West Yorkshire</div>
      <a href="/FreeQuote" className={styles.footerCta}>Free Quote</a>
      <div className={styles.socialIcons}>
        <a
          href="https://www.facebook.com/p/Temple-Electrical-61572729247115/"
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
        >
          <Facebook className={styles.socialIcon} size={20} strokeWidth={2.2} />
        </a>
        <a
          href="https://www.instagram.com/temple_electrical"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <Instagram className={styles.socialIcon} size={20} strokeWidth={2.2} />
        </a>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
