import { useTicTacToe } from "../../context/tic-tac-toe-game-context";
import type { Index } from "../../types/winning-line";
import Square from "../Square";
import { S_Board } from "./styles";

export default function Board() {
  const { board, play } = useTicTacToe();

  return (
    <S_Board>
      {board.map((line, i) =>
        line.map((_, j) => (
          <Square
            key={`${i}-${j}`}
            onClick={() => play({ i: i as Index, j: j as Index })}
            squareValue={board[i][j]}
          />
        ))
      )}
    </S_Board>
  );
}
