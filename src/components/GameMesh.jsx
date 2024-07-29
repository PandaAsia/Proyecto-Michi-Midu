/* eslint-disable react/prop-types */
import Square from "./Square";

const GameMesh = ({ boards, updateBoard }) => {
  return (
    <section className="game">
      {boards.map((el, index) => {
        return (
          <Square key={index} index={index} updateBoard={updateBoard}>
            {el}
          </Square>
        );
      })}
    </section>
  );
};
export default GameMesh;
