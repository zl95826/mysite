import React, { useRef, useState, useEffect } from "react";
import { Col, Row } from "antd";
import { CSSTransition } from "react-transition-group";
import QueueAnim from "rc-queue-anim";
import styled from "styled-components";
import {
  Javascript,
  Wordpress,
  Html5,
  Css3,
  Redux,
  Mongodb,
  Graphql,
  Adobephotoshop,
  Adobeillustrator,
} from "@styled-icons/simple-icons";
const StyledWrapper = styled.div`
  color: red;
  width: 80px;
  height: 80px;
  margin: 0 auto;
  &:hover {
    color: black;
  }
`;
const skillHOC = (Component) => (props) => {
  return (
    <Col xs={{ span: 6 }} sm={{ span: 6 }} md={{ span: 4 }} lg={{ span: 4 }}>
      {/* @styled-icons/simple-icons/Javascript
     @styled-icons/simple-icons/Wordpress
     @styled-icons/fa-brands/Node
     @styled-icons/simple-icons/Mongodb
     @styled-icons/simple-icons/Html5
     @styled-icons/simple-icons/Css3
     @styled-icons/fa-brands/ReactLogo
     @styled-icons/simple-icons/Redux
     @styled-icons/simple-icons/Graphql
     @styled-icons/simple-icons/Adobephotoshop
     @styled-icons/simple-icons/Adobeillustrator
     @styled-icons/boxicons-logos/Git */}
      <StyledWrapper>
        <Component {...props} />
      </StyledWrapper>
    </Col>
  );
};

const ele = (
  <Row justify="center" gutter={[24, 24]}>
    {[
      Javascript,
      Wordpress,
      Html5,
      Css3,
      Redux,
      Mongodb,
      Graphql,
      Adobephotoshop,
      Adobeillustrator,
    ].map(
      (v, index) => {
        const Wrapped = skillHOC(v);
        return <Wrapped key={index} />;
      }
      // <Col
      //   xs={{ span: 6 }}
      //   sm={{ span: 6 }}
      //   md={{ span: 4 }}
      //   lg={{ span: 4 }}
      //   key={index}
      // >
      //<Skill component={v} key={index} />
      //  </Col>
    )}
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
        {/* {show ? ele : null} */}
      </Row>
      <div ref={myRef}>
        {/* <Row justify="center" gutter={[36, 36]}> */}
        {/* <CSSTransition in={show} timeout={1000} classNames="skills">
          <div className="sl">{ele}</div>
        </CSSTransition> */}
        {show ? <div className="sk">{ele}</div> : null}
        {/* </Row> */}
      </div>
    </div>
  );
}
