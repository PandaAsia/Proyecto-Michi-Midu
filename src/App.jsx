import { useState } from "react";
import Square from "./components/Square";
import confetti from "canvas-confetti";
import {
  board,
  Truns,
  BoardInitial,
  TrunInitial,
} from "./constants/constants.js";
import { checkWinner, ceckEndGame } from "./logic/logic.js";
import WinnerModal from "./components/winnerModal.jsx";

function App() {
  const [boards, setBoards] = useState(BoardInitial);
  const [turn, setTurn] = useState(TrunInitial);
  //el null no hay ganador, false es hay empate
  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    //no actuliza esta posicion si ya tiene algo
    if (boards[index] || winner) return;
    const newBoard = [...boards];
    newBoard[index] = turn;
    setBoards(newBoard);
    //para cambiar el valor
    const newTurn = turn === Truns.x ? Truns.o : Truns.x;
    setTurn(newTurn);

    //guardar Partida
    window.localStorage.setItem("board", JSON.stringify(newBoard));
    window.localStorage.setItem("turn", newTurn);

    //revisar si hay ganador
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
      confetti();
      //Todo: check if games is over
    } else if (ceckEndGame(newBoard)) {
      setWinner(false);
    }
  };

  const Resetgame = () => {
    setBoards(board);
    setTurn(Truns.x);
    setWinner(null);
    //se debe eliminar para cuando vuelva cargar los localstores debe estar vacio
    window.localStorage.removeItem("board");
    window.localStorage.removeItem("turn");
  };
  return (
    <>
      <main className="board">
        <h1>Juego del Michi</h1>
        <button onClick={Resetgame}>Resert Game</button>
        <section className="game">
          {boards.map((el, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {el}
              </Square>
            );
          })}
        </section>
        <section className="turn">
          <Square isSelected={turn === Truns.x}>{Truns.x}</Square>
          <Square isSelected={turn === Truns.o}>{Truns.o}</Square>
        </section>

        <WinnerModal winner={winner} Resetgame={Resetgame} />
      </main>
    </>
  );
}

export default App;
