import { useState } from "react";
import { useTicTacToe } from "../../context/tic-tac-toe-game-context";
import { S_Square } from "./styles";
import type { Symbol } from "../../types/tic-tac-toe-types";
import X from "../ui/X";
import O from "../ui/O";

type SquareType = {
  onClick: () => void;
  squareValue: Symbol | null;
};

export default function Square({ squareValue, onClick }: SquareType) {
  const { nextPlayer, gameStatus } = useTicTacToe();
  const [mouseIsOver, setMouseIsOver] = useState(false);

  const isDisabled = squareValue !== null || gameStatus.status === "over";
  const showNextPlayerOnHover = !isDisabled && mouseIsOver;
  const toDisplay = showNextPlayerOnHover ? nextPlayer : squareValue;

  return (
    <S_Square
      disabled={isDisabled}
      onClick={onClick}
      onMouseOver={() => setMouseIsOver(true)}
      onMouseOut={() => setMouseIsOver(false)}
    >
      {toDisplay === "X" && <X isHover={showNextPlayerOnHover} />}
      {toDisplay === "O" && <O isHover={showNextPlayerOnHover} />}
    </S_Square>
  );
}
