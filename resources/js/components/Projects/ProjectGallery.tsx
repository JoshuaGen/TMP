import React, { useCallback, useState } from 'react';
import { router } from '@inertiajs/react';
import styles from './ProjectGallery.module.css';

const ProjectGallery: React.FC = () => {
  // Five hero images to cycle through
  const heroImages = [
    '/images/realimages/pexels-heyho-6436777.webp',
    '/images/realimages/pexels-hakimsatoso-5556177.webp',
    '/images/realimages/pexels-heyho-7587870.webp',
    '/images/realimages/pexels-heyho-7031403.webp',
    '/images/realimages/ovjj4vpsumbl3lpjs9nv.webp',
  ];

  const [heroIndex, setHeroIndex] = useState(0);

  const goNext = useCallback(() => {
    setHeroIndex((i) => (i + 1) % heroImages.length);
  }, [heroImages.length]);

  const goPrev = useCallback(() => {
    setHeroIndex((i) => (i - 1 + heroImages.length) % heroImages.length);
  }, [heroImages.length]);

  const goFreeQuote = useCallback(() => {
    // Navigate to the Free Quote page
    router.visit('/FreeQuote');
  }, []);

  return (
    <section className={styles.gallerySection}>
      <div className={styles.gridWrap}>
        {/* Left hero panel */}
  <article className={`${styles.panel} ${styles.hero}`} aria-label="Featured project">
          <div
            className={styles.media}
            style={{ backgroundImage: `url('${heroImages[heroIndex]}')` }}
            aria-hidden
          />
          <div className={styles.overlay} />
          <div className={styles.contentBottom}>
            <h2 className={styles.titleLg}>Smart Home Upgrade</h2>
            <p className={styles.subtitle}>Whole‑home automation, mood lighting, and energy insights</p>
          </div>
          <div className={styles.bottomRow}>
            <button
              className={`${styles.cta} ${styles.ctaPrimary}`}
              aria-label="Discover more about Smart Home Upgrade"
              onClick={goFreeQuote}
            >
              Discover More
            </button>
            <button className={styles.cta} aria-label="Previous" onClick={goPrev}>Previous</button>
            <button className={styles.cta} aria-label="Next" onClick={goNext}>Next</button>
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
