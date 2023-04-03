import React from "react";
import List from "./List";

const Accordion = ({ content, type }) => {
  return (
    <div className="accordion">
      <List content={content} type={type} />
    </div>
  );
};

export default Accordion;
