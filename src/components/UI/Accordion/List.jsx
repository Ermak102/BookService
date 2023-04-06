import React, { useState } from "react";
import Item from "./Item";

const List = ({ type, content }) => {
  const [currentItem, setCurrentItem] = useState(null);
  const [visible, setVisible] = useState(false);

  const test = (id) => {
    if (currentItem === id) {
      setVisible(!visible);
      return;
    }

    setCurrentItem(id);
    setVisible(true);
  };

  return (
    <div>
      {type === "list" ? (
        content.map((item, index) => (
          <Item
            click={(id) => test(id)}
            visible={visible}
            title={item.title}
            list={item.list}
            id={index}
            key={index}
          />
        ))
      ) : (
        <div className="accordion__content">{content}</div>
      )}
    </div>
  );
};

export default List;
