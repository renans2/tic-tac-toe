import Board from "./components/Board";
import TicTacToeGameProvider from "./context/tic-tac-toe-game-context";
import { GlobalStyles } from "./styles/global-styles";

export default function App() {
  return (
    <TicTacToeGameProvider>
      <GlobalStyles />
      <Board />
    </TicTacToeGameProvider>
  );
}
