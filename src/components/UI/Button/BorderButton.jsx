import React from "react";
import classes from "./lazer.module.css";

const BorderButton = ({ children, ...props }) => {
  return (
    <button className={classes.btn} {...props}>
      <svg width="200px" height="40px" viewBox="0 0 200 40">
        <polyline points="199,1 199,39 1,39 1,1 199,1" />
        <polyline points="199,1 199,39 1,39 1,1 199,1" />
      </svg>
      <span>{children}</span>
    </button>
  );
};

export default BorderButton;
