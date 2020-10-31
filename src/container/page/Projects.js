import React from "react";
import { Row, Col } from "antd";
import Project from "../../components/project/Project";
import k2 from "../../1.jpg";
import k3 from "../../KN2.jpg";
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
      src: k2,
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
      src: k3,
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
      src: k2,
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
      src: k3,
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
          <h3 style={{ textAlign: "center", marginBottom: "30px" }}>
            See my works below.
          </h3>
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
