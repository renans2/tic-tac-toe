import type { WinningLine } from "../../../types/winning-line";
import { getWinningLineTransformations } from "../../../utils/get-winning-line-transformations";
import { S_WinningLine } from "./styles";

export default function WinningLineComponent({
  winningLine,
}: {
  winningLine: WinningLine;
}) {
  const transformation = getWinningLineTransformations(winningLine.label);
  return <S_WinningLine {...transformation} />;
}
