import React from 'react';
import styles from './ProjectGallery.module.css';

const ProjectGallery: React.FC = () => {
  return (
    <section className={styles.gallerySection}>
      <div className={styles.gridWrap}>
        {/* Left hero panel */}
  <article className={`${styles.panel} ${styles.hero}`} aria-label="Featured project">
          <div className={styles.media} />
          <div className={styles.overlay} />
          <div className={styles.contentBottom}>
            <h2 className={styles.titleLg}>Smart Home Upgrade</h2>
            <p className={styles.subtitle}>Whole‑home automation, mood lighting, and energy insights</p>
          </div>
          <div className={styles.bottomRow}>
            <button className={`${styles.cta} ${styles.ctaPrimary}`} aria-label="Discover more about Smart Home Upgrade">Discover More</button>
            <button className={styles.cta} aria-label="Previous">Previous</button>
            <button className={styles.cta} aria-label="Next">Next</button>
          </div>
        </article>

        {/* Top middle text tile */}
  <article className={`${styles.panel} ${styles.tileText}`} aria-label="Explore electrical projects">
          <div className={styles.media} />
          <div className={styles.overlaySoft} />
          <div className={styles.contentBottom}><h3 className={styles.titleSm}>Explore</h3><p className={styles.blurb}>EV chargers, rewires, lighting design, and testing.</p></div>
        </article>

        {/* Right tall image */}
  <article className={`${styles.panel} ${styles.tileTall}`} aria-label="Tall project image">
          <div className={styles.media} />
          <div className={styles.overlaySoft} />
        </article>

        {/* Middle image */}
  <article className={`${styles.panel} ${styles.tileImage}`} aria-label="Project image">
          <div className={styles.media} />
        </article>

        {/* Bottom left text tile */}
  <article className={`${styles.panel} ${styles.tileText2}`} aria-label="Adventure copy">
          <div className={styles.media} />
          <div className={styles.overlaySoft} />
          <div className={styles.contentBottom}><h3 className={styles.titleSm}>Lighting Transformation</h3><p className={styles.blurb}>From dim and dated to bright, efficient, and modern—tailored to each room’s purpose.</p></div>
        </article>

        {/* Bottom right text tile */}
  <article className={`${styles.panel} ${styles.tileText3}`} aria-label="Cuisine copy">
          <div className={styles.media} />
          <div className={styles.overlaySoft} />
          <div className={styles.contentBottom}><h3 className={styles.titleSm}>Compliance & Testing</h3><p className={styles.blurb}>EICRs and certification for landlords and homeowners—safety, documented.</p></div>
        </article>

      </div>
    </section>
  );
};

export default ProjectGallery;
