import styled from "styled-components";

export const S_Square = styled.button`
  aspect-ratio: 1 / 1;
  position: relative;
  background-color: black;
  border: none;
  font-size: 3rem;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;
