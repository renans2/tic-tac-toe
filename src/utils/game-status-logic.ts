import { WINNING_LINES } from "../constants/winning-lines";
import type { Board, Player } from "../types/tic-tac-toe-types";
import type { WinningLine } from "../types/winning-line";

export function getWinningLineIfWon(
  player: Player,
  board: Board
): WinningLine | undefined {
  let winningLine;

  WINNING_LINES.forEach((line) => {
    const isWinningLine = line.indexes.every(
      (index) => board[index.i][index.j] === player
    );
    if (isWinningLine) winningLine = line;
  });

  return winningLine;
}

export function isDraw(board: Board): boolean {
  return board.every((line) => line.every((space) => space !== null));
}
