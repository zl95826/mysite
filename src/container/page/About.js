import React from "react";
import { Row, Col } from "antd";
import Experience from "../../components/Experience";
import about from "../../about.png";
export default function About() {
  return (
    <section id="About" style={{ minHeight: "100vh" }}>
      <div
        style={{
          textAlign: "center",
          width: "100%",
          backgroundColor: "#ffffff",
        }}
      >
        <div className="container">
          <Row justify="center">
            <Col
              xs={{ span: 20 }}
              sm={{ span: 20 }}
              md={{ span: 20 }}
              lg={{ span: 20 }}
              style={{ paddingBottom: "6%" }}
            >
              <h2 className="subtitle">ABOUT ME</h2>
              <h3 className="intro">
                Hi, I’m Betty! I love programming, designing, <br />
                traveling, hiking, and cooking.
              </h3>
              <img
                src={about}
                alt="about me"
                className="about-img"
                width="200"
                height="205"
              />
            </Col>
          </Row>
        </div>
      </div>
      <div style={{ backgroundColor: "#f4f4f4" }}>
        <div className="container about-p">
          <Row justify="center">
            <Col
              xs={{ span: 18 }}
              sm={{ span: 18 }}
              md={{ span: 16 }}
              lg={{ span: 16 }}
            >
              <p style={{ fontWeight: "700", fontSize: "18px" }}>
                I'm a freelance Front-end developer based in Portland, Oregon. I
                specializes in React, Redux, JavaScript/ES6, Node.js, HTML5,
                CSS3, UI design, and Responsive Design.
              </p>
              <p style={{ fontWeight: "700", fontSize: "18px" }}>
                On a personal level, I am highly-motivated, result oriented,
                self-driven, hard-working, fast learner and constantly seeking
                to improve my skills.
              </p>
            </Col>
          </Row>
        </div>
      </div>

      <div className="container">
        <Row
          justify="center"
          style={{
            borderRadius: "30px",
            marginTop: "-6%",
            marginBottom: "12%",
            backgroundColor: "#ffffff",
            border: "1px solid #eeeeee",
            boxShadow: "0 3px 5px #eeeeee",
          }}
        >
          <Col
            xs={{ span: 22 }}
            sm={{ span: 22 }}
            md={{ span: 20 }}
            lg={{ span: 20 }}
            style={{ paddingBottom: "4%" }}
          >
            <h2 className="subtitle">EXPERIENCE</h2>
            <Experience />
          </Col>
        </Row>
      </div>
    </section>
  );
}
