import { SECTIONS } from '../../data/sections';
import styles from './TileBack.module.css';

interface TileBackProps {
  sectionId: number | null;
  onSectionSelect: (id: number) => void;
}

export function TileBack({ sectionId, onSectionSelect }: TileBackProps) {
  if (!sectionId) {
    return <div className={styles.blank} />;
  }

  const section = SECTIONS.find((s) => s.id === sectionId);
  if (!section) return <div className={styles.blank} />;

  return (
    <div
      className={styles.back}
      style={{ '--accent-color': section.color } as React.CSSProperties}
      onClick={() => {
        onSectionSelect(sectionId);
      }}
      role="button"
      aria-label={`Otwórz sekcję: ${section.title}`}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSectionSelect(sectionId);
        }
      }}
    >
      <span className={styles.number}>{sectionId}</span>
    </div>
  );
}
