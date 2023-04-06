import { useEffect, useState } from "react";

export const useValidForm = (fields) => {
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(checkValid(fields));
  }, [fields]);

  return isValid;
};

const checkValid = (fields) => {
  const length = Object.keys(fields).length;
  let counter = 0;
  Object.entries(fields).map(([key, value]) => {
    if (value.isValid() === "success") {
      counter++;
    }
  });

  return counter === length;
};
