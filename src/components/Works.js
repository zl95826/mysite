import React from "react";
import Image from "./Image";
import k2 from "../1.jpg";
import k3 from "../KN2.jpg";
import k1 from "../KN4.jpg";
export default function Works() {
  const works = [
    { src: k2, text: "text" },
    { src: k3, text: "text2" },
    { src: k3, text: "text2", classname: "recent-container2" },
    { src: k1, text: "text2", classname: "recent-container2" },
  ];
  return (
    <>
      {works.map((value, index) => (
        <Image
          key={index}
          src={value.src}
          text={value.text}
          classname={value.classname ? value.classname : ""}
        />
      ))}
    </>
  );
}
