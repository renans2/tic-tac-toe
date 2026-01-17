import styled from "styled-components";
import type { Player } from "../../types/tic-tac-toe-types";

export const S_InfoContainer = styled.div<{ $nextPlayer: Player }>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  color: white;
  font-size: 2rem;
  position: relative;

  em {
    color: ${({ $nextPlayer }) => ($nextPlayer === "X" ? "red" : "blue")};
    font-style: normal;
    font-weight: bold;
  }

  button {
    border: 2px solid white;
    border-radius: 10px;
    padding: 9px 12px;
    font-size: 1.2rem;
    background-color: transparent;
    color: white;
    cursor: pointer;
    transition: all 200ms ease-in-out;

    &:hover {
      color: black;
      background-color: white;
      border-color: black;
    }
  }
`;
