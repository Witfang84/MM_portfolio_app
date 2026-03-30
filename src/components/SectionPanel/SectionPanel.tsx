import { useEffect } from 'react';
import { SECTIONS } from '../../data/sections';
import styles from './SectionPanel.module.css';

interface SectionPanelProps {
  sectionId: number | null;
  onClose: () => void;
}

export function SectionPanel({ sectionId, onClose }: SectionPanelProps) {
  const visible = sectionId !== null;
  const section = sectionId ? SECTIONS.find((s) => s.id === sectionId) : null;

  useEffect(() => {
    if (!visible) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [visible, onClose]);

  return (
    <>
      <div
        className={`${styles.overlay} ${visible ? styles.visible : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={`${styles.panel} ${visible ? styles.visible : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label={section?.title ?? 'Sekcja portfolio'}
        style={
          section
            ? ({ '--section-color': section.color } as React.CSSProperties)
            : undefined
        }
      >
        {section && (
          <>
            <div className={styles.accentBar} />
            <div className={styles.header}>
              <div className={styles.titleGroup}>
                <span className={styles.number}>{String(section.id).padStart(2, '0')}</span>
                <h2 className={styles.title}>{section.title}</h2>
              </div>
              <button
                className={styles.closeBtn}
                onClick={onClose}
                aria-label="Zamknij panel"
              >
                ×
              </button>
            </div>
            <div className={styles.divider} />
            <div className={styles.body}>
              <p className={styles.description}>{section.description}</p>
              <p className={styles.content}>{section.content}</p>
            </div>
          </>
        )}
      </div>
    </>
  );
}
