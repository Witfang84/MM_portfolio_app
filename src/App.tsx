import { useState, useCallback } from 'react';
import { MGrid } from './components/MGrid/MGrid';
import { SectionPanel } from './components/SectionPanel/SectionPanel';
import { ProjectCard } from './components/ProjectCard/ProjectCard';
import { PROJECTS } from './data/projects';
import styles from './App.module.css';

const ROLES = ['PRODUCT_DESIGNER', 'PRODUCT_MANAGER', 'VISUAL_THINKER'];

export default function App() {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  const handleSectionSelect = useCallback((id: number) => {
    setActiveSection(id);
  }, []);

  const handleClose = useCallback(() => {
    setActiveSection(null);
  }, []);

  return (
    <>
      <main className={styles.page}>

        {/* ── Hero: 2-column ───────────────────────────────── */}
        <section className={styles.hero}>
          <div className={styles.heroLeft}>
            <h1 className={styles.name}>
              <span>MICHAŁ</span>
              <span>MILLER</span>
            </h1>
            <ul className={styles.rolesList}>
              {ROLES.map((role) => (
                <li key={role} className={styles.roleItem}>{role}</li>
              ))}
            </ul>
            <nav className={styles.links}>
              <a href="#" className={styles.link}>LinkedIn</a>
              <span className={styles.sep}>·</span>
              <a href="#" className={styles.link}>Email</a>
              <span className={styles.sep}>·</span>
              <span className={styles.link}>Phone</span>
            </nav>
          </div>

          <div className={styles.heroRight}>
            <MGrid onSectionSelect={handleSectionSelect} />
          </div>
        </section>

        {/* ── Bridge Builder ───────────────────────────────── */}
        <section className={styles.bridgeSection}>
          <div className={styles.bridgeHeader}>
            <span className={styles.bridgeWord}>BRIDGE</span>
            <span className={styles.builderWord}>BUILDER</span>
          </div>
          <div className={styles.bridgeContent}>
            <div className={styles.bridgeImageWrap}>
              <img
                src="/MM_portfolio_app/projects/bridge.png"
                alt="Bridge — neon structure"
                className={styles.bridgeImg}
              />
            </div>
            <div className={styles.bridgeBio}>
              <p>
                I'm Senior Product Designer with 10+ years of experience in
                e-commerce products. I specialize in designing complex end-to-end
                flows, conversion optimization, and data-driven workflows.
              </p>
              <p>
                I have led projects from discovery to delivery in collaboration
                with PM, engineering, and business. I focus on measurable impact
                on product goals.
              </p>
            </div>
          </div>
        </section>

        {/* ── Design Projects ──────────────────────────────── */}
        <section className={styles.projectsSection}>
          <h2 className={styles.projectsHeading}>DESIGN PROJECTS</h2>
          <div className={styles.projectsGrid}>
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* ── Footer ───────────────────────────────────────── */}
        <footer className={styles.footer}>
          <span className={styles.footerBrand}>BRIDGE_BUILDER UN-TECH</span>
          <div className={styles.footerLinks}>
            <a href="#" className={styles.footerLink}>LinkedIn</a>
            <a href="#" className={styles.footerLink}>Email</a>
            <a href="#" className={styles.footerLink}>Phone</a>
          </div>
          <span className={styles.footerCopy}>© 2025 Michał Miller</span>
        </footer>

      </main>

      <SectionPanel sectionId={activeSection} onClose={handleClose} />
    </>
  );
}
