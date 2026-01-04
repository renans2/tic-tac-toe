import { useTicTacToe } from "../../context/tic-tac-toe-game-context";
import { S_InfoContainer } from "./styles";

export default function Info() {
  const { gameStatus, nextPlayer, reset } = useTicTacToe();

  return (
    <S_InfoContainer>
      {gameStatus.status === "not_over" ? (
        <>Next to play: {nextPlayer}</>
      ) : gameStatus.result === "draw" ? (
        <>Draw</>
      ) : (
        <>{gameStatus.result} won!</>
      )}

      {gameStatus.status === "over" && (
        <button onClick={reset}>Play again</button>
      )}
    </S_InfoContainer>
  );
}
