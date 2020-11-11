import React from "react";
import logo from "../logo.svg";
import { NavLink } from "react-router-dom";
export default function Logo() {
  return (
    <div>
      <NavLink to="/">
        {/* <img src={logo} alt="logo" style={{ height: "80px" }} /> */}
        BL
      </NavLink>
    </div>
  );
}
