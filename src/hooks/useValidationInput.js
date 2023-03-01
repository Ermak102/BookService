import { useEffect, useState } from "react";

export const useValidationInput = (value, validators) => {
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    for (const validator in validators) {
      switch (validator) {
        case "isEmpty":
          if (value.length === 0) {
            setErrorMessage("Поле не может быть пустым!");
            return;
          }

          setErrorMessage("");
          break;
        case "maxLength":
          if (value.length > validators[validator]) {
            setErrorMessage(
              `Длина поля превышает размер в ${validators[validator]} символов!`
            );
            return;
          }

          setErrorMessage("");
          break;

        case "minLength":
          if (value.length < validators[validator]) {
            setErrorMessage(
              `Длина поля должна быть более ${validators[validator]} символов !`
            );
            return;
          }

          setErrorMessage("");
          break;

        case "cyrillic":
          if (!/^[\u0400-\u04FF]+$/.test(value)) {
            setErrorMessage("Доступна только кириллица!");
            return;
          }

          setErrorMessage("");
          break;

        case "email":
          const email =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

          if (!value.toLowerCase().match(email)) {
            setErrorMessage("Несоответствующий формат !");
            return;
          }

          setErrorMessage("");
          break;

        case "specialSymbol":
          const special = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

          if (special.test(value)) {
            setErrorMessage("Использование спец сиволом - недопустимо!");
            return;
          }

          setErrorMessage("");
          break;

        case "password":
          const isOneUpper = /^[^A-ZA-ЯЁ]*$/;
          const isOneLower = /^[a-zа-я\d]*$/;

          if (isOneUpper.test(value) || isOneLower.test(value)) {
            setErrorMessage(
              "Пароль должен включать не менее одной заглавной и прописной буквы"
            );
            return;
          }

          setErrorMessage("");
          break;

        case "includeNumber":
          const checkNumber = /\d/;

          if (!checkNumber.test(value)) {
            setErrorMessage("Строка должна содеражть хотя бы одну цифру!");
            return;
          }

          setErrorMessage("");
          break;

        default:
          return "";
      }
    }
  }, [value, validators]);

  return {
    errorMessage,
  };
};
