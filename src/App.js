import React, { useState } from "react";
import "./App.css";
import Board from "./Components/Board";

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const calculateWinner = (square) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let line of lines) {
      const [a, b, c] = line;
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }

    return null;
  };

  console.log(squares);

  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)) return;
    const newBoard = [...squares];
    newBoard[i] = isXNext ? "X" : "O";
    setSquares(newBoard);
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  };

  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner :${winner}`
    : squares.includes(null)
    ? `Next Player : ${isXNext ? "X" : "O"}`
    : "It's A Draw";

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <Board squares={squares} onClick={handleClick} />
      <p className="status">{status}</p>
      <button className="reset-button" onClick={resetGame}>
        Restart Game
      </button>
    </div>
  );
};

export default App;
