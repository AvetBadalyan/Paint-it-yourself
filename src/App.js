import './App.css';
const screenWidth = window.screen.width;
const screenHeight = window.screen.height;
const squareWidth = screenWidth / 100;
let numberOfRows = screenHeight / squareWidth;
numberOfRows = Math.floor(numberOfRows / 10) * 10;
const numberOfSquares = numberOfRows * 100;

const board = Array.from(Array(numberOfSquares).keys());

const groupArray = board.reduce((acc, item, index) => {
  let currentIndex = index % (numberOfSquares/100);
  (acc[currentIndex] = acc[currentIndex] || []).push(item);
  return acc;
}, []);

function App() {
  return (
    <div className="App">
      {groupArray.map((row) => (
        <div key={Math.random()} className="row">
          {row.map((square) => (
            <div key={square} className="square">{square}</div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
