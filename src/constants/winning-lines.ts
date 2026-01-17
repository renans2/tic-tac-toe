import type { WinningLine } from "../types/winning-line";

export const WINNING_LINES: WinningLine[] = [
  {
    label: "horizontal_top",
    indexes: [
      { i: 0, j: 0 },
      { i: 0, j: 1 },
      { i: 0, j: 2 },
    ],
  },
  {
    label: "horizontal_middle",
    indexes: [
      { i: 1, j: 0 },
      { i: 1, j: 1 },
      { i: 1, j: 2 },
    ],
  },
  {
    label: "horizontal_bottom",
    indexes: [
      { i: 2, j: 0 },
      { i: 2, j: 1 },
      { i: 2, j: 2 },
    ],
  },
  {
    label: "vertical_left",
    indexes: [
      { i: 0, j: 0 },
      { i: 1, j: 0 },
      { i: 2, j: 0 },
    ],
  },
  {
    label: "vertical_middle",
    indexes: [
      { i: 0, j: 1 },
      { i: 1, j: 1 },
      { i: 2, j: 1 },
    ],
  },
  {
    label: "vertical_right",
    indexes: [
      { i: 0, j: 2 },
      { i: 1, j: 2 },
      { i: 2, j: 2 },
    ],
  },
  {
    label: "diagonal_descending",
    indexes: [
      { i: 0, j: 0 },
      { i: 1, j: 1 },
      { i: 2, j: 2 },
    ],
  },
  {
    label: "diagonal_ascending",
    indexes: [
      { i: 0, j: 2 },
      { i: 1, j: 1 },
      { i: 2, j: 0 },
    ],
  },
];
