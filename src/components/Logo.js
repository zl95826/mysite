import React from "react";
import logo from "../logo.png";
import { NavLink } from "react-router-dom";
export default function Logo() {
  return (
    <div>
      <NavLink
        to="/"
        style={{ fontWeight: "900", letterSpacing: "1px", fontSize: "18px" }}
      >
        <img
          src={logo}
          alt="logo"
          style={{ height: "50px", marginRight: "8px" }}
        />
        Betty Liu
      </NavLink>
    </div>
  );
}
