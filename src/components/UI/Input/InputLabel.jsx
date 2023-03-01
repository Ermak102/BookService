import React from "react";
import classes from "./input.module.css";

const InputLabel = (props) => {
  return (
    <label className={classes.inputLabel}>
      <input
        {...props}
        type="text"
        className={classes.inputWithLabel}
        placeholder="&nbsp;"
      />
      <span className={classes.label}>{props.name}</span>
    </label>
  );
};

export default InputLabel;
