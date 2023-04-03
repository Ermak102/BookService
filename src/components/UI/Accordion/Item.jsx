import React, { useState } from "react";
import Checkbox from "./Checkbox";

const Item = ({ title, list, id }) => {
  const [counterClick, setCounter] = useState(1);
  const [visible, setVisible] = useState(true);

  const doubleClick = () => {
    setCounter(counterClick + 1);

    setVisible(true);

    if (counterClick === 2) {
      setVisible(false);
      setCounter(1);
    }
  };

  return (
    <div
      className="accordion__item"
      id={`category${id}`}
      onClick={(e) => doubleClick()}
    >
      <a
        className="accordion__link"
        href={visible ? `#category${id}` : `#category12`}
      >
        <div className="item__title">
          <div className="item__title__name">{title}</div>
          <div className="item__check">
            <div className="round">
              <span className="round__item"></span>
              <span className="round__item"></span>
              <span className="round__item"></span>
              <span className="round__item"></span>
            </div>
          </div>
        </div>
        <div className="item__wrapper">
          {list.map((item, index) => (
            <Checkbox item={item} key={index} />
          ))}
        </div>
      </a>
      <div id="#category12"></div>
    </div>
  );
};

export default Item;
