import React from "react";
import { Col, Button } from "antd";
export default function Image({ src, text, classname }) {
  return (
    <Col
      xs={{ span: 24 }}
      sm={{ span: 24 }}
      md={{ span: 12 }}
      lg={{ span: 12 }}
    >
      <div className={`recent-container ${classname}`}>
        <img src={src} alt={text} width={500} height={600} />
        <div className="recent-middle">
          <h3 style={{ color: "white", fontWeight: 600 }}>{text}</h3>
          <Button type="primary" href="" target="_blank">
            VIEW MORE
          </Button>
        </div>
      </div>
    </Col>
  );
}
