import React from "react";
import { CloseOutlined } from "@ant-design/icons";
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
      <div className="DrawerToggle closeIcon" onClick={click}>
        <CloseOutlined />
      </div>
    );
}
