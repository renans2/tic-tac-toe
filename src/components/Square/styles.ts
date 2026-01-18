import styled from "styled-components";

export const S_Square = styled.button`
  aspect-ratio: 1 / 1;
  position: relative;
  background-color: black;
  border: none;
  border-radius: 20px;
  font-size: 3rem;
  cursor: pointer;
  transition: transform 100ms ease-in-out;

  &:disabled {
    cursor: not-allowed;
  }

  &:not(:disabled):active {
    transform: scale(0.9);
  }
`;
