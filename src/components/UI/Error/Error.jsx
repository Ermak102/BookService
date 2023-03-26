import React from "react";
import classes from "./error.module.css";

const Error = ({ message }) => {
  return <div className={classes.error}>{message === null ? "" : message}</div>;
};

export default Error;
