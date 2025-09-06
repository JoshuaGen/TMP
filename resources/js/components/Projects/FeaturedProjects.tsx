import React from 'react';
import styles from './FeaturedProjects.module.css';

const featured = [
  {
    title: 'Smart Home Transformation',
    image: '',
    challenge: 'Outdated wiring and no smart features.',
    solution: 'Full rewire and smart system install.',
    outcome: 'Modern, energy-efficient home with remote control.',
    link: '#',
  },
  {
    title: 'Commercial Lighting Upgrade',
    image: '',
    challenge: 'High energy bills and poor lighting.',
    solution: 'LED lighting and controls upgrade.',
    outcome: 'Lower bills and brighter workspace.',
    link: '#',
  },
];

const FeaturedProjects: React.FC = () => (
  <section className={styles.featuredProjects}>
    <h2 className={styles.heading}>Featured Projects</h2>
    <div className={styles.grid}>
      {featured.map(project => (
        <div key={project.title} className={styles.card}>
          <div className={styles.image} aria-hidden="true">
            {/* Replace with actual image */}
            <svg width="100%" height="120" viewBox="0 0 120 80" fill="none"><rect width="120" height="80" rx="16" fill="#eaf6ff"/></svg>
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>{project.title}</h3>
            <div className={styles.flow}>
              <div><strong>Challenge:</strong> {project.challenge}</div>
              <div><strong>Solution:</strong> {project.solution}</div>
              <div><strong>Outcome:</strong> {project.outcome}</div>
            </div>
            <a href={project.link} className={styles.cardLink}>View Project Details</a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturedProjects;
