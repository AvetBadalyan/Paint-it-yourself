import { useRef, useState } from "react";
import "./App.css";
import Cell from "./Component/Cell";
const screenWidth = window.screen.width;
const screenHeight = window.screen.height;
const squareWidth = screenWidth / 100;
let numberOfRows = screenHeight / squareWidth;
numberOfRows = Math.floor(numberOfRows / 10) * 10;
const numberOfSquares = numberOfRows * 100;

const board = Array.from(Array(numberOfSquares).keys(), (value) => ({
  id: value,
  color: "#ffffff",
}));

function App() {
  const [chooseColor, setChooseColor] = useState("#FFFF00");
  const [boardData, setBoardData] = useState(board);

  // Show or hide the custom context menu
  const [isShown, setIsShown] = useState(false);

  const handlePainting = (id) => {
    const newBoard = boardData.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          color: chooseColor,
        };
      }
      return item;
    });

    setBoardData(newBoard);
  };

  // Show the custom context menu
  const showContextMenu = (e) => {
    e.preventDefault();
    setIsShown(true);
  };

  const hideContextMenu = (e) => {
    setIsShown(false);
  };

  return (
    <div className="App" onContextMenu={showContextMenu}>
      {boardData.map((square) => (
        <Cell
          board={boardData}
          square={square}
          hideContextMenu={hideContextMenu}
          chooseColor={chooseColor}
          handlePainting={handlePainting}
          key={square.id}
        />
      ))}
      {isShown && (
        <div className="pop-up">
          <label>
            <p>Select a color</p>
            <input
              type="color"
              onChange={(e) => setChooseColor(e.target.value)}
              value="#000000"
              name="choose a color"
            />
          </label>
        </div>
      )}
    </div>
  );
}

export default App;
