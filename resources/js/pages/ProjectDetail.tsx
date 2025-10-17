import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { projects } from '../data/projects';
import styles from './ProjectDetail.module.css';
import { router, Head } from '@inertiajs/react';

type Props = { slug: string };

const ProjectDetail: React.FC<Props> = ({ slug }) => {
  const project = projects.find(p => p.slug === slug);
  if (!project) {
    return (
      <>
        <Header />
        <main className={styles.container}>
          <h1>Project not found</h1>
          <p>We couldn’t find that project. Please go back to the Projects page.</p>
          <a className={styles.backLink} href="/Projects">← Back to Projects</a>
        </main>
        <Footer />
      </>
    );
  }
  return (
    <>
      <Head title={`${project.title} – Projects`}>
        <meta
          name="description"
          content={`${project.title} in ${project.location} (${project.year}). ${project.outcome}`}
        />
      </Head>
      <Header />
      <main className={styles.page}>
        <div className={styles.container}>
          <a className={styles.backLink} href="/Projects">← Back to Projects</a>
          <section className={styles.hero} aria-label={`${project.title} hero image`}>
            <div className={styles.heroImg} style={{ backgroundImage: `url('${project.image}')` }} />
            <div className={styles.heroOverlay} />
            <div className={styles.heroContent}>
              <p className={styles.kicker}>Case study</p>
              <h1 className={styles.title}>{project.title}</h1>
              <div className={styles.metaRow}>
                <span className={styles.chip}>{project.category}</span>
                <span className={styles.chip}>{project.location}</span>
                <span className={styles.chip}>{project.year}</span>
              </div>
            </div>
          </section>

          <section className={styles.grid}>
            <div className={styles.mainCol}>
              <article className={styles.card}>
                <h3>Challenge</h3>
                <p className={styles.lead}>{project.challenge}</p>
              </article>
              <article className={styles.card}>
                <h3>Solution</h3>
                <p>{project.solution}</p>
              </article>
              <article className={styles.card}>
                <h3>Outcome</h3>
                <p>{project.outcome}</p>
              </article>
            </div>
            <aside className={styles.sidebar}>
              <div className={styles.card}>
                <h3>Need something similar?</h3>
                <p>We can help with lighting upgrades, extra sockets, EV chargers, EICRs and more—done safely and neatly.</p>
                <button
                  className={styles.cta}
                  onClick={() => router.visit('/FreeQuote')}
                  aria-label="Get a free quote"
                >
                  Get a Free Quote
                </button>
              </div>
            </aside>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProjectDetail;