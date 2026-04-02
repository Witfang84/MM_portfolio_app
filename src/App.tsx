import { useState, useCallback } from 'react';
import { MGrid } from './components/MGrid/MGrid';
import { SectionPanel } from './components/SectionPanel/SectionPanel';
import styles from './App.module.css';

export default function App() {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  const handleSectionSelect = useCallback((id: number) => {
    setActiveSection(id);
  }, []);

  const handleClose = useCallback(() => {
    setActiveSection(null);
  }, []);

  return (
    <main className={styles.page}>
      <h1 className={styles.name}>Michał Miller</h1>
      <div className={styles.gridSection}>
        <MGrid onSectionSelect={handleSectionSelect} />
      </div>
      <p className={styles.bio}>
        I'm Senior Product Designer with 10+ years of experience in e-commerce products.
        I specialize in designing complex end-to-end flows, conversion optimization, and
        data-driven workflows. I have led projects from discovery to delivery in collaboration
        with PM, engineering, and business. I focus on measurable impact on product goals.
      </p>
      <nav className={styles.links}>
        <a href="#" className={styles.link}>LinkedIn</a>
        <span className={styles.separator}>·</span>
        <a href="#" className={styles.link}>Email</a>
        <span className={styles.separator}>·</span>
        <span>Phone</span>
      </nav>
      <SectionPanel sectionId={activeSection} onClose={handleClose} />
    </main>
  );
}
