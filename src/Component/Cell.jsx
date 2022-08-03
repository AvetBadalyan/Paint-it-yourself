import React from "react";
import { useState } from "react";
import "./../App.css";

export default function Cell({ square }) {
  const [painted, setPainted] = useState(false);
  // Show or hide the custom context menu
  const [isShown, setIsShown] = useState(false);
  const [color, setColor] = useState("blue");

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

  const handlePainting = () => {
    setPainted((prev) => !prev);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    setPainted(true);
  };
  return (
    <div
      onClick={() => {
        handlePainting();
        hideContextMenu();
      }}
      onDragOver={handleDragOver}
      className={painted ? `square ${color}` : "square"}
      onContextMenu={showContextMenu}
    >
      {isShown && (
        <div className="pop-up">
          {colors.map((color) => (
            <button
              className={`color-choose ${color}`}
              onClick={() => paintColor(color)}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
}
