import { useTicTacToe } from "../../context/tic-tac-toe-game-context";
import { S_InfoContainer } from "./styles";

export default function Info() {
  const { gameStatus, nextPlayer, reset } = useTicTacToe();
  const toDiplay =
    gameStatus.status === "not_over" ? (
      <span>
        <em>{nextPlayer}</em> Turn
      </span>
    ) : gameStatus.result === "draw" ? (
      "Draw"
    ) : (
      <span>
        <em>{nextPlayer}</em> Won
      </span>
    );

  return (
    <S_InfoContainer $nextPlayer={nextPlayer}>
      {toDiplay}
      {gameStatus.status === "over" && (
        <button onClick={reset}>Play again</button>
      )}
    </S_InfoContainer>
  );
}
