import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/ResidentialElectrical' },
  { name: 'Certifications', href: '/CertificationsTesting' },
  { name: 'Testimonials', href: '/TestimonialsCaseStudies' },
  { name: 'Projects', href: '/Projects' },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowBanner(window.scrollY < 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={showBanner ? `${styles.banner} ${styles.bannerVisible}` : styles.banner}
        aria-hidden={!showBanner}
      >
        <span className={styles.bannerText}>Now serving all of Leeds & West Yorkshire!</span>
      </div>
      <header className={showBanner ? styles.header : `${styles.header} ${styles.headerNoBanner}`}>
        <div className={styles.logo}>Temple Electrical</div>
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
    </>
  );
};

export default Header;
