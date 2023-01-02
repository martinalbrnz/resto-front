export interface Table {
  id: number;
  seats: number;
  posX: number;
  posY: number;
  shape: 'round' | 'square';
  [name: string]: any;
}
