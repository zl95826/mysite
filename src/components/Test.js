import React from "react";
import { useSpring, animated } from "react-spring";
import bg1 from "../bg1.png";
import bg2 from "../bg2.png";
import bg3 from "../bg3.png";
import bg4 from "../bg4.png";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 12}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 8}px,${y / 12}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 6}px,${y / 12}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 4}px,${y / 10}px,0)`;
// const trans5 = (x, y) => (y > 0 ? `0.48` : `0.8`);

export default function Test() {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  //   const onMove = useCallback(
  //     (e) => set({ xy: calc(e.clientX, e.clientY) }),
  //     []
  //   );
  return (
    <div
      onMouseMove={(e) => set({ xy: calc(e.clientX, e.clientY) })}
      className="hero-image-part"
      //onMouseMove={(e) => set({ xy: calc(e.clientX, e.clientY) })}
      //onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <animated.div
        className="hero-item"
        style={{
          right: "0",
          bottom: "0",
          zIndex: "2",
          transform: props.xy.interpolate(trans1),
          backgroundImage: `url(${bg1})`,
          backgroundSize: "contain",
        }}
      />
      <animated.div
        className="hero-item"
        style={{
          right: "30px",
          bottom: "-20px",
          zIndex: "1",
          transform: props.xy.interpolate(trans2),
          backgroundImage: `url(${bg2})`,
          backgroundSize: "contain",
          // opacity: props.xy.interpolate(trans5),
        }}
      />
      <animated.div
        className="hero-item"
        style={{
          right: "30px",
          bottom: "0px",
          zIndex: "3",
          transform: props.xy.interpolate(trans3),
          backgroundImage: `url(${bg3})`,
          backgroundSize: "contain",
        }}
      />
      <animated.div
        className="hero-item2"
        style={{
          width: "110px",
          height: "110px",
          position: "absolute",
          right: "400px",
          bottom: "400px",
          zIndex: "4",
          transform: props.xy.interpolate(trans4),
          backgroundImage: `url(${bg4})`,
          backgroundSize: "contain",
        }}
      />
    </div>
  );
}
