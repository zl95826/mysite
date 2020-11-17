import React from "react";
import Image from "./Image";
import ECommerce from "../eCommerce.jpg";
import Tgame from "../3T_game.png";
import ATOM from "../mockupATOM1.jpg";
import Burger from "../burger.jpg";
export default function Works() {
  const works = [
    {
      src: Burger,
      text: "React/Redux Project",
      bg: "rgba(255, 121, 121,0.6)",
      url: "https://burger-react-project-2019.web.app/",
    },
    {
      src: Tgame,
      text: "Unbeatable Tic Tac Toe game",
      bg: "#badc58",
      url: "https://zl95826.github.io/challenge/",
    },
    {
      src: ECommerce,
      text: "The eCommerce website is coming soon",
      classname: "recent-container2",
      bg: "rgba(249, 202, 36,1.0)",
      url: null,
    },
    {
      src: ATOM,
      text: "ATOM UI Redesign",
      classname: "recent-container2",
      bg: "#eeeeee",
      url: "/portfolio",
    },
  ];
  return (
    <>
      {works.map((value, index) => (
        <Image
          key={index}
          src={value.src}
          text={value.text}
          classname={value.classname ? value.classname : ""}
          color={value.bg}
          url={value.url}
        />
      ))}
    </>
  );
}
