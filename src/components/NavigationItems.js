import React from "react";
import { NavLink } from "react-router-dom";

function NavigationItem({ link, children }) {
  return (
    <NavLink to={link} exact activeClassName="selected">
      {children}
    </NavLink>
  );
}

export default function NavigationItems() {
  const arr = ["Portfolio", "About"];
  return (
    <ul>
      {arr.map((v) => (
        <li key={v}>
          <NavigationItem link={`/${v.toLowerCase()}`}>{v}</NavigationItem>
        </li>
      ))}
    </ul>
  );
}
