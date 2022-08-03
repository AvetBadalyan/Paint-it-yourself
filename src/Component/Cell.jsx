import React from "react";
import { useState } from "react";
import "./../App.css";

export default function Cell({ square, color }) {
  const [painted, setPainted] = useState(false);
  const handlePainting = () => {
    setPainted((prev) => !prev);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    setPainted(true);
  };
  return (
    <div
      onClick={handlePainting}
      onDragOver={handleDragOver}
      className={painted ? `square ${color}` : "square"}
    ></div>
  );
}
