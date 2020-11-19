import React, { useState, useEffect } from "react";
import { ArrowUpOutlined } from "@ant-design/icons";

const BackTop = React.memo(({ show }) => {
  const scrollTop = () => {
    const position = window.pageYOffset;
    if (position > 0) {
      window.scrollTo(0, position - position / 8);
      window.requestAnimationFrame(scrollTop);
    }
  };
  return (
    <>
      {show ? (
        <button onClick={scrollTop} className="backTop">
          <ArrowUpOutlined />
        </button>
      ) : null}
    </>
  );
});
export default function Scroll() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);
  return (
    <>
      <BackTop show={showScroll} />
    </>
  );
}
