import styled from "styled-components";
import type { WinningLineTransformations } from "../../../utils/get-winning-line-transformations";

export const S_WinningLine = styled.div<WinningLineTransformations>`
  width: 200%;
  height: 25px;
  background-color: #00ff00;
  opacity: 0.75;
  position: absolute;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  transform: ${({ $transform }) => $transform};
`;
