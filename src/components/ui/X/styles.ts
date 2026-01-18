import { motion } from "motion/react";
import styled from "styled-components";

export const S_XWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
`;

export const S_XLine = styled.div<{
  $firstLine: boolean;
  $isHover: boolean;
}>`
  width: 100%;
  height: 15px;
  background-color: red;
  opacity: ${({ $isHover }) => ($isHover ? "0.5" : "1")};
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%)
    rotate(${({ $firstLine }) => ($firstLine ? "45deg" : "-45deg")});
`;
