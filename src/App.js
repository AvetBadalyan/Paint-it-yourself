import { useState } from "react";
import "./App.css";
const screenWidth = window.screen.width;
const screenHeight = window.screen.height;
const squareWidth = screenWidth / 100;
let numberOfRows = screenHeight / squareWidth;
numberOfRows = Math.floor(numberOfRows / 10) * 10;
const numberOfSquares = numberOfRows * 100;

const board = Array.from(Array(numberOfSquares).keys());

function App() {

  return (
    <div className="App">
      {board.map((square) => (
        <div key={square} className="square">
          <div>
            {square}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       {groupArray.map((row) => (
//         <div key={Math.random()} className="row">
//           {row.map((square) => (
//             <div key={square} className="square">{square}</div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;
