import styled from "styled-components";

export const S_Board = styled.div`
  aspect-ratio: 1 / 1;
  width: 100%;
  max-width: 500px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  padding: 3px;
  gap: 3px;
  overflow: hidden;
  position: relative;
  background-color: #bababa;
  border-radius: 20px;
`;
