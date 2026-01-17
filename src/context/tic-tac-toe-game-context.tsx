import React, { createContext, useContext, useEffect, useState } from "react";
import type { Player, Board, GameStatus } from "../types/tic-tac-toe-types";
import { INITIAL_BOARD } from "../constants/initial-board";
import type { SquareIndex, WinningLine } from "../types/winning-line";
import { getWinningLineIfWon, isDraw } from "../utils/game-status-logic";

type TicTacToeGameContextType = {
  board: Board;
  nextPlayer: Player;
  winningLine: WinningLine | undefined;
  gameStatus: GameStatus;
  play: (squareIndex: SquareIndex) => void;
  reset: () => void;
};

const TicTacToeGameContext = createContext<
  TicTacToeGameContextType | undefined
>(undefined);

export default function TicTacToeGameProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [board, setBoard] = useState<Board>(INITIAL_BOARD);
  const [nextPlayer, setNextPlayer] = useState<Player>("X");
  const [winningLine, setWinningLine] = useState<WinningLine | undefined>();
  const [gameStatus, setGameStatus] = useState<GameStatus>({
    status: "not_over",
  });

  const play = ({ i, j }: SquareIndex) => {
    setBoard((prev) => {
      const copy = prev.map((line) => [...line]) as Board;
      copy[i][j] = nextPlayer;
      return copy;
    });
  };

  const reset = () => {
    setBoard(INITIAL_BOARD);
    setNextPlayer("X");
    setWinningLine(undefined);
    setGameStatus({ status: "not_over" });
  };

  useEffect(() => {
    const winningLine = getWinningLineIfWon(nextPlayer, board);

    if (winningLine !== undefined) {
      setGameStatus({ status: "over", result: nextPlayer });
      setWinningLine(winningLine);
    } else if (isDraw(board)) {
      setGameStatus({ status: "over", result: "draw" });
    } else {
      setNextPlayer((prev) => (prev === "X" ? "O" : "X"));
    }
  }, [board]);

  return (
    <TicTacToeGameContext
      value={{
        board,
        nextPlayer,
        winningLine,
        gameStatus,
        play,
        reset,
      }}
    >
      {children}
    </TicTacToeGameContext>
  );
}

export const useTicTacToe = () => {
  const context = useContext(TicTacToeGameContext);

  if (!context)
    throw new Error("The useTicTacToe hook must be used within its provider");

  return context;
};
