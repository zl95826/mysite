import React from "react";
import { Row, Col } from "antd";
import Project from "../../components/project/Project";
import ZDG from "../../portfolio/zdg.png";
import Bunbao from "../../portfolio/bb2.png";
import Arrow from "../../portfolio/arrow.png";
import HL from "../../portfolio/hl.png";
import MOD from "../../portfolio/mod.png";

const portfolio = [
  {
    title: "BunBao",
    desc:
      "Creating the web application with responsive design that allows customers to order food online and manage orders by admin panel",
    stack: "React, Redux, HTML, CSS, Redux Thunk, GraphQL, Ant Design",
    client: "BunBao",
    role: "UX/UI design, Front-end",
    src: Bunbao,
    url: "https://bunbao.com/",
    color: "#f9f9f9",
  },
  {
    title: "ZERODAY Group",
    desc: "Creating the company website with modern and responsive design",
    stack: "JavaScript, jQuery, PHP, Wordpress, HTML, CSS",
    client: "Zero Day Group",
    role: "Front-end",
    src: ZDG,
    url: "https://www.zerodaygroup.com/",
    color: "#003184",
  },
  {
    title: "HealthLink Systems",
    desc:
      "Refreshing the corporate website to promote their healthcare management system",
    stack: "JavaScript, jQuery, PHP, Wordpress, HTML, CSS",
    client: "Health Link Systems",
    role: "UX/UI design, Front-end",
    src: HL,
    url: "http://www.healthlinksys.com/",
    color: "#ffaf40",
  },
  {
    title: "ATOM",
    desc: "Redesigning the user interface",
    stack: "Photoshop, Illustrator",
    client: "Accenture ATOM",
    role: "UX/UI design",
    src: Arrow,
    url: "#",
    color: "#702dda",
  },
  {
    title: "Modintegration",
    desc:
      "Designing a perfect look and modern feel, and translating the design to a company website to promote their smart system",
    stack:
      "HTML, CSS, JavaScript, PHP, Wordpress, jQuery, Photoshop, Illustrator",
    client: "Modintegration",
    role: "UX/UI design, Front-end",
    src: MOD,
    url: "https://modintegration.com/",
    color: "#29c2f6",
  },
];
export default function Projects() {
  return (
    <section
      id="portfolio"
      className="container"
      style={{ minHeight: "200vh" }}
    >
      <Row justify="center">
        <Col span={24}>
          <h2 className="subtitle">WHAT I DID</h2>
        </Col>
        <Col span={20}>
          <h3 className="intro">See my works below.</h3>
        </Col>
      </Row>

      <Row justify="center" className="container">
        {portfolio.map((val, index) => (
          <Project {...val} key={index} />
        ))}
      </Row>
    </section>
  );
}
