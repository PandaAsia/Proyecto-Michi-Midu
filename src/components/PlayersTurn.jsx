/* eslint-disable react/prop-types */
import Square from "./Square";

const PlayerTurn = ({ turn, Truns }) => {
  return (
    <section className="turn">
      <Square isSelected={turn === Truns.x}>{Truns.x}</Square>
      <Square isSelected={turn === Truns.o}>{Truns.o}</Square>
    </section>
  );
};
export default PlayerTurn;
