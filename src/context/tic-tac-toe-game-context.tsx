import React, { createContext, useState } from "react";
import type { Player, Board } from "../types/tic-tac-toe-types";
import { INITIAL_BOARD } from "../constants/initial-board";

type TicTacToeGameContextType = {
  board: Board;
  nextPlayer: Player;
  winner: Player | undefined;
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

  return (
    <TicTacToeGameContext
      value={{
        board,
        nextPlayer,
        winner: "X",
      }}
    >
      {children}
    </TicTacToeGameContext>
  );
}
