import { WINNER_COMBOS } from "../constants/constants.js";
export const checkWinner = (boardToCheck) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
  //si no hay ganador
  return null;
};

export const ceckEndGame = (newBoardh) => {
  //revisa si hay un empate
  //si no hay mas espacios vacios en el tablero

  return newBoardh.every((Square) => Square !== null);
};
