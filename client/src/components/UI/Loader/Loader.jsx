import React from "react";
import classes from "./loader.module.css";

const Loader = ({ backgroundInvisible }) => {
  return (
    <div className={backgroundInvisible ? classes.invisible : classes.wrapper}>
      <div className={classes.loader}></div>
    </div>
  );
};

export default Loader;
