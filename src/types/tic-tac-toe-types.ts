export type Symbol = "X" | "O";
export type Player = Symbol;
export type Board = [
  [Symbol | null, Symbol | null, Symbol | null],
  [Symbol | null, Symbol | null, Symbol | null],
  [Symbol | null, Symbol | null, Symbol | null]
];
export type GameStatus =
  | { status: "not_over" }
  | { status: "over"; result: Player | "draw" };
