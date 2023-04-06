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

  const isValid = () => {
    if (valid.errorMessage.length > 0) {
      return "error";
    }

    return "success";
  };

  return {
    value,
    setValue,
    isExit,
    isValid,
    onChange,
    onExitEnter,
    ...valid,
  };
};
