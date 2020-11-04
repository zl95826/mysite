import React, { Suspense, lazy } from "react";
import Characters from "../components/Characters";
import { Row, Col } from "antd";
import logo from "../logo.svg";
import Skills from "../components/Skills";
import Works from "../components/Works";
//const Works = lazy(() => import("../components/Works"));
export default function HomeContent() {
  return (
    <section id="home">
      <div className="home-layout-content">
        <div className="hello">
          <h1>
            <span className="greeting">Hello,</span>
            <br />
            I'm <Characters name="BETTY" />
            <br />a Front-end Developer
          </h1>
          <h3>with a passion for learning</h3>
        </div>
      </div>
      <div className="container">
        <Row justify="center" gutter={[24, 24]}>
          <Col span={24}>
            <h2 className="subtitle">My Recent Work</h2>
          </Col>
          {/* <Suspense fallback={<h2>Loading</h2>}> */}
          <Works />
          {/* </Suspense> */}
        </Row>
        <Skills />
      </div>
    </section>
  );
}
