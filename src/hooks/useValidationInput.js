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
              `Длина поля должна быть не менее ${validators[validator]} символов !`
            );
            return;
          }

          setErrorMessage("");
          break;

        case "cyrillic":
          if (!/^[\u0400-\u04FF]+$/.test(value) && value) {
            setErrorMessage("Доступна только кириллица!");
            return;
          }

          setErrorMessage("");
          break;

        case "cyrillicAndLatin":
          if (!/^([а-яё\s]+|[a-z\s]+)$/iu.test(value) && value) {
            setErrorMessage("Доступна только кириллица или латиница");
            return;
          }

          setErrorMessage("");
          break;

        case "onlyNumberAndTire":
          if (!value.match(/^[\d\-]+$/)) {
            setErrorMessage("Доступны только цифры и тире");
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

        case "onlyNumber":
          if (!value.match(/^\d+$/)) {
            setErrorMessage("Строка должна состоять исключительно из цифр!");
            return;
          }

          setErrorMessage("");
          break;

        case "street":
          if (!value.match(/^[\u0400-\u04FF\0-9\-]+$/)) {
            setErrorMessage(
              "Строка может включать только: кириллицу, тире, цифры"
            );
            return;
          }

          setErrorMessage("");
          break;

        case "houseNumber":
          if (!value.match(/^[1-9][0-9]*([а-я]|(\/[1-9][0-9]*))?$/i)) {
            setErrorMessage(
              "Строка может содержать цифры и только одну букву кириллицы (11а)!"
            );
            return;
          }

          setErrorMessage("");
          break;

        case "buildingNumber":
          if (!value.match(/^(\d?[1-9])[\u0400-\u04FF]?$/) && value) {
            setErrorMessage(
              "Строка может содержать число до двух знаков и одну букву кириллицы!"
            );
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
