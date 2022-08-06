import React from "react";
import "./../App.css";

export default function Cell({ square, hideContextMenu, handlePainting }) {
  return (
    <div
      className="square"
      onClick={() => {
        handlePainting(square.id);
        hideContextMenu();
      }}
      onDragOver={() => handlePainting(square.id)}
      style={{ backgroundColor: square.color }}
    ></div>
  );
}
