import React from "react";
import Square from "./Square";

const Board = ({ squares, onClick }) => {
  console.log(squares);
  return (
    <div className="board">
      {squares.map((value, index) => (
        <Square
          key={index}
          value={value}
          onClick={() => {
            onClick(index);
          }}
        />
      ))}
    </div>
  );
};

export default Board;
