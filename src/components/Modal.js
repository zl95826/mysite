import React from "react";

export default function Modal({ show, children, click }) {
  return (
    <>
      {show ? (
        <div onClick={click} className="modal">
          {children}
        </div>
      ) : null}
    </>
  );
}
