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
  color: red;
  width: 80px;
  height: 80px;
  margin: 0 auto;
  &:hover {
    color: black;
  }
  .name {
    display: none;
  }
  &:hover .name {
    display: block;
    margin-top: 6px;
    font-size: 16px;
    text-align: center;
  }
`;
const skillHOC = (Component) => (props) => {
  return (
    <Col xs={{ span: 6 }} sm={{ span: 6 }} md={{ span: 4 }} lg={{ span: 4 }}>
      <StyledWrapper>
        <Component />
        <p className="name">{props.value}</p>
      </StyledWrapper>
    </Col>
  );
};

const ele = (
  <Row justify="center" gutter={[24, 48]}>
    {[
      { component: Javascript, val: "JavaScript" },
      { component: ReactLogo, val: "React" },
      { component: Redux, val: "Redux" },
      { component: Graphql, val: "Graphql" },
      { component: Html5, val: "HTML5" },
      { component: Css3, val: "CSS3" },
      { component: Mongodb, val: "MongoDB" },
      { component: Node, val: "Node" },
      { component: Git, val: "Git" },
      { component: Wordpress, val: "Wordpress" },
      { component: Adobephotoshop, val: "Photoshop" },
      { component: Adobeillustrator, val: "Adobe illustrator" },
      //   ReactLogo,
      //   Redux,
      //   Graphql,
      //   Html5,
      //   Css3,
      //   Mongodb,
      //   Node,
      //   Git,
      //   Wordpress,
      //   Adobephotoshop,
      //   Adobeillustrator,
    ].map((v, index) => {
      const Wrapped = skillHOC(v.component);
      return <Wrapped key={index} value={v.val} />;
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
          <h2 className="subtitle" style={{ marginTop: "200px" }}>
            My Skills
          </h2>
        </Col>
      </Row>
      <div ref={myRef}>{show ? <div className="sk">{ele}</div> : null}</div>
    </div>
  );
}
