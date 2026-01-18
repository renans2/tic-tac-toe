import { motion } from "motion/react";
import styled from "styled-components";

export const S_OWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const S_O = styled.div<{ $isHover: boolean }>`
  width: 85%;
  height: 85%;
  aspect-ratio: 1;
  border-radius: 1000px;
  border: 15px solid blue;
  opacity: ${({ $isHover }) => ($isHover ? "0.5" : "1")};
`;
