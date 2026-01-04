import { WINNING_LINES } from "../constants/winning-lines";
import type { Board, Player } from "../types/tic-tac-toe-types";

export function hasWon(player: Player, board: Board): boolean {
  return WINNING_LINES.some((line) =>
    line.every((index) => board[index.i][index.j] === player)
  );
}
