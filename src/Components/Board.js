import React from "react"; // Importing React library to use JSX
import Square from "./Square"; // Importing the Square component to render individual squares

// Board component that takes in squares (state of each square) and the onClick handler as props
const Board = ({ squares, onClick }) => {
  return (
    <div className="board">
      {/* Board container */}
      {squares.map(
        (
          value,
          index // Iterate over the squares array and render a Square for each index
        ) => (
          <Square
            key={index} // Using the index as a key to uniquely identify each square
            value={value} // Passing the value of each square (X, O, or null)
            onClick={() => onClick(index)} // Passing the onClick handler for each square with the index
          />
        )
      )}
    </div>
  );
};

export default Board; // Exporting the Board component for use in other files
