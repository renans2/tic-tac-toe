import styled from "styled-components";

export const S_O = styled.div<{ $isHover: boolean }>`
  width: 85%;
  height: 85%;
  aspect-ratio: 1;
  border-radius: 1000px;
  border: 15px solid blue;
  opacity: ${({ $isHover }) => ($isHover ? "0.5" : "1")};
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
