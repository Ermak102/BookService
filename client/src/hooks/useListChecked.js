import { useState } from "react";

export const useListChecked = (list) => {
  list.forEach((item) => {
    const checked = new useChecked();
    item["checked"] = checked;
  });

  return list;
};

const useChecked = (initialState = false) => {
  const [isChecked, setChecked] = useState(initialState);

  const onChange = () => {
    setChecked(!isChecked);
  };

  return {
    isChecked,
    onChange,
  };
};
