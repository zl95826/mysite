import React from "react";
import { Col } from "antd";
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
          <h3 style={{ color: "white" }}>{text}</h3>
        </div>
      </div>
    </Col>
  );
}
