import React from "react";
import InputLabel from "../UI/Input/InputLabel";
import Message from "./Message/Message";

const RegInput = ({
  field,
  defaultMessage = "* обязательное поле",
  onChange,
  placeholder,
  inputType = "text",
  listName,
}) => {
  return (
    <div className="input__form">
      <Message
        visible={field.isExit && field.errorMessage}
        message={field.errorMessage}
        defaultValue={defaultMessage}
      />
      <InputLabel
        placeholder={placeholder}
        value={field.value}
        onChange={(e) => onChange(e)}
        onBlur={(e) => field.onExitEnter(e)}
        valid={field.isExit ? field.isValid() : "default"}
        type={inputType}
        list={listName}
      />
    </div>
  );
};

export default RegInput;
