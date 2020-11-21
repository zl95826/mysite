import React from "react";
import { Row, Col } from "antd";
import Project from "../../components/project/Project";
import ZDG from "../../portfolio/zdg.png";
import Bunbao from "../../portfolio/bb2.png";
import Arrow from "../../portfolio/arrow.png";
import HL from "../../portfolio/hl.png";
import QueueAnim from "rc-queue-anim";
export default function Projects() {
  const portfolio = [
    {
      title: "Content",
      desc:
        "a complete redesign focusing on mobile use, information and leads.",
      stack: "HTML, CSS, JavaScript, PHP, Wordpress, React",
      client: "testtesttesttesttest",
      role: "UX/UI design, Front-end",
      src: Bunbao,
      text: "texttesttest",
      url: "https://www.google.com/",
    },
    {
      title: "Content",
      desc:
        "a complete redesign focusing on mobile use, information and leads.",
      stack: "HTML, CSS, JavaScript, PHP, Wordpress, React",
      client: "testtesttesttesttest",
      role: "twa",
      src: ZDG,
      text: "UX/UI design, Front-end",
      url: "https://www.google.com/",
    },
    {
      title: "Content",
      desc:
        "a complete redesign focusing on mobile use, information and leads.",
      stack: "HTML, CSS, JavaScript, PHP, Wordpress, React",
      client: "testtesttesttesttest",
      role: "UX/UI design, Front-end",
      src: Arrow,
      text: "texttesttest",
      url: "https://www.google.com/",
    },
    {
      title: "Content",
      desc:
        "a complete redesign focusing on mobile use, information and leads.",
      stack: "HTML, CSS, JavaScript, PHP, Wordpress, React",
      client: "testtesttesttesttest",
      role: "twa",
      src: HL,
      text: "UX/UI design, Front-end",
      url: "https://www.google.com/",
    },
  ];
  return (
    <section
      id="portfolio"
      className="container"
      style={{ minHeight: "100vh" }}
    >
      <Row justify="center">
        <Col span={24}>
          <h2 className="subtitle">WHAT I DID</h2>
        </Col>
        <Col span={20}>
          <h3 className="intro">See my works below.</h3>
        </Col>
      </Row>

      <QueueAnim
        type={["right", "left"]}
        delay={100}
        duration={600}
        interval={600}
      >
        {portfolio.map((val, index) => (
          <Row justify="center" key={index}>
            <Project {...val} />
          </Row>
        ))}
      </QueueAnim>
    </section>
  );
}
