import React from "react";
import { useState } from "react";
import "./../App.css";

export default function Cell({
  square,
  hideContextMenu,
  chooseColor,
  board,
  handlePainting,
  handleDragOver,
}) {
  return (
    <div
      onClick={() => {
        handlePainting(square.id);
        hideContextMenu();
      }}
      onDragOver={() => handlePainting(square.id)}
      className="square"
      style={{ backgroundColor: square.color }}
    ></div>
  );
}
