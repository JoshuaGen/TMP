import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { projects } from '../data/projects';

type Props = { slug: string };

const ProjectDetail: React.FC<Props> = ({ slug }) => {
  const project = projects.find(p => p.slug === slug);
  if (!project) {
    return (
      <>
        <Header />
        <main style={{ padding: '2rem', maxWidth: 900, margin: '0 auto' }}>
          <h1>Project not found</h1>
          <p>We couldn’t find that project. Please go back to the Projects page.</p>
        </main>
        <Footer />
      </>
    );
  }
  return (
    <>
      <Header />
      <main style={{ padding: '2rem 1rem' }}>
        <section style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h1 style={{ fontSize: '1.6rem', marginBottom: '0.8rem' }}>{project.title}</h1>
          <img src={project.image} alt={project.title} style={{ width: '100%', maxHeight: 520, objectFit: 'cover', borderRadius: 12 }} />
          <div style={{ display: 'flex', gap: 12, margin: '0.8rem 0', color: '#555' }}>
            <span>{project.category}</span>
            <span>•</span>
            <span>{project.location}</span>
            <span>•</span>
            <span>{project.year}</span>
          </div>
          <div style={{ display: 'grid', gap: 10, marginTop: 14 }}>
            <div>
              <strong>Challenge</strong>
              <p style={{ margin: '6px 0 0' }}>{project.challenge}</p>
            </div>
            <div>
              <strong>Solution</strong>
              <p style={{ margin: '6px 0 0' }}>{project.solution}</p>
            </div>
            <div>
              <strong>Outcome</strong>
              <p style={{ margin: '6px 0 0' }}>{project.outcome}</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProjectDetail;