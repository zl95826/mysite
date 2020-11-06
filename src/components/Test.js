import React, { useState, useEffect } from "react";
import logo from "../logo.svg";
import k2 from "../1.jpg";

export default function Test() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const handleMove = (e) => {
    setPos((pre) => ({
      x: (e.clientX - pre.x) / 20,
      y: (e.clientY - pre.y) / 20,
    }));
  };

  return (
    <div
      onMouseMove={handleMove}
      style={{
        width: "80%",
        height: "50%",
        position: "absolute",
        right: "100px",
        top: "200px",
      }}
    >
      <img
        className="test"
        style={{ transform: `translate(${pos.x}px,${pos.y}px)` }}
        src={logo}
        alt=""
        width={500}
        height={600}
      />
      <img
        className="test2"
        style={{ transform: `translate(${pos.x - 10}px,${pos.y - 10}px)` }}
        src={k2}
        alt=""
        width={500}
        height={600}
      />
    </div>
  );
}
