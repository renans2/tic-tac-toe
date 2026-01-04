import styled from "styled-components";

export const S_Board = styled.div`
  padding: 2px;
  aspect-ratio: 1 / 1;
  width: 100%;
  max-width: 500px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 5px;

  background-color: black;
`;
