import type { GridCell } from '../../types';
import { useTileFlip } from '../../hooks/useTileFlip';
import { TileFront } from '../TileFront/TileFront';
import { TileBack } from '../TileBack/TileBack';
import styles from './Tile.module.css';

interface TileProps {
  cell: GridCell;
  onSectionSelect: (id: number) => void;
}

export function Tile({ cell, onSectionSelect }: TileProps) {
  const { flipped, handlers } = useTileFlip();

  const loadDelay = cell.active ? `${cell.index * 30}ms` : '0ms';

  if (!cell.active) {
    return (
      <div
        className={`${styles.cell} ${styles.inactive}`}
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      className={styles.cell}
      style={{ '--load-delay': loadDelay } as React.CSSProperties}
    >
      <div
        className={`${styles.wrapper} ${flipped ? styles.flipped : ''}`}
        {...handlers}
        role={cell.sectionId ? 'button' : undefined}
        aria-label={
          cell.sectionId ? `Kafelek ${cell.sectionId} — kliknij aby odkryć` : undefined
        }
      >
        <div className={`${styles.face} ${styles.faceFront}`}>
          <TileFront />
        </div>
        <div className={`${styles.face} ${styles.faceBack}`}>
          <TileBack sectionId={cell.sectionId} onSectionSelect={onSectionSelect} />
        </div>
      </div>
    </div>
  );
}
