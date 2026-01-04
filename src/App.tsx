import Board from "./components/Board";
import Info from "./components/Info";
import TicTacToeGameProvider from "./context/tic-tac-toe-game-context";
import { GlobalStyles } from "./styles/global-styles";

export default function App() {
  return (
    <TicTacToeGameProvider>
      <GlobalStyles />
      <Info />
      <Board />
    </TicTacToeGameProvider>
  );
}
