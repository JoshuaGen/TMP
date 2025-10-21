import React, { useState, useEffect } from 'react';
import styles from './CookieConsentBanner.module.css';

const COOKIE_KEY = 'cookie_consent';

const CookieConsentBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show if not already accepted
    if (!localStorage.getItem(COOKIE_KEY)) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, 'accepted');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.banner} role="dialog" aria-live="polite">
      <div className={styles.text}>
        We use cookies to improve your experience and analyze site usage. By continuing, you accept our <a href="/CookiePolicy" target="_blank" rel="noopener noreferrer">Cookie Policy</a>.
      </div>
      <button className={styles.button} onClick={accept} autoFocus>
        Accept
      </button>
    </div>
  );
};

export default CookieConsentBanner;
