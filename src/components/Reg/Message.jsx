import React from "react";

const Message = ({ message, visible, defaultValue }) => {
  return (
    <div className="message">
      {visible ? (
        <div className="message__error">{message}</div>
      ) : (
        <div className="message__default">{defaultValue}</div>
      )}
    </div>
  );
};

export default Message;
