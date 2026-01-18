import { S_O, S_OWrapper } from "./styles";

export default function O({ isHover }: { isHover: boolean }) {
  return (
    <S_OWrapper
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.5, opacity: 0 }}
    >
      <S_O $isHover={isHover} />
    </S_OWrapper>
  );
}
