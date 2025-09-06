import React, { useState } from 'react';
import styles from './Header.module.css';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Residential Electrical', href: '/ResidentialElectrical' },
  { name: 'Certifications & Testing', href: '/CertificationsTesting' },
  { name: 'Testimonials & Case Studies', href: '/TestimonialsCaseStudies' },
  { name: 'Projects', href: '/Projects' },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Logo</div>
      <nav className={styles.nav}>
        {navLinks.map(link => (
          <a key={link.name} href={link.href} className={styles.navLink}>
            {link.name}
          </a>
        ))}
        <a href="/FreeQuote" className={styles.ctaButton}>Get a Free Quote</a>
      </nav>
      <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
        &#9776;
      </button>
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className={styles.navLink} onClick={() => setMenuOpen(false)}>
              {link.name}
            </a>
          ))}
          <a href="/FreeQuote" className={styles.ctaButton} onClick={() => setMenuOpen(false)}>
            Get a Free Quote
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
