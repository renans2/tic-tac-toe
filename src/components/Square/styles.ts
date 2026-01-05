import styled from "styled-components";
import type { Player, Symbol } from "../../types/tic-tac-toe-types";

export const S_Square = styled.button<{
  $showNextPlayerOnHover: boolean;
  $nextPlayer: Player;
  $squareValue: Symbol | null;
}>`
  aspect-ratio: 1 / 1;
  background-color: black;
  border: none;
  color: ${({ $showNextPlayerOnHover, $nextPlayer, $squareValue }) =>
    $showNextPlayerOnHover
      ? $nextPlayer === "X"
        ? "red"
        : "blue"
      : $squareValue === "X"
      ? "red"
      : "blue"};
  font-size: 3rem;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;
