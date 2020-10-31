import React from "react";
import { GithubFilled, LinkedinFilled, MailFilled } from "@ant-design/icons";
export default function AppFooter() {
  return (
    <>
      <h3>GET IN TOUCH</h3>
      <div className="footer-links">
        <a
          href="https://github.com/zl95826"
          target="_blank"
          id="git"
          rel="noopener noreferrer"
        >
          <GithubFilled />
        </a>
        <a
          href="https://www.linkedin.com/in/zheng-liu-7a477229/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinFilled />
        </a>
        <a
          href="mailto:zl95826@hotmail.com"
          target="_blank"
          id="mail"
          rel="noopener noreferrer"
        >
          <MailFilled />
        </a>
      </div>
    </>
  );
}
