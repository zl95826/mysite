import React from "react";
import Character from "../components/Character";
export default function AppContent() {
  return (
    <>
      <div className="site-layout-content">
        <div className="hello">
          <h1>
            <span className="greeting">Hello,</span>
            <br />
            I'm BETTY <Character />,
            <br />a Front-end Developer & Fullstack Developer
          </h1>
          <h2>
            I love programming, designing, traveling, hiking, and cooking.
          </h2>
        </div>
      </div>
    </>
  );
}
