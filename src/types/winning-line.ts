export type Index = 0 | 1 | 2;
export type SquareIndex = {
  i: Index;
  j: Index;
};
export type WinningLine = [SquareIndex, SquareIndex, SquareIndex];
