import React from 'react';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import styles from './FeaturedProjects.module.css';
import { projects as featured } from '../../data/projects';

const FeaturedProjects: React.FC = () => (
  <section className={styles.featuredProjects} aria-labelledby="featured-heading">
    <h2 className={styles.heading} id="featured-heading">Featured Projects</h2>
    <div className={styles.grid}>
      {featured.map(project => (
        <article key={project.title} className={styles.card} aria-labelledby={`${project.title.replace(/\s+/g,'-').toLowerCase()}-title`}>
          <div className={styles.image} aria-hidden="true">
            <span className={styles.badge}>{project.category}</span>
            {project.image ? (
              <img src={project.image} alt={project.title} className={styles.coverImage} loading="lazy" />
            ) : (
              <svg width="100%" height="120" viewBox="0 0 120 80" fill="none"><rect width="120" height="80" rx="16" fill="#eaf6ff"/></svg>
            )}
            <span className={styles.imageOverlay} />
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle} id={`${project.title.replace(/\s+/g,'-').toLowerCase()}-title`}>{project.title}</h3>
            <div className={styles.metaRow}>
              <span className={styles.metaChip}><MapPin size={14} /> {project.location}</span>
              <span className={styles.metaChip}><Calendar size={14} /> {project.year}</span>
            </div>
            <dl className={styles.flow}>
              <div>
                <dt>Challenge</dt>
                <dd>{project.challenge}</dd>
              </div>
              <div>
                <dt>Solution</dt>
                <dd>{project.solution}</dd>
              </div>
              <div>
                <dt>Outcome</dt>
                <dd>{project.outcome}</dd>
              </div>
            </dl>
            <a href={`/Projects/${project.slug}`} className={styles.cardLink} aria-label={`View details for ${project.title}`}>
              View Project Details <ArrowRight size={16} className={styles.arrow} />
            </a>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default FeaturedProjects;
