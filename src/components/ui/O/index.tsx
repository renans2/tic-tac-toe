import { S_O } from "./styles";

export default function O({ isHover }: { isHover: boolean }) {
  return <S_O $isHover={isHover} />;
}
