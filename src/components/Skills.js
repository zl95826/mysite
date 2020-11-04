import React, { useRef, useState, useEffect } from "react";
import { Col, Row } from "antd";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
import { Javascript, Wordpress } from "@styled-icons/simple-icons";

const Skill = ({ component }) => {
  const Test = styled(component)`
    color: red;
    width: 100px;
    height: 100px;
    &:hover {
      color: black;
    }
  `;
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
      <Test />
    </Col>
  );
};
// const ele = (
//   <Col xs={{ span: 6 }} sm={{ span: 6 }} md={{ span: 4 }} lg={{ span: 4 }}>
//     <Skill component={Javascript} />
//   </Col>
// );
const ele2 = (
  <Row justify="center" gutter={[36, 36]}>
    {[Javascript, Wordpress].map((v, index) => (
      <Col
        xs={{ span: 6 }}
        sm={{ span: 6 }}
        md={{ span: 4 }}
        lg={{ span: 4 }}
        key={index}
      >
        <Skill component={v} />
      </Col>
    ))}
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
        <CSSTransition in={show} timeout={1000} classNames="skills">
          <div className="sl">{ele2}</div>
        </CSSTransition>
        {/* </Row> */}
      </div>
    </div>
  );
}
