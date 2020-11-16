import React, { useRef, useState, useEffect } from "react";
import { Col, Row } from "antd";
import styled from "styled-components";
import {
  Javascript,
  Wordpress,
  Redux,
  Mongodb,
  Graphql,
  Html5,
  Css3,
  Adobephotoshop,
  Adobeillustrator,
  ReactLogo,
  Git,
} from "@styled-icons/simple-icons";
import { Node } from "@styled-icons/fa-brands";
const StyledWrapper = styled.div`
  width: 100%;
  position: relative;
  height: 100%;
  padding: 25%;
  color: ${(props) => props.color};
  &:hover {
    color: white;
  }
  .name {
    display: none;
  }
  &:hover .name {
    display: block;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 6px;
    font-size: 16px;
    font-weight: 900;
    text-align: center;
  }
`;

const skillHOC = (Component) => (props) => {
  const [hover, setHover] = useState(false);
  const toggleHover = () => setHover((pre) => !pre);
  return (
    <Col
      xs={{ span: 12 }}
      sm={{ span: 8 }}
      md={{ span: 6 }}
      lg={{ span: 4 }}
      className="skill-item"
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      style={{
        backgroundColor: hover ? props.color : "#ffffff",
      }}
    >
      <StyledWrapper color={props.color}>
        <Component />
        <p className="name">{props.value}</p>
      </StyledWrapper>
    </Col>
  );
};

const ele = (
  <Row justify="center">
    {/* <Row justify="center" gutter={[24, 48]}> */}
    {[
      { component: Javascript, val: "JavaScript", color: "#f0db4f" },
      { component: ReactLogo, val: "React", color: "#61DBFB" },
      { component: Redux, val: "Redux", color: "#764abc" },
      { component: Graphql, val: "GraphQL", color: "#e535ab" },
      { component: Html5, val: "HTML5", color: "#e34c26" },
      { component: Css3, val: "CSS3", color: "#264de4" },
      { component: Mongodb, val: "MongoDB", color: "#4DB33D" },
      { component: Node, val: "Node", color: "#3C873A" },
      { component: Git, val: "Git", color: "#F1502F" },
      { component: Wordpress, val: "Wordpress", color: "#21759b" },
      { component: Adobephotoshop, val: "Photoshop", color: "#00a4e4" },
      {
        component: Adobeillustrator,
        val: "Adobe illustrator",
        color: "#fbb034",
      },
    ].map((v, index) => {
      const Wrapped = skillHOC(v.component);
      return <Wrapped key={index} value={v.val} color={v.color} />;
    })}
  </Row>
);

export default function Skills() {
  const myRef = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const pos = myRef.current.getBoundingClientRect().top;
    const onScroll = () => {
      if (!show && pos < window.pageYOffset + window.innerHeight) {
        setShow(true);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="container">
      <Row justify="center">
        <Col span={24}>
          <h2 className="subtitle">My Skills</h2>
        </Col>
      </Row>
      <div ref={myRef}>{show ? <div className="sk">{ele}</div> : null}</div>
    </div>
  );
}
