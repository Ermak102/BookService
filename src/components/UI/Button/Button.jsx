import React from "react";
import classes from "./button.module.css";

const Button = ({ children, onClick, disabled }) => {
  return (
    <button
      disabled={disabled}
      onClick={() => onClick()}
      className={classes.button}
    >
      {children}
    </button>
  );
};

export default Button;
