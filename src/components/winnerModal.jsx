/* eslint-disable react/prop-types */
import Square from "./Square";

const WinnerModal = ({ winner, Resetgame }) => {
  if (winner === null) return null;
  const winnertText = winner === false ? "Empate" : "Ganó";
  return (
    <section className="winner">
      <div className="text">
        <h2>{winnertText}</h2>
        <header className="win">{winner && <Square>{winner}</Square>}</header>
        <footer>
          <button onClick={Resetgame}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  );
};
export default WinnerModal;
