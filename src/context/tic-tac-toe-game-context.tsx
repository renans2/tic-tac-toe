import React, { createContext, useEffect, useState } from "react";
import type { Player, Board, GameStatus } from "../types/tic-tac-toe-types";
import { INITIAL_BOARD } from "../constants/initial-board";
import type { SpaceIndex } from "../types/winning-line";
import { hasWon, isDraw } from "../utils/game-status-logic";

type TicTacToeGameContextType = {
  board: Board;
  nextPlayer: Player;
  gameStatus: GameStatus;
  play: (spaceIndex: SpaceIndex) => void;
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
  const [gameStatus, setGameStatus] = useState<GameStatus>({
    status: "not_over",
  });

  const play = ({ i, j }: SpaceIndex) => {
    setBoard((prev) => {
      const copy = prev.map((line) => [...line]) as Board;
      copy[i][j] = nextPlayer;
      return copy;
    });
  };

  useEffect(() => {
    if (hasWon(nextPlayer, board)) {
      setGameStatus({ status: "over", result: nextPlayer });
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
        gameStatus,
        play,
      }}
    >
      {children}
    </TicTacToeGameContext>
  );
}
