import styles from './USPSection.module.css';

const features = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="14" width="28" height="20" rx="4" fill="#f5f6fa" stroke="#bdbdbd" strokeWidth="2"/>
        <path d="M18 24L22 28L30 20" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Professional',
    desc: 'Sed ut perspiciatis unde omnis iste natus voluptatem.',
    dot: 'purple',
    highlight: true,
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="14" width="28" height="20" rx="4" fill="#f5f6fa" stroke="#bdbdbd" strokeWidth="2"/>
        <g><rect x="18" y="20" width="12" height="8" rx="2" fill="#bdbdbd"/></g>
        <g><rect x="22" y="24" width="4" height="4" rx="1" fill="#7c3aed"/></g>
      </svg>
    ),
    title: 'Sounds',
    desc: 'Ut enim ad minima veniam quis nostrum exercitationem ullam.',
    dot: 'blue',
    highlight: true,
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="14" fill="#fff7f0" stroke="#fbbf24" strokeWidth="2"/>
        <path d="M24 16V24L29 27" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="24" cy="34" r="2" fill="#fbbf24"/>
      </svg>
    ),
    title: 'Wireless',
    desc: 'Laboris nisi ut aliquip ex ea commodo consequat.',
    dot: 'orange',
    highlight: true,
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="12" y="16" width="24" height="16" rx="3" fill="#f5f6fa" stroke="#bdbdbd" strokeWidth="2"/>
        <rect x="20" y="32" width="8" height="2" rx="1" fill="#bdbdbd"/>
        <rect x="18" y="20" width="12" height="6" rx="2" fill="#7c3aed"/>
      </svg>
    ),
    title: 'Manage',
    desc: 'Duis aute irure dolor in reprehenderit in voluptate velit.',
    dot: 'red',
    highlight: true,
  },
];

const USPSection: React.FC = () => (
  <section className={styles.uspSection}>
    <div className={styles.uspGrid}>
      {features.map((f, i) => (
        <div
          className={`${styles.uspCard} ${styles.uspCardHighlight}`}
          key={f.title}
        >
          <div className={styles.uspIcon}>{f.icon}</div>
          <div className={styles.uspTitle}>{f.title}</div>
          <div className={styles.uspDesc}>{f.desc}</div>
          <span
            className={
              f.dot === 'purple' ? styles.dotPurple :
              f.dot === 'blue' ? styles.dotBlue :
              f.dot === 'orange' ? styles.dotOrange :
              styles.dotRed
            }
          />
        </div>
      ))}
    </div>
  </section>
);

export default USPSection;
