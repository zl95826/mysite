import React from "react";
import { Timeline } from "antd";
export default function Experience() {
  const windowsize =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  if (windowsize > 780) {
    return (
      <Timeline mode="alternate">
        <Timeline.Item label="June 2018 - Present">
          <h3>Freelance Front-end Developer</h3>
          <p>
            I work primarily as a Front-end developer to develop and launch
            multiple projects from scratch, carrying the development of its'
            front-end and back-end codebases.
          </p>
          <p>
            In front-end development, my current toolset includes React, Redux,
            ES6 and the other various frameworks, libraries and technologies
            related to them. I also care about UI design, providing elegant UI
            and graphic design for my clients.
          </p>
          <p>
            In back-end development, my current stack involves NodeJS, MongoDB,
            REST API, and GraphQL.
          </p>
        </Timeline.Item>
        <Timeline.Item label="October 2014 - July 2019">
          <h3>Frontend Web Developer in Globex People LLC </h3>
          <p>
            Created multiple web applications, participating in the whole
            process of their development: UI/UX design, code development,
            testing, deployment and maintenance.
          </p>
          <p>
            I also had to care about things like good planning of UI,
            consistency in design, typography, accessbility and responsive
            design.
          </p>
          <p>
            Main stack: JavaScript, JQuery, HTML, CSS3, Bootstrap, Wordpress,
            PHP and React.
          </p>
          <p>Design tools: Adobe Creative Suite, Balsamiq Mockups, Sketch</p>
        </Timeline.Item>
        <Timeline.Item label="Feb 2014 - Sep 2014">
          <h3>UI/UX Developer Intern in Accenture </h3>
          <p>
            Worked with a lead designer to provide UI/UX solutions, including
            wireframes, flowcharts, and prototypes.
          </p>
          <p>
            Focused on UI design to bring forth a compelling experience that
            coincides with their desired branding. Created and maintain
            websites.
          </p>
        </Timeline.Item>
      </Timeline>
    );
  } else {
    return (
      <Timeline>
        <Timeline.Item>
          <h3>Freelance Front-end Developer</h3>
          <p>
            I work primarily as a Front-end developer to develop and launch
            multiple projects from scratch, carrying the development of its'
            front-end and back-end codebases.
          </p>
          <p>
            In front-end development, my current toolset includes React, Redux,
            ES6 and the other various frameworks, libraries and technologies
            related to them. I also care about UI design, providing elegant UI
            and graphic design for my clients.
          </p>
          <p>
            In back-end development, my current stack involves NodeJS, MongoDB,
            REST API, and GraphQL.
          </p>
        </Timeline.Item>
        <Timeline.Item>
          <h3>Frontend Web Developer in Globex People LLC </h3>
          <p>
            Created multiple web applications, participating in the whole
            process of their development: UI/UX design, code development,
            testing, deployment and maintenance.
          </p>
          <p>
            I also had to care about things like good planning of UI,
            consistency in design, typography, accessbility and responsive
            design.
          </p>
          <p>
            Main stack: JavaScript, JQuery, HTML, CSS3, Bootstrap, Wordpress,
            PHP and React.
          </p>
          <p>Design tools: Adobe Creative Suite, Balsamiq Mockups, Sketch</p>
        </Timeline.Item>
        <Timeline.Item>
          <h3>UI/UX Developer Intern in Accenture </h3>
          <p>
            Worked with a lead designer to provide UI/UX solutions, including
            wireframes, flowcharts, and prototypes.
          </p>
          <p>
            Focused on UI design to bring forth a compelling experience that
            coincides with their desired branding. Created and maintain
            websites.
          </p>
        </Timeline.Item>
      </Timeline>
    );
  }
}
