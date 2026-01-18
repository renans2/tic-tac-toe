import { S_XLine, S_XWrapper } from "./styles";

export default function X({ isHover }: { isHover: boolean }) {
  return (
    <S_XWrapper
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.5, opacity: 0 }}
    >
      <S_XLine $firstLine={true} $isHover={isHover} />
      <S_XLine $firstLine={false} $isHover={isHover} />
    </S_XWrapper>
  );
}
