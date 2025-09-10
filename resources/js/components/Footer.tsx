import React from 'react';
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
  <footer className={styles.footer}>
    <div className={styles.footerCol}>
  <div className={styles.footerLogo}>Temple Electrical</div>
      <div className={styles.footerDesc}>
        Temple Electrical – Professional, responsive, and local electrical services in Leeds & West Yorkshire.
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
      <div className={styles.footerContact}>0113 123 4567</div>
      <div className={styles.footerContact}>info@templeelectrical.co.uk</div>
      <div className={styles.footerContact}>Leeds, West Yorkshire</div>
      <a href="/FreeQuote" className={styles.footerCta}>Free Quote</a>
      <div className={styles.socialIcons}>
        {/* Example social icons (replace with SVGs or icon components as needed) */}
        <span className={styles.socialIcon}>F</span>
        <span className={styles.socialIcon}>T</span>
        <span className={styles.socialIcon}>I</span>
      </div>
    </div>
  </footer>
);

export default Footer;
