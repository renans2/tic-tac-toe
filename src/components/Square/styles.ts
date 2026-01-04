import styled from "styled-components";

export const S_Square = styled.button<{ $showNextPlayerOnHover: boolean }>`
  aspect-ratio: 1 / 1;
  background-color: white;
  border: none;
  color: ${({ $showNextPlayerOnHover }) =>
    $showNextPlayerOnHover ? "gray" : "black"};
  font-size: 2rem;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;
