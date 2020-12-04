import React from "react";
import classes from "./Spinner.module.css";

const spinner = () => (
  <div style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
    <div className={classes.loader}>Loading...</div>
  </div>
);
export default spinner;
