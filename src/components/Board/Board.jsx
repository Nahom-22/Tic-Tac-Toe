import { useState } from "react";
import Square from "../Square/Square";
import "./board.css";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const handleClick = (i) => {
    if(squares[i]){
        return
    }
    let anotherSquares = squares.slice();
    if (isXNext) {
      anotherSquares[i] = "X";
    } else {
      anotherSquares[i] = "O";
    }
    setSquares(anotherSquares);
    setIsXNext(!isXNext);
  };
  return (
    <div className="board">
      <div className="board-row">
        <Square value={squares[0]} onSetSquare={() => handleClick(0)} />
        <Square value={squares[1]} onSetSquare={() => handleClick(1)} />
        <Square value={squares[2]} onSetSquare={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSetSquare={() => handleClick(3)} />
        <Square value={squares[4]} onSetSquare={() => handleClick(4)} />
        <Square value={squares[5]} onSetSquare={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSetSquare={() => handleClick(6)} />
        <Square value={squares[7]} onSetSquare={() => handleClick(7)} />
        <Square value={squares[8]} onSetSquare={() => handleClick(8)} />
      </div>
    </div>
  );
};

export default Board;
