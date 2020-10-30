import React from "react";
import { Row, Col } from "antd";
import { CSSTransition } from "react-transition-group";
import Experience from "../../components/Experience";

export default function About() {
  return (
    <section id="About" className="container">
      <div style={{ textAlign: "center" }}>image</div>
      <Row justify="center">
        <Col span={24}>
          <h2 className="subtitle">ABOUT ME</h2>
        </Col>
        <Col span={20}>
          <h3 style={{ textAlign: "center", marginBottom: "30px" }}>
            Hi, I’m Betty! I love programming, designing, <br />
            traveling, hiking, and cooking.
          </h3>
          <p>
            I'm a freelance Front-end developer based in Portland, Oregon. I
            specializes in React, Redux, JavaScript/ES6, Node.js, HTML5, CSS3,
            UI design, and Responsive Design.
          </p>
          <p>
            On a personal level, I am highly-motivated, result oriented,
            self-driven, hard-working, fast learner and constantly seeking to
            improve my skills.
          </p>
        </Col>
        <Col span={20}>
          <h2 className="subtitle">EXPERIENCE</h2>
          <Experience />
        </Col>
      </Row>
      <hr />
      <Row justify="center" gutter={[36, 36]}>
        <Col
          xs={{ span: 20 }}
          sm={{ span: 20 }}
          md={{ span: 10 }}
          lg={{ span: 10 }}
        >
          <h2 className="subtitle" style={{ textAlign: "left" }}>
            ABOUT ME
          </h2>
          <h3>
            Hi, I’m Betty! I love programming, designing, <br />
            traveling, hiking, and cooking.
          </h3>
        </Col>
        <Col
          xs={{ span: 20 }}
          sm={{ span: 20 }}
          md={{ span: 10 }}
          lg={{ span: 10 }}
        >
          <p>
            I'm a freelance Front-end developer based in Portland, Oregon. I
            specializes in React, Redux, JavaScript/ES6, Node.js, HTML5, CSS3,
            UI design, and Responsive Design.
          </p>
          <p>
            On a personal level, I am highly-motivated, result oriented,
            self-driven, hard-working, fast learner and constantly seeking to
            improve my skills.
          </p>
          <p>onmouseenter onmouseleave</p>
        </Col>
        <Col
          xs={{ span: 20 }}
          sm={{ span: 20 }}
          md={{ span: 20 }}
          lg={{ span: 20 }}
        >
          <h2 className="subtitle" style={{ textAlign: "left" }}>
            EXPERIENCE
          </h2>
          <Experience />
        </Col>
      </Row>
    </section>
  );
}
