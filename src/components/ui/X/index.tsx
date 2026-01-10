import { S_XLine } from "./styles";

export default function X({ isHover }: { isHover: boolean }) {
  return (
    <>
      <S_XLine $firstLine={true} $isHover={isHover} />
      <S_XLine $firstLine={false} $isHover={isHover} />
    </>
  );
}
