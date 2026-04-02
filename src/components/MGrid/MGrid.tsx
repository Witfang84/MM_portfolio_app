import { useMemo } from 'react';
import { generateGrid } from '../../data/grid';
import { Tile } from '../Tile/Tile';
import styles from './MGrid.module.css';

// ─── Konfiguracja etykiet ────────────────────────────────────────────────────
// Zmień `text` lub wartości CSS w `style`, żeby przestawić/zmienić etykiety.
const LABELS: { id: string; text: string; style: React.CSSProperties }[] = [
  {
    id: 'top',
    text: 'Product Designer',
    style: { bottom: 'calc(100% + 10px)', left: '3%', transform: 'translateX(-5%)' },
  },
  {
    id: 'bottom',
    text: 'Product Manager',
    style: { top: 'calc(100% + 10px)', left: '78%', transform: 'translateX(10%)' },
  },
  {
    id: 'left',
    text: 'Visual Thinker',
    style: { right: 'calc(100% + 24px)', top: '75%', transform: 'translateY(-50%) rotate(-35deg)' },
  },
  {
    id: 'right',
    text: 'Strategy Fun',
    style: { left: 'calc(100% + 24px)', top: '75%', transform: 'translateY(-50%) rotate(35deg)' },
  },
];
// ────────────────────────────────────────────────────────────────────────────

interface MGridProps {
  onSectionSelect: (id: number) => void;
}

export function MGrid({ onSectionSelect }: MGridProps) {
  const cells = useMemo(() => generateGrid(), []);

  return (
    <div className={styles.container}>
      <div className={styles.gridWrapper}>
        {LABELS.map(({ id, text, style }) => (
          <span key={id} className={styles.label} style={style}>
            {text}
          </span>
        ))}
        <div className={styles.grid} role="img" aria-label="Litera M zbudowana z kafelków">
          {cells.map((cell) => (
            <Tile
              key={`${cell.row}-${cell.col}`}
              cell={cell}
              onSectionSelect={onSectionSelect}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
