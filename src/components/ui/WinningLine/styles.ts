import styled from "styled-components";
import type { WinningLineTransformations } from "../../../utils/get-winning-line-transformations";
import { motion } from "motion/react";

export const S_WrapperWinningLine = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
`;

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
