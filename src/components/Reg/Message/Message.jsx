import React from "react";
import classes from "./message.module.css";

const Message = ({ message, visible, defaultValue }) => {
  return (
    <div className={classes.message}>
      {visible ? (
        <div className={classes.error}>{message}</div>
      ) : (
        <div className={classes.default}>{defaultValue}</div>
      )}
    </div>
  );
};

export default Message;
