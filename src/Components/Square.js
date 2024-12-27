import React from "react"; // Importing React for JSX syntax
import "./Square.css"; // Importing the styling for individual squares

// Square component to render each individual square
const Square = ({ value, onClick }) => {
  return (
    <button className="square" onClick={onClick}>
      {" "}
      {/* Button representing the square */}
      {value} {/* Display the value of the square (X, O, or null) */}
    </button>
  );
};

export default Square; // Exporting the Square component
