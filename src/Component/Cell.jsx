import React from "react";
import { useState } from "react";
import "./../App.css";

export default function Cell({
  square,
  hideContextMenu,
  chooseColor,
  board,
  handlePainting,
}) {
  const [painted, setPainted] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setPainted(true);
  };
  const paintColor = (color) => {
    // setChooseColor(color);
    setPainted(true);
  };
  return (
    <div
      onClick={() => {
        handlePainting(square.id);
        hideContextMenu();
      }}
      onDragOver={handleDragOver}
      className="square"
      style={{ backgroundColor: square.color }}
    ></div>
  );
}
