import React, { useState } from "react";

const BackTop = React.memo(({ show }) => {
  console.log("memo test");
  return (
    <>
      {show ? (
        <button style={{ position: "fixed", bottom: "0", right: "0" }}>
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

  window.addEventListener("scroll", checkScrollTop);
  const scrollTop = () => {};
  return (
    <>
      {showScroll ? (
        <button style={{ position: "fixed", bottom: "0", left: "0" }}>
          UP
        </button>
      ) : null}
      <BackTop show={showScroll} />
    </>
  );
}
