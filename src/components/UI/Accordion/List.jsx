import React from "react";
import Item from "./Item";

const List = ({ type, content }) => {
  return (
    <div>
      {type === "list" ? (
        content.map((item, index) => (
          <Item title={item.title} list={item.list} id={index} key={index} />
        ))
      ) : (
        <div className="accordion__content">{content}</div>
      )}
    </div>
  );
};

export default List;
