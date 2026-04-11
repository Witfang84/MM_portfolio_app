import { useMemo } from 'react';
import { generateGrid } from '../../data/grid';
import { Tile } from '../Tile/Tile';
import styles from './MGrid.module.css';

interface MGridProps {
  onSectionSelect: (id: number) => void;
}

export function MGrid({ onSectionSelect }: MGridProps) {
  const cells = useMemo(() => generateGrid(), []);

  return (
    <div className={styles.container}>
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
  );
}
