import { useTicTacToe } from "../../context/tic-tac-toe-game-context";
import type { Index } from "../../types/winning-line";
import Square from "../Square";
import { S_Board } from "./styles";

export default function Board() {
  const { board } = useTicTacToe();

  return (
    <S_Board>
      {board.map((line, i) =>
        line.map((_, j) => (
          <Square key={`${i}-${j}`} i={i as Index} j={j as Index} />
        ))
      )}
    </S_Board>
  );
}
