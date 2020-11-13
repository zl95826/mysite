import React, { Suspense, lazy } from "react";
import Characters from "../components/Characters";
import { Row, Col } from "antd";
import logo from "../logo.svg";
import Skills from "../components/Skills";
import Works from "../components/Works";
import bg5 from "../bg5.png";
//const Works = lazy(() => import("../components/Works"));
import Hero from "../components/Hero";
import { NavLink } from "react-router-dom";
const heroSection = (
  <div
    className="mobile-hero-image"
    style={{ backgroundImage: `url(${bg5})`, backgroundSize: "contain" }}
  />
);
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
          <NavLink to="./portfolio" className="show-me-more">
            Show me more
          </NavLink>
        </div>
        <Hero />
        {heroSection}
      </div>
      <div className="container">
        <h2 className="subtitle">My Recent Work</h2>
        <Row justify="center" gutter={[24, 24]}>
          {/* <Col span={24}>
            <h2 className="subtitle">My Recent Work</h2>
          </Col> */}
          {/* <Suspense fallback={<h2>Loading</h2>}> */}
          <Works />
          {/* </Suspense> */}
        </Row>
        <Skills />
      </div>
    </section>
  );
}
