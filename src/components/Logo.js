import React from "react";
import logo from "../logo4.png";
import { NavLink } from "react-router-dom";
export default function Logo() {
  return (
    <div>
      <NavLink to="/" style={{ fontWeight: "900", letterSpacing: "1px" }}>
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
