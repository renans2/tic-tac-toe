import type { WinningLine } from "../../../types/winning-line";
import { getWinningLineTransformations } from "../../../utils/get-winning-line-transformations";
import { S_WinningLine, S_WrapperWinningLine } from "./styles";

export default function WinningLineComponent({
  winningLine,
}: {
  winningLine: WinningLine;
}) {
  const transformation = getWinningLineTransformations(winningLine.label);
  return (
    <S_WrapperWinningLine
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <S_WinningLine {...transformation} />
    </S_WrapperWinningLine>
  );
}
