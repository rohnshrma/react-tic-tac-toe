import React, { useState } from "react"; // Importing React and useState hook for managing state
import "./App.css"; // Importing external CSS for styling
import Board from "./Components/Board"; // Importing the Board component to render the game grid

// App component function
const App = () => {
  // State to hold the current state of the board (9 squares)
  const [squares, setSquares] = useState(Array(9).fill(null));
  // State to keep track of which player's turn it is (X or O)
  const [isXNext, setIsXNext] = useState(true);

  // Function to calculate the winner by checking all winning lines
  const calculateWinner = (squares) => {
    // Winning lines indices (rows, columns, and diagonals)
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // Horizontal lines
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // Vertical lines
      [0, 4, 8],
      [2, 4, 6], // Diagonals
    ];

    // Loop through each line and check if all squares in that line are equal and not null
    for (let line of lines) {
      const [a, b, c] = line; // Destructure the 3 indices in the line
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a]; // Return the winner ('X' or 'O')
      }
    }
    return null; // Return null if no winner is found
  };

  // Event handler for a square click (i.e., making a move)
  const handleClick = (i) => {
    // Ignore the click if the square is already filled or the game has a winner
    if (squares[i] || calculateWinner(squares)) return;

    // Create a copy of the current board state to modify it
    const newSquares = [...squares];
    // Set the value of the clicked square (X or O)
    newSquares[i] = isXNext ? "X" : "O";
    // Update the board state
    setSquares(newSquares);
    // Switch turns (if X just played, O will play next and vice versa)
    setIsXNext(!isXNext);
  };

  // Function to reset the game
  const resetGame = () => {
    // Reset the board and set the first player to X
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  };

  // Check if there is a winner after each move
  const winner = calculateWinner(squares);

  // Define the status message based on the game's state
  const status = winner
    ? `Winner: ${winner}` // If there's a winner, display the winner's name
    : squares.includes(null)
    ? `Next Player: ${isXNext ? "X" : "O"}` // If there are still moves left, indicate the next player
    : "It's a draw!"; // If the board is full and no winner, declare a draw

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1> {/* Title of the game */}
      <Board squares={squares} onClick={handleClick} />
      {/* Render the Board component with props */}
      <p className="status">{status}</p> {/* Display current status */}
      <button className="reset-button" onClick={resetGame}>
        {/* Reset button to restart the game */}
        Restart Game
      </button>
    </div>
  );
};

// Summary of App component logic:
// 1. The `App` component manages the game's state, including the squares (board) and the current player turn.
// 2. It calculates if there's a winner or if it's a draw after each move.
// 3. Displays the board using the `Board` component, passing the squares and click handler as props.
// 4. It updates the board after each move and changes the player's turn.
// 5. The user can restart the game with a reset button, which clears the board and starts the game with Player X.
export default App; // Exporting the App component to be used in other parts of the application
