import React, { useEffect, useState } from "react";
import "../styles/reg.css";
import RegUser from "../components/Reg/RegUser";
import Button from "../components/UI/Button/Button";
import { useInput } from "../hooks/useInput";
import { useValidForm } from "../hooks/useValidForm";

const RegistrationPage = () => {
  const [checked, setChecked] = useState(false);
  const [validForm, setValidForm] = useState(true);

  let surname = useInput("", {
    isEmpty: true,
    maxLength: 50,
    cyrillic: true,
  });
  let name = useInput("", { isEmpty: true, maxLength: 25, cyrillic: true });
  let patronymic = useInput("", { maxLength: 25, cyrillic: true });
  let email = useInput("", { isEmpty: true, email: true });
  let nikName = useInput("", { isEmpty: true, specialSymbol: true });
  let password = useInput("", {
    isEmpty: true,
    minLength: 8,
    specialSymbol: true,
    includeNumber: true,
    password: true,
  });

  const user = {
    surname: surname,
    name: name,
    patronymic: patronymic,
    email: email,
    nikName: nikName,
    password: password,
  };

  const postcode = useInput("", {
    isEmpty: true,
    minLength: 6,
    maxLength: 6,
    onlyNumber: true,
  });
  const city = useInput("", { isEmpty: true, maxLength: 15, cyrillic: true });
  const street = useInput("", { isEmpty: true, maxLength: 25, street: true });
  const houseNumber = useInput("", {
    isEmpty: true,
    houseNumber: true,
    maxLength: 5,
  });
  const buildingNumber = useInput("", {
    buildingNumber: true,
    maxLength: 3,
  });
  const apartmentNumber = useInput("", {
    onlyNumber: true,
    maxLength: 3,
  });

  const address = {
    postcode: postcode,
    city: city,
    street: street,
    houseNumber: houseNumber,
    buildingNumber: buildingNumber,
    apartmentNumber: apartmentNumber,
  };

  const isValidUser = useValidForm(user);
  const isValidAddress = useValidForm(address);

  useEffect(() => {
    setValidForm(!isValidAddress || !isValidUser || !checked);
  }, [isValidUser, isValidAddress, checked]);

  const registration = () => {
    console.log("User", user);
    console.log("Address", address);
  };

  return (
    <div className="reg">
      <div className="container">
        <div className="reg__content">
          <RegUser user={user} address={address} />
          <div className="reg__confirmation">
            <input
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
            <div className="confirmation__title">
              Нажимая эту кнопку, вы подтверждаете... и даёте согласие
            </div>
          </div>
          <div className="reg__btn">
            <Button onClick={() => registration()} disabled={validForm}>
              Зарегистрироваться
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
