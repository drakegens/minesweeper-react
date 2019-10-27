import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { throwStatement } from "@babel/types";

function generateTenRandomMines() {
  //generate 10 random coordinates
  const mines = [];
  let i = 0;
  while (i < 10) {
    newValue = [
      Math.floor(Math.random() * 8) + 1,
      Math.floor(Math.random() * 10) + 1
    ];
    if (!mines.includes(newValue)) {
      mines.push();
      i++;
    }
  }
  return mines;
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
