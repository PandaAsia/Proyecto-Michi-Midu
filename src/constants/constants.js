export const Truns = {
  x: "✖️",
  o: "⭕",
};

export const board = Array(9).fill(null);

export const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

//Obtiene los datos de localStorage para poner el em useState para que inicialice
export const BoardInitial = () => {
  const boardFromStorage = window.localStorage.getItem("board");
  return boardFromStorage ? JSON.parse(boardFromStorage) : board;
};

export const TrunInitial = () => {
  const TurnFromStore = window.localStorage.getItem("turn");
  //esta parte reemplaza esto: TurnFromStore ? TurnFromStore : Truns.x;
  return TurnFromStore ?? Truns.x;
};
