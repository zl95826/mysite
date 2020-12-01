import React from "react";
import { Col, Button } from "antd";
import project from "./project.module.css";
import { SwapRightOutlined } from "@ant-design/icons";
const SingleProject = ({
  title,
  desc,
  stack,
  client,
  role,
  src,
  color,
  url,
}) => {
  return (
    <Col span={24} className="po">
      <div className={project.block} style={{ backgroundColor: color }}>
        <div className={project.content}>
          <h2 className="subtitle" style={{ textAlign: "left" }} key="0">
            {title}
          </h2>
          <h3 key="1">{desc}</h3>
          <div className={project.desc} key="2">
            <p>Technologies used to create the project:</p>
            <p>{stack}</p>
          </div>
          <div className={project.client_role} key="3">
            <p>
              <b>Client</b>: {client}
            </p>
            <p>
              <b>Role</b>: {role}
            </p>
          </div>
          <Button
            key="4"
            type="primary"
            href={url}
            target="_blank"
            className={`view-more ${project.button}`}
          >
            VIEW WEBSITE <SwapRightOutlined />
          </Button>
        </div>
        <div
          className={project.image}
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </Col>
  );
};

const Project = React.memo(SingleProject);
export default Project;
