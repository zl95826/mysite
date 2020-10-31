import React from "react";
import { Row, Col } from "antd";
import Experience from "../../components/Experience";
import QueueAnim from "rc-queue-anim";
export default function About() {
  return (
    <section id="About" className="container" style={{ minHeight: "100vh" }}>
      <QueueAnim type={["right", "left"]} delay={100} interval={300}>
        <div key="a">
          <div
            style={{
              textAlign: "center",
              width: "100p%",
              height: "50vh",
              backgroundColor: "red",
            }}
          >
            image
          </div>
        </div>
        <Row justify="center" key="b">
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
      </QueueAnim>
      <hr />
      {/* <QueueAnim type="bottom" delay={200}>
        <Row justify="center" gutter={[36, 36]} key="0">
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
        </Row>
        <Row justify="center" gutter={[36, 36]} key="1">
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
      </QueueAnim> */}
    </section>
  );
}
