import styled from "styled-components";
import type { Player } from "../../types/tic-tac-toe-types";

export const S_InfoContainer = styled.div<{ $nextPlayer: Player }>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  color: white;
  font-size: 2rem;

  em {
    color: ${({ $nextPlayer }) => ($nextPlayer === "X" ? "red" : "blue")};
    font-style: normal;
  }
`;
