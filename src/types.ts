export interface GridCell {
  row: number;
  col: number;
  active: boolean;
  sectionId: number | null;
  index: number;
}

export interface Section {
  id: number;
  title: string;
  description: string;
  color: string;
  content: string;
}
