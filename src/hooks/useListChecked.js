import { useState } from "react";

export const useListChecked = (list) => {
  list.forEach((item) => {
    const checked = new useChecked();
    item["checked"] = checked;
  });

  return list;
};

const useChecked = (initialState = false) => {
  const [checked, setChecked] = useState(initialState);

  const onChange = () => {
    setChecked(!checked);
  };

  return {
    checked,
    onChange,
  };
};
