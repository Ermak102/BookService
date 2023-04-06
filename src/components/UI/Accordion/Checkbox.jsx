import React from "react";

const Checkbox = ({ item }) => {
  return (
    <label className="list__item">
      <input
        type="checkbox"
        value={item.name}
        onChange={() => item.checked.onChange()}
      ></input>
      <span className="item__name">{item.name}</span>
    </label>
  );
};

export default Checkbox;
