import type { GridCell } from '../types';

export const GRID_COLS = 6;
export const GRID_ROWS = 6;

// 1 = active tile (part of letter M), 0 = empty
const M_MATRIX: number[][] = [
  [1, 0, 0, 0, 0, 1], // row 0 — górne narożniki
  [1, 1, 0, 0, 1, 1], // row 1 — przekątna
  [1, 0, 1, 1, 0, 1], // row 2 — szczyt M
  [1, 0, 0, 0, 0, 1], // row 3 — noga
  [1, 0, 0, 0, 0, 1], // row 4 — noga
  [1, 0, 0, 0, 0, 1], // row 5 — noga (dół)
];

// Maps "row-col" → sectionId (1-8)
const SECTION_POSITIONS: Record<string, number> = {
  '0-0': 1, // O mnie — lewy górny
  '0-5': 2, // Projekty — prawy górny
  '1-1': 3, // Umiejętności — lewa przekątna
  '1-4': 4, // Doświadczenie — prawa przekątna
  '2-2': 5, // Design — lewy szczyt M
  '2-3': 6, // Technologie — prawy szczyt M
  '5-0': 7, // Publikacje — lewa noga dół
  '5-5': 8, // Kontakt — prawa noga dół
};

export function generateGrid(): GridCell[] {
  const cells: GridCell[] = [];
  let activeIndex = 0;
  for (let row = 0; row < GRID_ROWS; row++) {
    for (let col = 0; col < GRID_COLS; col++) {
      const active = M_MATRIX[row][col] === 1;
      const key = `${row}-${col}`;
      cells.push({
        row,
        col,
        active,
        sectionId: active ? (SECTION_POSITIONS[key] ?? null) : null,
        index: active ? activeIndex++ : -1,
      });
    }
  }
  return cells;
}
