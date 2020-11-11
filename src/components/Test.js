import React, { useCallback } from "react";
import { useSpring, animated } from "react-spring";
import bg1 from "../bg1.png";
import bg2 from "../bg2.png";
import bg3 from "../bg3.png";
import bg4 from "../bg4.png";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 8}px,${y / 10}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 6}px,${y / 10}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 4}px,${y / 8}px,0)`;
// const trans5 = (x, y) => (y > 0 ? `0.48` : `0.8`);

export default function Test() {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  const onMove = useCallback(
    (e) => set({ xy: calc(e.clientX, e.clientY) }),
    []
  );
  return (
    <div
      onMouseMove={onMove}
      className="hero-image-part"
      //onMouseMove={(e) => set({ xy: calc(e.clientX, e.clientY) })}
      //onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      //   style={{
      //     width: "100%",
      //     minHeight: "100%",
      //     position: "absolute",
      //     right: "0",
      //     bottom: "30px",
      //   }}
    >
      <animated.img
        className="test"
        style={{
          width: "800px",
          height: "auto",
          position: "absolute",
          right: "0",
          bottom: "0",
          zIndex: "5",
          transform: props.xy.interpolate(trans1),
        }}
        src={bg1}
        alt=""
        width={500}
        height={600}
      />
      <animated.img
        className="test2"
        style={{
          width: "800px",
          height: "auto",
          position: "absolute",
          right: "30px",
          bottom: "-20px",
          zIndex: "1",
          transform: props.xy.interpolate(trans2),
          // opacity: props.xy.interpolate(trans5),
        }}
        src={bg2}
        alt=""
        width={500}
        height={600}
      />
      <animated.img
        className="test2"
        style={{
          width: "800px",
          height: "auto",
          position: "absolute",
          right: "30px",
          bottom: "0px",
          zIndex: "10",
          transform: props.xy.interpolate(trans3),
        }}
        src={bg3}
        alt=""
        width={500}
        height={600}
      />
      <animated.img
        className="test2"
        style={{
          width: "110px",
          height: "auto",
          position: "absolute",
          right: "450px",
          bottom: "400px",
          zIndex: "10",
          transform: props.xy.interpolate(trans4),
        }}
        src={bg4}
        alt=""
        width={500}
        height={600}
      />
    </div>
  );
}
