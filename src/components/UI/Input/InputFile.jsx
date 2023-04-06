import React from "react";
import classes from "./inputFile.module.css";

const InputFile = (props) => {
  return (
    <form method="post" encType="multipart/form-data">
      <label className={classes.inputFile}>
        <input {...props} type="file" name="file" />
        <span>Выберите файл</span>
      </label>
    </form>
  );
};

export default InputFile;
