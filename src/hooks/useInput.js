import { useState } from "react";
import { useValidationInput } from "./useValidationInput";

export const useInput = (initialValue, validators) => {
  const [value, setValue] = useState(initialValue);
  const [isExit, setExit] = useState(false);

  const valid = useValidationInput(value, validators);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onExitEnter = (e) => {
    setExit(true);
  };

  return {
    value,
    isExit,
    onChange,
    onExitEnter,
    ...valid,
  };
};
