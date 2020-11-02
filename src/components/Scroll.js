import React, { useState, useEffect } from "react";

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
        <button
          onClick={scrollTop}
          style={{ position: "fixed", bottom: "0", right: "0" }}
        >
          UP
        </button>
      ) : null}
    </>
  );
});
export default function Scroll() {
  const [showScroll, setShowScroll] = useState(false);
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);
  return (
    <>
      <BackTop show={showScroll} />
    </>
  );
}
