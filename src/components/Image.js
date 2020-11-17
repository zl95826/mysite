import React from "react";
import { Col, Button } from "antd";
export default function Image({ src, text, classname, color, url }) {
  return (
    <Col
      xs={{ span: 24 }}
      sm={{ span: 24 }}
      md={{ span: 12 }}
      lg={{ span: 12 }}
      style={{ padding: "0 2% 5% 2%" }}
    >
      <div
        className={`recent-container ${classname}`}
        style={{
          backgroundImage: `url(${src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center center",
          boxShadow: "8px 12px 3px #eeeeee",
          backgroundColor: color,
        }}
      >
        {/* <img src={src} alt={text} width={500} height={600} /> */}
        <div className="recent-middle">
          <h3
            style={{
              color: "white",
              fontWeight: 600,
              textAlign: "center",
              width: "85%",
            }}
          >
            {text}
          </h3>
          {url && (
            <Button
              type="primary"
              href={url}
              target="_blank"
              className="view-more"
            >
              VIEW MORE
            </Button>
          )}
        </div>
      </div>
    </Col>
  );
}
