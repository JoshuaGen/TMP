import React, { useState } from 'react';
import styles from './ProjectGallery.module.css';

const categories = ['All', 'Residential', 'Commercial'];
const projects = [
  { id: 1, title: 'Modern Home Rewire', category: 'Residential', image: '', caption: 'Full rewire for a 1930s home.' },
  { id: 2, title: 'Office Lighting Upgrade', category: 'Commercial', image: '', caption: 'LED lighting for a Leeds office.' },
  { id: 3, title: 'Smart Home Install', category: 'Residential', image: '', caption: 'Smart controls and automation.' },
  { id: 4, title: 'Retail Fit-Out', category: 'Commercial', image: '', caption: 'Complete electrical fit-out for retail.' },
];

const ProjectGallery: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section className={styles.gallerySection}>
      <h2 className={styles.heading}>Project Gallery</h2>
      <div className={styles.filters}>
        {categories.map(cat => (
          <button key={cat} className={filter === cat ? styles.active : ''} onClick={() => setFilter(cat)}>{cat}</button>
        ))}
      </div>
      <div className={styles.grid}>
        {filtered.map(project => (
          <div key={project.id} className={styles.card}>
            <div className={styles.image} aria-hidden="true">
              {/* Replace with actual image */}
              <svg width="100%" height="120" viewBox="0 0 120 80" fill="none"><rect width="120" height="80" rx="16" fill="#eaf6ff"/></svg>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.caption}>{project.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectGallery;
