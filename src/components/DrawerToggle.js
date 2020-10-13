import React from "react";

export default function DrawerToggle({ click, icon }) {
  if (!icon) {
    return (
      <div className="DrawerToggle" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  } else
    return (
      <div className="DrawerToggle" onClick={click}>
        Menu
      </div>
    );
}
