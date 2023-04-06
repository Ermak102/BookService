import React from "react";
import classes from "./input.module.css";

const InputLabel = (props) => {
  const rootClasses = [classes.inputWithLabel];

  if (props.valid === "success") {
    rootClasses.push(classes.success);
  }

  if (props.valid === "error") {
    rootClasses.push(classes.error);
  }

  return (
    <label className={classes.inputLabel}>
      <input
        {...props}
        onBlur={(e) => {
          if (props?.onBlur) {
            props.onBlur(e);
          }
        }}
        className={rootClasses.join(" ")}
        placeholder="&nbsp;"
      />
      <span className={classes.label}>{props.placeholder}</span>
    </label>
  );
};

export default InputLabel;
