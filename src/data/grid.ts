import type { GridCell } from '../types';

export const GRID_COLS = 7;
export const GRID_ROWS = 9;

// 1 = active tile (part of letter M), 0 = empty
const M_MATRIX: number[][] = [
  [1, 1, 0, 0, 0, 1, 1], // row 0
  [1, 1, 1, 0, 1, 1, 1], // row 1
  [1, 1, 0, 1, 0, 1, 1], // row 2
  [1, 1, 0, 0, 0, 1, 1], // row 3
  [1, 1, 0, 0, 0, 1, 1], // row 4
  [1, 1, 0, 0, 0, 1, 1], // row 5
  [1, 1, 0, 0, 0, 1, 1], // row 6
  [1, 1, 0, 0, 0, 1, 1], // row 7
  [1, 1, 0, 0, 0, 1, 1], // row 8
];

// Maps "row-col" → sectionId (1-8)
const SECTION_POSITIONS: Record<string, number> = {
  '0-0': 1, // O mnie — lewy górny
  '0-6': 2, // Projekty — prawy górny
  '1-2': 3, // Umiejętności — lewa przekątna
  '1-4': 4, // Doświadczenie — prawa przekątna
  '2-3': 5, // Design — szczyt M
  '8-0': 6, // Technologie — lewa noga dół
  '8-1': 7, // Publikacje — lewa noga wew.
  '8-6': 8, // Kontakt — prawa noga
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
