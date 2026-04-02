import styles from './TileFront.module.css';

interface TileFrontProps {
  hasSection?: boolean;
}

export function TileFront({ hasSection }: TileFrontProps) {
  return (
    <div className={styles.front}>
      {hasSection && <span className={styles.dot} aria-hidden="true" />}
    </div>
  );
}
