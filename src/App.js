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
  const [color, setColor] = useState("purple");

  // Show the custom context menu
  const showContextMenu = (e) => {
    e.preventDefault();
    setIsShown(true);
  };

  const hideContextMenu = (e) => {
    setIsShown(false);
  };

  const colors = ["blue", "yellow", "red", "green", "black"];

  const paintColor = (color) => {
    setColor(color);
  };
  return (
    <div
      onContextMenu={showContextMenu}
      onClick={hideContextMenu}
      className="App"
    >
      {board.map((square) => (
        <Cell color={color} key={square} square={square} />
      ))}
      {isShown && (
        <div className="pop-up">
          {colors.map((color) => (
            <button
              onClick={() => paintColor(color)}
              className={`color-choose ${color}`}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
