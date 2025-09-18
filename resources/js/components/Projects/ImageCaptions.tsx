import React, { useEffect, useRef, useState } from 'react';
import styles from './ImageCaptions.module.css';

const captions = [
  'Modern Home Rewire – Leeds, 2024',
  'Office Lighting Upgrade – City Centre, 2023',
  'Smart Home Install – Suburbs, 2024',
  'Retail Fit-Out – Shopping District, 2023',
];

const ImageCaptions: React.FC = () => {
  const scrollerRef = useRef<HTMLUListElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const offsetRef = useRef<number>(0);
  const setWidthRef = useRef<number>(0);
  const pausedRef = useRef<boolean>(false);
  const [repeatCount, setRepeatCount] = useState<number>(2);

  useEffect(() => {
    const scroller = scrollerRef.current;
    const wrap = wrapRef.current;
    if (!scroller || !wrap) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return; // respect reduced motion

    const getSetWidth = (): number => {
      // width of the first set of items within the scroller (including last margin)
      const children = scroller.children;
      if (children.length === 0) return 0;
      const n = captions.length;
      if (children.length < n) return 0;
      const first = children[0] as HTMLElement;
      const last = children[n - 1] as HTMLElement;
      const lastStyles = window.getComputedStyle(last);
      const mr = parseFloat(lastStyles.marginRight || '0');
      const width = (last.offsetLeft + last.offsetWidth + mr) - first.offsetLeft;
      return width;
    };

    const handleEnter = () => { pausedRef.current = true; };
    const handleLeave = () => { pausedRef.current = false; tick(); };
    wrap.addEventListener('mouseenter', handleEnter);
    wrap.addEventListener('mouseleave', handleLeave);

    // initialize sizes after next paint
    const init = () => {
      // determine how many repeats are needed to fill viewport + one extra set
      const setWidth = getSetWidth();
      const wrapWidth = wrap.clientWidth;
      if (setWidth > 0) {
        const needed = Math.min(10, Math.max(2, Math.ceil((wrapWidth + setWidth) / setWidth) + 1));
        if (needed !== repeatCount) {
          setRepeatCount(needed);
          // We'll re-init on next effect run after re-render
          return;
        }
      }
  setWidthRef.current = setWidth || setWidthRef.current;
  // start at zero for smooth leftward movement
  offsetRef.current = 0;
  scroller.style.transform = 'translate3d(0,0,0)';
    };
    init();

    let last = performance.now();
  const speedPxPerSec = 30; // adjust speed here

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
      // move leftwards: increase offset and wrap using modulo
      offsetRef.current = (offsetRef.current + speedPxPerSec * dt) % w;
      scroller.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    const handleResize = () => {
      // recompute repeats and set width on resize
      const setWidth = getSetWidth();
      const wrapWidth = wrap.clientWidth;
      if (setWidth > 0) {
        const needed = Math.min(10, Math.max(2, Math.ceil((wrapWidth + setWidth) / setWidth) + 1));
        if (needed !== repeatCount) {
          setRepeatCount(needed);
        }
        setWidthRef.current = setWidth;
        // normalize offset into [0, w)
        offsetRef.current = offsetRef.current % setWidthRef.current;
        if (offsetRef.current < 0) offsetRef.current += setWidthRef.current;
        scroller.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      wrap.removeEventListener('mouseenter', handleEnter);
      wrap.removeEventListener('mouseleave', handleLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      scroller.style.transform = '';
    };
  }, [repeatCount]);

  // Build repeated items so we always fill the viewport and have extra sets to the right
  const repeated = Array.from({ length: repeatCount }).flatMap((_, r) =>
    captions.map((caption, i) => ({ key: `${r}-${i}`, caption, tabbable: r === 0 }))
  );

  return (
    <section className={styles.imageCaptions} aria-label="Project captions">
      <h2 className={styles.heading}>Project Captions</h2>
      <div className={styles.scrollerWrap} ref={wrapRef}>
        <div className={styles.edgeLeft} aria-hidden />
        <ul className={styles.scroller} ref={scrollerRef}>
          {repeated.map((item) => (
            <li key={item.key} className={styles.chip} tabIndex={item.tabbable ? 0 : -1}>
              {item.caption}
            </li>
          ))}
        </ul>
        <div className={styles.edgeRight} aria-hidden />
      </div>
    </section>
  );
};

export default ImageCaptions;
