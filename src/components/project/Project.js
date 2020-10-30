import React from "react";
import { Col, Button } from "antd";
import project from "./project.module.css";
import { SwapRightOutlined } from "@ant-design/icons";
export default function Project({
  title,
  desc,
  stack,
  client,
  role,
  src,
  text,
  url,
}) {
  return (
    <Col span={24}>
      <div className={project.block}>
        <h2 className="subtitle" style={{ textAlign: "left" }}>
          {title}
        </h2>
        <h3>{desc}</h3>
        <div className={project.desc}>
          <p>Technologies used to create the project:</p>
          <p>{stack}</p>
        </div>
        <div className={project.client_role}>
          <p>
            <b>Client</b>: {client}
          </p>
          <p>
            <b>Role</b>: {role}
          </p>
        </div>
        <Button type="primary" href={url} target="_blank">
          VIEW WEBSITE <SwapRightOutlined />
        </Button>
        <div
          className={project.image}
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right bottom",
          }}
        ></div>
        <div className={project.img_tablet}>
          <img src={src} alt={text} width="500" height="500" />
        </div>
      </div>
    </Col>
  );
}
