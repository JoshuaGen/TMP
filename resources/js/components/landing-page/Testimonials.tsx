import { motion, easeOut } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: 'Elara Voss',
    role: 'Estate Agent',
    text: 'Outstanding service and professionalism!',
    avatar: '/images/testimonial-elara.jpg',
  },
  {
    name: 'Liam Hargrove',
    role: 'Builder',
    text: 'Quick and efficient work.',
    avatar: '/images/testimonial-liam.jpg',
  },
  {
    name: 'Aurelia Kline',
    role: 'Homeowner',
    text: 'Highly recommended for residential needs.',
    avatar: '/images/testimonial-aurelia.jpg',
  },
  {
    name: 'Cyrus Thorne',
    role: 'Contractor',
    text: 'Professional and trustworthy.',
    avatar: '/images/testimonial-cyrus.jpg',
  },
  {
    name: 'Maya Chen',
    role: 'Interior Designer',
    text: 'Their attention to detail is unmatched. Will hire again!',
    avatar: '/images/testimonial-maya.jpg',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.22, duration: 0.35, ease: easeOut },
  }),
};

const Testimonials: React.FC = () => {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLUListElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const offsetRef = useRef<number>(0);
  const setWidthRef = useRef<number>(0);
  const pausedRef = useRef<boolean>(false);
  const [repeatCount, setRepeatCount] = useState<number>(3);

  useEffect(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const getSetWidth = (): number => {
      const children = track.children;
      const n = testimonials.length;
      if (children.length < n) return 0;
      const firstEl = children[0] as HTMLElement;
      const lastEl = children[n - 1] as HTMLElement;
      const lastStyles = window.getComputedStyle(lastEl);
      const mr = parseFloat(lastStyles.marginRight || '0');
      return (lastEl.offsetLeft + lastEl.offsetWidth + mr) - firstEl.offsetLeft;
    };

    const handleEnter = () => { pausedRef.current = true; };
    const handleLeave = () => { pausedRef.current = false; tick(); };
    wrap.addEventListener('mouseenter', handleEnter);
    wrap.addEventListener('mouseleave', handleLeave);

    const init = () => {
      const setW = getSetWidth();
      const wrapW = wrap.clientWidth;
      if (setW > 0) {
        const needed = Math.min(10, Math.max(2, Math.ceil((wrapW + setW) / setW) + 1));
        if (needed !== repeatCount) {
          setRepeatCount(needed);
          return; // re-init after render
        }
      }
      setWidthRef.current = setW || setWidthRef.current;
      // Start positioned by one full set to the left, so moving right reveals cards from the left
      offsetRef.current = setWidthRef.current > 0 ? setWidthRef.current : 0;
      track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
    };
    init();

    let last = performance.now();
    const speedPxPerSec = 30; // left -> right speed in px/sec
    const tick = () => {
      if (pausedRef.current) return;
      const now = performance.now();
      const dt = (now - last) / 1000;
      last = now;
      const w = setWidthRef.current || getSetWidth();
      if (w <= 0) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }
      // move visually left->right: decrease offset and wrap by period without negative modulo
      offsetRef.current -= speedPxPerSec * dt;
      while (offsetRef.current <= 0) offsetRef.current += w;
      track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    const handleResize = () => {
      const setW = getSetWidth();
      const wrapW = wrap.clientWidth;
      if (setW > 0) {
        const needed = Math.min(10, Math.max(2, Math.ceil((wrapW + setW) / setW) + 1));
        if (needed !== repeatCount) setRepeatCount(needed);
        setWidthRef.current = setW;
        // normalize offset to (0, w]
        offsetRef.current = offsetRef.current % setWidthRef.current;
        if (offsetRef.current <= 0) offsetRef.current += setWidthRef.current;
        track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      wrap.removeEventListener('mouseenter', handleEnter);
      wrap.removeEventListener('mouseleave', handleLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (track) track.style.transform = '';
    };
     
  }, [repeatCount]);

  const repeated = Array.from({ length: repeatCount }).flatMap((_, r) =>
    testimonials.map((t) => ({ key: `${r}-${t.name}`, data: t, tabbable: r === 0 }))
  );

  return (
    <motion.section
      className={styles.testimonialsSection}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <h2 className={styles.testimonialsTitle}>What Our Clients Say</h2>
      <div className={styles.testimonialsGrid} ref={wrapRef}>
        <ul className={styles.track} ref={trackRef}>
          {repeated.map((item, idx) => (
            <li className={styles.item} key={item.key}>
              <motion.div
                className={styles.testimonialCard}
                custom={idx % testimonials.length}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={cardVariants}
                tabIndex={item.tabbable ? 0 : -1}
              >
                <div className={styles.testimonialHeader}>
                  <img
                    src={item.data.avatar}
                    alt={item.data.name}
                    className={styles.avatar}
                    onError={e => {
                      (e.currentTarget as HTMLImageElement).src = '/images/avatar-account-flat-isolated-on-transparent-background-for-graphic-and-web-design-default-social-media-profile-photo-symbol-profile-and-people-silhouette-user-icon-vector.jpg';
                    }}
                  />
                  <div className={styles.metaText}>
                    <span className={styles.testimonialName}>{item.data.name}</span>
                    <span className={styles.testimonialRole}>{item.data.role}</span>
                  </div>
                </div>
                <div className={styles.testimonialDivider} />
                <p className={styles.testimonialText}>{item.data.text}</p>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
};

export default Testimonials;
