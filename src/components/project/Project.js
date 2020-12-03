import React from "react";
import { Col, Button } from "antd";
import project from "./project.module.css";
import { SwapRightOutlined } from "@ant-design/icons";
import { Parallax } from "rc-scroll-anim";
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
  const windowsize =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  if (windowsize > 1023) {
    return (
      <Col span={24} className="po">
        <div className={project.block} style={{ backgroundColor: color }}>
          <div className={project.content}>
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
            <Parallax
              always={false}
              animation={{
                translateY: 0,
                opacity: 1,
                playScale: [0.25, 0.4],
              }}
              style={{
                transform: "translateY(180px)",
                opacity: 0,
              }}
            >
              <Button
                type="primary"
                href={url}
                target="_blank"
                className={`view-more ${project.button}`}
              >
                VIEW WEBSITE <SwapRightOutlined />
              </Button>
            </Parallax>
          </div>
          <Parallax
            always={false}
            animation={{ translateX: 0, opacity: 1, playScale: [0.3, 0.7] }}
            style={{ transform: "translateX(200px)", opacity: 0 }}
            className={project.image}
          >
            <div
              style={{
                backgroundImage: `url(${src})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
          </Parallax>
        </div>
      </Col>
    );
  } else {
    return (
      <Col span={24} className="po">
        <div className={project.block} style={{ backgroundColor: color }}>
          <div className={project.content}>
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
            <Button
              type="primary"
              href={url}
              target="_blank"
              className={`view-more ${project.button}`}
            >
              VIEW WEBSITE <SwapRightOutlined />
            </Button>
          </div>
          <Parallax
            always={false}
            animation={{ translateY: 0, opacity: 1, playScale: [0.2, 0.55] }}
            style={{ transform: "translateY(100px)", opacity: 0 }}
            className={project.image}
          >
            <div
              style={{
                backgroundImage: `url(${src})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
          </Parallax>
        </div>
      </Col>
    );
  }
};

const Project = React.memo(SingleProject);
export default Project;
