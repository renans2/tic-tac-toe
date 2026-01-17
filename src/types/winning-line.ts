export type Index = 0 | 1 | 2;

export type SquareIndex = {
  i: Index;
  j: Index;
};

export type WinningLineLabel =
  | "horizontal_top"
  | "horizontal_middle"
  | "horizontal_bottom"
  | "vertical_left"
  | "vertical_middle"
  | "vertical_right"
  | "diagonal_ascending"
  | "diagonal_descending";

export type WinningLine = {
  indexes: [SquareIndex, SquareIndex, SquareIndex];
  label: WinningLineLabel;
};
