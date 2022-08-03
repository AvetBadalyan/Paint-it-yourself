import { useState } from "react";
import "./App.css";
import Cell from "./Component/Cell";
const screenWidth = window.screen.width;
const screenHeight = window.screen.height;
const squareWidth = screenWidth / 100;
let numberOfRows = screenHeight / squareWidth;
numberOfRows = Math.floor(numberOfRows / 10) * 10;
const numberOfSquares = numberOfRows * 100;

const board = Array.from(Array(numberOfSquares).keys());

function App() {
  // Show or hide the custom context menu
  const [isShown, setIsShown] = useState(false);

  // Show the custom context menu
  const showContextMenu = (e) => {
    e.preventDefault();
    setIsShown(true);
  };

  const hideContextMenu = (e) => {
    setIsShown(false);
  };

  const paintBlue = () => {

  }
  return (
    <div
      onContextMenu={showContextMenu}
      onClick={hideContextMenu}
      className="App"
    >
      {board.map((square) => (
        <Cell key={square} square={square} />
      ))}
      {isShown && (
        <div className="pop-up">
          <button className="color-choose blue"></button>
          <button className="color-choose yellow"></button>
          <button className="color-choose red"></button>
          <button className="color-choose green"> </button>
          <button className="color-choose black"></button>
        </div>
      )}
    </div>
  );
}

export default App;
