import { useState } from "react";
import { useTicTacToe } from "../../context/tic-tac-toe-game-context";
import type { Index } from "../../types/winning-line";
import { S_Square } from "./styles";

type SquareType = {
  i: Index;
  j: Index;
};

export default function Square({ i, j }: SquareType) {
  const { board, nextPlayer, gameStatus, play } = useTicTacToe();
  const [mouseIsOver, setMouseIsOver] = useState(false);

  const squareValue = board[i][j];
  const isDisabled = squareValue !== null || gameStatus.status === "over";
  const showNextPlayerOnHover = !isDisabled && mouseIsOver;
  const toDisplay = showNextPlayerOnHover ? nextPlayer : squareValue;

  return (
    <S_Square
      disabled={isDisabled}
      onClick={() => play({ i, j })}
      onMouseOver={() => setMouseIsOver(true)}
      onMouseOut={() => setMouseIsOver(false)}
      $showNextPlayerOnHover={showNextPlayerOnHover}
    >
      {toDisplay}
    </S_Square>
  );
}
