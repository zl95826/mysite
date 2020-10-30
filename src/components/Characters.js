import React from "react";

export default function Characters({ name }) {
  return (
    <>
      {name.split("").map((char, index) => {
        let style = { animationDelay: 0.5 + index / 10 + "s" };
        return (
          <span key={index} style={style} className="move-text">
            {char}
          </span>
        );
      })}
    </>
  );
}
